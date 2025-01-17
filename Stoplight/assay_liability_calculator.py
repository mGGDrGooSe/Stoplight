from rdkit import Chem, DataStructs
from rdkit.Chem import AllChem
from rdkit.Chem.Draw import SimilarityMaps
from scipy.spatial.distance import cdist
import numpy as np

import glob
import os
import pickle
import io
import matplotlib.pyplot as plt

from Stoplight.constants import MODULE_DIR

# god hates me so in my version of python I cannot supress these damn user warning so I do this nuclear option instead
import warnings
def warn(*args, **kwargs):
    pass
warnings.warn = warn


MODEL_DICT = {
    'Firefly_Luciferase_counter_assay_training_set_curated_model.pkl': 'Firefly Luciferase interference',
    'Nano_Luciferase_counter_assay_training_set_curated_model.pkl': 'Nano Luciferase interference',
    'Redox_training_set_curated_model.pkl': 'Redox interference',
    'Thiol_training_set_curated_model.pkl': 'Thiol interference',
    'agg_betalac_model.pkl': 'AmpC β-lactamase aggregation',
    'agg_cruzain_model.pkl': 'Cysteine protease cruzain aggregation'
}

MODEL_DICT_INVERSE = {val: pickle.load(open(os.path.join(MODULE_DIR, "models", "assay_inter", key), "rb")) for key, val in MODEL_DICT.items()}


OUTCOME_DICT = {
    'Firefly Luciferase interference': {
        1: "Possible Interference",
        0: "No Interference"
    },
    'Nano Luciferase interference': {
        1: "Possible Interference",
        0: "No Interference"
    },
    'Redox interference': {
        1: "Possible Interference",
        0: "No Interference"
    },
    'Thiol interference': {
        1: "Possible Interference",
        0: "No Interference"
    },
    'AmpC β-lactamase aggregation': {
        1: "Putative aggregator",
        0: "Non-aggregator"
    },
    'Cysteine protease cruzain aggregation': {
        1: "Putative aggregator",
        0: "Non-aggregator"
    }
}


def run_prediction(model, model_data, smiles, calculate_ad=True):
    fp = np.zeros((2048, 1))
    _fp = AllChem.GetMorganFingerprintAsBitVect(Chem.MolFromSmiles(smiles), radius=3, nBits=2048)
    DataStructs.ConvertToNumpyArray(_fp, fp)

    pred_proba = model.predict_proba(fp.reshape(1, -1))[:, 1]
    pred = 1 if pred_proba > 0.5 else 0

    if pred == 0:
        pred_proba = 1-pred_proba

    if calculate_ad:
        ad = model_data["D_cutoff"] > np.min(cdist(model_data['Descriptors'].to_numpy(), fp.reshape(1, -1)))
        return pred, pred_proba, ad
    return pred, pred_proba, None


def get_prob_map(model, smiles):
    def get_fp(mol, idx):
        fps = np.zeros((2048, 1))
        _fps = SimilarityMaps.GetMorganFingerprint(mol, idx, radius=3, nBits=2048)
        DataStructs.ConvertToNumpyArray(_fps, fps)
        return fps

    def get_proba(fps):
        return float(model.predict_proba(fps.reshape(1, -1))[:, 1])

    mol = Chem.MolFromSmiles(smiles)
    fig, _ = SimilarityMaps.GetSimilarityMapForModel(mol, get_fp, get_proba)
    imgdata = io.StringIO()
    fig.savefig(imgdata, format='svg')
    imgdata.seek(0)  # rewind the data
    plt.savefig(imgdata, format="svg", bbox_inches="tight")

    return imgdata.getvalue()


def multiclass_ranking(ordered_preds):
    idx = 0
    one_detected = False
    for i, o in enumerate(ordered_preds):
        if int(o) == 1:
            if not one_detected:
                idx = i+1
                one_detected = True
        if int(o) == 0:
            if one_detected:
                idx = 0
                return idx
    return idx if idx != 0 else len(ordered_preds)+1


def main(smiles, calculate_ad=True, make_prop_img=False, **kwargs):

    # print(smiles)

    def default(key, d):
        if key in d.keys():
            return d[key]
        else:
            return False

    values = {}

    for model in MODEL_DICT_INVERSE.keys():
        if not default(model, kwargs):
            continue
        m = MODEL_DICT_INVERSE[model]

        # for now I have no AD data so we are just doing this
        pred, pred_proba, ad = run_prediction(m, None, smiles, calculate_ad=False)

        svg_str = ""
        if make_prop_img:
            svg_str = get_prob_map(m, smiles)

        values[model] = [1, OUTCOME_DICT[model][int(pred)], str(round(float(pred_proba) * 100, 2)) + "%", ""]

    return values
