$wnd.jsme.runAsyncCallback7('var o8="!a",p8=\'" fill="\',q8="M",r8="r";function s8(a){var b;b=a.N.c*t8(a.J);a.U=0.06*b;a.P=0.15*b;a.O=0.38*b;a.S=0.47*b;a.T=H(0.6*b*a.H+0.5);a.R=0.12*b;a.V=0.4*b;a.B=0.5*b+0.5}\nfunction u8(a,b,c,d){var e,f,g;f=(b.b-b.a)/10;g=(b.d-b.c)/10;e=new v8;w8(a.J,Gq(a.J,c,d))?d=c=-3:(c=a.r[c],d=a.r[d]);x8(a,c);e.a=b.a;e.c=b.c;e.b=b.a+2*f;e.d=b.c+2*g;y8(a,e);e.a=b.a+4*f;e.c=b.c+4*g;e.b=b.a+5*f;e.d=b.c+5*g;y8(a,e);x8(a,d);e.a=b.a+5*f;e.c=b.c+5*g;e.b=b.a+6*f;e.d=b.c+6*g;y8(a,e);e.a=b.a+8*f;e.c=b.c+8*g;e.b=b.b;e.d=b.d;y8(a,e);x8(a,a.M)}\nfunction z8(a,b,c,d){if(w8(a.J,Gq(a.J,c,d)))x8(a,-3),y8(a,b),x8(a,a.M);else if(a.r[c]!=a.r[d]){var e,f;e=new v8;f=new v8;e.a=b.a;e.c=b.c;e.b=(b.a+b.b)/2;e.d=(b.c+b.d)/2;f.a=e.b;f.c=e.d;f.b=b.b;f.d=b.d;A8(a,e)&&(x8(a,a.r[c]),y8(a,e));A8(a,f)&&(x8(a,a.r[d]),y8(a,f));x8(a,a.M)}else 0!=a.r[c]?(x8(a,a.r[c]),y8(a,b),x8(a,a.M)):y8(a,b)}\nfunction B8(a,b){var c;for(c=0;c<a.W.c;++c)a.w=C8(a.w,wo(a.W,c));var d,e,f,g,h;d=C(mo,mn,-1,a.J.o,2);for(c=0;c<a.J.p;++c)0!=(a.J.C[c]&131072)&&(d[D(a.J,0,c)]=!0,d[D(a.J,1,c)]=!0);f=new oL;for(c=0;c<a.J.o;++c)e=0!=(a.J.w[c]&536870912)?0.47*b:d[c]?0.38*b:0,0!=e&&(g=D8(a.N,Io(a.J,c)),h=E8(a.N,Jo(a.J,c)),BK(f,g-e,h-e,2*e,2*e),a.w=C8(a.w,f));c=0.1*b;a.w.d-=c;a.w.e-=c;a.w.c+=2*c;a.w.b+=2*c}\nfunction F8(a,b){var c,d;if(0!=(a.E&128))return a.r[b];d=G8(a,b);if(-1==d){c=a.J;var e,f,g,h;e=-1;if(1==c.k[b])for(f=0;f<c.f[b];++f)if(2==c.j[b][f]){f=c.e[b][f];if(2==c.f[f]&&2==c.k[f])for(h=0;2>h;++h)if(g=c.e[f][h],g!=b&&1==c.k[g]){e=f;break}break}c=e;-1!=c&&(b=c,d=G8(a,c))}if(-1==d)return a.r[b];switch(d&255){case 1:return 384;case 2:return 64;default:return 448}}\nfunction G8(a,b){var c,d,e;d=e=-1;if(0!=(a.E&128))return-1;0!=(a.J.s[b]&134217728)&&(e=gq(a.J,b),d=hq(a.J,b));c=Hp(a.J,b);-1!=c&&(e=~~(a.J.C[c]&3072)>>10,d=iq(a.J,c));-1!=e&&0!=e&&(e|=d<<8);return e}function H8(a,b){var c;if(0==so(a.J,b))return!1;for(c=0;c<so(a.J,b);++c)if(!w8(a.J,po(a.J,b,c)))return!1;return!0}function I8(a){var b;a.s=C(mo,mn,-1,a.J.o,2);for(b=0;b<a.J.p;++b)a.s[D(a.J,0,b)]=!0,a.s[D(a.J,1,b)]=!0}\nfunction J8(a,b,c,d,e){var f,g,h,j,l,n,q;n=!1;e.a=0;e.b=0;0<d?f=2.617993878:f=3.665191429;q=Qo(a.J,b,c);for(j=0;j<a.J.f[b];++j)g=po(a.J,b,j),h=q,D(a.J,0,g)==b?l=D(a.J,1,g):l=D(a.J,0,g),l!=c&&(g=Qo(a.J,b,l),q<g&&(h+=6.283185307179586),g=h-g,0<d?(3.141592653589793>g&&(n=!0),2.617993878<g&&(g=2.617993878),0.523598776>g&&(g=0.523598776),g<=f&&(f=g,g=a.P*Math.tan(g-1.5707963267948966)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))):(3.141592653589793<=g&&(n=!0),3.665191429>g&&(g=3.665191429),5.759586531<\ng&&(g=5.759586531),g>=f&&(f=g,g=a.P*Math.tan(4.712388981-g)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))));return n}function K8(a,b,c,d){0==b?(0>c?d.a=a.P:d.a=-a.P,d.b=0):(c=Math.atan(c/b),0>b&&(c+=3.141592653589793),d.a=-(a.P*Math.sin(c)),d.b=a.P*Math.cos(c))}\nfunction L8(a,b,c,d){var e,f,g,h,j,l,n,q;e=new v8;h=new v8;l=new mL;j=new mL;f=D(a.J,0,c);g=D(a.J,1,c);d&&(n=b.a,b.a=b.b,b.b=n,n=b.c,b.c=b.d,b.d=n,n=f,f=g,g=n);if(A8(a,b))if(Mo(a.J,c)){e.a=b.a;e.c=b.c;e.b=b.b;e.d=b.d;d=d?-M8(a,c):M8(a,c);0==d&&(d=1);K8(a,b.b-b.a,b.d-b.c,l);if(0<d){if(h.a=b.a+l.a,h.c=b.c+l.b,h.b=b.b+l.a,h.d=b.d+l.b,J8(a,f,g,1,j)||1<a.J.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a}else if(h.a=b.a-l.a,h.c=b.c-l.b,h.b=b.b-l.a,h.d=b.d-l.b,J8(a,f,g,-1,j)||1<a.J.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a;26==a.J.E[c]&&\nN8(e,h);A8(a,e)&&z8(a,e,f,g);64==a.J.E[c]?A8(a,h)&&u8(a,h,f,g):A8(a,h)&&z8(a,h,f,g)}else{K8(a,b.b-b.a,b.d-b.c,l);n=l.a/2;q=l.b/2;d=!1;e.a=b.a+n;e.c=b.c+q;e.b=b.b+n;e.d=b.d+q;if(1<a.J.f[f])if(J8(a,f,g,1,j)){if(e.a+=j.a,e.c+=j.b,2==a.J.f[f]&&(0!=j.a||0!=j.b))e.a+=l.b,e.c-=l.a}else a.q[f]=new O8(e.a,e.c);h.a=b.a-n;h.c=b.c-q;h.b=b.b-n;h.d=b.d-q;if(1<a.J.f[f])if(J8(a,f,g,0,j)){if(h.a+=j.a,h.c+=j.b,2==a.J.f[f]&&(0!=j.a||0!=j.b))h.a+=l.b,h.c-=l.a}else a.q[f]=new O8(h.a,h.c),d=!0;26==a.J.E[c]&&N8(e,h);64==\na.J.E[c]?d?(u8(a,e,f,g),z8(a,h,f,g)):(z8(a,e,f,g),u8(a,h,f,g)):(z8(a,e,f,g),z8(a,h,f,g))}}\nfunction P8(a,b){var c,d,e,f,g,h,j,l,n,q,r,u;a.I||(r=E8(a.N,Jo(a.J,b)),r=\'<circle id="\'+(null!=a.k?a.k:ik+Q8)+":Atom:"+b+\'" class="event" cx="\'+H(100*D8(a.N,Io(a.J,b)))/100+Ga+H(100*r)/100+\'" r="8" fill-opacity="0"/>\',pq(a.b,r));h=null;0!=a.J.q[b]&&(r=1==wr(a.J.q[b])?m:m+wr(a.J.q[b]),h=0>a.J.q[b]?r+gc:r+Vb);g=null;r=a.J.w[b];0!=r&&(0!=(r&2)&&(g=Fh),0!=(r&4)&&(g=null==g?o8:g+",!a"),0!=(r&4096)&&(g=null==g?sl:g+",s"),0!=(r&1920)&&(e=r&1920,1792==e?g=null==g?"h0":g+",h0":1664==e?g=null==g?"h1":g+",h1":\n1408==e?g=null==g?"h2":g+",h2":128==e?g=null==g?"h>0":g+",h>0":384==e?g=null==g?"h>1":g+",h>1":1024==e?g=null==g?"h<3":g+",h<3":1536==e&&(g=null==g?"h<2":g+",h<2")),0!=(r&234881024)&&(e=r&234881024,167772160==e?g=null==g?"c0":g+",c0":100663296==e?g=null==g?"c+":g+",c+":201326592==e&&(g=null==g?"c-":g+",c-")),0!=(r&114688)&&(e=r&114688,98304==e?g=null==g?"pi0":g+",pi0":81920==e?g=null==g?"pi1":g+",pi1":49152==e?g=null==g?"pi2":g+",pi2":16384==e&&(g=null==g?"pi>0":g+",pi>0")),0!=(r&4063232)&&(e=r&4063232,\n3801088==e?g=null==g?"n1":g+",n1":3538944==e?g=null==g?"n2":g+",n2":3014656==e?g=null==g?"n3":g+",n3":3145728==e?g=null==g?"n<3":g+",n<3":2097152==e?g=null==g?"n<4":g+",n<4":393216==e?g=null==g?"n>1":g+",n>1":917504==e?g=null==g?"n>2":g+",n>2":1966080==e&&(g=null==g?"n>3":g+",n>3")),0!=(r&120)&&(e=r&120,112==e?g=null==g?mi:g+",c":8==e?g=null==g?r8:g+",r":104==e?g=null==g?"rb2":g+",rb2":88==e?g=null==g?"rb3":g+",rb3":56==e&&(g=null==g?"rb4":g+",rb4")),0!=(r&29360128)&&(g=null==g?"rs"+(~~(r&29360128)>>\n22):g+",rs"+(~~(r&29360128)>>22)),0!=(r&268435456)&&(g=null==g?"sp2":g+",sp2"));0!=a.J.v[b]&&(g=null==g?m+a.J.v[b]:g+Yb+(m+a.J.v[b]));r=0;if(0!=(a.J.s[b]&48))switch(a.J.s[b]&48){case 16:h=null==h?um:h+",|";break;case 32:r=1;break;case 48:r=2}e=null;if(0==(a.E&64))if(0!=(a.J.s[b]&67108864))e=ce;else if(0!=~~(a.J.s[b]&98304)>>15)if(2==a.J.f[b])switch(~~(a.J.s[b]&98304)>>15){case 2:e=0!=(a.J.s[b]&4)?Kk:Cg;break;case 1:e=0!=(a.J.s[b]&4)?Oj:q8;break;default:e=Sb}else switch(~~(a.J.s[b]&98304)>>15){case 1:e=\n0!=(a.J.s[b]&4)?r8:Fg;break;case 2:e=0!=(a.J.s[b]&4)?sl:Yg;break;default:e=Sb}0!=(a.E&1792)&&(e=null==e?m+(null==a.J.b.d?-1:a.J.b.d[b]):e+Yb+(m+(null==a.J.b.d?-1:a.J.b.d[b])));n=null;0!=(a.E&16)&&0!=wr(a.J.u[b])&&(n=m+wr(a.J.u[b]));l=null;a:{j=a.J;lo(j,1);if(2==j.f[b]&&2==j.j[b][0]&&2==j.j[b][1])for(d=0;2>d;++d)for(c=0;c<so(j,j.e[b][d]);++c){if(Vq(j,j.i[j.e[b][d]][c],j.e[b][d])){j=j.i[j.e[b][d]][c];break a}}else for(d=0;d<j.f[j.o+b];++d)if(Vq(j,j.i[b][d],b)){j=j.i[b][d];break a}j=-1}-1!=j&&(j=G8(a,\nb),-1!=j&&(l=0==j?Gh:(1==(j&255)?Bb:Hk)+(1+(~~j>>8))));j=0;a.J.H?((6!=a.J.A[b]||!a.s[b])&&0!=(a.J.w[b]&2048)&&0!=a.J.q[b]||0!=(a.J.s[b]&48))&&(j=wp(a.J,b)):(6!=a.J.A[b]||!a.s[b]||0!=(a.J.s[b]&48))&&(j=wp(a.J,b));c=cq(a.J,b);if(null!=c)j=0;else if(null!=Sp(a.J,b)){d=0!=(a.J.w[b]&1)?"[!":uh;c=a.J;if(null==c.t||null==c.t[b])c=0!=(c.w[b]&1)?m:Wq[c.A[b]];else{u=m;for(q=0;q<c.t[b].length;++q)0<q&&(u+=Yb),f=c.t[b][q],u+=Wq[f];c=u}c=d+c+Ch;5<c.length&&(c=d+Sp(a.J,b).length+Ch);0!=(a.J.w[b]&2048)&&(j=-1)}else 0!=\n(a.J.w[b]&1)?(c=ce,0!=(a.J.w[b]&2048)&&(j=-1)):(6!=a.J.A[b]||null!=h||null!=g||0<j||!a.s[b])&&(c=Wq[a.J.A[b]]);d=0;!fq(a.J,b)&0!=(a.J.w[b]&536870912)&&x8(a,-8);if(null!=c)d=R8(a,c),S8(a,D8(a.N,Io(a.J,b)),E8(a.N,Jo(a.J,b)),c,!0),a.t[b]=!0;else{a:if(2!=a.J.f[b])c=!1;else{for(c=0;2>c;++c)if(2!=a.J.j[b][c]){c=!1;break a}c=!0}c&&(c=D8(a.N,Io(a.J,b)),f=E8(a.N,Jo(a.J,b)),pq(a.W,new pL(c-a.R,f-a.R,2*a.R,2*a.R)),a.I||pq(a.Q,new T8(c,f,H8(a,b)?-3:a.r[b])))}null!=h&&(U8(a,~~((2*a.T+1)/3)),f=D8(a.N,Io(a.J,b))+\n((d+R8(a,h))/2+1),c=E8(a.N,Jo(a.J,b))-~~((4*a.o-4)/8),S8(a,f,c,h,!0),U8(a,a.T));0!=(a.E&2)&&(g=m+b);null!=g&&(U8(a,~~((2*a.T+1)/3)),f=D8(a.N,Io(a.J,b))-(d+R8(a,g))/2,c=E8(a.N,Jo(a.J,b))-~~((4*a.o-4)/8),S8(a,f,c,g,!0),U8(a,a.T));null!=e&&(U8(a,~~((2*a.T+1)/3)),f=D8(a.N,Io(a.J,b))-(d+R8(a,e))/2,c=E8(a.N,Jo(a.J,b))+~~((4*a.o+4)/8),q=a.C,x8(a,448),S8(a,f,c,e,!1),x8(a,q),U8(a,a.T));null!=n&&(U8(a,~~((2*a.T+1)/3)),f=D8(a.N,Io(a.J,b))+((d+R8(a,n))/2+1),c=E8(a.N,Jo(a.J,b))+~~((4*a.o+4)/8),q=a.C,x8(a,0>a.J.u[b]?\n384:448),S8(a,f,c,n,!0),x8(a,q),U8(a,a.T));if(null!=l){var x,v;c=C(Ho,fn,-1,so(a.J,b),1);for(f=0;f<so(a.J,b);++f)c[f]=Qo(a.J,b,qo(a.J,b,f));xp(c);q=V8(c,0);u=W8(c,0,q);for(f=1;f<c.length;++f)x=V8(c,f),v=W8(c,f,x),u<v&&(u=v,q=x);c=q;U8(a,~~((2*a.T+1)/3));f=D8(a.N,Io(a.J,b))+0.7*a.o*Math.sin(c);c=E8(a.N,Jo(a.J,b))+0.7*a.o*Math.cos(c);q=a.C;x8(a,F8(a,b));S8(a,f,c,l,!1);x8(a,q);U8(a,a.T)}if(!(0==j&&0==r)){l=C(Ho,fn,-1,4,1);for(c=0;c<so(a.J,b);++c){f=po(a.J,b,c);for(q=0;2>q;++q)D(a.J,q,f)==b&&(u=Qo(a.J,\nD(a.J,q,f),D(a.J,1-q,f)),-1.5707963267948966>u?(l[0]-=u+1.5707963267948966,l[3]+=u+3.141592653589793):0>u?(l[2]+=u+1.5707963267948966,l[3]-=u):1.5707963267948966>u?(l[1]+=u,l[2]+=1.5707963267948966-u):(l[0]+=u-1.5707963267948966,l[1]+=3.141592653589793-u))}0==a.J.f[b]?Lr(a.J.A[b])?l[3]-=0.2:l[1]-=0.2:l[1]-=0.1;(null!=h||null!=n)&&(l[1]+=10);(null!=g||null!=e)&&(l[3]+=10);e=m;0!=j&&(f=R8(a,Ef),n=0,-1==j?(e=sk,U8(a,~~((2*a.T+1)/3)),n=R8(a,e)):1<j&&(e=m+j,U8(a,~~((2*a.T+1)/3)),n=R8(a,e)),0.6>l[1]||0.6>\nl[3]?(h=E8(a.N,Jo(a.J,b)),l[1]<=l[3]?(l[1]+=10,g=D8(a.N,Io(a.J,b))+(d+f)/2):(l[3]+=10,g=D8(a.N,Io(a.J,b))-(d+f)/2-n)):(g=D8(a.N,Io(a.J,b)),l[0]<l[2]?(l[0]+=10,h=E8(a.N,Jo(a.J,b))-a.o):(l[2]+=10,h=E8(a.N,Jo(a.J,b))+a.o)),0<n&&(c=h+~~((4*a.o+4)/8),S8(a,g+(f+n)/2,c,e,!0),U8(a,a.T)),S8(a,g,h,Ef,!0));e=0;if(0!=r){n=50;for(c=g=0;4>c;++c)h=1<c?c-2:c+2,l[c]<n?(e=c,n=l[c],g=l[h]):l[c]==n&&l[h]>g&&(e=c,g=l[h]);switch(e){case 0:g=D8(a.N,Io(a.J,b));h=E8(a.N,Jo(a.J,b))-a.R-d/2;break;case 1:g=D8(a.N,Io(a.J,b))+\na.R+d/2;h=E8(a.N,Jo(a.J,b));break;case 2:g=D8(a.N,Io(a.J,b));h=E8(a.N,Jo(a.J,b))+a.R+d/2;break;default:g=D8(a.N,Io(a.J,b))-a.R-d/2,h=E8(a.N,Jo(a.J,b))}if(1==r)pq(a.W,new pL(g-a.R,h-a.R,2*a.R,2*a.R)),a.I||pq(a.Q,new T8(g,h,H8(a,b)?-3:a.r[b]));else{switch(e){case 2:case 0:r=2*a.R;e=0;g-=a.R;break;case 1:r=0;e=2*a.R;h-=a.R;break;default:r=0,e=2*a.R,h-=a.R}pq(a.W,new pL(g-a.R,h-a.R,2*a.R,2*a.R));a.I||pq(a.Q,new T8(g,h,H8(a,b)?-3:a.r[b]));pq(a.W,new pL(g+r-a.R,h+e-a.R,2*a.R,2*a.R));a.I||pq(a.Q,new T8(g+\nr,h+e,H8(a,b)?-3:a.r[b]))}}}-8==a.C&&x8(a,-9)}\nfunction X8(a,b){var c,d,e,f,g,h,j,l,n,q,r,u;n=new v8;c=new v8;f=new v8;j=new mL;h=new mL;d=D(a.J,0,b);e=D(a.J,1,b);var x=E8(a.N,Jo(a.J,d)),v=D8(a.N,Io(a.J,e)),t=E8(a.N,Jo(a.J,e)),x=\'<line id="\'+(null!=a.k?a.k:ik+Q8)+":Bond:"+d+gc+e+\'" class="event" x1="\'+H(100*D8(a.N,Io(a.J,d)))/100+Va+H(100*x)/100+Ua+H(100*v)/100+Wa+H(100*t)/100+\'" stroke-width="8" stroke-opacity="0"/>\';pq(a.c,x);!fq(a.J,d)&&!fq(a.J,e)&&0!=((a.J.w[d]|a.J.w[e])&536870912)&&x8(a,-8);a.q[d]?(n.a=a.q[d].a,n.c=a.q[d].b):(n.a=D8(a.N,\nIo(a.J,d)),n.c=E8(a.N,Jo(a.J,d)));a.q[e]?(n.b=a.q[e].a,n.d=a.q[e].b):(n.b=D8(a.N,Io(a.J,e)),n.d=E8(a.N,Jo(a.J,e)));if(0!=(a.J.D[b]&16320))A8(a,n)&&(g=m+H(100*n.a)/100,l=m+H(100*n.b)/100,q=m+H(100*n.c)/100,r=m+H(100*n.d)/100,u=\'<line stroke-dasharray="3, 3" x1="\'+g+Va+q+Ua+l+Wa+r+Qa+a.e+\'" stroke-width:\'+H(100*a.n)/100+Ya,Y8(a,u)),x8(a,-9);else{g=64==a.J.E[b]?0:32==a.J.E[b]?1:to(a.J,b);switch(g){case 1:switch(a.J.E[b]){case 1:A8(a,n)&&z8(a,n,d,e);break;case 17:Z8(a,n,d,e);break;case 9:h=n.b-n.a;j=\nn.d-n.c;w8(a.J,Gq(a.J,d,e))?f=e=-3:(e=a.r[d],f=F8(a,d),e==(a.J.s[d]&448)&&(e=f));for(d=2;17>d;d+=2)c.a=n.a+d*h/17-d*j/128,c.c=n.c+d*j/17+d*h/128,c.b=n.a+d*h/17+d*j/128,c.d=n.c+d*j/17-d*h/128,A8(a,c)&&(x8(a,9>d?e:f),y8(a,c),x8(a,a.M));break;case 32:if(A8(a,n)){f=n.b-n.a;j=n.d-n.c;c=Math.sqrt(f*f+j*j);c=2*I(K(M(c/(4*a.U))));f/=c-1;j/=c-1;w8(a.J,Gq(a.J,d,e))?e=d=-3:(d=a.r[d],e=a.r[e]);h=n.a-a.U/2;n=n.c-a.U/2;x8(a,d);for(d=0;d<~~(c/2);++d)$8(a,h,n,a.U),h+=f,n+=j;x8(a,e);for(d=0;d<~~(c/2);++d)$8(a,h,n,\na.U),h+=f,n+=j;x8(a,a.M)}}break;case 0:case 2:if((a.t[d]||2==a.J.k[d])&&(a.t[e]||2==a.J.k[e])&&!Mo(a.J,b)&&2==g){if(!A8(a,n))break;K8(a,n.b-n.a,n.d-n.c,j);h=j.a/2;j=j.b/2;c.a=n.a+h;c.c=n.c+j;c.b=n.b+h;c.d=n.d+j;f.a=n.a-h;f.c=n.c-j;f.b=n.b-h;f.d=n.d-j;26==a.J.E[b]&&N8(c,f);z8(a,c,d,e);z8(a,f,d,e)}else if((a.t[e]||2==a.J.k[e])&&2==g)L8(a,n,b,!1);else if((a.t[d]||2==a.J.k[d])&&2==g)L8(a,n,b,!0);else{l=M8(a,b);0==l&&(l=1);c.a=n.a;c.c=n.c;c.b=n.b;c.d=n.d;K8(a,n.b-n.a,n.d-n.c,j);if(0<l){f.a=n.a+j.a;f.c=\nn.c+j.b;f.b=n.b+j.a;f.d=n.d+j.b;if(J8(a,d,e,1,h)||1<a.J.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(J8(a,e,d,-1,h)||1<a.J.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}else{f.a=n.a-j.a;f.c=n.c-j.b;f.b=n.b-j.a;f.d=n.d-j.b;if(J8(a,d,e,-1,h)||1<a.J.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(J8(a,e,d,1,h)||1<a.J.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}26==a.J.E[b]&&N8(c,f);A8(a,c)&&z8(a,c,d,e);2==g?A8(a,f)&&z8(a,f,d,e):A8(a,f)&&u8(a,f,d,e)}break;case 3:A8(a,n)&&(z8(a,n,d,e),K8(a,n.b-n.a,n.d-n.c,j),c.a=n.a+j.a,c.c=n.c+j.b,c.b=n.b+j.a,c.d=n.d+j.b,\nz8(a,c,d,e),c.a=n.a-j.a,c.c=n.c-j.b,c.b=n.b-j.a,c.d=n.d-j.b,z8(a,c,d,e))}-8==a.C&&x8(a,-9)}}function S8(a,b,c,d,e){var f;e&&(e=R8(a,d),e=e/2+~~(a.o/8),f=~~(a.o/2),(d==Vb||d==gc)&&(f=2*f/3),pq(a.W,new pL(b-e,c-f,2*e,2*f)));a.I||a9(a,d,b,c)}function b9(a){var b;b=a.a;a.a=a.b;a.b=b;b=a.c;a.c=a.d;a.d=b}\nfunction W8(a,b,c){a=0==b?6.283185307179586+a[0]-a[a.length-1]:a[b]-a[b-1];-2.0943951023931953<c&&1.0471975511965976>c?a-=2*Math.cos(c+0.5235987755982988):a-=0.5*Math.cos(c+0.5235987755982988);return a}function c9(a){var b;b=new oL;a.a<=a.b?(b.d=a.a,b.c=a.b-a.a):(b.d=a.b,b.c=a.a-a.b);a.c<=a.d?(b.e=a.c,b.b=a.d-a.c):(b.e=a.d,b.b=a.c-a.d);return b}function V8(a,b){var c;if(0<b)return(a[b]+a[b-1])/2;c=3.141592653589793+(a[0]+a[a.length-1])/2;return 3.141592653589793<c?c-6.283185307179586:c}\nfunction Z8(a,b,c,d){var e,f,g;g=new v8;if(!(b.a==b.b&&b.c==b.d)){g.a=b.a;g.c=b.c;g.b=b.b;g.d=b.d;f=c9(g);for(b=0;b<a.W.c;++b)if(e=wo(a.W,b),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(d9(a,g.a,g.c,b)){if(d9(a,g.b,g.d,b))return;e9(a,g,0,b);Z8(a,g,c,d);return}if(d9(a,g.b,g.d,b)){e9(a,g,1,b);Z8(a,g,c,d);return}}var h,j,l;j=(g.c-g.d)/9;l=(g.b-g.a)/9;b=C(Ho,fn,-1,3,1);e=C(Ho,fn,-1,3,1);f=C(Ho,fn,-1,4,1);h=C(Ho,fn,-1,4,1);b[0]=g.a;e[0]=g.c;f[2]=g.b+j;h[2]=g.d+l;f[3]=g.b-j;h[3]=g.d-l;b[1]=\n(b[0]+f[2])/2;e[1]=(e[0]+h[2])/2;b[2]=(b[0]+f[3])/2;e[2]=(e[0]+h[3])/2;f[0]=b[2];h[0]=e[2];f[1]=b[1];h[1]=e[1];w8(a.J,Gq(a.J,c,d))?g=d=-3:(d=a.r[c],g=F8(a,c),d==(a.J.s[c]&448)&&(d=g));x8(a,d);a.Hd(b,e,3);x8(a,g);a.Hd(f,h,4);x8(a,a.M)}}function d9(a,b,c,d){if(0!=(a.E&1))return!1;a=wo(a.W,d);return b>a.d&&b<a.d+a.c&&c>a.e&&c<a.e+a.b}function N8(a,b){var c;c=a.b;a.b=b.b;b.b=c;c=a.d;a.d=b.d;b.d=c}\nfunction M8(a,b){var c,d,e,f,g,h,j,l,n,q;j=C(mo,mn,-1,16,2);l=C(mo,mn,-1,16,2);c=C(Ho,fn,-1,16,1);f=C(Ho,fn,-1,2,1);for(h=d=0;2>h;++h){e=D(a.J,h,b);for(n=0;n<a.J.f[e];++n)if(g=po(a.J,e,n),g!=b){if(4==d)return 0;j[d]=Go(a.J,g);l[d]=Mo(a.J,g);c[d++]=Qo(a.J,e,qo(a.J,e,n))}}f[0]=Qo(a.J,D(a.J,0,b),D(a.J,1,b));0>f[0]?(f[1]=f[0]+3.141592653589793,e=!1):(f[1]=f[0],f[0]=f[1]-3.141592653589793,e=!0);for(h=g=0;h<d;++h)j[h]?q=20:l[h]?q=17:q=16,c[h]>f[0]&&c[h]<f[1]?g-=q:g+=q;return e?-g:g}\nfunction A8(a,b){var c,d,e,f;if(b.a==b.b&&b.c==b.d){for(d=0;d<a.W.c;++d)if(e=wo(a.W,d),zK(e,b.a,b.c))return!1;return!0}f=c9(b);c=!1;b.a>b.b&&(b9(b),c=!0);for(d=0;d<a.W.c;++d)if(e=wo(a.W,d),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(d9(a,b.a,b.c,d)){if(d9(a,b.b,b.d,d))return c&&b9(b),!1;e9(a,b,0,d);d=A8(a,b);c&&b9(b);return d}if(d9(a,b.b,b.d,d))return e9(a,b,1,d),d=A8(a,b),c&&b9(b),d}c&&b9(b);return!0}\nfunction e9(a,b,c,d){var e,f,g,h,j,l;0==c?(j=b.a,l=b.c,g=b.b,f=b.d):(j=b.b,l=b.d,g=b.a,f=b.c);d=wo(a.W,d);a=g>j?d.d+d.c:d.d;h=f>l?d.e+d.b:d.e;d=g-j;e=f-l;(0>=d?0-d:d)>(0>=e?0-e:e)?l==f?(f=a,g=l):(f=j+d*(h-l)/e,g>j==a>f?g=h:(f=a,g=l+e*(a-j)/d)):j==g?(f=j,g=h):(g=l+e*(a-j)/d,f>l==h>g?f=a:(f=j+d*(h-l)/e,g=h));0==c?(b.a=f,b.c=g):(b.b=f,b.d=g)}\nfunction f9(a,b,c,d){c/=2;switch(d&786432){case 786432:if(b){a.A.a=b.d+b.c/2;a.A.b=b.e+b.b-c;break}case 0:a.A.a=a.w.d+a.w.c/2;a.A.b=a.w.e+a.w.b+c;b&&a.A.b>b.e+b.b-c&&(a.A.b=b.e+b.b-c);break;case 524288:if(b){a.A.a=b.d+b.c/2;a.A.b=b.e+c;break}case 262144:a.A.a=a.w.d+a.w.c/2,a.A.b=a.w.e-c,b&&a.A.b<b.e+c&&(a.A.b=b.e+c)}}\nfunction x8(a,b){if(!a.I&&(-10==b&&(a.C=-999,b=a.M),!(b==a.C||-8==a.C&&-9!=b)))switch(-8==b&&(a.L=a.C),-9==b&&(b=a.L),a.C=b,b){case 0:a.Id((tJ(),BJ));break;case -6:a.Id(a.D);break;case -4:a.Id(a.K);break;case -2:a.Id(a.u);break;case -3:a.Id(a.v);break;case -7:a.Id(a.F);break;case -8:a.Id(a.G);break;case 64:a.Id(co);break;case 128:a.Id(eo);break;case 256:a.Id(go);break;case 192:a.Id(fo);break;case 320:a.Id(ho);break;case 384:a.Id(io);break;case 448:a.Id(jo);break;case 1:a.Id((tJ(),yJ));break;default:a.Id((tJ(),\nBJ))}}function g9(a){var b,c,d,e,f;e=D8(a.N,a.J.G[0].a);c=D8(a.N,a.J.G[0].a);f=E8(a.N,a.J.G[0].b);d=E8(a.N,a.J.G[0].b);for(b=0;b<a.J.o;++b)e>D8(a.N,Io(a.J,b))&&(e=D8(a.N,Io(a.J,b))),c<D8(a.N,Io(a.J,b))&&(c=D8(a.N,Io(a.J,b))),f>E8(a.N,Jo(a.J,b))&&(f=E8(a.N,Jo(a.J,b))),d<E8(a.N,Jo(a.J,b))&&(d=E8(a.N,Jo(a.J,b)));a.w=new pL(e,f,c-e,d-f)}y(3,1,{});_.q=null;_.r=null;_.s=null;_.t=null;_.u=null;_.v=null;_.A=null;_.B=0;_.C=0;_.D=null;_.E=0;_.F=null;_.G=null;_.H=0;_.I=!1;_.J=null;_.K=null;_.L=0;_.M=0;_.N=null;\n_.O=0;_.P=0;_.Q=null;_.R=0;_.S=0;_.T=0;_.U=0;_.V=0;_.W=null;function T8(a,b,c){this.b=a;this.c=b;this.a=c}y(4,1,{},T8);_.a=0;_.b=0;_.c=0;function v8(){}y(5,1,{},v8);_.a=0;_.b=0;_.c=0;_.d=0;function h9(a,b){b.c*=a.c;b.a=b.a*a.c+a.a;b.b=b.b*a.c+a.b}function i9(a,b){b.d=b.d*a.c+a.a;b.e=b.e*a.c+a.b;b.c*=a.c;b.b*=a.c}function D8(a,b){return b*a.c+a.a}function E8(a,b){return b*a.c+a.b}function j9(){this.b=this.a=0;this.c=1}\nfunction k9(a,b,c){var d,e,f;this.b=this.a=0;this.c=1;b&&(d=b.c/a.c,f=b.b/a.b,e=0,0==e?e=24:e/=256,c=e/c,this.c=c<(d<f?d:f)?c:d<f?d:f,this.a=b.d+b.c/2-this.c*(a.d+a.c/2),this.b=b.e+b.b/2-this.c*(a.e+a.b/2))}y(19,1,{},j9,k9);_.tS=function(){return"DepictorTransformation Offset: "+this.a+Yb+this.b+" Scaling: "+this.c};_.a=0;_.b=0;_.c=0;function t8(a){return ir(a,a.o,a.p,24)}function w8(a,b){return 0!=(a.C[b]&262144)}\nfunction y8(a,b){var c,d,e,f;c=m+H(100*b.a)/100;d=m+H(100*b.b)/100;e=m+H(100*b.c)/100;f=m+H(100*b.d)/100;c=Rd+c+Va+e+Ua+d+Wa+f+\'" style="stroke:\'+a.e+";stroke-width:"+H(100*a.n)/100+Ya;Y8(a,c)}function a9(a,b,c,d){R8(a,b);b=$d+H(100*c)/100+\'" text-anchor="middle" y="\'+H(100*(d+~~(a.o/3)))/100+\'" font-family=" \'+a.f.a+\'" font-size="\'+a.f.b+p8+a.e+eb+b+Qd;Y8(a,b)}function $8(a,b,c,d){b=\'<circle cx="\'+H(100*b)/100+Ga+H(100*c)/100+\'" r="\'+H(100*d)/100+p8+a.e+\'" />\';Y8(a,b)}\nfunction R8(a,b){var c;c=fT();if(-1<c&&9>c)return!a.i&&(a.i=(sI(),new tI(a.f))),c=LK(b,a.i.a),11<=a.f.b&&(c*=1.5714285714285714),c;var d=a.f;c=b;var e=l9;e||(l9=e=$doc.createElement("canvas"));d=m+d.b+Wk+d.a;e=e.getContext("2d");e.font=d;c=e.measureText(c);return(new pL(0,0,c.width,0)).c}function U8(a,b){a.o!=b&&(a.o=b,a.f=new gK(Hf,0,b))}\nfunction m9(a){var b,c,d;d=\'<svg id="\'+(null!=a.k?a.k:ik+Q8)+\'" xmlns="http://www.w3.org/2000/svg" version="1.1" \'+a.Md(ca)+\'width="\'+a.p+\'px" height="\'+a.j+\'px" viewBox="0 0 \'+a.p+ca+a.j+\'">\\n\';b="<style> #"+(null!=a.k?a.k:ik+Q8)+" {pointer-events:none; }  #"+(null!=a.k?a.k:ik+Q8)+" .event  { pointer-events:all;}  <\/style>\\n";d+=aa;d+=b;for(c=new uq(a.c);c.b<c.d.Dg();)b=vq(c),Y8(a,b);for(c=new uq(a.b);c.b<c.d.Dg();)b=vq(c),Y8(a,b);return d+a.Ld(aa)+a.d.a.a+Pd}\nfunction Y8(a,b){Zr(a.d,aa);Zr(a.d,b);Zr(a.d,ba)}y(28,3,{});_.Ld=fy;_.Md=fy;_.Hd=function(a,b,c){var d,e;e=new BC(\'<polygon points="\');for(d=0;d<c;++d){var f=m+H(100*a[d])/100;xw(e.a,f);e.a.a+=Yb;f=m+H(100*b[d])/100;xw(e.a,f);e.a.a+=ca}xw(e.a,\'" style="fill:\'+this.e+";stroke:"+this.e+\';stroke-width:1"/>\');Y8(this,e.a.a)};_.Id=function(a){this.e=gl+(~~a.d>>16&255)+Yb+(~~a.d>>8&255)+Yb+(a.d&255)+Rb};_.tS=function(){return m9(this)};_.e=bi;_.i=null;_.j=400;_.k=null;_.n=1;_.o=10;_.p=400;var Q8=0;\nfunction n9(a){var b;lo(a,15);b=a.F&65535;switch(a.F&-65536){case 65536:return null;case 131072:return 1==b?"meso":m+b+" meso diastereomers";case 0:return"unknown chirality";case 196608:return"racemate";case 262144:return"this enantiomer";case 327680:return"this or other enantiomer";case 393216:return"two epimers";default:return 1==b?"one stereo isomer":m+b+" stereo isomers"}}function o9(){o9=z;p9=A(PJ,hn,-1,[0.29899999499320984,0.5870000123977661,0.11400000005960464])}\nfunction q9(a,b){o9();var c,d,e,f,g,h;c=!b?1:(p9[0]*(~~b.d>>16&255)+p9[1]*(~~b.d>>8&255)+p9[2]*(b.d&255))/255;f=!a?1:(p9[0]*(~~a.d>>16&255)+p9[1]*(~~a.d>>8&255)+p9[2]*(a.d&255))/255;e=Sq(c-f);if(0.30000001192092896<e)return a;d=C(PJ,hn,-1,3,1);r9(~~b.d>>16&255,~~b.d>>8&255,b.d&255,d);g=C(PJ,hn,-1,3,1);r9(~~a.d>>16&255,~~a.d>>8&255,a.d&255,g);h=Sq(g[0]-d[0]);0.5<h&&(h=1-h);g=1-(g[1]>d[1]?g[1]:d[1]);d=Sq(f+c-1);h=Math.cos(9.42477796076938*h);h=0.30000001192092896*(g>(d>h?d:h)?g:d>h?d:h);if(e>h)c=a;\nelse if(e=(f>c?1<f+h:0<f-h)?c-h:c+h,c=null,null==c&&(c=C(PJ,hn,-1,4,1)),null!=a.b?c[3]=a.a:c[3]=(~~a.d>>24&255)/255,f=c,null==f&&(f=C(PJ,hn,-1,3,1)),null!=a.b?(f[2]=a.b[2],f[1]=a.b[1],f[0]=a.b[0]):(f[2]=(a.d&255)/255,f[1]=(~~a.d>>8&255)/255,f[0]=(~~a.d>>16&255)/255),f=!a?1:(p9[0]*(~~a.d>>16&255)+p9[1]*(~~a.d>>8&255)+p9[2]*(a.d&255))/255,0==f)c=new OJ(f,f,f,c[3]);else{d=e/(!a?1:(p9[0]*(~~a.d>>16&255)+p9[1]*(~~a.d>>8&255)+p9[2]*(a.d&255))/255);for(e=f=h=0;3>e;++e)c[e]*=d,1>c[e]?f+=p9[e]:(h+=(c[e]-1)*\np9[e],c[e]=1);if(0!=h){for(e=d=0;3>e;++e)1>c[e]&&(c[e]+=h/f,1<c[e]&&(d+=(c[e]-1)*p9[e],c[e]=1));if(0!=d)for(e=0;3>e;++e)1>c[e]&&(c[e]+=d/p9[e],1<c[e]&&(c[e]=1))}c=new OJ(c[0],c[1],c[2],c[3])}return c}var p9;function s9(a){tJ();this.d=a|-16777216}\nfunction r9(a,b,c,d){tJ();var e,f,g,h,j,l;null==d&&(d=C(PJ,hn,-1,3,1));j=c>(a>b?a:b)?c:a>b?a:b;l=c<(a<b?a:b)?c:a<b?a:b;j==l?g=h=0:(h=(j-l)/j,f=(j-a)/(j-l),e=(j-b)/(j-l),c=(j-c)/(j-l),a==j?g=c-e:b==j?g=2+f-c:g=4+e-f,g/=6,0>g&&++g);d[0]=g;d[1]=h;d[2]=j/255}y(491,1,{59:1,68:1,72:1},s9);var l9=null;function O8(a,b){this.a=a;this.b=b}y(543,514,{81:1,82:1},O8);function C8(a,b){var c;c=new oL;AK(a,b,c);return c}\nfunction t9(a){var b,c;b=RN(a,!1,!0);c=null;a=new Fs;if(ls(new Cs,a,new xL(new BL(b)))){a=new u9(a,b);b=new pL(0,0,400,300);var d;if(0!=a.J.o){a.p=H(b.c);a.j=H(b.b);0==a.J.o?c=null:(g9(a),c=a.N.c*t8(a.J),d=new k9(a.w,b,c),1==d.c&&0==d.a&&0==d.b?d=null:(h9(d,a.N),i9(d,a.w)),f9(a,b,c,131072),c=d);lo(a.J,0!=(a.E&256)?31:0!=(a.E&512)?47:0!=(a.E&1024)?79:15);I8(a);a.Q.ih();a.W.ih();s8(a);U8(a,a.T);a.I=!0;for(d=0;d<a.J.o;++d)P8(a,d);a.I=!1;d=a.N.c*t8(a.J);B8(a,d);f9(a,b,d,131072);var e;if(e=b){e=a.w.d;\nvar f=a.w.e,g=a.w.c,h=a.w.b,j,l,n,q;b.sg()||0>=g||0>=h?e=!1:(j=b.d,n=b.e,l=j+b.c,q=n+b.b,e=j<=e&&e+g<=l&&n<=f&&f+h<=q);e=!e}e&&(b=new k9(a.w,b,d),h9(b,a.N),i9(b,a.w),d=a.A,d.a=d.a*b.c+b.a,d.b=d.b*b.c+b.b,c&&h9(b,c))}if(0!=a.J.o){lo(a.J,0!=(a.E&256)?31:0!=(a.E&512)?47:0!=(a.E&1024)?79:15);s8(a);b=!1;a.r=C(B,w,-1,a.J.o,1);for(c=0;c<a.J.o;++c)a.r[c]=a.J.s[c]&448,0!=a.r[c]&&(b=!0),fq(a.J,c)&&(a.r[c]=128),0!=(a.J.s[c]&131072)&&0==(a.E&4096)&&(a.r[c]=256);x8(a,-10);if(a.J.H){d=a.S;x8(a,-7);for(c=0;c<a.J.c;++c)0!=\n(a.J.w[c]&536870912)&&$8(a,D8(a.N,Io(a.J,c))-d,E8(a.N,Jo(a.J,c))-d,2*d);a.n=2*a.S;f=new v8;for(e=0;e<a.J.p;++e)c=D(a.J,0,e),d=D(a.J,1,e),0!=(a.J.w[c]&a.J.w[d]&536870912)&&(f.a=D8(a.N,Io(a.J,c)),f.c=E8(a.N,Jo(a.J,c)),f.b=D8(a.N,Io(a.J,d)),f.d=E8(a.N,Jo(a.J,d)),y8(a,f))}a.n=2*a.O;f=new v8;for(e=0;e<a.J.p;++e)c=D(a.J,0,e),d=D(a.J,1,e),0!=(a.J.C[e]&131072)&&(f.a=D8(a.N,Io(a.J,c)),f.c=E8(a.N,Jo(a.J,c)),f.b=D8(a.N,Io(a.J,d)),f.d=E8(a.N,Jo(a.J,d)),x8(a,-2),y8(a,f));if(a.J.H){x8(a,320);if(0!=(a.E&8))for(c=\n0;c<a.J.c;++c)0!=(a.J.w[c]&-536870913)&&$8(a,D8(a.N,Io(a.J,c))-a.V/2,E8(a.N,Jo(a.J,c))-a.V/2,a.V);for(e=0;e<a.J.d;++e)0!=a.J.D[e]&&(c=D(a.J,0,e),d=D(a.J,1,e),$8(a,(D8(a.N,Io(a.J,c))+D8(a.N,Io(a.J,d))-a.V)/2,(E8(a.N,Jo(a.J,c))+E8(a.N,Jo(a.J,d))-a.V)/2,a.V))}0==(a.E&32)&&(d=n9(a.J),null!=d&&(0==a.A.a&&0==a.A.b&&(c=a.N.c*t8(a.J),g9(a),B8(a,c),f9(a,null,c,0)),U8(a,H(a.B)),x8(a,448),a9(a,d,a.A.a,a.A.b+0.30000001192092896*a.B)));U8(a,a.T);a.n=a.U;x8(a,a.M);I8(a);a.Q.ih();a.W.ih();for(c=0;c<a.J.o;++c)H8(a,\nc)?(x8(a,-3),P8(a,c),x8(a,a.M)):0!=a.r[c]?(x8(a,a.r[c]),P8(a,c),x8(a,a.M)):!b&&1!=a.J.A[c]&&6!=a.J.A[c]&&0==(a.E&2048)&&null==Sp(a.J,c)&&a.J.A[c]<Xn.length?(d=a,e=Xn[a.J.A[c]],g=f=void 0,f=(tJ(),uJ),g=new s9(e),e=q9(g,f),d.C=-5,d.e=gl+(~~e.d>>16&255)+Yb+(~~e.d>>8&255)+Yb+(e.d&255)+Rb,P8(a,c),x8(a,a.M)):P8(a,c);for(c=new uq(a.Q);c.b<c.d.Dg();)b=vq(c),x8(a,b.a),$8(a,b.b-a.R/2,b.c-a.R/2,a.R);x8(a,a.M);c=!1;for(b=0;b<a.J.d;++b)d=null,0!=(a.J.D[b]&16320)?(e=~~(a.J.D[b]&960)>>6,d=(~~(a.J.D[b]&960)>>6)+\n(~~(a.J.D[b]&15360)>>10),d=e==d?uh+e+Ch:uh+e+Fd+d+Ch):0!=(a.J.D[b]&786432)?d=262144==(a.J.D[b]&786432)?Fh:32==(a.J.D[b]&48)?"r!a":o8:0!=(a.J.D[b]&48)&&(d=32==(a.J.D[b]&48)?r8:"!r"),e=~~(a.J.D[b]&114688)>>14,0!=e&&(d=(null==d?m:d)+e),null!=d&&(h=D(a.J,0,b),j=D(a.J,1,b),c||(U8(a,~~((2*a.T+1)/3)),c=!0),f=(D8(a.N,Io(a.J,h))+D8(a.N,Io(a.J,j)))/2,g=(E8(a.N,Jo(a.J,h))+E8(a.N,Jo(a.J,j)))/2,e=D8(a.N,Io(a.J,j))-D8(a.N,Io(a.J,h)),j=E8(a.N,Jo(a.J,j))-E8(a.N,Jo(a.J,h)),h=Math.sqrt(e*e+j*j),n=0.6*R8(a,d),l=0.55*\na.o,0!=h&&(0<e?S8(a,f+n*j/h,g-l*e/h,d,!0):S8(a,f-n*j/h,g+l*e/h,d,!0)));c&&U8(a,a.T);a.q=C(v9,o,82,a.J.o,0);for(b=0;b<a.J.p;++b)(2==a.J.E[b]||26==a.J.E[b]||64==a.J.E[b])&&X8(a,b);for(b=0;b<a.J.p;++b)2!=a.J.E[b]&&26!=a.J.E[b]&&64!=a.J.E[b]&&X8(a,b);if(0==(a.E&64))for(b=0;b<a.J.p;++b)if(0!=~~(a.J.C[b]&48)>>4){switch(~~(a.J.C[b]&48)>>4){case 1:g=2==to(a.J,b)?pf:0!=(a.J.C[b]&4)?Kk:Cg;break;case 2:g=2==to(a.J,b)?"Z":0!=(a.J.C[b]&4)?Oj:q8;break;default:g=ce}U8(a,~~((2*a.T+1)/3));x8(a,w8(a.J,b)?-3:448);e=\nD(a.J,0,b);f=D(a.J,1,b);c=(D8(a.N,Io(a.J,e))+D8(a.N,Io(a.J,f)))/2;d=(E8(a.N,Jo(a.J,e))+E8(a.N,Jo(a.J,f)))/2;h=(D8(a.N,Io(a.J,e))-D8(a.N,Io(a.J,f)))/3;e=(E8(a.N,Jo(a.J,e))-E8(a.N,Jo(a.J,f)))/3;S8(a,c+e,d-h,g,!0);x8(a,a.M);U8(a,a.T)}if(0!=(a.E&4)){U8(a,~~((2*a.T+1)/3));x8(a,384);for(b=0;b<a.J.p;++b)e=D(a.J,0,b),f=D(a.J,1,b),g=0!=(a.J.C[b]&512)?"d":Go(a.J,b)?Fh:m,c=(D8(a.N,Io(a.J,e))+D8(a.N,Io(a.J,f)))/2,d=(E8(a.N,Jo(a.J,e))+E8(a.N,Jo(a.J,f)))/2,S8(a,c,d,g+m+b,!0);x8(a,a.M);U8(a,a.T)}}c=m9(a)}return c}\ny(729,628,Fn);_.he=function(){this.b.Kg(t9(this.a))};y(732,628,Fn);_.he=function(){ON(t9(this.a))};\nfunction u9(a,b){var c;Wn();this.w=new oL;this.J=a;this.E=0;this.H=1;this.N=new j9;this.W=new lq;this.Q=new lq;this.t=C(mo,mn,-1,this.J.o,2);this.A=new mL;this.M=0;this.C=-1;c=(tJ(),uJ);var d=$n;o9();this.u=new Zn(H((~~c.d>>16&255)+0.30000001192092896*((~~d.d>>16&255)-(~~c.d>>16&255))),H((~~c.d>>8&255)+0.30000001192092896*((~~d.d>>8&255)-(~~c.d>>8&255))),H((c.d&255)+0.30000001192092896*((d.d&255)-(c.d&255))));this.v=q9(Yn,c);this.F=bo;this.G=ao;this.c=new lq;this.b=new lq;this.d=new ww;this.f=new gK(Hf,\n0,12);new gK(Hf,0,120);this.k=m;++Q8;this.a=b}y(765,28,{},u9);_.Ld=function(a){var b;b=m;null!=this.a&&0<this.a.length&&(b=hT(this.a,"(\\\\r|\\\\n|\\\\r\\\\n)",zh),b=a+"<chemical:x-mdl-molfile>"+b+"<\/chemical:x-mdl-molfile>\\n");return b};_.Md=function(a){return\'xmlns:chemical="http://www.ch.ic.ac.uk/chemime/"\'+a};_.a=null;Y(3);Y(28);Y(765);var v9=BU(1E3,nL);Y(4);Y(5);Y(19);N($_)(7);function fy(){return m};\n//# sourceURL=7.js\n')
