$wnd.jsme.runAsyncCallback1('var j5="Assignment of aromatic double bonds failed";function k5(a,b){var c;c=a.A[b];return 3<=c&&4>=c||11<=c&&13>=c||19<=c&&31>=c||37<=c&&51>=c||55<=c&&84>=c||87<=c&&103>=c}function $(a,b){var c,d;c=b;for(d=0;0!=b;)0==a.c&&(a.e=(a.a[++a.d]&63)<<11,a.c=6),d|=(65536&a.e)>>16-c+b,a.e<<=1,--b,--a.c;return d}function l5(a,b,c){a.c=6;a.d=c;a.a=b;a.e=(b[a.d]&63)<<11}function m5(a,b){var c,d;c=~~(b/2);(d=a>=c)&&(a-=c);c=~~(b/32)*a/(c-a);return d?-c:c}function n5(){this.b=!0}x(24,1,{},n5);_.a=null;_.b=!1;\n_.c=0;_.d=0;_.e=0;_.f=null;function o5(a,b){var c,d,e;1==a.b.E[b]&&Rn(a.b,b,2);for(d=0;2>d;++d){c=D(a.b,d,b);br(a.b,c,!1);for(e=0;e<a.b.f[c];++e)a.a[Tn(a.b,c,e)]=!1}}function p5(a){var b,c,d,e,f,g,h;do{h=!1;for(c=0;c<a.b.d;++c)if(a.a[c]){f=!1;for(e=0;2>e;++e){b=!1;d=D(a.b,e,c);for(g=0;g<a.b.f[d];++g)if(c!=Tn(a.b,d,g)&&a.a[Tn(a.b,d,g)]){b=!0;break}if(!b){f=!0;break}}f&&(h=!0,o5(a,c))}}while(h)}function q5(){}x(29,1,{},q5);_.a=null;_.b=null;\nfunction r5(a,b,c,d){a.b||(4==a.i||3==a.i&&-1!=a.c?a.b=!0:(a.j[a.i]=d,a.f[a.i]=b,a.k[a.i]=c,++a.i))}\nfunction s5(a,b){var c,d,e,f;if(a.b)return 3;-1!=a.c&&(a.c=b[a.c]);for(e=0;e<a.i;++e)2147483647!=a.f[e]&&(a.f[e]=b[a.f[e]]);if(-1==a.c&&0==a.d){d=2147483647;f=-1;for(e=0;e<a.i;++e)d>a.k[e]&&(d=a.k[e],f=e);a.c=a.f[f];for(e=f+1;e<a.i;++e)a.f[e-1]=a.f[e],a.k[e-1]=a.k[e],a.j[e-1]=a.j[e];--a.i}f=(-1==a.c?0:1)+a.d+a.i;if(4<f||3>f)return 3;c=-1==a.c&&1==a.d||-1!=a.c&&vr(a.n.b,a.c);d=-1;for(e=0;e<a.i;++e)if(a.j[e]){if(-1!=d||c)return 3;d=e}f=!1;if(-1!=d)for(e=0;e<a.i;++e)!a.j[e]&&a.f[d]<a.f[e]&&(f=!f);d=\n!1;if(-1!=a.c&&!c)for(e=0;e<a.i;++e)a.c<a.f[e]&&(d=!d);e=a.f;c=a.k;var g,h,j;h=!1;for(g=1;g<a.i;++g)for(j=0;j<g;++j)e[j]>e[g]&&(h=!h),c[j]>c[g]&&(h=!h);return a.e^h^d^f?2:1}function t5(a,b,c,d,e,f){this.n=a;0!=d&&1!=d?this.b=!0:(this.a=b,this.c=c,this.d=d,this.e=f,this.i=0,this.j=C(Qn,Km,-1,4,2),this.f=C(B,w,-1,4,1),this.k=C(B,w,-1,4,1),-1!=c&&1==d&&(r5(this,2147483647,e,!0),this.d=0))}x(30,1,{},t5);_.a=0;_.b=!1;_.c=0;_.d=0;_.e=!1;_.f=null;_.i=0;_.j=null;_.k=null;_.n=null;\nfunction u5(a){Pn(a,15);if(a.b){var a=a.b,b;for(b=0;b<a.K.c;++b)if(0==(a.K.s[b]&67108864)&&3==a.V[b]){var c=a.K;c.s[b]|=67108864;c.N&=3}for(b=0;b<a.K.d;++b)3==a.k[b]&&2==Xn(a.K,b)&&Rn(a.K,b,26)}}function v5(){this.e=1}x(33,1,{},v5);\nfunction w5(a){var b,c;if(null==a||0==a.length||0==Ur(a).length)return YV(new CL,n,!0);c=new hs;var d=new q5,e=SS(Ur(a)),f,g,h,j,l,m,q,r,t,z,v,s,F,G,H,u,ea,da,T,ja,Ga,wc,Ta,Eb,M,jb,xa,fa,ba,ra,Fa,Qb,S,Ja,bc,dd,Ha;d.b=c;Lq(d.b);Ta=null;j=C(B,w,-1,64,1);j[0]=-1;jb=C(B,w,-1,64,1);xa=C(B,w,-1,64,1);for(F=0;64>F;++F)jb[F]=-1;g=M=0;fa=Eb=ra=!1;m=0;ba=e.length;for(l=1;32>=e[M];)++M;for(;M<ba;)if(Fa=e[M++]&65535,x5(Fa)||42==Fa){h=0;v=-1;G=wc=H=!1;if(ra)82==Fa&&PK(e[M]&65535)?(da=null!=String.fromCharCode(e[M+\n1]&65535).match(/\\d/)?2:1,h=nr(Mq(e,M-1,1+da)),M+=da):(u=String.fromCharCode(e[M]&65535).toLowerCase().charCodeAt(0)==(e[M]&65535)&&x5(e[M]&65535)?2:1,h=nr(Mq(e,M-1,u)),M+=u-1,v=0),64==e[M]&&(++M,64==e[M]&&(G=!0,++M),wc=!0),72==e[M]&&(++M,v=1,PK(e[M]&65535)&&(v=e[M]-48,++M));else if(42==Fa)h=6,H=!0;else switch(String.fromCharCode(Fa).toUpperCase().charCodeAt(0)){case 66:M<ba&&114==e[M]?(h=35,++M):h=5;break;case 67:M<ba&&108==e[M]?(h=17,++M):h=6;break;case 70:h=9;break;case 73:h=53;break;case 78:h=\n7;break;case 79:h=8;break;case 80:h=15;break;case 83:h=16}if(0==h)throw new So("SmilesParser: unknown element label found");f=Gq(d.b,h);H?(fa=!0,er(d.b,f,1)):br(d.b,f,String.fromCharCode(Fa).toLowerCase().charCodeAt(0)==Fa&&x5(Fa));if(-1!=v&&1!=h){q=C(sp,dn,-1,1,1);q[0]=v<<24>>24;var Ma=d.b,db=f,Fc=q;null!=Fc&&0==Fc.length&&(Fc=null);null==Fc?null!=Ma.r&&(Ma.r[db]=null):(null==Ma.r&&(Ma.r=C(Eq,o,3,Ma.J,0)),Ma.r[db]=Fc)}s=j[m];-1!=j[m]&&128!=l&&Kq(d.b,f,j[m],l);l=1;j[m]=f;0!=g&&(cr(d.b,f,g),g=0);(ja=\n!Ta?null:Kr(Ta,iO(s)))&&r5(ja,f,M,1==h);wc&&(!Ta&&(Ta=new bs),cs(Ta,iO(f),new t5(d,f,s,v,M,G)))}else if(46==Fa)l=128;else if(61==Fa)l=2;else if(35==Fa)l=4;else if(PK(Fa))if(T=Fa-48,ra){for(;M<ba&&PK(e[M]&65535);)T=10*T+e[M]-48,++M;g=T}else{Eb&&M<ba&&PK(e[M]&65535)&&(T=10*T+e[M]-48,++M);Eb=!1;if(64<=T)throw new So("SmilesParser: ringClosureAtom number out of range");if(-1==jb[T])jb[T]=j[m],xa[T]=M-1;else{if(jb[T]==j[m])throw new So("SmilesParser: ring closure to same atom");Ta&&((ja=Kr(Ta,iO(jb[T])))&&\nr5(ja,j[m],xa[T],!1),(ja=Kr(Ta,iO(j[m])))&&r5(ja,jb[T],M-1,!1));Kq(d.b,j[m],jb[T],l);jb[T]=-1}l=1}else if(43==Fa){if(!ra)throw new So("SmilesParser: \'+\' found outside brackets");for(r=1;43==e[M];)++r,++M;1==r&&PK(e[M]&65535)&&(r=e[M]-48,++M);Wq(d.b,j[m],r)}else if(45==Fa){if(ra){for(r=-1;45==e[M];)--r,++M;-1==r&&PK(e[M]&65535)&&(r=48-e[M],++M);Wq(d.b,j[m],r)}}else if(40==Fa){if(-1==j[m])throw new So("Smiles with leading parenthesis are not supported");j[m+1]=j[m];++m}else if(41==Fa)--m;else if(91==\nFa){if(ra)throw new So("SmilesParser: nested square brackets found");ra=!0}else if(93==Fa){if(!ra)throw new So("SmilesParser: closing bracket without opening one");ra=!1}else if(37==Fa)Eb=!0;else if(58==Fa)if(ra){for(ea=0;PK(e[M]&65535);)ea=10*ea+e[M]-48,++M;d.b.u[j[m]]=ea}else l=64;else if(47==Fa)l=17;else if(92==Fa)l=9;else throw new So("SmilesParser: unexpected character found: \'"+String.fromCharCode(Fa)+gb);if(1!=l)throw new So("SmilesParser: dangling open bond");for(F=0;64>F;++F)if(-1!=jb[F])throw new So("SmilesParser: dangling ring closure");\nvar ua=d.b,Za,aa,za,W,tb,X;X=C(B,w,-1,ua.o,1);W=C(Qn,Km,-1,ua.o,2);for(aa=0;aa<ua.p;++aa)for(za=0;2>za;++za)vr(ua,ua.B[za][aa])&&!vr(ua,ua.B[1-za][aa])&&(W[ua.B[za][aa]]=!0);for(tb=ua.o-1;0<=tb&&W[tb];)X[tb]=tb,--tb;for(Za=0;Za<=tb;++Za)if(W[Za]){X[Za]=tb;X[tb]=Za;for(--tb;0<=tb&&W[tb];)X[tb]=tb,--tb}else X[Za]=Za;d.b.M=!0;Pn(d.b,1);for(f=0;f<d.b.o;++f)if(null!=(null==c.r?null:null==c.r[f]?null:Mq(c.r[f],0,c.r[f].length))&&!Tq(d.b,f))if(z=(null==d.b.r?null:d.b.r[f])[0],d.b.A[f]<(Oo(),Dq).length&&\nnull!=Dq[d.b.A[f]]){t=!1;Qb=zp(d.b,f);Qb-=Bp(d.b,f,Qb);for(Ja=Dq[d.b.A[f]],bc=0,dd=Ja.length;bc<dd;++bc)if(S=Ja[bc],Qb<=S){t=!0;S!=Qb+z&&Vq(d.b,f,Qb+z);break}t||Vq(d.b,f,Qb+z)}var O,Xb,Yb,td;for(O=0;O<d.b.c;++O)if(7==d.b.A[O]&&0==d.b.q[O]&&3<zp(d.b,O)&&0<d.b.k[O])for(td=0;td<d.b.f[O];++td)if(Xb=Un(d.b,O,td),Yb=Tn(d.b,O,td),1<Xn(d.b,Yb)&&pr(d.b.A[Xb])){4==d.b.E[Yb]?Rn(d.b,Yb,2):Rn(d.b,Yb,1);Wq(d.b,O,d.b.q[O]+1);Wq(d.b,Xb,d.b.q[Xb]-1);break}var nd,pb,oa,Vb,sa,R,pa,Gc,Cd,ud,ed,hb,Qa,Fb,kb,Rb;Pn(d.b,\n1);d.a=C(Qn,Km,-1,d.b.d,2);for(oa=0;oa<d.b.d;++oa)64==d.b.E[oa]&&(Rn(d.b,oa,1),d.a[oa]=!0);Rb=new Sn(d.b,3);Gc=C(Qn,Km,-1,Rb.i.c,2);for(Qa=0;Qa<Rb.i.c;++Qa){Fb=$n(Rb.i,Qa);Gc[Qa]=!0;for(pa=0;pa<Fb.length;++pa)if(!Tq(d.b,Fb[pa])){Gc[Qa]=!1;break}if(Gc[Qa]){kb=$n(Rb.j,Qa);for(pa=0;pa<kb.length;++pa)d.a[kb[pa]]=!0}}for(oa=0;oa<d.b.d;++oa)if(!d.a[oa]&&0!=Rb.b[oa]&&Tq(d.b,D(d.b,0,oa))&&Tq(d.b,D(d.b,1,oa)))a:{var qc=d,rc=oa,xc=void 0,K=void 0,Ka=void 0,Qc=void 0,Ib=void 0,qb=void 0,nb=void 0,Xc=void 0,\nDd=void 0,od=void 0,Yc=void 0,ka=void 0,yc=void 0,Xc=C(B,w,-1,qc.b.c,1),qb=C(B,w,-1,qc.b.c,1),nb=C(B,w,-1,qc.b.c,1),Dd=C(B,w,-1,qc.b.c,1),xc=D(qc.b,0,rc),K=D(qc.b,1,rc);qb[0]=xc;qb[1]=K;nb[0]=-1;nb[1]=rc;Xc[xc]=1;Xc[K]=2;Dd[xc]=-1;Dd[K]=xc;for(od=Ib=1;Ib<=od&&15>Xc[qb[Ib]];){yc=qb[Ib];for(Yc=0;Yc<qc.b.f[yc];++Yc)if(Ka=Un(qc.b,yc,Yc),Ka!=Dd[yc]){Qc=Tn(qc.b,yc,Yc);if(Ka==xc){nb[0]=Qc;for(ka=0;ka<=od;++ka)qc.a[nb[Yc]]=!0;break a}Tq(qc.b,Ka)&&0==Xc[Ka]&&(++od,qb[od]=Ka,nb[od]=Qc,Xc[Ka]=Xc[yc]+1,Dd[Ka]=\nyc)}++Ib}}Pn(d.b,3);for(Qa=0;Qa<Rb.i.c;++Qa)if(Gc[Qa]){Fb=$n(Rb.i,Qa);for(pa=0;pa<Fb.length;++pa){var Lc;var ub=d,Ba=Fb[pa],zc=void 0;16==ub.b.A[Ba]&&0>=ub.b.q[Ba]||6==ub.b.A[Ba]&&0!=ub.b.q[Ba]||!Tq(ub.b,Ba)?Lc=!1:(zc=null==Hp(ub.b,Ba)?0:(null==ub.b.r?null:ub.b.r[Ba])[0],Lc=1>Rq(ub.b,Ba)-zp(ub.b,Ba)-zc||5!=ub.b.A[Ba]&&6!=ub.b.A[Ba]&&7!=ub.b.A[Ba]&&8!=ub.b.A[Ba]&&15!=ub.b.A[Ba]&&16!=ub.b.A[Ba]&&33!=ub.b.A[Ba]&&34!=ub.b.A[Ba]?!1:!0);if(!Lc){br(d.b,Fb[pa],!1);for(ud=0;ud<d.b.f[Fb[pa]];++ud)d.a[Tn(d.b,\nFb[pa],ud)]=!1}}}p5(d);for(Qa=0;Qa<Rb.i.c;++Qa)if(Gc[Qa]&&6==$n(Rb.j,Qa).length){kb=$n(Rb.j,Qa);Cd=!0;for(Vb=0,sa=kb.length;Vb<sa;++Vb)if(oa=kb[Vb],!d.a[oa]){Cd=!1;break}Cd&&(o5(d,kb[0]),o5(d,kb[2]),o5(d,kb[4]),p5(d))}for(hb=5;4<=hb;--hb){do{ed=!1;for(oa=0;oa<d.b.d;++oa)if(d.a[oa]){for(pa=nd=0;2>pa;++pa){R=D(d.b,pa,oa);for(ud=0;ud<d.b.f[R];++ud)d.a[Tn(d.b,R,ud)]&&++nd}if(nd==hb){o5(d,oa);p5(d);ed=!0;break}}}while(ed)}for(oa=0;oa<d.b.d;++oa)if(d.a[oa])throw new So(j5);for(pb=0;pb<d.b.c;++pb)if(Tq(d.b,\npb))throw new So(j5);d.b.r=null;d.b.M=!1;var sc,vb,lc,yb,fd,Rc,Zc,Ac,Xa,mc,Mc;Pn(d.b,3);Xa=!1;mc=C(B,w,-1,2,1);Mc=C(B,w,-1,2,1);Ac=C(B,w,-1,2,1);for(vb=0;vb<d.b.d;++vb)if(!Do(d.b,vb)&&2==d.b.E[vb]){for(yb=0;2>yb;++yb){mc[yb]=-1;Ac[yb]=-1;sc=D(d.b,yb,vb);for(Zc=0;Zc<d.b.f[sc];++Zc)lc=Tn(d.b,sc,Zc),lc!=vb&&(17==d.b.E[lc]||9==d.b.E[lc]?(mc[yb]=Un(d.b,sc,Zc),Mc[yb]=lc):Ac[yb]=Un(d.b,sc,Zc));if(-1==mc[yb])break}if(-1!=mc[0]&&-1!=mc[1]){Rc=d.b.E[Mc[0]]!=d.b.E[Mc[1]];fd=!1;for(yb=0;2>yb;++yb)-1!=Ac[yb]&&\nAc[yb]<mc[yb]&&(fd=!fd);jr(d.b,vb,Rc^fd?2:1,!1);Xa=!0}}for(vb=0;vb<d.b.d;++vb)(17==d.b.E[vb]||9==d.b.E[vb])&&Rn(d.b,vb,1);Xa&&(d.b.N|=4);Cs(new v5,d.b);if(Ta){for(Ga=y5((Ha=new TT(Ta),new z5(Ta,Ha)));mT(Ga.a.a);)ja=(Ga.a.b=$p(Ga.a.a)).Ki(),dr(d.b,ja.a,s5(ja,X),!1);d.b.N|=4}wr(d.b);u5(d.b);fa&&lr(d.b,!0);b=new Er(c);return nx(b.a.a)}function x5(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}function y5(a){a=new WT(a.b.a);return new A5(a)}function z5(a,b){this.a=a;this.b=b}x(638,626,{},z5);\n_.Hi=function(a){a:{var b,c;for(c=new WT((new TT(this.a)).a);mT(c.a);)if(b=c.b=$p(c.a),b=b.Ki(),null==a?null==b:ew(a,b)){a=!0;break a}a=!1}return a};_.$e=function(){return y5(this)};_.tg=function(){return this.b.a.c};_.a=null;_.b=null;function A5(a){this.a=a}x(639,1,{},A5);_.ze=function(){return mT(this.a.a)};_.Ae=function(){return(this.a.b=$p(this.a.a)).Ki()};_.Be=function(){VT(this.a)};_.a=null;function B5(){AT();this.a=6122;this.b=12230397}x(655,1,{},B5);x(708,598,nn);\n_.de=function(){var a,b,c,d,e;a=b=d=null;if(this.b.a==(sO(),tO)&&this.b.i==(uO(),vO))try{var f=this.b.b,g,h,j;j=null;h=new hs;Pr(new es,h,new GJ(new KJ(f)))&&(g=new Er(h),j=nx(g.a.a));b=j;if(null==b)throw new So("V3000 read failed.");a=Jk;this.a.Mc.a="V3000 conversion provided by OpenChemLib"}catch(l){if(l=Fo(l),E(l,101))c=l,d=c.be();else throw l;}else if(this.b.a==OU)try{var m=this.b.b,q,r,t,z,v,s,F;b=-1!=m.indexOf(zd)?(q=QS(m,zd),r=3<=q.length&&0<q[2].length,t=2<=q.length&&0<q[1].length,z=w5(q[0]),\nv=r?w5(q[2]):w5(n),s=t?w5(q[1]):w5(n),F=n,F+=Ya,F+=lP(1,3)+lP(1,3),t&&(F+=lP(1,3)),F+=ga,F+=Va+z,F+=Va+v,t&&(F+=Va+s),F):w5(m);this.b.f==(pO(),yO)?a="readSMIRKS":this.b.f==LU&&(a="readSMILES");this.a.Mc.a="SMILES conversion provided by OpenChemLib"}catch(G){if(G=Fo(G),E(G,101))c=G,d="SMILES parsing error:"+c.be();else throw G;}else if(d="Invalid or unsupported input",this.a.cd&&!this.b.d)try{var H,u=new n5,ea=Ur(this.b.b),da;if(null==ea||0==ea.length)da=null;else{var T=SS(ea),ja,Ga,wc,Ta,Eb;if(null==\nT)da=null;else{l5(u,T,0);ja=$(u,4);Ta=$(u,4);8<ja&&(ja=Ta);Ga=$(u,ja);wc=$(u,Ta);Eb=new Wr(Ga,wc);var M=null,jb,xa,fa,ba,ra,Fa,Qb,S,Ja,bc,dd,Ha,Ma,db,Fc,ua,Za,aa,za,W,tb,X,O,Xb,Yb,td,nd,pb,oa,Vb,sa,R,pa,Gc,Cd,ud,ed,hb,Qa,Fb,kb,Rb,qc,rc,xc,K,Ka,Qc,Ib,qb,nb,Xc,Dd,od,Yc,ka,yc,Lc,ub,Ba,zc,sc,vb,lc,yb,fd,Rc,Zc,Ac,Xa,mc,Mc;fd=8;u.f=Eb;Lq(u.f);if(!(null==T||0==T.length))if(null!=M&&0==M.length&&(M=null),l5(u,T,0),fa=$(u,4),ua=$(u,4),8<fa&&(fd=fa,fa=ua),0==fa)lr(u.f,1==$(u,1));else{ba=$(u,fa);ra=$(u,ua);\nYc=$(u,fa);ub=$(u,fa);Lc=$(u,fa);Yb=$(u,fa);for(S=0;S<ba;++S)Gq(u.f,6);for(K=0;K<Yc;++K)Jq(u.f,$(u,fa),7);for(K=0;K<ub;++K)Jq(u.f,$(u,fa),8);for(K=0;K<Lc;++K)Jq(u.f,$(u,fa),$(u,8));for(K=0;K<Yb;++K)Wq(u.f,$(u,fa),$(u,4)-8);td=1+ra-ba;pa=$(u,4);Fc=0;fr(u.f,0,0);gr(u.f,0,0);hr(u.f,0,0);Gc=null!=M&&39<=M[0];Mc=Xa=Zc=yb=0;Vb=oa=!1;Gc&&(M.length>2*ba-2&&39==M[2*ba-2]||M.length>3*ba-3&&39==M[3*ba-3]?(Vb=!0,Ka=(oa=M.length==3*ba-3+9)?3*ba-3:2*ba-2,db=86*(M[Ka+1]-40)+M[Ka+2]-40,yb=Math.pow(10,db/2E3-1),Ka+=\n2,Rc=86*(M[Ka+1]-40)+M[Ka+2]-40,Zc=Math.pow(10,Rc/1500-1),Ka+=2,Ac=86*(M[Ka+1]-40)+M[Ka+2]-40,Xa=Math.pow(10,Ac/1500-1),oa&&(Ka+=2,mc=86*(M[Ka+1]-40)+M[Ka+2]-40,Mc=Math.pow(10,mc/1500-1))):oa=M.length==3*ba-3);u.b&&oa&&(M=null,Gc=!1);for(K=1;K<ba;++K)Cd=$(u,pa),0==Cd?(Gc&&(fr(u.f,K,u.f.G[0].a+8*(M[2*K-2]-83)),gr(u.f,K,u.f.G[0].b+8*(M[2*K-1]-83)),oa&&hr(u.f,K,u.f.G[0].c+8*(M[2*ba-3+K]-83))),++td):(Fc+=Cd-1,Gc&&(fr(u.f,K,mo(u.f,Fc)+M[2*K-2]-83),gr(u.f,K,no(u.f,Fc)+M[2*K-1]-83),oa&&hr(u.f,K,oo(u.f,Fc)+\n(M[2*ba-3+K]-83))),Kq(u.f,Fc,K,1));for(K=0;K<td;++K)Kq(u.f,$(u,fa),$(u,fa),1);Ib=C(Qn,Km,-1,ra,2);for(aa=0;aa<ra;++aa)switch(tb=$(u,2),tb){case 0:k5(u.f,D(u.f,0,aa))||k5(u.f,D(u.f,1,aa))?Rn(u.f,aa,32):Ib[aa]=!0;break;case 2:Rn(u.f,aa,2);break;case 3:Rn(u.f,aa,4)}xa=$(u,fa);for(K=0;K<xa;++K)if(S=$(u,fa),8==fd)Ba=$(u,2),3==Ba?(Yq(u.f,S,1,0),dr(u.f,S,1,!1)):dr(u.f,S,Ba,!1);else switch(Ba=$(u,3),Ba){case 4:dr(u.f,S,1,!1);Yq(u.f,S,1,$(u,3));break;case 5:dr(u.f,S,2,!1);Yq(u.f,S,1,$(u,3));break;case 6:dr(u.f,\nS,1,!1);Yq(u.f,S,2,$(u,3));break;case 7:dr(u.f,S,2,!1);Yq(u.f,S,2,$(u,3));break;default:dr(u.f,S,Ba,!1)}8==fd&&0==$(u,1)&&(u.f.I=!0);jb=$(u,ua);for(K=0;K<jb;++K)if(aa=$(u,ua),1==u.f.E[aa])switch(Ba=$(u,3),Ba){case 4:jr(u.f,aa,1,!1);ir(u.f,aa,1,$(u,3));break;case 5:jr(u.f,aa,2,!1);ir(u.f,aa,1,$(u,3));break;case 6:jr(u.f,aa,1,!1);ir(u.f,aa,2,$(u,3));break;case 7:jr(u.f,aa,2,!1);ir(u.f,aa,2,$(u,3));break;default:jr(u.f,aa,Ba,!1)}else jr(u.f,aa,$(u,2),!1);lr(u.f,1==$(u,1));Qb=null;for(yc=0;1==$(u,1);)switch(R=\nyc+$(u,4),R){case 0:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),er(u.f,S,2048);break;case 1:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),Dd=$(u,8),cr(u.f,S,Dd);break;case 2:ka=$(u,ua);for(K=0;K<ka;++K)aa=$(u,ua),Rn(u.f,aa,64);break;case 3:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),er(u.f,S,4096);break;case 4:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),lc=$(u,4)<<3,er(u.f,S,lc);break;case 5:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),Fa=$(u,2)<<1,er(u.f,S,Fa);break;case 6:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),er(u.f,S,1);break;\ncase 7:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),rc=$(u,4)<<7,er(u.f,S,rc);break;case 8:ka=$(u,fa);for(K=0;K<ka;++K){S=$(u,fa);dd=$(u,4);Ja=C(B,w,-1,dd,1);for(qb=0;qb<dd;++qb)bc=$(u,8),Ja[qb]=bc;var vd=u.f,Zb=S,cc=Ja;null==vd.t&&(vd.t=C(to,Um,91,vd.J,0));null!=cc&&bp(cc);vd.t[Zb]=cc;vd.N=0;vd.H=!0}break;case 9:ka=$(u,ua);for(K=0;K<ka;++K)aa=$(u,ua),lc=$(u,2)<<4,kr(u.f,aa,lc);break;case 10:ka=$(u,ua);for(K=0;K<ka;++K)aa=$(u,ua),X=$(u,4),kr(u.f,aa,X);break;case 11:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),\ner(u.f,S,8192);break;case 12:ka=$(u,ua);for(K=0;K<ka;++K)aa=$(u,ua),O=$(u,8)<<6,kr(u.f,aa,O);break;case 13:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),zc=$(u,3)<<14,er(u.f,S,zc);break;case 14:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),od=$(u,5)<<17,er(u.f,S,od);break;case 15:yc=16;break;case 16:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),vb=$(u,3)<<22,er(u.f,S,vb);break;case 17:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),Vq(u.f,S,$(u,4));break;case 18:ka=$(u,fa);Xc=$(u,4);for(K=0;K<ka;++K){S=$(u,fa);sa=$(u,Xc);nb=C(sp,\ndn,-1,sa,1);for(qb=0;qb<sa;++qb)nb[qb]=$(u,7)<<24>>24;var wd=u.f,Bc=S,gd=Mq(nb,0,nb.length),Hc=void 0;if(null!=gd)if(0==gd.length)gd=null;else if(Hc=nr(gd),0!=Hc&&Q(gd,Aq[Hc])||Q(gd,Ad))Jq(wd,Bc,Hc),gd=null;null==gd?null!=wd.r&&(wd.r[Bc]=null):(null==wd.r&&(wd.r=C(Eq,o,3,wd.J,0)),wd.r[Bc]=SS(gd))}break;case 19:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),Xb=$(u,3)<<25,er(u.f,S,Xb);break;case 20:ka=$(u,ua);for(K=0;K<ka;++K)aa=$(u,ua),vb=$(u,3)<<14,kr(u.f,aa,vb);break;case 21:ka=$(u,fa);for(K=0;K<ka;++K)S=\n$(u,fa),$q(u.f,S,$(u,2)<<4);break;case 22:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),er(u.f,S,268435456);break;case 23:ka=$(u,ua);for(K=0;K<ka;++K)aa=$(u,ua),kr(u.f,aa,131072);break;case 24:ka=$(u,ua);for(K=0;K<ka;++K)aa=$(u,ua),Fa=$(u,2)<<18,kr(u.f,aa,Fa);break;case 25:for(K=0;K<ba;++K)if(1==$(u,1)){var yf=u.f;yf.s[K]|=512}break;case 26:ka=$(u,ua);Qb=C(B,w,-1,ka,1);for(K=0;K<ka;++K)Qb[K]=$(u,ua);break;case 27:ka=$(u,fa);for(K=0;K<ka;++K)S=$(u,fa),er(u.f,S,536870912)}On(new ao(u.f),Ib);if(null!=Qb)for(za=\n0,W=Qb.length;za<W;++za)aa=Qb[za],Rn(u.f,aa,2==u.f.E[aa]?4:2);nd=0;if(null==M&&T.length>u.d+1&&(32==T[u.d+1]||9==T[u.d+1]))M=T,nd=u.d+2;if(null!=M)try{if(33==M[nd]||35==M[nd]){l5(u,M,nd+1);oa=1==$(u,1);Vb=1==$(u,1);sc=2*$(u,4);Za=1<<sc;aa=0;for(S=1;S<ba;++S)aa<ra&&D(u.f,1,aa)==S?(Rb=D(u.f,0,aa++),kb=1):(Rb=0,kb=8),fr(u.f,S,mo(u.f,Rb)+kb*($(u,sc)-~~(Za/2))),gr(u.f,S,no(u.f,Rb)+kb*($(u,sc)-~~(Za/2))),oa&&hr(u.f,S,oo(u.f,Rb)+kb*($(u,sc)-~~(Za/2)));Ma=oa?1.5:(Oo(),24);Ha=Nq(u.f,ba,ra,Ma);if(35==M[nd]){xc=\n0;qc=C(B,w,-1,ba,1);for(S=0;S<ba;++S)xc+=qc[S]=ap(u.f,S);for(S=0;S<ba;++S)for(K=0;K<qc[S];++K)rc=Gq(u.f,1),Kq(u.f,S,rc,1),fr(u.f,rc,mo(u.f,S)+($(u,sc)-~~(Za/2))),gr(u.f,rc,no(u.f,S)+($(u,sc)-~~(Za/2))),oa&&hr(u.f,rc,oo(u.f,S)+($(u,sc)-~~(Za/2)));ba+=xc}if(Vb){var Ic=$(u,sc),Nc=Math.log(2E3)*Math.LOG10E*Ic/(Za-1)-1;yb=Math.pow(10,Nc);Zc=yb*m5($(u,sc),Za);Xa=yb*m5($(u,sc),Za);oa&&(Mc=yb*m5($(u,sc),Za));kb=yb/Ha;for(S=0;S<ba;++S)fr(u.f,S,Zc+kb*mo(u.f,S)),gr(u.f,S,Xa+kb*no(u.f,S)),oa&&hr(u.f,S,Mc+kb*\noo(u.f,S))}else{kb=1.5/Ha;for(S=0;S<ba;++S)fr(u.f,S,kb*mo(u.f,S)),gr(u.f,S,kb*no(u.f,S)),oa&&hr(u.f,S,kb*oo(u.f,S))}}else if(oa&&!Vb&&0==yb&&(yb=1.5),0!=yb&&0!=u.f.p){for(aa=Ha=0;aa<u.f.p;++aa)ud=mo(u.f,D(u.f,0,aa))-mo(u.f,D(u.f,1,aa)),ed=no(u.f,D(u.f,0,aa))-no(u.f,D(u.f,1,aa)),hb=oa?oo(u.f,D(u.f,0,aa))-oo(u.f,D(u.f,1,aa)):0,Ha+=Math.sqrt(ud*ud+ed*ed+hb*hb);Ha/=u.f.p;Fb=yb/Ha;for(S=0;S<u.f.o;++S)fr(u.f,S,mo(u.f,S)*Fb+Zc),gr(u.f,S,no(u.f,S)*Fb+Xa),oa&&hr(u.f,S,oo(u.f,S)*Fb+Mc)}}catch(ib){if(ib=Fo(ib),\nE(ib,101))Qa=ib,Qa.be(),M=null,oa=!1;else throw ib;}if((pb=null!=M&&!oa)||u.b){Pn(u.f,3);for(aa=0;aa<u.f.d;++aa)if(2==Xn(u.f,aa)&&!Do(u.f,aa)&&0==(u.f.C[aa]&3)){var xd=u.f;xd.C[aa]|=16777216}}!pb&&u.b&&(u.f.N|=4,Qc=new v5,Qc.i=new B5,Cs(Qc,u.f),pb=!0);pb?(wr(u.f),u5(u.f)):oa||(u.f.N|=4)}da=Eb}}H=new Er(da);b=nx(H.a.a);a="readOCLCode";d=null}catch(we){if(we=Fo(we),!E(we,101))throw we;}e=!1;if(null!=b&&null==d)try{(e=wO(this.a,b,!1))&&this.c&&jM(this.a,a,0,0,0,!0)}catch(ob){if(ob=Fo(ob),E(ob,101))d=\n"Invalid converted molfile";else throw ob;}this.a.jc=e;this.e?e?EO(this.e):FO(this.e,new So(d)):null!=d&&D1(this.a,d);this.d&&lH(this.a)};Z(638);Z(639);Z(24);Z(29);Z(30);U($Y)(1);\n//# sourceURL=1.js\n')
