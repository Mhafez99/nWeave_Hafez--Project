(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="148",If=0,fl=1,zf=2,Wc=1,Ff=2,Lr=3,yi=0,nn=1,Io=2,rs=3,Un=0,$i=1,dl=2,hl=3,pl=4,Of=5,qi=100,Nf=101,Bf=102,ml=103,gl=104,kf=200,Uf=201,Gf=202,Vf=203,Xc=204,qc=205,Hf=206,Wf=207,Xf=208,qf=209,Yf=210,jf=0,Zf=1,$f=2,io=3,Kf=4,Jf=5,Qf=6,ed=7,zo=0,td=1,nd=2,Pn=0,id=1,rd=2,sd=3,ad=4,od=5,Yc=300,rr=301,sr=302,ro=303,so=304,Ks=306,ao=1e3,ln=1001,oo=1002,Et=1003,_l=1004,ha=1005,Qt=1006,ld=1007,Gr=1008,Mi=1009,cd=1010,ud=1011,jc=1012,fd=1013,ui=1014,fi=1015,Vr=1016,dd=1017,hd=1018,Ki=1020,pd=1021,md=1022,cn=1023,gd=1024,_d=1025,hi=1026,ar=1027,vd=1028,xd=1029,yd=1030,Md=1031,wd=1033,pa=33776,ma=33777,ga=33778,_a=33779,vl=35840,xl=35841,yl=35842,Ml=35843,Sd=36196,wl=37492,Sl=37496,bl=37808,Tl=37809,El=37810,Cl=37811,Al=37812,Ll=37813,Pl=37814,Dl=37815,Rl=37816,Il=37817,zl=37818,Fl=37819,Ol=37820,Nl=37821,Bl=36492,wi=3e3,Ye=3001,bd=3200,Td=3201,Zc=0,Ed=1,un="srgb",Hr="srgb-linear",va=7680,Cd=519,kl=35044,Ul="300 es",lo=1035;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,l=r.length;s<l;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const Fr=Math.PI/180,Rs=180/Math.PI;function gr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[a&255]+xt[a>>8&255]+xt[a>>16&255]+xt[a>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Pt(a,e,t){return Math.max(e,Math.min(t,a))}function Fo(a,e){return(a%e+e)%e}function Ad(a,e,t,i,r){return i+(a-e)*(r-i)/(t-e)}function Ld(a,e,t){return a!==e?(t-a)/(e-a):0}function Or(a,e,t){return(1-t)*a+t*e}function Pd(a,e,t,i){return Or(a,e,1-Math.exp(-t*i))}function Dd(a,e=1){return e-Math.abs(Fo(a,e*2)-e)}function Rd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Id(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function zd(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Fd(a,e){return a+Math.random()*(e-a)}function Od(a){return a*(.5-Math.random())}function Nd(a){a!==void 0&&(Gl=a);let e=Gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bd(a){return a*Fr}function kd(a){return a*Rs}function co(a){return(a&a-1)===0&&a!==0}function Ud(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Is(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Gd(a,e,t,i,r){const s=Math.cos,l=Math.sin,o=s(t/2),f=l(t/2),u=s((e+i)/2),c=l((e+i)/2),d=s((e-i)/2),h=l((e-i)/2),_=s((i-e)/2),x=l((i-e)/2);switch(r){case"XYX":a.set(o*c,f*d,f*h,o*u);break;case"YZY":a.set(f*h,o*c,f*d,o*u);break;case"ZXZ":a.set(f*d,f*h,o*c,o*u);break;case"XZX":a.set(o*c,f*x,f*_,o*u);break;case"YXY":a.set(f*_,o*c,f*x,o*u);break;case"ZYZ":a.set(f*x,f*_,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pr(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Lt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var Vd=Object.freeze({__proto__:null,DEG2RAD:Fr,RAD2DEG:Rs,generateUUID:gr,clamp:Pt,euclideanModulo:Fo,mapLinear:Ad,inverseLerp:Ld,lerp:Or,damp:Pd,pingpong:Dd,smoothstep:Rd,smootherstep:Id,randInt:zd,randFloat:Fd,randFloatSpread:Od,seededRandom:Nd,degToRad:Bd,radToDeg:kd,isPowerOfTwo:co,ceilPowerOfTwo:Ud,floorPowerOfTwo:Is,setQuaternionFromProperEuler:Gd,normalize:Lt,denormalize:Pr});class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*i-l*r+e.x,this.y=s*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,l,o,f,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=f,c[6]=i,c[7]=l,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,l=i[0],o=i[3],f=i[6],u=i[1],c=i[4],d=i[7],h=i[2],_=i[5],x=i[8],m=r[0],v=r[3],n=r[6],T=r[1],w=r[4],S=r[7],E=r[2],D=r[5],R=r[8];return s[0]=l*m+o*T+f*E,s[3]=l*v+o*w+f*D,s[6]=l*n+o*S+f*R,s[1]=u*m+c*T+d*E,s[4]=u*v+c*w+d*D,s[7]=u*n+c*S+d*R,s[2]=h*m+_*T+x*E,s[5]=h*v+_*w+x*D,s[8]=h*n+_*S+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],l=e[4],o=e[5],f=e[6],u=e[7],c=e[8];return t*l*c-t*o*u-i*s*c+i*o*f+r*s*u-r*l*f}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],l=e[4],o=e[5],f=e[6],u=e[7],c=e[8],d=c*l-o*u,h=o*f-c*s,_=u*s-l*f,x=t*d+i*h+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return e[0]=d*m,e[1]=(r*u-c*i)*m,e[2]=(o*i-r*l)*m,e[3]=h*m,e[4]=(c*t-r*f)*m,e[5]=(r*s-o*t)*m,e[6]=_*m,e[7]=(i*f-u*t)*m,e[8]=(l*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,l,o){const f=Math.cos(s),u=Math.sin(s);return this.set(i*f,i*u,-i*(f*l+u*o)+l+e,-r*u,r*f,-r*(-u*l+f*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new Xt;function $c(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Wr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function pi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Cs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const ya={[un]:{[Hr]:pi},[Hr]:{[un]:Cs}},bt={legacyMode:!0,get workingColorSpace(){return Hr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(ya[e]&&ya[e][t]!==void 0){const i=ya[e][t];return a.r=i(a.r),a.g=i(a.g),a.b=i(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},sn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function Ma(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function as(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=bt.workingColorSpace){if(e=Fo(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,l=2*i-s;this.r=Ma(l,s,e+1/3),this.g=Ma(l,s,e),this.b=Ma(l,s,e-1/3)}return bt.toWorkingColorSpace(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const l=r[1],o=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const f=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(f,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],l=s.length;if(l===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bt.toWorkingColorSpace(this,t),this;if(l===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=un){const i=Kc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return bt.fromWorkingColorSpace(as(this,lt),e),Pt(lt.r*255,0,255)<<16^Pt(lt.g*255,0,255)<<8^Pt(lt.b*255,0,255)<<0}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(as(this,lt),t);const i=lt.r,r=lt.g,s=lt.b,l=Math.max(i,r,s),o=Math.min(i,r,s);let f,u;const c=(o+l)/2;if(o===l)f=0,u=0;else{const d=l-o;switch(u=c<=.5?d/(l+o):d/(2-l-o),l){case i:f=(r-s)/d+(r<s?6:0);break;case r:f=(s-i)/d+2;break;case s:f=(i-r)/d+4;break}f/=6}return e.h=f,e.s=u,e.l=c,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(as(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=un){return bt.fromWorkingColorSpace(as(this,lt),e),e!==un?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(sn),sn.h+=e,sn.s+=t,sn.l+=i,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(ss);const i=Or(sn.h,ss.h,t),r=Or(sn.s,ss.s,t),s=Or(sn.l,ss.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=Kc;let Li;class Jc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=Wr("canvas")),Li.width=e.width,Li.height=e.height;const i=Li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let l=0;l<s.length;l++)s[l]=pi(s[l]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pi(t[i]/255)*255):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Qc{constructor(e=null){this.isSource=!0,this.uuid=gr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let l=0,o=r.length;l<o;l++)r[l].isDataTexture?s.push(wa(r[l].image)):s.push(wa(r[l]))}else s=wa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wa(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Jc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hd=0;class Dt extends mr{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=ln,r=ln,s=Qt,l=Gr,o=cn,f=Mi,u=Dt.DEFAULT_ANISOTROPY,c=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=gr(),this.name="",this.source=new Qc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=l,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=f,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ao:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ao:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Yc;Dt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,i=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*r+l[12]*s,this.y=l[1]*t+l[5]*i+l[9]*r+l[13]*s,this.z=l[2]*t+l[6]*i+l[10]*r+l[14]*s,this.w=l[3]*t+l[7]*i+l[11]*r+l[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const f=e.elements,u=f[0],c=f[4],d=f[8],h=f[1],_=f[5],x=f[9],m=f[2],v=f[6],n=f[10];if(Math.abs(c-h)<.01&&Math.abs(d-m)<.01&&Math.abs(x-v)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+m)<.1&&Math.abs(x+v)<.1&&Math.abs(u+_+n-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(u+1)/2,S=(_+1)/2,E=(n+1)/2,D=(c+h)/4,R=(d+m)/4,M=(x+v)/4;return w>S&&w>E?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=D/i,s=R/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=D/r,s=M/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=M/s),this.set(i,r,s,t),this}let T=Math.sqrt((v-x)*(v-x)+(d-m)*(d-m)+(h-c)*(h-c));return Math.abs(T)<.001&&(T=1),this.x=(v-x)/T,this.y=(d-m)/T,this.z=(h-c)/T,this.w=Math.acos((u+_+n-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Si extends mr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Qt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eu extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wd extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,l,o){let f=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[l+0],_=s[l+1],x=s[l+2],m=s[l+3];if(o===0){e[t+0]=f,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=_,e[t+2]=x,e[t+3]=m;return}if(d!==m||f!==h||u!==_||c!==x){let v=1-o;const n=f*h+u*_+c*x+d*m,T=n>=0?1:-1,w=1-n*n;if(w>Number.EPSILON){const E=Math.sqrt(w),D=Math.atan2(E,n*T);v=Math.sin(v*D)/E,o=Math.sin(o*D)/E}const S=o*T;if(f=f*v+h*S,u=u*v+_*S,c=c*v+x*S,d=d*v+m*S,v===1-o){const E=1/Math.sqrt(f*f+u*u+c*c+d*d);f*=E,u*=E,c*=E,d*=E}}e[t]=f,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,l){const o=i[r],f=i[r+1],u=i[r+2],c=i[r+3],d=s[l],h=s[l+1],_=s[l+2],x=s[l+3];return e[t]=o*x+c*d+f*_-u*h,e[t+1]=f*x+c*h+u*d-o*_,e[t+2]=u*x+c*_+o*h-f*d,e[t+3]=c*x-o*d-f*h-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,l=e._order,o=Math.cos,f=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),h=f(i/2),_=f(r/2),x=f(s/2);switch(l){case"XYZ":this._x=h*c*d+u*_*x,this._y=u*_*d-h*c*x,this._z=u*c*x+h*_*d,this._w=u*c*d-h*_*x;break;case"YXZ":this._x=h*c*d+u*_*x,this._y=u*_*d-h*c*x,this._z=u*c*x-h*_*d,this._w=u*c*d+h*_*x;break;case"ZXY":this._x=h*c*d-u*_*x,this._y=u*_*d+h*c*x,this._z=u*c*x+h*_*d,this._w=u*c*d-h*_*x;break;case"ZYX":this._x=h*c*d-u*_*x,this._y=u*_*d+h*c*x,this._z=u*c*x-h*_*d,this._w=u*c*d+h*_*x;break;case"YZX":this._x=h*c*d+u*_*x,this._y=u*_*d+h*c*x,this._z=u*c*x-h*_*d,this._w=u*c*d-h*_*x;break;case"XZY":this._x=h*c*d-u*_*x,this._y=u*_*d-h*c*x,this._z=u*c*x+h*_*d,this._w=u*c*d+h*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],l=t[1],o=t[5],f=t[9],u=t[2],c=t[6],d=t[10],h=i+o+d;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(c-f)*_,this._y=(s-u)*_,this._z=(l-r)*_}else if(i>o&&i>d){const _=2*Math.sqrt(1+i-o-d);this._w=(c-f)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(s+u)/_}else if(o>d){const _=2*Math.sqrt(1+o-i-d);this._w=(s-u)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(f+c)/_}else{const _=2*Math.sqrt(1+d-i-o);this._w=(l-r)/_,this._x=(s+u)/_,this._y=(f+c)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,l=e._w,o=t._x,f=t._y,u=t._z,c=t._w;return this._x=i*c+l*o+r*u-s*f,this._y=r*c+l*f+s*o-i*u,this._z=s*c+l*u+i*f-r*o,this._w=l*c-i*o-r*f-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,l=this._w;let o=l*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=l,this._x=i,this._y=r,this._z=s,this;const f=1-o*o;if(f<=Number.EPSILON){const _=1-t;return this._w=_*l+t*this._w,this._x=_*i+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(f),c=Math.atan2(u,o),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=l*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,l=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*l,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*l,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,l=e.y,o=e.z,f=e.w,u=f*t+l*r-o*i,c=f*i+o*t-s*r,d=f*r+s*i-l*t,h=-s*t-l*i-o*r;return this.x=u*f+h*-s+c*-o-d*-l,this.y=c*f+h*-l+d*-s-u*-o,this.z=d*f+h*-o+u*-l-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,l=t.x,o=t.y,f=t.z;return this.x=r*f-s*o,this.y=s*l-i*f,this.z=i*o-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new k,Vl=new Qr;class es{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,l=-1/0,o=-1/0;for(let f=0,u=e.length;f<u;f+=3){const c=e[f],d=e[f+1],h=e[f+2];c<t&&(t=c),d<i&&(i=d),h<r&&(r=h),c>s&&(s=c),d>l&&(l=d),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,l,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,l=-1/0,o=-1/0;for(let f=0,u=e.count;f<u;f++){const c=e.getX(f),d=e.getY(f),h=e.getZ(f);c<t&&(t=c),d<i&&(i=d),h<r&&(r=h),c>s&&(s=c),d>l&&(l=d),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,l,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let l=0,o=s.count;l<o;l++)$n.fromBufferAttribute(s,l).applyMatrix4(e.matrixWorld),this.expandByPoint($n)}else i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox),ba.applyMatrix4(e.matrixWorld),this.union(ba);const r=e.children;for(let s=0,l=r.length;s<l;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),os.subVectors(this.max,yr),Pi.subVectors(e.a,yr),Di.subVectors(e.b,yr),Ri.subVectors(e.c,yr),In.subVectors(Di,Pi),zn.subVectors(Ri,Di),Kn.subVectors(Pi,Ri);let t=[0,-In.z,In.y,0,-zn.z,zn.y,0,-Kn.z,Kn.y,In.z,0,-In.x,zn.z,0,-zn.x,Kn.z,0,-Kn.x,-In.y,In.x,0,-zn.y,zn.x,0,-Kn.y,Kn.x,0];return!Ta(t,Pi,Di,Ri,os)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Pi,Di,Ri,os))?!1:(ls.crossVectors(In,zn),t=[ls.x,ls.y,ls.z],Ta(t,Pi,Di,Ri,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $n.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($n).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new k,new k,new k,new k,new k,new k,new k,new k],$n=new k,ba=new es,Pi=new k,Di=new k,Ri=new k,In=new k,zn=new k,Kn=new k,yr=new k,os=new k,ls=new k,Jn=new k;function Ta(a,e,t,i,r){for(let s=0,l=a.length-3;s<=l;s+=3){Jn.fromArray(a,s);const o=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),f=e.dot(Jn),u=t.dot(Jn),c=i.dot(Jn);if(Math.max(-Math.max(f,u,c),Math.min(f,u,c))>o)return!1}return!0}const Xd=new es,Mr=new k,Ea=new k;class Oo{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,l=e.length;s<l;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Ea)),this.expandByPoint(Mr.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new k,Ca=new k,cs=new k,Fn=new k,Aa=new k,us=new k,La=new k;class qd{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.direction).multiplyScalar(t).add(this.origin),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ca.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Ca);const s=e.distanceTo(t)*.5,l=-this.direction.dot(cs),o=Fn.dot(this.direction),f=-Fn.dot(cs),u=Fn.lengthSq(),c=Math.abs(1-l*l);let d,h,_,x;if(c>0)if(d=l*f-o,h=l*o-f,x=s*c,d>=0)if(h>=-x)if(h<=x){const m=1/c;d*=m,h*=m,_=d*(d+l*h+2*o)+h*(l*d+h+2*f)+u}else h=s,d=Math.max(0,-(l*h+o)),_=-d*d+h*(h+2*f)+u;else h=-s,d=Math.max(0,-(l*h+o)),_=-d*d+h*(h+2*f)+u;else h<=-x?(d=Math.max(0,-(-l*s+o)),h=d>0?-s:Math.min(Math.max(-s,-f),s),_=-d*d+h*(h+2*f)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-f),s),_=h*(h+2*f)+u):(d=Math.max(0,-(l*s+o)),h=d>0?s:Math.min(Math.max(-s,-f),s),_=-d*d+h*(h+2*f)+u);else h=l>0?-s:s,d=Math.max(0,-(l*h+o)),_=-d*d+h*(h+2*f)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(cs).multiplyScalar(h).add(Ca),_}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const l=Math.sqrt(s-r),o=i-l,f=i+l;return o<0&&f<0?null:o<0?this.at(f,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,l,o,f;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,l=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,l=(e.min.y-h.y)*c),i>l||s>r||((s>i||isNaN(i))&&(i=s),(l<r||isNaN(r))&&(r=l),d>=0?(o=(e.min.z-h.z)*d,f=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,f=(e.min.z-h.z)*d),i>f||o>r)||((o>i||i!==i)&&(i=o),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){Aa.subVectors(t,e),us.subVectors(i,e),La.crossVectors(Aa,us);let l=this.direction.dot(La),o;if(l>0){if(r)return null;o=1}else if(l<0)o=-1,l=-l;else return null;Fn.subVectors(this.origin,e);const f=o*this.direction.dot(us.crossVectors(Fn,us));if(f<0)return null;const u=o*this.direction.dot(Aa.cross(Fn));if(u<0||f+u>l)return null;const c=-o*Fn.dot(La);return c<0?null:this.at(c/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,l,o,f,u,c,d,h,_,x,m,v){const n=this.elements;return n[0]=e,n[4]=t,n[8]=i,n[12]=r,n[1]=s,n[5]=l,n[9]=o,n[13]=f,n[2]=u,n[6]=c,n[10]=d,n[14]=h,n[3]=_,n[7]=x,n[11]=m,n[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),l=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,l=Math.cos(i),o=Math.sin(i),f=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=l*c,_=l*d,x=o*c,m=o*d;t[0]=f*c,t[4]=-f*d,t[8]=u,t[1]=_+x*u,t[5]=h-m*u,t[9]=-o*f,t[2]=m-h*u,t[6]=x+_*u,t[10]=l*f}else if(e.order==="YXZ"){const h=f*c,_=f*d,x=u*c,m=u*d;t[0]=h+m*o,t[4]=x*o-_,t[8]=l*u,t[1]=l*d,t[5]=l*c,t[9]=-o,t[2]=_*o-x,t[6]=m+h*o,t[10]=l*f}else if(e.order==="ZXY"){const h=f*c,_=f*d,x=u*c,m=u*d;t[0]=h-m*o,t[4]=-l*d,t[8]=x+_*o,t[1]=_+x*o,t[5]=l*c,t[9]=m-h*o,t[2]=-l*u,t[6]=o,t[10]=l*f}else if(e.order==="ZYX"){const h=l*c,_=l*d,x=o*c,m=o*d;t[0]=f*c,t[4]=x*u-_,t[8]=h*u+m,t[1]=f*d,t[5]=m*u+h,t[9]=_*u-x,t[2]=-u,t[6]=o*f,t[10]=l*f}else if(e.order==="YZX"){const h=l*f,_=l*u,x=o*f,m=o*u;t[0]=f*c,t[4]=m-h*d,t[8]=x*d+_,t[1]=d,t[5]=l*c,t[9]=-o*c,t[2]=-u*c,t[6]=_*d+x,t[10]=h-m*d}else if(e.order==="XZY"){const h=l*f,_=l*u,x=o*f,m=o*u;t[0]=f*c,t[4]=-d,t[8]=u*c,t[1]=h*d+m,t[5]=l*c,t[9]=_*d-x,t[2]=x*d-_,t[6]=o*c,t[10]=m*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yd,e,jd)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),On.crossVectors(i,Ut),On.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),On.crossVectors(i,Ut)),On.normalize(),fs.crossVectors(Ut,On),r[0]=On.x,r[4]=fs.x,r[8]=Ut.x,r[1]=On.y,r[5]=fs.y,r[9]=Ut.y,r[2]=On.z,r[6]=fs.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,l=i[0],o=i[4],f=i[8],u=i[12],c=i[1],d=i[5],h=i[9],_=i[13],x=i[2],m=i[6],v=i[10],n=i[14],T=i[3],w=i[7],S=i[11],E=i[15],D=r[0],R=r[4],M=r[8],A=r[12],z=r[1],G=r[5],Z=r[9],N=r[13],O=r[2],X=r[6],J=r[10],ne=r[14],Y=r[3],oe=r[7],ie=r[11],j=r[15];return s[0]=l*D+o*z+f*O+u*Y,s[4]=l*R+o*G+f*X+u*oe,s[8]=l*M+o*Z+f*J+u*ie,s[12]=l*A+o*N+f*ne+u*j,s[1]=c*D+d*z+h*O+_*Y,s[5]=c*R+d*G+h*X+_*oe,s[9]=c*M+d*Z+h*J+_*ie,s[13]=c*A+d*N+h*ne+_*j,s[2]=x*D+m*z+v*O+n*Y,s[6]=x*R+m*G+v*X+n*oe,s[10]=x*M+m*Z+v*J+n*ie,s[14]=x*A+m*N+v*ne+n*j,s[3]=T*D+w*z+S*O+E*Y,s[7]=T*R+w*G+S*X+E*oe,s[11]=T*M+w*Z+S*J+E*ie,s[15]=T*A+w*N+S*ne+E*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],l=e[1],o=e[5],f=e[9],u=e[13],c=e[2],d=e[6],h=e[10],_=e[14],x=e[3],m=e[7],v=e[11],n=e[15];return x*(+s*f*d-r*u*d-s*o*h+i*u*h+r*o*_-i*f*_)+m*(+t*f*_-t*u*h+s*l*h-r*l*_+r*u*c-s*f*c)+v*(+t*u*d-t*o*_-s*l*d+i*l*_+s*o*c-i*u*c)+n*(-r*o*c-t*f*d+t*o*h+r*l*d-i*l*h+i*f*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],l=e[4],o=e[5],f=e[6],u=e[7],c=e[8],d=e[9],h=e[10],_=e[11],x=e[12],m=e[13],v=e[14],n=e[15],T=d*v*u-m*h*u+m*f*_-o*v*_-d*f*n+o*h*n,w=x*h*u-c*v*u-x*f*_+l*v*_+c*f*n-l*h*n,S=c*m*u-x*d*u+x*o*_-l*m*_-c*o*n+l*d*n,E=x*d*f-c*m*f-x*o*h+l*m*h+c*o*v-l*d*v,D=t*T+i*w+r*S+s*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=T*R,e[1]=(m*h*s-d*v*s-m*r*_+i*v*_+d*r*n-i*h*n)*R,e[2]=(o*v*s-m*f*s+m*r*u-i*v*u-o*r*n+i*f*n)*R,e[3]=(d*f*s-o*h*s-d*r*u+i*h*u+o*r*_-i*f*_)*R,e[4]=w*R,e[5]=(c*v*s-x*h*s+x*r*_-t*v*_-c*r*n+t*h*n)*R,e[6]=(x*f*s-l*v*s-x*r*u+t*v*u+l*r*n-t*f*n)*R,e[7]=(l*h*s-c*f*s+c*r*u-t*h*u-l*r*_+t*f*_)*R,e[8]=S*R,e[9]=(x*d*s-c*m*s-x*i*_+t*m*_+c*i*n-t*d*n)*R,e[10]=(l*m*s-x*o*s+x*i*u-t*m*u-l*i*n+t*o*n)*R,e[11]=(c*o*s-l*d*s-c*i*u+t*d*u+l*i*_-t*o*_)*R,e[12]=E*R,e[13]=(c*m*r-x*d*r+x*i*h-t*m*h-c*i*v+t*d*v)*R,e[14]=(x*o*r-l*m*r-x*i*f+t*m*f+l*i*v-t*o*v)*R,e[15]=(l*d*r-c*o*r+c*i*f-t*d*f-l*i*h+t*o*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,l=e.x,o=e.y,f=e.z,u=s*l,c=s*o;return this.set(u*l+i,u*o-r*f,u*f+r*o,0,u*o+r*f,c*o+i,c*f-r*l,0,u*f-r*o,c*f+r*l,s*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,l){return this.set(1,i,s,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,l=t._y,o=t._z,f=t._w,u=s+s,c=l+l,d=o+o,h=s*u,_=s*c,x=s*d,m=l*c,v=l*d,n=o*d,T=f*u,w=f*c,S=f*d,E=i.x,D=i.y,R=i.z;return r[0]=(1-(m+n))*E,r[1]=(_+S)*E,r[2]=(x-w)*E,r[3]=0,r[4]=(_-S)*D,r[5]=(1-(h+n))*D,r[6]=(v+T)*D,r[7]=0,r[8]=(x+w)*R,r[9]=(v-T)*R,r[10]=(1-(h+m))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ii.set(r[0],r[1],r[2]).length();const l=Ii.set(r[4],r[5],r[6]).length(),o=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const u=1/s,c=1/l,d=1/o;return an.elements[0]*=u,an.elements[1]*=u,an.elements[2]*=u,an.elements[4]*=c,an.elements[5]*=c,an.elements[6]*=c,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),i.x=s,i.y=l,i.z=o,this}makePerspective(e,t,i,r,s,l){const o=this.elements,f=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),h=-(l+s)/(l-s),_=-2*l*s/(l-s);return o[0]=f,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=u,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=_,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,l){const o=this.elements,f=1/(t-e),u=1/(i-r),c=1/(l-s),d=(t+e)*f,h=(i+r)*u,_=(l+s)*c;return o[0]=2*f,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-_,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ii=new k,an=new ot,Yd=new k(0,0,0),jd=new k(1,1,1),On=new k,fs=new k,Ut=new k,Hl=new ot,Wl=new Qr;class ts{constructor(e=0,t=0,i=0,r=ts.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],l=r[4],o=r[8],f=r[1],u=r[5],c=r[9],d=r[2],h=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,_),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(f,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(f,s));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(f,s)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ts.DefaultOrder="XYZ";ts.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zd=0;const Xl=new k,zi=new Qr,wn=new ot,ds=new k,wr=new k,$d=new k,Kd=new Qr,ql=new k(1,0,0),Yl=new k(0,1,0),jl=new k(0,0,1),Jd={type:"added"},Zl={type:"removed"};class Rt extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DefaultUp.clone();const e=new k,t=new ts,i=new Qr,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Xt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Rt.DefaultMatrixWorldAutoUpdate,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ds.copy(e):ds.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(wr,ds,this.up):wn.lookAt(ds,wr,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(wn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Zl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const l=this.children[r].getObjectsByProperty(e,t);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,$d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,l=r.length;s<l;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,f){return o[f.uuid]===void 0&&(o[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const f=o.shapes;if(Array.isArray(f))for(let u=0,c=f.length;u<c;u++){const d=f[u];s(e.shapes,d)}else s(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let f=0,u=this.material.length;f<u;f++)o.push(s(e.materials,this.material[f]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const f=this.animations[o];r.animations.push(s(e.animations,f))}}if(t){const o=l(e.geometries),f=l(e.materials),u=l(e.textures),c=l(e.images),d=l(e.shapes),h=l(e.skeletons),_=l(e.animations),x=l(e.nodes);o.length>0&&(i.geometries=o),f.length>0&&(i.materials=f),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),_.length>0&&(i.animations=_),x.length>0&&(i.nodes=x)}return i.object=r,i;function l(o){const f=[];for(const u in o){const c=o[u];delete c.metadata,f.push(c)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DefaultUp=new k(0,1,0);Rt.DefaultMatrixAutoUpdate=!0;Rt.DefaultMatrixWorldAutoUpdate=!0;const on=new k,Sn=new k,Pa=new k,bn=new k,Fi=new k,Oi=new k,$l=new k,Da=new k,Ra=new k,Ia=new k;class Ln{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Sn.subVectors(i,t),Pa.subVectors(e,t);const l=on.dot(on),o=on.dot(Sn),f=on.dot(Pa),u=Sn.dot(Sn),c=Sn.dot(Pa),d=l*u-o*o;if(d===0)return s.set(-2,-1,-1);const h=1/d,_=(u*f-o*c)*h,x=(l*c-o*f)*h;return s.set(1-_-x,x,_)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,i,r,s,l,o,f){return this.getBarycoord(e,t,i,r,bn),f.set(0,0),f.addScaledVector(s,bn.x),f.addScaledVector(l,bn.y),f.addScaledVector(o,bn.z),f}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Sn.subVectors(e,t),on.cross(Sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),on.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ln.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let l,o;Fi.subVectors(r,i),Oi.subVectors(s,i),Da.subVectors(e,i);const f=Fi.dot(Da),u=Oi.dot(Da);if(f<=0&&u<=0)return t.copy(i);Ra.subVectors(e,r);const c=Fi.dot(Ra),d=Oi.dot(Ra);if(c>=0&&d<=c)return t.copy(r);const h=f*d-c*u;if(h<=0&&f>=0&&c<=0)return l=f/(f-c),t.copy(i).addScaledVector(Fi,l);Ia.subVectors(e,s);const _=Fi.dot(Ia),x=Oi.dot(Ia);if(x>=0&&_<=x)return t.copy(s);const m=_*u-f*x;if(m<=0&&u>=0&&x<=0)return o=u/(u-x),t.copy(i).addScaledVector(Oi,o);const v=c*x-_*d;if(v<=0&&d-c>=0&&_-x>=0)return $l.subVectors(s,r),o=(d-c)/(d-c+(_-x)),t.copy(r).addScaledVector($l,o);const n=1/(v+m+h);return l=m*n,o=h*n,t.copy(i).addScaledVector(Fi,l).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qd=0;class ns extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=$i,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const l=[];for(const o in s){const f=s[o];delete f.metadata,l.push(f)}return l}if(t){const s=r(e.textures),l=r(e.images);s.length>0&&(i.textures=s),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class No extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new k,hs=new He;class mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nu extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class iu extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mi extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let eh=0;const $t=new ot,za=new Rt,Ni=new k,Gt=new es,Sr=new es,pt=new k;class Ci extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($c(e)?iu:nu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const o=t[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Gt.min,Sr.min),Gt.expandByPoint(pt),pt.addVectors(Gt.max,Sr.max),Gt.expandByPoint(pt)):(Gt.expandByPoint(Sr.min),Gt.expandByPoint(Sr.max))}Gt.getCenter(i);let r=0;for(let s=0,l=e.count;s<l;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,l=t.length;s<l;s++){const o=t[s],f=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)pt.fromBufferAttribute(o,u),f&&(Ni.fromBufferAttribute(e,u),pt.add(Ni)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,l=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*o),4));const f=this.getAttribute("tangent").array,u=[],c=[];for(let z=0;z<o;z++)u[z]=new k,c[z]=new k;const d=new k,h=new k,_=new k,x=new He,m=new He,v=new He,n=new k,T=new k;function w(z,G,Z){d.fromArray(r,z*3),h.fromArray(r,G*3),_.fromArray(r,Z*3),x.fromArray(l,z*2),m.fromArray(l,G*2),v.fromArray(l,Z*2),h.sub(d),_.sub(d),m.sub(x),v.sub(x);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(n.copy(h).multiplyScalar(v.y).addScaledVector(_,-m.y).multiplyScalar(N),T.copy(_).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(N),u[z].add(n),u[G].add(n),u[Z].add(n),c[z].add(T),c[G].add(T),c[Z].add(T))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let z=0,G=S.length;z<G;++z){const Z=S[z],N=Z.start,O=Z.count;for(let X=N,J=N+O;X<J;X+=3)w(i[X+0],i[X+1],i[X+2])}const E=new k,D=new k,R=new k,M=new k;function A(z){R.fromArray(s,z*3),M.copy(R);const G=u[z];E.copy(G),E.sub(R.multiplyScalar(R.dot(G))).normalize(),D.crossVectors(M,G);const N=D.dot(c[z])<0?-1:1;f[z*4]=E.x,f[z*4+1]=E.y,f[z*4+2]=E.z,f[z*4+3]=N}for(let z=0,G=S.length;z<G;++z){const Z=S[z],N=Z.start,O=Z.count;for(let X=N,J=N+O;X<J;X+=3)A(i[X+0]),A(i[X+1]),A(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,_=i.count;h<_;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,l=new k,o=new k,f=new k,u=new k,c=new k,d=new k;if(e)for(let h=0,_=e.count;h<_;h+=3){const x=e.getX(h+0),m=e.getX(h+1),v=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),l.fromBufferAttribute(t,v),c.subVectors(l,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,x),f.fromBufferAttribute(i,m),u.fromBufferAttribute(i,v),o.add(c),f.add(c),u.add(c),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(m,f.x,f.y,f.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let h=0,_=t.count;h<_;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),l.fromBufferAttribute(t,h+2),c.subVectors(l,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,f){const u=o.array,c=o.itemSize,d=o.normalized,h=new u.constructor(f.length*c);let _=0,x=0;for(let m=0,v=f.length;m<v;m++){o.isInterleavedBufferAttribute?_=f[m]*o.data.stride+o.offset:_=f[m]*c;for(let n=0;n<c;n++)h[x++]=u[_++]}return new mn(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ci,i=this.index.array,r=this.attributes;for(const o in r){const f=r[o],u=e(f,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const f=[],u=s[o];for(let c=0,d=u.length;c<d;c++){const h=u[c],_=e(h,i);f.push(_)}t.morphAttributes[o]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let o=0,f=l.length;o<f;o++){const u=l[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const u in f)f[u]!==void 0&&(e[u]=f[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const u=i[f];e.data.attributes[f]=u.toJSON(e.data)}const r={};let s=!1;for(const f in this.morphAttributes){const u=this.morphAttributes[f],c=[];for(let d=0,h=u.length;d<h;d++){const _=u[d];c.push(_.toJSON(e.data))}c.length>0&&(r[f]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,_=d.length;h<_;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let u=0,c=l.length;u<c;u++){const d=l[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kl=new ot,Bi=new qd,Fa=new Oo,br=new k,Tr=new k,Er=new k,Oa=new k,ps=new k,ms=new He,gs=new He,_s=new He,Na=new k,vs=new k;class hn extends Rt{constructor(e=new Ci,t=new No){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ps.set(0,0,0);for(let f=0,u=s.length;f<u;f++){const c=o[f],d=s[f];c!==0&&(Oa.fromBufferAttribute(d,e),l?ps.addScaledVector(Oa,c):ps.addScaledVector(Oa.sub(t),c))}t.add(ps)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),e.ray.intersectsSphere(Fa)===!1)||(Kl.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(Kl),i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1))return;let l;const o=i.index,f=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const m=d[_],v=r[m.materialIndex],n=Math.max(m.start,h.start),T=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let w=n,S=T;w<S;w+=3){const E=o.getX(w),D=o.getX(w+1),R=o.getX(w+2);l=xs(this,v,e,Bi,u,c,E,D,R),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=m.materialIndex,t.push(l))}}else{const _=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=_,v=x;m<v;m+=3){const n=o.getX(m),T=o.getX(m+1),w=o.getX(m+2);l=xs(this,r,e,Bi,u,c,n,T,w),l&&(l.faceIndex=Math.floor(m/3),t.push(l))}}else if(f!==void 0)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const m=d[_],v=r[m.materialIndex],n=Math.max(m.start,h.start),T=Math.min(f.count,Math.min(m.start+m.count,h.start+h.count));for(let w=n,S=T;w<S;w+=3){const E=w,D=w+1,R=w+2;l=xs(this,v,e,Bi,u,c,E,D,R),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=m.materialIndex,t.push(l))}}else{const _=Math.max(0,h.start),x=Math.min(f.count,h.start+h.count);for(let m=_,v=x;m<v;m+=3){const n=m,T=m+1,w=m+2;l=xs(this,r,e,Bi,u,c,n,T,w),l&&(l.faceIndex=Math.floor(m/3),t.push(l))}}}}function th(a,e,t,i,r,s,l,o){let f;if(e.side===nn?f=i.intersectTriangle(l,s,r,!0,o):f=i.intersectTriangle(r,s,l,e.side===yi,o),f===null)return null;vs.copy(o),vs.applyMatrix4(a.matrixWorld);const u=t.ray.origin.distanceTo(vs);return u<t.near||u>t.far?null:{distance:u,point:vs.clone(),object:a}}function xs(a,e,t,i,r,s,l,o,f){a.getVertexPosition(l,br),a.getVertexPosition(o,Tr),a.getVertexPosition(f,Er);const u=th(a,e,t,i,br,Tr,Er,Na);if(u){r&&(ms.fromBufferAttribute(r,l),gs.fromBufferAttribute(r,o),_s.fromBufferAttribute(r,f),u.uv=Ln.getUV(Na,br,Tr,Er,ms,gs,_s,new He)),s&&(ms.fromBufferAttribute(s,l),gs.fromBufferAttribute(s,o),_s.fromBufferAttribute(s,f),u.uv2=Ln.getUV(Na,br,Tr,Er,ms,gs,_s,new He));const c={a:l,b:o,c:f,normal:new k,materialIndex:0};Ln.getNormal(br,Tr,Er,c.normal),u.face=c}return u}class _r extends Ci{constructor(e=1,t=1,i=1,r=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:l};const o=this;r=Math.floor(r),s=Math.floor(s),l=Math.floor(l);const f=[],u=[],c=[],d=[];let h=0,_=0;x("z","y","x",-1,-1,i,t,e,l,s,0),x("z","y","x",1,-1,i,t,-e,l,s,1),x("x","z","y",1,1,e,i,t,r,l,2),x("x","z","y",1,-1,e,i,-t,r,l,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(f),this.setAttribute("position",new mi(u,3)),this.setAttribute("normal",new mi(c,3)),this.setAttribute("uv",new mi(d,2));function x(m,v,n,T,w,S,E,D,R,M,A){const z=S/R,G=E/M,Z=S/2,N=E/2,O=D/2,X=R+1,J=M+1;let ne=0,Y=0;const oe=new k;for(let ie=0;ie<J;ie++){const j=ie*G-N;for(let q=0;q<X;q++){const de=q*z-Z;oe[m]=de*T,oe[v]=j*w,oe[n]=O,u.push(oe.x,oe.y,oe.z),oe[m]=0,oe[v]=0,oe[n]=D>0?1:-1,c.push(oe.x,oe.y,oe.z),d.push(q/R),d.push(1-ie/M),ne+=1}}for(let ie=0;ie<M;ie++)for(let j=0;j<R;j++){const q=h+j+X*ie,de=h+j+X*(ie+1),le=h+(j+1)+X*(ie+1),fe=h+(j+1)+X*ie;f.push(q,de,fe),f.push(de,le,fe),Y+=6}o.addGroup(_,Y,A),_+=Y,h+=ne}}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(a){const e={};for(let t=0;t<a.length;t++){const i=or(a[t]);for(const r in i)e[r]=i[r]}return e}function nh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ru(a){return a.getRenderTarget()===null&&a.outputEncoding===Ye?un:Hr}const ih={clone:or,merge:Tt};var rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class su extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends su{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,u=l.fullHeight;s+=l.offsetX*r/f,t-=l.offsetY*i/u,r*=l.width/f,i*=l.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Ui=1;class ah extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Ct(ki,Ui,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ct(ki,Ui,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const l=new Ct(ki,Ui,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const o=new Ct(ki,Ui,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const f=new Ct(ki,Ui,e,t);f.layers=this.layers,f.up.set(0,1,0),f.lookAt(0,0,1),this.add(f);const u=new Ct(ki,Ui,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,l,o,f,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Pn,e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,l),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,f),i.texture.generateMipmaps=_,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class au extends Dt{constructor(e,t,i,r,s,l,o,f,u,c){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,i,r,s,l,o,f,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oh extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new au(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _r(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Un});s.uniforms.tEquirect.value=t;const l=new hn(r,s),o=t.minFilter;return t.minFilter===Gr&&(t.minFilter=Qt),new ah(1,10,this).update(e,l),t.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,r);e.setRenderTarget(s)}}const Ba=new k,lh=new k,ch=new Xt;class ni{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ba.subVectors(i,t).cross(lh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ch.getNormalMatrix(e),r=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Oo,ys=new k;class Bo{constructor(e=new ni,t=new ni,i=new ni,r=new ni,s=new ni,l=new ni){this.planes=[e,t,i,r,s,l]}set(e,t,i,r,s,l){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],l=i[2],o=i[3],f=i[4],u=i[5],c=i[6],d=i[7],h=i[8],_=i[9],x=i[10],m=i[11],v=i[12],n=i[13],T=i[14],w=i[15];return t[0].setComponents(o-r,d-f,m-h,w-v).normalize(),t[1].setComponents(o+r,d+f,m+h,w+v).normalize(),t[2].setComponents(o+s,d+u,m+_,w+n).normalize(),t[3].setComponents(o-s,d-u,m-_,w-n).normalize(),t[4].setComponents(o-l,d-c,m-x,w-T).normalize(),t[5].setComponents(o+l,d+c,m+x,w+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ou(){let a=null,e=!1,t=null,i=null;function r(s,l){t(s,l),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function uh(a,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,_=a.createBuffer();a.bindBuffer(c,_),a.bufferData(c,d,h),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const h=c.array,_=c.updateRange;a.bindBuffer(d,u),_.count===-1?a.bufferSubData(d,0,h):(t?a.bufferSubData(d,_.offset*h.BYTES_PER_ELEMENT,h,_.offset,_.count):a.bufferSubData(d,_.offset*h.BYTES_PER_ELEMENT,h.subarray(_.offset,_.offset+_.count)),_.count=-1),c.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(a.deleteBuffer(c.buffer),i.delete(u))}function f(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:l,remove:o,update:f}}class Js extends Ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,l=t/2,o=Math.floor(i),f=Math.floor(r),u=o+1,c=f+1,d=e/o,h=t/f,_=[],x=[],m=[],v=[];for(let n=0;n<c;n++){const T=n*h-l;for(let w=0;w<u;w++){const S=w*d-s;x.push(S,-T,0),m.push(0,0,1),v.push(w/o),v.push(1-n/f)}}for(let n=0;n<f;n++)for(let T=0;T<o;T++){const w=T+u*n,S=T+u*(n+1),E=T+1+u*(n+1),D=T+1+u*n;_.push(w,S,D),_.push(S,E,D)}this.setIndex(_),this.setAttribute("position",new mi(x,3)),this.setAttribute("normal",new mi(m,3)),this.setAttribute("uv",new mi(v,2))}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}var fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_h="vec3 transformed = vec3( position );",vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,yh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ph=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Dh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ep=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ap=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,op=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,up=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Tp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,nm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,im=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,rm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,sm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,am=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,om=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:fh,alphamap_pars_fragment:dh,alphatest_fragment:hh,alphatest_pars_fragment:ph,aomap_fragment:mh,aomap_pars_fragment:gh,begin_vertex:_h,beginnormal_vertex:vh,bsdfs:xh,iridescence_fragment:yh,bumpmap_pars_fragment:Mh,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Sh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:Th,color_fragment:Eh,color_pars_fragment:Ch,color_pars_vertex:Ah,color_vertex:Lh,common:Ph,cube_uv_reflection_fragment:Dh,defaultnormal_vertex:Rh,displacementmap_pars_vertex:Ih,displacementmap_vertex:zh,emissivemap_fragment:Fh,emissivemap_pars_fragment:Oh,encodings_fragment:Nh,encodings_pars_fragment:Bh,envmap_fragment:kh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:Gh,envmap_pars_vertex:Vh,envmap_physical_pars_fragment:ep,envmap_vertex:Hh,fog_vertex:Wh,fog_pars_vertex:Xh,fog_fragment:qh,fog_pars_fragment:Yh,gradientmap_pars_fragment:jh,lightmap_fragment:Zh,lightmap_pars_fragment:$h,lights_lambert_fragment:Kh,lights_lambert_pars_fragment:Jh,lights_pars_begin:Qh,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:rp,lights_physical_fragment:sp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:hp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:_p,metalnessmap_fragment:vp,metalnessmap_pars_fragment:xp,morphcolor_vertex:yp,morphnormal_vertex:Mp,morphtarget_pars_vertex:wp,morphtarget_vertex:Sp,normal_fragment_begin:bp,normal_fragment_maps:Tp,normal_pars_fragment:Ep,normal_pars_vertex:Cp,normal_vertex:Ap,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Ip,output_fragment:zp,packing:Fp,premultiplied_alpha_fragment:Op,project_vertex:Np,dithering_fragment:Bp,dithering_pars_fragment:kp,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:jp,skinnormal_vertex:Zp,specularmap_fragment:$p,specularmap_pars_fragment:Kp,tonemapping_fragment:Jp,tonemapping_pars_fragment:Qp,transmission_fragment:em,transmission_pars_fragment:tm,uv_pars_fragment:nm,uv_pars_vertex:im,uv_vertex:rm,uv2_pars_fragment:sm,uv2_pars_vertex:am,uv2_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:um,backgroundCube_vert:fm,backgroundCube_frag:dm,cube_vert:hm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:_m,distanceRGBA_frag:vm,equirect_vert:xm,equirect_frag:ym,linedashed_vert:Mm,linedashed_frag:wm,meshbasic_vert:Sm,meshbasic_frag:bm,meshlambert_vert:Tm,meshlambert_frag:Em,meshmatcap_vert:Cm,meshmatcap_frag:Am,meshnormal_vert:Lm,meshnormal_frag:Pm,meshphong_vert:Dm,meshphong_frag:Rm,meshphysical_vert:Im,meshphysical_frag:zm,meshtoon_vert:Fm,meshtoon_frag:Om,points_vert:Nm,points_frag:Bm,shadow_vert:km,shadow_frag:Um,sprite_vert:Gm,sprite_frag:Vm},he={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xt},uv2Transform:{value:new Xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}}},fn={basic:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Tt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Tt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Tt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Tt([he.points,he.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Tt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Tt([he.common,he.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Tt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Tt([he.sprite,he.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Tt([he.common,he.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Tt([he.lights,he.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};fn.physical={uniforms:Tt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new He(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Ms={r:0,b:0,g:0};function Hm(a,e,t,i,r,s,l){const o=new qe(0);let f=s===!0?0:1,u,c,d=null,h=0,_=null;function x(v,n){let T=!1,w=n.isScene===!0?n.background:null;w&&w.isTexture&&(w=(n.backgroundBlurriness>0?t:e).get(w));const S=a.xr,E=S.getSession&&S.getSession();E&&E.environmentBlendMode==="additive"&&(w=null),w===null?m(o,f):w&&w.isColor&&(m(w,1),T=!0),(a.autoClear||T)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Ks)?(c===void 0&&(c=new hn(new _r(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:or(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=w.encoding!==Ye,(d!==w||h!==w.version||_!==a.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,_=a.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new hn(new Js(2,2),new bi({name:"BackgroundMaterial",uniforms:or(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.toneMapped=w.encoding!==Ye,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||_!==a.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,_=a.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function m(v,n){v.getRGB(Ms,ru(a)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,n,l)}return{getClearColor:function(){return o},setClearColor:function(v,n=1){o.set(v),f=n,m(o,f)},getClearAlpha:function(){return f},setClearAlpha:function(v){f=v,m(o,f)},render:x}}function Wm(a,e,t,i){const r=a.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||s!==null,o={},f=v(null);let u=f,c=!1;function d(O,X,J,ne,Y){let oe=!1;if(l){const ie=m(ne,J,X);u!==ie&&(u=ie,_(u.object)),oe=n(O,ne,J,Y),oe&&T(O,ne,J,Y)}else{const ie=X.wireframe===!0;(u.geometry!==ne.id||u.program!==J.id||u.wireframe!==ie)&&(u.geometry=ne.id,u.program=J.id,u.wireframe=ie,oe=!0)}Y!==null&&t.update(Y,34963),(oe||c)&&(c=!1,M(O,X,J,ne),Y!==null&&a.bindBuffer(34963,t.get(Y).buffer))}function h(){return i.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function _(O){return i.isWebGL2?a.bindVertexArray(O):s.bindVertexArrayOES(O)}function x(O){return i.isWebGL2?a.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function m(O,X,J){const ne=J.wireframe===!0;let Y=o[O.id];Y===void 0&&(Y={},o[O.id]=Y);let oe=Y[X.id];oe===void 0&&(oe={},Y[X.id]=oe);let ie=oe[ne];return ie===void 0&&(ie=v(h()),oe[ne]=ie),ie}function v(O){const X=[],J=[],ne=[];for(let Y=0;Y<r;Y++)X[Y]=0,J[Y]=0,ne[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:J,attributeDivisors:ne,object:O,attributes:{},index:null}}function n(O,X,J,ne){const Y=u.attributes,oe=X.attributes;let ie=0;const j=J.getAttributes();for(const q in j)if(j[q].location>=0){const le=Y[q];let fe=oe[q];if(fe===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(fe=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(fe=O.instanceColor)),le===void 0||le.attribute!==fe||fe&&le.data!==fe.data)return!0;ie++}return u.attributesNum!==ie||u.index!==ne}function T(O,X,J,ne){const Y={},oe=X.attributes;let ie=0;const j=J.getAttributes();for(const q in j)if(j[q].location>=0){let le=oe[q];le===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(le=O.instanceColor));const fe={};fe.attribute=le,le&&le.data&&(fe.data=le.data),Y[q]=fe,ie++}u.attributes=Y,u.attributesNum=ie,u.index=ne}function w(){const O=u.newAttributes;for(let X=0,J=O.length;X<J;X++)O[X]=0}function S(O){E(O,0)}function E(O,X){const J=u.newAttributes,ne=u.enabledAttributes,Y=u.attributeDivisors;J[O]=1,ne[O]===0&&(a.enableVertexAttribArray(O),ne[O]=1),Y[O]!==X&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,X),Y[O]=X)}function D(){const O=u.newAttributes,X=u.enabledAttributes;for(let J=0,ne=X.length;J<ne;J++)X[J]!==O[J]&&(a.disableVertexAttribArray(J),X[J]=0)}function R(O,X,J,ne,Y,oe){i.isWebGL2===!0&&(J===5124||J===5125)?a.vertexAttribIPointer(O,X,J,Y,oe):a.vertexAttribPointer(O,X,J,ne,Y,oe)}function M(O,X,J,ne){if(i.isWebGL2===!1&&(O.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const Y=ne.attributes,oe=J.getAttributes(),ie=X.defaultAttributeValues;for(const j in oe){const q=oe[j];if(q.location>=0){let de=Y[j];if(de===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(de=O.instanceColor)),de!==void 0){const le=de.normalized,fe=de.itemSize,Q=t.get(de);if(Q===void 0)continue;const ze=Q.buffer,ve=Q.type,Ce=Q.bytesPerElement;if(de.isInterleavedBufferAttribute){const p=de.data,g=p.stride,y=de.offset;if(p.isInstancedInterleavedBuffer){for(let C=0;C<q.locationSize;C++)E(q.location+C,p.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=p.meshPerAttribute*p.count)}else for(let C=0;C<q.locationSize;C++)S(q.location+C);a.bindBuffer(34962,ze);for(let C=0;C<q.locationSize;C++)R(q.location+C,fe/q.locationSize,ve,le,g*Ce,(y+fe/q.locationSize*C)*Ce)}else{if(de.isInstancedBufferAttribute){for(let p=0;p<q.locationSize;p++)E(q.location+p,de.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let p=0;p<q.locationSize;p++)S(q.location+p);a.bindBuffer(34962,ze);for(let p=0;p<q.locationSize;p++)R(q.location+p,fe/q.locationSize,ve,le,fe*Ce,fe/q.locationSize*p*Ce)}}else if(ie!==void 0){const le=ie[j];if(le!==void 0)switch(le.length){case 2:a.vertexAttrib2fv(q.location,le);break;case 3:a.vertexAttrib3fv(q.location,le);break;case 4:a.vertexAttrib4fv(q.location,le);break;default:a.vertexAttrib1fv(q.location,le)}}}}D()}function A(){Z();for(const O in o){const X=o[O];for(const J in X){const ne=X[J];for(const Y in ne)x(ne[Y].object),delete ne[Y];delete X[J]}delete o[O]}}function z(O){if(o[O.id]===void 0)return;const X=o[O.id];for(const J in X){const ne=X[J];for(const Y in ne)x(ne[Y].object),delete ne[Y];delete X[J]}delete o[O.id]}function G(O){for(const X in o){const J=o[X];if(J[O.id]===void 0)continue;const ne=J[O.id];for(const Y in ne)x(ne[Y].object),delete ne[Y];delete J[O.id]}}function Z(){N(),c=!0,u!==f&&(u=f,_(u.object))}function N(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:z,releaseStatesOfProgram:G,initAttributes:w,enableAttribute:S,disableUnusedAttributes:D}}function Xm(a,e,t,i){const r=i.isWebGL2;let s;function l(u){s=u}function o(u,c){a.drawArrays(s,u,c),t.update(c,s,1)}function f(u,c,d){if(d===0)return;let h,_;if(r)h=a,_="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[_](s,u,c,d),t.update(c,s,d)}this.setMode=l,this.render=o,this.renderInstances=f}function qm(a,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const f=s(o);f!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",f,"instead."),o=f);const u=l||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),h=a.getParameter(35660),_=a.getParameter(3379),x=a.getParameter(34076),m=a.getParameter(34921),v=a.getParameter(36347),n=a.getParameter(36348),T=a.getParameter(36349),w=h>0,S=l||e.has("OES_texture_float"),E=w&&S,D=l?a.getParameter(36183):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:v,maxVaryings:n,maxFragmentUniforms:T,vertexTextures:w,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:D}}function Ym(a){const e=this;let t=null,i=0,r=!1,s=!1;const l=new ni,o=new Xt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,_){const x=d.length!==0||h||i!==0||r;return r=h,t=c(d,_,0),i=d.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,h,_){const x=d.clippingPlanes,m=d.clipIntersection,v=d.clipShadows,n=a.get(d);if(!r||x===null||x.length===0||s&&!v)s?c(null):u();else{const T=s?0:i,w=T*4;let S=n.clippingState||null;f.value=S,S=c(x,h,w,_);for(let E=0;E!==w;++E)S[E]=t[E];n.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=T}};function u(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,_,x){const m=d!==null?d.length:0;let v=null;if(m!==0){if(v=f.value,x!==!0||v===null){const n=_+m*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(v===null||v.length<n)&&(v=new Float32Array(n));for(let w=0,S=_;w!==m;++w,S+=4)l.copy(d[w]).applyMatrix4(T,o),l.normal.toArray(v,S),v[S+3]=l.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}}function jm(a){let e=new WeakMap;function t(l,o){return o===ro?l.mapping=rr:o===so&&(l.mapping=sr),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const o=l.mapping;if(o===ro||o===so)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const u=new oh(f.height/2);return u.fromEquirectangularTexture(a,l),e.set(l,u),l.addEventListener("dispose",r),t(u.texture,l.mapping)}else return null}}return l}function r(l){const o=l.target;o.removeEventListener("dispose",r);const f=e.get(o);f!==void 0&&(e.delete(o),f.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Zm extends su{constructor(e=-1,t=1,i=1,r=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,l=i+e,o=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,l=s+u*this.view.width,o-=c*this.view.offsetY,f=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,l,o,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,Jl=[.125,.215,.35,.446,.526,.582],li=20,ka=new Zm,Ql=new qe;let Ua=null;const ii=(1+Math.sqrt(5))/2,Vi=1/ii,ec=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,ii,Vi),new k(0,ii,-Vi),new k(Vi,0,ii),new k(-Vi,0,ii),new k(ii,Vi,0),new k(-ii,Vi,0)];class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ua=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua),e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Vr,format:cn,encoding:wi,depthBuffer:!1},r=nc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(s)),this._blurMaterial=Km(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,i,r){const o=new Ct(90,1,t,i),f=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Ql),c.toneMapping=Pn,c.autoClear=!1;const _=new No({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),x=new hn(new _r,_);let m=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,m=!0):(_.color.copy(Ql),m=!0);for(let n=0;n<6;n++){const T=n%3;T===0?(o.up.set(0,f[n],0),o.lookAt(u[n],0,0)):T===1?(o.up.set(0,0,f[n]),o.lookAt(0,u[n],0)):(o.up.set(0,f[n],0),o.lookAt(0,0,u[n]));const w=this._cubeSize;ws(r,T*w,n>2?w:0,w,w),c.setRenderTarget(r),m&&c.render(x,o),c.render(e,o)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===rr||e.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const s=r?this._cubemapMaterial:this._equirectMaterial,l=new hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const f=this._cubeSize;ws(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(l,ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=ec[(r-1)%ec.length];this._blur(e,r-1,r,s,l)}t.autoClear=i}_blur(e,t,i,r,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,r,"latitudinal",s),this._halfBlur(l,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,l,o){const f=this._renderer,u=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new hn(this._lodPlanes[r],u),h=u.uniforms,_=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*li-1),m=s/x,v=isFinite(s)?1+Math.floor(c*m):li;v>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${li}`);const n=[];let T=0;for(let R=0;R<li;++R){const M=R/m,A=Math.exp(-M*M/2);n.push(A),R===0?T+=A:R<v&&(T+=2*A)}for(let R=0;R<n.length;R++)n[R]=n[R]/T;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=n,h.latitudinal.value=l==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=x,h.mipInt.value=w-i;const S=this._sizeLods[r],E=3*S*(r>w-Yi?r-w+Yi:0),D=4*(this._cubeSize-S);ws(t,E,D,3*S,2*S),f.setRenderTarget(t),f.render(d,ka)}}function $m(a){const e=[],t=[],i=[];let r=a;const s=a-Yi+1+Jl.length;for(let l=0;l<s;l++){const o=Math.pow(2,r);t.push(o);let f=1/o;l>a-Yi?f=Jl[l-a+Yi-1]:l===0&&(f=0),i.push(f);const u=1/(o-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],_=6,x=6,m=3,v=2,n=1,T=new Float32Array(m*x*_),w=new Float32Array(v*x*_),S=new Float32Array(n*x*_);for(let D=0;D<_;D++){const R=D%3*2/3-1,M=D>2?0:-1,A=[R,M,0,R+2/3,M,0,R+2/3,M+1,0,R,M,0,R+2/3,M+1,0,R,M+1,0];T.set(A,m*x*D),w.set(h,v*x*D);const z=[D,D,D,D,D,D];S.set(z,n*x*D)}const E=new Ci;E.setAttribute("position",new mn(T,m)),E.setAttribute("uv",new mn(w,v)),E.setAttribute("faceIndex",new mn(S,n)),e.push(E),r>Yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nc(a,e,t){const i=new Si(a,e,t);return i.texture.mapping=Ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function Km(a,e,t){const i=new Float32Array(li),r=new k(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ic(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function rc(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jm(a){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const f=o.mapping,u=f===ro||f===so,c=f===rr||f===sr;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new tc(a)),d=u?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new tc(a));const h=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let f=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&f++;return f===u}function s(o){const f=o.target;f.removeEventListener("dispose",s);const u=e.get(f);u!==void 0&&(e.delete(f),u.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function Qm(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function eg(a,e,t,i){const r={},s=new WeakMap;function l(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",l),delete r[h.id];const _=s.get(h);_&&(e.remove(_),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",l),r[h.id]=!0,t.memory.geometries++),h}function f(d){const h=d.attributes;for(const x in h)e.update(h[x],34962);const _=d.morphAttributes;for(const x in _){const m=_[x];for(let v=0,n=m.length;v<n;v++)e.update(m[v],34962)}}function u(d){const h=[],_=d.index,x=d.attributes.position;let m=0;if(_!==null){const T=_.array;m=_.version;for(let w=0,S=T.length;w<S;w+=3){const E=T[w+0],D=T[w+1],R=T[w+2];h.push(E,D,D,R,R,E)}}else{const T=x.array;m=x.version;for(let w=0,S=T.length/3-1;w<S;w+=3){const E=w+0,D=w+1,R=w+2;h.push(E,D,D,R,R,E)}}const v=new($c(h)?iu:nu)(h,1);v.version=m;const n=s.get(d);n&&e.remove(n),s.set(d,v)}function c(d){const h=s.get(d);if(h){const _=d.index;_!==null&&h.version<_.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:f,getWireframeAttribute:c}}function tg(a,e,t,i){const r=i.isWebGL2;let s;function l(h){s=h}let o,f;function u(h){o=h.type,f=h.bytesPerElement}function c(h,_){a.drawElements(s,_,o,h*f),t.update(_,s,1)}function d(h,_,x){if(x===0)return;let m,v;if(r)m=a,v="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,_,o,h*f,x),t.update(_,s,x)}this.setMode=l,this.setIndex=u,this.render=c,this.renderInstances=d}function ng(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,l,o){switch(t.calls++,l){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ig(a,e){return a[0]-e[0]}function rg(a,e){return Math.abs(e[1])-Math.abs(a[1])}function sg(a,e,t){const i={},r=new Float32Array(8),s=new WeakMap,l=new $e,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function f(u,c,d,h){const _=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=x!==void 0?x.length:0;let v=s.get(c);if(v===void 0||v.count!==m){let X=function(){N.dispose(),s.delete(c),c.removeEventListener("dispose",X)};v!==void 0&&v.texture.dispose();const w=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,D=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],M=c.morphAttributes.color||[];let A=0;w===!0&&(A=1),S===!0&&(A=2),E===!0&&(A=3);let z=c.attributes.position.count*A,G=1;z>e.maxTextureSize&&(G=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const Z=new Float32Array(z*G*4*m),N=new eu(Z,z,G,m);N.type=fi,N.needsUpdate=!0;const O=A*4;for(let J=0;J<m;J++){const ne=D[J],Y=R[J],oe=M[J],ie=z*G*4*J;for(let j=0;j<ne.count;j++){const q=j*O;w===!0&&(l.fromBufferAttribute(ne,j),Z[ie+q+0]=l.x,Z[ie+q+1]=l.y,Z[ie+q+2]=l.z,Z[ie+q+3]=0),S===!0&&(l.fromBufferAttribute(Y,j),Z[ie+q+4]=l.x,Z[ie+q+5]=l.y,Z[ie+q+6]=l.z,Z[ie+q+7]=0),E===!0&&(l.fromBufferAttribute(oe,j),Z[ie+q+8]=l.x,Z[ie+q+9]=l.y,Z[ie+q+10]=l.z,Z[ie+q+11]=oe.itemSize===4?l.w:1)}}v={count:m,texture:N,size:new He(z,G)},s.set(c,v),c.addEventListener("dispose",X)}let n=0;for(let w=0;w<_.length;w++)n+=_[w];const T=c.morphTargetsRelative?1:1-n;h.getUniforms().setValue(a,"morphTargetBaseInfluence",T),h.getUniforms().setValue(a,"morphTargetInfluences",_),h.getUniforms().setValue(a,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}else{const x=_===void 0?0:_.length;let m=i[c.id];if(m===void 0||m.length!==x){m=[];for(let S=0;S<x;S++)m[S]=[S,0];i[c.id]=m}for(let S=0;S<x;S++){const E=m[S];E[0]=S,E[1]=_[S]}m.sort(rg);for(let S=0;S<8;S++)S<x&&m[S][1]?(o[S][0]=m[S][0],o[S][1]=m[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(ig);const v=c.morphAttributes.position,n=c.morphAttributes.normal;let T=0;for(let S=0;S<8;S++){const E=o[S],D=E[0],R=E[1];D!==Number.MAX_SAFE_INTEGER&&R?(v&&c.getAttribute("morphTarget"+S)!==v[D]&&c.setAttribute("morphTarget"+S,v[D]),n&&c.getAttribute("morphNormal"+S)!==n[D]&&c.setAttribute("morphNormal"+S,n[D]),r[S]=R,T+=R):(v&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),n&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const w=c.morphTargetsRelative?1:1-T;h.getUniforms().setValue(a,"morphTargetBaseInfluence",w),h.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:f}}function ag(a,e,t,i){let r=new WeakMap;function s(f){const u=i.render.frame,c=f.geometry,d=e.get(f,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),f.isInstancedMesh&&(f.hasEventListener("dispose",o)===!1&&f.addEventListener("dispose",o),t.update(f.instanceMatrix,34962),f.instanceColor!==null&&t.update(f.instanceColor,34962)),d}function l(){r=new WeakMap}function o(f){const u=f.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:l}}const lu=new Dt,cu=new eu,uu=new Wd,fu=new au,sc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function vr(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let s=sc[r];if(s===void 0&&(s=new Float32Array(r),sc[r]=s),e!==0){i.toArray(s,0);for(let l=1,o=0;l!==e;++l)o+=t,a[l].toArray(s,o)}return s}function ct(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function ut(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Qs(a,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function og(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function lg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;a.uniform2fv(this.addr,e),ut(t,e)}}function cg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;a.uniform3fv(this.addr,e),ut(t,e)}}function ug(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;a.uniform4fv(this.addr,e),ut(t,e)}}function fg(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;cc.set(i),a.uniformMatrix2fv(this.addr,!1,cc),ut(t,i)}}function dg(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;lc.set(i),a.uniformMatrix3fv(this.addr,!1,lc),ut(t,i)}}function hg(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;oc.set(i),a.uniformMatrix4fv(this.addr,!1,oc),ut(t,i)}}function pg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function mg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;a.uniform2iv(this.addr,e),ut(t,e)}}function gg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;a.uniform3iv(this.addr,e),ut(t,e)}}function _g(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;a.uniform4iv(this.addr,e),ut(t,e)}}function vg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function xg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;a.uniform2uiv(this.addr,e),ut(t,e)}}function yg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;a.uniform3uiv(this.addr,e),ut(t,e)}}function Mg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;a.uniform4uiv(this.addr,e),ut(t,e)}}function wg(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||lu,r)}function Sg(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||uu,r)}function bg(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||fu,r)}function Tg(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cu,r)}function Eg(a){switch(a){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return ug;case 35674:return fg;case 35675:return dg;case 35676:return hg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return xg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Cg(a,e){a.uniform1fv(this.addr,e)}function Ag(a,e){const t=vr(e,this.size,2);a.uniform2fv(this.addr,t)}function Lg(a,e){const t=vr(e,this.size,3);a.uniform3fv(this.addr,t)}function Pg(a,e){const t=vr(e,this.size,4);a.uniform4fv(this.addr,t)}function Dg(a,e){const t=vr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Rg(a,e){const t=vr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Ig(a,e){const t=vr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function zg(a,e){a.uniform1iv(this.addr,e)}function Fg(a,e){a.uniform2iv(this.addr,e)}function Og(a,e){a.uniform3iv(this.addr,e)}function Ng(a,e){a.uniform4iv(this.addr,e)}function Bg(a,e){a.uniform1uiv(this.addr,e)}function kg(a,e){a.uniform2uiv(this.addr,e)}function Ug(a,e){a.uniform3uiv(this.addr,e)}function Gg(a,e){a.uniform4uiv(this.addr,e)}function Vg(a,e,t){const i=this.cache,r=e.length,s=Qs(t,r);ct(i,s)||(a.uniform1iv(this.addr,s),ut(i,s));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||lu,s[l])}function Hg(a,e,t){const i=this.cache,r=e.length,s=Qs(t,r);ct(i,s)||(a.uniform1iv(this.addr,s),ut(i,s));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||uu,s[l])}function Wg(a,e,t){const i=this.cache,r=e.length,s=Qs(t,r);ct(i,s)||(a.uniform1iv(this.addr,s),ut(i,s));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||fu,s[l])}function Xg(a,e,t){const i=this.cache,r=e.length,s=Qs(t,r);ct(i,s)||(a.uniform1iv(this.addr,s),ut(i,s));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||cu,s[l])}function qg(a){switch(a){case 5126:return Cg;case 35664:return Ag;case 35665:return Lg;case 35666:return Pg;case 35674:return Dg;case 35675:return Rg;case 35676:return Ig;case 5124:case 35670:return zg;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Ng;case 5125:return Bg;case 36294:return kg;case 36295:return Ug;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}class Yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Eg(t.type)}}class jg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=qg(t.type)}}class Zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function uc(a,e){a.seq.push(e),a.map[e.id]=e}function $g(a,e,t){const i=a.name,r=i.length;for(Ga.lastIndex=0;;){const s=Ga.exec(i),l=Ga.lastIndex;let o=s[1];const f=s[2]==="]",u=s[3];if(f&&(o=o|0),u===void 0||u==="["&&l+2===r){uc(t,u===void 0?new Yg(o,a,e):new jg(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new Zg(o),uc(t,d)),t=d}}}class As{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),l=e.getUniformLocation(t,s.name);$g(s,l,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,l=t.length;s!==l;++s){const o=t[s],f=i[o.id];f.needsUpdate!==!1&&o.setValue(e,f.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const l=e[r];l.id in t&&i.push(l)}return i}}function fc(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let Kg=0;function Jg(a,e){const t=a.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=r;l<s;l++){const o=l+1;i.push(`${o===e?">":" "} ${o}: ${t[l]}`)}return i.join(`
`)}function Qg(a){switch(a){case wi:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function dc(a,e,t){const i=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Jg(a.getShaderSource(e),l)}else return r}function e_(a,e){const t=Qg(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function t_(a,e){let t;switch(e){case id:t="Linear";break;case rd:t="Reinhard";break;case sd:t="OptimizedCineon";break;case ad:t="ACESFilmic";break;case od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function n_(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dr).join(`
`)}function i_(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function r_(a,e){const t={},i=a.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=a.getActiveAttrib(e,r),l=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[l]={type:s.type,location:a.getAttribLocation(e,l),locationSize:o}}return t}function Dr(a){return a!==""}function hc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(a){return a.replace(s_,a_)}function a_(a,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return uo(t)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(a){return a.replace(o_,l_)}function l_(a,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gc(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c_(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Ff?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function u_(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case rr:case sr:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f_(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function d_(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case zo:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function h_(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function p_(a,e,t,i){const r=a.getContext(),s=t.defines;let l=t.vertexShader,o=t.fragmentShader;const f=c_(t),u=u_(t),c=f_(t),d=d_(t),h=h_(t),_=t.isWebGL2?"":n_(t),x=i_(s),m=r.createProgram();let v,n,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[x].filter(Dr).join(`
`),v.length>0&&(v+=`
`),n=[_,x].filter(Dr).join(`
`),n.length>0&&(n+=`
`)):(v=[gc(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),n=[_,gc(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?De.tonemapping_pars_fragment:"",t.toneMapping!==Pn?t_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,e_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),l=uo(l),l=hc(l,t),l=pc(l,t),o=uo(o),o=hc(o,t),o=pc(o,t),l=mc(l),o=mc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,n=["#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+n);const w=T+v+l,S=T+n+o,E=fc(r,35633,w),D=fc(r,35632,S);if(r.attachShader(m,E),r.attachShader(m,D),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),a.debug.checkShaderErrors){const A=r.getProgramInfoLog(m).trim(),z=r.getShaderInfoLog(E).trim(),G=r.getShaderInfoLog(D).trim();let Z=!0,N=!0;if(r.getProgramParameter(m,35714)===!1){Z=!1;const O=dc(r,E,"vertex"),X=dc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+O+`
`+X)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(z===""||G==="")&&(N=!1);N&&(this.diagnostics={runnable:Z,programLog:A,vertexShader:{log:z,prefix:v},fragmentShader:{log:G,prefix:n}})}r.deleteShader(E),r.deleteShader(D);let R;this.getUniforms=function(){return R===void 0&&(R=new As(r,m)),R};let M;return this.getAttributes=function(){return M===void 0&&(M=r_(r,m)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Kg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=D,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new __(e),t.set(e,i)),i}}class __{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}}function v_(a,e,t,i,r,s,l){const o=new tu,f=new g_,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,A,z,G,Z){const N=G.fog,O=Z.geometry,X=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),ne=J&&J.mapping===Ks?J.image.height:null,Y=x[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const oe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ie=oe!==void 0?oe.length:0;let j=0;O.morphAttributes.position!==void 0&&(j=1),O.morphAttributes.normal!==void 0&&(j=2),O.morphAttributes.color!==void 0&&(j=3);let q,de,le,fe;if(Y){const g=fn[Y];q=g.vertexShader,de=g.fragmentShader}else q=M.vertexShader,de=M.fragmentShader,f.update(M),le=f.getVertexShaderID(M),fe=f.getFragmentShaderID(M);const Q=a.getRenderTarget(),ze=M.alphaTest>0,ve=M.clearcoat>0,Ce=M.iridescence>0;return{isWebGL2:c,shaderID:Y,shaderName:M.type,vertexShader:q,fragmentShader:de,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Q===null?a.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:wi,map:!!M.map,matcap:!!M.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:ne,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Ed,tangentSpaceNormalMap:M.normalMapType===Zc,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Ye,clearcoat:ve,clearcoatMap:ve&&!!M.clearcoatMap,clearcoatRoughnessMap:ve&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!M.clearcoatNormalMap,iridescence:Ce,iridescenceMap:Ce&&!!M.iridescenceMap,iridescenceThicknessMap:Ce&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===$i,alphaMap:!!M.alphaMap,alphaTest:ze,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:j,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:M.toneMapped?a.toneMapping:Pn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Io,flipSided:M.side===nn,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function v(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)A.push(z),A.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(n(A,M),T(A,M),A.push(a.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function n(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function T(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.physicallyCorrectLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),M.push(o.mask)}function w(M){const A=x[M.type];let z;if(A){const G=fn[A];z=ih.clone(G.uniforms)}else z=M.uniforms;return z}function S(M,A){let z;for(let G=0,Z=u.length;G<Z;G++){const N=u[G];if(N.cacheKey===A){z=N,++z.usedTimes;break}}return z===void 0&&(z=new p_(a,A,M,s),u.push(z)),z}function E(M){if(--M.usedTimes===0){const A=u.indexOf(M);u[A]=u[u.length-1],u.pop(),M.destroy()}}function D(M){f.remove(M)}function R(){f.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:w,acquireProgram:S,releaseProgram:E,releaseShaderCache:D,programs:u,dispose:R}}function x_(){let a=new WeakMap;function e(s){let l=a.get(s);return l===void 0&&(l={},a.set(s,l)),l}function t(s){a.delete(s)}function i(s,l,o){a.get(s)[l]=o}function r(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function y_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function _c(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function vc(){const a=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function l(d,h,_,x,m,v){let n=a[e];return n===void 0?(n={id:d.id,object:d,geometry:h,material:_,groupOrder:x,renderOrder:d.renderOrder,z:m,group:v},a[e]=n):(n.id=d.id,n.object=d,n.geometry=h,n.material=_,n.groupOrder=x,n.renderOrder=d.renderOrder,n.z=m,n.group=v),e++,n}function o(d,h,_,x,m,v){const n=l(d,h,_,x,m,v);_.transmission>0?i.push(n):_.transparent===!0?r.push(n):t.push(n)}function f(d,h,_,x,m,v){const n=l(d,h,_,x,m,v);_.transmission>0?i.unshift(n):_.transparent===!0?r.unshift(n):t.unshift(n)}function u(d,h){t.length>1&&t.sort(d||y_),i.length>1&&i.sort(h||_c),r.length>1&&r.sort(h||_c)}function c(){for(let d=e,h=a.length;d<h;d++){const _=a[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:f,finish:c,sort:u}}function M_(){let a=new WeakMap;function e(i,r){const s=a.get(i);let l;return s===void 0?(l=new vc,a.set(i,[l])):r>=s.length?(l=new vc,s.push(l)):l=s[r],l}function t(){a=new WeakMap}return{get:e,dispose:t}}function w_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new qe};break;case"SpotLight":t={position:new k,direction:new k,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new k,halfWidth:new k,halfHeight:new k};break}return a[e.id]=t,t}}}function S_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let b_=0;function T_(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function E_(a,e){const t=new w_,i=S_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new k);const s=new k,l=new ot,o=new ot;function f(c,d){let h=0,_=0,x=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let m=0,v=0,n=0,T=0,w=0,S=0,E=0,D=0,R=0,M=0;c.sort(T_);const A=d!==!0?Math.PI:1;for(let G=0,Z=c.length;G<Z;G++){const N=c[G],O=N.color,X=N.intensity,J=N.distance,ne=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=O.r*X*A,_+=O.g*X*A,x+=O.b*X*A;else if(N.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(N.sh.coefficients[Y],X);else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const oe=N.shadow,ie=i.get(N);ie.shadowBias=oe.bias,ie.shadowNormalBias=oe.normalBias,ie.shadowRadius=oe.radius,ie.shadowMapSize=oe.mapSize,r.directionalShadow[m]=ie,r.directionalShadowMap[m]=ne,r.directionalShadowMatrix[m]=N.shadow.matrix,S++}r.directional[m]=Y,m++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(O).multiplyScalar(X*A),Y.distance=J,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,r.spot[n]=Y;const oe=N.shadow;if(N.map&&(r.spotLightMap[R]=N.map,R++,oe.updateMatrices(N),N.castShadow&&M++),r.spotLightMatrix[n]=oe.matrix,N.castShadow){const ie=i.get(N);ie.shadowBias=oe.bias,ie.shadowNormalBias=oe.normalBias,ie.shadowRadius=oe.radius,ie.shadowMapSize=oe.mapSize,r.spotShadow[n]=ie,r.spotShadowMap[n]=ne,D++}n++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(O).multiplyScalar(X),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),r.rectArea[T]=Y,T++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*A),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const oe=N.shadow,ie=i.get(N);ie.shadowBias=oe.bias,ie.shadowNormalBias=oe.normalBias,ie.shadowRadius=oe.radius,ie.shadowMapSize=oe.mapSize,ie.shadowCameraNear=oe.camera.near,ie.shadowCameraFar=oe.camera.far,r.pointShadow[v]=ie,r.pointShadowMap[v]=ne,r.pointShadowMatrix[v]=N.shadow.matrix,E++}r.point[v]=Y,v++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(X*A),Y.groundColor.copy(N.groundColor).multiplyScalar(X*A),r.hemi[w]=Y,w++}}T>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=_,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==m||z.pointLength!==v||z.spotLength!==n||z.rectAreaLength!==T||z.hemiLength!==w||z.numDirectionalShadows!==S||z.numPointShadows!==E||z.numSpotShadows!==D||z.numSpotMaps!==R)&&(r.directional.length=m,r.spot.length=n,r.rectArea.length=T,r.point.length=v,r.hemi.length=w,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=D+R-M,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=M,z.directionalLength=m,z.pointLength=v,z.spotLength=n,z.rectAreaLength=T,z.hemiLength=w,z.numDirectionalShadows=S,z.numPointShadows=E,z.numSpotShadows=D,z.numSpotMaps=R,r.version=b_++)}function u(c,d){let h=0,_=0,x=0,m=0,v=0;const n=d.matrixWorldInverse;for(let T=0,w=c.length;T<w;T++){const S=c[T];if(S.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(n),h++}else if(S.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(n),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(n),x++}else if(S.isRectAreaLight){const E=r.rectArea[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(n),o.identity(),l.copy(S.matrixWorld),l.premultiply(n),o.extractRotation(l),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const E=r.point[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(n),_++}else if(S.isHemisphereLight){const E=r.hemi[v];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(n),v++}}}return{setup:f,setupView:u,state:r}}function xc(a,e){const t=new E_(a,e),i=[],r=[];function s(){i.length=0,r.length=0}function l(d){i.push(d)}function o(d){r.push(d)}function f(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:f,setupLightsView:u,pushLight:l,pushShadow:o}}function C_(a,e){let t=new WeakMap;function i(s,l=0){const o=t.get(s);let f;return o===void 0?(f=new xc(a,e),t.set(s,[f])):l>=o.length?(f=new xc(a,e),o.push(f)):f=o[l],f}function r(){t=new WeakMap}return{get:i,dispose:r}}class A_ extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class L_ extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R_(a,e,t){let i=new Bo;const r=new He,s=new He,l=new $e,o=new A_({depthPacking:Td}),f=new L_,u={},c=t.maxTextureSize,d={0:nn,1:yi,2:Io},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:P_,fragmentShader:D_}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const x=new Ci;x.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new hn(x,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc,this.render=function(S,E,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||S.length===0)return;const R=a.getRenderTarget(),M=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),z=a.state;z.setBlending(Un),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let G=0,Z=S.length;G<Z;G++){const N=S[G],O=N.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const X=O.getFrameExtents();if(r.multiply(X),s.copy(O.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,O.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,O.mapSize.y=s.y)),O.map===null){const ne=this.type!==Lr?{minFilter:Et,magFilter:Et}:{};O.map=new Si(r.x,r.y,ne),O.map.texture.name=N.name+".shadowMap",O.camera.updateProjectionMatrix()}a.setRenderTarget(O.map),a.clear();const J=O.getViewportCount();for(let ne=0;ne<J;ne++){const Y=O.getViewport(ne);l.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),z.viewport(l),O.updateMatrices(N,ne),i=O.getFrustum(),w(E,D,O.camera,N,this.type)}O.isPointLightShadow!==!0&&this.type===Lr&&n(O,D),O.needsUpdate=!1}v.needsUpdate=!1,a.setRenderTarget(R,M,A)};function n(S,E){const D=e.update(m);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,_.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Si(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(E,null,D,h,m,null),_.uniforms.shadow_pass.value=S.mapPass.texture,_.uniforms.resolution.value=S.mapSize,_.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(E,null,D,_,m,null)}function T(S,E,D,R,M,A){let z=null;const G=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(G!==void 0)z=G;else if(z=D.isPointLight===!0?f:o,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Z=z.uuid,N=E.uuid;let O=u[Z];O===void 0&&(O={},u[Z]=O);let X=O[N];X===void 0&&(X=z.clone(),O[N]=X),z=X}return z.visible=E.visible,z.wireframe=E.wireframe,A===Lr?z.side=E.shadowSide!==null?E.shadowSide:E.side:z.side=E.shadowSide!==null?E.shadowSide:d[E.side],z.alphaMap=E.alphaMap,z.alphaTest=E.alphaTest,z.map=E.map,z.clipShadows=E.clipShadows,z.clippingPlanes=E.clippingPlanes,z.clipIntersection=E.clipIntersection,z.displacementMap=E.displacementMap,z.displacementScale=E.displacementScale,z.displacementBias=E.displacementBias,z.wireframeLinewidth=E.wireframeLinewidth,z.linewidth=E.linewidth,D.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(D.matrixWorld),z.nearDistance=R,z.farDistance=M),z}function w(S,E,D,R,M){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Lr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);const G=e.update(S),Z=S.material;if(Array.isArray(Z)){const N=G.groups;for(let O=0,X=N.length;O<X;O++){const J=N[O],ne=Z[J.materialIndex];if(ne&&ne.visible){const Y=T(S,ne,R,D.near,D.far,M);a.renderBufferDirect(D,null,G,Y,S,J)}}}else if(Z.visible){const N=T(S,Z,R,D.near,D.far,M);a.renderBufferDirect(D,null,G,N,S,null)}}const z=S.children;for(let G=0,Z=z.length;G<Z;G++)w(z[G],E,D,R,M)}}function I_(a,e,t){const i=t.isWebGL2;function r(){let F=!1;const $=new $e;let ce=null;const ge=new $e(0,0,0,0);return{setMask:function(we){ce!==we&&!F&&(a.colorMask(we,we,we,we),ce=we)},setLocked:function(we){F=we},setClear:function(we,Ve,dt,vt,qn){qn===!0&&(we*=vt,Ve*=vt,dt*=vt),$.set(we,Ve,dt,vt),ge.equals($)===!1&&(a.clearColor(we,Ve,dt,vt),ge.copy($))},reset:function(){F=!1,ce=null,ge.set(-1,0,0,0)}}}function s(){let F=!1,$=null,ce=null,ge=null;return{setTest:function(we){we?ze(2929):ve(2929)},setMask:function(we){$!==we&&!F&&(a.depthMask(we),$=we)},setFunc:function(we){if(ce!==we){switch(we){case jf:a.depthFunc(512);break;case Zf:a.depthFunc(519);break;case $f:a.depthFunc(513);break;case io:a.depthFunc(515);break;case Kf:a.depthFunc(514);break;case Jf:a.depthFunc(518);break;case Qf:a.depthFunc(516);break;case ed:a.depthFunc(517);break;default:a.depthFunc(515)}ce=we}},setLocked:function(we){F=we},setClear:function(we){ge!==we&&(a.clearDepth(we),ge=we)},reset:function(){F=!1,$=null,ce=null,ge=null}}}function l(){let F=!1,$=null,ce=null,ge=null,we=null,Ve=null,dt=null,vt=null,qn=null;return{setTest:function(Ze){F||(Ze?ze(2960):ve(2960))},setMask:function(Ze){$!==Ze&&!F&&(a.stencilMask(Ze),$=Ze)},setFunc:function(Ze,vn,Zt){(ce!==Ze||ge!==vn||we!==Zt)&&(a.stencilFunc(Ze,vn,Zt),ce=Ze,ge=vn,we=Zt)},setOp:function(Ze,vn,Zt){(Ve!==Ze||dt!==vn||vt!==Zt)&&(a.stencilOp(Ze,vn,Zt),Ve=Ze,dt=vn,vt=Zt)},setLocked:function(Ze){F=Ze},setClear:function(Ze){qn!==Ze&&(a.clearStencil(Ze),qn=Ze)},reset:function(){F=!1,$=null,ce=null,ge=null,we=null,Ve=null,dt=null,vt=null,qn=null}}}const o=new r,f=new s,u=new l,c=new WeakMap,d=new WeakMap;let h={},_={},x=new WeakMap,m=[],v=null,n=!1,T=null,w=null,S=null,E=null,D=null,R=null,M=null,A=!1,z=null,G=null,Z=null,N=null,O=null;const X=a.getParameter(35661);let J=!1,ne=0;const Y=a.getParameter(7938);Y.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=ne>=1):Y.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=ne>=2);let oe=null,ie={};const j=a.getParameter(3088),q=a.getParameter(2978),de=new $e().fromArray(j),le=new $e().fromArray(q);function fe(F,$,ce){const ge=new Uint8Array(4),we=a.createTexture();a.bindTexture(F,we),a.texParameteri(F,10241,9728),a.texParameteri(F,10240,9728);for(let Ve=0;Ve<ce;Ve++)a.texImage2D($+Ve,0,6408,1,1,0,6408,5121,ge);return we}const Q={};Q[3553]=fe(3553,3553,1),Q[34067]=fe(34067,34069,6),o.setClear(0,0,0,1),f.setClear(1),u.setClear(0),ze(2929),f.setFunc(io),W(!1),ae(fl),ze(2884),I(Un);function ze(F){h[F]!==!0&&(a.enable(F),h[F]=!0)}function ve(F){h[F]!==!1&&(a.disable(F),h[F]=!1)}function Ce(F,$){return _[F]!==$?(a.bindFramebuffer(F,$),_[F]=$,i&&(F===36009&&(_[36160]=$),F===36160&&(_[36009]=$)),!0):!1}function p(F,$){let ce=m,ge=!1;if(F)if(ce=x.get($),ce===void 0&&(ce=[],x.set($,ce)),F.isWebGLMultipleRenderTargets){const we=F.texture;if(ce.length!==we.length||ce[0]!==36064){for(let Ve=0,dt=we.length;Ve<dt;Ve++)ce[Ve]=36064+Ve;ce.length=we.length,ge=!0}}else ce[0]!==36064&&(ce[0]=36064,ge=!0);else ce[0]!==1029&&(ce[0]=1029,ge=!0);ge&&(t.isWebGL2?a.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function g(F){return v!==F?(a.useProgram(F),v=F,!0):!1}const y={[qi]:32774,[Nf]:32778,[Bf]:32779};if(i)y[ml]=32775,y[gl]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(y[ml]=F.MIN_EXT,y[gl]=F.MAX_EXT)}const C={[kf]:0,[Uf]:1,[Gf]:768,[Xc]:770,[Yf]:776,[Xf]:774,[Hf]:772,[Vf]:769,[qc]:771,[qf]:775,[Wf]:773};function I(F,$,ce,ge,we,Ve,dt,vt){if(F===Un){n===!0&&(ve(3042),n=!1);return}if(n===!1&&(ze(3042),n=!0),F!==Of){if(F!==T||vt!==A){if((w!==qi||D!==qi)&&(a.blendEquation(32774),w=qi,D=qi),vt)switch(F){case $i:a.blendFuncSeparate(1,771,1,771);break;case dl:a.blendFunc(1,1);break;case hl:a.blendFuncSeparate(0,769,0,1);break;case pl:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $i:a.blendFuncSeparate(770,771,1,771);break;case dl:a.blendFunc(770,1);break;case hl:a.blendFuncSeparate(0,769,0,1);break;case pl:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,E=null,R=null,M=null,T=F,A=vt}return}we=we||$,Ve=Ve||ce,dt=dt||ge,($!==w||we!==D)&&(a.blendEquationSeparate(y[$],y[we]),w=$,D=we),(ce!==S||ge!==E||Ve!==R||dt!==M)&&(a.blendFuncSeparate(C[ce],C[ge],C[Ve],C[dt]),S=ce,E=ge,R=Ve,M=dt),T=F,A=!1}function V(F,$){F.side===Io?ve(2884):ze(2884);let ce=F.side===nn;$&&(ce=!ce),W(ce),F.blending===$i&&F.transparent===!1?I(Un):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),f.setFunc(F.depthFunc),f.setTest(F.depthTest),f.setMask(F.depthWrite),o.setMask(F.colorWrite);const ge=F.stencilWrite;u.setTest(ge),ge&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),pe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ze(32926):ve(32926)}function W(F){z!==F&&(F?a.frontFace(2304):a.frontFace(2305),z=F)}function ae(F){F!==If?(ze(2884),F!==G&&(F===fl?a.cullFace(1029):F===zf?a.cullFace(1028):a.cullFace(1032))):ve(2884),G=F}function ye(F){F!==Z&&(J&&a.lineWidth(F),Z=F)}function pe(F,$,ce){F?(ze(32823),(N!==$||O!==ce)&&(a.polygonOffset($,ce),N=$,O=ce)):ve(32823)}function _e(F){F?ze(3089):ve(3089)}function Pe(F){F===void 0&&(F=33984+X-1),oe!==F&&(a.activeTexture(F),oe=F)}function P(F,$,ce){ce===void 0&&(oe===null?ce=33984+X-1:ce=oe);let ge=ie[ce];ge===void 0&&(ge={type:void 0,texture:void 0},ie[ce]=ge),(ge.type!==F||ge.texture!==$)&&(oe!==ce&&(a.activeTexture(ce),oe=ce),a.bindTexture(F,$||Q[F]),ge.type=F,ge.texture=$)}function b(){const F=ie[oe];F!==void 0&&F.type!==void 0&&(a.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function H(){try{a.compressedTexImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{a.compressedTexImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{a.texSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{a.texSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{a.texStorage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{a.texStorage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{a.texImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{a.texImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(F){de.equals(F)===!1&&(a.scissor(F.x,F.y,F.z,F.w),de.copy(F))}function Se(F){le.equals(F)===!1&&(a.viewport(F.x,F.y,F.z,F.w),le.copy(F))}function ke(F,$){let ce=d.get($);ce===void 0&&(ce=new WeakMap,d.set($,ce));let ge=ce.get(F);ge===void 0&&(ge=a.getUniformBlockIndex($,F.name),ce.set(F,ge))}function je(F,$){const ge=d.get($).get(F);c.get($)!==ge&&(a.uniformBlockBinding($,ge,F.__bindingPointIndex),c.set($,ge))}function ft(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},oe=null,ie={},_={},x=new WeakMap,m=[],v=null,n=!1,T=null,w=null,S=null,E=null,D=null,R=null,M=null,A=!1,z=null,G=null,Z=null,N=null,O=null,de.set(0,0,a.canvas.width,a.canvas.height),le.set(0,0,a.canvas.width,a.canvas.height),o.reset(),f.reset(),u.reset()}return{buffers:{color:o,depth:f,stencil:u},enable:ze,disable:ve,bindFramebuffer:Ce,drawBuffers:p,useProgram:g,setBlending:I,setMaterial:V,setFlipSided:W,setCullFace:ae,setLineWidth:ye,setPolygonOffset:pe,setScissorTest:_e,activeTexture:Pe,bindTexture:P,unbindTexture:b,compressedTexImage2D:H,compressedTexImage3D:se,texImage2D:Ae,texImage3D:xe,updateUBOMapping:ke,uniformBlockBinding:je,texStorage2D:te,texStorage3D:Te,texSubImage2D:re,texSubImage3D:ue,compressedTexSubImage2D:Me,compressedTexSubImage3D:me,scissor:Ee,viewport:Se,reset:ft}}function z_(a,e,t,i,r,s,l){const o=r.isWebGL2,f=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let m;const v=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,b){return n?new OffscreenCanvas(P,b):Wr("canvas")}function w(P,b,H,se){let re=1;if((P.width>se||P.height>se)&&(re=se/Math.max(P.width,P.height)),re<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ue=b?Is:Math.floor,Me=ue(re*P.width),me=ue(re*P.height);m===void 0&&(m=T(Me,me));const te=H?T(Me,me):m;return te.width=Me,te.height=me,te.getContext("2d").drawImage(P,0,0,Me,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Me+"x"+me+")."),te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return co(P.width)&&co(P.height)}function E(P){return o?!1:P.wrapS!==ln||P.wrapT!==ln||P.minFilter!==Et&&P.minFilter!==Qt}function D(P,b){return P.generateMipmaps&&b&&P.minFilter!==Et&&P.minFilter!==Qt}function R(P){a.generateMipmap(P)}function M(P,b,H,se,re=!1){if(o===!1)return b;if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=b;return b===6403&&(H===5126&&(ue=33326),H===5131&&(ue=33325),H===5121&&(ue=33321)),b===33319&&(H===5126&&(ue=33328),H===5131&&(ue=33327),H===5121&&(ue=33323)),b===6408&&(H===5126&&(ue=34836),H===5131&&(ue=34842),H===5121&&(ue=se===Ye&&re===!1?35907:32856),H===32819&&(ue=32854),H===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function A(P,b,H){return D(P,H)===!0||P.isFramebufferTexture&&P.minFilter!==Et&&P.minFilter!==Qt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function z(P){return P===Et||P===_l||P===ha?9728:9729}function G(P){const b=P.target;b.removeEventListener("dispose",G),N(b),b.isVideoTexture&&x.delete(b)}function Z(P){const b=P.target;b.removeEventListener("dispose",Z),X(b)}function N(P){const b=i.get(P);if(b.__webglInit===void 0)return;const H=P.source,se=v.get(H);if(se){const re=se[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&O(P),Object.keys(se).length===0&&v.delete(H)}i.remove(P)}function O(P){const b=i.get(P);a.deleteTexture(b.__webglTexture);const H=P.source,se=v.get(H);delete se[b.__cacheKey],l.memory.textures--}function X(P){const b=P.texture,H=i.get(P),se=i.get(b);if(se.__webglTexture!==void 0&&(a.deleteTexture(se.__webglTexture),l.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)a.deleteFramebuffer(H.__webglFramebuffer[re]),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer[re]);else{if(a.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&a.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let re=0;re<H.__webglColorRenderbuffer.length;re++)H.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(H.__webglColorRenderbuffer[re]);H.__webglDepthRenderbuffer&&a.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let re=0,ue=b.length;re<ue;re++){const Me=i.get(b[re]);Me.__webglTexture&&(a.deleteTexture(Me.__webglTexture),l.memory.textures--),i.remove(b[re])}i.remove(b),i.remove(P)}let J=0;function ne(){J=0}function Y(){const P=J;return P>=f&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+f),J+=1,P}function oe(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.encoding),b.join()}function ie(P,b){const H=i.get(P);if(P.isVideoTexture&&_e(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(H,P,b);return}}t.bindTexture(3553,H.__webglTexture,33984+b)}function j(P,b){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ve(H,P,b);return}t.bindTexture(35866,H.__webglTexture,33984+b)}function q(P,b){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ve(H,P,b);return}t.bindTexture(32879,H.__webglTexture,33984+b)}function de(P,b){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Ce(H,P,b);return}t.bindTexture(34067,H.__webglTexture,33984+b)}const le={[ao]:10497,[ln]:33071,[oo]:33648},fe={[Et]:9728,[_l]:9984,[ha]:9986,[Qt]:9729,[ld]:9985,[Gr]:9987};function Q(P,b,H){if(H?(a.texParameteri(P,10242,le[b.wrapS]),a.texParameteri(P,10243,le[b.wrapT]),(P===32879||P===35866)&&a.texParameteri(P,32882,le[b.wrapR]),a.texParameteri(P,10240,fe[b.magFilter]),a.texParameteri(P,10241,fe[b.minFilter])):(a.texParameteri(P,10242,33071),a.texParameteri(P,10243,33071),(P===32879||P===35866)&&a.texParameteri(P,32882,33071),(b.wrapS!==ln||b.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(P,10240,z(b.magFilter)),a.texParameteri(P,10241,z(b.minFilter)),b.minFilter!==Et&&b.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Et||b.minFilter!==ha&&b.minFilter!==Gr||b.type===fi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Vr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(a.texParameterf(P,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function ze(P,b){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",G));const se=b.source;let re=v.get(se);re===void 0&&(re={},v.set(se,re));const ue=oe(b);if(ue!==P.__cacheKey){re[ue]===void 0&&(re[ue]={texture:a.createTexture(),usedTimes:0},l.memory.textures++,H=!0),re[ue].usedTimes++;const Me=re[P.__cacheKey];Me!==void 0&&(re[P.__cacheKey].usedTimes--,Me.usedTimes===0&&O(b)),P.__cacheKey=ue,P.__webglTexture=re[ue].texture}return H}function ve(P,b,H){let se=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=35866),b.isData3DTexture&&(se=32879);const re=ze(P,b),ue=b.source;t.bindTexture(se,P.__webglTexture,33984+H);const Me=i.get(ue);if(ue.version!==Me.__version||re===!0){t.activeTexture(33984+H),a.pixelStorei(37440,b.flipY),a.pixelStorei(37441,b.premultiplyAlpha),a.pixelStorei(3317,b.unpackAlignment),a.pixelStorei(37443,0);const me=E(b)&&S(b.image)===!1;let te=w(b.image,me,!1,c);te=Pe(b,te);const Te=S(te)||o,Ae=s.convert(b.format,b.encoding);let xe=s.convert(b.type),Ee=M(b.internalFormat,Ae,xe,b.encoding,b.isVideoTexture);Q(se,b,Te);let Se;const ke=b.mipmaps,je=o&&b.isVideoTexture!==!0,ft=Me.__version===void 0||re===!0,F=A(b,te,Te);if(b.isDepthTexture)Ee=6402,o?b.type===fi?Ee=36012:b.type===ui?Ee=33190:b.type===Ki?Ee=35056:Ee=33189:b.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===hi&&Ee===6402&&b.type!==jc&&b.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ui,xe=s.convert(b.type)),b.format===ar&&Ee===6402&&(Ee=34041,b.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ki,xe=s.convert(b.type))),ft&&(je?t.texStorage2D(3553,1,Ee,te.width,te.height):t.texImage2D(3553,0,Ee,te.width,te.height,0,Ae,xe,null));else if(b.isDataTexture)if(ke.length>0&&Te){je&&ft&&t.texStorage2D(3553,F,Ee,ke[0].width,ke[0].height);for(let $=0,ce=ke.length;$<ce;$++)Se=ke[$],je?t.texSubImage2D(3553,$,0,0,Se.width,Se.height,Ae,xe,Se.data):t.texImage2D(3553,$,Ee,Se.width,Se.height,0,Ae,xe,Se.data);b.generateMipmaps=!1}else je?(ft&&t.texStorage2D(3553,F,Ee,te.width,te.height),t.texSubImage2D(3553,0,0,0,te.width,te.height,Ae,xe,te.data)):t.texImage2D(3553,0,Ee,te.width,te.height,0,Ae,xe,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){je&&ft&&t.texStorage3D(35866,F,Ee,ke[0].width,ke[0].height,te.depth);for(let $=0,ce=ke.length;$<ce;$++)Se=ke[$],b.format!==cn?Ae!==null?je?t.compressedTexSubImage3D(35866,$,0,0,0,Se.width,Se.height,te.depth,Ae,Se.data,0,0):t.compressedTexImage3D(35866,$,Ee,Se.width,Se.height,te.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(35866,$,0,0,0,Se.width,Se.height,te.depth,Ae,xe,Se.data):t.texImage3D(35866,$,Ee,Se.width,Se.height,te.depth,0,Ae,xe,Se.data)}else{je&&ft&&t.texStorage2D(3553,F,Ee,ke[0].width,ke[0].height);for(let $=0,ce=ke.length;$<ce;$++)Se=ke[$],b.format!==cn?Ae!==null?je?t.compressedTexSubImage2D(3553,$,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(3553,$,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(3553,$,0,0,Se.width,Se.height,Ae,xe,Se.data):t.texImage2D(3553,$,Ee,Se.width,Se.height,0,Ae,xe,Se.data)}else if(b.isDataArrayTexture)je?(ft&&t.texStorage3D(35866,F,Ee,te.width,te.height,te.depth),t.texSubImage3D(35866,0,0,0,0,te.width,te.height,te.depth,Ae,xe,te.data)):t.texImage3D(35866,0,Ee,te.width,te.height,te.depth,0,Ae,xe,te.data);else if(b.isData3DTexture)je?(ft&&t.texStorage3D(32879,F,Ee,te.width,te.height,te.depth),t.texSubImage3D(32879,0,0,0,0,te.width,te.height,te.depth,Ae,xe,te.data)):t.texImage3D(32879,0,Ee,te.width,te.height,te.depth,0,Ae,xe,te.data);else if(b.isFramebufferTexture){if(ft)if(je)t.texStorage2D(3553,F,Ee,te.width,te.height);else{let $=te.width,ce=te.height;for(let ge=0;ge<F;ge++)t.texImage2D(3553,ge,Ee,$,ce,0,Ae,xe,null),$>>=1,ce>>=1}}else if(ke.length>0&&Te){je&&ft&&t.texStorage2D(3553,F,Ee,ke[0].width,ke[0].height);for(let $=0,ce=ke.length;$<ce;$++)Se=ke[$],je?t.texSubImage2D(3553,$,0,0,Ae,xe,Se):t.texImage2D(3553,$,Ee,Ae,xe,Se);b.generateMipmaps=!1}else je?(ft&&t.texStorage2D(3553,F,Ee,te.width,te.height),t.texSubImage2D(3553,0,0,0,Ae,xe,te)):t.texImage2D(3553,0,Ee,Ae,xe,te);D(b,Te)&&R(se),Me.__version=ue.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ce(P,b,H){if(b.image.length!==6)return;const se=ze(P,b),re=b.source;t.bindTexture(34067,P.__webglTexture,33984+H);const ue=i.get(re);if(re.version!==ue.__version||se===!0){t.activeTexture(33984+H),a.pixelStorei(37440,b.flipY),a.pixelStorei(37441,b.premultiplyAlpha),a.pixelStorei(3317,b.unpackAlignment),a.pixelStorei(37443,0);const Me=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,te=[];for(let $=0;$<6;$++)!Me&&!me?te[$]=w(b.image[$],!1,!0,u):te[$]=me?b.image[$].image:b.image[$],te[$]=Pe(b,te[$]);const Te=te[0],Ae=S(Te)||o,xe=s.convert(b.format,b.encoding),Ee=s.convert(b.type),Se=M(b.internalFormat,xe,Ee,b.encoding),ke=o&&b.isVideoTexture!==!0,je=ue.__version===void 0||se===!0;let ft=A(b,Te,Ae);Q(34067,b,Ae);let F;if(Me){ke&&je&&t.texStorage2D(34067,ft,Se,Te.width,Te.height);for(let $=0;$<6;$++){F=te[$].mipmaps;for(let ce=0;ce<F.length;ce++){const ge=F[ce];b.format!==cn?xe!==null?ke?t.compressedTexSubImage2D(34069+$,ce,0,0,ge.width,ge.height,xe,ge.data):t.compressedTexImage2D(34069+$,ce,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+$,ce,0,0,ge.width,ge.height,xe,Ee,ge.data):t.texImage2D(34069+$,ce,Se,ge.width,ge.height,0,xe,Ee,ge.data)}}}else{F=b.mipmaps,ke&&je&&(F.length>0&&ft++,t.texStorage2D(34067,ft,Se,te[0].width,te[0].height));for(let $=0;$<6;$++)if(me){ke?t.texSubImage2D(34069+$,0,0,0,te[$].width,te[$].height,xe,Ee,te[$].data):t.texImage2D(34069+$,0,Se,te[$].width,te[$].height,0,xe,Ee,te[$].data);for(let ce=0;ce<F.length;ce++){const we=F[ce].image[$].image;ke?t.texSubImage2D(34069+$,ce+1,0,0,we.width,we.height,xe,Ee,we.data):t.texImage2D(34069+$,ce+1,Se,we.width,we.height,0,xe,Ee,we.data)}}else{ke?t.texSubImage2D(34069+$,0,0,0,xe,Ee,te[$]):t.texImage2D(34069+$,0,Se,xe,Ee,te[$]);for(let ce=0;ce<F.length;ce++){const ge=F[ce];ke?t.texSubImage2D(34069+$,ce+1,0,0,xe,Ee,ge.image[$]):t.texImage2D(34069+$,ce+1,Se,xe,Ee,ge.image[$])}}}D(b,Ae)&&R(34067),ue.__version=re.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function p(P,b,H,se,re){const ue=s.convert(H.format,H.encoding),Me=s.convert(H.type),me=M(H.internalFormat,ue,Me,H.encoding);i.get(b).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,me,b.width,b.height,b.depth,0,ue,Me,null):t.texImage2D(re,0,me,b.width,b.height,0,ue,Me,null)),t.bindFramebuffer(36160,P),pe(b)?h.framebufferTexture2DMultisampleEXT(36160,se,re,i.get(H).__webglTexture,0,ye(b)):(re===3553||re>=34069&&re<=34074)&&a.framebufferTexture2D(36160,se,re,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function g(P,b,H){if(a.bindRenderbuffer(36161,P),b.depthBuffer&&!b.stencilBuffer){let se=33189;if(H||pe(b)){const re=b.depthTexture;re&&re.isDepthTexture&&(re.type===fi?se=36012:re.type===ui&&(se=33190));const ue=ye(b);pe(b)?h.renderbufferStorageMultisampleEXT(36161,ue,se,b.width,b.height):a.renderbufferStorageMultisample(36161,ue,se,b.width,b.height)}else a.renderbufferStorage(36161,se,b.width,b.height);a.framebufferRenderbuffer(36160,36096,36161,P)}else if(b.depthBuffer&&b.stencilBuffer){const se=ye(b);H&&pe(b)===!1?a.renderbufferStorageMultisample(36161,se,35056,b.width,b.height):pe(b)?h.renderbufferStorageMultisampleEXT(36161,se,35056,b.width,b.height):a.renderbufferStorage(36161,34041,b.width,b.height),a.framebufferRenderbuffer(36160,33306,36161,P)}else{const se=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0;re<se.length;re++){const ue=se[re],Me=s.convert(ue.format,ue.encoding),me=s.convert(ue.type),te=M(ue.internalFormat,Me,me,ue.encoding),Te=ye(b);H&&pe(b)===!1?a.renderbufferStorageMultisample(36161,Te,te,b.width,b.height):pe(b)?h.renderbufferStorageMultisampleEXT(36161,Te,te,b.width,b.height):a.renderbufferStorage(36161,te,b.width,b.height)}}a.bindRenderbuffer(36161,null)}function y(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie(b.depthTexture,0);const se=i.get(b.depthTexture).__webglTexture,re=ye(b);if(b.depthTexture.format===hi)pe(b)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,re):a.framebufferTexture2D(36160,36096,3553,se,0);else if(b.depthTexture.format===ar)pe(b)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,re):a.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function C(P){const b=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");y(b.__webglFramebuffer,P)}else if(H){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(36160,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]=a.createRenderbuffer(),g(b.__webglDepthbuffer[se],P,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=a.createRenderbuffer(),g(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function I(P,b,H){const se=i.get(P);b!==void 0&&p(se.__webglFramebuffer,P,P.texture,36064,3553),H!==void 0&&C(P)}function V(P){const b=P.texture,H=i.get(P),se=i.get(b);P.addEventListener("dispose",Z),P.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=a.createTexture()),se.__version=b.version,l.memory.textures++);const re=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,Me=S(P)||o;if(re){H.__webglFramebuffer=[];for(let me=0;me<6;me++)H.__webglFramebuffer[me]=a.createFramebuffer()}else{if(H.__webglFramebuffer=a.createFramebuffer(),ue)if(r.drawBuffers){const me=P.texture;for(let te=0,Te=me.length;te<Te;te++){const Ae=i.get(me[te]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=a.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&pe(P)===!1){const me=ue?b:[b];H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let te=0;te<me.length;te++){const Te=me[te];H.__webglColorRenderbuffer[te]=a.createRenderbuffer(),a.bindRenderbuffer(36161,H.__webglColorRenderbuffer[te]);const Ae=s.convert(Te.format,Te.encoding),xe=s.convert(Te.type),Ee=M(Te.internalFormat,Ae,xe,Te.encoding,P.isXRRenderTarget===!0),Se=ye(P);a.renderbufferStorageMultisample(36161,Se,Ee,P.width,P.height),a.framebufferRenderbuffer(36160,36064+te,36161,H.__webglColorRenderbuffer[te])}a.bindRenderbuffer(36161,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),g(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,se.__webglTexture),Q(34067,b,Me);for(let me=0;me<6;me++)p(H.__webglFramebuffer[me],P,b,36064,34069+me);D(b,Me)&&R(34067),t.unbindTexture()}else if(ue){const me=P.texture;for(let te=0,Te=me.length;te<Te;te++){const Ae=me[te],xe=i.get(Ae);t.bindTexture(3553,xe.__webglTexture),Q(3553,Ae,Me),p(H.__webglFramebuffer,P,Ae,36064+te,3553),D(Ae,Me)&&R(3553)}t.unbindTexture()}else{let me=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?me=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,se.__webglTexture),Q(me,b,Me),p(H.__webglFramebuffer,P,b,36064,me),D(b,Me)&&R(me),t.unbindTexture()}P.depthBuffer&&C(P)}function W(P){const b=S(P)||o,H=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let se=0,re=H.length;se<re;se++){const ue=H[se];if(D(ue,b)){const Me=P.isWebGLCubeRenderTarget?34067:3553,me=i.get(ue).__webglTexture;t.bindTexture(Me,me),R(Me),t.unbindTexture()}}}function ae(P){if(o&&P.samples>0&&pe(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],H=P.width,se=P.height;let re=16384;const ue=[],Me=P.stencilBuffer?33306:36096,me=i.get(P),te=P.isWebGLMultipleRenderTargets===!0;if(te)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Te,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Te,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){ue.push(36064+Te),P.depthBuffer&&ue.push(Me);const Ae=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ae===!1&&(P.depthBuffer&&(re|=256),P.stencilBuffer&&(re|=1024)),te&&a.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Te]),Ae===!0&&(a.invalidateFramebuffer(36008,[Me]),a.invalidateFramebuffer(36009,[Me])),te){const xe=i.get(b[Te]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,xe,0)}a.blitFramebuffer(0,0,H,se,0,0,H,se,re,9728),_&&a.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),te)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Te,36161,me.__webglColorRenderbuffer[Te]);const Ae=i.get(b[Te]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Te,3553,Ae,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function ye(P){return Math.min(d,P.samples)}function pe(P){const b=i.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _e(P){const b=l.render.frame;x.get(P)!==b&&(x.set(P,b),P.update())}function Pe(P,b){const H=P.encoding,se=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===lo||H!==wi&&(H===Ye?o===!1?e.has("EXT_sRGB")===!0&&se===cn?(P.format=lo,P.minFilter=Qt,P.generateMipmaps=!1):b=Jc.sRGBToLinear(b):(se!==cn||re!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),b}this.allocateTextureUnit=Y,this.resetTextureUnits=ne,this.setTexture2D=ie,this.setTexture2DArray=j,this.setTexture3D=q,this.setTextureCube=de,this.rebindTextures=I,this.setupRenderTarget=V,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=p,this.useMultisampledRTT=pe}function F_(a,e,t){const i=t.isWebGL2;function r(s,l=null){let o;if(s===Mi)return 5121;if(s===dd)return 32819;if(s===hd)return 32820;if(s===cd)return 5120;if(s===ud)return 5122;if(s===jc)return 5123;if(s===fd)return 5124;if(s===ui)return 5125;if(s===fi)return 5126;if(s===Vr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===pd)return 6406;if(s===cn)return 6408;if(s===gd)return 6409;if(s===_d)return 6410;if(s===hi)return 6402;if(s===ar)return 34041;if(s===md)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===lo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===vd)return 6403;if(s===xd)return 36244;if(s===yd)return 33319;if(s===Md)return 33320;if(s===wd)return 36249;if(s===pa||s===ma||s===ga||s===_a)if(l===Ye)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vl||s===xl||s===yl||s===Ml)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===vl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ml)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wl||s===Sl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===wl)return l===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Sl)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bl||s===Tl||s===El||s===Cl||s===Al||s===Ll||s===Pl||s===Dl||s===Rl||s===Il||s===zl||s===Fl||s===Ol||s===Nl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===bl)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tl)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===El)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cl)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Al)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ll)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pl)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dl)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rl)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Il)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zl)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fl)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ol)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nl)return l===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Bl)return l===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ki?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:r}}class O_ extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,l=null;const o=this._targetRay,f=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(const m of e.hand.values()){const v=t.getJointPose(m,i),n=this._getHandJoint(u,m);v!==null&&(n.matrix.fromArray(v.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.jointRadius=v.radius),n.visible=v!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),_=.02,x=.005;u.inputState.pinching&&h>_+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=_-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return o!==null&&(o.visible=r!==null),f!==null&&(f.visible=s!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class B_ extends Dt{constructor(e,t,i,r,s,l,o,f,u,c){if(c=c!==void 0?c:hi,c!==hi&&c!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===hi&&(i=ui),i===void 0&&c===ar&&(i=Ki),super(null,r,s,l,o,f,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Et,this.minFilter=f!==void 0?f:Et,this.flipY=!1,this.generateMipmaps=!1}}class k_ extends mr{constructor(e,t){super();const i=this;let r=null,s=1,l=null,o="local-floor",f=null,u=null,c=null,d=null,h=null,_=null;const x=t.getContextAttributes();let m=null,v=null;const n=[],T=[],w=new Set,S=new Map,E=new Ct;E.layers.enable(1),E.viewport=new $e;const D=new Ct;D.layers.enable(2),D.viewport=new $e;const R=[E,D],M=new O_;M.layers.enable(1),M.layers.enable(2);let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let q=n[j];return q===void 0&&(q=new Va,n[j]=q),q.getTargetRaySpace()},this.getControllerGrip=function(j){let q=n[j];return q===void 0&&(q=new Va,n[j]=q),q.getGripSpace()},this.getHand=function(j){let q=n[j];return q===void 0&&(q=new Va,n[j]=q),q.getHandSpace()};function G(j){const q=T.indexOf(j.inputSource);if(q===-1)return;const de=n[q];de!==void 0&&de.dispatchEvent({type:j.type,data:j.inputSource})}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",N);for(let j=0;j<n.length;j++){const q=T[j];q!==null&&(T[j]=null,n[j].disconnect(q))}A=null,z=null,e.setRenderTarget(m),h=null,d=null,c=null,r=null,v=null,ie.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(j){f=j},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return c},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:h}),v=new Si(h.framebufferWidth,h.framebufferHeight,{format:cn,type:Mi,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let q=null,de=null,le=null;x.depth&&(le=x.stencil?35056:33190,q=x.stencil?ar:hi,de=x.stencil?Ki:ui);const fe={colorFormat:32856,depthFormat:le,scaleFactor:s};c=new XRWebGLBinding(r,t),d=c.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),v=new Si(d.textureWidth,d.textureHeight,{format:cn,type:Mi,depthTexture:new B_(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const Q=e.properties.get(v);Q.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),f=null,l=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(j){for(let q=0;q<j.removed.length;q++){const de=j.removed[q],le=T.indexOf(de);le>=0&&(T[le]=null,n[le].disconnect(de))}for(let q=0;q<j.added.length;q++){const de=j.added[q];let le=T.indexOf(de);if(le===-1){for(let Q=0;Q<n.length;Q++)if(Q>=T.length){T.push(de),le=Q;break}else if(T[Q]===null){T[Q]=de,le=Q;break}if(le===-1)break}const fe=n[le];fe&&fe.connect(de)}}const O=new k,X=new k;function J(j,q,de){O.setFromMatrixPosition(q.matrixWorld),X.setFromMatrixPosition(de.matrixWorld);const le=O.distanceTo(X),fe=q.projectionMatrix.elements,Q=de.projectionMatrix.elements,ze=fe[14]/(fe[10]-1),ve=fe[14]/(fe[10]+1),Ce=(fe[9]+1)/fe[5],p=(fe[9]-1)/fe[5],g=(fe[8]-1)/fe[0],y=(Q[8]+1)/Q[0],C=ze*g,I=ze*y,V=le/(-g+y),W=V*-g;q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(W),j.translateZ(V),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const ae=ze+V,ye=ve+V,pe=C-W,_e=I+(le-W),Pe=Ce*ve/ye*ae,P=p*ve/ye*ae;j.projectionMatrix.makePerspective(pe,_e,Pe,P,ae,ye)}function ne(j,q){q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;M.near=D.near=E.near=j.near,M.far=D.far=E.far=j.far,(A!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,z=M.far);const q=j.parent,de=M.cameras;ne(M,q);for(let fe=0;fe<de.length;fe++)ne(de[fe],q);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),j.matrix.copy(M.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);const le=j.children;for(let fe=0,Q=le.length;fe<Q;fe++)le[fe].updateMatrixWorld(!0);de.length===2?J(M,E,D):M.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(j){d!==null&&(d.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.getPlanes=function(){return w};let Y=null;function oe(j,q){if(u=q.getViewerPose(f||l),_=q,u!==null){const de=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let le=!1;de.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let fe=0;fe<de.length;fe++){const Q=de[fe];let ze=null;if(h!==null)ze=h.getViewport(Q);else{const Ce=c.getViewSubImage(d,Q);ze=Ce.viewport,fe===0&&(e.setRenderTargetTextures(v,Ce.colorTexture,d.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(v))}let ve=R[fe];ve===void 0&&(ve=new Ct,ve.layers.enable(fe),ve.viewport=new $e,R[fe]=ve),ve.matrix.fromArray(Q.transform.matrix),ve.projectionMatrix.fromArray(Q.projectionMatrix),ve.viewport.set(ze.x,ze.y,ze.width,ze.height),fe===0&&M.matrix.copy(ve.matrix),le===!0&&M.cameras.push(ve)}}for(let de=0;de<n.length;de++){const le=T[de],fe=n[de];le!==null&&fe!==void 0&&fe.update(le,q,f||l)}if(Y&&Y(j,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let de=null;for(const le of w)q.detectedPlanes.has(le)||(de===null&&(de=[]),de.push(le));if(de!==null)for(const le of de)w.delete(le),S.delete(le),i.dispatchEvent({type:"planeremoved",data:le});for(const le of q.detectedPlanes)if(!w.has(le))w.add(le),S.set(le,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:le});else{const fe=S.get(le);le.lastChangedTime>fe&&(S.set(le,le.lastChangedTime),i.dispatchEvent({type:"planechanged",data:le}))}}_=null}const ie=new ou;ie.setAnimationLoop(oe),this.setAnimationLoop=function(j){Y=j},this.dispose=function(){}}}function U_(a,e){function t(m,v){v.color.getRGB(m.fogColor.value,ru(a)),v.isFog?(m.fogNear.value=v.near,m.fogFar.value=v.far):v.isFogExp2&&(m.fogDensity.value=v.density)}function i(m,v,n,T,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?r(m,v):v.isMeshToonMaterial?(r(m,v),c(m,v)):v.isMeshPhongMaterial?(r(m,v),u(m,v)):v.isMeshStandardMaterial?(r(m,v),d(m,v),v.isMeshPhysicalMaterial&&h(m,v,w)):v.isMeshMatcapMaterial?(r(m,v),_(m,v)):v.isMeshDepthMaterial?r(m,v):v.isMeshDistanceMaterial?(r(m,v),x(m,v)):v.isMeshNormalMaterial?r(m,v):v.isLineBasicMaterial?(s(m,v),v.isLineDashedMaterial&&l(m,v)):v.isPointsMaterial?o(m,v,n,T):v.isSpriteMaterial?f(m,v):v.isShadowMaterial?(m.color.value.copy(v.color),m.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(m,v){m.opacity.value=v.opacity,v.color&&m.diffuse.value.copy(v.color),v.emissive&&m.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(m.map.value=v.map),v.alphaMap&&(m.alphaMap.value=v.alphaMap),v.bumpMap&&(m.bumpMap.value=v.bumpMap,m.bumpScale.value=v.bumpScale,v.side===nn&&(m.bumpScale.value*=-1)),v.displacementMap&&(m.displacementMap.value=v.displacementMap,m.displacementScale.value=v.displacementScale,m.displacementBias.value=v.displacementBias),v.emissiveMap&&(m.emissiveMap.value=v.emissiveMap),v.normalMap&&(m.normalMap.value=v.normalMap,m.normalScale.value.copy(v.normalScale),v.side===nn&&m.normalScale.value.negate()),v.specularMap&&(m.specularMap.value=v.specularMap),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest);const n=e.get(v).envMap;if(n&&(m.envMap.value=n,m.flipEnvMap.value=n.isCubeTexture&&n.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=v.reflectivity,m.ior.value=v.ior,m.refractionRatio.value=v.refractionRatio),v.lightMap){m.lightMap.value=v.lightMap;const S=a.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=v.lightMapIntensity*S}v.aoMap&&(m.aoMap.value=v.aoMap,m.aoMapIntensity.value=v.aoMapIntensity);let T;v.map?T=v.map:v.specularMap?T=v.specularMap:v.displacementMap?T=v.displacementMap:v.normalMap?T=v.normalMap:v.bumpMap?T=v.bumpMap:v.roughnessMap?T=v.roughnessMap:v.metalnessMap?T=v.metalnessMap:v.alphaMap?T=v.alphaMap:v.emissiveMap?T=v.emissiveMap:v.clearcoatMap?T=v.clearcoatMap:v.clearcoatNormalMap?T=v.clearcoatNormalMap:v.clearcoatRoughnessMap?T=v.clearcoatRoughnessMap:v.iridescenceMap?T=v.iridescenceMap:v.iridescenceThicknessMap?T=v.iridescenceThicknessMap:v.specularIntensityMap?T=v.specularIntensityMap:v.specularColorMap?T=v.specularColorMap:v.transmissionMap?T=v.transmissionMap:v.thicknessMap?T=v.thicknessMap:v.sheenColorMap?T=v.sheenColorMap:v.sheenRoughnessMap&&(T=v.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix));let w;v.aoMap?w=v.aoMap:v.lightMap&&(w=v.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function s(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity}function l(m,v){m.dashSize.value=v.dashSize,m.totalSize.value=v.dashSize+v.gapSize,m.scale.value=v.scale}function o(m,v,n,T){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.size.value=v.size*n,m.scale.value=T*.5,v.map&&(m.map.value=v.map),v.alphaMap&&(m.alphaMap.value=v.alphaMap),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest);let w;v.map?w=v.map:v.alphaMap&&(w=v.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function f(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.rotation.value=v.rotation,v.map&&(m.map.value=v.map),v.alphaMap&&(m.alphaMap.value=v.alphaMap),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest);let n;v.map?n=v.map:v.alphaMap&&(n=v.alphaMap),n!==void 0&&(n.matrixAutoUpdate===!0&&n.updateMatrix(),m.uvTransform.value.copy(n.matrix))}function u(m,v){m.specular.value.copy(v.specular),m.shininess.value=Math.max(v.shininess,1e-4)}function c(m,v){v.gradientMap&&(m.gradientMap.value=v.gradientMap)}function d(m,v){m.roughness.value=v.roughness,m.metalness.value=v.metalness,v.roughnessMap&&(m.roughnessMap.value=v.roughnessMap),v.metalnessMap&&(m.metalnessMap.value=v.metalnessMap),e.get(v).envMap&&(m.envMapIntensity.value=v.envMapIntensity)}function h(m,v,n){m.ior.value=v.ior,v.sheen>0&&(m.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),m.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(m.sheenColorMap.value=v.sheenColorMap),v.sheenRoughnessMap&&(m.sheenRoughnessMap.value=v.sheenRoughnessMap)),v.clearcoat>0&&(m.clearcoat.value=v.clearcoat,m.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(m.clearcoatMap.value=v.clearcoatMap),v.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap),v.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),m.clearcoatNormalMap.value=v.clearcoatNormalMap,v.side===nn&&m.clearcoatNormalScale.value.negate())),v.iridescence>0&&(m.iridescence.value=v.iridescence,m.iridescenceIOR.value=v.iridescenceIOR,m.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(m.iridescenceMap.value=v.iridescenceMap),v.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=v.iridescenceThicknessMap)),v.transmission>0&&(m.transmission.value=v.transmission,m.transmissionSamplerMap.value=n.texture,m.transmissionSamplerSize.value.set(n.width,n.height),v.transmissionMap&&(m.transmissionMap.value=v.transmissionMap),m.thickness.value=v.thickness,v.thicknessMap&&(m.thicknessMap.value=v.thicknessMap),m.attenuationDistance.value=v.attenuationDistance,m.attenuationColor.value.copy(v.attenuationColor)),m.specularIntensity.value=v.specularIntensity,m.specularColor.value.copy(v.specularColor),v.specularIntensityMap&&(m.specularIntensityMap.value=v.specularIntensityMap),v.specularColorMap&&(m.specularColorMap.value=v.specularColorMap)}function _(m,v){v.matcap&&(m.matcap.value=v.matcap)}function x(m,v){m.referencePosition.value.copy(v.referencePosition),m.nearDistance.value=v.nearDistance,m.farDistance.value=v.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function G_(a,e,t,i){let r={},s={},l=[];const o=t.isWebGL2?a.getParameter(35375):0;function f(T,w){const S=w.program;i.uniformBlockBinding(T,S)}function u(T,w){let S=r[T.id];S===void 0&&(x(T),S=c(T),r[T.id]=S,T.addEventListener("dispose",v));const E=w.program;i.updateUBOMapping(T,E);const D=e.render.frame;s[T.id]!==D&&(h(T),s[T.id]=D)}function c(T){const w=d();T.__bindingPointIndex=w;const S=a.createBuffer(),E=T.__size,D=T.usage;return a.bindBuffer(35345,S),a.bufferData(35345,E,D),a.bindBuffer(35345,null),a.bindBufferBase(35345,w,S),S}function d(){for(let T=0;T<o;T++)if(l.indexOf(T)===-1)return l.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const w=r[T.id],S=T.uniforms,E=T.__cache;a.bindBuffer(35345,w);for(let D=0,R=S.length;D<R;D++){const M=S[D];if(_(M,D,E)===!0){const A=M.__offset,z=Array.isArray(M.value)?M.value:[M.value];let G=0;for(let Z=0;Z<z.length;Z++){const N=z[Z],O=m(N);typeof N=="number"?(M.__data[0]=N,a.bufferSubData(35345,A+G,M.__data)):N.isMatrix3?(M.__data[0]=N.elements[0],M.__data[1]=N.elements[1],M.__data[2]=N.elements[2],M.__data[3]=N.elements[0],M.__data[4]=N.elements[3],M.__data[5]=N.elements[4],M.__data[6]=N.elements[5],M.__data[7]=N.elements[0],M.__data[8]=N.elements[6],M.__data[9]=N.elements[7],M.__data[10]=N.elements[8],M.__data[11]=N.elements[0]):(N.toArray(M.__data,G),G+=O.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,A,M.__data)}}a.bindBuffer(35345,null)}function _(T,w,S){const E=T.value;if(S[w]===void 0){if(typeof E=="number")S[w]=E;else{const D=Array.isArray(E)?E:[E],R=[];for(let M=0;M<D.length;M++)R.push(D[M].clone());S[w]=R}return!0}else if(typeof E=="number"){if(S[w]!==E)return S[w]=E,!0}else{const D=Array.isArray(S[w])?S[w]:[S[w]],R=Array.isArray(E)?E:[E];for(let M=0;M<D.length;M++){const A=D[M];if(A.equals(R[M])===!1)return A.copy(R[M]),!0}}return!1}function x(T){const w=T.uniforms;let S=0;const E=16;let D=0;for(let R=0,M=w.length;R<M;R++){const A=w[R],z={boundary:0,storage:0},G=Array.isArray(A.value)?A.value:[A.value];for(let Z=0,N=G.length;Z<N;Z++){const O=G[Z],X=m(O);z.boundary+=X.boundary,z.storage+=X.storage}if(A.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=S,R>0){D=S%E;const Z=E-D;D!==0&&Z-z.boundary<0&&(S+=E-D,A.__offset=S)}S+=z.storage}return D=S%E,D>0&&(S+=E-D),T.__size=S,T.__cache={},this}function m(T){const w={boundary:0,storage:0};return typeof T=="number"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function v(T){const w=T.target;w.removeEventListener("dispose",v);const S=l.indexOf(w.__bindingPointIndex);l.splice(S,1),a.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function n(){for(const T in r)a.deleteBuffer(r[T]);l=[],r={},s={}}return{bind:f,update:u,dispose:n}}function V_(){const a=Wr("canvas");return a.style.display="block",a}function du(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:V_(),t=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,l=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,f=a.powerPreference!==void 0?a.powerPreference:"default",u=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=a.alpha!==void 0?a.alpha:!1;let d=null,h=null;const _=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wi,this.physicallyCorrectLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const m=this;let v=!1,n=0,T=0,w=null,S=-1,E=null;const D=new $e,R=new $e;let M=null,A=e.width,z=e.height,G=1,Z=null,N=null;const O=new $e(0,0,A,z),X=new $e(0,0,A,z);let J=!1;const ne=new Bo;let Y=!1,oe=!1,ie=null;const j=new ot,q=new He,de=new k,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return w===null?G:1}let Q=t;function ze(L,U){for(let K=0;K<L.length;K++){const B=L[K],ee=e.getContext(B,U);if(ee!==null)return ee}return null}try{const L={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",ke,!1),Q===null){const U=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&U.shift(),Q=ze(U,L),Q===null)throw ze(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ve,Ce,p,g,y,C,I,V,W,ae,ye,pe,_e,Pe,P,b,H,se,re,ue,Me,me,te,Te;function Ae(){ve=new Qm(Q),Ce=new qm(Q,ve,a),ve.init(Ce),me=new F_(Q,ve,Ce),p=new I_(Q,ve,Ce),g=new ng,y=new x_,C=new z_(Q,ve,p,y,Ce,me,g),I=new jm(m),V=new Jm(m),W=new uh(Q,Ce),te=new Wm(Q,ve,W,Ce),ae=new eg(Q,W,g,te),ye=new ag(Q,ae,W,g),re=new sg(Q,Ce,C),b=new Ym(y),pe=new v_(m,I,V,ve,Ce,te,b),_e=new U_(m,y),Pe=new M_,P=new C_(ve,Ce),se=new Hm(m,I,V,p,ye,c,l),H=new R_(m,ye,Ce),Te=new G_(Q,g,Ce,p),ue=new Xm(Q,ve,g,Ce),Me=new tg(Q,ve,g,Ce),g.programs=pe.programs,m.capabilities=Ce,m.extensions=ve,m.properties=y,m.renderLists=Pe,m.shadowMap=H,m.state=p,m.info=g}Ae();const xe=new k_(m,Q);this.xr=xe,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const L=ve.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ve.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(L){L!==void 0&&(G=L,this.setSize(A,z,!1))},this.getSize=function(L){return L.set(A,z)},this.setSize=function(L,U,K){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=L,z=U,e.width=Math.floor(L*G),e.height=Math.floor(U*G),K!==!1&&(e.style.width=L+"px",e.style.height=U+"px"),this.setViewport(0,0,L,U)},this.getDrawingBufferSize=function(L){return L.set(A*G,z*G).floor()},this.setDrawingBufferSize=function(L,U,K){A=L,z=U,G=K,e.width=Math.floor(L*K),e.height=Math.floor(U*K),this.setViewport(0,0,L,U)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(O)},this.setViewport=function(L,U,K,B){L.isVector4?O.set(L.x,L.y,L.z,L.w):O.set(L,U,K,B),p.viewport(D.copy(O).multiplyScalar(G).floor())},this.getScissor=function(L){return L.copy(X)},this.setScissor=function(L,U,K,B){L.isVector4?X.set(L.x,L.y,L.z,L.w):X.set(L,U,K,B),p.scissor(R.copy(X).multiplyScalar(G).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(L){p.setScissorTest(J=L)},this.setOpaqueSort=function(L){Z=L},this.setTransparentSort=function(L){N=L},this.getClearColor=function(L){return L.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(L=!0,U=!0,K=!0){let B=0;L&&(B|=16384),U&&(B|=256),K&&(B|=1024),Q.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),Pe.dispose(),P.dispose(),y.dispose(),I.dispose(),V.dispose(),ye.dispose(),te.dispose(),Te.dispose(),pe.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ge),xe.removeEventListener("sessionend",we),ie&&(ie.dispose(),ie=null),Ve.stop()};function Ee(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const L=g.autoReset,U=H.enabled,K=H.autoUpdate,B=H.needsUpdate,ee=H.type;Ae(),g.autoReset=L,H.enabled=U,H.autoUpdate=K,H.needsUpdate=B,H.type=ee}function ke(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function je(L){const U=L.target;U.removeEventListener("dispose",je),ft(U)}function ft(L){F(L),y.remove(L)}function F(L){const U=y.get(L).programs;U!==void 0&&(U.forEach(function(K){pe.releaseProgram(K)}),L.isShaderMaterial&&pe.releaseShaderCache(L))}this.renderBufferDirect=function(L,U,K,B,ee,be){U===null&&(U=le);const Le=ee.isMesh&&ee.matrixWorld.determinant()<0,Re=Lf(L,U,K,B,ee);p.setMaterial(B,Le);let Ie=K.index,Ue=1;B.wireframe===!0&&(Ie=ae.getWireframeAttribute(K),Ue=2);const Oe=K.drawRange,Ne=K.attributes.position;let nt=Oe.start*Ue,Bt=(Oe.start+Oe.count)*Ue;be!==null&&(nt=Math.max(nt,be.start*Ue),Bt=Math.min(Bt,(be.start+be.count)*Ue)),Ie!==null?(nt=Math.max(nt,0),Bt=Math.min(Bt,Ie.count)):Ne!=null&&(nt=Math.max(nt,0),Bt=Math.min(Bt,Ne.count));const xn=Bt-nt;if(xn<0||xn===1/0)return;te.setup(ee,B,Re,K,Ie);let Yn,it=ue;if(Ie!==null&&(Yn=W.get(Ie),it=Me,it.setIndex(Yn)),ee.isMesh)B.wireframe===!0?(p.setLineWidth(B.wireframeLinewidth*fe()),it.setMode(1)):it.setMode(4);else if(ee.isLine){let Be=B.linewidth;Be===void 0&&(Be=1),p.setLineWidth(Be*fe()),ee.isLineSegments?it.setMode(1):ee.isLineLoop?it.setMode(2):it.setMode(3)}else ee.isPoints?it.setMode(0):ee.isSprite&&it.setMode(4);if(ee.isInstancedMesh)it.renderInstances(nt,xn,ee.count);else if(K.isInstancedBufferGeometry){const Be=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ca=Math.min(K.instanceCount,Be);it.renderInstances(nt,xn,ca)}else it.render(nt,xn)},this.compile=function(L,U){function K(B,ee,be){B.transparent===!0&&B.side===rs?(B.side=nn,B.needsUpdate=!0,Zt(B,ee,be),B.side=yi,B.needsUpdate=!0,Zt(B,ee,be),B.side=rs):Zt(B,ee,be)}h=P.get(L),h.init(),x.push(h),L.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights(m.physicallyCorrectLights),L.traverse(function(B){const ee=B.material;if(ee)if(Array.isArray(ee))for(let be=0;be<ee.length;be++){const Le=ee[be];K(Le,L,B)}else K(ee,L,B)}),x.pop(),h=null};let $=null;function ce(L){$&&$(L)}function ge(){Ve.stop()}function we(){Ve.start()}const Ve=new ou;Ve.setAnimationLoop(ce),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(L){$=L,xe.setAnimationLoop(L),L===null?Ve.stop():Ve.start()},xe.addEventListener("sessionstart",ge),xe.addEventListener("sessionend",we),this.render=function(L,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(U),U=xe.getCamera()),L.isScene===!0&&L.onBeforeRender(m,L,U,w),h=P.get(L,x.length),h.init(),x.push(h),j.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(j),oe=this.localClippingEnabled,Y=b.init(this.clippingPlanes,oe,U),d=Pe.get(L,_.length),d.init(),_.push(d),dt(L,U,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(Z,N),Y===!0&&b.beginShadows();const K=h.state.shadowsArray;if(H.render(K,L,U),Y===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(d,L),h.setupLights(m.physicallyCorrectLights),U.isArrayCamera){const B=U.cameras;for(let ee=0,be=B.length;ee<be;ee++){const Le=B[ee];vt(d,L,Le,Le.viewport)}}else vt(d,L,U);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(m,L,U),te.resetDefaultState(),S=-1,E=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,_.pop(),_.length>0?d=_[_.length-1]:d=null};function dt(L,U,K,B){if(L.visible===!1)return;if(L.layers.test(U.layers)){if(L.isGroup)K=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(U);else if(L.isLight)h.pushLight(L),L.castShadow&&h.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ne.intersectsSprite(L)){B&&de.setFromMatrixPosition(L.matrixWorld).applyMatrix4(j);const Le=ye.update(L),Re=L.material;Re.visible&&d.push(L,Le,Re,K,de.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==g.render.frame&&(L.skeleton.update(),L.skeleton.frame=g.render.frame),!L.frustumCulled||ne.intersectsObject(L))){B&&de.setFromMatrixPosition(L.matrixWorld).applyMatrix4(j);const Le=ye.update(L),Re=L.material;if(Array.isArray(Re)){const Ie=Le.groups;for(let Ue=0,Oe=Ie.length;Ue<Oe;Ue++){const Ne=Ie[Ue],nt=Re[Ne.materialIndex];nt&&nt.visible&&d.push(L,Le,nt,K,de.z,Ne)}}else Re.visible&&d.push(L,Le,Re,K,de.z,null)}}const be=L.children;for(let Le=0,Re=be.length;Le<Re;Le++)dt(be[Le],U,K,B)}function vt(L,U,K,B){const ee=L.opaque,be=L.transmissive,Le=L.transparent;h.setupLightsView(K),be.length>0&&qn(ee,U,K),B&&p.viewport(D.copy(B)),ee.length>0&&Ze(ee,U,K),be.length>0&&Ze(be,U,K),Le.length>0&&Ze(Le,U,K),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function qn(L,U,K){const B=Ce.isWebGL2;ie===null&&(ie=new Si(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Vr:Mi,minFilter:Gr,samples:B&&s===!0?4:0})),m.getDrawingBufferSize(q),B?ie.setSize(q.x,q.y):ie.setSize(Is(q.x),Is(q.y));const ee=m.getRenderTarget();m.setRenderTarget(ie),m.clear();const be=m.toneMapping;m.toneMapping=Pn,Ze(L,U,K),m.toneMapping=be,C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie),m.setRenderTarget(ee)}function Ze(L,U,K){const B=U.isScene===!0?U.overrideMaterial:null;for(let ee=0,be=L.length;ee<be;ee++){const Le=L[ee],Re=Le.object,Ie=Le.geometry,Ue=B===null?Le.material:B,Oe=Le.group;Re.layers.test(K.layers)&&vn(Re,U,K,Ie,Ue,Oe)}}function vn(L,U,K,B,ee,be){L.onBeforeRender(m,U,K,B,ee,be),L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ee.onBeforeRender(m,U,K,B,L,be),ee.transparent===!0&&ee.side===rs?(ee.side=nn,ee.needsUpdate=!0,m.renderBufferDirect(K,U,B,ee,L,be),ee.side=yi,ee.needsUpdate=!0,m.renderBufferDirect(K,U,B,ee,L,be),ee.side=rs):m.renderBufferDirect(K,U,B,ee,L,be),L.onAfterRender(m,U,K,B,ee,be)}function Zt(L,U,K){U.isScene!==!0&&(U=le);const B=y.get(L),ee=h.state.lights,be=h.state.shadowsArray,Le=ee.state.version,Re=pe.getParameters(L,ee.state,be,U,K),Ie=pe.getProgramCacheKey(Re);let Ue=B.programs;B.environment=L.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(L.isMeshStandardMaterial?V:I).get(L.envMap||B.environment),Ue===void 0&&(L.addEventListener("dispose",je),Ue=new Map,B.programs=Ue);let Oe=Ue.get(Ie);if(Oe!==void 0){if(B.currentProgram===Oe&&B.lightsStateVersion===Le)return ll(L,Re),Oe}else Re.uniforms=pe.getUniforms(L),L.onBuild(K,Re,m),L.onBeforeCompile(Re,m),Oe=pe.acquireProgram(Re,Ie),Ue.set(Ie,Oe),B.uniforms=Re.uniforms;const Ne=B.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ne.clippingPlanes=b.uniform),ll(L,Re),B.needsLights=Df(L),B.lightsStateVersion=Le,B.needsLights&&(Ne.ambientLightColor.value=ee.state.ambient,Ne.lightProbe.value=ee.state.probe,Ne.directionalLights.value=ee.state.directional,Ne.directionalLightShadows.value=ee.state.directionalShadow,Ne.spotLights.value=ee.state.spot,Ne.spotLightShadows.value=ee.state.spotShadow,Ne.rectAreaLights.value=ee.state.rectArea,Ne.ltc_1.value=ee.state.rectAreaLTC1,Ne.ltc_2.value=ee.state.rectAreaLTC2,Ne.pointLights.value=ee.state.point,Ne.pointLightShadows.value=ee.state.pointShadow,Ne.hemisphereLights.value=ee.state.hemi,Ne.directionalShadowMap.value=ee.state.directionalShadowMap,Ne.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ne.spotShadowMap.value=ee.state.spotShadowMap,Ne.spotLightMatrix.value=ee.state.spotLightMatrix,Ne.spotLightMap.value=ee.state.spotLightMap,Ne.pointShadowMap.value=ee.state.pointShadowMap,Ne.pointShadowMatrix.value=ee.state.pointShadowMatrix);const nt=Oe.getUniforms(),Bt=As.seqWithValue(nt.seq,Ne);return B.currentProgram=Oe,B.uniformsList=Bt,Oe}function ll(L,U){const K=y.get(L);K.outputEncoding=U.outputEncoding,K.instancing=U.instancing,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function Lf(L,U,K,B,ee){U.isScene!==!0&&(U=le),C.resetTextureUnits();const be=U.fog,Le=B.isMeshStandardMaterial?U.environment:null,Re=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:wi,Ie=(B.isMeshStandardMaterial?V:I).get(B.envMap||Le),Ue=B.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Oe=!!B.normalMap&&!!K.attributes.tangent,Ne=!!K.morphAttributes.position,nt=!!K.morphAttributes.normal,Bt=!!K.morphAttributes.color,xn=B.toneMapped?m.toneMapping:Pn,Yn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,it=Yn!==void 0?Yn.length:0,Be=y.get(B),ca=h.state.lights;if(Y===!0&&(oe===!0||L!==E)){const kt=L===E&&B.id===S;b.setState(B,L,kt)}let ht=!1;B.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ca.state.version||Be.outputEncoding!==Re||ee.isInstancedMesh&&Be.instancing===!1||!ee.isInstancedMesh&&Be.instancing===!0||ee.isSkinnedMesh&&Be.skinning===!1||!ee.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Ie||B.fog===!0&&Be.fog!==be||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==b.numPlanes||Be.numIntersection!==b.numIntersection)||Be.vertexAlphas!==Ue||Be.vertexTangents!==Oe||Be.morphTargets!==Ne||Be.morphNormals!==nt||Be.morphColors!==Bt||Be.toneMapping!==xn||Ce.isWebGL2===!0&&Be.morphTargetsCount!==it)&&(ht=!0):(ht=!0,Be.__version=B.version);let jn=Be.currentProgram;ht===!0&&(jn=Zt(B,U,ee));let cl=!1,xr=!1,ua=!1;const St=jn.getUniforms(),Zn=Be.uniforms;if(p.useProgram(jn.program)&&(cl=!0,xr=!0,ua=!0),B.id!==S&&(S=B.id,xr=!0),cl||E!==L){if(St.setValue(Q,"projectionMatrix",L.projectionMatrix),Ce.logarithmicDepthBuffer&&St.setValue(Q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),E!==L&&(E=L,xr=!0,ua=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const kt=St.map.cameraPosition;kt!==void 0&&kt.setValue(Q,de.setFromMatrixPosition(L.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&St.setValue(Q,"isOrthographic",L.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||ee.isSkinnedMesh)&&St.setValue(Q,"viewMatrix",L.matrixWorldInverse)}if(ee.isSkinnedMesh){St.setOptional(Q,ee,"bindMatrix"),St.setOptional(Q,ee,"bindMatrixInverse");const kt=ee.skeleton;kt&&(Ce.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),St.setValue(Q,"boneTexture",kt.boneTexture,C),St.setValue(Q,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fa=K.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&Ce.isWebGL2===!0)&&re.update(ee,K,B,jn),(xr||Be.receiveShadow!==ee.receiveShadow)&&(Be.receiveShadow=ee.receiveShadow,St.setValue(Q,"receiveShadow",ee.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Zn.envMap.value=Ie,Zn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),xr&&(St.setValue(Q,"toneMappingExposure",m.toneMappingExposure),Be.needsLights&&Pf(Zn,ua),be&&B.fog===!0&&_e.refreshFogUniforms(Zn,be),_e.refreshMaterialUniforms(Zn,B,G,z,ie),As.upload(Q,Be.uniformsList,Zn,C)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(As.upload(Q,Be.uniformsList,Zn,C),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&St.setValue(Q,"center",ee.center),St.setValue(Q,"modelViewMatrix",ee.modelViewMatrix),St.setValue(Q,"normalMatrix",ee.normalMatrix),St.setValue(Q,"modelMatrix",ee.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const kt=B.uniformsGroups;for(let da=0,Rf=kt.length;da<Rf;da++)if(Ce.isWebGL2){const ul=kt[da];Te.update(ul,jn),Te.bind(ul,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function Pf(L,U){L.ambientLightColor.needsUpdate=U,L.lightProbe.needsUpdate=U,L.directionalLights.needsUpdate=U,L.directionalLightShadows.needsUpdate=U,L.pointLights.needsUpdate=U,L.pointLightShadows.needsUpdate=U,L.spotLights.needsUpdate=U,L.spotLightShadows.needsUpdate=U,L.rectAreaLights.needsUpdate=U,L.hemisphereLights.needsUpdate=U}function Df(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return n},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,U,K){y.get(L.texture).__webglTexture=U,y.get(L.depthTexture).__webglTexture=K;const B=y.get(L);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=K===void 0,B.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,U){const K=y.get(L);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(L,U=0,K=0){w=L,n=U,T=K;let B=!0,ee=null,be=!1,Le=!1;if(L){const Ie=y.get(L);Ie.__useDefaultFramebuffer!==void 0?(p.bindFramebuffer(36160,null),B=!1):Ie.__webglFramebuffer===void 0?C.setupRenderTarget(L):Ie.__hasExternalTextures&&C.rebindTextures(L,y.get(L.texture).__webglTexture,y.get(L.depthTexture).__webglTexture);const Ue=L.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Le=!0);const Oe=y.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ee=Oe[U],be=!0):Ce.isWebGL2&&L.samples>0&&C.useMultisampledRTT(L)===!1?ee=y.get(L).__webglMultisampledFramebuffer:ee=Oe,D.copy(L.viewport),R.copy(L.scissor),M=L.scissorTest}else D.copy(O).multiplyScalar(G).floor(),R.copy(X).multiplyScalar(G).floor(),M=J;if(p.bindFramebuffer(36160,ee)&&Ce.drawBuffers&&B&&p.drawBuffers(L,ee),p.viewport(D),p.scissor(R),p.setScissorTest(M),be){const Ie=y.get(L.texture);Q.framebufferTexture2D(36160,36064,34069+U,Ie.__webglTexture,K)}else if(Le){const Ie=y.get(L.texture),Ue=U||0;Q.framebufferTextureLayer(36160,36064,Ie.__webglTexture,K||0,Ue)}S=-1},this.readRenderTargetPixels=function(L,U,K,B,ee,be,Le){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=y.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le]),Re){p.bindFramebuffer(36160,Re);try{const Ie=L.texture,Ue=Ie.format,Oe=Ie.type;if(Ue!==cn&&me.convert(Ue)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Oe===Vr&&(ve.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Oe!==Mi&&me.convert(Oe)!==Q.getParameter(35738)&&!(Oe===fi&&(Ce.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=L.width-B&&K>=0&&K<=L.height-ee&&Q.readPixels(U,K,B,ee,me.convert(Ue),me.convert(Oe),be)}finally{const Ie=w!==null?y.get(w).__webglFramebuffer:null;p.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(L,U,K=0){const B=Math.pow(2,-K),ee=Math.floor(U.image.width*B),be=Math.floor(U.image.height*B);C.setTexture2D(U,0),Q.copyTexSubImage2D(3553,K,0,0,L.x,L.y,ee,be),p.unbindTexture()},this.copyTextureToTexture=function(L,U,K,B=0){const ee=U.image.width,be=U.image.height,Le=me.convert(K.format),Re=me.convert(K.type);C.setTexture2D(K,0),Q.pixelStorei(37440,K.flipY),Q.pixelStorei(37441,K.premultiplyAlpha),Q.pixelStorei(3317,K.unpackAlignment),U.isDataTexture?Q.texSubImage2D(3553,B,L.x,L.y,ee,be,Le,Re,U.image.data):U.isCompressedTexture?Q.compressedTexSubImage2D(3553,B,L.x,L.y,U.mipmaps[0].width,U.mipmaps[0].height,Le,U.mipmaps[0].data):Q.texSubImage2D(3553,B,L.x,L.y,Le,Re,U.image),B===0&&K.generateMipmaps&&Q.generateMipmap(3553),p.unbindTexture()},this.copyTextureToTexture3D=function(L,U,K,B,ee=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=L.max.x-L.min.x+1,Le=L.max.y-L.min.y+1,Re=L.max.z-L.min.z+1,Ie=me.convert(B.format),Ue=me.convert(B.type);let Oe;if(B.isData3DTexture)C.setTexture3D(B,0),Oe=32879;else if(B.isDataArrayTexture)C.setTexture2DArray(B,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,B.flipY),Q.pixelStorei(37441,B.premultiplyAlpha),Q.pixelStorei(3317,B.unpackAlignment);const Ne=Q.getParameter(3314),nt=Q.getParameter(32878),Bt=Q.getParameter(3316),xn=Q.getParameter(3315),Yn=Q.getParameter(32877),it=K.isCompressedTexture?K.mipmaps[0]:K.image;Q.pixelStorei(3314,it.width),Q.pixelStorei(32878,it.height),Q.pixelStorei(3316,L.min.x),Q.pixelStorei(3315,L.min.y),Q.pixelStorei(32877,L.min.z),K.isDataTexture||K.isData3DTexture?Q.texSubImage3D(Oe,ee,U.x,U.y,U.z,be,Le,Re,Ie,Ue,it.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(Oe,ee,U.x,U.y,U.z,be,Le,Re,Ie,it.data)):Q.texSubImage3D(Oe,ee,U.x,U.y,U.z,be,Le,Re,Ie,Ue,it),Q.pixelStorei(3314,Ne),Q.pixelStorei(32878,nt),Q.pixelStorei(3316,Bt),Q.pixelStorei(3315,xn),Q.pixelStorei(32877,Yn),ee===0&&B.generateMipmaps&&Q.generateMipmap(Oe),p.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?C.setTextureCube(L,0):L.isData3DTexture?C.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?C.setTexture2DArray(L,0):C.setTexture2D(L,0),p.unbindTexture()},this.resetState=function(){n=0,T=0,w=null,p.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class hu extends du{}hu.prototype.isWebGL1Renderer=!0;class Uo extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class H_ extends ns{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const yc={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class W_{constructor(e,t,i){const r=this;let s=!1,l=0,o=0,f;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,l,o),s=!0},this.itemEnd=function(c){l++,r.onProgress!==void 0&&r.onProgress(c,l,o),l===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return f?f(c):c},this.setURLModifier=function(c){return f=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const _=u[d],x=u[d+1];if(_.global&&(_.lastIndex=0),_.test(c))return x}return null}}}const X_=new W_;class pu{constructor(e){this.manager=e!==void 0?e:X_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class q_ extends pu{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=yc.get(e);if(l!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l;const o=Wr("img");function f(){c(),yc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",f,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",f,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Y_ extends pu{constructor(e){super(e)}load(e,t,i,r){const s=new Dt,l=new q_(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class mu extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ha=new ot,Mc=new k,wc=new k;class j_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mc),wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wc),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sc=new ot,Cr=new k,Wa=new k;class Z_ extends j_{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cr),Wa.copy(i.position),Wa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wa),i.updateMatrixWorld(),r.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Sc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc)}}class $_ extends mu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Z_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class K_ extends mu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class J_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function Cn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function gu(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},lr={duration:.5,overwrite:!1,delay:0},Go,Mt,Qe,en=1e8,Xe=1/en,fo=Math.PI*2,Q_=fo/4,e0=0,_u=Math.sqrt,t0=Math.cos,n0=Math.sin,_t=function(e){return typeof e=="string"},et=function(e){return typeof e=="function"},Dn=function(e){return typeof e=="number"},Vo=function(e){return typeof e>"u"},_n=function(e){return typeof e=="object"},It=function(e){return e!==!1},Ho=function(){return typeof window<"u"},bs=function(e){return et(e)||_t(e)},vu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wt=Array.isArray,ho=/(?:-?\.?\d|\.)+/gi,xu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ji=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yu=/[+-]=-?[.\d]+/,Mu=/[^,'"\[\]\s]+/gi,i0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ke,Jt,po,Wo,jt={},zs={},wu,Su=function(e){return(zs=Ti(e,jt))&&Nt},Xo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xr=function(e,t){return!t&&console.warn(e)},bu=function(e,t){return e&&(jt[e]=t)&&zs&&(zs[e]=t)||jt},qr=function(){return 0},r0={suppressEvents:!0,isStart:!0,kill:!1},Ls={suppressEvents:!0,kill:!1},s0={suppressEvents:!0},qo={},Gn=[],mo={},Tu,Vt={},qa={},Tc=30,Ps=[],Yo="",jo=function(e){var t=e[0],i,r;if(_n(t)||et(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ps.length;r--&&!Ps[r].targetTest(t););i=Ps[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Zu(e[r],i)))||e.splice(r,1);return e},gi=function(e){return e._gsap||jo(tn(e))[0]._gsap},Eu=function(e,t,i){return(i=e[t])&&et(i)?e[t]():Vo(i)&&e.getAttribute&&e.getAttribute(t)||i},zt=function(e,t){return(e=e.split(",")).forEach(t)||e},tt=function(e){return Math.round(e*1e5)/1e5||0},gt=function(e){return Math.round(e*1e7)/1e7||0},Ji=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},a0=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Fs=function(){var e=Gn.length,t=Gn.slice(0),i,r;for(mo={},Gn.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Cu=function(e,t,i,r){Gn.length&&!Mt&&Fs(),e.render(t,i,r||Mt&&t<0&&(e._initted||e._startAt)),Gn.length&&!Mt&&Fs()},Au=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Mu).length<2?t:_t(e)?e.trim():e},Lu=function(e){return e},rn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},o0=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ti=function(e,t){for(var i in t)e[i]=t[i];return e},Ec=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=_n(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},Os=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Nr=function(e){var t=e.parent||Ke,i=e.keyframes?o0(wt(e.keyframes)):rn;if(It(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},l0=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Pu=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var l=e[r],o;if(s)for(o=t[s];l&&l[s]>o;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=l,t.parent=t._dp=e,t},ea=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,l=t._next;s?s._next=l:e[i]===t&&(e[i]=l),l?l._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Hn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_i=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},c0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},go=function(e,t,i,r){return e._startAt&&(Mt?e._startAt.revert(Ls):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},u0=function a(e){return!e||e._ts&&a(e.parent)},Cc=function(e){return e._repeat?cr(e._tTime,e=e.duration()+e._rDelay)*e:0},cr=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Ns=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ta=function(e){return e._end=gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Xe)||0))},na=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=gt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ta(e),i._dirty||_i(i,e)),e},Du=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ns(e.rawTime(),t),(!t._dur||is(0,t.totalDuration(),i)-t._tTime>Xe)&&t.render(i,!0)),_i(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Xe}},dn=function(e,t,i,r){return t.parent&&Hn(t),t._start=gt((Dn(i)?i:i||e!==Ke?Kt(e,i,t):e._time)+t._delay),t._end=gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pu(e,t,"_first","_last",e._sort?"_start":0),_o(t)||(e._recent=t),r||Du(e,t),e._ts<0&&na(e,e._tTime),e},Ru=function(e,t){return(jt.ScrollTrigger||Xo("scrollTrigger",t))&&jt.ScrollTrigger.create(t,e)},Iu=function(e,t,i,r,s){if($o(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Mt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Tu!==Ht.frame)return Gn.push(e),e._lazy=[s,r],1},f0=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},_o=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},d0=function(e,t,i,r){var s=e.ratio,l=t<0||!t&&(!e._start&&f0(e)&&!(!e._initted&&_o(e))||(e._ts<0||e._dp._ts<0)&&!_o(e))?0:1,o=e._rDelay,f=0,u,c,d;if(o&&e._repeat&&(f=is(0,e._tDur,t),c=cr(f,o),e._yoyo&&c&1&&(l=1-l),c!==cr(e._tTime,o)&&(s=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==s||Mt||r||e._zTime===Xe||!t&&e._zTime){if(!e._initted&&Iu(e,t,r,i,f))return;for(d=e._zTime,e._zTime=t||(i?Xe:0),i||(i=t&&!d),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=f,u=e._pt;u;)u.r(l,u.d),u=u._next;t<0&&go(e,t,i,!0),e._onUpdate&&!i&&qt(e,"onUpdate"),f&&e._repeat&&!i&&e.parent&&qt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&Hn(e,1),!i&&!Mt&&(qt(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},h0=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ur=function(e,t,i,r){var s=e._repeat,l=gt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=l/e._dur),e._dur=l,e._tDur=s?s<0?1e10:gt(l*(s+1)+e._rDelay*s):l,o>0&&!r&&na(e,e._tTime=e._tDur*o),e.parent&&ta(e),i||_i(e.parent,e),e},Ac=function(e){return e instanceof At?_i(e):ur(e,e._dur)},p0={_start:0,endTime:qr,totalDuration:qr},Kt=function a(e,t,i){var r=e.labels,s=e._recent||p0,l=e.duration()>=en?s.endTime(!1):e._dur,o,f,u;return _t(t)&&(isNaN(t)||t in r)?(f=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),f==="<"||f===">"?(o>=0&&(t=t.replace(/=/,"")),(f==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=l),r[t]):(f=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&i&&(f=f/100*(wt(i)?i[0]:i).totalDuration()),o>1?a(e,t.substr(0,o-1),i)+f:l+f)):t==null?l:+t},Br=function(e,t,i){var r=Dn(t[1]),s=(r?2:1)+(e<2?0:1),l=t[s],o,f;if(r&&(l.duration=t[1]),l.parent=i,e){for(o=l,f=i;f&&!("immediateRender"in o);)o=f.vars.defaults||{},f=It(f.vars.inherit)&&f.parent;l.immediateRender=It(o.immediateRender),e<2?l.runBackwards=1:l.startAt=t[s-1]}return new st(t[0],l,t[s+1])},Xn=function(e,t){return e||e===0?t(e):t},is=function(e,t,i){return i<e?e:i>t?t:i},yt=function(e,t){return!_t(e)||!(t=i0.exec(e))?"":t[1]},m0=function(e,t,i){return Xn(i,function(r){return is(e,t,r)})},vo=[].slice,zu=function(e,t){return e&&_n(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_n(e[0]))&&!e.nodeType&&e!==Jt},g0=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return _t(r)&&!t||zu(r,1)?(s=i).push.apply(s,tn(r)):i.push(r)})||i},tn=function(e,t,i){return Qe&&!t&&Qe.selector?Qe.selector(e):_t(e)&&!i&&(po||!fr())?vo.call((t||Wo).querySelectorAll(e),0):wt(e)?g0(e,i):zu(e)?vo.call(e,0):e?[e]:[]},xo=function(e){return e=tn(e)[0]||Xr("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return tn(t,i.querySelectorAll?i:i===e?Xr("Invalid scope")||Wo.createElement("div"):e)}},Fu=function(e){return e.sort(function(){return .5-Math.random()})},Ou=function(e){if(et(e))return e;var t=_n(e)?e:{each:e},i=vi(t.ease),r=t.from||0,s=parseFloat(t.base)||0,l={},o=r>0&&r<1,f=isNaN(r)||o,u=t.axis,c=r,d=r;return _t(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!o&&f&&(c=r[0],d=r[1]),function(h,_,x){var m=(x||t).length,v=l[m],n,T,w,S,E,D,R,M,A;if(!v){if(A=t.grid==="auto"?0:(t.grid||[1,en])[1],!A){for(R=-en;R<(R=x[A++].getBoundingClientRect().left)&&A<m;);A<m&&A--}for(v=l[m]=[],n=f?Math.min(A,m)*c-.5:r%A,T=A===en?0:f?m*d/A-.5:r/A|0,R=0,M=en,D=0;D<m;D++)w=D%A-n,S=T-(D/A|0),v[D]=E=u?Math.abs(u==="y"?S:w):_u(w*w+S*S),E>R&&(R=E),E<M&&(M=E);r==="random"&&Fu(v),v.max=R-M,v.min=M,v.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(A>m?m-1:u?u==="y"?m/A:A:Math.max(A,m/A))||0)*(r==="edges"?-1:1),v.b=m<0?s-m:s,v.u=yt(t.amount||t.each)||0,i=i&&m<0?qu(i):i}return m=(v[h]-v.min)/v.max||0,gt(v.b+(i?i(m):m)*v.v)+v.u}},yo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=gt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Dn(i)?0:yt(i))}},Nu=function(e,t){var i=wt(e),r,s;return!i&&_n(e)&&(r=i=e.radius||en,e.values?(e=tn(e.values),(s=!Dn(e[0]))&&(r*=r)):e=yo(e.increment)),Xn(t,i?et(e)?function(l){return s=e(l),Math.abs(s-l)<=r?s:l}:function(l){for(var o=parseFloat(s?l.x:l),f=parseFloat(s?l.y:0),u=en,c=0,d=e.length,h,_;d--;)s?(h=e[d].x-o,_=e[d].y-f,h=h*h+_*_):h=Math.abs(e[d]-o),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:l,s||c===l||Dn(l)?c:c+yt(l)}:yo(e))},Bu=function(e,t,i,r){return Xn(wt(e)?!t:i===!0?!!(i=0):!r,function(){return wt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},_0=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,l){return l(s)},r)}},v0=function(e,t){return function(i){return e(parseFloat(i))+(t||yt(i))}},x0=function(e,t,i){return Uu(e,t,0,1,i)},ku=function(e,t,i){return Xn(i,function(r){return e[~~t(r)]})},y0=function a(e,t,i){var r=t-e;return wt(e)?ku(e,a(0,e.length),t):Xn(i,function(s){return(r+(s-e)%r)%r+e})},M0=function a(e,t,i){var r=t-e,s=r*2;return wt(e)?ku(e,a(0,e.length-1),t):Xn(i,function(l){return l=(s+(l-e)%s)%s||0,e+(l>r?s-l:l)})},Yr=function(e){for(var t=0,i="",r,s,l,o;~(r=e.indexOf("random(",t));)l=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,l-r-7).match(o?Mu:ho),i+=e.substr(t,r-t)+Bu(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=l+1;return i+e.substr(t,e.length-t)},Uu=function(e,t,i,r,s){var l=t-e,o=r-i;return Xn(s,function(f){return i+((f-e)/l*o||0)})},w0=function a(e,t,i,r){var s=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!s){var l=_t(e),o={},f,u,c,d,h;if(i===!0&&(r=1)&&(i=null),l)e={p:e},t={p:t};else if(wt(e)&&!wt(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(a(e[u-1],e[u]));d--,s=function(x){x*=d;var m=Math.min(h,~~x);return c[m](x-m)},i=t}else r||(e=Ti(wt(e)?[]:{},e));if(!c){for(f in t)Zo.call(o,e,f,"get",t[f]);s=function(x){return Qo(x,o)||(l?e.p:e)}}}return Xn(i,s)},Lc=function(e,t,i){var r=e.labels,s=en,l,o,f;for(l in r)o=r[l]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(f=l,s=o);return f},qt=function(e,t,i){var r=e.vars,s=r[t],l=Qe,o=e._ctx,f,u,c;if(s)return f=r[t+"Params"],u=r.callbackScope||e,i&&Gn.length&&Fs(),o&&(Qe=o),c=f?s.apply(u,f):s.call(u),Qe=l,c},Rr=function(e){return Hn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mt),e.progress()<1&&qt(e,"onInterrupt"),e},Zi,Gu=[],Vu=function(e){if(Ho()&&e){e=!e.name&&e.default||e;var t=e.name,i=et(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:qr,render:Qo,add:Zo,kill:B0,modifier:N0,rawVars:0},l={targetTest:0,get:0,getSetter:Jo,aliases:{},register:0};if(fr(),e!==r){if(Vt[t])return;rn(r,rn(Os(e,s),l)),Ti(r.prototype,Ti(s,Os(e,l))),Vt[r.prop=t]=r,e.targetTest&&(Ps.push(r),qo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bu(t,r),e.register&&e.register(Nt,r,Ft)}else e&&Gu.push(e)},We=255,Ir={aqua:[0,We,We],lime:[0,We,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,We],navy:[0,0,128],white:[We,We,We],olive:[128,128,0],yellow:[We,We,0],orange:[We,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[We,0,0],pink:[We,192,203],cyan:[0,We,We],transparent:[We,We,We,0]},Ya=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*We+.5|0},Hu=function(e,t,i){var r=e?Dn(e)?[e>>16,e>>8&We,e&We]:0:Ir.black,s,l,o,f,u,c,d,h,_,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ir[e])r=Ir[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),l=e.charAt(2),o=e.charAt(3),e="#"+s+s+l+l+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&We,r&We,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&We,e&We]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(ho),!t)f=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,l=c<=.5?c*(u+1):c+u-c*u,s=c*2-l,r.length>3&&(r[3]*=1),r[0]=Ya(f+1/3,s,l),r[1]=Ya(f,s,l),r[2]=Ya(f-1/3,s,l);else if(~e.indexOf("="))return r=e.match(xu),i&&r.length<4&&(r[3]=1),r}else r=e.match(ho)||Ir.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/We,l=r[1]/We,o=r[2]/We,d=Math.max(s,l,o),h=Math.min(s,l,o),c=(d+h)/2,d===h?f=u=0:(_=d-h,u=c>.5?_/(2-d-h):_/(d+h),f=d===s?(l-o)/_+(l<o?6:0):d===l?(o-s)/_+2:(s-l)/_+4,f*=60),r[0]=~~(f+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Wu=function(e){var t=[],i=[],r=-1;return e.split(Vn).forEach(function(s){var l=s.match(ji)||[];t.push.apply(t,l),i.push(r+=l.length+1)}),t.c=i,t},Pc=function(e,t,i){var r="",s=(e+r).match(Vn),l=t?"hsla(":"rgba(",o=0,f,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=Hu(h,t,1))&&l+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=Wu(e),f=i.c,f.join(r)!==c.c.join(r)))for(u=e.replace(Vn,"1").split(ji),d=u.length-1;o<d;o++)r+=u[o]+(~f.indexOf(o)?s.shift()||l+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Vn),d=u.length-1;o<d;o++)r+=u[o]+s[o];return r+u[d]},Vn=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ir)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),S0=/hsl[a]?\(/,Xu=function(e){var t=e.join(" "),i;if(Vn.lastIndex=0,Vn.test(t))return i=S0.test(t),e[1]=Pc(e[1],i),e[0]=Pc(e[0],i,Wu(e[1])),!0},jr,Ht=function(){var a=Date.now,e=500,t=33,i=a(),r=i,s=1e3/240,l=s,o=[],f,u,c,d,h,_,x=function m(v){var n=a()-r,T=v===!0,w,S,E,D;if(n>e&&(i+=n-t),r+=n,E=r-i,w=E-l,(w>0||T)&&(D=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,l+=w+(w>=s?4:s-w),S=1),T||(f=u(m)),S)for(_=0;_<o.length;_++)o[_](E,h,D,v)};return d={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(v){return h/(1e3/(v||60))},wake:function(){wu&&(!po&&Ho()&&(Jt=po=window,Wo=Jt.document||{},jt.gsap=Nt,(Jt.gsapVersions||(Jt.gsapVersions=[])).push(Nt.version),Su(zs||Jt.GreenSockGlobals||!Jt.gsap&&Jt||{}),c=Jt.requestAnimationFrame,Gu.forEach(Vu)),f&&d.sleep(),u=c||function(v){return setTimeout(v,l-d.time*1e3+1|0)},jr=1,x(2))},sleep:function(){(c?Jt.cancelAnimationFrame:clearTimeout)(f),jr=0,u=qr},lagSmoothing:function(v,n){e=v||1/0,t=Math.min(n||33,e)},fps:function(v){s=1e3/(v||240),l=d.time*1e3+s},add:function(v,n,T){var w=n?function(S,E,D,R){v(S,E,D,R),d.remove(w)}:v;return d.remove(v),o[T?"unshift":"push"](w),fr(),w},remove:function(v,n){~(n=o.indexOf(v))&&o.splice(n,1)&&_>=n&&_--},_listeners:o},d}(),fr=function(){return!jr&&Ht.wake()},Fe={},b0=/^[\d.\-M][\d.\-,\s]/,T0=/["']/g,E0=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,l=i.length,o,f,u;s<l;s++)f=i[s],o=s!==l-1?f.lastIndexOf(","):f.length,u=f.substr(0,o),t[r]=isNaN(u)?u.replace(T0,"").trim():+u,r=f.substr(o+1).trim();return t},C0=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},A0=function(e){var t=(e+"").split("("),i=Fe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[E0(t[1])]:C0(e).split(",").map(Au)):Fe._CE&&b0.test(e)?Fe._CE("",e):i},qu=function(e){return function(t){return 1-e(1-t)}},Yu=function a(e,t){for(var i=e._first,r;i;)i instanceof At?a(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?a(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},vi=function(e,t){return e&&(et(e)?e:Fe[e]||A0(e))||t},Ai=function(e,t,i,r){i===void 0&&(i=function(f){return 1-t(1-f)}),r===void 0&&(r=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},l;return zt(e,function(o){Fe[o]=jt[o]=s,Fe[l=o.toLowerCase()]=i;for(var f in s)Fe[l+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=Fe[o+"."+f]=s[f]}),s},ju=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ja=function a(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),l=s/fo*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*n0((c-l)*s)+1},f=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:ju(o);return s=fo/s,f.config=function(u,c){return a(e,u,c)},f},Za=function a(e,t){t===void 0&&(t=1.70158);var i=function(l){return l?--l*l*((t+1)*l+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:ju(i);return r.config=function(s){return a(e,s)},r};zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Ai(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Fe.Linear.easeNone=Fe.none=Fe.Linear.easeIn;Ai("Elastic",ja("in"),ja("out"),ja());(function(a,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?a*o*o:o<i?a*Math.pow(o-1.5/e,2)+.75:o<r?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Ai("Bounce",function(l){return 1-s(1-l)},s)})(7.5625,2.75);Ai("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Ai("Circ",function(a){return-(_u(1-a*a)-1)});Ai("Sine",function(a){return a===1?1:-t0(a*Q_)+1});Ai("Back",Za("in"),Za("out"),Za());Fe.SteppedEase=Fe.steps=jt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,l=1-Xe;return function(o){return((r*is(0,l,o)|0)+s)*i}}};lr.ease=Fe["quad.out"];zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Yo+=a+","+a+"Params,"});var Zu=function(e,t){this.id=e0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Eu,this.set=t?t.getSetter:Jo},Zr=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ur(this,+t.duration,1,1),this.data=t.data,Qe&&(this._ctx=Qe,Qe.data.push(this)),jr||Ht.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ur(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(fr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(na(this,i),!s._dp||s.parent||Du(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&dn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Xe||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Cu(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Cc(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Cc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?cr(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Xe?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ns(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Xe?0:this._rts,this.totalTime(is(-Math.abs(this._delay),this._tDur,s),r!==!1),ta(this),c0(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xe&&(this._tTime-=Xe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&dn(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(It(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ns(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=s0);var r=Mt;return Mt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Mt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ac(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Ac(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Kt(this,i),It(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,It(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Xe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xe,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Xe)},e.eventCallback=function(i,r,s){var l=this.vars;return arguments.length>1?(r?(l[i]=r,s&&(l[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete l[i],this):l[i]},e.then=function(i){var r=this;return new Promise(function(s){var l=et(i)?i:Lu,o=function(){var u=r.then;r.then=null,et(l)&&(l=l(r))&&(l.then||l===r)&&(r.then=u),s(l),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Rr(this)},a}();rn(Zr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xe,_prom:0,_ps:!1,_rts:1});var At=function(a){gu(e,a);function e(i,r){var s;return i===void 0&&(i={}),s=a.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=It(i.sortChildren),Ke&&dn(i.parent||Ke,Cn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Ru(Cn(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,l){return Br(0,arguments,this),this},t.from=function(r,s,l){return Br(1,arguments,this),this},t.fromTo=function(r,s,l,o){return Br(2,arguments,this),this},t.set=function(r,s,l){return s.duration=0,s.parent=this,Nr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new st(r,s,Kt(this,l),1),this},t.call=function(r,s,l){return dn(this,st.delayedCall(0,r,s),l)},t.staggerTo=function(r,s,l,o,f,u,c){return l.duration=s,l.stagger=l.stagger||o,l.onComplete=u,l.onCompleteParams=c,l.parent=this,new st(r,l,Kt(this,f)),this},t.staggerFrom=function(r,s,l,o,f,u,c){return l.runBackwards=1,Nr(l).immediateRender=It(l.immediateRender),this.staggerTo(r,s,l,o,f,u,c)},t.staggerFromTo=function(r,s,l,o,f,u,c,d){return o.startAt=l,Nr(o).immediateRender=It(o.immediateRender),this.staggerTo(r,s,o,f,u,c,d)},t.render=function(r,s,l){var o=this._time,f=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:gt(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,_,x,m,v,n,T,w,S,E,D,R;if(this!==Ke&&c>f&&r>=0&&(c=f),c!==this._tTime||l||d){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),h=c,S=this._start,w=this._ts,n=!w,d&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(D=this._yoyo,v=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(v*100+r,s,l);if(h=gt(c%v),c===f?(m=this._repeat,h=u):(m=~~(c/v),m&&m===c/v&&(h=u,m--),h>u&&(h=u)),E=cr(this._tTime,v),!o&&this._tTime&&E!==m&&this._tTime-E*v-this._dur<=0&&(E=m),D&&m&1&&(h=u-h,R=1),m!==E&&!this._lock){var M=D&&E&1,A=M===(D&&m&1);if(m<E&&(M=!M),o=M?0:c%u?u:c,this._lock=1,this.render(o||(R?0:gt(m*v)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&qt(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),o&&o!==this._time||n!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,f=this._tDur,A&&(this._lock=2,o=M?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!n)return this;Yu(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=h0(this,gt(o),gt(h)),T&&(c-=h-(h=T._start))),this._tTime=c,this._time=h,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!s&&!m&&(qt(this,"onStart"),this._tTime!==c))return this;if(h>=o&&r>=0)for(_=this._first;_;){if(x=_._next,(_._act||h>=_._start)&&_._ts&&T!==_){if(_.parent!==this)return this.render(r,s,l);if(_.render(_._ts>0?(h-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(h-_._start)*_._ts,s,l),h!==this._time||!this._ts&&!n){T=0,x&&(c+=this._zTime=-Xe);break}}_=x}else{_=this._last;for(var z=r<0?r:h;_;){if(x=_._prev,(_._act||z<=_._end)&&_._ts&&T!==_){if(_.parent!==this)return this.render(r,s,l);if(_.render(_._ts>0?(z-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(z-_._start)*_._ts,s,l||Mt&&(_._initted||_._startAt)),h!==this._time||!this._ts&&!n){T=0,x&&(c+=this._zTime=z?-Xe:Xe);break}}_=x}}if(T&&!s&&(this.pause(),T.render(h>=o?0:-Xe)._zTime=h>=o?1:-1,this._ts))return this._start=S,ta(this),this.render(r,s,l);this._onUpdate&&!s&&qt(this,"onUpdate",!0),(c===f&&this._tTime>=this.totalDuration()||!c&&o)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===f&&this._ts>0||!c&&this._ts<0)&&Hn(this,1),!s&&!(r<0&&!o)&&(c||o||!f)&&(qt(this,c===f&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var l=this;if(Dn(s)||(s=Kt(this,s,r)),!(r instanceof Zr)){if(wt(r))return r.forEach(function(o){return l.add(o,s)}),this;if(_t(r))return this.addLabel(r,s);if(et(r))r=st.delayedCall(0,r);else return this}return this!==r?dn(this,r,s):this},t.getChildren=function(r,s,l,o){r===void 0&&(r=!0),s===void 0&&(s=!0),l===void 0&&(l=!0),o===void 0&&(o=-en);for(var f=[],u=this._first;u;)u._start>=o&&(u instanceof st?s&&f.push(u):(l&&f.push(u),r&&f.push.apply(f,u.getChildren(!0,s,l)))),u=u._next;return f},t.getById=function(r){for(var s=this.getChildren(1,1,1),l=s.length;l--;)if(s[l].vars.id===r)return s[l]},t.remove=function(r){return _t(r)?this.removeLabel(r):et(r)?this.killTweensOf(r):(ea(this,r),r===this._recent&&(this._recent=this._last),_i(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gt(Ht.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),a.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Kt(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,l){var o=st.delayedCall(0,s||qr,l);return o.data="isPause",this._hasPause=1,dn(this,o,Kt(this,r))},t.removePause=function(r){var s=this._first;for(r=Kt(this,r);s;)s._start===r&&s.data==="isPause"&&Hn(s),s=s._next},t.killTweensOf=function(r,s,l){for(var o=this.getTweensOf(r,l),f=o.length;f--;)Nn!==o[f]&&o[f].kill(r,s);return this},t.getTweensOf=function(r,s){for(var l=[],o=tn(r),f=this._first,u=Dn(s),c;f;)f instanceof st?a0(f._targets,o)&&(u?(!Nn||f._initted&&f._ts)&&f.globalTime(0)<=s&&f.globalTime(f.totalDuration())>s:!s||f.isActive())&&l.push(f):(c=f.getTweensOf(o,s)).length&&l.push.apply(l,c),f=f._next;return l},t.tweenTo=function(r,s){s=s||{};var l=this,o=Kt(l,r),f=s,u=f.startAt,c=f.onStart,d=f.onStartParams,h=f.immediateRender,_,x=st.to(l,rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:l._time))/l.timeScale())||Xe,onStart:function(){if(l.pause(),!_){var v=s.duration||Math.abs((o-(u&&"time"in u?u.time:l._time))/l.timeScale());x._dur!==v&&ur(x,v,0,1).render(x._time,!0,!0),_=1}c&&c.apply(x,d||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(r,s,l){return this.tweenTo(s,rn({startAt:{time:Kt(this,r)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Lc(this,Kt(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Lc(this,Kt(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Xe)},t.shiftChildren=function(r,s,l){l===void 0&&(l=0);for(var o=this._first,f=this.labels,u;o;)o._start>=l&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in f)f[u]>=l&&(f[u]+=r);return _i(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return a.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,l;s;)l=s._next,this.remove(s),s=l;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),_i(this)},t.totalDuration=function(r){var s=0,l=this,o=l._last,f=en,u,c,d;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-r:r));if(l._dirty){for(d=l.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>f&&l._sort&&o._ts&&!l._lock?(l._lock=1,dn(l,o,c-o._delay,1)._lock=0):f=c,c<0&&o._ts&&(s-=c,(!d&&!l._dp||d&&d.smoothChildTiming)&&(l._start+=c/l._ts,l._time-=c,l._tTime-=c),l.shiftChildren(-c,!1,-1/0),f=0),o._end>s&&o._ts&&(s=o._end),o=u;ur(l,l===Ke&&l._time>s?l._time:s,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(r){if(Ke._ts&&(Cu(Ke,Ns(r,Ke)),Tu=Ht.frame),Ht.frame>=Tc){Tc+=Yt.autoSleep||120;var s=Ke._first;if((!s||!s._ts)&&Yt.autoSleep&&Ht._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ht.sleep()}}},e}(Zr);rn(At.prototype,{_lock:0,_hasPause:0,_forcing:0});var L0=function(e,t,i,r,s,l,o){var f=new Ft(this._pt,e,t,0,1,tf,null,s),u=0,c=0,d,h,_,x,m,v,n,T;for(f.b=i,f.e=r,i+="",r+="",(n=~r.indexOf("random("))&&(r=Yr(r)),l&&(T=[i,r],l(T,e,t),i=T[0],r=T[1]),h=i.match(Xa)||[];d=Xa.exec(r);)x=d[0],m=r.substring(u,d.index),_?_=(_+1)%5:m.substr(-5)==="rgba("&&(_=1),x!==h[c++]&&(v=parseFloat(h[c-1])||0,f._pt={_next:f._pt,p:m||c===1?m:",",s:v,c:x.charAt(1)==="="?Ji(v,x)-v:parseFloat(x)-v,m:_&&_<4?Math.round:0},u=Xa.lastIndex);return f.c=u<r.length?r.substring(u,r.length):"",f.fp=o,(yu.test(r)||n)&&(f.e=0),this._pt=f,f},Zo=function(e,t,i,r,s,l,o,f,u,c){et(r)&&(r=r(s||0,e,l));var d=e[t],h=i!=="get"?i:et(d)?u?e[t.indexOf("set")||!et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,_=et(d)?u?z0:Qu:Ko,x;if(_t(r)&&(~r.indexOf("random(")&&(r=Yr(r)),r.charAt(1)==="="&&(x=Ji(h,r)+(yt(h)||0),(x||x===0)&&(r=x))),!c||h!==r||Mo)return!isNaN(h*r)&&r!==""?(x=new Ft(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?O0:ef,0,_),u&&(x.fp=u),o&&x.modifier(o,this,e),this._pt=x):(!d&&!(t in e)&&Xo(t,r),L0.call(this,e,t,h,r,_,f||Yt.stringFilter,u))},P0=function(e,t,i,r,s){if(et(e)&&(e=kr(e,s,t,i,r)),!_n(e)||e.style&&e.nodeType||wt(e)||vu(e))return _t(e)?kr(e,s,t,i,r):e;var l={},o;for(o in e)l[o]=kr(e[o],s,t,i,r);return l},$u=function(e,t,i,r,s,l){var o,f,u,c;if(Vt[e]&&(o=new Vt[e]).init(s,o.rawVars?t[e]:P0(t[e],r,s,l,i),i,r,l)!==!1&&(i._pt=f=new Ft(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Zi))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=f;return o},Nn,Mo,$o=function a(e,t,i){var r=e.vars,s=r.ease,l=r.startAt,o=r.immediateRender,f=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,_=r.autoRevert,x=e._dur,m=e._startAt,v=e._targets,n=e.parent,T=n&&n.data==="nested"?n.vars.targets:v,w=e._overwrite==="auto"&&!Go,S=e.timeline,E,D,R,M,A,z,G,Z,N,O,X,J,ne;if(S&&(!h||!s)&&(s="none"),e._ease=vi(s,lr.ease),e._yEase=d?qu(vi(d===!0?s:d,lr.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(Z=v[0]?gi(v[0]).harness:0,J=Z&&r[Z.prop],E=Os(r,qo),m&&(m._zTime<0&&m.progress(1),t<0&&c&&o&&!_?m.render(-1,!0):m.revert(c&&x?Ls:r0),m._lazy=0),l){if(Hn(e._startAt=st.set(v,rn({data:"isStart",overwrite:!1,parent:n,immediateRender:!0,lazy:!m&&It(f),startAt:null,delay:0,onUpdate:u&&function(){return qt(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mt||!o&&!_)&&e._startAt.revert(Ls),o&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&x&&!m){if(t&&(o=!1),R=rn({overwrite:!1,data:"isFromStart",lazy:o&&!m&&It(f),immediateRender:o,stagger:0,parent:n},E),J&&(R[Z.prop]=J),Hn(e._startAt=st.set(v,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mt?e._startAt.revert(Ls):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,Xe,Xe);else if(!t)return}for(e._pt=e._ptCache=0,f=x&&It(f)||f&&!x,D=0;D<v.length;D++){if(A=v[D],G=A._gsap||jo(v)[D]._gsap,e._ptLookup[D]=O={},mo[G.id]&&Gn.length&&Fs(),X=T===v?D:T.indexOf(A),Z&&(N=new Z).init(A,J||E,e,X,T)!==!1&&(e._pt=M=new Ft(e._pt,A,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(Y){O[Y]=M}),N.priority&&(z=1)),!Z||J)for(R in E)Vt[R]&&(N=$u(R,E,e,X,A,T))?N.priority&&(z=1):O[R]=M=Zo.call(e,A,R,"get",E[R],X,T,0,r.stringFilter);e._op&&e._op[D]&&e.kill(A,e._op[D]),w&&e._pt&&(Nn=e,Ke.killTweensOf(A,O,e.globalTime(t)),ne=!e.parent,Nn=0),e._pt&&f&&(mo[G.id]=1)}z&&nf(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!ne,h&&t<=0&&S.render(en,!0,!0)},D0=function(e,t,i,r,s,l,o,f){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,_;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,_=e._targets.length;_--;){if(c=h[_][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Mo=1,e.vars[t]="+=0",$o(e,o),Mo=0,f?Xr(t+" not eligible for reset"):1;u.push(c)}for(_=u.length;_--;)d=u[_],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+l*c.c,c.c=i-c.s,d.e&&(d.e=tt(i)+yt(d.e)),d.b&&(d.b=c.s+yt(d.b))},R0=function(e,t){var i=e[0]?gi(e[0]).harness:0,r=i&&i.aliases,s,l,o,f;if(!r)return t;s=Ti({},t);for(l in r)if(l in s)for(f=r[l].split(","),o=f.length;o--;)s[f[o]]=s[l];return s},I0=function(e,t,i,r){var s=t.ease||r||"power1.inOut",l,o;if(wt(t))o=i[e]||(i[e]=[]),t.forEach(function(f,u){return o.push({t:u/(t.length-1)*100,v:f,e:s})});else for(l in t)o=i[l]||(i[l]=[]),l==="ease"||o.push({t:parseFloat(e),v:t[l],e:s})},kr=function(e,t,i,r,s){return et(e)?e.call(t,i,r,s):_t(e)&&~e.indexOf("random(")?Yr(e):e},Ku=Yo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ju={};zt(Ku+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Ju[a]=1});var st=function(a){gu(e,a);function e(i,r,s,l){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=a.call(this,l?r:Nr(r))||this;var f=o.vars,u=f.duration,c=f.delay,d=f.immediateRender,h=f.stagger,_=f.overwrite,x=f.keyframes,m=f.defaults,v=f.scrollTrigger,n=f.yoyoEase,T=r.parent||Ke,w=(wt(i)||vu(i)?Dn(i[0]):"length"in r)?[i]:tn(i),S,E,D,R,M,A,z,G;if(o._targets=w.length?jo(w):Xr("GSAP target "+i+" not found. https://gsap.com",!Yt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=_,x||h||bs(u)||bs(c)){if(r=o.vars,S=o.timeline=new At({data:"nested",defaults:m||{},targets:T&&T.data==="nested"?T.vars.targets:w}),S.kill(),S.parent=S._dp=Cn(o),S._start=0,h||bs(u)||bs(c)){if(R=w.length,z=h&&Ou(h),_n(h))for(M in h)~Ku.indexOf(M)&&(G||(G={}),G[M]=h[M]);for(E=0;E<R;E++)D=Os(r,Ju),D.stagger=0,n&&(D.yoyoEase=n),G&&Ti(D,G),A=w[E],D.duration=+kr(u,Cn(o),E,A,w),D.delay=(+kr(c,Cn(o),E,A,w)||0)-o._delay,!h&&R===1&&D.delay&&(o._delay=c=D.delay,o._start+=c,D.delay=0),S.to(A,D,z?z(E,A,w):0),S._ease=Fe.none;S.duration()?u=c=0:o.timeline=0}else if(x){Nr(rn(S.vars.defaults,{ease:"none"})),S._ease=vi(x.ease||r.ease||"none");var Z=0,N,O,X;if(wt(x))x.forEach(function(J){return S.to(w,J,">")}),S.duration();else{D={};for(M in x)M==="ease"||M==="easeEach"||I0(M,x[M],D,x.easeEach);for(M in D)for(N=D[M].sort(function(J,ne){return J.t-ne.t}),Z=0,E=0;E<N.length;E++)O=N[E],X={ease:O.e,duration:(O.t-(E?N[E-1].t:0))/100*u},X[M]=O.v,S.to(w,X,Z),Z+=X.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||o.duration(u=S.duration())}else o.timeline=0;return _===!0&&!Go&&(Nn=Cn(o),Ke.killTweensOf(w),Nn=0),dn(T,Cn(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!u&&!x&&o._start===gt(T._time)&&It(d)&&u0(Cn(o))&&T.data!=="nested")&&(o._tTime=-Xe,o.render(Math.max(0,-c)||0)),v&&Ru(Cn(o),v),o}var t=e.prototype;return t.render=function(r,s,l){var o=this._time,f=this._tDur,u=this._dur,c=r<0,d=r>f-Xe&&!c?f:r<Xe?0:r,h,_,x,m,v,n,T,w,S;if(!u)d0(this,r,s,l);else if(d!==this._tTime||!r||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=d,w=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,l);if(h=gt(d%m),d===f?(x=this._repeat,h=u):(x=~~(d/m),x&&x===gt(d/m)&&(h=u,x--),h>u&&(h=u)),n=this._yoyo&&x&1,n&&(S=this._yEase,h=u-h),v=cr(this._tTime,m),h===o&&!l&&this._initted&&x===v)return this._tTime=d,this;x!==v&&(w&&this._yEase&&Yu(w,n),this.vars.repeatRefresh&&!n&&!this._lock&&this._time!==u&&this._initted&&(this._lock=l=1,this.render(gt(m*x),!0).invalidate()._lock=0))}if(!this._initted){if(Iu(this,c?r:h,l,s,d))return this._tTime=0,this;if(o!==this._time&&!(l&&this.vars.repeatRefresh&&x!==v))return this;if(u!==this._dur)return this.render(r,s,l)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(S||this._ease)(h/u),this._from&&(this.ratio=T=1-T),h&&!o&&!s&&!x&&(qt(this,"onStart"),this._tTime!==d))return this;for(_=this._pt;_;)_.r(T,_.d),_=_._next;w&&w.render(r<0?r:!h&&n?-Xe:w._dur*w._ease(h/this._dur),s,l)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&go(this,r,s,l),qt(this,"onUpdate")),this._repeat&&x!==v&&this.vars.onRepeat&&!s&&this.parent&&qt(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&go(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hn(this,1),!s&&!(c&&!o)&&(d||o||n)&&(qt(this,d===f?"onComplete":"onReverseComplete",!0),this._prom&&!(d<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),a.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,l,o,f){jr||Ht.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||$o(this,u),c=this._ease(u/this._dur),D0(this,r,s,l,o,c,u,f)?this.resetTo(r,s,l,o,1):(na(this,0),this.parent||Pu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Rr(this):this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Nn&&Nn.vars.overwrite!==!0)._first||Rr(this),this.parent&&l!==this.timeline.totalDuration()&&ur(this,this._dur*this.timeline._tDur/l,0,1),this}var o=this._targets,f=r?tn(r):o,u=this._ptLookup,c=this._pt,d,h,_,x,m,v,n;if((!s||s==="all")&&l0(o,f))return s==="all"&&(this._pt=0),Rr(this);for(d=this._op=this._op||[],s!=="all"&&(_t(s)&&(m={},zt(s,function(T){return m[T]=1}),s=m),s=R0(o,s)),n=o.length;n--;)if(~f.indexOf(o[n])){h=u[n],s==="all"?(d[n]=s,x=h,_={}):(_=d[n]=d[n]||{},x=s);for(m in x)v=h&&h[m],v&&((!("kill"in v.d)||v.d.kill(m)===!0)&&ea(this,v,"_pt"),delete h[m]),_!=="all"&&(_[m]=1)}return this._initted&&!this._pt&&c&&Rr(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Br(1,arguments)},e.delayedCall=function(r,s,l,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:o})},e.fromTo=function(r,s,l){return Br(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,l){return Ke.killTweensOf(r,s,l)},e}(Zr);rn(st.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zt("staggerTo,staggerFrom,staggerFromTo",function(a){st[a]=function(){var e=new At,t=vo.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Ko=function(e,t,i){return e[t]=i},Qu=function(e,t,i){return e[t](i)},z0=function(e,t,i,r){return e[t](r.fp,i)},F0=function(e,t,i){return e.setAttribute(t,i)},Jo=function(e,t){return et(e[t])?Qu:Vo(e[t])&&e.setAttribute?F0:Ko},ef=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},O0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},tf=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Qo=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},N0=function(e,t,i,r){for(var s=this._pt,l;s;)l=s._next,s.p===r&&s.modifier(e,t,i),s=l},B0=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ea(this,t,"_pt"):t.dep||(i=1),t=r;return!i},k0=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},nf=function(e){for(var t=e._pt,i,r,s,l;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:l)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:l=t,t=i}e._pt=s},Ft=function(){function a(t,i,r,s,l,o,f,u,c){this.t=i,this.s=s,this.c=l,this.p=r,this.r=o||ef,this.d=f||this,this.set=u||Ko,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=k0,this.m=i,this.mt=s,this.tween=r},a}();zt(Yo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return qo[a]=1});jt.TweenMax=jt.TweenLite=st;jt.TimelineLite=jt.TimelineMax=At;Ke=new At({sortChildren:!1,defaults:lr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yt.stringFilter=Xu;var xi=[],Ds={},U0=[],Dc=0,G0=0,$a=function(e){return(Ds[e]||U0).map(function(t){return t()})},wo=function(){var e=Date.now(),t=[];e-Dc>2&&($a("matchMediaInit"),xi.forEach(function(i){var r=i.queries,s=i.conditions,l,o,f,u;for(o in r)l=Jt.matchMedia(r[o]).matches,l&&(f=1),l!==s[o]&&(s[o]=l,u=1);u&&(i.revert(),f&&t.push(i))}),$a("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Dc=e,$a("matchMedia"))},rf=function(){function a(t,i){this.selector=i&&xo(i),this.data=[],this._r=[],this.isReverted=!1,this.id=G0++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,r,s){et(i)&&(s=r,r=i,i=et);var l=this,o=function(){var u=Qe,c=l.selector,d;return u&&u!==l&&u.data.push(l),s&&(l.selector=xo(s)),Qe=l,d=r.apply(l,arguments),et(d)&&l._r.push(d),Qe=u,l.selector=c,l.isReverted=!1,d};return l.last=o,i===et?o(l,function(f){return l.add(null,f)}):i?l[i]=o:o},e.ignore=function(i){var r=Qe;Qe=null,i(this),Qe=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof a?i.push.apply(i,r.getTweens()):r instanceof st&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),f=s.data.length,u;f--;)u=s.data[f],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),f=s.data.length;f--;)u=s.data[f],u instanceof At?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof st)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var l=xi.length;l--;)xi[l].id===this.id&&xi.splice(l,1)},e.revert=function(i){this.kill(i||{})},a}(),V0=function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(i,r,s){_n(i)||(i={matches:i});var l=new rf(0,s||this.scope),o=l.conditions={},f,u,c;Qe&&!l.selector&&(l.selector=Qe.selector),this.contexts.push(l),r=l.add("onMatch",r),l.queries=i;for(u in i)u==="all"?c=1:(f=Jt.matchMedia(i[u]),f&&(xi.indexOf(l)<0&&xi.push(l),(o[u]=f.matches)&&(c=1),f.addListener?f.addListener(wo):f.addEventListener("change",wo)));return c&&r(l,function(d){return l.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},a}(),Bs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Vu(r)})},timeline:function(e){return new At(e)},getTweensOf:function(e,t){return Ke.getTweensOf(e,t)},getProperty:function(e,t,i,r){_t(e)&&(e=tn(e)[0]);var s=gi(e||{}).get,l=i?Lu:Au;return i==="native"&&(i=""),e&&(t?l((Vt[t]&&Vt[t].get||s)(e,t,i,r)):function(o,f,u){return l((Vt[o]&&Vt[o].get||s)(e,o,f,u))})},quickSetter:function(e,t,i){if(e=tn(e),e.length>1){var r=e.map(function(c){return Nt.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var l=Vt[t],o=gi(e),f=o.harness&&(o.harness.aliases||{})[t]||t,u=l?function(c){var d=new l;Zi._pt=0,d.init(e,i?c+i:c,Zi,0,[e]),d.render(1,d),Zi._pt&&Qo(1,Zi)}:o.set(e,f);return l?u:function(c){return u(e,f,i?c+i:c,o,1)}},quickTo:function(e,t,i){var r,s=Nt.to(e,Ti((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),l=function(f,u,c){return s.resetTo(t,f,u,c)};return l.tween=s,l},isTweening:function(e){return Ke.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vi(e.ease,lr.ease)),Ec(lr,e||{})},config:function(e){return Ec(Yt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,l=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Vt[o]&&!jt[o]&&Xr(t+" effect requires "+o+" plugin.")}),qa[t]=function(o,f,u){return i(tn(o),rn(f||{},s),u)},l&&(At.prototype[t]=function(o,f,u){return this.add(qa[t](o,_n(f)?f:(u=f)&&{},this),u)})},registerEase:function(e,t){Fe[e]=vi(t)},parseEase:function(e,t){return arguments.length?vi(e,t):Fe},getById:function(e){return Ke.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new At(e),r,s;for(i.smoothChildTiming=It(e.smoothChildTiming),Ke.remove(i),i._dp=0,i._time=i._tTime=Ke._time,r=Ke._first;r;)s=r._next,(t||!(!r._dur&&r instanceof st&&r.vars.onComplete===r._targets[0]))&&dn(i,r,r._start-r._delay),r=s;return dn(Ke,i,0),i},context:function(e,t){return e?new rf(e,t):Qe},matchMedia:function(e){return new V0(e)},matchMediaRefresh:function(){return xi.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||wo()},addEventListener:function(e,t){var i=Ds[e]||(Ds[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ds[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:y0,wrapYoyo:M0,distribute:Ou,random:Bu,snap:Nu,normalize:x0,getUnit:yt,clamp:m0,splitColor:Hu,toArray:tn,selector:xo,mapRange:Uu,pipe:_0,unitize:v0,interpolate:w0,shuffle:Fu},install:Su,effects:qa,ticker:Ht,updateRoot:At.updateRoot,plugins:Vt,globalTimeline:Ke,core:{PropTween:Ft,globals:bu,Tween:st,Timeline:At,Animation:Zr,getCache:gi,_removeLinkedListItem:ea,reverting:function(){return Mt},context:function(e){return e&&Qe&&(Qe.data.push(e),e._ctx=Qe),Qe},suppressOverwrites:function(e){return Go=e}}};zt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Bs[a]=st[a]});Ht.add(At.updateRoot);Zi=Bs.to({},{duration:0});var H0=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},W0=function(e,t){var i=e._targets,r,s,l;for(r in t)for(s=i.length;s--;)l=e._ptLookup[s][r],l&&(l=l.d)&&(l._pt&&(l=H0(l,r)),l&&l.modifier&&l.modifier(t[r],e,i[s],r))},Ka=function(e,t){return{name:e,rawVars:1,init:function(r,s,l){l._onInit=function(o){var f,u;if(_t(s)&&(f={},zt(s,function(c){return f[c]=1}),s=f),t){f={};for(u in s)f[u]=t(s[u]);s=f}W0(o,s)}}}},Nt=Bs.registerPlugin({name:"attr",init:function(e,t,i,r,s){var l,o,f;this.tween=i;for(l in t)f=e.getAttribute(l)||"",o=this.add(e,"setAttribute",(f||0)+"",t[l],r,s,0,0,l),o.op=l,o.b=f,this._props.push(l)},render:function(e,t){for(var i=t._pt;i;)Mt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ka("roundProps",yo),Ka("modifiers"),Ka("snap",Nu))||Bs;st.version=At.version=Nt.version="3.12.4";wu=1;Ho()&&fr();Fe.Power0;Fe.Power1;Fe.Power2;Fe.Power3;Fe.Power4;Fe.Linear;Fe.Quad;Fe.Cubic;Fe.Quart;Fe.Quint;Fe.Strong;Fe.Elastic;Fe.Back;Fe.SteppedEase;Fe.Bounce;Fe.Sine;Fe.Expo;Fe.Circ;/*!
 * CSSPlugin 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rc,Bn,Qi,el,di,Ic,tl,X0=function(){return typeof window<"u"},Rn={},ri=180/Math.PI,er=Math.PI/180,Hi=Math.atan2,zc=1e8,nl=/([A-Z])/g,q0=/(left|right|width|margin|padding|x)/i,Y0=/[\s,\(]\S/,pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},So=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},j0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Z0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$0=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},sf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},af=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},K0=function(e,t,i){return e.style[t]=i},J0=function(e,t,i){return e.style.setProperty(t,i)},Q0=function(e,t,i){return e._gsap[t]=i},ev=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},tv=function(e,t,i,r,s){var l=e._gsap;l.scaleX=l.scaleY=i,l.renderTransform(s,l)},nv=function(e,t,i,r,s){var l=e._gsap;l[t]=i,l.renderTransform(s,l)},Je="transform",Ot=Je+"Origin",iv=function a(e,t){var i=this,r=this.target,s=r.style,l=r._gsap;if(e in Rn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=An(r,o)}):this.tfm[e]=l.x?l[e]:An(r,e),e===Ot&&(this.tfm.zOrigin=l.zOrigin);else return pn.transform.split(",").forEach(function(o){return a.call(i,o,t)});if(this.props.indexOf(Je)>=0)return;l.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ot,t,"")),e=Je}(s||t)&&this.props.push(e,t,s[e])},of=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rv=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,l;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(nl,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)r[l]=this.tfm[l];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=tl(),(!s||!s.isStart)&&!i[Je]&&(of(i),r.zOrigin&&i[Ot]&&(i[Ot]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},lf=function(e,t){var i={target:e,props:[],revert:rv,save:iv};return e._gsap||Nt.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},cf,bo=function(e,t){var i=Bn.createElementNS?Bn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bn.createElement(e);return i&&i.style?i:Bn.createElement(e)},gn=function a(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(nl,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&a(e,dr(t)||t,1)||""},Fc="O,Moz,ms,Ms,Webkit".split(","),dr=function(e,t,i){var r=t||di,s=r.style,l=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(Fc[l]+e in s););return l<0?null:(l===3?"ms":l>=0?Fc[l]:"")+e},To=function(){X0()&&window.document&&(Rc=window,Bn=Rc.document,Qi=Bn.documentElement,di=bo("div")||{style:{}},bo("div"),Je=dr(Je),Ot=Je+"Origin",di.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cf=!!dr("perspective"),tl=Nt.core.reverting,el=1)},Ja=function a(e){var t=bo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,l;if(Qi.appendChild(t),t.appendChild(this),this.style.display="block",e)try{l=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(l=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Qi.removeChild(t),this.style.cssText=s,l},Oc=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},uf=function(e){var t;try{t=e.getBBox()}catch{t=Ja.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ja||(t=Ja.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Oc(e,["x","cx","x1"])||0,y:+Oc(e,["y","cy","y1"])||0,width:0,height:0}:t},ff=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&uf(e))},Ei=function(e,t){if(t){var i=e.style,r;t in Rn&&t!==Ot&&(t=Je),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(nl,"-$1").toLowerCase())):i.removeAttribute(t)}},kn=function(e,t,i,r,s,l){var o=new Ft(e._pt,t,i,0,1,l?af:sf);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Nc={deg:1,rad:1,turn:1},sv={grid:1,flex:1},Wn=function a(e,t,i,r){var s=parseFloat(i)||0,l=(i+"").trim().substr((s+"").length)||"px",o=di.style,f=q0.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(f?"Width":"Height"),d=100,h=r==="px",_=r==="%",x,m,v,n;if(r===l||!s||Nc[r]||Nc[l])return s;if(l!=="px"&&!h&&(s=a(e,t,i,"px")),n=e.getCTM&&ff(e),(_||l==="%")&&(Rn[t]||~t.indexOf("adius")))return x=n?e.getBBox()[f?"width":"height"]:e[c],tt(_?s/x*d:s/100*x);if(o[f?"width":"height"]=d+(h?l:r),m=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,n&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Bn||!m.appendChild)&&(m=Bn.body),v=m._gsap,v&&_&&v.width&&f&&v.time===Ht.time&&!v.uncache)return tt(s/v.width*d);if(_&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=d+r,x=e[c],T?e.style[t]=T:Ei(e,t)}else(_||l==="%")&&!sv[gn(m,"display")]&&(o.position=gn(e,"position")),m===e&&(o.position="static"),m.appendChild(di),x=di[c],m.removeChild(di),o.position="absolute";return f&&_&&(v=gi(m),v.time=Ht.time,v.width=m[c]),tt(h?x*s/d:x&&s?d/x*s:0)},An=function(e,t,i,r){var s;return el||To(),t in pn&&t!=="transform"&&(t=pn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Rn[t]&&t!=="transform"?(s=Kr(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Us(gn(e,Ot))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ks[t]&&ks[t](e,t,i)||gn(e,t)||Eu(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Wn(e,t,s,i)+i:s},av=function(e,t,i,r){if(!i||i==="none"){var s=dr(t,e,1),l=s&&gn(e,s,1);l&&l!==i?(t=s,i=l):t==="borderColor"&&(i=gn(e,"borderTopColor"))}var o=new Ft(this._pt,e.style,t,0,1,tf),f=0,u=0,c,d,h,_,x,m,v,n,T,w,S,E;if(o.b=i,o.e=r,i+="",r+="",r==="auto"&&(m=e.style[t],e.style[t]=r,r=gn(e,t)||r,m?e.style[t]=m:Ei(e,t)),c=[i,r],Xu(c),i=c[0],r=c[1],h=i.match(ji)||[],E=r.match(ji)||[],E.length){for(;d=ji.exec(r);)v=d[0],T=r.substring(f,d.index),x?x=(x+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(x=1),v!==(m=h[u++]||"")&&(_=parseFloat(m)||0,S=m.substr((_+"").length),v.charAt(1)==="="&&(v=Ji(_,v)+S),n=parseFloat(v),w=v.substr((n+"").length),f=ji.lastIndex-w.length,w||(w=w||Yt.units[t]||S,f===r.length&&(r+=w,o.e+=w)),S!==w&&(_=Wn(e,t,m,w)||0),o._pt={_next:o._pt,p:T||u===1?T:",",s:_,c:n-_,m:x&&x<4||t==="zIndex"?Math.round:0});o.c=f<r.length?r.substring(f,r.length):""}else o.r=t==="display"&&r==="none"?af:sf;return yu.test(r)&&(o.e=0),this._pt=o,o},Bc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ov=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Bc[i]||i,t[1]=Bc[r]||r,t.join(" ")},lv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,l=i._gsap,o,f,u;if(s==="all"||s===!0)r.cssText="",f=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],Rn[o]&&(f=1,o=o==="transformOrigin"?Ot:Je),Ei(i,o);f&&(Ei(i,Je),l&&(l.svg&&i.removeAttribute("transform"),Kr(i,1),l.uncache=1,of(r)))}},ks={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var l=e._pt=new Ft(e._pt,t,i,0,0,lv);return l.u=r,l.pr=-10,l.tween=s,e._props.push(i),1}}},$r=[1,0,0,1,0,0],df={},hf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},kc=function(e){var t=gn(e,Je);return hf(t)?$r:t.substr(7).match(xu).map(tt)},il=function(e,t){var i=e._gsap||gi(e),r=e.style,s=kc(e),l,o,f,u;return i.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,s=[f.a,f.b,f.c,f.d,f.e,f.f],s.join(",")==="1,0,0,1,0,0"?$r:s):(s===$r&&!e.offsetParent&&e!==Qi&&!i.svg&&(f=r.display,r.display="block",l=e.parentNode,(!l||!e.offsetParent)&&(u=1,o=e.nextElementSibling,Qi.appendChild(e)),s=kc(e),f?r.display=f:Ei(e,"display"),u&&(o?l.insertBefore(e,o):l?l.appendChild(e):Qi.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Eo=function(e,t,i,r,s,l){var o=e._gsap,f=s||il(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,_=f[0],x=f[1],m=f[2],v=f[3],n=f[4],T=f[5],w=t.split(" "),S=parseFloat(w[0])||0,E=parseFloat(w[1])||0,D,R,M,A;i?f!==$r&&(R=_*v-x*m)&&(M=S*(v/R)+E*(-m/R)+(m*T-v*n)/R,A=S*(-x/R)+E*(_/R)-(_*T-x*n)/R,S=M,E=A):(D=uf(e),S=D.x+(~w[0].indexOf("%")?S/100*D.width:S),E=D.y+(~(w[1]||w[0]).indexOf("%")?E/100*D.height:E)),r||r!==!1&&o.smooth?(n=S-u,T=E-c,o.xOffset=d+(n*_+T*m)-n,o.yOffset=h+(n*x+T*v)-T):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=E,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[Ot]="0px 0px",l&&(kn(l,o,"xOrigin",u,S),kn(l,o,"yOrigin",c,E),kn(l,o,"xOffset",d,o.xOffset),kn(l,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+E)},Kr=function(e,t){var i=e._gsap||new Zu(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,l="px",o="deg",f=getComputedStyle(e),u=gn(e,Ot)||"0",c,d,h,_,x,m,v,n,T,w,S,E,D,R,M,A,z,G,Z,N,O,X,J,ne,Y,oe,ie,j,q,de,le,fe;return c=d=h=m=v=n=T=w=S=0,_=x=1,i.svg=!!(e.getCTM&&ff(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(r[Je]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Je]!=="none"?f[Je]:"")),r.scale=r.rotate=r.translate="none"),R=il(e,i.svg),i.svg&&(i.uncache?(Y=e.getBBox(),u=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",ne=""):ne=!t&&e.getAttribute("data-svg-origin"),Eo(e,ne||u,!!ne||i.originIsAbsolute,i.smooth!==!1,R)),E=i.xOrigin||0,D=i.yOrigin||0,R!==$r&&(G=R[0],Z=R[1],N=R[2],O=R[3],c=X=R[4],d=J=R[5],R.length===6?(_=Math.sqrt(G*G+Z*Z),x=Math.sqrt(O*O+N*N),m=G||Z?Hi(Z,G)*ri:0,T=N||O?Hi(N,O)*ri+m:0,T&&(x*=Math.abs(Math.cos(T*er))),i.svg&&(c-=E-(E*G+D*N),d-=D-(E*Z+D*O))):(fe=R[6],de=R[7],ie=R[8],j=R[9],q=R[10],le=R[11],c=R[12],d=R[13],h=R[14],M=Hi(fe,q),v=M*ri,M&&(A=Math.cos(-M),z=Math.sin(-M),ne=X*A+ie*z,Y=J*A+j*z,oe=fe*A+q*z,ie=X*-z+ie*A,j=J*-z+j*A,q=fe*-z+q*A,le=de*-z+le*A,X=ne,J=Y,fe=oe),M=Hi(-N,q),n=M*ri,M&&(A=Math.cos(-M),z=Math.sin(-M),ne=G*A-ie*z,Y=Z*A-j*z,oe=N*A-q*z,le=O*z+le*A,G=ne,Z=Y,N=oe),M=Hi(Z,G),m=M*ri,M&&(A=Math.cos(M),z=Math.sin(M),ne=G*A+Z*z,Y=X*A+J*z,Z=Z*A-G*z,J=J*A-X*z,G=ne,X=Y),v&&Math.abs(v)+Math.abs(m)>359.9&&(v=m=0,n=180-n),_=tt(Math.sqrt(G*G+Z*Z+N*N)),x=tt(Math.sqrt(J*J+fe*fe)),M=Hi(X,J),T=Math.abs(M)>2e-4?M*ri:0,S=le?1/(le<0?-le:le):0),i.svg&&(ne=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!hf(gn(e,Je)),ne&&e.setAttribute("transform",ne))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(_*=-1,T+=m<=0?180:-180,m+=m<=0?180:-180):(x*=-1,T+=T<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+l,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+l,i.z=h+l,i.scaleX=tt(_),i.scaleY=tt(x),i.rotation=tt(m)+o,i.rotationX=tt(v)+o,i.rotationY=tt(n)+o,i.skewX=T+o,i.skewY=w+o,i.transformPerspective=S+l,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Ot]=Us(u)),i.xOffset=i.yOffset=0,i.force3D=Yt.force3D,i.renderTransform=i.svg?uv:cf?pf:cv,i.uncache=0,i},Us=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qa=function(e,t,i){var r=yt(t);return tt(parseFloat(t)+parseFloat(Wn(e,"x",i+"px",r)))+r},cv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pf(e,t)},Qn="0deg",Ar="0px",ei=") ",pf=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,l=i.x,o=i.y,f=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,_=i.skewY,x=i.scaleX,m=i.scaleY,v=i.transformPerspective,n=i.force3D,T=i.target,w=i.zOrigin,S="",E=n==="auto"&&e&&e!==1||n===!0;if(w&&(d!==Qn||c!==Qn)){var D=parseFloat(c)*er,R=Math.sin(D),M=Math.cos(D),A;D=parseFloat(d)*er,A=Math.cos(D),l=Qa(T,l,R*A*-w),o=Qa(T,o,-Math.sin(D)*-w),f=Qa(T,f,M*A*-w+w)}v!==Ar&&(S+="perspective("+v+ei),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(E||l!==Ar||o!==Ar||f!==Ar)&&(S+=f!==Ar||E?"translate3d("+l+", "+o+", "+f+") ":"translate("+l+", "+o+ei),u!==Qn&&(S+="rotate("+u+ei),c!==Qn&&(S+="rotateY("+c+ei),d!==Qn&&(S+="rotateX("+d+ei),(h!==Qn||_!==Qn)&&(S+="skew("+h+", "+_+ei),(x!==1||m!==1)&&(S+="scale("+x+", "+m+ei),T.style[Je]=S||"translate(0, 0)"},uv=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,l=i.x,o=i.y,f=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,_=i.target,x=i.xOrigin,m=i.yOrigin,v=i.xOffset,n=i.yOffset,T=i.forceCSS,w=parseFloat(l),S=parseFloat(o),E,D,R,M,A;f=parseFloat(f),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,f+=c),f||u?(f*=er,u*=er,E=Math.cos(f)*d,D=Math.sin(f)*d,R=Math.sin(f-u)*-h,M=Math.cos(f-u)*h,u&&(c*=er,A=Math.tan(u-c),A=Math.sqrt(1+A*A),R*=A,M*=A,c&&(A=Math.tan(c),A=Math.sqrt(1+A*A),E*=A,D*=A)),E=tt(E),D=tt(D),R=tt(R),M=tt(M)):(E=d,M=h,D=R=0),(w&&!~(l+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(w=Wn(_,"x",l,"px"),S=Wn(_,"y",o,"px")),(x||m||v||n)&&(w=tt(w+x-(x*E+m*R)+v),S=tt(S+m-(x*D+m*M)+n)),(r||s)&&(A=_.getBBox(),w=tt(w+r/100*A.width),S=tt(S+s/100*A.height)),A="matrix("+E+","+D+","+R+","+M+","+w+","+S+")",_.setAttribute("transform",A),T&&(_.style[Je]=A)},fv=function(e,t,i,r,s){var l=360,o=_t(s),f=parseFloat(s)*(o&&~s.indexOf("rad")?ri:1),u=f-r,c=r+u+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(u%=l,u!==u%(l/2)&&(u+=u<0?l:-l)),d==="cw"&&u<0?u=(u+l*zc)%l-~~(u/l)*l:d==="ccw"&&u>0&&(u=(u-l*zc)%l-~~(u/l)*l)),e._pt=h=new Ft(e._pt,t,i,r,u,j0),h.e=c,h.u="deg",e._props.push(i),h},Uc=function(e,t){for(var i in t)e[i]=t[i];return e},dv=function(e,t,i){var r=Uc({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",l=i.style,o,f,u,c,d,h,_,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),l[Je]=t,o=Kr(i,1),Ei(i,Je),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Je],l[Je]=t,o=Kr(i,1),l[Je]=u);for(f in Rn)u=r[f],c=o[f],u!==c&&s.indexOf(f)<0&&(_=yt(u),x=yt(c),d=_!==x?Wn(i,f,u,x):parseFloat(u),h=parseFloat(c),e._pt=new Ft(e._pt,o,f,d,h-d,So),e._pt.u=x||0,e._props.push(f));Uc(o,r)};zt("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",r="Bottom",s="Left",l=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?a+o:"border"+o+a});ks[e>1?"border"+a:a]=function(o,f,u,c,d){var h,_;if(arguments.length<4)return h=l.map(function(x){return An(o,x,u)}),_=h.join(" "),_.split(h[0]).length===5?h[0]:_;h=(c+"").split(" "),_={},l.forEach(function(x,m){return _[x]=h[m]=h[m]||h[(m-1)/2|0]}),o.init(f,_,d)}});var mf={name:"css",register:To,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var l=this._props,o=e.style,f=i.vars.startAt,u,c,d,h,_,x,m,v,n,T,w,S,E,D,R,M;el||To(),this.styles=this.styles||lf(e),M=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(Vt[m]&&$u(m,t,i,r,e,s)))){if(_=typeof c,x=ks[m],_==="function"&&(c=c.call(i,r,e,s),_=typeof c),_==="string"&&~c.indexOf("random(")&&(c=Yr(c)),x)x(this,e,m,c,i)&&(R=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",Vn.lastIndex=0,Vn.test(u)||(v=yt(u),n=yt(c)),n?v!==n&&(u=Wn(e,m,u,n)+n):v&&(c+=v),this.add(o,"setProperty",u,c,r,s,0,0,m),l.push(m),M.push(m,0,o[m]);else if(_!=="undefined"){if(f&&m in f?(u=typeof f[m]=="function"?f[m].call(i,r,e,s):f[m],_t(u)&&~u.indexOf("random(")&&(u=Yr(u)),yt(u+"")||u==="auto"||(u+=Yt.units[m]||yt(An(e,m))||""),(u+"").charAt(1)==="="&&(u=An(e,m))):u=An(e,m),h=parseFloat(u),T=_==="string"&&c.charAt(1)==="="&&c.substr(0,2),T&&(c=c.substr(2)),d=parseFloat(c),m in pn&&(m==="autoAlpha"&&(h===1&&An(e,"visibility")==="hidden"&&d&&(h=0),M.push("visibility",0,o.visibility),kn(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=pn[m],~m.indexOf(",")&&(m=m.split(",")[0]))),w=m in Rn,w){if(this.styles.save(m),S||(E=e._gsap,E.renderTransform&&!t.parseTransform||Kr(e,t.parseTransform),D=t.smoothOrigin!==!1&&E.smooth,S=this._pt=new Ft(this._pt,o,Je,0,1,E.renderTransform,E,0,-1),S.dep=1),m==="scale")this._pt=new Ft(this._pt,E,"scaleY",E.scaleY,(T?Ji(E.scaleY,T+d):d)-E.scaleY||0,So),this._pt.u=0,l.push("scaleY",m),m+="X";else if(m==="transformOrigin"){M.push(Ot,0,o[Ot]),c=ov(c),E.svg?Eo(e,c,0,D,0,this):(n=parseFloat(c.split(" ")[2])||0,n!==E.zOrigin&&kn(this,E,"zOrigin",E.zOrigin,n),kn(this,o,m,Us(u),Us(c)));continue}else if(m==="svgOrigin"){Eo(e,c,1,D,0,this);continue}else if(m in df){fv(this,E,m,h,T?Ji(h,T+c):c);continue}else if(m==="smoothOrigin"){kn(this,E,"smooth",E.smooth,c);continue}else if(m==="force3D"){E[m]=c;continue}else if(m==="transform"){dv(this,c,e);continue}}else m in o||(m=dr(m)||m);if(w||(d||d===0)&&(h||h===0)&&!Y0.test(c)&&m in o)v=(u+"").substr((h+"").length),d||(d=0),n=yt(c)||(m in Yt.units?Yt.units[m]:v),v!==n&&(h=Wn(e,m,u,n)),this._pt=new Ft(this._pt,w?E:o,m,h,(T?Ji(h,T+d):d)-h,!w&&(n==="px"||m==="zIndex")&&t.autoRound!==!1?$0:So),this._pt.u=n||0,v!==n&&n!=="%"&&(this._pt.b=u,this._pt.r=Z0);else if(m in o)av.call(this,e,m,u,T?T+c:c);else if(m in e)this.add(e,m,u||e[m],T?T+c:c,r,s);else if(m!=="parseTransform"){Xo(m,c);continue}w||(m in o?M.push(m,0,o[m]):M.push(m,1,u||e[m])),l.push(m)}}R&&nf(this)},render:function(e,t){if(t.tween._time||!tl())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:An,aliases:pn,getSetter:function(e,t,i){var r=pn[t];return r&&r.indexOf(",")<0&&(t=r),t in Rn&&t!==Ot&&(e._gsap.x||An(e,"x"))?i&&Ic===i?t==="scale"?ev:Q0:(Ic=i||{})&&(t==="scale"?tv:nv):e.style&&!Vo(e.style[t])?K0:~t.indexOf("-")?J0:Jo(e,t)},core:{_removeProperty:Ei,_getMatrix:il}};Nt.utils.checkPrefix=dr;Nt.core.getStyleSaver=lf;(function(a,e,t,i){var r=zt(a+","+e+","+t,function(s){Rn[s]=1});zt(e,function(s){Yt.units[s]="deg",df[s]=1}),pn[r[13]]=a+","+e,zt(i,function(s){var l=s.split(":");pn[l[1]]=r[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Yt.units[a]="px"});Nt.registerPlugin(mf);var mt=Nt.registerPlugin(mf)||Nt;mt.core.Tween;var Co={},hv={get exports(){return Co},set exports(a){Co=a}};(function(a){(function(){var e,t=function(f,u){if(!(this instanceof t))return new t(f,u);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},d=u&&u.virtualTranslate;u=u||{};var h={};for(var _ in u)if(typeof u[_]=="object"&&u[_]!==null&&!(u[_].nodeType||u[_]===window||u[_]===document||typeof i<"u"&&u[_]instanceof i||typeof jQuery<"u"&&u[_]instanceof jQuery)){h[_]={};for(var x in u[_])h[_][x]=u[_][x]}else h[_]=u[_];for(var m in c)if(typeof u[m]>"u")u[m]=c[m];else if(typeof u[m]=="object")for(var v in c[m])typeof u[m][v]>"u"&&(u[m][v]=c[m][v]);var n=this;if(n.params=u,n.originalParams=h,n.classNames=[],typeof e<"u"&&typeof i<"u"&&(e=i),typeof e>"u"&&(typeof i>"u"?e=window.Dom7||window.Zepto||window.jQuery:e=i,!e)||(n.$=e,n.currentBreakpoint=void 0,n.getActiveBreakpoint=function(){if(!n.params.breakpoints)return!1;var p=!1,g=[],y;for(y in n.params.breakpoints)n.params.breakpoints.hasOwnProperty(y)&&g.push(y);g.sort(function(I,V){return parseInt(I,10)>parseInt(V,10)});for(var C=0;C<g.length;C++)y=g[C],y>=window.innerWidth&&!p&&(p=y);return p||"max"},n.setBreakpoint=function(){var p=n.getActiveBreakpoint();if(p&&n.currentBreakpoint!==p){var g=p in n.params.breakpoints?n.params.breakpoints[p]:n.originalParams,y=n.params.loop&&g.slidesPerView!==n.params.slidesPerView;for(var C in g)n.params[C]=g[C];n.currentBreakpoint=p,y&&n.destroyLoop&&n.reLoop(!0)}},n.params.breakpoints&&n.setBreakpoint(),n.container=e(f),n.container.length===0))return;if(n.container.length>1){var T=[];return n.container.each(function(){T.push(new t(this,u))}),T}n.container[0].swiper=n,n.container.data("swiper",n),n.classNames.push(n.params.containerModifierClass+n.params.direction),n.params.freeMode&&n.classNames.push(n.params.containerModifierClass+"free-mode"),n.support.flexbox||(n.classNames.push(n.params.containerModifierClass+"no-flexbox"),n.params.slidesPerColumn=1),n.params.autoHeight&&n.classNames.push(n.params.containerModifierClass+"autoheight"),(n.params.parallax||n.params.watchSlidesVisibility)&&(n.params.watchSlidesProgress=!0),n.params.touchReleaseOnEdges&&(n.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(n.params.effect)>=0&&(n.support.transforms3d?(n.params.watchSlidesProgress=!0,n.classNames.push(n.params.containerModifierClass+"3d")):n.params.effect="slide"),n.params.effect!=="slide"&&n.classNames.push(n.params.containerModifierClass+n.params.effect),n.params.effect==="cube"&&(n.params.resistanceRatio=0,n.params.slidesPerView=1,n.params.slidesPerColumn=1,n.params.slidesPerGroup=1,n.params.centeredSlides=!1,n.params.spaceBetween=0,n.params.virtualTranslate=!0),(n.params.effect==="fade"||n.params.effect==="flip")&&(n.params.slidesPerView=1,n.params.slidesPerColumn=1,n.params.slidesPerGroup=1,n.params.watchSlidesProgress=!0,n.params.spaceBetween=0,typeof d>"u"&&(n.params.virtualTranslate=!0)),n.params.grabCursor&&n.support.touch&&(n.params.grabCursor=!1),n.wrapper=n.container.children("."+n.params.wrapperClass),n.params.pagination&&(n.paginationContainer=e(n.params.pagination),n.params.uniqueNavElements&&typeof n.params.pagination=="string"&&n.paginationContainer.length>1&&n.container.find(n.params.pagination).length===1&&(n.paginationContainer=n.container.find(n.params.pagination)),n.params.paginationType==="bullets"&&n.params.paginationClickable?n.paginationContainer.addClass(n.params.paginationModifierClass+"clickable"):n.params.paginationClickable=!1,n.paginationContainer.addClass(n.params.paginationModifierClass+n.params.paginationType)),(n.params.nextButton||n.params.prevButton)&&(n.params.nextButton&&(n.nextButton=e(n.params.nextButton),n.params.uniqueNavElements&&typeof n.params.nextButton=="string"&&n.nextButton.length>1&&n.container.find(n.params.nextButton).length===1&&(n.nextButton=n.container.find(n.params.nextButton))),n.params.prevButton&&(n.prevButton=e(n.params.prevButton),n.params.uniqueNavElements&&typeof n.params.prevButton=="string"&&n.prevButton.length>1&&n.container.find(n.params.prevButton).length===1&&(n.prevButton=n.container.find(n.params.prevButton)))),n.isHorizontal=function(){return n.params.direction==="horizontal"},n.rtl=n.isHorizontal()&&(n.container[0].dir.toLowerCase()==="rtl"||n.container.css("direction")==="rtl"),n.rtl&&n.classNames.push(n.params.containerModifierClass+"rtl"),n.rtl&&(n.wrongRTL=n.wrapper.css("display")==="-webkit-box"),n.params.slidesPerColumn>1&&n.classNames.push(n.params.containerModifierClass+"multirow"),n.device.android&&n.classNames.push(n.params.containerModifierClass+"android"),n.container.addClass(n.classNames.join(" ")),n.translate=0,n.progress=0,n.velocity=0,n.lockSwipeToNext=function(){n.params.allowSwipeToNext=!1,n.params.allowSwipeToPrev===!1&&n.params.grabCursor&&n.unsetGrabCursor()},n.lockSwipeToPrev=function(){n.params.allowSwipeToPrev=!1,n.params.allowSwipeToNext===!1&&n.params.grabCursor&&n.unsetGrabCursor()},n.lockSwipes=function(){n.params.allowSwipeToNext=n.params.allowSwipeToPrev=!1,n.params.grabCursor&&n.unsetGrabCursor()},n.unlockSwipeToNext=function(){n.params.allowSwipeToNext=!0,n.params.allowSwipeToPrev===!0&&n.params.grabCursor&&n.setGrabCursor()},n.unlockSwipeToPrev=function(){n.params.allowSwipeToPrev=!0,n.params.allowSwipeToNext===!0&&n.params.grabCursor&&n.setGrabCursor()},n.unlockSwipes=function(){n.params.allowSwipeToNext=n.params.allowSwipeToPrev=!0,n.params.grabCursor&&n.setGrabCursor()};function w(p){return Math.floor(p)}n.setGrabCursor=function(p){n.container[0].style.cursor="move",n.container[0].style.cursor=p?"-webkit-grabbing":"-webkit-grab",n.container[0].style.cursor=p?"-moz-grabbin":"-moz-grab",n.container[0].style.cursor=p?"grabbing":"grab"},n.unsetGrabCursor=function(){n.container[0].style.cursor=""},n.params.grabCursor&&n.setGrabCursor(),n.imagesToLoad=[],n.imagesLoaded=0,n.loadImage=function(p,g,y,C,I,V){var W;function ae(){V&&V()}(!p.complete||!I)&&g?(W=new window.Image,W.onload=ae,W.onerror=ae,C&&(W.sizes=C),y&&(W.srcset=y),g&&(W.src=g)):ae()},n.preloadImages=function(){n.imagesToLoad=n.container.find("img");function p(){typeof n>"u"||n===null||!n||(n.imagesLoaded!==void 0&&n.imagesLoaded++,n.imagesLoaded===n.imagesToLoad.length&&(n.params.updateOnImagesReady&&n.update(),n.emit("onImagesReady",n)))}for(var g=0;g<n.imagesToLoad.length;g++)n.loadImage(n.imagesToLoad[g],n.imagesToLoad[g].currentSrc||n.imagesToLoad[g].getAttribute("src"),n.imagesToLoad[g].srcset||n.imagesToLoad[g].getAttribute("srcset"),n.imagesToLoad[g].sizes||n.imagesToLoad[g].getAttribute("sizes"),!0,p)},n.autoplayTimeoutId=void 0,n.autoplaying=!1,n.autoplayPaused=!1;function S(){var p=n.params.autoplay,g=n.slides.eq(n.activeIndex);g.attr("data-swiper-autoplay")&&(p=g.attr("data-swiper-autoplay")||n.params.autoplay),n.autoplayTimeoutId=setTimeout(function(){n.params.loop?(n.fixLoop(),n._slideNext(),n.emit("onAutoplay",n)):n.isEnd?u.autoplayStopOnLast?n.stopAutoplay():(n._slideTo(0),n.emit("onAutoplay",n)):(n._slideNext(),n.emit("onAutoplay",n))},p)}n.startAutoplay=function(){if(typeof n.autoplayTimeoutId<"u"||!n.params.autoplay||n.autoplaying)return!1;n.autoplaying=!0,n.emit("onAutoplayStart",n),S()},n.stopAutoplay=function(p){n.autoplayTimeoutId&&(n.autoplayTimeoutId&&clearTimeout(n.autoplayTimeoutId),n.autoplaying=!1,n.autoplayTimeoutId=void 0,n.emit("onAutoplayStop",n))},n.pauseAutoplay=function(p){n.autoplayPaused||(n.autoplayTimeoutId&&clearTimeout(n.autoplayTimeoutId),n.autoplayPaused=!0,p===0?(n.autoplayPaused=!1,S()):n.wrapper.transitionEnd(function(){n&&(n.autoplayPaused=!1,n.autoplaying?S():n.stopAutoplay())}))},n.minTranslate=function(){return-n.snapGrid[0]},n.maxTranslate=function(){return-n.snapGrid[n.snapGrid.length-1]},n.updateAutoHeight=function(){var p=[],g=0,y;if(n.params.slidesPerView!=="auto"&&n.params.slidesPerView>1)for(y=0;y<Math.ceil(n.params.slidesPerView);y++){var C=n.activeIndex+y;if(C>n.slides.length)break;p.push(n.slides.eq(C)[0])}else p.push(n.slides.eq(n.activeIndex)[0]);for(y=0;y<p.length;y++)if(typeof p[y]<"u"){var I=p[y].offsetHeight;g=I>g?I:g}g&&n.wrapper.css("height",g+"px")},n.updateContainerSize=function(){var p,g;typeof n.params.width<"u"?p=n.params.width:p=n.container[0].clientWidth,typeof n.params.height<"u"?g=n.params.height:g=n.container[0].clientHeight,!(p===0&&n.isHorizontal()||g===0&&!n.isHorizontal())&&(p=p-parseInt(n.container.css("padding-left"),10)-parseInt(n.container.css("padding-right"),10),g=g-parseInt(n.container.css("padding-top"),10)-parseInt(n.container.css("padding-bottom"),10),n.width=p,n.height=g,n.size=n.isHorizontal()?n.width:n.height)},n.updateSlidesSize=function(){n.slides=n.wrapper.children("."+n.params.slideClass),n.snapGrid=[],n.slidesGrid=[],n.slidesSizesGrid=[];var p=n.params.spaceBetween,g=-n.params.slidesOffsetBefore,y,C=0,I=0;if(!(typeof n.size>"u")){typeof p=="string"&&p.indexOf("%")>=0&&(p=parseFloat(p.replace("%",""))/100*n.size),n.virtualSize=-p,n.rtl?n.slides.css({marginLeft:"",marginTop:""}):n.slides.css({marginRight:"",marginBottom:""});var V;n.params.slidesPerColumn>1&&(Math.floor(n.slides.length/n.params.slidesPerColumn)===n.slides.length/n.params.slidesPerColumn?V=n.slides.length:V=Math.ceil(n.slides.length/n.params.slidesPerColumn)*n.params.slidesPerColumn,n.params.slidesPerView!=="auto"&&n.params.slidesPerColumnFill==="row"&&(V=Math.max(V,n.params.slidesPerView*n.params.slidesPerColumn)));var W,ae=n.params.slidesPerColumn,ye=V/ae,pe=ye-(n.params.slidesPerColumn*ye-n.slides.length);for(y=0;y<n.slides.length;y++){W=0;var _e=n.slides.eq(y);if(n.params.slidesPerColumn>1){var Pe,P,b;n.params.slidesPerColumnFill==="column"?(P=Math.floor(y/ae),b=y-P*ae,(P>pe||P===pe&&b===ae-1)&&++b>=ae&&(b=0,P++),Pe=P+b*V/ae,_e.css({"-webkit-box-ordinal-group":Pe,"-moz-box-ordinal-group":Pe,"-ms-flex-order":Pe,"-webkit-order":Pe,order:Pe})):(b=Math.floor(y/ye),P=y-b*ye),_e.css("margin-"+(n.isHorizontal()?"top":"left"),b!==0&&n.params.spaceBetween&&n.params.spaceBetween+"px").attr("data-swiper-column",P).attr("data-swiper-row",b)}_e.css("display")!=="none"&&(n.params.slidesPerView==="auto"?(W=n.isHorizontal()?_e.outerWidth(!0):_e.outerHeight(!0),n.params.roundLengths&&(W=w(W))):(W=(n.size-(n.params.slidesPerView-1)*p)/n.params.slidesPerView,n.params.roundLengths&&(W=w(W)),n.isHorizontal()?n.slides[y].style.width=W+"px":n.slides[y].style.height=W+"px"),n.slides[y].swiperSlideSize=W,n.slidesSizesGrid.push(W),n.params.centeredSlides?(g=g+W/2+C/2+p,C===0&&y!==0&&(g=g-n.size/2-p),y===0&&(g=g-n.size/2-p),Math.abs(g)<.001&&(g=0),I%n.params.slidesPerGroup===0&&n.snapGrid.push(g),n.slidesGrid.push(g)):(I%n.params.slidesPerGroup===0&&n.snapGrid.push(g),n.slidesGrid.push(g),g=g+W+p),n.virtualSize+=W+p,C=W,I++)}n.virtualSize=Math.max(n.virtualSize,n.size)+n.params.slidesOffsetAfter;var H;if(n.rtl&&n.wrongRTL&&(n.params.effect==="slide"||n.params.effect==="coverflow")&&n.wrapper.css({width:n.virtualSize+n.params.spaceBetween+"px"}),(!n.support.flexbox||n.params.setWrapperSize)&&(n.isHorizontal()?n.wrapper.css({width:n.virtualSize+n.params.spaceBetween+"px"}):n.wrapper.css({height:n.virtualSize+n.params.spaceBetween+"px"})),n.params.slidesPerColumn>1&&(n.virtualSize=(W+n.params.spaceBetween)*V,n.virtualSize=Math.ceil(n.virtualSize/n.params.slidesPerColumn)-n.params.spaceBetween,n.isHorizontal()?n.wrapper.css({width:n.virtualSize+n.params.spaceBetween+"px"}):n.wrapper.css({height:n.virtualSize+n.params.spaceBetween+"px"}),n.params.centeredSlides)){for(H=[],y=0;y<n.snapGrid.length;y++)n.snapGrid[y]<n.virtualSize+n.snapGrid[0]&&H.push(n.snapGrid[y]);n.snapGrid=H}if(!n.params.centeredSlides){for(H=[],y=0;y<n.snapGrid.length;y++)n.snapGrid[y]<=n.virtualSize-n.size&&H.push(n.snapGrid[y]);n.snapGrid=H,Math.floor(n.virtualSize-n.size)-Math.floor(n.snapGrid[n.snapGrid.length-1])>1&&n.snapGrid.push(n.virtualSize-n.size)}n.snapGrid.length===0&&(n.snapGrid=[0]),n.params.spaceBetween!==0&&(n.isHorizontal()?n.rtl?n.slides.css({marginLeft:p+"px"}):n.slides.css({marginRight:p+"px"}):n.slides.css({marginBottom:p+"px"})),n.params.watchSlidesProgress&&n.updateSlidesOffset()}},n.updateSlidesOffset=function(){for(var p=0;p<n.slides.length;p++)n.slides[p].swiperSlideOffset=n.isHorizontal()?n.slides[p].offsetLeft:n.slides[p].offsetTop},n.currentSlidesPerView=function(){var p=1,g,y;if(n.params.centeredSlides){var C=n.slides[n.activeIndex].swiperSlideSize,I;for(g=n.activeIndex+1;g<n.slides.length;g++)n.slides[g]&&!I&&(C+=n.slides[g].swiperSlideSize,p++,C>n.size&&(I=!0));for(y=n.activeIndex-1;y>=0;y--)n.slides[y]&&!I&&(C+=n.slides[y].swiperSlideSize,p++,C>n.size&&(I=!0))}else for(g=n.activeIndex+1;g<n.slides.length;g++)n.slidesGrid[g]-n.slidesGrid[n.activeIndex]<n.size&&p++;return p},n.updateSlidesProgress=function(p){if(typeof p>"u"&&(p=n.translate||0),n.slides.length!==0){typeof n.slides[0].swiperSlideOffset>"u"&&n.updateSlidesOffset();var g=-p;n.rtl&&(g=p),n.slides.removeClass(n.params.slideVisibleClass);for(var y=0;y<n.slides.length;y++){var C=n.slides[y],I=(g+(n.params.centeredSlides?n.minTranslate():0)-C.swiperSlideOffset)/(C.swiperSlideSize+n.params.spaceBetween);if(n.params.watchSlidesVisibility){var V=-(g-C.swiperSlideOffset),W=V+n.slidesSizesGrid[y],ae=V>=0&&V<n.size||W>0&&W<=n.size||V<=0&&W>=n.size;ae&&n.slides.eq(y).addClass(n.params.slideVisibleClass)}C.progress=n.rtl?-I:I}}},n.updateProgress=function(p){typeof p>"u"&&(p=n.translate||0);var g=n.maxTranslate()-n.minTranslate(),y=n.isBeginning,C=n.isEnd;g===0?(n.progress=0,n.isBeginning=n.isEnd=!0):(n.progress=(p-n.minTranslate())/g,n.isBeginning=n.progress<=0,n.isEnd=n.progress>=1),n.isBeginning&&!y&&n.emit("onReachBeginning",n),n.isEnd&&!C&&n.emit("onReachEnd",n),n.params.watchSlidesProgress&&n.updateSlidesProgress(p),n.emit("onProgress",n,n.progress)},n.updateActiveIndex=function(){var p=n.rtl?n.translate:-n.translate,g,y,C;for(y=0;y<n.slidesGrid.length;y++)typeof n.slidesGrid[y+1]<"u"?p>=n.slidesGrid[y]&&p<n.slidesGrid[y+1]-(n.slidesGrid[y+1]-n.slidesGrid[y])/2?g=y:p>=n.slidesGrid[y]&&p<n.slidesGrid[y+1]&&(g=y+1):p>=n.slidesGrid[y]&&(g=y);n.params.normalizeSlideIndex&&(g<0||typeof g>"u")&&(g=0),C=Math.floor(g/n.params.slidesPerGroup),C>=n.snapGrid.length&&(C=n.snapGrid.length-1),g!==n.activeIndex&&(n.snapIndex=C,n.previousIndex=n.activeIndex,n.activeIndex=g,n.updateClasses(),n.updateRealIndex())},n.updateRealIndex=function(){n.realIndex=parseInt(n.slides.eq(n.activeIndex).attr("data-swiper-slide-index")||n.activeIndex,10)},n.updateClasses=function(){n.slides.removeClass(n.params.slideActiveClass+" "+n.params.slideNextClass+" "+n.params.slidePrevClass+" "+n.params.slideDuplicateActiveClass+" "+n.params.slideDuplicateNextClass+" "+n.params.slideDuplicatePrevClass);var p=n.slides.eq(n.activeIndex);p.addClass(n.params.slideActiveClass),u.loop&&(p.hasClass(n.params.slideDuplicateClass)?n.wrapper.children("."+n.params.slideClass+":not(."+n.params.slideDuplicateClass+')[data-swiper-slide-index="'+n.realIndex+'"]').addClass(n.params.slideDuplicateActiveClass):n.wrapper.children("."+n.params.slideClass+"."+n.params.slideDuplicateClass+'[data-swiper-slide-index="'+n.realIndex+'"]').addClass(n.params.slideDuplicateActiveClass));var g=p.next("."+n.params.slideClass).addClass(n.params.slideNextClass);n.params.loop&&g.length===0&&(g=n.slides.eq(0),g.addClass(n.params.slideNextClass));var y=p.prev("."+n.params.slideClass).addClass(n.params.slidePrevClass);if(n.params.loop&&y.length===0&&(y=n.slides.eq(-1),y.addClass(n.params.slidePrevClass)),u.loop&&(g.hasClass(n.params.slideDuplicateClass)?n.wrapper.children("."+n.params.slideClass+":not(."+n.params.slideDuplicateClass+')[data-swiper-slide-index="'+g.attr("data-swiper-slide-index")+'"]').addClass(n.params.slideDuplicateNextClass):n.wrapper.children("."+n.params.slideClass+"."+n.params.slideDuplicateClass+'[data-swiper-slide-index="'+g.attr("data-swiper-slide-index")+'"]').addClass(n.params.slideDuplicateNextClass),y.hasClass(n.params.slideDuplicateClass)?n.wrapper.children("."+n.params.slideClass+":not(."+n.params.slideDuplicateClass+')[data-swiper-slide-index="'+y.attr("data-swiper-slide-index")+'"]').addClass(n.params.slideDuplicatePrevClass):n.wrapper.children("."+n.params.slideClass+"."+n.params.slideDuplicateClass+'[data-swiper-slide-index="'+y.attr("data-swiper-slide-index")+'"]').addClass(n.params.slideDuplicatePrevClass)),n.paginationContainer&&n.paginationContainer.length>0){var C,I=n.params.loop?Math.ceil((n.slides.length-n.loopedSlides*2)/n.params.slidesPerGroup):n.snapGrid.length;if(n.params.loop?(C=Math.ceil((n.activeIndex-n.loopedSlides)/n.params.slidesPerGroup),C>n.slides.length-1-n.loopedSlides*2&&(C=C-(n.slides.length-n.loopedSlides*2)),C>I-1&&(C=C-I),C<0&&n.params.paginationType!=="bullets"&&(C=I+C)):typeof n.snapIndex<"u"?C=n.snapIndex:C=n.activeIndex||0,n.params.paginationType==="bullets"&&n.bullets&&n.bullets.length>0&&(n.bullets.removeClass(n.params.bulletActiveClass),n.paginationContainer.length>1?n.bullets.each(function(){e(this).index()===C&&e(this).addClass(n.params.bulletActiveClass)}):n.bullets.eq(C).addClass(n.params.bulletActiveClass)),n.params.paginationType==="fraction"&&(n.paginationContainer.find("."+n.params.paginationCurrentClass).text(C+1),n.paginationContainer.find("."+n.params.paginationTotalClass).text(I)),n.params.paginationType==="progress"){var V=(C+1)/I,W=V,ae=1;n.isHorizontal()||(ae=V,W=1),n.paginationContainer.find("."+n.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+W+") scaleY("+ae+")").transition(n.params.speed)}n.params.paginationType==="custom"&&n.params.paginationCustomRender&&(n.paginationContainer.html(n.params.paginationCustomRender(n,C+1,I)),n.emit("onPaginationRendered",n,n.paginationContainer[0]))}n.params.loop||(n.params.prevButton&&n.prevButton&&n.prevButton.length>0&&(n.isBeginning?(n.prevButton.addClass(n.params.buttonDisabledClass),n.params.a11y&&n.a11y&&n.a11y.disable(n.prevButton)):(n.prevButton.removeClass(n.params.buttonDisabledClass),n.params.a11y&&n.a11y&&n.a11y.enable(n.prevButton))),n.params.nextButton&&n.nextButton&&n.nextButton.length>0&&(n.isEnd?(n.nextButton.addClass(n.params.buttonDisabledClass),n.params.a11y&&n.a11y&&n.a11y.disable(n.nextButton)):(n.nextButton.removeClass(n.params.buttonDisabledClass),n.params.a11y&&n.a11y&&n.a11y.enable(n.nextButton))))},n.updatePagination=function(){if(n.params.pagination&&n.paginationContainer&&n.paginationContainer.length>0){var p="";if(n.params.paginationType==="bullets"){for(var g=n.params.loop?Math.ceil((n.slides.length-n.loopedSlides*2)/n.params.slidesPerGroup):n.snapGrid.length,y=0;y<g;y++)n.params.paginationBulletRender?p+=n.params.paginationBulletRender(n,y,n.params.bulletClass):p+="<"+n.params.paginationElement+' class="'+n.params.bulletClass+'"></'+n.params.paginationElement+">";n.paginationContainer.html(p),n.bullets=n.paginationContainer.find("."+n.params.bulletClass),n.params.paginationClickable&&n.params.a11y&&n.a11y&&n.a11y.initPagination()}n.params.paginationType==="fraction"&&(n.params.paginationFractionRender?p=n.params.paginationFractionRender(n,n.params.paginationCurrentClass,n.params.paginationTotalClass):p='<span class="'+n.params.paginationCurrentClass+'"></span> / <span class="'+n.params.paginationTotalClass+'"></span>',n.paginationContainer.html(p)),n.params.paginationType==="progress"&&(n.params.paginationProgressRender?p=n.params.paginationProgressRender(n,n.params.paginationProgressbarClass):p='<span class="'+n.params.paginationProgressbarClass+'"></span>',n.paginationContainer.html(p)),n.params.paginationType!=="custom"&&n.emit("onPaginationRendered",n,n.paginationContainer[0])}},n.update=function(p){if(!n)return;n.updateContainerSize(),n.updateSlidesSize(),n.updateProgress(),n.updatePagination(),n.updateClasses(),n.params.scrollbar&&n.scrollbar&&n.scrollbar.set();var g;function y(){n.rtl?-n.translate:n.translate,g=Math.min(Math.max(n.translate,n.maxTranslate()),n.minTranslate()),n.setWrapperTranslate(g),n.updateActiveIndex(),n.updateClasses()}if(p){var C;n.controller&&n.controller.spline&&(n.controller.spline=void 0),n.params.freeMode?(y(),n.params.autoHeight&&n.updateAutoHeight()):((n.params.slidesPerView==="auto"||n.params.slidesPerView>1)&&n.isEnd&&!n.params.centeredSlides?C=n.slideTo(n.slides.length-1,0,!1,!0):C=n.slideTo(n.activeIndex,0,!1,!0),C||y())}else n.params.autoHeight&&n.updateAutoHeight()},n.onResize=function(p){n.params.onBeforeResize&&n.params.onBeforeResize(n),n.params.breakpoints&&n.setBreakpoint();var g=n.params.allowSwipeToPrev,y=n.params.allowSwipeToNext;n.params.allowSwipeToPrev=n.params.allowSwipeToNext=!0,n.updateContainerSize(),n.updateSlidesSize(),(n.params.slidesPerView==="auto"||n.params.freeMode||p)&&n.updatePagination(),n.params.scrollbar&&n.scrollbar&&n.scrollbar.set(),n.controller&&n.controller.spline&&(n.controller.spline=void 0);var C=!1;if(n.params.freeMode){var I=Math.min(Math.max(n.translate,n.maxTranslate()),n.minTranslate());n.setWrapperTranslate(I),n.updateActiveIndex(),n.updateClasses(),n.params.autoHeight&&n.updateAutoHeight()}else n.updateClasses(),(n.params.slidesPerView==="auto"||n.params.slidesPerView>1)&&n.isEnd&&!n.params.centeredSlides?C=n.slideTo(n.slides.length-1,0,!1,!0):C=n.slideTo(n.activeIndex,0,!1,!0);n.params.lazyLoading&&!C&&n.lazy&&n.lazy.load(),n.params.allowSwipeToPrev=g,n.params.allowSwipeToNext=y,n.params.onAfterResize&&n.params.onAfterResize(n)},n.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?n.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(n.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),n.touchEvents={start:n.support.touch||!n.params.simulateTouch?"touchstart":n.touchEventsDesktop.start,move:n.support.touch||!n.params.simulateTouch?"touchmove":n.touchEventsDesktop.move,end:n.support.touch||!n.params.simulateTouch?"touchend":n.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&(n.params.touchEventsTarget==="container"?n.container:n.wrapper).addClass("swiper-wp8-"+n.params.direction),n.initEvents=function(p){var g=p?"off":"on",y=p?"removeEventListener":"addEventListener",C=n.params.touchEventsTarget==="container"?n.container[0]:n.wrapper[0],I=n.support.touch?C:document,V=!!n.params.nested;if(n.browser.ie)C[y](n.touchEvents.start,n.onTouchStart,!1),I[y](n.touchEvents.move,n.onTouchMove,V),I[y](n.touchEvents.end,n.onTouchEnd,!1);else{if(n.support.touch){var W=n.touchEvents.start==="touchstart"&&n.support.passiveListener&&n.params.passiveListeners?{passive:!0,capture:!1}:!1;C[y](n.touchEvents.start,n.onTouchStart,W),C[y](n.touchEvents.move,n.onTouchMove,V),C[y](n.touchEvents.end,n.onTouchEnd,W)}(u.simulateTouch&&!n.device.ios&&!n.device.android||u.simulateTouch&&!n.support.touch&&n.device.ios)&&(C[y]("mousedown",n.onTouchStart,!1),document[y]("mousemove",n.onTouchMove,V),document[y]("mouseup",n.onTouchEnd,!1))}window[y]("resize",n.onResize),n.params.nextButton&&n.nextButton&&n.nextButton.length>0&&(n.nextButton[g]("click",n.onClickNext),n.params.a11y&&n.a11y&&n.nextButton[g]("keydown",n.a11y.onEnterKey)),n.params.prevButton&&n.prevButton&&n.prevButton.length>0&&(n.prevButton[g]("click",n.onClickPrev),n.params.a11y&&n.a11y&&n.prevButton[g]("keydown",n.a11y.onEnterKey)),n.params.pagination&&n.params.paginationClickable&&(n.paginationContainer[g]("click","."+n.params.bulletClass,n.onClickIndex),n.params.a11y&&n.a11y&&n.paginationContainer[g]("keydown","."+n.params.bulletClass,n.a11y.onEnterKey)),(n.params.preventClicks||n.params.preventClicksPropagation)&&C[y]("click",n.preventClicks,!0)},n.attachEvents=function(){n.initEvents()},n.detachEvents=function(){n.initEvents(!0)},n.allowClick=!0,n.preventClicks=function(p){n.allowClick||(n.params.preventClicks&&p.preventDefault(),n.params.preventClicksPropagation&&n.animating&&(p.stopPropagation(),p.stopImmediatePropagation()))},n.onClickNext=function(p){p.preventDefault(),!(n.isEnd&&!n.params.loop)&&n.slideNext()},n.onClickPrev=function(p){p.preventDefault(),!(n.isBeginning&&!n.params.loop)&&n.slidePrev()},n.onClickIndex=function(p){p.preventDefault();var g=e(this).index()*n.params.slidesPerGroup;n.params.loop&&(g=g+n.loopedSlides),n.slideTo(g)};function E(p,g){var y=e(p.target);if(!y.is(g)){if(typeof g=="string")y=y.parents(g);else if(g.nodeType){var C;return y.parents().each(function(I,V){V===g&&(C=g)}),C?g:void 0}}if(y.length!==0)return y[0]}n.updateClickedSlide=function(p){var g=E(p,"."+n.params.slideClass),y=!1;if(g)for(var C=0;C<n.slides.length;C++)n.slides[C]===g&&(y=!0);if(g&&y)n.clickedSlide=g,n.clickedIndex=e(g).index();else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}if(n.params.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex){var I=n.clickedIndex,V,W=n.params.slidesPerView==="auto"?n.currentSlidesPerView():n.params.slidesPerView;if(n.params.loop){if(n.animating)return;V=parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"),10),n.params.centeredSlides?I<n.loopedSlides-W/2||I>n.slides.length-n.loopedSlides+W/2?(n.fixLoop(),I=n.wrapper.children("."+n.params.slideClass+'[data-swiper-slide-index="'+V+'"]:not(.'+n.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){n.slideTo(I)},0)):n.slideTo(I):I>n.slides.length-W?(n.fixLoop(),I=n.wrapper.children("."+n.params.slideClass+'[data-swiper-slide-index="'+V+'"]:not(.'+n.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){n.slideTo(I)},0)):n.slideTo(I)}else n.slideTo(I)}};var D,R,M,A,z,G,Z,N,O="input, select, textarea, button, video",X=Date.now(),J,ne=[],Y;n.animating=!1,n.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var oe,ie;n.onTouchStart=function(p){if(p.originalEvent&&(p=p.originalEvent),oe=p.type==="touchstart",!(!oe&&"which"in p&&p.which===3)){if(n.params.noSwiping&&E(p,"."+n.params.noSwipingClass)){n.allowClick=!0;return}if(!(n.params.swipeHandler&&!E(p,n.params.swipeHandler))){var g=n.touches.currentX=p.type==="touchstart"?p.targetTouches[0].pageX:p.pageX,y=n.touches.currentY=p.type==="touchstart"?p.targetTouches[0].pageY:p.pageY;if(!(n.device.ios&&n.params.iOSEdgeSwipeDetection&&g<=n.params.iOSEdgeSwipeThreshold)){if(D=!0,R=!1,M=!0,z=void 0,ie=void 0,n.touches.startX=g,n.touches.startY=y,A=Date.now(),n.allowClick=!0,n.updateContainerSize(),n.swipeDirection=void 0,n.params.threshold>0&&(N=!1),p.type!=="touchstart"){var C=!0;e(p.target).is(O)&&(C=!1),document.activeElement&&e(document.activeElement).is(O)&&document.activeElement.blur(),C&&p.preventDefault()}n.emit("onTouchStart",n,p)}}}},n.onTouchMove=function(p){if(p.originalEvent&&(p=p.originalEvent),!(oe&&p.type==="mousemove")){if(p.preventedByNestedSwiper){n.touches.startX=p.type==="touchmove"?p.targetTouches[0].pageX:p.pageX,n.touches.startY=p.type==="touchmove"?p.targetTouches[0].pageY:p.pageY;return}if(n.params.onlyExternal){n.allowClick=!1,D&&(n.touches.startX=n.touches.currentX=p.type==="touchmove"?p.targetTouches[0].pageX:p.pageX,n.touches.startY=n.touches.currentY=p.type==="touchmove"?p.targetTouches[0].pageY:p.pageY,A=Date.now());return}if(oe&&n.params.touchReleaseOnEdges&&!n.params.loop){if(n.isHorizontal()){if(n.touches.currentX<n.touches.startX&&n.translate<=n.maxTranslate()||n.touches.currentX>n.touches.startX&&n.translate>=n.minTranslate())return}else if(n.touches.currentY<n.touches.startY&&n.translate<=n.maxTranslate()||n.touches.currentY>n.touches.startY&&n.translate>=n.minTranslate())return}if(oe&&document.activeElement&&p.target===document.activeElement&&e(p.target).is(O)){R=!0,n.allowClick=!1;return}if(M&&n.emit("onTouchMove",n,p),!(p.targetTouches&&p.targetTouches.length>1)){if(n.touches.currentX=p.type==="touchmove"?p.targetTouches[0].pageX:p.pageX,n.touches.currentY=p.type==="touchmove"?p.targetTouches[0].pageY:p.pageY,typeof z>"u"){var g;n.isHorizontal()&&n.touches.currentY===n.touches.startY||!n.isHorizontal()&&n.touches.currentX===n.touches.startX?z=!1:(g=Math.atan2(Math.abs(n.touches.currentY-n.touches.startY),Math.abs(n.touches.currentX-n.touches.startX))*180/Math.PI,z=n.isHorizontal()?g>n.params.touchAngle:90-g>n.params.touchAngle)}if(z&&n.emit("onTouchMoveOpposite",n,p),typeof ie>"u"&&(n.touches.currentX!==n.touches.startX||n.touches.currentY!==n.touches.startY)&&(ie=!0),!!D){if(z){D=!1;return}if(ie){n.allowClick=!1,n.emit("onSliderMove",n,p),p.preventDefault(),n.params.touchMoveStopPropagation&&!n.params.nested&&p.stopPropagation(),R||(u.loop&&n.fixLoop(),Z=n.getWrapperTranslate(),n.setWrapperTransition(0),n.animating&&n.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),n.params.autoplay&&n.autoplaying&&(n.params.autoplayDisableOnInteraction?n.stopAutoplay():n.pauseAutoplay()),Y=!1,n.params.grabCursor&&(n.params.allowSwipeToNext===!0||n.params.allowSwipeToPrev===!0)&&n.setGrabCursor(!0)),R=!0;var y=n.touches.diff=n.isHorizontal()?n.touches.currentX-n.touches.startX:n.touches.currentY-n.touches.startY;y=y*n.params.touchRatio,n.rtl&&(y=-y),n.swipeDirection=y>0?"prev":"next",G=y+Z;var C=!0;if(y>0&&G>n.minTranslate()?(C=!1,n.params.resistance&&(G=n.minTranslate()-1+Math.pow(-n.minTranslate()+Z+y,n.params.resistanceRatio))):y<0&&G<n.maxTranslate()&&(C=!1,n.params.resistance&&(G=n.maxTranslate()+1-Math.pow(n.maxTranslate()-Z-y,n.params.resistanceRatio))),C&&(p.preventedByNestedSwiper=!0),!n.params.allowSwipeToNext&&n.swipeDirection==="next"&&G<Z&&(G=Z),!n.params.allowSwipeToPrev&&n.swipeDirection==="prev"&&G>Z&&(G=Z),n.params.threshold>0)if(Math.abs(y)>n.params.threshold||N){if(!N){N=!0,n.touches.startX=n.touches.currentX,n.touches.startY=n.touches.currentY,G=Z,n.touches.diff=n.isHorizontal()?n.touches.currentX-n.touches.startX:n.touches.currentY-n.touches.startY;return}}else{G=Z;return}n.params.followFinger&&((n.params.freeMode||n.params.watchSlidesProgress)&&n.updateActiveIndex(),n.params.freeMode&&(ne.length===0&&ne.push({position:n.touches[n.isHorizontal()?"startX":"startY"],time:A}),ne.push({position:n.touches[n.isHorizontal()?"currentX":"currentY"],time:new window.Date().getTime()})),n.updateProgress(G),n.setWrapperTranslate(G))}}}}},n.onTouchEnd=function(p){if(p.originalEvent&&(p=p.originalEvent),M&&n.emit("onTouchEnd",n,p),M=!1,!!D){n.params.grabCursor&&R&&D&&(n.params.allowSwipeToNext===!0||n.params.allowSwipeToPrev===!0)&&n.setGrabCursor(!1);var g=Date.now(),y=g-A;if(n.allowClick&&(n.updateClickedSlide(p),n.emit("onTap",n,p),y<300&&g-X>300&&(J&&clearTimeout(J),J=setTimeout(function(){n&&(n.params.paginationHide&&n.paginationContainer.length>0&&!e(p.target).hasClass(n.params.bulletClass)&&n.paginationContainer.toggleClass(n.params.paginationHiddenClass),n.emit("onClick",n,p))},300)),y<300&&g-X<300&&(J&&clearTimeout(J),n.emit("onDoubleTap",n,p))),X=Date.now(),setTimeout(function(){n&&(n.allowClick=!0)},0),!D||!R||!n.swipeDirection||n.touches.diff===0||G===Z){D=R=!1;return}D=R=!1;var C;if(n.params.followFinger?C=n.rtl?n.translate:-n.translate:C=-G,n.params.freeMode){if(C<-n.minTranslate()){n.slideTo(n.activeIndex);return}else if(C>-n.maxTranslate()){n.slides.length<n.snapGrid.length?n.slideTo(n.snapGrid.length-1):n.slideTo(n.slides.length-1);return}if(n.params.freeModeMomentum){if(ne.length>1){var I=ne.pop(),V=ne.pop(),W=I.position-V.position,ae=I.time-V.time;n.velocity=W/ae,n.velocity=n.velocity/2,Math.abs(n.velocity)<n.params.freeModeMinimumVelocity&&(n.velocity=0),(ae>150||new window.Date().getTime()-I.time>300)&&(n.velocity=0)}else n.velocity=0;n.velocity=n.velocity*n.params.freeModeMomentumVelocityRatio,ne.length=0;var ye=1e3*n.params.freeModeMomentumRatio,pe=n.velocity*ye,_e=n.translate+pe;n.rtl&&(_e=-_e);var Pe=!1,P,b=Math.abs(n.velocity)*20*n.params.freeModeMomentumBounceRatio;if(_e<n.maxTranslate())n.params.freeModeMomentumBounce?(_e+n.maxTranslate()<-b&&(_e=n.maxTranslate()-b),P=n.maxTranslate(),Pe=!0,Y=!0):_e=n.maxTranslate();else if(_e>n.minTranslate())n.params.freeModeMomentumBounce?(_e-n.minTranslate()>b&&(_e=n.minTranslate()+b),P=n.minTranslate(),Pe=!0,Y=!0):_e=n.minTranslate();else if(n.params.freeModeSticky){var H=0,se;for(H=0;H<n.snapGrid.length;H+=1)if(n.snapGrid[H]>-_e){se=H;break}Math.abs(n.snapGrid[se]-_e)<Math.abs(n.snapGrid[se-1]-_e)||n.swipeDirection==="next"?_e=n.snapGrid[se]:_e=n.snapGrid[se-1],n.rtl||(_e=-_e)}if(n.velocity!==0)n.rtl?ye=Math.abs((-_e-n.translate)/n.velocity):ye=Math.abs((_e-n.translate)/n.velocity);else if(n.params.freeModeSticky){n.slideReset();return}n.params.freeModeMomentumBounce&&Pe?(n.updateProgress(P),n.setWrapperTransition(ye),n.setWrapperTranslate(_e),n.onTransitionStart(),n.animating=!0,n.wrapper.transitionEnd(function(){!n||!Y||(n.emit("onMomentumBounce",n),n.setWrapperTransition(n.params.speed),n.setWrapperTranslate(P),n.wrapper.transitionEnd(function(){n&&n.onTransitionEnd()}))})):n.velocity?(n.updateProgress(_e),n.setWrapperTransition(ye),n.setWrapperTranslate(_e),n.onTransitionStart(),n.animating||(n.animating=!0,n.wrapper.transitionEnd(function(){n&&n.onTransitionEnd()}))):n.updateProgress(_e),n.updateActiveIndex()}(!n.params.freeModeMomentum||y>=n.params.longSwipesMs)&&(n.updateProgress(),n.updateActiveIndex());return}var re,ue=0,Me=n.slidesSizesGrid[0];for(re=0;re<n.slidesGrid.length;re+=n.params.slidesPerGroup)typeof n.slidesGrid[re+n.params.slidesPerGroup]<"u"?C>=n.slidesGrid[re]&&C<n.slidesGrid[re+n.params.slidesPerGroup]&&(ue=re,Me=n.slidesGrid[re+n.params.slidesPerGroup]-n.slidesGrid[re]):C>=n.slidesGrid[re]&&(ue=re,Me=n.slidesGrid[n.slidesGrid.length-1]-n.slidesGrid[n.slidesGrid.length-2]);var me=(C-n.slidesGrid[ue])/Me;if(y>n.params.longSwipesMs){if(!n.params.longSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&(me>=n.params.longSwipesRatio?n.slideTo(ue+n.params.slidesPerGroup):n.slideTo(ue)),n.swipeDirection==="prev"&&(me>1-n.params.longSwipesRatio?n.slideTo(ue+n.params.slidesPerGroup):n.slideTo(ue))}else{if(!n.params.shortSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&n.slideTo(ue+n.params.slidesPerGroup),n.swipeDirection==="prev"&&n.slideTo(ue)}}},n._slideTo=function(p,g){return n.slideTo(p,g,!0,!0)},n.slideTo=function(p,g,y,C){typeof y>"u"&&(y=!0),typeof p>"u"&&(p=0),p<0&&(p=0),n.snapIndex=Math.floor(p/n.params.slidesPerGroup),n.snapIndex>=n.snapGrid.length&&(n.snapIndex=n.snapGrid.length-1);var I=-n.snapGrid[n.snapIndex];if(n.params.autoplay&&n.autoplaying&&(C||!n.params.autoplayDisableOnInteraction?n.pauseAutoplay(g):n.stopAutoplay()),n.updateProgress(I),n.params.normalizeSlideIndex)for(var V=0;V<n.slidesGrid.length;V++)-Math.floor(I*100)>=Math.floor(n.slidesGrid[V]*100)&&(p=V);return!n.params.allowSwipeToNext&&I<n.translate&&I<n.minTranslate()||!n.params.allowSwipeToPrev&&I>n.translate&&I>n.maxTranslate()&&(n.activeIndex||0)!==p?!1:(typeof g>"u"&&(g=n.params.speed),n.previousIndex=n.activeIndex||0,n.activeIndex=p,n.updateRealIndex(),n.rtl&&-I===n.translate||!n.rtl&&I===n.translate?(n.params.autoHeight&&n.updateAutoHeight(),n.updateClasses(),n.params.effect!=="slide"&&n.setWrapperTranslate(I),!1):(n.updateClasses(),n.onTransitionStart(y),g===0||n.browser.lteIE9?(n.setWrapperTranslate(I),n.setWrapperTransition(0),n.onTransitionEnd(y)):(n.setWrapperTranslate(I),n.setWrapperTransition(g),n.animating||(n.animating=!0,n.wrapper.transitionEnd(function(){n&&n.onTransitionEnd(y)}))),!0))},n.onTransitionStart=function(p){typeof p>"u"&&(p=!0),n.params.autoHeight&&n.updateAutoHeight(),n.lazy&&n.lazy.onTransitionStart(),p&&(n.emit("onTransitionStart",n),n.activeIndex!==n.previousIndex&&(n.emit("onSlideChangeStart",n),n.activeIndex>n.previousIndex?n.emit("onSlideNextStart",n):n.emit("onSlidePrevStart",n)))},n.onTransitionEnd=function(p){n.animating=!1,n.setWrapperTransition(0),typeof p>"u"&&(p=!0),n.lazy&&n.lazy.onTransitionEnd(),p&&(n.emit("onTransitionEnd",n),n.activeIndex!==n.previousIndex&&(n.emit("onSlideChangeEnd",n),n.activeIndex>n.previousIndex?n.emit("onSlideNextEnd",n):n.emit("onSlidePrevEnd",n))),n.params.history&&n.history&&n.history.setHistory(n.params.history,n.activeIndex),n.params.hashnav&&n.hashnav&&n.hashnav.setHash()},n.slideNext=function(p,g,y){return n.params.loop?n.animating?!1:(n.fixLoop(),n.container[0].clientLeft,n.slideTo(n.activeIndex+n.params.slidesPerGroup,g,p,y)):n.slideTo(n.activeIndex+n.params.slidesPerGroup,g,p,y)},n._slideNext=function(p){return n.slideNext(!0,p,!0)},n.slidePrev=function(p,g,y){return n.params.loop?n.animating?!1:(n.fixLoop(),n.container[0].clientLeft,n.slideTo(n.activeIndex-1,g,p,y)):n.slideTo(n.activeIndex-1,g,p,y)},n._slidePrev=function(p){return n.slidePrev(!0,p,!0)},n.slideReset=function(p,g,y){return n.slideTo(n.activeIndex,g,p)},n.disableTouchControl=function(){return n.params.onlyExternal=!0,!0},n.enableTouchControl=function(){return n.params.onlyExternal=!1,!0},n.setWrapperTransition=function(p,g){n.wrapper.transition(p),n.params.effect!=="slide"&&n.effects[n.params.effect]&&n.effects[n.params.effect].setTransition(p),n.params.parallax&&n.parallax&&n.parallax.setTransition(p),n.params.scrollbar&&n.scrollbar&&n.scrollbar.setTransition(p),n.params.control&&n.controller&&n.controller.setTransition(p,g),n.emit("onSetTransition",n,p)},n.setWrapperTranslate=function(p,g,y){var C=0,I=0,V=0;n.isHorizontal()?C=n.rtl?-p:p:I=p,n.params.roundLengths&&(C=w(C),I=w(I)),n.params.virtualTranslate||(n.support.transforms3d?n.wrapper.transform("translate3d("+C+"px, "+I+"px, "+V+"px)"):n.wrapper.transform("translate("+C+"px, "+I+"px)")),n.translate=n.isHorizontal()?C:I;var W,ae=n.maxTranslate()-n.minTranslate();ae===0?W=0:W=(p-n.minTranslate())/ae,W!==n.progress&&n.updateProgress(p),g&&n.updateActiveIndex(),n.params.effect!=="slide"&&n.effects[n.params.effect]&&n.effects[n.params.effect].setTranslate(n.translate),n.params.parallax&&n.parallax&&n.parallax.setTranslate(n.translate),n.params.scrollbar&&n.scrollbar&&n.scrollbar.setTranslate(n.translate),n.params.control&&n.controller&&n.controller.setTranslate(n.translate,y),n.emit("onSetTranslate",n,n.translate)},n.getTranslate=function(p,g){var y,C,I,V;return typeof g>"u"&&(g="x"),n.params.virtualTranslate?n.rtl?-n.translate:n.translate:(I=window.getComputedStyle(p,null),window.WebKitCSSMatrix?(C=I.transform||I.webkitTransform,C.split(",").length>6&&(C=C.split(", ").map(function(W){return W.replace(",",".")}).join(", ")),V=new window.WebKitCSSMatrix(C==="none"?"":C)):(V=I.MozTransform||I.OTransform||I.MsTransform||I.msTransform||I.transform||I.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),y=V.toString().split(",")),g==="x"&&(window.WebKitCSSMatrix?C=V.m41:y.length===16?C=parseFloat(y[12]):C=parseFloat(y[4])),g==="y"&&(window.WebKitCSSMatrix?C=V.m42:y.length===16?C=parseFloat(y[13]):C=parseFloat(y[5])),n.rtl&&C&&(C=-C),C||0)},n.getWrapperTranslate=function(p){return typeof p>"u"&&(p=n.isHorizontal()?"x":"y"),n.getTranslate(n.wrapper[0],p)},n.observers=[];function j(p,g){g=g||{};var y=window.MutationObserver||window.WebkitMutationObserver,C=new y(function(I){I.forEach(function(V){n.onResize(!0),n.emit("onObserverUpdate",n,V)})});C.observe(p,{attributes:typeof g.attributes>"u"?!0:g.attributes,childList:typeof g.childList>"u"?!0:g.childList,characterData:typeof g.characterData>"u"?!0:g.characterData}),n.observers.push(C)}n.initObservers=function(){if(n.params.observeParents)for(var p=n.container.parents(),g=0;g<p.length;g++)j(p[g]);j(n.container[0],{childList:!1}),j(n.wrapper[0],{attributes:!1})},n.disconnectObservers=function(){for(var p=0;p<n.observers.length;p++)n.observers[p].disconnect();n.observers=[]},n.createLoop=function(){n.wrapper.children("."+n.params.slideClass+"."+n.params.slideDuplicateClass).remove();var p=n.wrapper.children("."+n.params.slideClass);n.params.slidesPerView==="auto"&&!n.params.loopedSlides&&(n.params.loopedSlides=p.length),n.loopedSlides=parseInt(n.params.loopedSlides||n.params.slidesPerView,10),n.loopedSlides=n.loopedSlides+n.params.loopAdditionalSlides,n.loopedSlides>p.length&&(n.loopedSlides=p.length);var g=[],y=[],C;for(p.each(function(I,V){var W=e(this);I<n.loopedSlides&&y.push(V),I<p.length&&I>=p.length-n.loopedSlides&&g.push(V),W.attr("data-swiper-slide-index",I)}),C=0;C<y.length;C++)n.wrapper.append(e(y[C].cloneNode(!0)).addClass(n.params.slideDuplicateClass));for(C=g.length-1;C>=0;C--)n.wrapper.prepend(e(g[C].cloneNode(!0)).addClass(n.params.slideDuplicateClass))},n.destroyLoop=function(){n.wrapper.children("."+n.params.slideClass+"."+n.params.slideDuplicateClass).remove(),n.slides.removeAttr("data-swiper-slide-index")},n.reLoop=function(p){var g=n.activeIndex-n.loopedSlides;n.destroyLoop(),n.createLoop(),n.updateSlidesSize(),p&&n.slideTo(g+n.loopedSlides,0,!1)},n.fixLoop=function(){var p;n.activeIndex<n.loopedSlides?(p=n.slides.length-n.loopedSlides*3+n.activeIndex,p=p+n.loopedSlides,n.slideTo(p,0,!1,!0)):(n.params.slidesPerView==="auto"&&n.activeIndex>=n.loopedSlides*2||n.activeIndex>n.slides.length-n.params.slidesPerView*2)&&(p=-n.slides.length+n.activeIndex+n.loopedSlides,p=p+n.loopedSlides,n.slideTo(p,0,!1,!0))},n.appendSlide=function(p){if(n.params.loop&&n.destroyLoop(),typeof p=="object"&&p.length)for(var g=0;g<p.length;g++)p[g]&&n.wrapper.append(p[g]);else n.wrapper.append(p);n.params.loop&&n.createLoop(),n.params.observer&&n.support.observer||n.update(!0)},n.prependSlide=function(p){n.params.loop&&n.destroyLoop();var g=n.activeIndex+1;if(typeof p=="object"&&p.length){for(var y=0;y<p.length;y++)p[y]&&n.wrapper.prepend(p[y]);g=n.activeIndex+p.length}else n.wrapper.prepend(p);n.params.loop&&n.createLoop(),n.params.observer&&n.support.observer||n.update(!0),n.slideTo(g,0,!1)},n.removeSlide=function(p){n.params.loop&&(n.destroyLoop(),n.slides=n.wrapper.children("."+n.params.slideClass));var g=n.activeIndex,y;if(typeof p=="object"&&p.length){for(var C=0;C<p.length;C++)y=p[C],n.slides[y]&&n.slides.eq(y).remove(),y<g&&g--;g=Math.max(g,0)}else y=p,n.slides[y]&&n.slides.eq(y).remove(),y<g&&g--,g=Math.max(g,0);n.params.loop&&n.createLoop(),n.params.observer&&n.support.observer||n.update(!0),n.params.loop?n.slideTo(g+n.loopedSlides,0,!1):n.slideTo(g,0,!1)},n.removeAllSlides=function(){for(var p=[],g=0;g<n.slides.length;g++)p.push(g);n.removeSlide(p)},n.effects={fade:{setTranslate:function(){for(var p=0;p<n.slides.length;p++){var g=n.slides.eq(p),y=g[0].swiperSlideOffset,C=-y;n.params.virtualTranslate||(C=C-n.translate);var I=0;n.isHorizontal()||(I=C,C=0);var V=n.params.fade.crossFade?Math.max(1-Math.abs(g[0].progress),0):1+Math.min(Math.max(g[0].progress,-1),0);g.css({opacity:V}).transform("translate3d("+C+"px, "+I+"px, 0px)")}},setTransition:function(p){if(n.slides.transition(p),n.params.virtualTranslate&&p!==0){var g=!1;n.slides.transitionEnd(function(){if(!g&&n){g=!0,n.animating=!1;for(var y=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],C=0;C<y.length;C++)n.wrapper.trigger(y[C])}})}}},flip:{setTranslate:function(){for(var p=0;p<n.slides.length;p++){var g=n.slides.eq(p),y=g[0].progress;n.params.flip.limitRotation&&(y=Math.max(Math.min(g[0].progress,1),-1));var C=g[0].swiperSlideOffset,I=-180*y,V=I,W=0,ae=-C,ye=0;if(n.isHorizontal()?n.rtl&&(V=-V):(ye=ae,ae=0,W=-V,V=0),g[0].style.zIndex=-Math.abs(Math.round(y))+n.slides.length,n.params.flip.slideShadows){var pe=n.isHorizontal()?g.find(".swiper-slide-shadow-left"):g.find(".swiper-slide-shadow-top"),_e=n.isHorizontal()?g.find(".swiper-slide-shadow-right"):g.find(".swiper-slide-shadow-bottom");pe.length===0&&(pe=e('<div class="swiper-slide-shadow-'+(n.isHorizontal()?"left":"top")+'"></div>'),g.append(pe)),_e.length===0&&(_e=e('<div class="swiper-slide-shadow-'+(n.isHorizontal()?"right":"bottom")+'"></div>'),g.append(_e)),pe.length&&(pe[0].style.opacity=Math.max(-y,0)),_e.length&&(_e[0].style.opacity=Math.max(y,0))}g.transform("translate3d("+ae+"px, "+ye+"px, 0px) rotateX("+W+"deg) rotateY("+V+"deg)")}},setTransition:function(p){if(n.slides.transition(p).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(p),n.params.virtualTranslate&&p!==0){var g=!1;n.slides.eq(n.activeIndex).transitionEnd(function(){if(!g&&n&&e(this).hasClass(n.params.slideActiveClass)){g=!0,n.animating=!1;for(var y=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],C=0;C<y.length;C++)n.wrapper.trigger(y[C])}})}}},cube:{setTranslate:function(){var p=0,g;n.params.cube.shadow&&(n.isHorizontal()?(g=n.wrapper.find(".swiper-cube-shadow"),g.length===0&&(g=e('<div class="swiper-cube-shadow"></div>'),n.wrapper.append(g)),g.css({height:n.width+"px"})):(g=n.container.find(".swiper-cube-shadow"),g.length===0&&(g=e('<div class="swiper-cube-shadow"></div>'),n.container.append(g))));for(var y=0;y<n.slides.length;y++){var C=n.slides.eq(y),I=y*90,V=Math.floor(I/360);n.rtl&&(I=-I,V=Math.floor(-I/360));var W=Math.max(Math.min(C[0].progress,1),-1),ae=0,ye=0,pe=0;y%4===0?(ae=-V*4*n.size,pe=0):(y-1)%4===0?(ae=0,pe=-V*4*n.size):(y-2)%4===0?(ae=n.size+V*4*n.size,pe=n.size):(y-3)%4===0&&(ae=-n.size,pe=3*n.size+n.size*4*V),n.rtl&&(ae=-ae),n.isHorizontal()||(ye=ae,ae=0);var _e="rotateX("+(n.isHorizontal()?0:-I)+"deg) rotateY("+(n.isHorizontal()?I:0)+"deg) translate3d("+ae+"px, "+ye+"px, "+pe+"px)";if(W<=1&&W>-1&&(p=y*90+W*90,n.rtl&&(p=-y*90-W*90)),C.transform(_e),n.params.cube.slideShadows){var Pe=n.isHorizontal()?C.find(".swiper-slide-shadow-left"):C.find(".swiper-slide-shadow-top"),P=n.isHorizontal()?C.find(".swiper-slide-shadow-right"):C.find(".swiper-slide-shadow-bottom");Pe.length===0&&(Pe=e('<div class="swiper-slide-shadow-'+(n.isHorizontal()?"left":"top")+'"></div>'),C.append(Pe)),P.length===0&&(P=e('<div class="swiper-slide-shadow-'+(n.isHorizontal()?"right":"bottom")+'"></div>'),C.append(P)),Pe.length&&(Pe[0].style.opacity=Math.max(-W,0)),P.length&&(P[0].style.opacity=Math.max(W,0))}}if(n.wrapper.css({"-webkit-transform-origin":"50% 50% -"+n.size/2+"px","-moz-transform-origin":"50% 50% -"+n.size/2+"px","-ms-transform-origin":"50% 50% -"+n.size/2+"px","transform-origin":"50% 50% -"+n.size/2+"px"}),n.params.cube.shadow)if(n.isHorizontal())g.transform("translate3d(0px, "+(n.width/2+n.params.cube.shadowOffset)+"px, "+-n.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+n.params.cube.shadowScale+")");else{var b=Math.abs(p)-Math.floor(Math.abs(p)/90)*90,H=1.5-(Math.sin(b*2*Math.PI/360)/2+Math.cos(b*2*Math.PI/360)/2),se=n.params.cube.shadowScale,re=n.params.cube.shadowScale/H,ue=n.params.cube.shadowOffset;g.transform("scale3d("+se+", 1, "+re+") translate3d(0px, "+(n.height/2+ue)+"px, "+-n.height/2/re+"px) rotateX(-90deg)")}var Me=n.isSafari||n.isUiWebView?-n.size/2:0;n.wrapper.transform("translate3d(0px,0,"+Me+"px) rotateX("+(n.isHorizontal()?0:p)+"deg) rotateY("+(n.isHorizontal()?-p:0)+"deg)")},setTransition:function(p){n.slides.transition(p).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(p),n.params.cube.shadow&&!n.isHorizontal()&&n.container.find(".swiper-cube-shadow").transition(p)}},coverflow:{setTranslate:function(){for(var p=n.translate,g=n.isHorizontal()?-p+n.width/2:-p+n.height/2,y=n.isHorizontal()?n.params.coverflow.rotate:-n.params.coverflow.rotate,C=n.params.coverflow.depth,I=0,V=n.slides.length;I<V;I++){var W=n.slides.eq(I),ae=n.slidesSizesGrid[I],ye=W[0].swiperSlideOffset,pe=(g-ye-ae/2)/ae*n.params.coverflow.modifier,_e=n.isHorizontal()?y*pe:0,Pe=n.isHorizontal()?0:y*pe,P=-C*Math.abs(pe),b=n.isHorizontal()?0:n.params.coverflow.stretch*pe,H=n.isHorizontal()?n.params.coverflow.stretch*pe:0;Math.abs(H)<.001&&(H=0),Math.abs(b)<.001&&(b=0),Math.abs(P)<.001&&(P=0),Math.abs(_e)<.001&&(_e=0),Math.abs(Pe)<.001&&(Pe=0);var se="translate3d("+H+"px,"+b+"px,"+P+"px)  rotateX("+Pe+"deg) rotateY("+_e+"deg)";if(W.transform(se),W[0].style.zIndex=-Math.abs(Math.round(pe))+1,n.params.coverflow.slideShadows){var re=n.isHorizontal()?W.find(".swiper-slide-shadow-left"):W.find(".swiper-slide-shadow-top"),ue=n.isHorizontal()?W.find(".swiper-slide-shadow-right"):W.find(".swiper-slide-shadow-bottom");re.length===0&&(re=e('<div class="swiper-slide-shadow-'+(n.isHorizontal()?"left":"top")+'"></div>'),W.append(re)),ue.length===0&&(ue=e('<div class="swiper-slide-shadow-'+(n.isHorizontal()?"right":"bottom")+'"></div>'),W.append(ue)),re.length&&(re[0].style.opacity=pe>0?pe:0),ue.length&&(ue[0].style.opacity=-pe>0?-pe:0)}}if(n.browser.ie){var Me=n.wrapper[0].style;Me.perspectiveOrigin=g+"px 50%"}},setTransition:function(p){n.slides.transition(p).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(p)}}},n.lazy={initialImageLoaded:!1,loadImageInSlide:function(p,g){if(!(typeof p>"u")&&(typeof g>"u"&&(g=!0),n.slides.length!==0)){var y=n.slides.eq(p),C=y.find("."+n.params.lazyLoadingClass+":not(."+n.params.lazyStatusLoadedClass+"):not(."+n.params.lazyStatusLoadingClass+")");y.hasClass(n.params.lazyLoadingClass)&&!y.hasClass(n.params.lazyStatusLoadedClass)&&!y.hasClass(n.params.lazyStatusLoadingClass)&&(C=C.add(y[0])),C.length!==0&&C.each(function(){var I=e(this);I.addClass(n.params.lazyStatusLoadingClass);var V=I.attr("data-background"),W=I.attr("data-src"),ae=I.attr("data-srcset"),ye=I.attr("data-sizes");n.loadImage(I[0],W||V,ae,ye,!1,function(){if(!(typeof n>"u"||n===null||!n)){if(V?(I.css("background-image",'url("'+V+'")'),I.removeAttr("data-background")):(ae&&(I.attr("srcset",ae),I.removeAttr("data-srcset")),ye&&(I.attr("sizes",ye),I.removeAttr("data-sizes")),W&&(I.attr("src",W),I.removeAttr("data-src"))),I.addClass(n.params.lazyStatusLoadedClass).removeClass(n.params.lazyStatusLoadingClass),y.find("."+n.params.lazyPreloaderClass+", ."+n.params.preloaderClass).remove(),n.params.loop&&g){var pe=y.attr("data-swiper-slide-index");if(y.hasClass(n.params.slideDuplicateClass)){var _e=n.wrapper.children('[data-swiper-slide-index="'+pe+'"]:not(.'+n.params.slideDuplicateClass+")");n.lazy.loadImageInSlide(_e.index(),!1)}else{var Pe=n.wrapper.children("."+n.params.slideDuplicateClass+'[data-swiper-slide-index="'+pe+'"]');n.lazy.loadImageInSlide(Pe.index(),!1)}}n.emit("onLazyImageReady",n,y[0],I[0])}}),n.emit("onLazyImageLoad",n,y[0],I[0])})}},load:function(){var p,g=n.params.slidesPerView;if(g==="auto"&&(g=0),n.lazy.initialImageLoaded||(n.lazy.initialImageLoaded=!0),n.params.watchSlidesVisibility)n.wrapper.children("."+n.params.slideVisibleClass).each(function(){n.lazy.loadImageInSlide(e(this).index())});else if(g>1)for(p=n.activeIndex;p<n.activeIndex+g;p++)n.slides[p]&&n.lazy.loadImageInSlide(p);else n.lazy.loadImageInSlide(n.activeIndex);if(n.params.lazyLoadingInPrevNext)if(g>1||n.params.lazyLoadingInPrevNextAmount&&n.params.lazyLoadingInPrevNextAmount>1){var y=n.params.lazyLoadingInPrevNextAmount,C=g,I=Math.min(n.activeIndex+C+Math.max(y,C),n.slides.length),V=Math.max(n.activeIndex-Math.max(C,y),0);for(p=n.activeIndex+g;p<I;p++)n.slides[p]&&n.lazy.loadImageInSlide(p);for(p=V;p<n.activeIndex;p++)n.slides[p]&&n.lazy.loadImageInSlide(p)}else{var W=n.wrapper.children("."+n.params.slideNextClass);W.length>0&&n.lazy.loadImageInSlide(W.index());var ae=n.wrapper.children("."+n.params.slidePrevClass);ae.length>0&&n.lazy.loadImageInSlide(ae.index())}},onTransitionStart:function(){n.params.lazyLoading&&(n.params.lazyLoadingOnTransitionStart||!n.params.lazyLoadingOnTransitionStart&&!n.lazy.initialImageLoaded)&&n.lazy.load()},onTransitionEnd:function(){n.params.lazyLoading&&!n.params.lazyLoadingOnTransitionStart&&n.lazy.load()}},n.scrollbar={isTouched:!1,setDragPosition:function(p){var g=n.scrollbar,y=n.isHorizontal()?p.type==="touchstart"||p.type==="touchmove"?p.targetTouches[0].pageX:p.pageX||p.clientX:p.type==="touchstart"||p.type==="touchmove"?p.targetTouches[0].pageY:p.pageY||p.clientY,C=y-g.track.offset()[n.isHorizontal()?"left":"top"]-g.dragSize/2,I=-n.minTranslate()*g.moveDivider,V=-n.maxTranslate()*g.moveDivider;C<I?C=I:C>V&&(C=V),C=-C/g.moveDivider,n.updateProgress(C),n.setWrapperTranslate(C,!0)},dragStart:function(p){var g=n.scrollbar;g.isTouched=!0,p.preventDefault(),p.stopPropagation(),g.setDragPosition(p),clearTimeout(g.dragTimeout),g.track.transition(0),n.params.scrollbarHide&&g.track.css("opacity",1),n.wrapper.transition(100),g.drag.transition(100),n.emit("onScrollbarDragStart",n)},dragMove:function(p){var g=n.scrollbar;g.isTouched&&(p.preventDefault?p.preventDefault():p.returnValue=!1,g.setDragPosition(p),n.wrapper.transition(0),g.track.transition(0),g.drag.transition(0),n.emit("onScrollbarDragMove",n))},dragEnd:function(p){var g=n.scrollbar;g.isTouched&&(g.isTouched=!1,n.params.scrollbarHide&&(clearTimeout(g.dragTimeout),g.dragTimeout=setTimeout(function(){g.track.css("opacity",0),g.track.transition(400)},1e3)),n.emit("onScrollbarDragEnd",n),n.params.scrollbarSnapOnRelease&&n.slideReset())},draggableEvents:function(){return n.params.simulateTouch===!1&&!n.support.touch?n.touchEventsDesktop:n.touchEvents}(),enableDraggable:function(){var p=n.scrollbar,g=n.support.touch?p.track:document;e(p.track).on(p.draggableEvents.start,p.dragStart),e(g).on(p.draggableEvents.move,p.dragMove),e(g).on(p.draggableEvents.end,p.dragEnd)},disableDraggable:function(){var p=n.scrollbar,g=n.support.touch?p.track:document;e(p.track).off(p.draggableEvents.start,p.dragStart),e(g).off(p.draggableEvents.move,p.dragMove),e(g).off(p.draggableEvents.end,p.dragEnd)},set:function(){if(n.params.scrollbar){var p=n.scrollbar;p.track=e(n.params.scrollbar),n.params.uniqueNavElements&&typeof n.params.scrollbar=="string"&&p.track.length>1&&n.container.find(n.params.scrollbar).length===1&&(p.track=n.container.find(n.params.scrollbar)),p.drag=p.track.find(".swiper-scrollbar-drag"),p.drag.length===0&&(p.drag=e('<div class="swiper-scrollbar-drag"></div>'),p.track.append(p.drag)),p.drag[0].style.width="",p.drag[0].style.height="",p.trackSize=n.isHorizontal()?p.track[0].offsetWidth:p.track[0].offsetHeight,p.divider=n.size/n.virtualSize,p.moveDivider=p.divider*(p.trackSize/n.size),p.dragSize=p.trackSize*p.divider,n.isHorizontal()?p.drag[0].style.width=p.dragSize+"px":p.drag[0].style.height=p.dragSize+"px",p.divider>=1?p.track[0].style.display="none":p.track[0].style.display="",n.params.scrollbarHide&&(p.track[0].style.opacity=0)}},setTranslate:function(){if(n.params.scrollbar){var p=n.scrollbar;n.translate;var g,y=p.dragSize;g=(p.trackSize-p.dragSize)*n.progress,n.rtl&&n.isHorizontal()?(g=-g,g>0?(y=p.dragSize-g,g=0):-g+p.dragSize>p.trackSize&&(y=p.trackSize+g)):g<0?(y=p.dragSize+g,g=0):g+p.dragSize>p.trackSize&&(y=p.trackSize-g),n.isHorizontal()?(n.support.transforms3d?p.drag.transform("translate3d("+g+"px, 0, 0)"):p.drag.transform("translateX("+g+"px)"),p.drag[0].style.width=y+"px"):(n.support.transforms3d?p.drag.transform("translate3d(0px, "+g+"px, 0)"):p.drag.transform("translateY("+g+"px)"),p.drag[0].style.height=y+"px"),n.params.scrollbarHide&&(clearTimeout(p.timeout),p.track[0].style.opacity=1,p.timeout=setTimeout(function(){p.track[0].style.opacity=0,p.track.transition(400)},1e3))}},setTransition:function(p){n.params.scrollbar&&n.scrollbar.drag.transition(p)}},n.controller={LinearSpline:function(p,g){var y=function(){var V,W,ae;return function(ye,pe){for(W=-1,V=ye.length;V-W>1;)ye[ae=V+W>>1]<=pe?W=ae:V=ae;return V}}();this.x=p,this.y=g,this.lastIndex=p.length-1;var C,I;this.x.length,this.interpolate=function(V){return V?(I=y(this.x,V),C=I-1,(V-this.x[C])*(this.y[I]-this.y[C])/(this.x[I]-this.x[C])+this.y[C]):0}},getInterpolateFunction:function(p){n.controller.spline||(n.controller.spline=n.params.loop?new n.controller.LinearSpline(n.slidesGrid,p.slidesGrid):new n.controller.LinearSpline(n.snapGrid,p.snapGrid))},setTranslate:function(p,g){var y=n.params.control,C,I;function V(ae){p=ae.rtl&&ae.params.direction==="horizontal"?-n.translate:n.translate,n.params.controlBy==="slide"&&(n.controller.getInterpolateFunction(ae),I=-n.controller.spline.interpolate(-p)),(!I||n.params.controlBy==="container")&&(C=(ae.maxTranslate()-ae.minTranslate())/(n.maxTranslate()-n.minTranslate()),I=(p-n.minTranslate())*C+ae.minTranslate()),n.params.controlInverse&&(I=ae.maxTranslate()-I),ae.updateProgress(I),ae.setWrapperTranslate(I,!1,n),ae.updateActiveIndex()}if(Array.isArray(y))for(var W=0;W<y.length;W++)y[W]!==g&&y[W]instanceof t&&V(y[W]);else y instanceof t&&g!==y&&V(y)},setTransition:function(p,g){var y=n.params.control,C;function I(V){V.setWrapperTransition(p,n),p!==0&&(V.onTransitionStart(),V.wrapper.transitionEnd(function(){y&&(V.params.loop&&n.params.controlBy==="slide"&&V.fixLoop(),V.onTransitionEnd())}))}if(Array.isArray(y))for(C=0;C<y.length;C++)y[C]!==g&&y[C]instanceof t&&I(y[C]);else y instanceof t&&g!==y&&I(y)}},n.hashnav={onHashCange:function(p,g){var y=document.location.hash.replace("#",""),C=n.slides.eq(n.activeIndex).attr("data-hash");y!==C&&n.slideTo(n.wrapper.children("."+n.params.slideClass+'[data-hash="'+y+'"]').index())},attachEvents:function(p){var g=p?"off":"on";e(window)[g]("hashchange",n.hashnav.onHashCange)},setHash:function(){if(!(!n.hashnav.initialized||!n.params.hashnav))if(n.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+n.slides.eq(n.activeIndex).attr("data-hash")||"");else{var p=n.slides.eq(n.activeIndex),g=p.attr("data-hash")||p.attr("data-history");document.location.hash=g||""}},init:function(){if(!(!n.params.hashnav||n.params.history)){n.hashnav.initialized=!0;var p=document.location.hash.replace("#","");if(p)for(var g=0,y=0,C=n.slides.length;y<C;y++){var I=n.slides.eq(y),V=I.attr("data-hash")||I.attr("data-history");if(V===p&&!I.hasClass(n.params.slideDuplicateClass)){var W=I.index();n.slideTo(W,g,n.params.runCallbacksOnInit,!0)}}n.params.hashnavWatchState&&n.hashnav.attachEvents()}},destroy:function(){n.params.hashnavWatchState&&n.hashnav.attachEvents(!0)}},n.history={init:function(){if(n.params.history){if(!window.history||!window.history.pushState){n.params.history=!1,n.params.hashnav=!0;return}n.history.initialized=!0,this.paths=this.getPathValues(),!(!this.paths.key&&!this.paths.value)&&(this.scrollToSlide(0,this.paths.value,n.params.runCallbacksOnInit),n.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){n.history.paths=n.history.getPathValues(),n.history.scrollToSlide(n.params.speed,n.history.paths.value,!1)},getPathValues:function(){var p=window.location.pathname.slice(1).split("/"),g=p.length,y=p[g-2],C=p[g-1];return{key:y,value:C}},setHistory:function(p,g){if(!(!n.history.initialized||!n.params.history)){var y=n.slides.eq(g),C=this.slugify(y.attr("data-history"));window.location.pathname.includes(p)||(C=p+"/"+C),n.params.replaceState?window.history.replaceState(null,null,C):window.history.pushState(null,null,C)}},slugify:function(p){return p.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(p,g,y){if(g)for(var C=0,I=n.slides.length;C<I;C++){var V=n.slides.eq(C),W=this.slugify(V.attr("data-history"));if(W===g&&!V.hasClass(n.params.slideDuplicateClass)){var ae=V.index();n.slideTo(ae,p,y)}}else n.slideTo(0,p,y)}};function q(p){p.originalEvent&&(p=p.originalEvent);var g=p.keyCode||p.charCode;if(!n.params.allowSwipeToNext&&(n.isHorizontal()&&g===39||!n.isHorizontal()&&g===40)||!n.params.allowSwipeToPrev&&(n.isHorizontal()&&g===37||!n.isHorizontal()&&g===38))return!1;if(!(p.shiftKey||p.altKey||p.ctrlKey||p.metaKey)&&!(document.activeElement&&document.activeElement.nodeName&&(document.activeElement.nodeName.toLowerCase()==="input"||document.activeElement.nodeName.toLowerCase()==="textarea"))){if(g===37||g===39||g===38||g===40){var y=!1;if(n.container.parents("."+n.params.slideClass).length>0&&n.container.parents("."+n.params.slideActiveClass).length===0)return;var C={left:window.pageXOffset,top:window.pageYOffset},I=window.innerWidth,V=window.innerHeight,W=n.container.offset();n.rtl&&(W.left=W.left-n.container[0].scrollLeft);for(var ae=[[W.left,W.top],[W.left+n.width,W.top],[W.left,W.top+n.height],[W.left+n.width,W.top+n.height]],ye=0;ye<ae.length;ye++){var pe=ae[ye];pe[0]>=C.left&&pe[0]<=C.left+I&&pe[1]>=C.top&&pe[1]<=C.top+V&&(y=!0)}if(!y)return}n.isHorizontal()?((g===37||g===39)&&(p.preventDefault?p.preventDefault():p.returnValue=!1),(g===39&&!n.rtl||g===37&&n.rtl)&&n.slideNext(),(g===37&&!n.rtl||g===39&&n.rtl)&&n.slidePrev()):((g===38||g===40)&&(p.preventDefault?p.preventDefault():p.returnValue=!1),g===40&&n.slideNext(),g===38&&n.slidePrev()),n.emit("onKeyPress",n,g)}}n.disableKeyboardControl=function(){n.params.keyboardControl=!1,e(document).off("keydown",q)},n.enableKeyboardControl=function(){n.params.keyboardControl=!0,e(document).on("keydown",q)},n.mousewheel={event:!1,lastScrollTime:new window.Date().getTime()};function de(){var p="onwheel",g=p in document;if(!g){var y=document.createElement("div");y.setAttribute(p,"return;"),g=typeof y[p]=="function"}return!g&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(g=document.implementation.hasFeature("Events.wheel","3.0")),g}function le(p){var g=10,y=40,C=800,I=0,V=0,W=0,ae=0;return"detail"in p&&(V=p.detail),"wheelDelta"in p&&(V=-p.wheelDelta/120),"wheelDeltaY"in p&&(V=-p.wheelDeltaY/120),"wheelDeltaX"in p&&(I=-p.wheelDeltaX/120),"axis"in p&&p.axis===p.HORIZONTAL_AXIS&&(I=V,V=0),W=I*g,ae=V*g,"deltaY"in p&&(ae=p.deltaY),"deltaX"in p&&(W=p.deltaX),(W||ae)&&p.deltaMode&&(p.deltaMode===1?(W*=y,ae*=y):(W*=C,ae*=C)),W&&!I&&(I=W<1?-1:1),ae&&!V&&(V=ae<1?-1:1),{spinX:I,spinY:V,pixelX:W,pixelY:ae}}n.params.mousewheelControl&&(n.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":de()?"wheel":"mousewheel");function fe(p){p.originalEvent&&(p=p.originalEvent);var g=0,y=n.rtl?-1:1,C=le(p);if(n.params.mousewheelForceToAxis)if(n.isHorizontal())if(Math.abs(C.pixelX)>Math.abs(C.pixelY))g=C.pixelX*y;else return;else if(Math.abs(C.pixelY)>Math.abs(C.pixelX))g=C.pixelY;else return;else g=Math.abs(C.pixelX)>Math.abs(C.pixelY)?-C.pixelX*y:-C.pixelY;if(g!==0){if(n.params.mousewheelInvert&&(g=-g),n.params.freeMode){var I=n.getWrapperTranslate()+g*n.params.mousewheelSensitivity,V=n.isBeginning,W=n.isEnd;if(I>=n.minTranslate()&&(I=n.minTranslate()),I<=n.maxTranslate()&&(I=n.maxTranslate()),n.setWrapperTransition(0),n.setWrapperTranslate(I),n.updateProgress(),n.updateActiveIndex(),(!V&&n.isBeginning||!W&&n.isEnd)&&n.updateClasses(),n.params.freeModeSticky?(clearTimeout(n.mousewheel.timeout),n.mousewheel.timeout=setTimeout(function(){n.slideReset()},300)):n.params.lazyLoading&&n.lazy&&n.lazy.load(),n.emit("onScroll",n,p),n.params.autoplay&&n.params.autoplayDisableOnInteraction&&n.stopAutoplay(),I===0||I===n.maxTranslate())return}else{if(new window.Date().getTime()-n.mousewheel.lastScrollTime>60){if(g<0){if((!n.isEnd||n.params.loop)&&!n.animating)n.slideNext(),n.emit("onScroll",n,p);else if(n.params.mousewheelReleaseOnEdges)return!0}else if((!n.isBeginning||n.params.loop)&&!n.animating)n.slidePrev(),n.emit("onScroll",n,p);else if(n.params.mousewheelReleaseOnEdges)return!0}n.mousewheel.lastScrollTime=new window.Date().getTime()}return p.preventDefault?p.preventDefault():p.returnValue=!1,!1}}n.disableMousewheelControl=function(){if(!n.mousewheel.event)return!1;var p=n.container;return n.params.mousewheelEventsTarged!=="container"&&(p=e(n.params.mousewheelEventsTarged)),p.off(n.mousewheel.event,fe),n.params.mousewheelControl=!1,!0},n.enableMousewheelControl=function(){if(!n.mousewheel.event)return!1;var p=n.container;return n.params.mousewheelEventsTarged!=="container"&&(p=e(n.params.mousewheelEventsTarged)),p.on(n.mousewheel.event,fe),n.params.mousewheelControl=!0,!0};function Q(p,g){p=e(p);var y,C,I,V=n.rtl?-1:1;y=p.attr("data-swiper-parallax")||"0",C=p.attr("data-swiper-parallax-x"),I=p.attr("data-swiper-parallax-y"),C||I?(C=C||"0",I=I||"0"):n.isHorizontal()?(C=y,I="0"):(I=y,C="0"),C.indexOf("%")>=0?C=parseInt(C,10)*g*V+"%":C=C*g*V+"px",I.indexOf("%")>=0?I=parseInt(I,10)*g+"%":I=I*g+"px",p.transform("translate3d("+C+", "+I+",0px)")}n.parallax={setTranslate:function(){n.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){Q(this,n.progress)}),n.slides.each(function(){var p=e(this);p.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var g=Math.min(Math.max(p[0].progress,-1),1);Q(this,g)})})},setTransition:function(p){typeof p>"u"&&(p=n.params.speed),n.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var g=e(this),y=parseInt(g.attr("data-swiper-parallax-duration"),10)||p;p===0&&(y=0),g.transition(y)})}},n.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:n.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(p){if(p.targetTouches.length<2)return 1;var g=p.targetTouches[0].pageX,y=p.targetTouches[0].pageY,C=p.targetTouches[1].pageX,I=p.targetTouches[1].pageY,V=Math.sqrt(Math.pow(C-g,2)+Math.pow(I-y,2));return V},onGestureStart:function(p){var g=n.zoom;if(!n.support.gestures){if(p.type!=="touchstart"||p.type==="touchstart"&&p.targetTouches.length<2)return;g.gesture.scaleStart=g.getDistanceBetweenTouches(p)}if((!g.gesture.slide||!g.gesture.slide.length)&&(g.gesture.slide=e(this),g.gesture.slide.length===0&&(g.gesture.slide=n.slides.eq(n.activeIndex)),g.gesture.image=g.gesture.slide.find("img, svg, canvas"),g.gesture.imageWrap=g.gesture.image.parent("."+n.params.zoomContainerClass),g.gesture.zoomMax=g.gesture.imageWrap.attr("data-swiper-zoom")||n.params.zoomMax,g.gesture.imageWrap.length===0)){g.gesture.image=void 0;return}g.gesture.image.transition(0),g.isScaling=!0},onGestureChange:function(p){var g=n.zoom;if(!n.support.gestures){if(p.type!=="touchmove"||p.type==="touchmove"&&p.targetTouches.length<2)return;g.gesture.scaleMove=g.getDistanceBetweenTouches(p)}!g.gesture.image||g.gesture.image.length===0||(n.support.gestures?g.scale=p.scale*g.currentScale:g.scale=g.gesture.scaleMove/g.gesture.scaleStart*g.currentScale,g.scale>g.gesture.zoomMax&&(g.scale=g.gesture.zoomMax-1+Math.pow(g.scale-g.gesture.zoomMax+1,.5)),g.scale<n.params.zoomMin&&(g.scale=n.params.zoomMin+1-Math.pow(n.params.zoomMin-g.scale+1,.5)),g.gesture.image.transform("translate3d(0,0,0) scale("+g.scale+")"))},onGestureEnd:function(p){var g=n.zoom;!n.support.gestures&&(p.type!=="touchend"||p.type==="touchend"&&p.changedTouches.length<2)||!g.gesture.image||g.gesture.image.length===0||(g.scale=Math.max(Math.min(g.scale,g.gesture.zoomMax),n.params.zoomMin),g.gesture.image.transition(n.params.speed).transform("translate3d(0,0,0) scale("+g.scale+")"),g.currentScale=g.scale,g.isScaling=!1,g.scale===1&&(g.gesture.slide=void 0))},onTouchStart:function(p,g){var y=p.zoom;!y.gesture.image||y.gesture.image.length===0||y.image.isTouched||(p.device.os==="android"&&g.preventDefault(),y.image.isTouched=!0,y.image.touchesStart.x=g.type==="touchstart"?g.targetTouches[0].pageX:g.pageX,y.image.touchesStart.y=g.type==="touchstart"?g.targetTouches[0].pageY:g.pageY)},onTouchMove:function(p){var g=n.zoom;if(!(!g.gesture.image||g.gesture.image.length===0)&&(n.allowClick=!1,!(!g.image.isTouched||!g.gesture.slide))){g.image.isMoved||(g.image.width=g.gesture.image[0].offsetWidth,g.image.height=g.gesture.image[0].offsetHeight,g.image.startX=n.getTranslate(g.gesture.imageWrap[0],"x")||0,g.image.startY=n.getTranslate(g.gesture.imageWrap[0],"y")||0,g.gesture.slideWidth=g.gesture.slide[0].offsetWidth,g.gesture.slideHeight=g.gesture.slide[0].offsetHeight,g.gesture.imageWrap.transition(0),n.rtl&&(g.image.startX=-g.image.startX),n.rtl&&(g.image.startY=-g.image.startY));var y=g.image.width*g.scale,C=g.image.height*g.scale;if(!(y<g.gesture.slideWidth&&C<g.gesture.slideHeight)){if(g.image.minX=Math.min(g.gesture.slideWidth/2-y/2,0),g.image.maxX=-g.image.minX,g.image.minY=Math.min(g.gesture.slideHeight/2-C/2,0),g.image.maxY=-g.image.minY,g.image.touchesCurrent.x=p.type==="touchmove"?p.targetTouches[0].pageX:p.pageX,g.image.touchesCurrent.y=p.type==="touchmove"?p.targetTouches[0].pageY:p.pageY,!g.image.isMoved&&!g.isScaling){if(n.isHorizontal()&&Math.floor(g.image.minX)===Math.floor(g.image.startX)&&g.image.touchesCurrent.x<g.image.touchesStart.x||Math.floor(g.image.maxX)===Math.floor(g.image.startX)&&g.image.touchesCurrent.x>g.image.touchesStart.x){g.image.isTouched=!1;return}else if(!n.isHorizontal()&&Math.floor(g.image.minY)===Math.floor(g.image.startY)&&g.image.touchesCurrent.y<g.image.touchesStart.y||Math.floor(g.image.maxY)===Math.floor(g.image.startY)&&g.image.touchesCurrent.y>g.image.touchesStart.y){g.image.isTouched=!1;return}}p.preventDefault(),p.stopPropagation(),g.image.isMoved=!0,g.image.currentX=g.image.touchesCurrent.x-g.image.touchesStart.x+g.image.startX,g.image.currentY=g.image.touchesCurrent.y-g.image.touchesStart.y+g.image.startY,g.image.currentX<g.image.minX&&(g.image.currentX=g.image.minX+1-Math.pow(g.image.minX-g.image.currentX+1,.8)),g.image.currentX>g.image.maxX&&(g.image.currentX=g.image.maxX-1+Math.pow(g.image.currentX-g.image.maxX+1,.8)),g.image.currentY<g.image.minY&&(g.image.currentY=g.image.minY+1-Math.pow(g.image.minY-g.image.currentY+1,.8)),g.image.currentY>g.image.maxY&&(g.image.currentY=g.image.maxY-1+Math.pow(g.image.currentY-g.image.maxY+1,.8)),g.velocity.prevPositionX||(g.velocity.prevPositionX=g.image.touchesCurrent.x),g.velocity.prevPositionY||(g.velocity.prevPositionY=g.image.touchesCurrent.y),g.velocity.prevTime||(g.velocity.prevTime=Date.now()),g.velocity.x=(g.image.touchesCurrent.x-g.velocity.prevPositionX)/(Date.now()-g.velocity.prevTime)/2,g.velocity.y=(g.image.touchesCurrent.y-g.velocity.prevPositionY)/(Date.now()-g.velocity.prevTime)/2,Math.abs(g.image.touchesCurrent.x-g.velocity.prevPositionX)<2&&(g.velocity.x=0),Math.abs(g.image.touchesCurrent.y-g.velocity.prevPositionY)<2&&(g.velocity.y=0),g.velocity.prevPositionX=g.image.touchesCurrent.x,g.velocity.prevPositionY=g.image.touchesCurrent.y,g.velocity.prevTime=Date.now(),g.gesture.imageWrap.transform("translate3d("+g.image.currentX+"px, "+g.image.currentY+"px,0)")}}},onTouchEnd:function(p,g){var y=p.zoom;if(!(!y.gesture.image||y.gesture.image.length===0)){if(!y.image.isTouched||!y.image.isMoved){y.image.isTouched=!1,y.image.isMoved=!1;return}y.image.isTouched=!1,y.image.isMoved=!1;var C=300,I=300,V=y.velocity.x*C,W=y.image.currentX+V,ae=y.velocity.y*I,ye=y.image.currentY+ae;y.velocity.x!==0&&(C=Math.abs((W-y.image.currentX)/y.velocity.x)),y.velocity.y!==0&&(I=Math.abs((ye-y.image.currentY)/y.velocity.y));var pe=Math.max(C,I);y.image.currentX=W,y.image.currentY=ye;var _e=y.image.width*y.scale,Pe=y.image.height*y.scale;y.image.minX=Math.min(y.gesture.slideWidth/2-_e/2,0),y.image.maxX=-y.image.minX,y.image.minY=Math.min(y.gesture.slideHeight/2-Pe/2,0),y.image.maxY=-y.image.minY,y.image.currentX=Math.max(Math.min(y.image.currentX,y.image.maxX),y.image.minX),y.image.currentY=Math.max(Math.min(y.image.currentY,y.image.maxY),y.image.minY),y.gesture.imageWrap.transition(pe).transform("translate3d("+y.image.currentX+"px, "+y.image.currentY+"px,0)")}},onTransitionEnd:function(p){var g=p.zoom;g.gesture.slide&&p.previousIndex!==p.activeIndex&&(g.gesture.image.transform("translate3d(0,0,0) scale(1)"),g.gesture.imageWrap.transform("translate3d(0,0,0)"),g.gesture.slide=g.gesture.image=g.gesture.imageWrap=void 0,g.scale=g.currentScale=1)},toggleZoom:function(p,g){var y=p.zoom;if(y.gesture.slide||(y.gesture.slide=p.clickedSlide?e(p.clickedSlide):p.slides.eq(p.activeIndex),y.gesture.image=y.gesture.slide.find("img, svg, canvas"),y.gesture.imageWrap=y.gesture.image.parent("."+p.params.zoomContainerClass)),!(!y.gesture.image||y.gesture.image.length===0)){var C,I,V,W,ae,ye,pe,_e,Pe,P,b,H,se,re,ue,Me,me,te;typeof y.image.touchesStart.x>"u"&&g?(C=g.type==="touchend"?g.changedTouches[0].pageX:g.pageX,I=g.type==="touchend"?g.changedTouches[0].pageY:g.pageY):(C=y.image.touchesStart.x,I=y.image.touchesStart.y),y.scale&&y.scale!==1?(y.scale=y.currentScale=1,y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),y.gesture.slide=void 0):(y.scale=y.currentScale=y.gesture.imageWrap.attr("data-swiper-zoom")||p.params.zoomMax,g?(me=y.gesture.slide[0].offsetWidth,te=y.gesture.slide[0].offsetHeight,V=y.gesture.slide.offset().left,W=y.gesture.slide.offset().top,ae=V+me/2-C,ye=W+te/2-I,Pe=y.gesture.image[0].offsetWidth,P=y.gesture.image[0].offsetHeight,b=Pe*y.scale,H=P*y.scale,se=Math.min(me/2-b/2,0),re=Math.min(te/2-H/2,0),ue=-se,Me=-re,pe=ae*y.scale,_e=ye*y.scale,pe<se&&(pe=se),pe>ue&&(pe=ue),_e<re&&(_e=re),_e>Me&&(_e=Me)):(pe=0,_e=0),y.gesture.imageWrap.transition(300).transform("translate3d("+pe+"px, "+_e+"px,0)"),y.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+y.scale+")"))}},attachEvents:function(p){var g=p?"off":"on";if(n.params.zoom){n.slides;var y=n.touchEvents.start==="touchstart"&&n.support.passiveListener&&n.params.passiveListeners?{passive:!0,capture:!1}:!1;n.support.gestures?(n.slides[g]("gesturestart",n.zoom.onGestureStart,y),n.slides[g]("gesturechange",n.zoom.onGestureChange,y),n.slides[g]("gestureend",n.zoom.onGestureEnd,y)):n.touchEvents.start==="touchstart"&&(n.slides[g](n.touchEvents.start,n.zoom.onGestureStart,y),n.slides[g](n.touchEvents.move,n.zoom.onGestureChange,y),n.slides[g](n.touchEvents.end,n.zoom.onGestureEnd,y)),n[g]("touchStart",n.zoom.onTouchStart),n.slides.each(function(C,I){e(I).find("."+n.params.zoomContainerClass).length>0&&e(I)[g](n.touchEvents.move,n.zoom.onTouchMove)}),n[g]("touchEnd",n.zoom.onTouchEnd),n[g]("transitionEnd",n.zoom.onTransitionEnd),n.params.zoomToggle&&n.on("doubleTap",n.zoom.toggleZoom)}},init:function(){n.zoom.attachEvents()},destroy:function(){n.zoom.attachEvents(!0)}},n._plugins=[];for(var ze in n.plugins){var ve=n.plugins[ze](n,n.params[ze]);ve&&n._plugins.push(ve)}n.callPlugins=function(p){for(var g=0;g<n._plugins.length;g++)p in n._plugins[g]&&n._plugins[g][p](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};function Ce(p){return p.indexOf("on")!==0&&(p[0]!==p[0].toUpperCase()?p="on"+p[0].toUpperCase()+p.substring(1):p="on"+p),p}return n.emitterEventListeners={},n.emit=function(p){n.params[p]&&n.params[p](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var g;if(n.emitterEventListeners[p])for(g=0;g<n.emitterEventListeners[p].length;g++)n.emitterEventListeners[p][g](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);n.callPlugins&&n.callPlugins(p,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},n.on=function(p,g){return p=Ce(p),n.emitterEventListeners[p]||(n.emitterEventListeners[p]=[]),n.emitterEventListeners[p].push(g),n},n.off=function(p,g){var y;if(p=Ce(p),typeof g>"u")return n.emitterEventListeners[p]=[],n;if(!(!n.emitterEventListeners[p]||n.emitterEventListeners[p].length===0)){for(y=0;y<n.emitterEventListeners[p].length;y++)n.emitterEventListeners[p][y]===g&&n.emitterEventListeners[p].splice(y,1);return n}},n.once=function(p,g){p=Ce(p);var y=function(){g(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),n.off(p,y)};return n.on(p,y),n},n.a11y={makeFocusable:function(p){return p.attr("tabIndex","0"),p},addRole:function(p,g){return p.attr("role",g),p},addLabel:function(p,g){return p.attr("aria-label",g),p},disable:function(p){return p.attr("aria-disabled",!0),p},enable:function(p){return p.attr("aria-disabled",!1),p},onEnterKey:function(p){p.keyCode===13&&(e(p.target).is(n.params.nextButton)?(n.onClickNext(p),n.isEnd?n.a11y.notify(n.params.lastSlideMessage):n.a11y.notify(n.params.nextSlideMessage)):e(p.target).is(n.params.prevButton)&&(n.onClickPrev(p),n.isBeginning?n.a11y.notify(n.params.firstSlideMessage):n.a11y.notify(n.params.prevSlideMessage)),e(p.target).is("."+n.params.bulletClass)&&e(p.target)[0].click())},liveRegion:e('<span class="'+n.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(p){var g=n.a11y.liveRegion;g.length!==0&&(g.html(""),g.html(p))},init:function(){n.params.nextButton&&n.nextButton&&n.nextButton.length>0&&(n.a11y.makeFocusable(n.nextButton),n.a11y.addRole(n.nextButton,"button"),n.a11y.addLabel(n.nextButton,n.params.nextSlideMessage)),n.params.prevButton&&n.prevButton&&n.prevButton.length>0&&(n.a11y.makeFocusable(n.prevButton),n.a11y.addRole(n.prevButton,"button"),n.a11y.addLabel(n.prevButton,n.params.prevSlideMessage)),e(n.container).append(n.a11y.liveRegion)},initPagination:function(){n.params.pagination&&n.params.paginationClickable&&n.bullets&&n.bullets.length&&n.bullets.each(function(){var p=e(this);n.a11y.makeFocusable(p),n.a11y.addRole(p,"button"),n.a11y.addLabel(p,n.params.paginationBulletMessage.replace(/{{index}}/,p.index()+1))})},destroy:function(){n.a11y.liveRegion&&n.a11y.liveRegion.length>0&&n.a11y.liveRegion.remove()}},n.init=function(){n.params.loop&&n.createLoop(),n.updateContainerSize(),n.updateSlidesSize(),n.updatePagination(),n.params.scrollbar&&n.scrollbar&&(n.scrollbar.set(),n.params.scrollbarDraggable&&n.scrollbar.enableDraggable()),n.params.effect!=="slide"&&n.effects[n.params.effect]&&(n.params.loop||n.updateProgress(),n.effects[n.params.effect].setTranslate()),n.params.loop?n.slideTo(n.params.initialSlide+n.loopedSlides,0,n.params.runCallbacksOnInit):(n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit),n.params.initialSlide===0&&(n.parallax&&n.params.parallax&&n.parallax.setTranslate(),n.lazy&&n.params.lazyLoading&&(n.lazy.load(),n.lazy.initialImageLoaded=!0))),n.attachEvents(),n.params.observer&&n.support.observer&&n.initObservers(),n.params.preloadImages&&!n.params.lazyLoading&&n.preloadImages(),n.params.zoom&&n.zoom&&n.zoom.init(),n.params.autoplay&&n.startAutoplay(),n.params.keyboardControl&&n.enableKeyboardControl&&n.enableKeyboardControl(),n.params.mousewheelControl&&n.enableMousewheelControl&&n.enableMousewheelControl(),n.params.hashnavReplaceState&&(n.params.replaceState=n.params.hashnavReplaceState),n.params.history&&n.history&&n.history.init(),n.params.hashnav&&n.hashnav&&n.hashnav.init(),n.params.a11y&&n.a11y&&n.a11y.init(),n.emit("onInit",n)},n.cleanupStyles=function(){n.container.removeClass(n.classNames.join(" ")).removeAttr("style"),n.wrapper.removeAttr("style"),n.slides&&n.slides.length&&n.slides.removeClass([n.params.slideVisibleClass,n.params.slideActiveClass,n.params.slideNextClass,n.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),n.paginationContainer&&n.paginationContainer.length&&n.paginationContainer.removeClass(n.params.paginationHiddenClass),n.bullets&&n.bullets.length&&n.bullets.removeClass(n.params.bulletActiveClass),n.params.prevButton&&e(n.params.prevButton).removeClass(n.params.buttonDisabledClass),n.params.nextButton&&e(n.params.nextButton).removeClass(n.params.buttonDisabledClass),n.params.scrollbar&&n.scrollbar&&(n.scrollbar.track&&n.scrollbar.track.length&&n.scrollbar.track.removeAttr("style"),n.scrollbar.drag&&n.scrollbar.drag.length&&n.scrollbar.drag.removeAttr("style"))},n.destroy=function(p,g){n.detachEvents(),n.stopAutoplay(),n.params.scrollbar&&n.scrollbar&&n.params.scrollbarDraggable&&n.scrollbar.disableDraggable(),n.params.loop&&n.destroyLoop(),g&&n.cleanupStyles(),n.disconnectObservers(),n.params.zoom&&n.zoom&&n.zoom.destroy(),n.params.keyboardControl&&n.disableKeyboardControl&&n.disableKeyboardControl(),n.params.mousewheelControl&&n.disableMousewheelControl&&n.disableMousewheelControl(),n.params.a11y&&n.a11y&&n.a11y.destroy(),n.params.history&&!n.params.replaceState&&window.removeEventListener("popstate",n.history.setHistoryPopState),n.params.hashnav&&n.hashnav&&n.hashnav.destroy(),n.emit("onDestroy"),p!==!1&&(n=null)},n.init(),n};t.prototype={isSafari:function(){var f=window.navigator.userAgent.toLowerCase();return f.indexOf("safari")>=0&&f.indexOf("chrome")<0&&f.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(f){return Object.prototype.toString.apply(f)==="[object Array]"},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var f=document.createElement("div");return f.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",f.getElementsByTagName("i").length===1}()},device:function(){var f=window.navigator.userAgent,u=f.match(/(Android);?[\s\/]+([\d.]+)?/),c=f.match(/(iPad).*OS\s([\d_]+)/),d=f.match(/(iPod)(.*OS\s([\d_]+))?/),h=!c&&f.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:c||h||d,android:u}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var f=document.createElement("div").style;return"webkitPerspective"in f||"MozPerspective"in f||"OPerspective"in f||"MsPerspective"in f||"perspective"in f}(),flexbox:function(){for(var f=document.createElement("div").style,u="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),c=0;c<u.length;c++)if(u[c]in f)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var f=!1;try{var u=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("testPassiveListener",null,u)}catch{}return f}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var i=function(){var f=function(c){var d=this,h=0;for(h=0;h<c.length;h++)d[h]=c[h];return d.length=c.length,this},u=function(c,d){var h=[],_=0;if(c&&!d&&c instanceof f)return c;if(c){if(typeof c=="string"){var x,m,v=c.trim();if(v.indexOf("<")>=0&&v.indexOf(">")>=0){var n="div";for(v.indexOf("<li")===0&&(n="ul"),v.indexOf("<tr")===0&&(n="tbody"),(v.indexOf("<td")===0||v.indexOf("<th")===0)&&(n="tr"),v.indexOf("<tbody")===0&&(n="table"),v.indexOf("<option")===0&&(n="select"),m=document.createElement(n),m.innerHTML=c,_=0;_<m.childNodes.length;_++)h.push(m.childNodes[_])}else for(!d&&c[0]==="#"&&!c.match(/[ .<>:~]/)?x=[document.getElementById(c.split("#")[1])]:x=(d||document).querySelectorAll(c),_=0;_<x.length;_++)x[_]&&h.push(x[_])}else if(c.nodeType||c===window||c===document)h.push(c);else if(c.length>0&&c[0].nodeType)for(_=0;_<c.length;_++)h.push(c[_])}return new f(h)};return f.prototype={addClass:function(c){if(typeof c>"u")return this;for(var d=c.split(" "),h=0;h<d.length;h++)for(var _=0;_<this.length;_++)this[_].classList.add(d[h]);return this},removeClass:function(c){for(var d=c.split(" "),h=0;h<d.length;h++)for(var _=0;_<this.length;_++)this[_].classList.remove(d[h]);return this},hasClass:function(c){return this[0]?this[0].classList.contains(c):!1},toggleClass:function(c){for(var d=c.split(" "),h=0;h<d.length;h++)for(var _=0;_<this.length;_++)this[_].classList.toggle(d[h]);return this},attr:function(c,d){if(arguments.length===1&&typeof c=="string")return this[0]?this[0].getAttribute(c):void 0;for(var h=0;h<this.length;h++)if(arguments.length===2)this[h].setAttribute(c,d);else for(var _ in c)this[h][_]=c[_],this[h].setAttribute(_,c[_]);return this},removeAttr:function(c){for(var d=0;d<this.length;d++)this[d].removeAttribute(c);return this},data:function(c,d){if(typeof d>"u")if(this[0]){var h=this[0].getAttribute("data-"+c);return h||(this[0].dom7ElementDataStorage&&c in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[c]:void 0)}else return;else{for(var _=0;_<this.length;_++){var x=this[_];x.dom7ElementDataStorage||(x.dom7ElementDataStorage={}),x.dom7ElementDataStorage[c]=d}return this}},transform:function(c){for(var d=0;d<this.length;d++){var h=this[d].style;h.webkitTransform=h.MsTransform=h.msTransform=h.MozTransform=h.OTransform=h.transform=c}return this},transition:function(c){typeof c!="string"&&(c=c+"ms");for(var d=0;d<this.length;d++){var h=this[d].style;h.webkitTransitionDuration=h.MsTransitionDuration=h.msTransitionDuration=h.MozTransitionDuration=h.OTransitionDuration=h.transitionDuration=c}return this},on:function(c,d,h,_){function x(T){var w=T.target;if(u(w).is(d))h.call(w,T);else for(var S=u(w).parents(),E=0;E<S.length;E++)u(S[E]).is(d)&&h.call(S[E],T)}var m=c.split(" "),v,n;for(v=0;v<this.length;v++)if(typeof d=="function"||d===!1)for(typeof d=="function"&&(h=arguments[1],_=arguments[2]||!1),n=0;n<m.length;n++)this[v].addEventListener(m[n],h,_);else for(n=0;n<m.length;n++)this[v].dom7LiveListeners||(this[v].dom7LiveListeners=[]),this[v].dom7LiveListeners.push({listener:h,liveListener:x}),this[v].addEventListener(m[n],x,_);return this},off:function(c,d,h,_){for(var x=c.split(" "),m=0;m<x.length;m++)for(var v=0;v<this.length;v++)if(typeof d=="function"||d===!1)typeof d=="function"&&(h=arguments[1],_=arguments[2]||!1),this[v].removeEventListener(x[m],h,_);else if(this[v].dom7LiveListeners)for(var n=0;n<this[v].dom7LiveListeners.length;n++)this[v].dom7LiveListeners[n].listener===h&&this[v].removeEventListener(x[m],this[v].dom7LiveListeners[n].liveListener,_);return this},once:function(c,d,h,_){var x=this;typeof d=="function"&&(d=!1,h=arguments[1],_=arguments[2]);function m(v){h(v),x.off(c,d,m,_)}x.on(c,d,m,_)},trigger:function(c,d){for(var h=0;h<this.length;h++){var _;try{_=new window.CustomEvent(c,{detail:d,bubbles:!0,cancelable:!0})}catch{_=document.createEvent("Event"),_.initEvent(c,!0,!0),_.detail=d}this[h].dispatchEvent(_)}return this},transitionEnd:function(c){var d=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],h,_=this;function x(m){if(m.target===this)for(c.call(this,m),h=0;h<d.length;h++)_.off(d[h],x)}if(c)for(h=0;h<d.length;h++)_.on(d[h],x);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(c){return this.length>0?c?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(c){return this.length>0?c?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var c=this[0],d=c.getBoundingClientRect(),h=document.body,_=c.clientTop||h.clientTop||0,x=c.clientLeft||h.clientLeft||0,m=window.pageYOffset||c.scrollTop,v=window.pageXOffset||c.scrollLeft;return{top:d.top+m-_,left:d.left+v-x}}else return null},css:function(c,d){var h;if(arguments.length===1)if(typeof c=="string"){if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(c)}else{for(h=0;h<this.length;h++)for(var _ in c)this[h].style[_]=c[_];return this}if(arguments.length===2&&typeof c=="string"){for(h=0;h<this.length;h++)this[h].style[c]=d;return this}return this},each:function(c){for(var d=0;d<this.length;d++)c.call(this[d],d,this[d]);return this},html:function(c){if(typeof c>"u")return this[0]?this[0].innerHTML:void 0;for(var d=0;d<this.length;d++)this[d].innerHTML=c;return this},text:function(c){if(typeof c>"u")return this[0]?this[0].textContent.trim():null;for(var d=0;d<this.length;d++)this[d].textContent=c;return this},is:function(c){if(!this[0])return!1;var d,h;if(typeof c=="string"){var _=this[0];if(_===document)return c===document;if(_===window)return c===window;if(_.matches)return _.matches(c);if(_.webkitMatchesSelector)return _.webkitMatchesSelector(c);if(_.mozMatchesSelector)return _.mozMatchesSelector(c);if(_.msMatchesSelector)return _.msMatchesSelector(c);for(d=u(c),h=0;h<d.length;h++)if(d[h]===this[0])return!0;return!1}else{if(c===document)return this[0]===document;if(c===window)return this[0]===window;if(c.nodeType||c instanceof f){for(d=c.nodeType?[c]:c,h=0;h<d.length;h++)if(d[h]===this[0])return!0;return!1}return!1}},index:function(){if(this[0]){for(var c=this[0],d=0;(c=c.previousSibling)!==null;)c.nodeType===1&&d++;return d}else return},eq:function(c){if(typeof c>"u")return this;var d=this.length,h;return c>d-1?new f([]):c<0?(h=d+c,h<0?new f([]):new f([this[h]])):new f([this[c]])},append:function(c){var d,h;for(d=0;d<this.length;d++)if(typeof c=="string"){var _=document.createElement("div");for(_.innerHTML=c;_.firstChild;)this[d].appendChild(_.firstChild)}else if(c instanceof f)for(h=0;h<c.length;h++)this[d].appendChild(c[h]);else this[d].appendChild(c);return this},prepend:function(c){var d,h;for(d=0;d<this.length;d++)if(typeof c=="string"){var _=document.createElement("div");for(_.innerHTML=c,h=_.childNodes.length-1;h>=0;h--)this[d].insertBefore(_.childNodes[h],this[d].childNodes[0])}else if(c instanceof f)for(h=0;h<c.length;h++)this[d].insertBefore(c[h],this[d].childNodes[0]);else this[d].insertBefore(c,this[d].childNodes[0]);return this},insertBefore:function(c){for(var d=u(c),h=0;h<this.length;h++)if(d.length===1)d[0].parentNode.insertBefore(this[h],d[0]);else if(d.length>1)for(var _=0;_<d.length;_++)d[_].parentNode.insertBefore(this[h].cloneNode(!0),d[_])},insertAfter:function(c){for(var d=u(c),h=0;h<this.length;h++)if(d.length===1)d[0].parentNode.insertBefore(this[h],d[0].nextSibling);else if(d.length>1)for(var _=0;_<d.length;_++)d[_].parentNode.insertBefore(this[h].cloneNode(!0),d[_].nextSibling)},next:function(c){return this.length>0?c?this[0].nextElementSibling&&u(this[0].nextElementSibling).is(c)?new f([this[0].nextElementSibling]):new f([]):this[0].nextElementSibling?new f([this[0].nextElementSibling]):new f([]):new f([])},nextAll:function(c){var d=[],h=this[0];if(!h)return new f([]);for(;h.nextElementSibling;){var _=h.nextElementSibling;c?u(_).is(c)&&d.push(_):d.push(_),h=_}return new f(d)},prev:function(c){return this.length>0?c?this[0].previousElementSibling&&u(this[0].previousElementSibling).is(c)?new f([this[0].previousElementSibling]):new f([]):this[0].previousElementSibling?new f([this[0].previousElementSibling]):new f([]):new f([])},prevAll:function(c){var d=[],h=this[0];if(!h)return new f([]);for(;h.previousElementSibling;){var _=h.previousElementSibling;c?u(_).is(c)&&d.push(_):d.push(_),h=_}return new f(d)},parent:function(c){for(var d=[],h=0;h<this.length;h++)c?u(this[h].parentNode).is(c)&&d.push(this[h].parentNode):d.push(this[h].parentNode);return u(u.unique(d))},parents:function(c){for(var d=[],h=0;h<this.length;h++)for(var _=this[h].parentNode;_;)c?u(_).is(c)&&d.push(_):d.push(_),_=_.parentNode;return u(u.unique(d))},find:function(c){for(var d=[],h=0;h<this.length;h++)for(var _=this[h].querySelectorAll(c),x=0;x<_.length;x++)d.push(_[x]);return new f(d)},children:function(c){for(var d=[],h=0;h<this.length;h++)for(var _=this[h].childNodes,x=0;x<_.length;x++)c?_[x].nodeType===1&&u(_[x]).is(c)&&d.push(_[x]):_[x].nodeType===1&&d.push(_[x]);return new f(u.unique(d))},remove:function(){for(var c=0;c<this.length;c++)this[c].parentNode&&this[c].parentNode.removeChild(this[c]);return this},add:function(){var c=this,d,h;for(d=0;d<arguments.length;d++){var _=u(arguments[d]);for(h=0;h<_.length;h++)c[c.length]=_[h],c.length++}return c}},u.fn=f.prototype,u.unique=function(c){for(var d=[],h=0;h<c.length;h++)d.indexOf(c[h])===-1&&d.push(c[h]);return d},u}(),r=["jQuery","Zepto","Dom7"],s=0;s<r.length;s++)window[r[s]]&&o(window[r[s]]);var l;typeof i>"u"?l=window.Dom7||window.Zepto||window.jQuery:l=i;function o(f){f.fn.swiper=function(u){var c;return f(this).each(function(){var d=new t(this,u);c||(c=d)}),c}}l&&("transitionEnd"in l.fn||(l.fn.transitionEnd=function(f){var u=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],c,d=this;function h(_){if(_.target===this)for(f.call(this,_),c=0;c<u.length;c++)d.off(u[c],h)}if(f)for(c=0;c<u.length;c++)d.on(u[c],h);return this}),"transform"in l.fn||(l.fn.transform=function(f){for(var u=0;u<this.length;u++){var c=this[u].style;c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=f}return this}),"transition"in l.fn||(l.fn.transition=function(f){typeof f!="string"&&(f=f+"ms");for(var u=0;u<this.length;u++){var c=this[u].style;c.webkitTransitionDuration=c.MsTransitionDuration=c.msTransitionDuration=c.MozTransitionDuration=c.OTransitionDuration=c.transitionDuration=f}return this}),"outerWidth"in l.fn||(l.fn.outerWidth=function(f){return this.length>0?f?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=t})(),a.exports=window.Swiper})(hv);const pv=Co,mv=""+new URL("Waves-02b9aeb8.jpg",import.meta.url).href;let tr,hr,pr,eo,to,Ao,Lo;const Ts=Vd;let Wt={color:16777215,objectWidth:12,objectThickness:3,ambientColor:8421504,light1Color:16777215,shadow:!1,perspective:75,cameraZ:75},Po=[],gf,Gc,Vc,Hc;gv();function gv(){tr=new du({canvas:document.getElementById("webgl"),antialias:!0,alpha:!0}),tr.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(tr.domElement),pr=new Ct(Wt.perspective,window.innerWidth/window.innerHeight,.1,1e3),pr.position.z=Wt.cameraZ,hr=new Uo,gf=new _r(Wt.objectWidth,Wt.objectWidth,Wt.objectThickness),window.addEventListener("load",_v),_f()}function _v(){vf(),hr=new Uo,vv(),xv()}function vv(){hr.add(new K_(Wt.ambientColor));let a=new $_(16777215);a.position.z=100,hr.add(a)}function xv(){Po=[],Vc=Math.round(Ao/Wt.objectWidth)+1,Hc=Math.round(Lo/Wt.objectWidth)+1;let a,e,t;for(let i=0;i<Vc;i++)for(let r=0;r<Hc;r++)Gc=new H_({color:Wt.color,transparent:!0,opacity:1}),a=new hn(gf,Gc),e=-Ao/2+i*Wt.objectWidth,t=-Lo/2+r*Wt.objectWidth,a.position.set(e,t,0),Po.push(a),hr.add(a);document.body.classList.add("loaded"),yv()}function yv(){document.body.classList.remove("revealed"),Po.forEach(a=>{a.rotation.set(0,0,0),a.material.opacity=1,a.position.z=0;let e=Ts.randFloat(1,2),t=Ts.randFloatSpread(2*Math.PI),i=Ts.randFloatSpread(2*Math.PI),r=Ts.randFloatSpread(2*Math.PI);mt.to(a.rotation,2,{x:t,y:i,z:r,delay:e}),mt.to(a.position,2,{z:80,delay:e+.5,ease:"easeOut"}),mt.to(a.material,2,{opacity:0,delay:e+.5})}),setTimeout(()=>{document.body.classList.add("revealed")},4500)}function _f(){requestAnimationFrame(_f),tr.render(hr,pr)}function vf(){let a;eo=window.innerWidth,to=window.innerHeight,pr.aspect=eo/to,pr.updateProjectionMatrix(),tr.setSize(eo,to),tr.setPixelRatio(Math.min(window.devicePixelRatio,2)),a=Mv(),Ao=a[0],Lo=a[1]}window.addEventListener("resize",()=>{vf()});function Mv(){const a=new Ct(Wt.perspective,pr.aspect),e=a.fov*Math.PI/180,t=2*Math.tan(e/2)*Math.abs(Wt.cameraZ);return[t*a.aspect,t]}document.getElementById("nav-btn").addEventListener("click",function(){document.getElementById("takeover-nav").classList.toggle("shown")});var wv=document.getElementById("nav-btn"),ia=document.getElementById("top-line-1"),xf=document.getElementById("middle-line-1"),ra=document.getElementById("bottom-line-1"),zr="menu",nr,ir,Gs,Vs,Hs,Ws,Xs,qs,Ys,js,sa=5,Ur=sa,Tn=sa,En=sa,Sv=sa,aa=!1,oa=!1,rl=!1,sl=!1,Ge=1,at={easeInBack:function(a,e,t,i){return a+(e-a)*(i/t)},easeOutBack:function(a,e,t,i){return a+(e-a)*(i/t)}};function yf(){Ge++,Ge<=Ur?window.requestAnimationFrame(function(){nr=at.easeInBack(37,50,Ur,Ge),ia.setAttribute("d","M30,"+nr+" L70,"+nr),ir=at.easeInBack(63,50,Ur,Ge),ra.setAttribute("d","M30,"+ir+" L70,"+ir),yf()}):(xf.style.opacity="0",Ge=1,aa=!0,al())}function Mf(){Ge++,Ge<=Tn?window.requestAnimationFrame(function(){Xs=at.easeOutBack(30,35,Tn,Ge),Gs=at.easeOutBack(50,35,Tn,Ge),js=at.easeOutBack(70,65,Tn,Ge),Ws=at.easeOutBack(50,65,Tn,Ge),ia.setAttribute("d","M"+Xs+","+Gs+" L"+js+","+Ws),Ys=at.easeOutBack(30,35,Tn,Ge),Hs=at.easeOutBack(50,65,Tn,Ge),qs=at.easeOutBack(70,65,Tn,Ge),Vs=at.easeOutBack(50,35,Tn,Ge),ra.setAttribute("d","M"+Ys+","+Hs+" L"+qs+","+Vs),Mf()}):(Ge=1,oa=!0,al())}function al(){aa?oa||Mf():yf()}function wf(){Ge++,Ge<=En?window.requestAnimationFrame(function(){Xs=at.easeInBack(35,30,En,Ge),Gs=at.easeInBack(35,50,En,Ge),js=at.easeInBack(65,70,En,Ge),Ws=at.easeInBack(65,50,En,Ge),ia.setAttribute("d","M"+Xs+","+Gs+" L"+js+","+Ws),Ys=at.easeInBack(35,30,En,Ge),Hs=at.easeInBack(65,50,En,Ge),qs=at.easeInBack(65,70,En,Ge),Vs=at.easeInBack(35,50,En,Ge),ra.setAttribute("d","M"+Ys+","+Hs+" L"+qs+","+Vs),wf()}):(xf.style.opacity="1",Ge=1,rl=!0,la())}function Sf(){Ge++,Ge<=Sv?window.requestAnimationFrame(function(){nr=at.easeOutBack(50,37,Ur,Ge),ia.setAttribute("d","M30,"+nr+" L70,"+nr),ir=at.easeOutBack(50,63,Ur,Ge),ra.setAttribute("d","M30,"+ir+" L70,"+ir),Sf()}):(Ge=1,sl=!0,la())}function la(){rl?sl||Sf():wf()}wv.addEventListener("click",function(){zr==="menu"?(al(),zr="arrow",rl=!1,sl=!1):zr==="arrow"&&(la(),zr="menu",aa=!1,oa=!1)});var bv=document.querySelectorAll(".nav-items li");bv.forEach(function(a){a.addEventListener("click",function(){la(),document.getElementById("takeover-nav").classList.remove("shown"),zr="menu",aa=!1,oa=!1})});document.addEventListener("DOMContentLoaded",function(a){for(var e=document.querySelector(".custom-cursor"),t=document.querySelectorAll("a, button, #nav-btn, input.btn"),i=!1,r=0;r<t.length;r++){var s=t[r];s.addEventListener("mouseover",function(){e.classList.add("custom-cursor--link")}),s.addEventListener("mouseout",function(){e.classList.remove("custom-cursor--link")})}window.onmousemove=function(l){var o=l.clientX,f=l.clientY;i||(mt.to(e,.5,{opacity:1}),i=!0),mt.to(e,0,{top:f+"px",left:o+"px"})},window.ontouchmove=function(l){var o=l.touches[0].clientX,f=l.touches[0].clientY;i||(mt.to(e,.3,{opacity:1}),i=!0),mt.to(e,0,{top:f+"px",left:o+"px"})},window.onmouseout=function(l){mt.to(e,.3,{opacity:0}),i=!1},window.ontouchstart=function(l){mt.to(e,.3,{opacity:1})},window.ontouchend=function(l){setTimeout(function(){mt.to(e,.3,{opacity:0})},200)}});const Tv=document.querySelector(".visible-content");let Ev=mt.quickTo(".hidden-content","--x",{duration:.4,ease:"power4.out"}),Cv=mt.quickTo(".hidden-content","--y",{duration:.4,ease:"power4.out"}),Zs=mt.timeline({paused:!0});Zs.to(".hidden-content",{"--size":250,duration:.75,ease:"back.out(1.7)"});let Av=mt.utils.toArray("p",Tv);Av.forEach(a=>{a.addEventListener("mouseenter",()=>{Zs.restart()}),a.addEventListener("mouseleave",()=>{Zs.reverse()})});let Lv=mt.timeline({paused:!0});Lv.to(".hidden-content",{"--size":20,duration:.75,ease:"back.out(1.7)"});window.addEventListener("mousemove",bf);function bf(a){window.removeEventListener("mousemove",bf),mt.set(".hidden-content",{autoAlpha:1,"--x":a.pageX,"--y":a.pageY}),window.addEventListener("mousemove",e=>{Cv(e.pageY-850),Ev(e.pageX-180)})}mt.set(".hidden-content",{autoAlpha:1,"--x":window.innerWidth/3,"--y":window.innerHeight/2});Zs.progress(.2);const Wi=document.querySelector(":root"),no=document.body,Pv=document.querySelector(".randomize"),Do=[{name:"Castle",location:"Bahri",img:"../Images/Alexandria/cover-1.jpg"},{name:"Mosque",location:"Abu Abas",img:"../Images/Alexandria/cover-2.jpg"},{name:"boats",location:"Bahri",img:"../Images/Alexandria/cover-3.jpg"},{name:"Raml Station",location:"Raml Station",img:"../Images/Alexandria/cover-4.jpg"},{name:"Library",location:"Azarita",img:"../Images/Alexandria/cover-5.jpg"},{name:"Boats",location:"Bahri",img:"../Images/Alexandria/cover-6.jpg"},{name:"Boats",location:"Bahri",img:"../Images/Alexandria/cover-7.jpg"},{name:"Bridge",location:"Stanley",img:"../Images/Alexandria/cover-8.jpg"},{name:"Sea",location:"Around Alex",img:"../Images/Alexandria/cover-9.jpg"},{name:"Boats",location:"Bahri",img:"../Images/Alexandria/cover-10.jpg"},{name:"Library",location:"Azarita",img:"../Images/Alexandria/cover-11.jpeg"}];let ti=Do[1];const Dv=()=>{const a=Math.floor(Math.random()*Do.length);return Do[a]},Tf=()=>{no.classList.contains("body--animated")||(no.classList.add("body--animated"),setTimeout(()=>{Wi.style.setProperty("--img-current",`url(${ti.img})`),Wi.style.setProperty("--text-current-title",`"${ti.name}"`),Wi.style.setProperty("--text-current-subtitle",`"${ti.location}"`),setTimeout(()=>{no.classList.remove("body--animated"),setTimeout(()=>{ti=Dv(),Wi.style.setProperty("--img-next",`url(${ti.img})`),Wi.style.setProperty("--text-next-title",`"${ti.name}"`),Wi.style.setProperty("--text-next-subtitle",`"${ti.location}"`)},1e3)},1e3)},1e3))};Pv.addEventListener("click",Tf);Tf();let si=6,ai=1,oi=4,Xi=window.innerWidth;function Rv(){Xi=window.innerWidth,Xi>1600?(si=6,ai=1,oi=4):Xi>1230?(si=5,ai=2,oi=4):Xi>980?(si=4,ai=3,oi=4):Xi>750?(si=3,ai=4,oi=4):Xi>510?(si=2,ai=5,oi=4):(si=1,ai=6,oi=1)}function Ef(){Rv(),document.readyState==="complete"&&new purePajinate({containerSelector:".items",itemSelector:".items > div",navigationSelector:".pagination",pageLinksToDisplay:oi,showFirstLast:!0,navLabelPrev:"&nbsp;&nbsp;&nbsp;",navLabelNext:"&nbsp;&nbsp;&nbsp;",navLabelFirst:"&nbsp;&nbsp;&nbsp;",navLabelLast:"&nbsp;&nbsp;&nbsp;",itemsPerPage:si,startPage:ai})}document.onreadystatechange=Ef;window.onresize=Ef;const Iv=document.querySelector("section .three_bg"),zv=new Y_,Cf=new Uo,$s=new Ct(70,window.innerWidth/window.innerHeight,.1,1e3),Jr=new hu({alpha:!0});Jr.setSize(window.innerWidth,window.innerHeight);Iv.appendChild(Jr.domElement);const Es={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Es.width=window.innerWidth,Es.height=window.innerHeight,$s.aspect=Es.width/Es.height,$s.updateProjectionMatrix(),Jr.setSize(window.innerWidth,window.innerHeight),Jr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const ci=new Js(15,8,15,9),Fv=new No({map:zv.load(mv)}),Ov=new hn(ci,Fv);Cf.add(Ov);$s.position.z=5;const Nv=ci.attributes.position.count,Bv=new J_;function Af(){const a=Bv.getElapsedTime();for(let e=0;e<Nv;e++){const t=ci.attributes.position.getX(e);ci.attributes.position.getY(e);const i=.25*Math.sin(t+a*.7);ci.attributes.position.setZ(e,i),ci.computeVertexNormals(),ci.attributes.position.needsUpdate=!0}requestAnimationFrame(Af),Jr.render(Cf,$s)}Af();new pv(".swiper-container",{direction:"vertical",loop:!0,pagination:".swiper-pagination",grabCursor:!0,speed:1e3,paginationClickable:!0,parallax:!0,autoplay:!1,effect:"slide",mousewheelControl:1});particlesJS("particles-js",{particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:"#00bcd4"},opacity:{value:.4,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#f0c394",opacity:.4,width:1},move:{enable:!0,speed:.5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},retina_detect:!0});var ol=document.querySelector(".cont"),kv=Array.from(document.querySelectorAll(".el")),Uv=Array.from(document.querySelectorAll(".el__close-btn"));setTimeout(function(){ol.classList.remove("s--inactive")},200);kv.forEach(function(a){a.addEventListener("click",function(){this.classList.contains("s--active")||(ol.classList.add("s--el-active"),this.classList.add("s--active"))})});Uv.forEach(function(a){a.addEventListener("click",function(e){e.stopPropagation(),ol.classList.remove("s--el-active"),document.querySelector(".el.s--active").classList.remove("s--active")})});
//# sourceMappingURL=index-ad21a8d0.js.map
