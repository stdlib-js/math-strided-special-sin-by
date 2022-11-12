// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n,t,e,o,a,u,i){var f,c,l,y;if(r<=0)return e;for(f=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,y=0;y<r;y++)void 0!==(l=u.call(i,n[f],y,f,c,n,e))&&(e[c]=a(l)),f+=t,c+=o;return e}function y(r,n,t,e,o,a,u,i,f,c){var l,y,v,p;if(r<=0)return o;for(l=e,y=u,p=0;p<r;p++)void 0!==(v=f.call(c,n[l],p,l,y,n,o))&&(o[y]=i(v)),l+=t,y+=a;return o}c(l,"ndarray",y);var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var s=v&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,a;if(null==r)return p.call(r);t=r[w],a=w,n=null!=(o=r)&&b.call(o,a);try{r[w]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[w]=t:delete r[w],e}:function(r){return p.call(r)},A="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null;var _,m="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(A&&t instanceof Uint32Array||"[object Uint32Array]"===s(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var h=_,U="function"==typeof Float64Array;var j="function"==typeof Float64Array?Float64Array:null;var g,N="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(U&&t instanceof Float64Array||"[object Float64Array]"===s(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var I=g,O="function"==typeof Uint8Array;var S="function"==typeof Uint8Array?Uint8Array:null;var E,F="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===s(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=E,T="function"==typeof Uint16Array;var G="function"==typeof Uint16Array?Uint16Array:null;var P,L="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(T&&t instanceof Uint16Array||"[object Uint16Array]"===s(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V,W={uint16:P,uint8:H};(V=new W.uint16(1))[0]=4660;var k=52===new W.uint8(V.buffer)[0],M=!0===k?1:0,x=new I(1),Y=new h(x.buffer);function C(r){return x[0]=r,Y[M]}function q(r,n){var t,e,o,a;return o=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(o=1-(t=.5*a))+(1-o-t+(a*e-r*n))}var z=-.16666666666666632;function B(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(z+o*t):r-(o*(.5*n-e*t)-n-e*z)}var D,J,K=!0===k?0:1,Q=new I(1),R=new h(Q.buffer);!0===k?(D=1,J=0):(D=0,J=1);var X={HIGH:D,LOW:J},Z=new I(1),$=new h(Z.buffer),rr=X.HIGH,nr=X.LOW;function tr(r,n){return $[rr]=r,$[nr]=n,Z[0]}var er,or,ar=Math.floor,ur=Number.POSITIVE_INFINITY,ir=Number.NEGATIVE_INFINITY;function fr(r){return r!=r}function cr(r){return r===ur||r===ir}!0===k?(er=1,or=0):(er=0,or=1);var lr={HIGH:er,LOW:or},yr=new I(1),vr=new h(yr.buffer),pr=lr.HIGH,br=lr.LOW;function wr(r,n){return yr[0]=n,r[0]=vr[pr],r[1]=vr[br],r}function sr(r,n){return 1===arguments.length?wr([0,0],r):wr(r,n)}var Ar=[0,0];function dr(r,n,t,e){return fr(r)||cr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return dr(r,[0,0],1,0)}),"assign",dr);var _r=[0,0],mr=[0,0];function hr(r,n){var t,e,o,a,u;return 0===n||0===r||fr(r)||cr(r)?r:(dr(r,_r,1,0),n+=_r[1],n+=function(r){var n=C(r);return(n=(2146435072&n)>>>20)-1023|0}(r=_r[0]),n<-1074?(o=r,sr(Ar,0),a=Ar[0],a&=2147483647,u=C(o),tr(a|=u&=2147483648,Ar[1])):n>1023?r<0?ir:ur:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,sr(mr,r),t=mr[0],t&=2148532223,e*tr(t|=n+1023<<20,mr[1])))}function Ur(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var jr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Nr=5.960464477539063e-8,Ir=Ur(20),Or=Ur(20),Sr=Ur(20),Er=Ur(20);function Fr(r,n,t,e,o,a,u,i,f){var c,l,y,v,p,b,w,s,A;for(v=a,A=e[t],s=t,p=0;s>0;p++)l=Nr*A|0,Er[p]=A-16777216*l|0,A=e[s-1]+l,s-=1;if(A=hr(A,o),A-=8*ar(.125*A),A-=w=0|A,y=0,o>0?(w+=p=Er[t-1]>>24-o,Er[t-1]-=p<<24-o,y=Er[t-1]>>23-o):0===o?y=Er[t-1]>>23:A>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<t;p++)s=Er[p],0===c?0!==s&&(c=1,Er[p]=16777216-s):Er[p]=16777215-s;if(o>0)switch(o){case 1:Er[t-1]&=8388607;break;case 2:Er[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=hr(1,o)))}if(0===A){for(s=0,p=t-1;p>=a;p--)s|=Er[p];if(0===s){for(b=1;0===Er[a-b];b++);for(p=t+1;p<=t+b;p++){for(f[i+p]=jr[u+p],l=0,s=0;s<=i;s++)l+=r[s]*f[i+(p-s)];e[p]=l}return Fr(r,n,t+=b,e,o,a,u,i,f)}}if(0===A)for(t-=1,o-=24;0===Er[t];)t-=1,o-=24;else(A=hr(A,-o))>=16777216?(l=Nr*A|0,Er[t]=A-16777216*l|0,o+=24,Er[t+=1]=l):Er[t]=0|A;for(l=hr(1,o),p=t;p>=0;p--)e[p]=l*Er[p],l*=Nr;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=gr[b]*e[p+b];Sr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Sr[p];for(n[0]=0===y?l:-l,l=Sr[0]-l,p=1;p<=t;p++)l+=Sr[p];return n[1]=0===y?l:-l,7&w}function Hr(r,n,t,e){var o,a,u,i,f,c,l;for(4,(a=(t-3)/24|0)<0&&(a=0),i=t-24*(a+1),c=a-(u=e-1),l=u+4,f=0;f<=l;f++)Ir[f]=c<0?0:jr[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=u;c++)o+=r[c]*Ir[u+(f-c)];Or[f]=o}return 4,Fr(r,n,4,Or,i,4,a,u,Ir)}var Tr=Math.round;function Gr(r,n,t){var e,o,a,u,i;return a=r-1.5707963267341256*(e=Tr(.6366197723675814*r)),u=6077100506506192e-26*e,i=n>>20|0,t[0]=a-u,i-(C(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=a)-(a=o-(u=6077100506303966e-26*e))-u),t[0]=a-u,i-(C(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=a)-(a=o-(u=20222662487111665e-37*e))-u),t[0]=a-u)),t[1]=a-t[0]-u,e}var Pr=1.5707963267341256,Lr=6077100506506192e-26,Vr=2*Lr,Wr=4*Lr,kr=[0,0,0],Mr=[0,0];function xr(r,n){var t,e,o,a,u,i,f;if((o=2147483647&C(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Gr(r,o,n):o<=1073928572?r>0?(f=r-Pr,n[0]=f-Lr,n[1]=f-n[0]-Lr,1):(f=r+Pr,n[0]=f+Lr,n[1]=f-n[0]+Lr,-1):r>0?(f=r-2*Pr,n[0]=f-Vr,n[1]=f-n[0]-Vr,2):(f=r+2*Pr,n[0]=f+Vr,n[1]=f-n[0]+Vr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Gr(r,o,n):r>0?(f=r-3*Pr,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*Pr,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===o?Gr(r,o,n):r>0?(f=r-4*Pr,n[0]=f-Wr,n[1]=f-n[0]-Wr,4):(f=r+4*Pr,n[0]=f+Wr,n[1]=f-n[0]+Wr,-4);if(o<1094263291)return Gr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Q[0]=r,R[K]}(r),f=tr(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)kr[u]=0|f,f=16777216*(f-kr[u]);for(kr[2]=f,a=3;0===kr[a-1];)a-=1;return i=Hr(kr,Mr,e,a),r<0?(n[0]=-Mr[0],n[1]=-Mr[1],-i):(n[0]=Mr[0],n[1]=Mr[1],i)}var Yr=[0,0];function Cr(r){var n;if(n=C(r),(n&=2147483647)<=1072243195)return n<1045430272?r:B(r,0);if(n>=2146435072)return NaN;switch(3&xr(r,Yr)){case 0:return B(Yr[0],Yr[1]);case 1:return q(Yr[0],Yr[1]);case 2:return-B(Yr[0],Yr[1]);default:return-q(Yr[0],Yr[1])}}function qr(r,n,t,e,o,a,u){return l(r,n,t,e,o,Cr,a,u)}function zr(r,n,t,e,o,a,u,i,f){return y(r,n,t,e,o,a,u,Cr,i,f)}c(qr,"ndarray",zr);export{qr as default,zr as ndarray};
//# sourceMappingURL=mod.js.map
