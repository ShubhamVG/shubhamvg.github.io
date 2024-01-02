(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.qI(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.qJ(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.kP(b)
return new s(c,this)}:function(){if(s===null)s=A.kP(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.kP(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
kT(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jT(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kR==null){A.qx()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.m3("Return interceptor for "+A.C(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jw
if(o==null)o=$.jw=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.qC(a)
if(p!=null)return p
if(typeof a=="function")return B.cV
s=Object.getPrototypeOf(a)
if(s==null)return B.bY
if(s===Object.prototype)return B.bY
if(typeof q=="function"){o=$.jw
if(o==null)o=$.jw=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aN,enumerable:false,writable:true,configurable:true})
return B.aN}return B.aN},
lz(a,b){if(a<0||a>4294967295)throw A.d(A.ab(a,0,4294967295,"length",null))
return J.lA(new Array(a),b)},
am(a,b){if(a<0||a>4294967295)throw A.d(A.ab(a,0,4294967295,"length",null))
return J.lA(new Array(a),b)},
kf(a,b){if(a<0)throw A.d(A.eK("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.q("v<0>"))},
fs(a,b){return A.b(new Array(a),b.q("v<0>"))},
lA(a,b){return J.lB(A.b(a,b.q("v<0>")),b)},
lB(a,b){a.fixed$length=Array
return a},
lC(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nJ(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.lC(r))break;++b}return b},
nK(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.lC(q))break}return b},
cw(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dP.prototype
return J.fu.prototype}if(typeof a=="string")return J.cX.prototype
if(a==null)return J.dQ.prototype
if(typeof a=="boolean")return J.ft.prototype
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
if(typeof a=="symbol")return J.cZ.prototype
if(typeof a=="bigint")return J.cY.prototype
return a}if(a instanceof A.K)return a
return J.jT(a)},
ac(a){if(typeof a=="string")return J.cX.prototype
if(a==null)return a
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
if(typeof a=="symbol")return J.cZ.prototype
if(typeof a=="bigint")return J.cY.prototype
return a}if(a instanceof A.K)return a
return J.jT(a)},
aI(a){if(a==null)return a
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
if(typeof a=="symbol")return J.cZ.prototype
if(typeof a=="bigint")return J.cY.prototype
return a}if(a instanceof A.K)return a
return J.jT(a)},
qs(a){if(typeof a=="number")return J.cW.prototype
if(a==null)return a
if(!(a instanceof A.K))return J.cq.prototype
return a},
jS(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
if(typeof a=="symbol")return J.cZ.prototype
if(typeof a=="bigint")return J.cY.prototype
return a}if(a instanceof A.K)return a
return J.jT(a)},
mE(a){if(a==null)return a
if(!(a instanceof A.K))return J.cq.prototype
return a},
bF(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cw(a).X(a,b)},
A(a,b,c){return J.aI(a).h(a,b,c)},
n3(a,b,c,d){return J.jS(a).hY(a,b,c,d)},
n4(a,b,c){return J.mE(a).fD(a,b,c)},
n5(a,b){return J.aI(a).bv(a,b)},
bi(a,b,c,d){return J.aI(a).aW(a,b,c,d)},
hC(a){return J.cw(a).gI(a)},
n6(a){return J.mE(a).gO(a)},
k4(a){return J.aI(a).gJ(a)},
df(a){return J.ac(a).gA(a)},
n7(a){return J.jS(a).gfR(a)},
n8(a){return J.jS(a).gfS(a)},
n9(a){return J.cw(a).gaR(a)},
l1(a,b,c){return J.jS(a).h7(a,b,c)},
l2(a,b){return J.aI(a).ed(a,b)},
hD(a,b,c){return J.aI(a).bs(a,b,c)},
k5(a){return J.qs(a).i(a)},
eI(a){return J.cw(a).B(a)},
dL:function dL(){},
ft:function ft(){},
dQ:function dQ(){},
bb:function bb(){},
c7:function c7(){},
fM:function fM(){},
cq:function cq(){},
bq:function bq(){},
cY:function cY(){},
cZ:function cZ(){},
v:function v(a){this.$ti=a},
i8:function i8(a){this.$ti=a},
di:function di(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cW:function cW(){},
dP:function dP(){},
fu:function fu(){},
cX:function cX(){}},A={kg:function kg(){},
ki(a){return new A.c6("Field '"+a+"' has not been initialized.")},
ky(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
m0(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
jO(a,b,c){return a},
kS(a){var s,r
for(s=$.aK.length,r=0;r<s;++r)if(a===$.aK[r])return!0
return!1},
kx(a,b,c,d){A.h1(b,"start")
if(c!=null){A.h1(c,"end")
if(b>c)A.az(A.ab(b,0,c,"start",null))}return new A.eg(a,b,c,d.q("eg<0>"))},
nO(a,b,c,d){return new A.dr(a,b,c.q("@<0>").ap(d).q("dr<1,2>"))},
nH(){return new A.d6("No element")},
lx(){return new A.d6("Too few elements")},
c6:function c6(a){this.a=a},
as:function as(a){this.a=a},
iE:function iE(){},
dq:function dq(){},
dS:function dS(){},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c8:function c8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dT:function dT(a,b,c){this.a=a
this.b=b
this.$ti=c},
dr:function dr(a,b,c){this.a=a
this.b=b
this.$ti=c},
an:function an(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
at:function at(){},
bP:function bP(){},
d7:function d7(){},
mK(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
tp(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.ez.b(a)},
C(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.eI(a)
return s},
e7(a){var s,r=$.lT
if(r==null)r=$.lT=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
nW(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.l.lk(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
it(a){return A.nV(a)},
nV(a){var s,r,q,p
if(a instanceof A.K)return A.ax(A.aJ(a),null)
s=J.cw(a)
if(s===B.cT||s===B.cW||t.bI.b(a)){r=B.aQ(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.ax(A.aJ(a),null)},
nX(a){if(typeof a=="number"||A.kN(a))return J.eI(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bG)return a.B(0)
return"Instance of '"+A.it(a)+"'"},
lS(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nY(a){var s,r,q,p=A.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a6)(a),++r){q=a[r]
if(!A.aH(q))throw A.d(A.bW(q))
if(q<=65535)B.c.D(p,q)
else if(q<=1114111){B.c.D(p,55296+(B.a.j(q-65536,10)&1023))
B.c.D(p,56320+(q&1023))}else throw A.d(A.bW(q))}return A.lS(p)},
lU(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.aH(q))throw A.d(A.bW(q))
if(q<0)throw A.d(A.bW(q))
if(q>65535)return A.nY(a)}return A.lS(a)},
nZ(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
cn(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.j(s,10)|55296)>>>0,s&1023|56320)}throw A.d(A.ab(a,0,1114111,null,null))},
aV(a){throw A.d(A.bW(a))},
a(a,b){if(a==null)J.df(a)
throw A.d(A.jQ(a,b))},
jQ(a,b){var s,r="index"
if(!A.aH(b))return new A.b4(!0,b,r,null)
s=A.k(J.df(a))
if(b<0||b>=s)return A.i6(b,s,a,r)
return new A.ec(null,null,!0,b,r,"Value not in range")},
qh(a,b,c){if(a<0||a>c)return A.ab(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ab(b,a,c,"end",null)
return new A.b4(!0,b,"end",null)},
bW(a){return new A.b4(!0,a,null,null)},
d(a){return A.mG(new Error(),a)},
mG(a,b){var s
if(b==null)b=new A.bt()
a.dartException=b
s=A.qK
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
qK(){return J.eI(this.dartException)},
az(a){throw A.d(a)},
kV(a,b){throw A.mG(b,a)},
a6(a){throw A.d(A.dm(a))},
bu(a){var s,r,q,p,o,n
a=A.qG(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.V)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.iN(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iO(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
m1(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kh(a,b){var s=b==null,r=s?null:b.method
return new A.fy(a,r,s?null:b.receiver)},
bY(a){var s
if(a==null)return new A.ip(a)
if(a instanceof A.ds){s=a.a
return A.bX(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.bX(a,a.dartException)
return A.q6(a)},
bX(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.j(r,16)&8191)===10)switch(q){case 438:return A.bX(a,A.kh(A.C(s)+" (Error "+q+")",null))
case 445:case 5007:A.C(s)
return A.bX(a,new A.dY())}}if(a instanceof TypeError){p=$.mN()
o=$.mO()
n=$.mP()
m=$.mQ()
l=$.mT()
k=$.mU()
j=$.mS()
$.mR()
i=$.mW()
h=$.mV()
g=p.bF(s)
if(g!=null)return A.bX(a,A.kh(A.bT(s),g))
else{g=o.bF(s)
if(g!=null){g.method="call"
return A.bX(a,A.kh(A.bT(s),g))}else if(n.bF(s)!=null||m.bF(s)!=null||l.bF(s)!=null||k.bF(s)!=null||j.bF(s)!=null||m.bF(s)!=null||i.bF(s)!=null||h.bF(s)!=null){A.bT(s)
return A.bX(a,new A.dY())}}return A.bX(a,new A.hb(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ed()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bX(a,new A.b4(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ed()
return a},
bC(a){var s
if(a instanceof A.ds)return a.b
if(a==null)return new A.ey(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.ey(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kU(a){if(a==null)return J.hC(a)
if(typeof a=="object")return A.e7(a)
return J.hC(a)},
qd(a){if(typeof a=="number")return B.b.gI(a)
if(a instanceof A.ht)return A.e7(a)
return A.kU(a)},
mD(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
pI(a,b,c,d,e,f){t.Z.a(a)
switch(A.k(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.la("Unsupported number of arguments for wrapped closure"))},
hw(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.qe(a,b)
a.$identity=s
return s},
qe(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.pI)},
ni(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.h4().constructor.prototype):Object.create(new A.cx(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.l8(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ne(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.l8(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ne(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.nc)}throw A.d("Error in functionType of tearoff")},
nf(a,b,c,d){var s=A.l7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
l8(a,b,c,d){var s,r
if(c)return A.nh(a,b,d)
s=b.length
r=A.nf(s,d,a,b)
return r},
ng(a,b,c,d){var s=A.l7,r=A.nd
switch(b?-1:a){case 0:throw A.d(new A.h2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
nh(a,b,c){var s,r
if($.l5==null)$.l5=A.l4("interceptor")
if($.l6==null)$.l6=A.l4("receiver")
s=b.length
r=A.ng(s,c,a,b)
return r},
kP(a){return A.ni(a)},
nc(a,b){return A.jE(v.typeUniverse,A.aJ(a.a),b)},
l7(a){return a.a},
nd(a){return a.b},
l4(a){var s,r,q,p=new A.cx("receiver","interceptor"),o=J.lB(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.eK("Field name "+a+" not found.",null))},
qI(a){throw A.d(new A.hk(a))},
qt(a){return v.getIsolateTag(a)},
b0(a,b,c){var s=new A.a2(a,b,c.q("a2<0>"))
s.c=a.e
return s},
tn(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qC(a){var s,r,q,p,o,n=A.bT($.mF.$1(a)),m=$.jR[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jX[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ps($.mx.$2(a,n))
if(q!=null){m=$.jR[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jX[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.k_(s)
$.jR[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jX[n]=s
return s}if(p==="-"){o=A.k_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.mH(a,s)
if(p==="*")throw A.d(A.m3(n))
if(v.leafTags[n]===true){o=A.k_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.mH(a,s)},
mH(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kT(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
k_(a){return J.kT(a,!1,null,!!a.$iau)},
qE(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.k_(s)
else return J.kT(s,c,null,null)},
qx(){if(!0===$.kR)return
$.kR=!0
A.qy()},
qy(){var s,r,q,p,o,n,m,l
$.jR=Object.create(null)
$.jX=Object.create(null)
A.qw()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mI.$1(o)
if(n!=null){m=A.qE(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qw(){var s,r,q,p,o,n,m=B.cr()
m=A.de(B.cs,A.de(B.ct,A.de(B.aR,A.de(B.aR,A.de(B.cu,A.de(B.cv,A.de(B.cw(B.aQ),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mF=new A.jU(p)
$.mx=new A.jV(o)
$.mI=new A.jW(n)},
de(a,b){return a(b)||b},
qg(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
qG(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cJ:function cJ(){},
dn:function dn(a,b,c){this.a=a
this.b=b
this.$ti=c},
er:function er(a,b){this.a=a
this.$ti=b},
es:function es(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c2:function c2(a,b){this.a=a
this.$ti=b},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dY:function dY(){},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a){this.a=a},
ip:function ip(a){this.a=a},
ds:function ds(a,b){this.a=a
this.b=b},
ey:function ey(a){this.a=a
this.b=null},
bG:function bG(){},
eR:function eR(){},
eS:function eS(){},
h6:function h6(){},
h4:function h4(){},
cx:function cx(a,b){this.a=a
this.b=b},
hk:function hk(a){this.a=a},
h2:function h2(a){this.a=a},
b_:function b_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ig:function ig(a){this.a=a},
ij:function ij(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bc:function bc(a,b){this.a=a
this.$ti=b},
a2:function a2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dR:function dR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
c(a){A.kV(new A.c6("Field '"+a+"' has not been initialized."),new Error())},
kW(a){A.kV(new A.c6("Field '"+a+"' has already been initialized."),new Error())},
qJ(a){A.kV(new A.c6("Field '"+a+"' has been assigned during initialization."),new Error())},
ma(a){var s=new A.jf(a)
return s.b=s},
jf:function jf(a){this.a=a
this.b=null},
bA(a,b,c){},
t(a){var s,r,q
if(t.aP.b(a))return a
s=J.ac(a)
r=A.U(s.gA(a),null,!1,t.z)
for(q=0;q<s.gA(a);++q)B.c.h(r,q,s.n(a,q))
return r},
nP(a){return new Float32Array(a)},
nQ(a,b,c){A.bA(a,b,c)
c=B.a.S(a.byteLength-b,4)
return new Float32Array(a,b,c)},
nR(a){return new Int32Array(a)},
lF(a){return new Int8Array(a)},
lG(a,b,c){A.bA(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
nS(a){return new Uint16Array(a)},
lH(a,b,c){A.bA(a,b,c)
c=B.a.S(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
nT(a){return new Uint32Array(a)},
V(a,b,c){A.bA(a,b,c)
c=B.a.S(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
io(a){return new Uint8Array(a)},
y(a,b,c){A.bA(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
bU(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.jQ(b,a))},
bg(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.qh(a,b,c))
if(b==null)return c
return b},
fB:function fB(){},
dV:function dV(){},
aj:function aj(){},
bM:function bM(){},
aN:function aN(){},
fC:function fC(){},
dU:function dU(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
dW:function dW(){},
dX:function dX(){},
ca:function ca(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
lX(a,b){var s=b.c
return s==null?b.c=A.kK(a,b.y,!0):s},
kw(a,b){var s=b.c
return s==null?b.c=A.eB(a,"b7",[b.y]):s},
o3(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
lY(a){var s=a.x
if(s===6||s===7||s===8)return A.lY(a.y)
return s===12||s===13},
o2(a){return a.at},
a0(a){return A.hu(v.typeUniverse,a,!1)},
bV(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.bV(a,s,a0,a1)
if(r===s)return b
return A.ml(a,r,!0)
case 7:s=b.y
r=A.bV(a,s,a0,a1)
if(r===s)return b
return A.kK(a,r,!0)
case 8:s=b.y
r=A.bV(a,s,a0,a1)
if(r===s)return b
return A.mk(a,r,!0)
case 9:q=b.z
p=A.eG(a,q,a0,a1)
if(p===q)return b
return A.eB(a,b.y,p)
case 10:o=b.y
n=A.bV(a,o,a0,a1)
m=b.z
l=A.eG(a,m,a0,a1)
if(n===o&&l===m)return b
return A.kI(a,n,l)
case 12:k=b.y
j=A.bV(a,k,a0,a1)
i=b.z
h=A.q3(a,i,a0,a1)
if(j===k&&h===i)return b
return A.mj(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.eG(a,g,a0,a1)
o=b.y
n=A.bV(a,o,a0,a1)
if(f===g&&n===o)return b
return A.kJ(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.eN("Attempted to substitute unexpected RTI kind "+c))}},
eG(a,b,c,d){var s,r,q,p,o=b.length,n=A.jG(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bV(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
q4(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.jG(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bV(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
q3(a,b,c,d){var s,r=b.a,q=A.eG(a,r,c,d),p=b.b,o=A.eG(a,p,c,d),n=b.c,m=A.q4(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hp()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
mz(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.qv(r)
s=a.$S()
return s}return null},
qz(a,b){var s
if(A.lY(b))if(a instanceof A.bG){s=A.mz(a)
if(s!=null)return s}return A.aJ(a)},
aJ(a){if(a instanceof A.K)return A.m(a)
if(Array.isArray(a))return A.bf(a)
return A.kM(J.cw(a))},
bf(a){var s=a[v.arrayRti],r=t.cO
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
m(a){var s=a.$ti
return s!=null?s:A.kM(a)},
kM(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pH(a,s)},
pH(a,b){var s=a instanceof A.bG?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.pk(v.typeUniverse,s.name)
b.$ccache=r
return r},
qv(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.hu(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
qu(a){return A.cv(A.m(a))},
q2(a){var s=a instanceof A.bG?A.mz(a):null
if(s!=null)return s
if(t.ci.b(a))return J.n9(a).a
if(Array.isArray(a))return A.bf(a)
return A.aJ(a)},
cv(a){var s=a.w
return s==null?a.w=A.mo(a):s},
mo(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.ht(a)
s=A.hu(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.mo(s):r},
bE(a){return A.cv(A.hu(v.typeUniverse,a,!1))},
pG(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.bB(m,a,A.pN)
if(!A.bD(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.bB(m,a,A.pR)
s=m.x
if(s===7)return A.bB(m,a,A.pE)
if(s===1)return A.bB(m,a,A.ms)
r=s===6?m.y:m
q=r.x
if(q===8)return A.bB(m,a,A.pJ)
if(r===t.p)p=A.aH
else if(r===t.W||r===t.di)p=A.pM
else if(r===t.N)p=A.pP
else p=r===t.y?A.kN:null
if(p!=null)return A.bB(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.qB)){m.r="$i"+o
if(o==="p")return A.bB(m,a,A.pL)
return A.bB(m,a,A.pQ)}}else if(q===11){n=A.qg(r.y,r.z)
return A.bB(m,a,n==null?A.ms:n)}return A.bB(m,a,A.pC)},
bB(a,b,c){a.b=c
return a.b(b)},
pF(a){var s,r=this,q=A.pB
if(!A.bD(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.pt
else if(r===t.K)q=A.pr
else{s=A.eH(r)
if(s)q=A.pD}r.a=q
return r.a(a)},
hv(a){var s,r=a.x
if(!A.bD(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)if(!(r===6&&A.hv(a.y)))s=r===8&&A.hv(a.y)||a===t.b||a===t.u
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pC(a){var s=this
if(a==null)return A.hv(s)
return A.qA(v.typeUniverse,A.qz(a,s),s)},
pE(a){if(a==null)return!0
return this.y.b(a)},
pQ(a){var s,r=this
if(a==null)return A.hv(r)
s=r.r
if(a instanceof A.K)return!!a[s]
return!!J.cw(a)[s]},
pL(a){var s,r=this
if(a==null)return A.hv(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.K)return!!a[s]
return!!J.cw(a)[s]},
pB(a){var s,r=this
if(a==null){s=A.eH(r)
if(s)return a}else if(r.b(a))return a
A.mp(a,r)},
pD(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.mp(a,s)},
mp(a,b){throw A.d(A.p9(A.mb(a,A.ax(b,null))))},
mb(a,b){return A.hQ(a)+": type '"+A.ax(A.q2(a),null)+"' is not a subtype of type '"+b+"'"},
p9(a){return new A.ez("TypeError: "+a)},
ap(a,b){return new A.ez("TypeError: "+A.mb(a,b))},
pJ(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.kw(v.typeUniverse,r).b(a)},
pN(a){return a!=null},
pr(a){if(a!=null)return a
throw A.d(A.ap(a,"Object"))},
pR(a){return!0},
pt(a){return a},
ms(a){return!1},
kN(a){return!0===a||!1===a},
td(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.ap(a,"bool"))},
tf(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ap(a,"bool"))},
te(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ap(a,"bool?"))},
po(a){if(typeof a=="number")return a
throw A.d(A.ap(a,"double"))},
th(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ap(a,"double"))},
tg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ap(a,"double?"))},
aH(a){return typeof a=="number"&&Math.floor(a)===a},
k(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.ap(a,"int"))},
tj(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ap(a,"int"))},
ti(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ap(a,"int?"))},
pM(a){return typeof a=="number"},
pp(a){if(typeof a=="number")return a
throw A.d(A.ap(a,"num"))},
tk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ap(a,"num"))},
pq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ap(a,"num?"))},
pP(a){return typeof a=="string"},
bT(a){if(typeof a=="string")return a
throw A.d(A.ap(a,"String"))},
tl(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ap(a,"String"))},
ps(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ap(a,"String?"))},
mv(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ax(a[q],b)
return s},
pV(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.mv(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.ax(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
mq(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.b([],t.V)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.c.D(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.a(a5,j)
m=B.l.aJ(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.ax(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.ax(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.ax(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.ax(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.ax(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ax(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.ax(a.y,b)
return s}if(l===7){r=a.y
s=A.ax(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.ax(a.y,b)+">"
if(l===9){p=A.q5(a.y)
o=a.z
return o.length>0?p+("<"+A.mv(o,b)+">"):p}if(l===11)return A.pV(a,b)
if(l===12)return A.mq(a,b,null)
if(l===13)return A.mq(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
q5(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
pl(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pk(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.hu(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eC(a,5,"#")
q=A.jG(s)
for(p=0;p<s;++p)q[p]=r
o=A.eB(a,b,q)
n[b]=o
return o}else return m},
pi(a,b){return A.mm(a.tR,b)},
ph(a,b){return A.mm(a.eT,b)},
hu(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.mh(A.mf(a,null,b,c))
r.set(b,s)
return s},
jE(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.mh(A.mf(a,b,c,!0))
q.set(c,r)
return r},
pj(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.kI(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
bz(a,b){b.a=A.pF
b.b=A.pG
return b},
eC(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aS(null,null)
s.x=b
s.at=c
r=A.bz(a,s)
a.eC.set(c,r)
return r},
ml(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.pe(a,b,r,c)
a.eC.set(r,s)
return s},
pe(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.bD(b))r=b===t.b||b===t.u||s===7||s===6
else r=!0
if(r)return b}q=new A.aS(null,null)
q.x=6
q.y=b
q.at=c
return A.bz(a,q)},
kK(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.pd(a,b,r,c)
a.eC.set(r,s)
return s},
pd(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.bD(b))if(!(b===t.b||b===t.u))if(s!==7)r=s===8&&A.eH(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.b
else if(s===6){q=b.y
if(q.x===8&&A.eH(q.y))return q
else return A.lX(a,b)}}p=new A.aS(null,null)
p.x=7
p.y=b
p.at=c
return A.bz(a,p)},
mk(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.pb(a,b,r,c)
a.eC.set(r,s)
return s},
pb(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.bD(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.eB(a,"b7",[b])
else if(b===t.b||b===t.u)return t.eH}q=new A.aS(null,null)
q.x=8
q.y=b
q.at=c
return A.bz(a,q)},
pf(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aS(null,null)
s.x=14
s.y=b
s.at=q
r=A.bz(a,s)
a.eC.set(q,r)
return r},
eA(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
pa(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
eB(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.eA(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aS(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.bz(a,r)
a.eC.set(p,q)
return q},
kI(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.eA(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aS(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.bz(a,o)
a.eC.set(q,n)
return n},
pg(a,b,c){var s,r,q="+"+(b+"("+A.eA(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aS(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.bz(a,s)
a.eC.set(q,r)
return r},
mj(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.eA(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.eA(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.pa(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aS(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.bz(a,p)
a.eC.set(r,o)
return o},
kJ(a,b,c,d){var s,r=b.at+("<"+A.eA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.pc(a,b,c,r,d)
a.eC.set(r,s)
return s},
pc(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.jG(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.bV(a,b,r,0)
m=A.eG(a,c,r,0)
return A.kJ(a,n,m,c!==m)}}l=new A.aS(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.bz(a,l)},
mf(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mh(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.p3(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.mg(a,r,l,k,!1)
else if(q===46)r=A.mg(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bS(a.u,a.e,k.pop()))
break
case 94:k.push(A.pf(a.u,k.pop()))
break
case 35:k.push(A.eC(a.u,5,"#"))
break
case 64:k.push(A.eC(a.u,2,"@"))
break
case 126:k.push(A.eC(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.p5(a,k)
break
case 38:A.p4(a,k)
break
case 42:p=a.u
k.push(A.ml(p,A.bS(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.kK(p,A.bS(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.mk(p,A.bS(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.p2(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.mi(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.p7(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.bS(a.u,a.e,m)},
p3(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mg(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.pl(s,o.y)[p]
if(n==null)A.az('No "'+p+'" in "'+A.o2(o)+'"')
d.push(A.jE(s,o,n))}else d.push(p)
return m},
p5(a,b){var s,r=a.u,q=A.me(a,b),p=b.pop()
if(typeof p=="string")b.push(A.eB(r,p,q))
else{s=A.bS(r,a.e,p)
switch(s.x){case 12:b.push(A.kJ(r,s,q,a.n))
break
default:b.push(A.kI(r,s,q))
break}}},
p2(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
if(typeof l=="number")switch(l){case-1:s=b.pop()
r=n
break
case-2:r=b.pop()
s=n
break
default:b.push(l)
r=n
s=r
break}else{b.push(l)
r=n
s=r}q=A.me(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.bS(m,a.e,l)
o=new A.hp()
o.a=q
o.b=s
o.c=r
b.push(A.mj(m,p,o))
return
case-4:b.push(A.pg(m,b.pop(),q))
return
default:throw A.d(A.eN("Unexpected state under `()`: "+A.C(l)))}},
p4(a,b){var s=b.pop()
if(0===s){b.push(A.eC(a.u,1,"0&"))
return}if(1===s){b.push(A.eC(a.u,4,"1&"))
return}throw A.d(A.eN("Unexpected extended operation "+A.C(s)))},
me(a,b){var s=b.splice(a.p)
A.mi(a.u,a.e,s)
a.p=b.pop()
return s},
bS(a,b,c){if(typeof c=="string")return A.eB(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.p6(a,b,c)}else return c},
mi(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bS(a,b,c[s])},
p7(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bS(a,b,c[s])},
p6(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.eN("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.eN("Bad index "+c+" for "+b.B(0)))},
qA(a,b,c){var s,r=A.o3(b),q=r.get(c)
if(q!=null)return q
s=A.X(a,b,null,c,null)
r.set(c,s)
return s},
X(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.bD(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.bD(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.X(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.b||b===t.u
if(s){if(p===8)return A.X(a,b,c,d.y,e)
return d===t.b||d===t.u||p===7||p===6}if(d===t.K){if(r===8)return A.X(a,b.y,c,d,e)
if(r===6)return A.X(a,b.y,c,d,e)
return r!==7}if(r===6)return A.X(a,b.y,c,d,e)
if(p===6){s=A.lX(a,d)
return A.X(a,b,c,s,e)}if(r===8){if(!A.X(a,b.y,c,d,e))return!1
return A.X(a,A.kw(a,b),c,d,e)}if(r===7){s=A.X(a,t.b,c,d,e)
return s&&A.X(a,b.y,c,d,e)}if(p===8){if(A.X(a,b,c,d.y,e))return!0
return A.X(a,b,c,A.kw(a,d),e)}if(p===7){s=A.X(a,b,c,t.b,e)
return s||A.X(a,b,c,d.y,e)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.gT)return!0
if(p===13){if(b===t.cj)return!0
if(r!==13)return!1
n=b.z
m=d.z
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.X(a,j,c,i,e)||!A.X(a,i,e,j,c))return!1}return A.mr(a,b.y,c,d.y,e)}if(p===12){if(b===t.cj)return!0
if(s)return!1
return A.mr(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.pK(a,b,c,d,e)}if(o&&p===11)return A.pO(a,b,c,d,e)
return!1},
mr(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.X(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.X(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.X(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.X(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.X(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pK(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.jE(a,b,r[o])
return A.mn(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.mn(a,n,null,c,m,e)},
mn(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.X(a,r,d,q,f))return!1}return!0},
pO(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.X(a,r[s],c,q[s],e))return!1
return!0},
eH(a){var s,r=a.x
if(!(a===t.b||a===t.u))if(!A.bD(a))if(r!==7)if(!(r===6&&A.eH(a.y)))s=r===8&&A.eH(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qB(a){var s
if(!A.bD(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bD(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
mm(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
jG(a){return a>0?new Array(a):v.typeUniverse.sEA},
aS:function aS(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
hp:function hp(){this.c=this.b=this.a=null},
ht:function ht(a){this.a=a},
hl:function hl(){},
ez:function ez(a){this.a=a},
oV(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.q9()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.hw(new A.jb(q),1)).observe(s,{childList:true})
return new A.ja(q,s,r)}else if(self.setImmediate!=null)return A.qa()
return A.qb()},
oW(a){self.scheduleImmediate(A.hw(new A.jc(t.M.a(a)),0))},
oX(a){self.setImmediate(A.hw(new A.jd(t.M.a(a)),0))},
oY(a){A.kA(B.cB,t.M.a(a))},
kA(a,b){var s=B.a.S(a.a,1000)
return A.p8(s,b)},
p8(a,b){var s=new A.jA()
s.hE(a,b)
return s},
pT(a){return new A.hi(new A.a_($.R,a.q("a_<0>")),a.q("hi<0>"))},
px(a,b){a.$2(0,null)
b.b=!0
return b.a},
pu(a,b){A.py(a,b)},
pw(a,b){var s,r,q=b.$ti
q.q("1/?").a(a)
s=a==null?q.c.a(a):a
if(!b.b)b.a.i0(s)
else{r=b.a
if(q.q("b7<1>").b(s))r.eq(s)
else r.dA(s)}},
pv(a,b){var s=A.bY(a),r=A.bC(a),q=b.b,p=b.a
if(q)p.cw(s,r)
else p.i1(s,r)},
py(a,b){var s,r,q=new A.jI(b),p=new A.jJ(b)
if(a instanceof A.a_)a.fe(q,p,t.z)
else{s=t.z
if(a instanceof A.a_)a.e6(q,p,s)
else{r=new A.a_($.R,t.c)
r.a=8
r.c=a
r.fe(q,p,s)}}},
q7(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.R.fW(new A.jM(s),t.q,t.p,t.z)},
hF(a,b){var s=A.jO(a,"error",t.K)
return new A.dj(s,b==null?A.na(a):b)},
na(a){var s
if(t.Q.b(a)){s=a.gd_()
if(s!=null)return s}return B.cz},
nx(a,b){var s,r=!b.b(null)
if(r)throw A.d(A.eL(null,"computation","The type parameter is not nullable"))
s=new A.a_($.R,b.q("a_<0>"))
A.o6(a,new A.hU(null,s,b))
return s},
mc(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.de()
b.d2(a)
A.db(b,q)}else{q=t.F.a(b.c)
b.fa(a)
a.dU(q)}},
p_(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.fa(o)
p.a.dU(q)
return}if((r&16)===0&&b.c==null){b.d2(o)
return}b.a^=2
A.cu(null,null,b.b,t.M.a(new A.jm(p,b)))},
db(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.b9;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.jK(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.db(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.jK(i.a,i.b)
return}f=$.R
if(f!==g)$.R=g
else f=null
b=b.c
if((b&15)===8)new A.jt(p,c,m).$0()
else if(n){if((b&1)!==0)new A.js(p,i).$0()}else if((b&2)!==0)new A.jr(c,p).$0()
if(f!=null)$.R=f
b=p.c
if(b instanceof A.a_){o=p.a.$ti
o=o.q("b7<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.df(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.mc(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.df(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
pW(a,b){var s
if(t.C.b(a))return b.fW(a,t.z,t.K,t.l)
s=t.w
if(s.b(a))return s.a(a)
throw A.d(A.eL(a,"onError",u.c))},
pU(){var s,r
for(s=$.dd;s!=null;s=$.dd){$.eF=null
r=s.b
$.dd=r
if(r==null)$.eE=null
s.a.$0()}},
q1(){$.kO=!0
try{A.pU()}finally{$.eF=null
$.kO=!1
if($.dd!=null)$.kY().$1(A.my())}},
mw(a){var s=new A.hj(a),r=$.eE
if(r==null){$.dd=$.eE=s
if(!$.kO)$.kY().$1(A.my())}else $.eE=r.b=s},
q0(a){var s,r,q,p=$.dd
if(p==null){A.mw(a)
$.eF=$.eE
return}s=new A.hj(a)
r=$.eF
if(r==null){s.b=p
$.dd=$.eF=s}else{q=r.b
s.b=q
$.eF=r.b=s
if(q==null)$.eE=s}},
qH(a){var s,r=null,q=$.R
if(B.r===q){A.cu(r,r,B.r,a)
return}s=!1
if(s){A.cu(r,r,q,t.M.a(a))
return}A.cu(r,r,q,t.M.a(q.dZ(a)))},
rE(a,b){A.jO(a,"stream",t.K)
return new A.hr(b.q("hr<0>"))},
o6(a,b){var s=$.R
if(s===B.r)return A.kA(a,t.M.a(b))
return A.kA(a,t.M.a(s.dZ(b)))},
jK(a,b){A.q0(new A.jL(a,b))},
mt(a,b,c,d,e){var s,r=$.R
if(r===c)return d.$0()
$.R=c
s=r
try{r=d.$0()
return r}finally{$.R=s}},
mu(a,b,c,d,e,f,g){var s,r=$.R
if(r===c)return d.$1(e)
$.R=c
s=r
try{r=d.$1(e)
return r}finally{$.R=s}},
pX(a,b,c,d,e,f,g,h,i){var s,r=$.R
if(r===c)return d.$2(e,f)
$.R=c
s=r
try{r=d.$2(e,f)
return r}finally{$.R=s}},
cu(a,b,c,d){t.M.a(d)
if(B.r!==c)d=c.dZ(d)
A.mw(d)},
jb:function jb(a){this.a=a},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
jA:function jA(){},
jB:function jB(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=!1
this.$ti=b},
jI:function jI(a){this.a=a},
jJ:function jJ(a){this.a=a},
jM:function jM(a){this.a=a},
dj:function dj(a,b){this.a=a
this.b=b},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
a_:function a_(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jj:function jj(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a){this.a=a},
js:function js(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
hj:function hj(a){this.a=a
this.b=null},
ee:function ee(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
hr:function hr(a){this.$ti=a},
eD:function eD(){},
jL:function jL(a,b){this.a=a
this.b=b},
hq:function hq(){},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
nL(a,b){return new A.b_(a.q("@<0>").ap(b).q("b_<1,2>"))},
nM(a,b,c){return b.q("@<0>").ap(c).q("kj<1,2>").a(A.mD(a,new A.b_(b.q("@<0>").ap(c).q("b_<1,2>"))))},
I(a,b){return new A.b_(a.q("@<0>").ap(b).q("b_<1,2>"))},
fA(a,b,c){var s=A.nL(b,c)
a.c4(0,new A.ik(s,b,c))
return s},
kl(a){var s,r={}
if(A.kS(a))return"{...}"
s=new A.ef("")
try{B.c.D($.aK,a)
s.a+="{"
r.a=!0
a.c4(0,new A.im(r,s))
s.a+="}"}finally{if(0>=$.aK.length)return A.a($.aK,-1)
$.aK.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
F:function F(){},
d_:function d_(){},
im:function im(a,b){this.a=a
this.b=b},
o8(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.o9(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
o9(a,b,c,d){var s=a?$.mY():$.mX()
if(s==null)return null
if(0===c&&d===b.length)return A.m4(s,b)
return A.m4(s,b.subarray(c,A.aQ(c,d,b.length)))},
m4(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
oZ(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=h>>>2,i=3-(h&3)
for(s=b.length,r=a.length,q=f.length,p=c,o=0;p<d;++p){if(!(p<s))return A.a(b,p)
n=b[p]
o|=n
j=(j<<8|n)&16777215;--i
if(i===0){m=g+1
l=j>>>18&63
if(!(l<r))return A.a(a,l)
if(!(g<q))return A.a(f,g)
f[g]=a.charCodeAt(l)
g=m+1
l=j>>>12&63
if(!(l<r))return A.a(a,l)
if(!(m<q))return A.a(f,m)
f[m]=a.charCodeAt(l)
m=g+1
l=j>>>6&63
if(!(l<r))return A.a(a,l)
if(!(g<q))return A.a(f,g)
f[g]=a.charCodeAt(l)
g=m+1
l=j&63
if(!(l<r))return A.a(a,l)
if(!(m<q))return A.a(f,m)
f[m]=a.charCodeAt(l)
j=0
i=3}}if(o>=0&&o<=255){if(i<3){m=g+1
k=m+1
if(3-i===1){s=j>>>2&63
if(!(s<r))return A.a(a,s)
if(!(g<q))return A.a(f,g)
f[g]=a.charCodeAt(s)
s=j<<4&63
if(!(s<r))return A.a(a,s)
if(!(m<q))return A.a(f,m)
f[m]=a.charCodeAt(s)
g=k+1
if(!(k<q))return A.a(f,k)
f[k]=61
if(!(g<q))return A.a(f,g)
f[g]=61}else{s=j>>>10&63
if(!(s<r))return A.a(a,s)
if(!(g<q))return A.a(f,g)
f[g]=a.charCodeAt(s)
s=j>>>4&63
if(!(s<r))return A.a(a,s)
if(!(m<q))return A.a(f,m)
f[m]=a.charCodeAt(s)
g=k+1
s=j<<2&63
if(!(s<r))return A.a(a,s)
if(!(k<q))return A.a(f,k)
f[k]=a.charCodeAt(s)
if(!(g<q))return A.a(f,g)
f[g]=61}return 0}return(j<<2|3-i)>>>0}for(p=c;p<d;){if(!(p<s))return A.a(b,p)
n=b[p]
if(n>255)break;++p}if(!(p<s))return A.a(b,p)
throw A.d(A.eL(b,"Not a byte value at index "+p+": 0x"+B.a.co(b[p],16),null))},
pn(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pm(a,b,c){var s,r,q,p,o=c-b,n=new Uint8Array(o)
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)>>>0!==0)p=255
if(!(r<o))return A.a(n,r)
n[r]=p}return n},
iQ:function iQ(){},
iP:function iP(){},
jD:function jD(){},
jC:function jC(){},
dk:function dk(){},
hG:function hG(){},
je:function je(a){this.a=0
this.b=a},
aW:function aW(){},
eW:function eW(){},
eY:function eY(){},
fz:function fz(){},
ii:function ii(){},
ih:function ih(a){this.a=a},
hd:function hd(){},
he:function he(a){this.a=a},
jF:function jF(a){this.a=a
this.b=16
this.c=0},
qi(a){var s=A.nW(a)
if(s!=null)return s
throw A.d(A.kd("Invalid double",a,null))},
nk(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.B(0)
throw a
throw A.d("unreachable")},
U(a,b,c,d){var s,r=J.lz(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
c9(a,b){var s,r=A.b([],b.q("v<0>"))
for(s=J.k4(a);s.E();)B.c.D(r,b.a(s.gU()))
return r},
x(a,b,c){var s=A.nN(a,c)
return s},
nN(a,b){var s,r=A.b([],b.q("v<0>"))
for(s=a.gJ(a);s.E();)B.c.D(r,s.gU())
return r},
kk(a,b,c){var s,r=J.kf(a,c)
for(s=0;s<a;++s)B.c.h(r,s,b.$1(s))
return r},
h5(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=A.aQ(b,c,r)
return A.lU(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return A.nZ(a,b,A.aQ(b,c,a.length))
return A.o5(a,b,c)},
o5(a,b,c){var s,r,q,p,o=null
if(b<0)throw A.d(A.ab(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw A.d(A.ab(c,b,a.length,o,o))
r=J.k4(a)
for(q=0;q<b;++q)if(!r.E())throw A.d(A.ab(b,0,q,o,o))
p=[]
if(s)for(;r.E();)p.push(r.gU())
else for(q=b;q<c;++q){if(!r.E())throw A.d(A.ab(c,b,q,o,o))
p.push(r.gU())}return A.lU(p)},
m_(a,b,c){var s=J.k4(b)
if(!s.E())return a
if(c.length===0){do a+=A.C(s.gU())
while(s.E())}else{a+=A.C(s.gU())
for(;s.E();)a=a+c+A.C(s.gU())}return a},
hQ(a){if(typeof a=="number"||A.kN(a)||a==null)return J.eI(a)
if(typeof a=="string")return JSON.stringify(a)
return A.nX(a)},
nl(a,b){A.jO(a,"error",t.K)
A.jO(b,"stackTrace",t.l)
A.nk(a,b)},
eN(a){return new A.eM(a)},
eK(a,b){return new A.b4(!1,null,b,a)},
eL(a,b,c){return new A.b4(!0,a,b,c)},
ab(a,b,c,d,e){return new A.ec(b,c,!0,a,d,"Invalid value")},
aQ(a,b,c){if(0>a||a>c)throw A.d(A.ab(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.ab(b,a,c,"end",null))
return b}return c},
h1(a,b){if(a<0)throw A.d(A.ab(a,0,null,b,null))
return a},
i6(a,b,c,d){return new A.fc(b,!0,a,d,"Index out of range")},
ag(a){return new A.hc(a)},
m3(a){return new A.ha(a)},
lZ(a){return new A.d6(a)},
dm(a){return new A.eV(a)},
la(a){return new A.ji(a)},
kd(a,b,c){return new A.f4(a,b,c)},
nI(a,b,c){var s,r
if(A.kS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.V)
B.c.D($.aK,a)
try{A.pS(a,s)}finally{if(0>=$.aK.length)return A.a($.aK,-1)
$.aK.pop()}r=A.m_(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ly(a,b,c){var s,r
if(A.kS(a))return b+"..."+c
s=new A.ef(b)
B.c.D($.aK,a)
try{r=s
r.a=A.m_(r.a,a,", ")}finally{if(0>=$.aK.length)return A.a($.aK,-1)
$.aK.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
pS(a,b){var s,r,q,p,o,n,m,l=a.gJ(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.E())return
s=A.C(l.gU())
B.c.D(b,s)
k+=s.length+2;++j}if(!l.E()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gU();++j
if(!l.E()){if(j<=4){B.c.D(b,A.C(p))
return}r=A.C(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gU();++j
for(;l.E();p=o,o=n){n=l.gU();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.c.D(b,"...")
return}}q=A.C(p)
r=A.C(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.D(b,m)
B.c.D(b,q)
B.c.D(b,r)},
nU(a,b){var s=B.a.gI(a)
b=B.a.gI(b)
b=A.m0(A.ky(A.ky($.l0(),s),b))
return b},
l(a){var s,r,q=$.l0()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a6)(a),++r)q=A.ky(q,J.hC(a[r]))
return A.m0(q)},
dp:function dp(a){this.a=a},
jg:function jg(){},
O:function O(){},
eM:function eM(a){this.a=a},
bt:function bt(){},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ec:function ec(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fc:function fc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hc:function hc(a){this.a=a},
ha:function ha(a){this.a=a},
d6:function d6(a){this.a=a},
eV:function eV(a){this.a=a},
fH:function fH(){},
ed:function ed(){},
ji:function ji(a){this.a=a},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(){},
af:function af(){},
K:function K(){},
hs:function hs(){},
ef:function ef(a){this.a=a},
kF(a,b,c,d,e){var s=A.q8(new A.jh(c),t.O),r=s!=null
if(r&&!0){t.bw.a(s)
if(r)J.n3(a,b,s,!1)}return new A.eq(a,b,s,!1,e.q("eq<0>"))},
q8(a,b){var s=$.R
if(s===B.r)return a
return s.kp(a,b)},
r:function r(){},
dg:function dg(){},
eJ:function eJ(){},
eP:function eP(){},
b5:function b5(){},
hO:function hO(){},
ak:function ak(){},
n:function n(){},
ah:function ah(){},
aD:function aD(){},
dx:function dx(){},
dy:function dy(){},
f3:function f3(){},
cV:function cV(){},
aF:function aF(){},
av:function av(){},
h3:function h3(){},
b2:function b2(){},
k8:function k8(a,b){this.a=a
this.$ti=b},
ep:function ep(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eq:function eq(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jh:function jh(a){this.a=a},
bL:function bL(){},
dz:function dz(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
hn:function hn(){},
ho:function ho(){},
q:function q(){},
dh(a){return new A.hE(a,null,null)},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
c5(a,b,c,d){var s,r
if(t.ak.b(a))s=A.y(a.buffer,a.byteOffset,a.byteLength)
else s=t.L.b(a)?a:A.c9(t.hf.a(a),t.p)
r=new A.fe(s,d,d,b)
r.e=c==null?s.length:c
return r},
ff:function ff(){},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$},
ir(a,b){var s=b==null?32768:b
return new A.iq(a,new Uint8Array(s))},
is:function is(){},
iq:function iq(a,b){this.a=0
this.b=a
this.c=b},
jH:function jH(){},
l9(a,b,c,d){var s,r=b*2,q=a.length
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
s=c*2
if(!(s>=0&&s<q))return A.a(a,s)
s=a[s]
if(r>=s)if(r===s){if(!(b>=0&&b<573))return A.a(d,b)
r=d[b]
if(!(c>=0&&c<573))return A.a(d,c)
r=r<=d[c]}else r=!1
else r=!0
return r},
kG(){return new A.jv()},
p0(a,b,c){var s,r,q,p,o,n,m,l=new Uint16Array(16)
for(s=0,r=1;r<=15;++r){s=s+c[r-1]<<1>>>0
if(!(r<16))return A.a(l,r)
l[r]=s}for(q=a.length,p=0;p<=b;++p){o=p*2
n=o+1
if(!(n<q))return A.a(a,n)
m=a[n]
if(m===0)continue
if(!(m>=0&&m<16))return A.a(l,m)
n=l[m]
if(!(m<16))return A.a(l,m)
l[m]=n+1
n=A.p1(n,m)
if(!(o<q))return A.a(a,o)
a[o]=n}},
p1(a,b){var s,r=0
do{s=A.aw(a,1)
r=(r|a&1)<<1>>>0
if(--b,b>0){a=s
continue}else break}while(!0)
return A.aw(r,1)},
md(a){var s
if(a<256){if(!(a>=0))return A.a(B.al,a)
s=B.al[a]}else{s=256+A.aw(a,7)
if(!(s<512))return A.a(B.al,s)
s=B.al[s]}return s},
kH(a,b,c,d,e){return new A.jz(a,b,c,d,e)},
aw(a,b){if(a>=0)return B.a.b0(a,b)
else return B.a.b0(a,b)+B.a.R(2,(~b>>>0)+65536&65535)},
hM:function hM(a,b,c,d,e,f,g,h){var _=this
_.b=_.a=0
_.c=a
_.d=b
_.e=null
_.x=_.w=_.r=_.f=$
_.y=2
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=$
_.k2=0
_.p4=_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=$
_.R8=c
_.RG=d
_.rx=e
_.ry=f
_.to=g
_.x2=_.x1=$
_.xr=h
_.be=_.bd=_.bP=_.c2=_.bO=_.b3=_.bl=_.b2=_.y2=_.y1=$},
aU:function aU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jv:function jv(){this.c=this.b=this.a=$},
jz:function jz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cM(a){var s=new A.hY()
s.ho(a)
return s},
hY:function hY(){this.a=$
this.b=0
this.c=2147483647},
lu(a){var s=A.cM(B.bl),r=A.cM(B.bC)
r=new A.fd(A.c5(a,0,null,0),A.ir(0,null),s,r)
r.b=!0
r.eP()
return r},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=!1
_.c=b
_.e=_.d=0
_.r=c
_.w=d},
j8:function j8(){},
j7:function j7(){},
j9:function j9(){},
hK:function hK(a,b){this.a=a
this.b=b},
M:function M(a){this.a=-1
this.b=a},
cy:function cy(a){this.a=a},
cz:function cz(a){this.a=a},
cA:function cA(a){this.a=a},
cB:function cB(a){this.a=a},
cC:function cC(a){this.a=a},
cD:function cD(a){this.a=a},
cE:function cE(a,b){this.a=a
this.b=b},
cF:function cF(a){this.a=a},
cG:function cG(a,b){this.a=a
this.b=b},
cH:function cH(a){this.a=a},
cI:function cI(a,b){this.a=a
this.b=b},
nj(a,b,c,d){var s=new A.dl(new Uint8Array(4))
s.hj(a,b,c,d)
return s},
bk:function bk(a){this.a=a},
eT:function eT(a){this.a=a},
dl:function dl(a){this.a=a},
kQ(a,b,c){var s
if(b===c)return a
switch(b.a){case 0:if(a===0)s=0
else{s=B.bW.n(0,c)
s.toString}return s
case 1:switch(c.a){case 0:return a===0?0:1
case 1:return a
case 2:return a*5
case 3:return a*75
case 4:return a*21845
case 5:return a*1431655765
case 6:return a*42
case 7:return a*10922
case 8:return a*715827882
case 9:case 10:case 11:return a/3}break
case 2:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.k(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.k(a),6)
case 2:return B.a.j(A.k(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.a.j(A.k(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.k(a),14)
case 2:return B.a.j(A.k(a),12)
case 3:return B.a.j(A.k(a),8)
case 4:return a
case 5:return A.k(a)<<8>>>0
case 6:return B.a.j(A.k(a),9)
case 7:return B.a.j(A.k(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.k(a),30)
case 2:return B.a.j(A.k(a),28)
case 3:return B.a.j(A.k(a),24)
case 4:return B.a.j(A.k(a),16)
case 5:return a
case 6:return B.a.j(A.k(a),25)
case 7:return B.a.j(A.k(a),17)
case 8:return B.a.j(A.k(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.k(a),5)
case 2:return a<=0?0:B.a.j(A.k(a),3)
case 3:return a<=0?0:A.k(a)<<1>>>0
case 4:return a<=0?0:A.k(a)*516
case 5:return a<=0?0:A.k(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.k(a),15)
case 2:return a<=0?0:B.a.j(A.k(a),11)
case 3:return a<=0?0:B.a.j(A.k(a),7)
case 4:return a<=0?0:A.k(a)<<1>>>0
case 5:return a<=0?0:A.k(a)*131076
case 6:return B.a.j(A.k(a),8)
case 7:return a
case 8:return A.k(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.k(a),29)
case 2:return a<=0?0:B.a.j(A.k(a),27)
case 3:return a<=0?0:B.a.j(A.k(a),23)
case 4:return a<=0?0:B.a.j(A.k(a),16)
case 5:return a<=0?0:A.k(a)<<1>>>0
case 6:return B.a.j(A.k(a),24)
case 7:return B.a.j(A.k(a),16)
case 8:return a
case 9:case 10:case 11:return a/2147483647}break
case 9:case 10:case 11:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.i(B.b.N(a,0,1)*3)
case 2:return B.b.i(B.b.N(a,0,1)*15)
case 3:return B.b.i(B.b.N(a,0,1)*255)
case 4:return B.b.i(B.b.N(a,0,1)*65535)
case 5:return B.b.i(B.b.N(a,0,1)*4294967295)
case 6:return B.b.i(a<0?B.b.N(a,-1,1)*128:B.b.N(a,-1,1)*127)
case 7:return B.b.i(a<0?B.b.N(a,-1,1)*32768:B.b.N(a,-1,1)*32767)
case 8:return B.b.i(a<0?B.b.N(a,-1,1)*2147483648:B.b.N(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
al:function al(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
eO:function eO(a,b){this.a=a
this.b=b},
dt(a){var s=new A.c_(A.I(t.N,t.P))
s.hp(a)
return s},
c_:function c_(a){this.a=a},
hm:function hm(a,b){this.a=a
this.b=b},
f(a,b,c){return new A.eZ(a,b)},
eZ:function eZ(a,b){this.a=a
this.b=b},
aL:function aL(a){this.a=a},
i0:function i0(a){this.a=a},
li(a){var s=new A.aE(A.I(t.p,t.r),new A.aL(A.I(t.N,t.P)))
s.fC(a)
return s},
aE:function aE(a,b){this.a=a
this.b=b},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
nC(a){var s=new Uint16Array(1)
if(0>=1)return A.a(s,0)
s[0]=a
return new A.bo(s)},
lq(a,b){var s=new A.bo(new Uint16Array(b))
s.hu(a,b)
return s},
nB(a){var s=new Uint32Array(1)
if(0>=1)return A.a(s,0)
s[0]=a
return new A.aM(s)},
ll(a,b){var s=new A.aM(new Uint32Array(b))
s.hr(a,b)
return s},
lm(a,b){var s,r=J.fs(b,t.i)
for(s=0;s<b;++s)r[s]=new A.aR(a.k(),a.k())
return new A.b8(r)},
lp(a,b){var s=new A.bn(new Int16Array(b))
s.ht(a,b)
return s},
ln(a,b){var s=new A.bm(new Int32Array(b))
s.hs(a,b)
return s},
lo(a,b){var s,r,q,p,o=J.fs(b,t.i)
for(s=0;s<b;++s){r=a.k()
q=$.L()
q[0]=r
r=$.a8()
if(0>=r.length)return A.a(r,0)
p=r[0]
q[0]=a.k()
o[s]=new A.aR(p,r[0])}return new A.ba(o)},
lr(a){var s=new Float32Array(1)
if(0>=1)return A.a(s,0)
s[0]=a
return new A.bJ(s)},
ls(a,b){var s=new A.bJ(new Float32Array(b))
s.hv(a,b)
return s},
lj(a){var s=new Float64Array(1)
if(0>=1)return A.a(s,0)
s[0]=a
return new A.bI(s)},
lk(a,b){var s=new A.bI(new Float64Array(b))
s.hq(a,b)
return s},
ai:function ai(a,b){this.a=a
this.b=b},
a1:function a1(){},
aY:function aY(a){this.a=a},
c4:function c4(a){this.a=a},
bo:function bo(a){this.a=a},
aM:function aM(a){this.a=a},
b8:function b8(a){this.a=a},
b9:function b9(a){this.a=a},
bn:function bn(a){this.a=a},
bm:function bm(a){this.a=a},
ba:function ba(a){this.a=a},
bJ:function bJ(a){this.a=a},
bI:function bI(a){this.a=a},
bK:function bK(a){this.a=a},
mC(b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null
if(b5===B.cA)return b6.e7(b4)
s=b5.a
if(!(s<5))return A.a(B.bN,s)
r=B.bN[s]
q=b4.gK(b4)
p=b4.gP(b4)
o=b6.gL()
n=A.Q(b3,b3,B.e,0,B.i,q,b3,0,1,o,p,!1)
s=b4.a
m=s.gJ(s)
m.E()
for(l=r.length,s=o.b,k=2<s,j=1<s,i=0<s,h=o.c,g=h.length,f=0,e=0;e<q;++e)for(d=0;d!==p;++d,++f,m.E()){c=m.gU()
b=B.b.i(c.n(0,0))
a=B.b.i(c.n(0,1))
a0=B.b.i(c.n(0,2))
a1=b6.h3(b,a,a0)
a2=n.a
if(a2!=null)a2.V(d,e,a1,0,0)
if(i){a2=a1*s
if(!(a2>=0&&a2<g))return A.a(h,a2)
a3=h[a2]}else a3=0
if(j){a2=a1*s+1
if(!(a2>=0&&a2<g))return A.a(h,a2)
a4=h[a2]}else a4=0
if(k){a2=a1*s+2
if(!(a2>=0&&a2<g))return A.a(h,a2)
a5=h[a2]}else a5=0
a6=b-a3
if(a6===0&&a-a4===0&&a0-a5===0)continue
for(a7=0;a7!==l;++a7){if(!(a7>=0&&a7<l))return A.a(r,a7)
a2=r[a7]
a8=B.b.i(a2[1])
a9=B.b.i(a2[2])
b0=a8+d
if(b0>=0)if(b0<p){b0=a9+e
b0=b0>=0&&b0<q}else b0=!1
else b0=!1
if(b0){b1=a2[0]
a2=b4.a
b2=a2==null?b3:a2.M(a8,a9,b3)
if(b2==null)b2=new A.B()
a2=a6*b1
b2.sp(0,Math.max(0,Math.min(255,B.b.i(b2.gp(b2)+a2))))
b2.st(Math.max(0,Math.min(255,B.b.i(b2.gt()+a2))))
b2.su(Math.max(0,Math.min(255,B.b.i(b2.gu()+a2))))}}}return n},
eX:function eX(a,b){this.a=a
this.b=b},
l3(a){var s,r,q=new A.hJ()
if(!A.k6(a))A.az(A.j("Not a bitmap file."))
a.d+=2
s=a.k()
r=$.L()
r[0]=s
s=$.a8()
if(0>=s.length)return A.a(s,0)
a.d+=4
r[0]=a.k()
q.b=s[0]
return q},
k6(a){if(a.c-a.d<2)return!1
return A.o(a,null,0).l()===19778},
nb(a,b){var s,r,q,p,o=b==null?A.l3(a):b,n=a.d,m=a.k(),l=a.k(),k=$.L()
k[0]=l
l=$.a8()
if(0>=l.length)return A.a(l,0)
s=l[0]
k[0]=a.k()
l=l[0]
r=a.l()
q=a.l()
p=a.k()
if(!(p<14))return A.a(B.ag,p)
p=B.ag[p]
a.k()
k[0]=a.k()
k[0]=a.k()
k=a.k()
a.k()
n=new A.bj(o,s,l,m,r,q,p,k,n)
n.eg(a,b)
return n},
ad:function ad(a,b){this.a=a
this.b=b},
hJ:function hJ(){this.b=$},
bj:function bj(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
eQ:function eQ(a){this.a=$
this.b=null
this.c=a},
hH:function hH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hN:function hN(a){this.a=$
this.b=null
this.c=a},
hI:function hI(){},
hL:function hL(){},
hP:function hP(){},
f_:function f_(){},
dM:function dM(a,b,c,d){var _=this
_.r=a
_.w=b
_.x=c
_.b=_.a=0
_.c=d},
cK:function cK(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=b},
f0:function f0(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
lb(a,b,c,d){var s,r
switch(a.a){case 1:return new A.fl(c,b)
case 2:return new A.dN(c,d==null?1:d,b)
case 3:return new A.dN(c,d==null?16:d,b)
case 4:s=d==null?32:d
r=new A.fj(c,s,b)
r.hy(b,c,s)
return r
case 5:return new A.fk(c,d==null?16:d,b)
case 6:return new A.dM(c,d==null?32:d,!1,b)
case 7:return new A.dM(c,d==null?32:d,!0,b)
default:throw A.d(A.j("Invalid compression type: "+a.B(0)))}},
aX:function aX(a,b){this.a=a
this.b=b},
bl:function bl(){},
fh:function fh(){},
np(a,b,c,d){var s,r,q,p,o,n,m,l
if(b===0){if(d!==0)throw A.d(A.j("Incomplete huffman data"))
return}s=a.d
r=a.k()
q=a.k()
a.d+=4
p=a.k()
if(r<65537)o=q>=65537
else o=!0
if(o)throw A.d(A.j("Invalid huffman table size"))
a.d+=4
n=A.U(65537,0,!1,t.p)
m=J.am(16384,t.gV)
for(l=0;l<16384;++l)m[l]=new A.f1()
A.nq(a,b-20,r,q,n)
if(p>8*(b-(a.d-s)))throw A.d(A.j("Error in header for Huffman-encoded data (invalid number of bits)."))
A.nm(n,r,q,m)
A.no(n,m,a,p,q,d,c)},
no(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code).",i=A.b([0,0],t.t),h=c.d+B.a.S(d+7,8)
for(s=b.length,r=0;c.d<h;){A.k9(i,c)
for(;q=i[1],q>=14;){p=B.a.b0(i[0],q-14)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.h(i,1,q-p)
r=A.ka(o.b,e,i,c,g,r,f)}else{if(o.c==null)throw A.d(A.j(j))
for(n=0;n<o.b;++n){q=o.c
if(!(n<q.length))return A.a(q,n)
q=q[n]
if(!(q<65537))return A.a(a,q)
m=a[q]&63
while(!0){q=i[1]
if(!(q<m&&c.d<h))break
A.k9(i,c)}if(q>=m){p=o.c
if(!(n<p.length))return A.a(p,n)
p=p[n]
if(!(p<65537))return A.a(a,p)
q-=m
if(a[p]>>>6===(B.a.b0(i[0],q)&B.a.R(1,m)-1)>>>0){B.c.h(i,1,q)
q=o.c
if(!(n<q.length))return A.a(q,n)
l=A.ka(q[n],e,i,c,g,r,f)
r=l
break}}}if(n===o.b)throw A.d(A.j(j))}}}k=8-d&7
B.c.h(i,0,B.a.j(i[0],k))
B.c.h(i,1,i[1]-k)
for(;q=i[1],q>0;){p=B.a.W(i[0],14-q)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.h(i,1,q-p)
r=A.ka(o.b,e,i,c,g,r,f)}else throw A.d(A.j(j))}if(r!==f)throw A.d(A.j("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
ka(a,b,c,d,e,f,g){var s,r,q,p,o,n,m="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.k9(c,d)
B.c.h(c,1,c[1]-8)
s=B.a.b0(c[0],c[1])&255
if(f+s>g)throw A.d(A.j(m))
r=f-1
q=e.length
if(!(r>=0&&r<q))return A.a(e,r)
p=e[r]
for(;o=s-1,s>0;s=o,f=n){n=f+1
if(!(f<q))return A.a(e,f)
e[f]=p}}else{if(f<g){n=f+1
if(!(f<e.length))return A.a(e,f)
e[f]=a}else throw A.d(A.j(m))
f=n}return f},
nm(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="Error in Huffman-encoded data (invalid code table entry)."
for(s=d.length,r=t.t,q=t.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
p=a[b]
o=p>>>6
n=p&63
if(B.a.a9(o,n)!==0)throw A.d(A.j(i))
if(n>14){p=B.a.a2(o,n-14)
if(!(p<s))return A.a(d,p)
m=d[p]
if(m.a!==0)throw A.d(A.j(i))
p=++m.b
l=m.c
if(l!=null){m.sfT(A.U(p,0,!1,q))
for(k=0;k<m.b-1;++k){p=m.c
p.toString
if(!(k<l.length))return A.a(l,k)
B.c.h(p,k,l[k])}}else m.sfT(A.b([0],r))
p=m.c
p.toString
B.c.h(p,m.b-1,b)}else if(n!==0){p=14-n
j=B.a.W(o,p)
if(!(j<s))return A.a(d,j)
for(k=B.a.W(1,p);k>0;--k,++j){if(!(j<s))return A.a(d,j)
m=d[j]
if(m.a!==0||m.c!=null)throw A.d(A.j(i))
m.a=n
m.b=b}}}},
nq(a,b,c,d,e){var s,r,q,p,o,n="Error in Huffman-encoded data (unexpected end of code table data).",m="Error in Huffman-encoded data (code table is longer than expected).",l=a.d,k=A.b([0,0],t.t)
for(s=d+1;c<=d;++c){if(a.d-l>b)throw A.d(A.j(n))
r=A.lc(6,k,a)
B.c.h(e,c,r)
if(r===63){if(a.d-l>b)throw A.d(A.j(n))
q=A.lc(8,k,a)+6
if(c+q>s)throw A.d(A.j(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.h(e,c,0)}--c}else if(r>=59){q=r-59+2
if(c+q>s)throw A.d(A.j(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.h(e,c,0)}--c}}A.nn(e)},
nn(a){var s,r,q,p,o,n=A.U(59,0,!1,t.p)
for(s=0;s<65537;++s){r=a[s]
if(!(r<59))return A.a(n,r)
B.c.h(n,r,n[r]+1)}for(q=0,s=58;s>0;--s,q=p){p=q+n[s]>>>1
B.c.h(n,s,q)}for(s=0;s<65537;++s){o=a[s]
if(o>0){if(!(o<59))return A.a(n,o)
r=n[o]
B.c.h(n,o,r+1)
B.c.h(a,s,(o|r<<6)>>>0)}}},
k9(a,b){B.c.h(a,0,((a[0]<<8|b.C())&-1)>>>0)
B.c.h(a,1,(a[1]+8&-1)>>>0)},
lc(a,b,c){var s,r,q
for(;s=b[1],s<a;){s=b[0]
r=c.a
q=c.d++
if(!(q>=0&&q<r.length))return A.a(r,q)
B.c.h(b,0,((s<<8|r[q])&-1)>>>0)
B.c.h(b,1,(b[1]+8&-1)>>>0)}B.c.h(b,1,s-a)
return(B.a.b0(b[0],b[1])&B.a.R(1,a)-1)>>>0},
f1:function f1(){this.b=this.a=0
this.c=null},
nr(a){var s=A.w(a,!1,null,0)
if(s.k()!==20000630)return!1
if(s.C()!==2)return!1
if((s.bp()&4294967289)>>>0!==0)return!1
return!0},
f2:function f2(a){var _=this
_.b=_.a=0
_.c=a
_.d=null
_.e=$},
lv(a,b,c){var s=new A.fi(a,A.b([],t.g9),A.I(t.N,t.aX),B.aY,b)
s.hm(a,b,c,{})
return s},
du:function du(){},
hS:function hS(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c,d,e){var _=this
_.a=a
_.b=null
_.c=b
_.d=0
_.e=c
_.r=$
_.x=_.w=0
_.at=$
_.ax=d
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=e
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
fj:function fj(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
ex:function ex(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
fk:function fk(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
fl:function fl(a,b){var _=this
_.r=null
_.w=a
_.b=_.a=0
_.c=b},
dN:function dN(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
hR:function hR(){this.a=null},
le(a){var s=new Uint8Array(a*3)
return new A.dB(A.nz(a),a,null,new A.aG(s,a,3))},
ny(a){return new A.dB(a.a,a.b,a.c,A.lI(a.d))},
nz(a){var s
for(s=1;s<=8;++s)if(B.a.R(1,s)>=a)return s
return 0},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dC:function dC(){},
fm:function fm(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=!0
_.x=$},
dD:function dD(a){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=a},
hV:function hV(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.f=null
_.r=0
_.w=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
hW:function hW(){var _=this
_.b=0
_.y=_.x=_.w=null
_.Q=_.z=$
_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=0
_.dx=!1
_.dy=$
_.fr=0
_.fx=null},
hX:function hX(a,b){this.a=a
this.b=b},
lh(a){var s,r,q,p,o,n,m,l
if(a.l()!==0)return null
s=a.l()
if(s>=3)return null
if(B.fJ[s]===B.b_)return null
r=a.l()
q=J.fs(r,t.gx)
for(p=0;p<r;++p){o=a.a
n=a.d
m=a.d=n+1
l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=a.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=n+1
a.d=m
if(!(n>=0&&n<l))return A.a(o,n)
a.d=m+1
a.l()
a.l()
q[p]=new A.fa(a.k(),a.k())}return new A.f9(r,q)},
cN:function cN(a,b){this.a=a
this.b=b},
f9:function f9(a,b){this.d=a
this.e=b},
fa:function fa(a,b){this.d=a
this.e=b},
f7:function f7(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
i_:function i_(){this.b=this.a=null},
j6:function j6(){},
f8:function f8(){},
eU:function eU(a,b,c){this.e=a
this.f=b
this.r=c},
bH:function bH(){},
c3:function c3(a){this.a=a},
dE:function dE(a){this.a=a},
i9:function i9(){this.d=null},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.y=_.x=_.w=_.r=_.f=_.e=$},
lD(){var s=A.U(4,null,!1,t.bC),r=A.b([],t.f8),q=t.eA,p=J.kf(0,q)
q=J.kf(0,q)
return new A.ib(new A.c_(A.I(t.N,t.P)),s,r,p,q,A.b([],t.eB))},
ib:function ib(a,b,c,d,e,f){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=a
_.w=b
_.x=c
_.y=d
_.z=e
_.Q=f},
ic:function ic(a,b){this.a=a
this.b=b},
dc:function dc(a){this.a=a
this.b=0},
fw:function fw(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
ie:function ie(){this.r=this.f=$},
fx:function fx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.f=$
_.r=null
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
fv:function fv(){},
ia:function ia(a,b){this.a=a
this.b=b},
id:function id(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null
_.w=_.r=$
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=null
_.ax=0
_.ay=7},
d1:function d1(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.b=b},
e6:function e6(){},
fn:function fn(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
lw(){var s=t.N
return new A.fo(A.I(s,s),A.b([],t.dm),A.b([],t.t))},
bN:function bN(a,b){this.a=a
this.b=b},
fQ:function fQ(){},
fo:function fo(a,b,c){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=a
_.ay=1
_.CW=b
_.cx=c},
fN:function fN(a){var _=this
_.a=a
_.c=_.b=0
_.d=$
_.e=0},
fP:function fP(a,b){this.a=a
this.b=b},
fO:function fO(){var _=this
_.a=null
_.c=0
_.e=$
_.f=0
_.r=!1
_.w=null},
fR:function fR(){this.a=null},
fS:function fS(){this.a=null},
bd:function bd(){},
fV:function fV(){this.a=null},
fW:function fW(){this.a=null},
fY:function fY(){this.a=null},
fZ:function fZ(){this.a=null},
e9:function e9(a){this.b=a},
fX:function fX(){},
iu:function iu(){var _=this
_.w=_.r=_.f=_.e=$},
co:function co(a){this.a=a
this.c=$},
lV(a){var s=new A.fT(A.I(t.p,t.fh))
s.hA(a)
return s},
kr(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255,o=r*(1-q),n=s*(1-p)
return B.b.i(B.b.N((2*s<q?2*r*s+o+n:p*q-2*(q-s)*(p-r)+o+n)*255,0,255))},
iw(a,b){if(b===0)return 0
return B.b.i(B.a.N(B.b.i(255*(1-(1-a/255)/(b/255))),0,255))},
iy(a,b){return B.b.i(B.a.N(a+b-255,0,255))},
kt(a,b){return B.b.i(B.a.N(255-(255-b)*(255-a),0,255))},
ix(a,b){if(b===255)return 255
return B.b.i(B.b.N(a/255/(1-b/255)*255,0,255))},
ku(a,b){var s=a/255,r=b/255,q=1-r
return B.b.bR(255*(q*r*s+r*(1-q*(1-s))))},
kp(a,b){var s=b/255,r=a/255
if(r<0.5)return B.b.bR(510*s*r)
else return B.b.bR(255*(1-2*(1-s)*(1-r)))},
kv(a,b){if(b<128)return A.iw(a,2*b)
else return A.ix(a,2*(b-128))},
kq(a,b){var s
if(b<128)return A.iy(a,2*b)
else{s=2*(b-128)
return s+a>255?255:a+s}},
ks(a,b){return b<128?Math.min(a,2*b):Math.max(a,2*(b-128))},
ko(a,b){return B.b.bR(b+a-2*b*a/255)},
lW(c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0="data",c1=A.I(t.p,t.fW)
for(s=c6.length,r=0;q=c6.length,r<q;c6.length===s||(0,A.a6)(c6),++r){p=c6[r]
c1.h(0,p.a,p)}if(c3===8)o=1
else o=c3===16?2:-1
n=A.Q(b9,b9,B.e,0,B.i,c5,b9,0,q,b9,c4,!1)
if(o===-1)throw A.d(A.j("PSD: unsupported bit depth: "+A.C(c3)))
m=c1.n(0,0)
l=c1.n(0,1)
k=c1.n(0,2)
j=c1.n(0,-1)
i=-o
for(s=n.a,s=s.gJ(s),h=q>=5,g=o===1,f=q===4,e=q>=2,q=q>=4;s.E();){d=s.gU()
i+=o
switch(c2){case B.c3:c=m.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
c=a0}d.sp(0,c)
c=l.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
c=a0}d.st(c)
c=k.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
c=a0}d.su(c)
if(q){c=j.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
c=a0}}else c=255
d.sv(c)
if(d.gv()!==0){d.sp(0,(d.gp(d)+d.gv()-255)*255/d.gv())
d.st((d.gt()+d.gv()-255)*255/d.gv())
d.su((d.gu()+d.gv()-255)*255/d.gv())}break
case B.c5:c=m.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
c=a0}b=l.c
b===$&&A.c(c0)
a=b.length
if(g){if(!(i>=0&&i<a))return A.a(b,i)
b=b[i]}else{if(!(i>=0&&i<a))return A.a(b,i)
a0=b[i]
a1=i+1
if(!(a1<a))return A.a(b,a1)
a1=(a0<<8|b[a1])>>>8
b=a1}a=k.c
a===$&&A.c(c0)
a0=a.length
if(g){if(!(i>=0&&i<a0))return A.a(a,i)
a=a[i]}else{if(!(i>=0&&i<a0))return A.a(a,i)
a1=a[i]
a2=i+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}if(q){a0=j.c
a0===$&&A.c(c0)
a1=a0.length
if(g){if(!(i>=0&&i<a1))return A.a(a0,i)
a0=a0[i]
a3=a0}else{if(!(i>=0&&i<a1))return A.a(a0,i)
a2=a0[i]
a4=i+1
if(!(a4<a1))return A.a(a0,a4)
a4=(a2<<8|a0[a4])>>>8
a3=a4}}else a3=255
a5=((c*100>>>8)+16)/116
a6=(b-128)/500+a5
a7=a5-(a-128)/200
a8=Math.pow(a5,3)
a5=a8>0.008856?a8:(a5-0.13793103448275862)/7.787
a9=Math.pow(a6,3)
a6=a9>0.008856?a9:(a6-0.13793103448275862)/7.787
b0=Math.pow(a7,3)
a7=b0>0.008856?b0:(a7-0.13793103448275862)/7.787
a6=a6*95.047/100
a5=a5*100/100
a7=a7*108.883/100
b1=a6*3.2406+a5*-1.5372+a7*-0.4986
b2=a6*-0.9689+a5*1.8758+a7*0.0415
b3=a6*0.0557+a5*-0.204+a7*1.057
b1=b1>0.0031308?1.055*Math.pow(b1,0.4166666666666667)-0.055:12.92*b1
b2=b2>0.0031308?1.055*Math.pow(b2,0.4166666666666667)-0.055:12.92*b2
b3=b3>0.0031308?1.055*Math.pow(b3,0.4166666666666667)-0.055:12.92*b3
b4=[B.b.i(B.b.N(b1*255,0,255)),B.b.i(B.b.N(b2*255,0,255)),B.b.i(B.b.N(b3*255,0,255))]
d.sp(0,b4[0])
d.st(b4[1])
d.su(b4[2])
d.sv(a3)
break
case B.c2:c=m.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
b5=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
b5=(a<<8|c[a0])>>>8}if(e){c=j.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]
a3=c}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
a3=a0}}else a3=255
d.sp(0,b5)
d.st(b5)
d.su(b5)
d.sv(a3)
break
case B.c4:c=m.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
b6=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
b6=(a<<8|c[a0])>>>8}c=l.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
b7=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
b7=(a<<8|c[a0])>>>8}c=k.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
a5=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a5=(a<<8|c[a0])>>>8}c=c1.n(0,f?-1:3).c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
b8=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
b8=(a<<8|c[a0])>>>8}if(h){c=j.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]
a3=c}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
a3=a0}}else a3=255
b4=A.mA(255-b6,255-b7,255-a5,255-b8)
d.sp(0,b4[0])
d.st(b4[1])
d.su(b4[2])
d.sv(a3)
break
default:throw A.d(A.j("Unhandled color mode: "+A.C(c2)))}}return n},
b1:function b1(a,b){this.a=a
this.b=b},
fT:function fT(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=a
_.ay=_.ax=_.at=_.as=$},
fU:function fU(){},
e8:function e8(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=$
_.cy=c},
o_(a,b){var s
switch(a){case"lsct":s=b.c-b.d
b.k()
if(s>=12){if(b.af(4)!=="8BIM")A.az(A.j("Invalid key in layer additional data"))
b.af(4)}if(s>=16)b.k()
return new A.fX()
default:return new A.e9(b)}},
d2:function d2(){},
iv:function iv(){this.a=null},
h_:function h_(){},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d5:function d5(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
d4:function d4(a){var _=this
_.b=0
_.c=a
_.Q=_.r=_.f=0},
ea:function ea(){this.y=this.b=this.a=0},
a3(a,b){var s,r=a>>>8
if(!(r<256))return A.a(B.U,r)
r=B.U[r]
s=b>>>8
if(!(s<256))return A.a(B.U,s)
return(r<<17|B.U[s]<<16|B.U[a&255]<<1|B.U[b&255])>>>0},
Z:function Z(a){var _=this
_.a=a
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
iz:function iz(){this.b=this.a=null},
o0(a,b,c){var s=new A.iB(a,b,c),r=s.$2(0,0),q=s.$2(0,0),p=new A.d5(r.cK(),q.cK(),t.aN)
p.D(0,s.$2(1,0))
p.D(0,s.$2(2,0))
p.D(0,s.$2(3,0))
p.D(0,s.$2(0,1))
p.D(0,s.$2(1,1))
p.D(0,s.$2(1,2))
p.D(0,s.$2(1,3))
p.D(0,s.$2(2,0))
p.D(0,s.$2(2,1))
p.D(0,s.$2(2,2))
p.D(0,s.$2(2,3))
p.D(0,s.$2(3,0))
p.D(0,s.$2(3,1))
p.D(0,s.$2(3,2))
p.D(0,s.$2(3,3))
return p},
o1(a,b,c){var s=new A.iC(a,b,c),r=s.$2(0,0),q=s.$2(0,0),p=new A.d5(r.cK(),q.cK(),t.eZ)
p.D(0,s.$2(1,0))
p.D(0,s.$2(2,0))
p.D(0,s.$2(3,0))
p.D(0,s.$2(0,1))
p.D(0,s.$2(1,1))
p.D(0,s.$2(1,2))
p.D(0,s.$2(1,3))
p.D(0,s.$2(2,0))
p.D(0,s.$2(2,1))
p.D(0,s.$2(2,2))
p.D(0,s.$2(2,3))
p.D(0,s.$2(3,0))
p.D(0,s.$2(3,1))
p.D(0,s.$2(3,2))
p.D(0,s.$2(3,3))
return p},
eb:function eb(a,b){this.a=a
this.b=b},
iA:function iA(){},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a){var _=this
_.b=_.a=0
_.c=a
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
ao:function ao(a,b){this.a=a
this.b=b},
iH:function iH(){this.a=null
this.b=$},
iI:function iI(){},
iJ:function iJ(a){this.a=a
this.c=this.b=0},
h7:function h7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e},
kz(a,b,c){var s=new A.iM(b,a),r=t.v
s.se3(A.U(b,null,!1,r))
s.se0(A.U(b,null,!1,r))
return s},
iM:function iM(a,b){var _=this
_.a=a
_.c=b
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
h8:function h8(a,b,c,d){var _=this
_.a=a
_.c=_.b=0
_.d=b
_.r=_.f=_.e=1
_.w=c
_.x=d
_.y=!1
_.z=1
_.as=_.Q=$
_.ay=_.ax=0
_.CW=_.ch=null
_.cy=_.cx=$
_.dx=1
_.fr=_.dy=0
_.go=null
_.k2=_.k1=_.id=$},
cp:function cp(a,b){this.a=a
this.b=b},
a4:function a4(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
h9:function h9(a){var _=this
_.b=_.a=0
_.d=null
_.f=a},
lE(){return new A.il(new Uint8Array(4096))},
il:function il(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
iK:function iK(){this.a=null
this.c=$},
iL:function iL(){},
kC(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.U(8,null,!1,t.eW),n=A.U(4,null,!1,t.dP)
return new A.iR(a,b,new A.iX(),new A.j0(),new A.iT(s,r),new A.j2(q,p),o,n,new Uint8Array(4))},
m8(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
iR:function iR(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=$
_.d=null
_.e=$
_.f=c
_.r=d
_.w=e
_.x=f
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=g
_.dy=h
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=i
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.b2=$
_.bl=null
_.bO=_.b3=$
_.c2=null
_.bP=$},
j3:function j3(){},
m5(a){var s=new A.ej(a)
s.b=254
s.c=0
s.d=-8
return s},
ej:function ej(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
D(a,b,c){return B.a.az(B.a.j(a+2*b+c+2,2),32)},
ol(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-33,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-32
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
l+=-31
if(!(l>=0&&l<j))return A.a(m,l)
l=A.D(k,s,m[l])
m=a.a
s=a.d
k=s+-32
j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
r=s+-31
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
s+=-30
if(!(s>=0&&s<j))return A.a(m,s)
s=A.D(k,r,m[s])
m=a.a
r=a.d
k=r+-31
j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
q=r+-30
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
r+=-29
if(!(r>=0&&r<j))return A.a(m,r)
r=A.D(k,q,m[r])
m=a.a
q=a.d
k=q+-30
j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
p=q+-29
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
q+=-28
if(!(q>=0&&q<j))return A.a(m,q)
o=A.b([l,s,r,A.D(k,p,m[q])],t.t)
for(n=0;n<4;++n)a.c5(n*32,4,o)},
od(a){var s,r,q,p,o=a.a,n=a.d,m=n+-33,l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
s=n+-1
if(!(s>=0&&s<l))return A.a(o,s)
s=o[s]
r=n+31
if(!(r>=0&&r<l))return A.a(o,r)
r=o[r]
q=n+63
if(!(q>=0&&q<l))return A.a(o,q)
q=o[q]
n+=95
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
p=A.o(a,null,0)
o=p.cU()
m=A.D(m,s,r)
if(0>=o.length)return A.a(o,0)
o[0]=16843009*m
p.d+=32
m=p.cU()
s=A.D(s,r,q)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*s
p.d+=32
s=p.cU()
r=A.D(r,q,n)
if(0>=s.length)return A.a(s,0)
s[0]=16843009*r
p.d+=32
r=p.cU()
n=A.D(q,n,n)
if(0>=r.length)return A.a(r,0)
r[0]=16843009*n},
ob(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<4;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}p=B.a.j(p,3)
for(o=0;o<4;++o){s=a.a
r=a.d+o*32
J.bi(s,r,r+4,p)}},
kD(a,b){var s,r,q,p,o,n,m,l=a.a,k=a.d+-33
if(!(k>=0&&k<l.length))return A.a(l,k)
s=255-l[k]
for(r=0,q=0;q<b;++q){l=a.a
k=a.d+(r-1)
if(!(k>=0&&k<l.length))return A.a(l,k)
p=s+l[k]
for(o=0;o<b;++o){l=$.aA()
k=a.a
n=a.d
m=n+(-32+o)
if(!(m>=0&&m<k.length))return A.a(k,m)
m=p+k[m]
if(!(m>=0&&m<766))return A.a(l,m)
J.A(k,n+(r+o),l[m])}r+=32}},
oj(a){A.kD(a,4)},
ok(a){A.kD(a,8)},
oi(a){A.kD(a,16)},
oh(a){var s,r,q,p,o,n,m,l=a.a,k=a.d,j=k+-1,i=l.length
if(!(j>=0&&j<i))return A.a(l,j)
j=l[j]
s=k+31
if(!(s>=0&&s<i))return A.a(l,s)
s=l[s]
r=k+63
if(!(r>=0&&r<i))return A.a(l,r)
r=l[r]
q=k+95
if(!(q>=0&&q<i))return A.a(l,q)
q=l[q]
p=k+-33
if(!(p>=0&&p<i))return A.a(l,p)
p=l[p]
o=k+-32
if(!(o>=0&&o<i))return A.a(l,o)
o=l[o]
n=k+-31
if(!(n>=0&&n<i))return A.a(l,n)
n=l[n]
m=k+-30
if(!(m>=0&&m<i))return A.a(l,m)
m=l[m]
k+=-29
if(!(k>=0&&k<i))return A.a(l,k)
k=l[k]
a.h(0,96,A.D(s,r,q))
r=A.D(j,s,r)
a.h(0,97,r)
a.h(0,64,r)
s=A.D(p,j,s)
a.h(0,98,s)
a.h(0,65,s)
a.h(0,32,s)
j=A.D(o,p,j)
a.h(0,99,j)
a.h(0,66,j)
a.h(0,33,j)
a.h(0,0,j)
p=A.D(n,o,p)
a.h(0,67,p)
a.h(0,34,p)
a.h(0,1,p)
o=A.D(m,n,o)
a.h(0,35,o)
a.h(0,2,o)
a.h(0,3,A.D(k,m,n))},
og(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+-30
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+-29
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-28
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-27
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-26
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-25
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
a.h(0,0,A.D(k,s,r))
s=A.D(s,r,q)
a.h(0,32,s)
a.h(0,1,s)
r=A.D(r,q,p)
a.h(0,64,r)
a.h(0,33,r)
a.h(0,2,r)
q=A.D(q,p,o)
a.h(0,96,q)
a.h(0,65,q)
a.h(0,34,q)
a.h(0,3,q)
p=A.D(p,o,n)
a.h(0,97,p)
a.h(0,66,p)
a.h(0,35,p)
o=A.D(o,n,l)
a.h(0,98,o)
a.h(0,67,o)
a.h(0,99,A.D(n,l,l))},
on(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+63
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+-33
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-32
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-31
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-30
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-29
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
m=B.a.az(B.a.j(q+p+1,1),32)
a.h(0,65,m)
a.h(0,0,m)
m=B.a.az(B.a.j(p+o+1,1),32)
a.h(0,66,m)
a.h(0,1,m)
m=B.a.az(B.a.j(o+n+1,1),32)
a.h(0,67,m)
a.h(0,2,m)
a.h(0,3,B.a.az(B.a.j(n+l+1,1),32))
a.h(0,96,A.D(r,s,k))
a.h(0,64,A.D(s,k,q))
k=A.D(k,q,p)
a.h(0,97,k)
a.h(0,32,k)
q=A.D(q,p,o)
a.h(0,98,q)
a.h(0,33,q)
p=A.D(p,o,n)
a.h(0,99,p)
a.h(0,34,p)
a.h(0,35,A.D(o,n,l))},
om(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+-30
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+-29
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-28
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-27
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-26
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-25
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
a.h(0,0,B.a.az(B.a.j(k+s+1,1),32))
m=B.a.az(B.a.j(s+r+1,1),32)
a.h(0,64,m)
a.h(0,1,m)
m=B.a.az(B.a.j(r+q+1,1),32)
a.h(0,65,m)
a.h(0,2,m)
m=B.a.az(B.a.j(q+p+1,1),32)
a.h(0,66,m)
a.h(0,3,m)
a.h(0,32,A.D(k,s,r))
s=A.D(s,r,q)
a.h(0,96,s)
a.h(0,33,s)
r=A.D(r,q,p)
a.h(0,97,r)
a.h(0,34,r)
q=A.D(q,p,o)
a.h(0,98,q)
a.h(0,35,q)
a.h(0,67,A.D(p,o,n))
a.h(0,99,A.D(o,n,l))},
oe(a){var s,r,q=a.a,p=a.d,o=p+-1,n=q.length
if(!(o>=0&&o<n))return A.a(q,o)
o=q[o]
s=p+31
if(!(s>=0&&s<n))return A.a(q,s)
s=q[s]
r=p+63
if(!(r>=0&&r<n))return A.a(q,r)
r=q[r]
p+=95
if(!(p>=0&&p<n))return A.a(q,p)
p=q[p]
a.h(0,0,B.a.az(B.a.j(o+s+1,1),32))
q=B.a.az(B.a.j(s+r+1,1),32)
a.h(0,32,q)
a.h(0,2,q)
q=B.a.az(B.a.j(r+p+1,1),32)
a.h(0,64,q)
a.h(0,34,q)
a.h(0,1,A.D(o,s,r))
s=A.D(s,r,p)
a.h(0,33,s)
a.h(0,3,s)
r=A.D(r,p,p)
a.h(0,65,r)
a.h(0,35,r)
a.h(0,99,p)
a.h(0,98,p)
a.h(0,97,p)
a.h(0,96,p)
a.h(0,66,p)
a.h(0,67,p)},
oc(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+63
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+95
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-33
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-32
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-31
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-30
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
m=B.a.az(B.a.j(k+p+1,1),32)
a.h(0,34,m)
a.h(0,0,m)
m=B.a.az(B.a.j(s+k+1,1),32)
a.h(0,66,m)
a.h(0,32,m)
m=B.a.az(B.a.j(r+s+1,1),32)
a.h(0,98,m)
a.h(0,64,m)
a.h(0,96,B.a.az(B.a.j(q+r+1,1),32))
a.h(0,3,A.D(o,n,l))
a.h(0,2,A.D(p,o,n))
o=A.D(k,p,o)
a.h(0,35,o)
a.h(0,1,o)
p=A.D(s,k,p)
a.h(0,67,p)
a.h(0,33,p)
k=A.D(r,s,k)
a.h(0,99,k)
a.h(0,65,k)
a.h(0,97,A.D(q,r,s))},
oy(a){var s
for(s=0;s<16;++s)a.bn(s*32,16,a,-32)},
ow(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.bi(q,p,p+16,q[o])
s+=32}},
iV(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.bi(r,q,q+16,a)}},
oo(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=16,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(o-32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.iV(B.a.j(p,5),a)},
oq(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.iV(B.a.j(p,4),a)},
op(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.iV(B.a.j(p,4),a)},
or(a){A.iV(128,a)},
oz(a){var s
for(s=0;s<8;++s)a.bn(s*32,8,a,-32)},
ox(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.bi(q,p,p+8,q[o])
s+=32}},
iW(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.bi(r,q,q+8,a)}},
os(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.iW(B.a.j(p,4),a)},
ot(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.iW(B.a.j(p,3),a)},
ou(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.iW(B.a.j(p,3),a)},
ov(a){A.iW(128,a)},
bQ(a,b,c,d,e){var s=b+c+d*32,r=a.a,q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]+B.a.j(e,3)
if((q&-256)>>>0===0)r=q
else r=q<0?0:255
a.h(0,s,r)},
iU(a,b,c,d,e){A.bQ(a,0,0,b,c+d)
A.bQ(a,0,1,b,c+e)
A.bQ(a,0,2,b,c-e)
A.bQ(a,0,3,b,c-d)},
of(){var s,r,q
if(!$.m6){for(s=-255;s<=255;++s){r=$.hz()
q=255+s
r[q]=s<0?-s:s
$.k0()[q]=B.a.j(r[q],1)}for(s=-1020;s<=1020;++s){r=$.k1()
if(s<-128)q=-128
else q=s>127?127:s
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.hA()
if(s<-16)q=-16
else q=s>15?15:s
r[112+s]=q}for(s=-255;s<=510;++s){r=$.aA()
if(s<0)q=0
else q=s>255?255:s
r[255+s]=q}$.m6=!0}},
iS:function iS(){},
oa(){var s,r=J.am(3,t.D)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.ei(r)},
oO(){var s,r,q,p,o=new Uint8Array(3),n=J.am(4,t.c7)
for(s=t.dd,r=0;r<4;++r){q=J.am(8,s)
for(p=0;p<8;++p)q[p]=A.oa()
n[r]=q}B.m.aW(o,0,3,255)
return new A.j1(o,n)},
iX:function iX(){this.d=$},
j0:function j0(){},
j2:function j2(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
ei:function ei(a){this.a=a},
j1:function j1(a,b){this.a=a
this.b=b},
iT:function iT(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
bw:function bw(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
el:function el(){this.b=this.a=0},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
kE(a,b){var s,r=A.b([],t.e5),q=A.b([],t.gk),p=new Uint32Array(2),o=new A.hf(a,p)
p=o.d=A.y(p.buffer,0,null)
s=a.C()
if(0>=p.length)return A.a(p,0)
p[0]=s
s=a.C()
if(1>=p.length)return A.a(p,1)
p[1]=s
s=a.C()
if(2>=p.length)return A.a(p,2)
p[2]=s
s=a.C()
if(3>=p.length)return A.a(p,3)
p[3]=s
s=a.C()
if(4>=p.length)return A.a(p,4)
p[4]=s
s=a.C()
if(5>=p.length)return A.a(p,5)
p[5]=s
s=a.C()
if(6>=p.length)return A.a(p,6)
p[6]=s
s=a.C()
if(7>=p.length)return A.a(p,7)
p[7]=s
return new A.ek(o,b,r,q)},
bR(a,b){return B.a.j(a+B.a.R(1,b)-1,b)},
ek:function ek(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=c
_.ax=d
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
fp:function fp(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=c
_.ax=d
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
hf:function hf(a,b){var _=this
_.a=0
_.b=a
_.c=b
_.d=$},
iY:function iY(a,b){this.a=a
this.b=b},
iZ(a,b,c){var s
if(!(b<a.length))return A.a(a,b)
s=a[b]
a[b]=(((s&4278255360)>>>0)+((c&4278255360)>>>0)&4278255360|(s&16711935)+(c&16711935)&16711935)>>>0},
bx(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
cs(a){if(a<0)return 0
if(a>255)return 255
return a},
j_(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
oA(a,b,c){return 4278190080},
oB(a,b,c){return b},
oG(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return a[c]},
oH(a,b,c){var s=c+1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
oI(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
oJ(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.bx(A.bx(b,a[r]),s)},
oK(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return A.bx(b,a[s])},
oL(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return A.bx(b,a[c])},
oM(a,b,c){var s=c-1,r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
s=a[s]
if(!(c>=0&&c<r))return A.a(a,c)
return A.bx(s,a[c])},
oN(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.bx(s,a[r])},
oC(a,b,c){var s,r,q=c-1,p=a.length
if(!(q>=0&&q<p))return A.a(a,q)
q=a[q]
if(!(c>=0&&c<p))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<p))return A.a(a,r)
r=a[r]
return A.bx(A.bx(b,q),A.bx(s,r))},
oD(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return A.j_(s>>>24,b>>>24,r>>>24)+A.j_(s>>>16&255,b>>>16&255,r>>>16&255)+A.j_(s>>>8&255,b>>>8&255,r>>>8&255)+A.j_(s&255,b&255,r&255)<=0?s:b},
oE(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return(A.cs((b>>>24)+(s>>>24)-(r>>>24))<<24|A.cs((b>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.cs((b>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.cs((b&255)+(s&255)-(r&255)))>>>0},
oF(a,b,c){var s,r,q,p,o,n=a.length
if(!(c>=0&&c<n))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<n))return A.a(a,r)
r=a[r]
q=A.bx(b,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.cs(s+B.a.S(s-(r>>>24),2))<<24|A.cs(n+B.a.S(n-(r>>>16&255),2))<<16|A.cs(p+B.a.S(p-(r>>>8&255),2))<<8|A.cs(o+B.a.S(o-(r&255),2)))>>>0},
cr:function cr(a,b){this.a=a
this.b=b},
hg:function hg(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.e=0},
j4:function j4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
eo:function eo(){},
fq:function fq(a,b,c){var _=this
_.a=a
_.b=b
_.e=c
_.f=$
_.r=1
_.x=_.w=$},
lf(){var s=new Uint8Array(128),r=new Int16Array(128)
s=new A.f6(s,r,new Int16Array(128))
s.dN(0)
return s},
nA(){var s,r=J.am(5,t.bs)
for(s=0;s<5;++s)r[s]=A.lf()
return new A.cL(r)},
f6:function f6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.f=_.e=0},
cL:function cL(a){this.a=a},
d9:function d9(a,b){this.a=a
this.b=b},
da:function da(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
dO:function dO(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
j5:function j5(){this.b=this.a=null},
lg(a){return new A.dF(a.a,a.b,B.m.hf(a.c,0))},
hZ:function hZ(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
Q(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=new A.bp(null,null,null,a,h,e,d,0)
B.c.D(r.gai(),r)
if(i<1||i>4)A.az(A.j("Invalid number of channels for image "+i+". Must be between 1 and 4."))
r.c=g
if(b!=null)r.e=A.dt(b)
if(j==null)if(l)s=r.gH()===B.y||r.gH()===B.p||r.gH()===B.t||r.gH()===B.e
else s=!1
else s=!1
r.ew(k,f,c,i,s?r.ih(B.e,i):j)
return r},
fb(a,b,c,d){var s,r,q,p=null,o=a.e
o=o==null?p:A.dt(o)
s=a.c
s=s==null?p:A.lg(s)
r=a.w
q=a.r
o=new A.bp(p,s,o,p,q,r,a.y,a.z)
o.hx(a,b,c,d)
return o},
aZ(a,b,c){var s,r,q,p,o=null,n=a.a
n=n==null?o:n.bk(0,c)
s=a.e
s=s==null?o:A.dt(s)
r=a.c
r=r==null?o:A.lg(r)
q=a.w
p=a.r
n=new A.bp(n,r,s,o,p,q,a.y,a.z)
n.hw(a,b,c)
return n},
f5:function f5(a,b){this.a=a
this.b=b},
bp:function bp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c
_.f=d
_.r=e
_.w=f
_.x=$
_.y=g
_.z=h},
i5:function i5(a,b){this.a=a
this.b=b},
i4:function i4(){},
a9:function a9(){},
nD(a,b,c){return new A.cO(new Uint16Array(a*b*c),a,b,c)},
cO:function cO(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
nE(a,b,c){return new A.cP(new Float32Array(a*b*c),a,b,c)},
cP:function cP(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dG:function dG(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dH:function dH(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dI:function dI(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dJ:function dJ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cQ:function cQ(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
dK:function dK(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cR:function cR(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
nF(a,b,c){return new A.cS(new Uint32Array(a*b*c),a,b,c)},
cS:function cS(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cT:function cT(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
lt(a,b,c){return new A.cU(new Uint8Array(a*b*c),null,a,b,c)},
cU:function cU(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
fr:function fr(a,b){this.a=a
this.b=b},
aO:function aO(){},
dZ:function dZ(a,b,c){this.c=a
this.a=b
this.b=c},
e_:function e_(a,b,c){this.c=a
this.a=b
this.b=c},
e0:function e0(a,b,c){this.c=a
this.a=b
this.b=c},
e1:function e1(a,b,c){this.c=a
this.a=b
this.b=c},
e2:function e2(a,b,c){this.c=a
this.a=b
this.b=c},
e3:function e3(a,b,c){this.c=a
this.a=b
this.b=c},
e4:function e4(a,b,c){this.c=a
this.a=b
this.b=c},
d0:function d0(a,b,c){this.c=a
this.a=b
this.b=c},
lI(a){return new A.aG(new Uint8Array(A.t(a.c)),a.a,a.b)},
aG:function aG(a,b,c){this.c=a
this.a=b
this.b=c},
lK(a){return new A.cb(-1,0,-a.c,a)},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lL(a){return new A.cc(-1,0,-a.c,a)},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lM(a){return new A.cd(-1,0,-a.c,a)},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lN(a){return new A.ce(-1,0,-a.c,a)},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lO(a){return new A.cf(-1,0,-a.c,a)},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lP(a){return new A.cg(-1,0,-a.c,a)},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fJ(a){return new A.ch(-1,0,0,-1,0,a)},
ch:function ch(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lQ(a){return new A.ci(-1,0,-a.c,a)},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK(a){return new A.cj(-1,0,0,-2,0,a)},
cj:function cj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lR(a){return new A.ck(-1,0,-a.c,a)},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fL(a){return new A.cl(-1,0,0,-(a.c<<2>>>0),a)},
cl:function cl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kn(a){return new A.cm(-1,0,-a.c,a)},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B:function B(){},
qn(a,b){switch(b.a){case 0:A.hy(a)
break
case 1:A.qp(a)
break
case 2:A.qo(a)
break}return a},
qp(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a.gai().length
for(s=t.g,r=0;r<c;++r){q=a.x
if(q===$){q=A.b([],s)
a.sbY(q)}if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?d:o.a
if(m==null)m=0
l=n?d:o.b
if(l==null)l=0
k=B.a.S(l,2)
o=a.a
if((o==null?d:o.gL())!=null)for(j=l-1,i=0;i<k;++i,--j)for(h=0;h<m;++h){o=p.a
g=o==null?d:o.M(h,i,d)
if(g==null)g=new A.B()
o=p.a
f=o==null?d:o.M(h,j,d)
if(f==null)f=new A.B()
e=g.gO(g)
g.sO(0,f.gO(f))
f.sO(0,e)}else for(j=l-1,i=0;i<k;++i,--j)for(h=0;h<m;++h){o=p.a
g=o==null?d:o.M(h,i,d)
if(g==null)g=new A.B()
o=p.a
f=o==null?d:o.M(h,j,d)
if(f==null)f=new A.B()
e=g.gp(g)
g.sp(0,f.gp(f))
f.sp(0,e)
e=g.gt()
g.st(f.gt())
f.st(e)
e=g.gu()
g.su(f.gu())
f.su(e)
e=g.gv()
g.sv(f.gv())
f.sv(e)}}return a},
hy(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.gai().length
for(s=t.g,r=0;r<b;++r){q=a.x
if(q===$){q=A.b([],s)
a.sbY(q)}if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?c:o.a
if(m==null)m=0
l=n?c:o.b
if(l==null)l=0
k=B.a.S(m,2)
o=a.a
if((o==null?c:o.gL())!=null)for(j=m-1,i=0;i<l;++i)for(h=j,g=0;g<k;++g,--h){o=p.a
f=o==null?c:o.M(g,i,c)
if(f==null)f=new A.B()
o=p.a
e=o==null?c:o.M(h,i,c)
if(e==null)e=new A.B()
d=f.gO(f)
f.sO(0,e.gO(e))
e.sO(0,d)}else for(j=m-1,i=0;i<l;++i)for(h=j,g=0;g<k;++g,--h){o=p.a
f=o==null?c:o.M(g,i,c)
if(f==null)f=new A.B()
o=p.a
e=o==null?c:o.M(h,i,c)
if(e==null)e=new A.B()
d=f.gp(f)
f.sp(0,e.gp(e))
e.sp(0,d)
d=f.gt()
f.st(e.gt())
e.st(d)
d=f.gu()
f.su(e.gu())
e.su(d)
d=f.gv()
f.sv(e.gv())
e.sv(d)}}return a},
qo(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.gai().length
for(s=t.g,r=0;r<a;++r){q=a0.x
if(q===$){q=A.b([],s)
a0.sbY(q)}if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?b:o.a
if(m==null)m=0
l=n?b:o.b
if(l==null)l=0
k=B.a.S(l,2)
if((n?b:o.gL())!=null)for(j=l-1,i=m-1,h=0;h<k;++h,--j)for(g=i,f=0;f<m;++f,--g){o=p.a
e=o==null?b:o.M(f,h,b)
if(e==null)e=new A.B()
o=p.a
d=o==null?b:o.M(g,j,b)
if(d==null)d=new A.B()
c=e.gO(e)
e.sO(0,d.gO(d))
d.sO(0,c)}else for(j=l-1,i=m-1,h=0;h<k;++h,--j)for(g=i,f=0;f<m;++f,--g){o=p.a
e=o==null?b:o.M(f,h,b)
if(e==null)e=new A.B()
o=p.a
d=o==null?b:o.M(g,j,b)
if(d==null)d=new A.B()
c=e.gp(e)
e.sp(0,d.gp(d))
d.sp(0,c)
c=e.gt()
e.st(d.gt())
d.st(c)
c=e.gu()
e.su(d.gu())
d.su(c)
c=e.gv()
e.sv(d.gv())
d.sv(c)}}return a0},
hT:function hT(a,b){this.a=a
this.b=b},
j(a){return new A.i3(a)},
i3:function i3(a){this.a=a},
w(a,b,c,d){return new A.ae(a,d,c==null?a.length:d+c,d,b)},
o(a,b,c){var s=a.a,r=a.d+c,q=a.b,p=b==null?a.c:r+b
return new A.ae(s,q,p,r,a.e)},
ae:function ae(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
km(a,b,c){var s=new A.fG(c,new Int32Array(256))
s.jh(b)
s.kn(a)
return s},
fG:function fG(a,b){var _=this
_.a=$
_.b=a
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=b
_.ax=_.at=$},
a7(a,b){return new A.fI(a,new Uint8Array(b))},
fI:function fI(a,b){this.a=0
this.b=a
this.c=b},
iD:function iD(a,b){this.a=a
this.b=b},
h0:function h0(){},
aR:function aR(a,b){this.a=a
this.b=b},
qD(){var s,r,q,p=new FileReader()
p.toString
s=document
r=s.querySelector("#imageDropperContainer")
r.toString
r=J.n8(r)
q=r.$ti
A.kF(r.a,r.b,q.q("~(1)?").a(new A.jY()),!1,q.c)
s=s.querySelector("#downloadBtn")
s.toString
s=J.n7(s)
q=s.$ti
A.kF(s.a,s.b,q.q("~(1)?").a(new A.jZ(p)),!1,q.c)},
jY:function jY(){},
jZ:function jZ(a){this.a=a},
o7(a){throw A.d(A.ag("Uint64List not supported on the web."))},
nG(a,b,c){A.bA(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
m2(a,b){var s
A.bA(a,b,null)
s=B.a.S(a.byteLength-b,4)
return new Uint32Array(a,b,s)},
nv(a){var s
A.bA(a,0,null)
s=B.a.S(a.byteLength-0,4)
return new Float32Array(a,0,s)},
nw(a){return a.lw(0,0,null)},
qq(a){var s,r,q,p,o,n,m=a.length
for(s=m,r=1,q=0,p=0;s>0;){o=3800>s?s:3800
s-=o
for(;--o,o>=0;p=n){n=p+1
if(!(p>=0&&p<m))return A.a(a,p)
r+=a[p]&255
q+=r}r=B.a.a6(r,65521)
q=B.a.a6(q,65521)}return(q<<16|r)>>>0},
bh(a,b){var s,r,q,p=J.ac(a),o=p.gA(a)
b^=4294967295
for(s=0;o>=8;){r=s+1
q=p.n(a,s)
if(typeof q!=="number")return A.aV(q)
b=B.B[(b^q)&255]^b>>>8
s=r+1
q=p.n(a,r)
if(typeof q!=="number")return A.aV(q)
b=B.B[(b^q)&255]^b>>>8
r=s+1
q=p.n(a,s)
if(typeof q!=="number")return A.aV(q)
b=B.B[(b^q)&255]^b>>>8
s=r+1
q=p.n(a,r)
if(typeof q!=="number")return A.aV(q)
b=B.B[(b^q)&255]^b>>>8
r=s+1
q=p.n(a,s)
if(typeof q!=="number")return A.aV(q)
b=B.B[(b^q)&255]^b>>>8
s=r+1
q=p.n(a,r)
if(typeof q!=="number")return A.aV(q)
b=B.B[(b^q)&255]^b>>>8
r=s+1
q=p.n(a,s)
if(typeof q!=="number")return A.aV(q)
b=B.B[(b^q)&255]^b>>>8
s=r+1
q=p.n(a,r)
if(typeof q!=="number")return A.aV(q)
b=B.B[(b^q)&255]^b>>>8
o-=8}if(o>0)do{r=s+1
q=p.n(a,s)
if(typeof q!=="number")return A.aV(q)
b=B.B[(b^q)&255]^b>>>8
if(--o,o>0){s=r
continue}else break}while(!0)
return(b^4294967295)>>>0},
mB(a,b,c,d,e){var s,r,q,p,o,n,m,l=null,k=b.gP(b),j=b.gK(b),i=a.gP(a)<b.gP(b)?a.gP(a):b.gP(b),h=a.gK(a)<b.gK(b)?a.gK(a):b.gK(b)
if(a.gaH())a.fB(a.gaI())
if(typeof h!=="number")return A.aV(h)
s=j/h
if(typeof i!=="number")return A.aV(i)
r=k/i
q=t.p
p=J.am(h,q)
for(o=0;o<h;++o)p[o]=B.b.i(o*s)
n=J.am(i,q)
for(m=0;m<i;++m)n[m]=B.b.i(m*r)
if(c===B.ap)A.pA(b,a,d,e,i,h,n,p,l,B.aV)
else A.pz(b,a,d,e,i,h,n,p,c,!1,l,B.aV)
return a},
pA(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.M(m,l,q)
if(q==null)q=new A.B()
b.bX(c+n,o,q)}},
pz(a,b,c,d,e,f,g,h,i,j,a0,a1){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.M(m,l,q)
if(q==null)q=new A.B()
A.qj(b,c+n,o,q,i,!1,a0,a1)}},
qj(a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
if(!a6.fJ(a7,a8))return a6
if(b0===B.ap||a6.gaH())if(a6.fJ(a7,a8)){a6.aM(a7,a8).ah(a9)
return a6}s=a9.gab()
r=a9.ga4()
q=a9.gaa()
p=a9.gA(a9)<4?1:a9.gac()
if(typeof p!=="number")return p.cY()
if(p===0)return a6
o=a6.aM(a7,a8)
n=o.gab()
m=o.ga4()
l=o.gaa()
k=o.gac()
switch(b0.a){case 0:return a6
case 1:break
case 2:s=Math.max(n,s)
r=Math.max(m,r)
q=Math.max(l,q)
break
case 3:s=1-(1-s)*(1-n)
r=1-(1-r)*(1-m)
q=1-(1-q)*(1-l)
break
case 4:j=p*k
i=1-k
h=1-p
g=s*i+n*h
f=r*i+m*h
e=q*i+l*h
h=B.b.N(p,0.01,1)
i=p<0
d=i?0:1
c=B.b.N(s/h*d,0,0.99)
d=B.b.N(p,0.01,1)
h=i?0:1
b=B.b.N(r/d*h,0,0.99)
h=B.b.N(p,0.01,1)
i=i?0:1
a=B.b.N(q/h*i,0,0.99)
i=n*p
h=m*p
d=l*p
a0=j<s*k+i?0:1
a1=j<r*k+h?0:1
a2=j<q*k+d?0:1
s=(j+g)*(1-a0)+(i/(1-c)+g)*a0
r=(j+f)*(1-a1)+(h/(1-b)+f)*a1
q=(j+e)*(1-a2)+(d/(1-a)+e)*a2
break
case 5:s=n+s
r=m+r
q=l+q
break
case 6:s=Math.min(n,s)
r=Math.min(m,r)
q=Math.min(l,q)
break
case 7:s=n*s
r=m*r
q=l*q
break
case 8:s=s!==0?1-(1-n)/s:0
r=r!==0?1-(1-m)/r:0
q=q!==0?1-(1-l)/q:0
break
case 9:i=1-k
h=1-p
d=s*i
a3=n*h
s=2*n<k?2*s*n+d+a3:p*k-2*(k-n)*(p-s)+d+a3
d=r*i
a3=m*h
r=2*m<k?2*r*m+d+a3:p*k-2*(k-m)*(p-r)+d+a3
i=q*i
h=l*h
q=2*l<k?2*q*l+i+h:p*k-2*(k-l)*(p-q)+i+h
break
case 10:i=k===0
if(i)s=0
else{h=n/k
s=n*(p*h+2*s*(1-h))+s*(1-k)+n*(1-p)}if(i)r=0
else{h=m/k
r=m*(p*h+2*r*(1-h))+r*(1-k)+m*(1-p)}if(i)q=0
else{i=l/k
q=l*(p*i+2*q*(1-i))+q*(1-k)+l*(1-p)}break
case 11:i=2*s
h=1-k
d=1-p
a3=s*h
a4=n*d
s=i<p?i*n+a3+a4:p*k-2*(k-n)*(p-s)+a3+a4
i=2*r
a3=r*h
a4=m*d
r=i<p?i*m+a3+a4:p*k-2*(k-m)*(p-r)+a3+a4
i=2*q
h=q*h
d=l*d
q=i<p?i*l+h+d:p*k-2*(k-l)*(p-q)+h+d
break
case 12:s=Math.abs(s-n)
r=Math.abs(r-m)
q=Math.abs(q-l)
break
case 13:s=n-s
r=m-r
q=l-q
break
case 14:s=s!==0?n/s:0
r=r!==0?m/r:0
q=q!==0?l/q:0
break}a5=1-p
o.sab(s*p+n*k*a5)
o.sa4(r*p+m*k*a5)
o.saa(q*p+l*k*a5)
o.sac(p+k*a5)
return a6},
ns(a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=b2<16384,a5=a8>b0?b0:a8
for(s=1;s<=a5;)s=s<<1>>>0
s=s>>>1
r=s>>>1
q=A.b([0,0],t.t)
for(p=a6.length,o=s,s=r;s>=1;o=s,s=r){n=a7+b1*(b0-o)
m=b1*s
l=b1*o
k=a9*s
j=a9*o
for(i=(a8&s)>>>0!==0,h=a9*(a8-o),g=a7;g<=n;g+=l){f=g+h
for(e=g;e<=f;e+=j){d=e+k
c=e+m
b=c+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dv(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.dv(a,a6[b],q)
a2=q[0]
a3=q[1]
A.dv(a0,a2,q)
a6[e]=q[0]
a6[d]=q[1]
A.dv(a1,a3,q)
a6[c]=q[0]
a6[b]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dw(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.dw(a,a6[b],q)
a2=q[0]
a3=q[1]
A.dw(a0,a2,q)
a6[e]=q[0]
a6[d]=q[1]
A.dw(a1,a3,q)
a6[c]=q[0]
a6[b]=q[1]}}if(i){c=e+m
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dv(a,a6[c],q)
a0=q[0]
a6[c]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dw(a,a6[c],q)
a0=q[0]
a6[c]=q[1]}if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}if((b0&s)>>>0!==0){f=g+h
for(e=g;e<=f;e+=j){d=e+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.dv(i,a6[d],q)
a0=q[0]
a6[d]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.dw(i,a6[d],q)
a0=q[0]
a6[d]=q[1]}if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}r=s>>>1}},
dv(a,b,c){var s,r,q,p,o=$.aq()
o[0]=a
s=$.aB()
if(0>=s.length)return A.a(s,0)
r=s[0]
o[0]=b
q=s[0]
p=r+(q&1)+B.a.j(q,1)
B.c.h(c,0,p)
B.c.h(c,1,p-q)},
dw(a,b,c){var s=a-B.a.j(b,1)&65535
B.c.h(c,1,s)
B.c.h(c,0,b+s-32768&65535)},
qm(a){var s,r,q,p,o,n,m,l,k=null,j=a.toLowerCase()
if(B.l.bx(j,".jpg")||B.l.bx(j,".jpeg")){s=new Uint8Array(64)
r=new Uint8Array(64)
q=new Float32Array(64)
p=new Float32Array(64)
o=A.U(65535,k,!1,t.T)
n=t.v
m=A.U(65535,k,!1,n)
l=A.U(64,k,!1,n)
n=A.U(64,k,!1,n)
s=new A.id(s,r,q,p,o,m,l,n,new Int32Array(2048))
s.skl(s.d3(B.br,B.a6))
s.skh(s.d3(B.bs,B.a6))
r=t.d
s.shL(r.a(s.d3(B.bt,B.bx)))
s.shK(r.a(s.d3(B.bu,B.bA)))
s.jd()
s.jg()
s.ha(100)
return s}if(B.l.bx(j,".png"))return new A.fO()
if(B.l.bx(j,".tga"))return new A.iI()
if(B.l.bx(j,".gif"))return new A.hW()
if(B.l.bx(j,".tif")||B.l.bx(j,".tiff"))return new A.iL()
if(B.l.bx(j,".bmp"))return new A.hI()
if(B.l.bx(j,".ico"))return new A.f8()
if(B.l.bx(j,".cur"))return new A.f8()
if(B.l.bx(j,".pvr"))return new A.iA()
return k},
ql(a){var s,r,q,p,o,n,m,l,k,j=null
if(A.lD().lm(a))return new A.fv()
s=new A.fN(A.lw())
if(s.dm(a))return s
r=new A.hV()
r.f=A.w(a,!1,j,0)
r.a=new A.dD(A.b([],t.cM))
if(r.eJ())return r
q=new A.j5()
if(q.dm(a))return q
p=new A.iK()
if(p.f4(A.w(a,!1,j,0))!=null)return p
if(A.lV(a).c===943870035)return new A.iv()
if(A.nr(a))return new A.hR()
if(A.k6(A.w(a,!1,j,0)))return new A.eQ(!1)
o=new A.iH()
n=A.w(a,!1,j,0)
m=o.a=new A.eh(B.am)
m.cn(n)
if(m.fM())return o
l=new A.i_()
m=A.w(a,!1,j,0)
l.a=m
m=A.lh(m)
l.b=m
if(m!=null)return l
k=new A.iz()
if(k.bh(a)!=null)return k
return j},
qk(a,b){var s=A.qm(a)
if(s==null)return null
return s.bw(b)},
qF(a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
if($.kL==null){s=$.kL=new Uint8Array(768)
for(r=-256;r<0;++r)s[256+r]=0
for(r=0;r<256;++r)s[256+r]=r
for(r=256;r<512;++r)s[256+r]=255}for(r=0;r<64;++r){s=a5[r]
q=a4[r]
if(!(r<64))return A.a(a7,r)
a7[r]=s*q}for(p=0,r=0;r<8;++r,p+=8){s=1+p
if(!(s<64))return A.a(a7,s)
q=a7[s]
if(q===0){o=2+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=3+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=4+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=5+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=6+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=7+p
if(!(o<64))return A.a(a7,o)
o=a7[o]===0}else o=!1}else o=!1}else o=!1}else o=!1}else o=!1}else o=!1
if(o){if(!(p<64))return A.a(a7,p)
s=B.a.j(5793*a7[p]+512,10)
n=(s&2147483647)-((s&2147483648)>>>0)
if(!(p<64))return A.a(a7,p)
a7[p]=n
s=p+1
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+2
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+3
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+4
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+5
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+6
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+7
if(!(s<64))return A.a(a7,s)
a7[s]=n
continue}if(!(p<64))return A.a(a7,p)
o=B.a.j(5793*a7[p]+128,8)
m=(o&2147483647)-((o&2147483648)>>>0)
o=4+p
if(!(o<64))return A.a(a7,o)
l=B.a.j(5793*a7[o]+128,8)
k=(l&2147483647)-((l&2147483648)>>>0)
l=2+p
if(!(l<64))return A.a(a7,l)
j=a7[l]
i=6+p
if(!(i<64))return A.a(a7,i)
h=a7[i]
g=7+p
if(!(g<64))return A.a(a7,g)
f=a7[g]
e=B.a.j(2896*(q-f)+128,8)
d=(e&2147483647)-((e&2147483648)>>>0)
f=B.a.j(2896*(q+f)+128,8)
c=(f&2147483647)-((f&2147483648)>>>0)
f=3+p
if(!(f<64))return A.a(a7,f)
q=a7[f]<<4
b=(q&2147483647)-((q&2147483648)>>>0)
q=5+p
if(!(q<64))return A.a(a7,q)
e=a7[q]<<4
a=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(m-k+1,1)
n=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(m+k+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(j*3784+h*1567+128,8)
e=(e&2147483647)-((e&2147483648)>>>0)
a0=B.a.j(j*1567-h*3784+128,8)
j=(a0&2147483647)-((a0&2147483648)>>>0)
a0=B.a.j(d-a+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=B.a.j(d+a+1,1)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.j(c+b+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.j(c-b+1,1)
b=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.j(m-e+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
e=B.a.j(m+e+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(n-j+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
a3=B.a.j(n+j+1,1)
k=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.j(d*2276+a1*3406+2048,12)
n=(a3&2147483647)-((a3&2147483648)>>>0)
a1=B.a.j(d*3406-a1*2276+2048,12)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.j(b*799+a0*4017+2048,12)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a0=B.a.j(b*4017-a0*799+2048,12)
b=(a0&2147483647)-((a0&2147483648)>>>0)
if(!(p<64))return A.a(a7,p)
a7[p]=m+n
if(!(g<64))return A.a(a7,g)
a7[g]=m-n
if(!(s<64))return A.a(a7,s)
a7[s]=k+a1
if(!(i<64))return A.a(a7,i)
a7[i]=k-a1
if(!(l<64))return A.a(a7,l)
a7[l]=e+b
if(!(q<64))return A.a(a7,q)
a7[q]=e-b
if(!(f<64))return A.a(a7,f)
a7[f]=a2+d
if(!(o<64))return A.a(a7,o)
a7[o]=a2-d}for(r=0;r<8;++r){s=8+r
q=a7[s]
if(q===0&&a7[16+r]===0&&a7[24+r]===0&&a7[32+r]===0&&a7[40+r]===0&&a7[48+r]===0&&a7[56+r]===0){q=B.a.j(5793*a7[r]+8192,14)
n=(q&2147483647)-((q&2147483648)>>>0)
if(!(r<64))return A.a(a7,r)
a7[r]=n
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=16+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=24+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=32+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=40+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=48+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=56+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
continue}o=B.a.j(5793*a7[r]+2048,12)
m=(o&2147483647)-((o&2147483648)>>>0)
o=32+r
l=B.a.j(5793*a7[o]+2048,12)
k=(l&2147483647)-((l&2147483648)>>>0)
l=16+r
j=a7[l]
i=48+r
h=a7[i]
g=56+r
f=a7[g]
e=B.a.j(2896*(q-f)+2048,12)
d=(e&2147483647)-((e&2147483648)>>>0)
f=B.a.j(2896*(q+f)+2048,12)
c=(f&2147483647)-((f&2147483648)>>>0)
f=24+r
b=a7[f]
q=40+r
a=a7[q]
e=B.a.j(m-k+1,1)
n=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(m+k+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(j*3784+h*1567+2048,12)
e=(e&2147483647)-((e&2147483648)>>>0)
a0=B.a.j(j*1567-h*3784+2048,12)
j=(a0&2147483647)-((a0&2147483648)>>>0)
a0=B.a.j(d-a+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=B.a.j(d+a+1,1)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.j(c+b+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.j(c-b+1,1)
b=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.j(m-e+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
e=B.a.j(m+e+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(n-j+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
a3=B.a.j(n+j+1,1)
k=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.j(d*2276+a1*3406+2048,12)
n=(a3&2147483647)-((a3&2147483648)>>>0)
a1=B.a.j(d*3406-a1*2276+2048,12)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.j(b*799+a0*4017+2048,12)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a0=B.a.j(b*4017-a0*799+2048,12)
b=(a0&2147483647)-((a0&2147483648)>>>0)
if(!(r<64))return A.a(a7,r)
a7[r]=m+n
if(!(g<64))return A.a(a7,g)
a7[g]=m-n
a7[s]=k+a1
a7[i]=k-a1
a7[l]=e+b
a7[q]=e-b
a7[f]=a2+d
a7[o]=a2-d}for(s=$.kL,r=0;r<64;++r){s.toString
q=B.a.j(a7[r]+8,4)
q=384+((q&2147483647)-((q&2147483648)>>>0))
if(!(q>=0&&q<768))return A.a(s,q)
q=s[q]
if(!(r<64))return A.a(a6,r)
a6[r]=q}},
qr(e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3=null,e4="ifd0",e5=e6.r
if(e5.n(0,e4).a.al(274)){s=e5.n(0,e4).gcd()
s.toString
r=s}else r=0
s=e6.d
q=s.e
q.toString
s=s.d
s.toString
p=r>=5&&r<=8
if(p)o=s
else o=q
if(p)n=q
else n=s
m=A.Q(e3,e3,B.e,0,B.i,n,e3,0,3,e3,o,!1)
m.e=A.dt(e5)
m.gbE().n(0,e4).scd(e3)
l=s-1
k=q-1
e5=e6.Q
s=e5.length
switch(s){case 1:if(0>=s)return A.a(e5,0)
j=e5[0]
i=j.e
h=j.f
g=j.r
e5=r===8
s=r===7
q=r===6
f=r===5
e=r===4
d=r===3
c=r===2
b=i.length
a=0
while(!0){a0=e6.d.d
a0.toString
if(!(a<a0))break
a1=B.a.a9(a,g)
if(!(a1<b))return A.a(i,a1)
a2=i[a1]
a0=l-a
a3=0
while(!0){a4=e6.d.e
a4.toString
if(!(a3<a4))break
a5=B.a.a9(a3,h)
if(!(a5<a2.length))return A.a(a2,a5)
a6=a2[a5]
if(c){a4=m.a
if(a4!=null)a4.V(k-a3,a,a6,a6,a6)}else if(d){a4=m.a
if(a4!=null)a4.V(k-a3,a0,a6,a6,a6)}else if(e){a4=m.a
if(a4!=null)a4.V(a3,a0,a6,a6,a6)}else if(f){a4=m.a
if(a4!=null)a4.V(a,a3,a6,a6,a6)}else if(q){a4=m.a
if(a4!=null)a4.V(a0,a3,a6,a6,a6)}else if(s){a4=m.a
if(a4!=null)a4.V(a0,k-a3,a6,a6,a6)}else{a4=m.a
if(e5){if(a4!=null)a4.V(a,k-a3,a6,a6,a6)}else if(a4!=null)a4.V(a3,a,a6,a6,a6)}++a3}++a}break
case 3:if(0>=s)return A.a(e5,0)
j=e5[0]
if(1>=s)return A.a(e5,1)
a7=e5[1]
if(2>=s)return A.a(e5,2)
a8=e5[2]
a9=j.e
b0=a7.e
b1=a8.e
h=j.f
g=j.r
b2=a7.f
b3=a7.r
b4=a8.f
b5=a8.r
e5=r===8
s=r===7
q=r===6
f=r===5
e=r===4
d=r===3
c=r===2
b=a9.length
a0=b0.length
a4=b1.length
a=0
while(!0){b6=e6.d.d
b6.toString
if(!(a<b6))break
a1=B.a.a9(a,g)
b7=B.a.a9(a,b3)
b8=B.a.a9(a,b5)
if(!(a1<b))return A.a(a9,a1)
a2=a9[a1]
if(!(b7<a0))return A.a(b0,b7)
b9=b0[b7]
if(!(b8<a4))return A.a(b1,b8)
c0=b1[b8]
b6=l-a
a3=0
while(!0){c1=e6.d.e
c1.toString
if(!(a3<c1))break
a5=B.a.a9(a3,h)
c2=B.a.a9(a3,b2)
c3=B.a.a9(a3,b4)
if(!(a5<a2.length))return A.a(a2,a5)
a6=a2[a5]<<8>>>0
if(!(c2<b9.length))return A.a(b9,c2)
c4=b9[c2]-128
if(!(c3<c0.length))return A.a(c0,c3)
c5=c0[c3]-128
c1=B.a.j(a6+359*c5+128,8)
c6=B.a.N((c1&2147483647)-((c1&2147483648)>>>0),0,255)
c1=B.a.j(a6-88*c4-183*c5+128,8)
c7=B.a.N((c1&2147483647)-((c1&2147483648)>>>0),0,255)
c1=B.a.j(a6+454*c4+128,8)
c8=B.a.N((c1&2147483647)-((c1&2147483648)>>>0),0,255)
if(c){c1=m.a
if(c1!=null)c1.V(k-a3,a,c6,c7,c8)}else if(d){c1=m.a
if(c1!=null)c1.V(k-a3,b6,c6,c7,c8)}else if(e){c1=m.a
if(c1!=null)c1.V(a3,b6,c6,c7,c8)}else if(f){c1=m.a
if(c1!=null)c1.V(a,a3,c6,c7,c8)}else if(q){c1=m.a
if(c1!=null)c1.V(b6,a3,c6,c7,c8)}else if(s){c1=m.a
if(c1!=null)c1.V(b6,k-a3,c6,c7,c8)}else{c1=m.a
if(e5){if(c1!=null)c1.V(a,k-a3,c6,c7,c8)}else if(c1!=null)c1.V(a3,a,c6,c7,c8)}++a3}++a}break
case 4:q=e6.c
if(q==null)throw A.d(A.j("Unsupported color mode (4 components)"))
c9=q.d!==0&&!0
if(0>=s)return A.a(e5,0)
j=e5[0]
if(1>=s)return A.a(e5,1)
a7=e5[1]
if(2>=s)return A.a(e5,2)
a8=e5[2]
if(3>=s)return A.a(e5,3)
d0=e5[3]
a9=j.e
b0=a7.e
b1=a8.e
d1=d0.e
h=j.f
g=j.r
b2=a7.f
b3=a7.r
b4=a8.f
b5=a8.r
d2=d0.f
d3=d0.r
e5=r===8
s=r===7
q=r===6
f=r===5
e=r===4
d=r===3
c=r===2
b=!c9
a0=a9.length
a4=b0.length
b6=b1.length
c1=d1.length
a=0
while(!0){d4=e6.d.d
d4.toString
if(!(a<d4))break
a1=B.a.a9(a,g)
b7=B.a.a9(a,b3)
b8=B.a.a9(a,b5)
d5=B.a.a9(a,d3)
if(!(a1<a0))return A.a(a9,a1)
a2=a9[a1]
if(!(b7<a4))return A.a(b0,b7)
b9=b0[b7]
if(!(b8<b6))return A.a(b1,b8)
c0=b1[b8]
if(!(d5<c1))return A.a(d1,d5)
d6=d1[d5]
d4=l-a
a3=0
while(!0){d7=e6.d.e
d7.toString
if(!(a3<d7))break
a5=B.a.a9(a3,h)
c2=B.a.a9(a3,b2)
c3=B.a.a9(a3,b4)
d8=B.a.a9(a3,d2)
if(b){if(!(a5<a2.length))return A.a(a2,a5)
d9=a2[a5]
if(!(c2<b9.length))return A.a(b9,c2)
e0=b9[c2]
if(!(c3<c0.length))return A.a(c0,c3)
a6=c0[c3]
if(!(d8<d6.length))return A.a(d6,d8)
e1=d6[d8]}else{if(!(a5<a2.length))return A.a(a2,a5)
a6=a2[a5]
if(!(c2<b9.length))return A.a(b9,c2)
c4=b9[c2]
if(!(c3<c0.length))return A.a(c0,c3)
c5=c0[c3]
if(!(d8<d6.length))return A.a(d6,d8)
e1=d6[d8]
d7=c5-128
d9=255-B.a.N(B.b.i(a6+1.402*d7),0,255)
e2=c4-128
e0=255-B.b.i(B.b.N(a6-0.3441363*e2-0.71413636*d7,0,255))
a6=255-B.a.N(B.b.i(a6+1.772*e2),0,255)}d7=B.a.j(d9*e1,8)
c6=(d7&2147483647)-((d7&2147483648)>>>0)
d7=B.a.j(e0*e1,8)
c7=(d7&2147483647)-((d7&2147483648)>>>0)
d7=B.a.j(a6*e1,8)
c8=(d7&2147483647)-((d7&2147483648)>>>0)
if(c){d7=m.a
if(d7!=null)d7.V(k-a3,a,c6,c7,c8)}else if(d){d7=m.a
if(d7!=null)d7.V(k-a3,d4,c6,c7,c8)}else if(e){d7=m.a
if(d7!=null)d7.V(a3,d4,c6,c7,c8)}else if(f){d7=m.a
if(d7!=null)d7.V(a,a3,c6,c7,c8)}else if(q){d7=m.a
if(d7!=null)d7.V(d4,a3,c6,c7,c8)}else if(s){d7=m.a
if(d7!=null)d7.V(d4,k-a3,c6,c7,c8)}else{d7=m.a
if(e5){if(d7!=null)d7.V(a,k-a3,c6,c7,c8)}else if(d7!=null)d7.V(a3,a,c6,c7,c8)}++a3}++a}break
default:throw A.d(A.j("Unsupported color mode"))}return m},
oT(a,b,c,d,e,f){A.oQ(f,a,b,c,d,e,!0,f)},
oU(a,b,c,d,e,f){A.oR(f,a,b,c,d,e,!0,f)},
oS(a,b,c,d,e,f){A.oP(f,a,b,c,d,e,!0,f)},
d8(a,b,c,d,e){var s,r,q,p
for(s=0;s<d;++s){r=a.a
q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=b.a
p=b.d+s
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
J.A(c.a,c.d+s,q+p)}},
oQ(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.w(a,!1,q,p),m=A.w(a,!1,q,p),l=A.o(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.d8(A.o(n,q,1),l,A.o(m,q,1),b-1,!0)
l.d+=d
n.d+=d
m.d+=d
e=1}for(s=-d,r=b-1;e<o;){A.d8(n,A.o(l,q,s),m,1,!0)
A.d8(A.o(n,q,1),l,A.o(m,q,1),r,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
oR(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.w(a,!1,q,p),m=A.w(h,!1,q,p),l=A.o(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.d8(A.o(n,q,1),l,A.o(m,q,1),b-1,!0)
n.d+=d
m.d+=d
e=1}else l.d-=d
for(;e<o;){A.d8(n,l,m,b,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
oP(a,b,c,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i=null,h=a1*a0,g=a1+a2,f=A.w(a,!1,i,h),e=A.w(a4,!1,i,h),d=A.o(e,i,0)
if(a1===0){s=f.a
r=f.d
if(!(r>=0&&r<s.length))return A.a(s,r)
e.h(0,0,s[r])
A.d8(A.o(f,i,1),d,A.o(e,i,1),b-1,!0)
d.d+=a0
f.d+=a0
e.d+=a0
a1=1}for(s=-a0;a1<g;){A.d8(f,A.o(d,i,s),e,1,!0)
for(q=1;q<b;++q){r=d.a
p=d.d
o=p+(q-1)
n=r.length
if(!(o>=0&&o<n))return A.a(r,o)
o=r[o]
m=q-a0
l=p+m
if(!(l>=0&&l<n))return A.a(r,l)
l=r[l]
m=p+(m-1)
if(!(m>=0&&m<n))return A.a(r,m)
k=o+l-r[m]
if((k&4294967040)>>>0===0)j=k
else j=k<0?0:255
r=f.a
p=f.d+q
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
J.A(e.a,e.d+q,p+j)}++a1
d.d+=a0
f.d+=a0
e.d+=a0}},
qc(a){var s="ifd0",r=A.aZ(a,!1,!1)
if(!a.gbE().n(0,s).a.al(274)||a.gbE().n(0,s).gcd()===1)return r
r.e=A.dt(a.gbE())
r.gbE().n(0,s).scd(null)
switch(a.gbE().n(0,s).gcd()){case 2:return A.hy(r)
case 3:return A.qn(r,B.cP)
case 4:return A.hy(A.hx(r,180))
case 5:return A.hy(A.hx(r,90))
case 6:return A.hx(r,90)
case 7:return A.hy(A.hx(r,-90))
case 8:return A.hx(r,-90)}return r},
qf(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
a.gaH()
if(a.gbE().n(0,"ifd0").a.al(274)&&a.gbE().n(0,"ifd0").gcd()!==1)a=A.qc(a)
if(b<=0)b=B.b.bR(a0*(a.gK(a)/a.gP(a)))
if(a0<=0)a0=B.b.bR(b*(a.gP(a)/a.gK(a)))
if(a0===a.gP(a)&&b===a.gK(a))return A.aZ(a,!1,!1)
s=new Int32Array(a0)
r=a.gP(a)/a0
for(q=0;q<a0;++q){p=B.b.i(q*r)
if(!(q<a0))return A.a(s,q)
s[q]=p}o=a.gai().length
for(p=t.g,n=c,m=0;m<o;++m){l=a.x
if(l===$){l=A.b([],p)
a.sbY(l)}if(!(m<l.length))return A.a(l,m)
k=l[m]
j=A.fb(k,b,!0,a0)
i=n==null
if(!i)n.aL(j)
if(i)n=j
i=k.a
h=i==null
g=h?c:i.b
f=(g==null?0:g)/b
if((h?c:i.gL())!=null)for(e=0;e<b;++e){d=B.b.i(e*f)
for(i=0+e,q=0;q<a0;++q){if(!(q<a0))return A.a(s,q)
h=s[q]
g=k.a
if(g==null)h=c
else{h=g.aM(h,d)
h=B.b.i(h.gO(h))}if(h==null)h=0
g=j.a
if(g!=null)g.aN(0+q,i,h)}}else for(e=0;e<b;++e){d=B.b.i(e*f)
for(i=0+e,q=0;q<a0;++q){if(!(q<a0))return A.a(s,q)
h=s[q]
g=k.a
h=g==null?c:g.M(h,d,c)
if(h==null)h=new A.B()
j.bX(0+q,i,h)}}}n.toString
return n},
hx(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=B.a.a6(a9,360)
a8.gaH()
if(B.a.a6(a7,90)===0)switch(B.a.S(a7,90)){case 1:return A.q_(a8)
case 2:return A.pY(a8)
case 3:return A.pZ(a8)
default:return A.aZ(a8,!1,!1)}s=a7*3.141592653589793/180
r=Math.cos(s)
q=Math.sin(s)
p=a8.gP(a8)
o=a8.gP(a8)
n=a8.gK(a8)
m=a8.gK(a8)
l=0.5*a8.gP(a8)
k=0.5*a8.gK(a8)
n=Math.abs(p*r)+Math.abs(n*q)
j=0.5*n
m=Math.abs(o*q)+Math.abs(m*r)
i=0.5*m
h=a8.gai().length
for(p=t.g,g=a6,f=0;f<h;++f){e=a8.x
if(e===$){e=A.b([],p)
a8.sbY(e)}if(!(f<e.length))return A.a(e,f)
d=e[f]
o=g==null
c=o?a6:g.dj()
if(c==null){b=B.b.i(n)
c=A.fb(a8,B.b.i(m),!0,b)}if(o)g=c
for(o=c.a,o=o.gJ(o);o.E();){a=o.gU()
a0=a.gb4(a)
a1=a.gb5(a)
b=a0-j
a2=a1-i
a3=l+b*r+a2*q
a4=k-b*q+a2*r
if(a3>=0)if(a4>=0){b=d.a
a2=b==null
a5=a2?a6:b.a
if(a3<(a5==null?0:a5)){b=a2?a6:b.b
b=a4<(b==null?0:b)}else b=!1}else b=!1
else b=!1
if(b)c.bX(a0,a1,d.h5(a3,a4,B.cU))}}g.toString
return g},
q_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gai(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.a6)(s),++p){o=s[p]
n=q==null
m=n?f:q.dj()
if(m==null){l=o.a
k=l==null
j=k?f:l.b
if(j==null)j=0
l=k?f:l.a
m=A.fb(o,l==null?0:l,!0,j)}if(n)q=m
n=o.a
n=n==null?f:n.b
i=(n==null?0:n)-1
h=0
while(!0){n=m.a
n=n==null?f:n.b
if(!(h<(n==null?0:n)))break
g=0
while(!0){n=m.a
n=n==null?f:n.a
if(!(g<(n==null?0:n)))break
n=o.a
n=n==null?f:n.M(h,i-g,f)
m.bX(g,h,n==null?new A.B():n);++g}++h}}q.toString
return q},
pY(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gai(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.a6)(s),++p){o=s[p]
n=o.a
m=n==null
l=m?f:n.a
k=(l==null?0:l)-1
n=m?f:n.b
j=(n==null?0:n)-1
n=q==null
i=n?f:q.dj()
if(i==null)i=A.aZ(o,!0,!0)
if(n)q=i
h=0
while(!0){n=i.a
n=n==null?f:n.b
if(!(h<(n==null?0:n)))break
n=j-h
g=0
while(!0){m=i.a
m=m==null?f:m.a
if(!(g<(m==null?0:m)))break
m=o.a
m=m==null?f:m.M(k-g,n,f)
i.bX(g,h,m==null?new A.B():m);++g}++h}}q.toString
return q},
pZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gai(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.a6)(s),++p){o=s[p]
n=a.a
n=n==null?f:n.a
m=(n==null?0:n)-1
n=q==null
l=n?f:q.dj()
if(l==null){k=o.a
j=k==null
i=j?f:k.b
if(i==null)i=0
k=j?f:k.a
l=A.fb(o,k==null?0:k,!0,i)}if(n)q=l
h=0
while(!0){n=l.a
n=n==null?f:n.b
if(!(h<(n==null?0:n)))break
n=m-h
g=0
while(!0){k=l.a
k=k==null?f:k.a
if(!(g<(k==null?0:k)))break
k=o.a
k=k==null?f:k.M(n,g,f)
l.bX(g,h,k==null?new A.B():k);++g}++h}}q.toString
return q},
jP(a){var s
a=(a&-a)>>>0
s=a!==0?31:32
if((a&65535)!==0)s-=16
if((a&16711935)!==0)s-=8
if((a&252645135)!==0)s-=4
if((a&858993459)!==0)s-=2
return(a&1431655765)!==0?s-1:s},
qL(a){$.l_().h(0,0,a)
return $.n2().n(0,0)},
mJ(a,b,c,d){return(B.a.N(a,0,255)|B.a.N(b,0,255)<<8|B.a.N(c,0,255)<<16|B.a.N(d,0,255)<<24)>>>0},
b3(a,b,c){var s,r,q,p,o=b.gA(b),n=b.gH(),m=a.gL(),l=m==null?null:m.gH()
if(l==null)l=a.gH()
s=a.gA(a)
if(o===1){r=a.gA(a)>2?a.gak():a.n(0,0)
b.h(0,0,A.kQ(A.aH(a.n(0,0))?B.b.c3(r):r,l,n))}else if(o<=s)for(q=0;q<o;++q)b.h(0,q,A.kQ(a.n(0,q),l,n))
else{for(q=0;q<s;++q)b.h(0,q,A.kQ(a.n(0,q),l,n))
p=s===1?b.n(0,0):0
for(q=s;q<o;++q)b.h(0,q,q===3?c:p)}return b},
ay(a,b,c,d,e){var s,r,q=a.gL(),p=q==null?null:q.gH()
if(p==null)p=a.gH()
q=e==null
s=q?null:e.gH()
c=s==null?c:s
if(c==null)c=a.gH()
s=q?null:e.gA(e)
d=s==null?d:s
if(d==null)d=a.gA(a)
if(b==null)b=0
if(c===p&&d===a.gA(a)){if(q)return a.T(0)
e.ah(a)
return e}switch(c.a){case 3:if(q)r=new A.bk(new Uint8Array(d))
else r=e
return A.b3(a,r,b)
case 0:return A.b3(a,q?new A.cE(d,0):e,b)
case 1:return A.b3(a,q?new A.cG(d,0):e,b)
case 2:if(q){q=d<3?1:2
r=new A.cI(d,new Uint8Array(q))}else r=e
return A.b3(a,r,b)
case 4:if(q)r=new A.cF(new Uint16Array(d))
else r=e
return A.b3(a,r,b)
case 5:if(q)r=new A.cH(new Uint32Array(d))
else r=e
return A.b3(a,r,b)
case 6:if(q)r=new A.cD(new Int8Array(d))
else r=e
return A.b3(a,r,b)
case 7:if(q)r=new A.cB(new Int16Array(d))
else r=e
return A.b3(a,r,b)
case 8:if(q)r=new A.cC(new Int32Array(d))
else r=e
return A.b3(a,r,b)
case 9:if(q)r=new A.cy(new Uint16Array(d))
else r=e
return A.b3(a,r,b)
case 10:if(q)r=new A.cz(new Float32Array(d))
else r=e
return A.b3(a,r,b)
case 11:if(q)r=new A.cA(new Float64Array(d))
else r=e
return A.b3(a,r,b)}},
Y(a){return 0.299*a.gp(a)+0.587*a.gt()+0.114*a.gu()},
mA(a,b,c,d){var s=1-d/255
return A.b([B.b.bR(255*(1-a/255)*s),B.b.bR(255*(1-b/255)*s),B.b.bR(255*(1-c/255)*s)],t.t)},
H(a){var s,r,q,p
$.kZ()[0]=a
s=$.n1()
if(0>=s.length)return A.a(s,0)
r=s[0]
if(a===0)return r>>>16
if($.N==null)A.T()
q=r>>>23&511
s=$.ld.cD()
if(!(q<s.length))return A.a(s,q)
q=s[q]
if(q!==0){p=r&8388607
return q+(p+4095+(p>>>13&1)>>>13)}return A.nt(r)},
nt(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.b0(o+(B.a.W(1,s-1)-1)+(B.a.a2(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
T(){var s,r,q,p,o,n=$.N
if(n!=null)return n
s=new Uint32Array(65536)
$.N=A.nQ(s.buffer,0,null)
n=new Uint16Array(512)
$.ld.b=n
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){n[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(n,p)
n[p]=0}else{p=q<<10>>>0
n[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(n,o)
n[o]=(p|32768)>>>0}}for(r=0;r<65536;++r)s[r]=A.nu(r)
n=$.N
n.toString
return n},
nu(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{for(;(p&1024)===0;){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0}},B={}
var w=[A,J,B]
var $={}
A.kg.prototype={}
J.dL.prototype={
X(a,b){return a===b},
gI(a){return A.e7(a)},
B(a){return"Instance of '"+A.it(a)+"'"},
gaR(a){return A.cv(A.kM(this))}}
J.ft.prototype={
B(a){return String(a)},
gI(a){return a?519018:218159},
gaR(a){return A.cv(t.y)},
$iP:1,
$ijN:1}
J.dQ.prototype={
X(a,b){return null==b},
B(a){return"null"},
gI(a){return 0},
$iP:1,
$iaf:1}
J.bb.prototype={}
J.c7.prototype={
gI(a){return 0},
B(a){return String(a)}}
J.fM.prototype={}
J.cq.prototype={}
J.bq.prototype={
B(a){var s=a[$.mL()]
if(s==null)return this.hi(a)
return"JavaScript function for "+J.eI(s)},
$ic1:1}
J.cY.prototype={
gI(a){return 0},
B(a){return String(a)}}
J.cZ.prototype={
gI(a){return 0},
B(a){return String(a)}}
J.v.prototype={
D(a,b){A.bf(a).c.a(b)
if(!!a.fixed$length)A.az(A.ag("add"))
a.push(b)},
ed(a,b){return A.kx(a,b,null,A.bf(a).c)},
bv(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
bs(a,b,c){if(b<0||b>a.length)throw A.d(A.ab(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.d(A.ab(c,b,a.length,"end",null))
if(b===c)return A.b([],A.bf(a))
return A.b(a.slice(b,c),A.bf(a))},
gfO(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.nH())},
am(a,b,c,d,e){var s,r,q,p,o
A.bf(a).q("e<1>").a(d)
if(!!a.immutable$list)A.az(A.ag("setRange"))
A.aQ(b,c,a.length)
s=c-b
if(s===0)return
A.h1(e,"skipCount")
if(t.aH.b(d)){r=d
q=e}else{r=J.l2(d,e).fZ(0,!1)
q=0}p=J.ac(r)
if(q+s>p.gA(r))throw A.d(A.lx())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.n(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.n(r,q+o)},
aW(a,b,c,d){var s
A.bf(a).q("1?").a(d)
if(!!a.immutable$list)A.az(A.ag("fill range"))
A.aQ(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
cb(a,b){var s
for(s=0;s<a.length;++s)if(J.bF(a[s],b))return!0
return!1},
B(a){return A.ly(a,"[","]")},
gJ(a){return new J.di(a,a.length,A.bf(a).q("di<1>"))},
gI(a){return A.e7(a)},
gA(a){return a.length},
sA(a,b){if(!!a.fixed$length)A.az(A.ag("set length"))
if(b<0)throw A.d(A.ab(b,0,null,"newLength",null))
if(b>a.length)A.bf(a).c.a(null)
a.length=b},
n(a,b){if(!(b>=0&&b<a.length))throw A.d(A.jQ(a,b))
return a[b]},
h(a,b,c){A.bf(a).c.a(c)
if(!!a.immutable$list)A.az(A.ag("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.jQ(a,b))
a[b]=c},
$iaa:1,
$ie:1,
$ip:1}
J.i8.prototype={}
J.di.prototype={
gU(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.a6(q)
throw A.d(q)}s=r.c
if(s>=p){r.sex(null)
return!1}r.sex(q[s]);++r.c
return!0},
sex(a){this.d=this.$ti.q("1?").a(a)},
$iE:1}
J.cW.prototype={
e_(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ge2(b)
if(this.ge2(a)===s)return 0
if(this.ge2(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ge2(a){return a===0?1/a<0:a<0},
i(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.ag(""+a+".toInt()"))},
bb(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.ag(""+a+".ceil()"))},
c3(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.ag(""+a+".floor()"))},
bR(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.ag(""+a+".round()"))},
N(a,b,c){if(this.e_(b,c)>0)throw A.d(A.bW(b))
if(this.e_(a,b)<0)return b
if(this.e_(a,c)>0)return c
return a},
co(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.ab(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.az(A.ag("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.l.cY("0",o)},
B(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a6(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aE(a,b){A.pp(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.fd(a,b)},
S(a,b){return(a|0)===a?a/b|0:this.fd(a,b)},
fd(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.ag("Result of truncating division is "+A.C(s)+": "+A.C(a)+" ~/ "+b))},
W(a,b){if(b<0)throw A.d(A.bW(b))
return b>31?0:a<<b>>>0},
R(a,b){return b>31?0:a<<b>>>0},
b0(a,b){var s
if(b<0)throw A.d(A.bW(b))
if(a>0)s=this.a9(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
j(a,b){var s
if(a>0)s=this.a9(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a2(a,b){if(0>b)throw A.d(A.bW(b))
return this.a9(a,b)},
a9(a,b){return b>31?0:a>>>b},
gaR(a){return A.cv(t.di)},
$iG:1,
$ii:1}
J.dP.prototype={
az(a,b){var s=this.W(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
gaR(a){return A.cv(t.p)},
$iP:1,
$ih:1}
J.fu.prototype={
gaR(a){return A.cv(t.W)},
$iP:1}
J.cX.prototype={
aJ(a,b){return a+b},
bx(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.hg(a,r-s)},
he(a,b){var s=a.length,r=b.length
if(r>s)return!1
return b===a.substring(0,r)},
dt(a,b,c){return a.substring(b,A.aQ(b,c,a.length))},
hg(a,b){return this.dt(a,b,null)},
lk(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.nJ(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.nK(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
cY(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.cx)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
l1(a,b,c){var s=b-a.length
if(s<=0)return a
return this.cY(c,s)+a},
B(a){return a},
gI(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaR(a){return A.cv(t.N)},
gA(a){return a.length},
$iaa:1,
$iP:1,
$ilJ:1,
$iW:1}
A.c6.prototype={
B(a){return"LateInitializationError: "+this.a}}
A.as.prototype={
gA(a){return this.a.length},
n(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.iE.prototype={}
A.dq.prototype={}
A.dS.prototype={
gJ(a){var s=this
return new A.c8(s,s.gA(s),s.$ti.q("c8<1>"))}}
A.eg.prototype={
giS(){var s=J.df(this.a),r=this.c
if(r==null||r>s)return s
return r},
gkf(){var s=J.df(this.a),r=this.b
if(r>s)return s
return r},
gA(a){var s,r=J.df(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.aV()
return s-q},
bv(a,b){var s=this,r=s.gkf()+b
if(b<0||r>=s.giS())throw A.d(A.i6(b,s.gA(s),s,"index"))
return J.n5(s.a,r)},
fZ(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ac(n),l=m.gA(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=J.lz(0,p.$ti.c)
return n}r=A.U(s,m.bv(n,o),!1,p.$ti.c)
for(q=1;q<s;++q){B.c.h(r,q,m.bv(n,o+q))
if(m.gA(n)<l)throw A.d(A.dm(p))}return r}}
A.c8.prototype={
gU(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=J.ac(q),o=p.gA(q)
if(r.b!==o)throw A.d(A.dm(q))
s=r.c
if(s>=o){r.scs(null)
return!1}r.scs(p.bv(q,s));++r.c
return!0},
scs(a){this.d=this.$ti.q("1?").a(a)},
$iE:1}
A.dT.prototype={
gJ(a){var s=this.a,r=s.a,q=A.m(this)
return new A.an(A.b0(r,r.r,s.$ti.c),this.b,q.q("@<1>").ap(q.z[1]).q("an<1,2>"))},
gA(a){return this.a.a.a}}
A.dr.prototype={}
A.an.prototype={
E(){var s=this,r=s.b
if(r.E()){s.scs(s.c.$1(r.d))
return!0}s.scs(null)
return!1},
gU(){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
scs(a){this.a=this.$ti.q("2?").a(a)},
$iE:1}
A.at.prototype={}
A.bP.prototype={
h(a,b,c){A.m(this).q("bP.E").a(c)
throw A.d(A.ag("Cannot modify an unmodifiable list"))},
am(a,b,c,d,e){A.m(this).q("e<bP.E>").a(d)
throw A.d(A.ag("Cannot modify an unmodifiable list"))},
bC(a,b,c,d){return this.am(a,b,c,d,0)}}
A.d7.prototype={}
A.cJ.prototype={
B(a){return A.kl(this)},
$ibs:1}
A.dn.prototype={
gA(a){return this.b.length},
geU(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
al(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
n(a,b){if(!this.al(b))return null
return this.b[this.a[b]]},
c4(a,b){var s,r,q,p
this.$ti.q("~(1,2)").a(b)
s=this.geU()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gfN(){return new A.er(this.geU(),this.$ti.q("er<1>"))}}
A.er.prototype={
gA(a){return this.a.length},
gJ(a){var s=this.a
return new A.es(s,s.length,this.$ti.q("es<1>"))}}
A.es.prototype={
gU(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s=this,r=s.c
if(r>=s.b){s.sct(null)
return!1}s.sct(s.a[r]);++s.c
return!0},
sct(a){this.d=this.$ti.q("1?").a(a)},
$iE:1}
A.c2.prototype={
da(){var s,r=this,q=r.$map
if(q==null){s=r.$ti
q=new A.dR(s.q("@<1>").ap(s.z[1]).q("dR<1,2>"))
A.mD(r.a,q)
r.$map=q}return q},
n(a,b){return this.da().n(0,b)},
c4(a,b){this.$ti.q("~(1,2)").a(b)
this.da().c4(0,b)},
gfN(){var s=this.da()
return new A.bc(s,A.m(s).q("bc<1>"))},
gA(a){return this.da().a}}
A.iN.prototype={
bF(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.dY.prototype={
B(a){return"Null check operator used on a null value"}}
A.fy.prototype={
B(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hb.prototype={
B(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ip.prototype={
B(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ds.prototype={}
A.ey.prototype={
B(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibO:1}
A.bG.prototype={
B(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.mK(r==null?"unknown":r)+"'"},
$ic1:1,
glq(){return this},
$C:"$1",
$R:1,
$D:null}
A.eR.prototype={$C:"$0",$R:0}
A.eS.prototype={$C:"$2",$R:2}
A.h6.prototype={}
A.h4.prototype={
B(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.mK(s)+"'"}}
A.cx.prototype={
X(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cx))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.kU(this.a)^A.e7(this.$_target))>>>0},
B(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.it(this.a)+"'")}}
A.hk.prototype={
B(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.h2.prototype={
B(a){return"RuntimeError: "+this.a}}
A.b_.prototype={
gA(a){return this.a},
gbH(a){var s=A.m(this)
return A.nO(new A.bc(this,s.q("bc<1>")),new A.ig(this),s.c,s.z[1])},
al(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.kQ(a)},
kQ(a){var s=this.d
if(s==null)return!1
return this.cP(s[this.cO(a)],a)>=0},
n(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.kR(b)},
kR(a){var s,r,q=this.d
if(q==null)return null
s=q[this.cO(a)]
r=this.cP(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.m(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.eh(s==null?q.b=q.dO():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.eh(r==null?q.c=q.dO():r,b,c)}else q.kT(b,c)},
kT(a,b){var s,r,q,p,o=this,n=A.m(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.dO()
r=o.cO(a)
q=s[r]
if(q==null)s[r]=[o.dP(a,b)]
else{p=o.cP(q,a)
if(p>=0)q[p].b=b
else q.push(o.dP(a,b))}},
dq(a,b){var s=this
if(typeof b=="string")return s.f6(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.f6(s.c,b)
else return s.kS(b)},
kS(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cO(a)
r=n[s]
q=o.cP(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fh(p)
if(r.length===0)delete n[s]
return p.b},
c4(a,b){var s,r,q=this
A.m(q).q("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.dm(q))
s=s.c}},
eh(a,b,c){var s,r=A.m(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.dP(b,c)
else s.b=c},
f6(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fh(s)
delete a[b]
return s.b},
eX(){this.r=this.r+1&1073741823},
dP(a,b){var s=this,r=A.m(s),q=new A.ij(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.eX()
return q},
fh(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.eX()},
cO(a){return J.hC(a)&1073741823},
cP(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bF(a[r].a,b))return r
return-1},
B(a){return A.kl(this)},
dO(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ikj:1}
A.ig.prototype={
$1(a){var s=this.a,r=A.m(s)
s=s.n(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.m(this.a).q("2(1)")}}
A.ij.prototype={}
A.bc.prototype={
gA(a){return this.a.a},
gJ(a){var s=this.a,r=new A.a2(s,s.r,this.$ti.q("a2<1>"))
r.c=s.e
return r}}
A.a2.prototype={
gU(){return this.d},
E(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.dm(q))
s=r.c
if(s==null){r.sct(null)
return!1}else{r.sct(s.a)
r.c=s.c
return!0}},
sct(a){this.d=this.$ti.q("1?").a(a)},
$iE:1}
A.dR.prototype={
cO(a){return A.qd(a)&1073741823},
cP(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bF(a[r].a,b))return r
return-1}}
A.jU.prototype={
$1(a){return this.a(a)},
$S:32}
A.jV.prototype={
$2(a,b){return this.a(a,b)},
$S:16}
A.jW.prototype={
$1(a){return this.a(A.bT(a))},
$S:15}
A.jf.prototype={
cD(){var s=this.b
if(s===this)throw A.d(A.ki(this.a))
return s}}
A.fB.prototype={
gaR(a){return B.kD},
$iP:1,
$ik7:1}
A.dV.prototype={
ji(a,b,c,d){var s=A.ab(b,0,c,d,null)
throw A.d(s)},
er(a,b,c,d){if(b>>>0!==b||b>c)this.ji(a,b,c,d)},
$ia5:1}
A.aj.prototype={
gA(a){return a.length},
fb(a,b,c,d,e){var s,r,q=a.length
this.er(a,b,q,"start")
this.er(a,c,q,"end")
if(b>c)throw A.d(A.ab(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.eK(e,null))
r=d.length
if(r-e<s)throw A.d(A.lZ("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaa:1,
$iau:1}
A.bM.prototype={
n(a,b){A.bU(b,a,a.length)
return a[b]},
h(a,b,c){A.po(c)
A.bU(b,a,a.length)
a[b]=c},
am(a,b,c,d,e){t.bM.a(d)
if(t.d4.b(d)){this.fb(a,b,c,d,e)
return}this.ef(a,b,c,d,e)},
bC(a,b,c,d){return this.am(a,b,c,d,0)},
$ie:1,
$ip:1}
A.aN.prototype={
h(a,b,c){A.k(c)
A.bU(b,a,a.length)
a[b]=c},
am(a,b,c,d,e){t.hb.a(d)
if(t.bc.b(d)){this.fb(a,b,c,d,e)
return}this.ef(a,b,c,d,e)},
bC(a,b,c,d){return this.am(a,b,c,d,0)},
$ie:1,
$ip:1}
A.fC.prototype={
gaR(a){return B.kE},
bs(a,b,c){return new Float32Array(a.subarray(b,A.bg(b,c,a.length)))},
$iP:1,
$ikb:1}
A.dU.prototype={
gaR(a){return B.kF},
bs(a,b,c){return new Float64Array(a.subarray(b,A.bg(b,c,a.length)))},
$iP:1,
$ikc:1}
A.fD.prototype={
gaR(a){return B.kG},
n(a,b){A.bU(b,a,a.length)
return a[b]},
bs(a,b,c){return new Int16Array(a.subarray(b,A.bg(b,c,a.length)))},
$iP:1,
$ii7:1}
A.fE.prototype={
gaR(a){return B.kH},
n(a,b){A.bU(b,a,a.length)
return a[b]},
bs(a,b,c){return new Int32Array(a.subarray(b,A.bg(b,c,a.length)))},
$iP:1,
$ifg:1}
A.fF.prototype={
gaR(a){return B.kI},
n(a,b){A.bU(b,a,a.length)
return a[b]},
bs(a,b,c){return new Int8Array(a.subarray(b,A.bg(b,c,a.length)))},
$iP:1,
$ike:1}
A.dW.prototype={
gaR(a){return B.kK},
n(a,b){A.bU(b,a,a.length)
return a[b]},
bs(a,b,c){return new Uint16Array(a.subarray(b,A.bg(b,c,a.length)))},
$iP:1,
$ikB:1}
A.dX.prototype={
gaR(a){return B.kL},
n(a,b){A.bU(b,a,a.length)
return a[b]},
bs(a,b,c){return new Uint32Array(a.subarray(b,A.bg(b,c,a.length)))},
$iP:1,
$ibe:1}
A.ca.prototype={
gaR(a){return B.kM},
gA(a){return a.length},
n(a,b){A.bU(b,a,a.length)
return a[b]},
bs(a,b,c){return new Uint8Array(a.subarray(b,A.bg(b,c,a.length)))},
hf(a,b){return this.bs(a,b,null)},
$iP:1,
$ica:1,
$ibv:1}
A.et.prototype={}
A.eu.prototype={}
A.ev.prototype={}
A.ew.prototype={}
A.aS.prototype={
q(a){return A.jE(v.typeUniverse,this,a)},
ap(a){return A.pj(v.typeUniverse,this,a)}}
A.hp.prototype={}
A.ht.prototype={
B(a){return A.ax(this.a,null)}}
A.hl.prototype={
B(a){return this.a}}
A.ez.prototype={$ibt:1}
A.jb.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:7}
A.ja.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:14}
A.jc.prototype={
$0(){this.a.$0()},
$S:8}
A.jd.prototype={
$0(){this.a.$0()},
$S:8}
A.jA.prototype={
hE(a,b){if(self.setTimeout!=null)self.setTimeout(A.hw(new A.jB(this,b),0),a)
else throw A.d(A.ag("`setTimeout()` not found."))}}
A.jB.prototype={
$0(){this.b.$0()},
$S:1}
A.hi.prototype={}
A.jI.prototype={
$1(a){return this.a.$2(0,a)},
$S:18}
A.jJ.prototype={
$2(a,b){this.a.$2(1,new A.ds(a,t.l.a(b)))},
$S:22}
A.jM.prototype={
$2(a,b){this.a(A.k(a),b)},
$S:23}
A.dj.prototype={
B(a){return A.C(this.a)},
$iO:1,
gd_(){return this.b}}
A.hU.prototype={
$0(){this.c.a(null)
this.b.es(null)},
$S:1}
A.ct.prototype={
kV(a){if((this.c&15)!==6)return!0
return this.b.b.e5(t.al.a(this.d),a.a,t.y,t.K)},
kN(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.le(q,m,a.b,o,n,t.l)
else p=l.e5(t.w.a(q),m,o,n)
try{o=r.$ti.q("2/").a(p)
return o}catch(s){if(t.eK.b(A.bY(s))){if((r.c&1)!==0)throw A.d(A.eK("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.eK("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.a_.prototype={
fa(a){this.a=this.a&1|4
this.c=a},
e6(a,b,c){var s,r,q,p=this.$ti
p.ap(c).q("1/(2)").a(a)
s=$.R
if(s===B.r){if(b!=null&&!t.C.b(b)&&!t.w.b(b))throw A.d(A.eL(b,"onError",u.c))}else{c.q("@<0/>").ap(p.c).q("1(2)").a(a)
if(b!=null)b=A.pW(b,s)}r=new A.a_(s,c.q("a_<0>"))
q=b==null?1:3
this.du(new A.ct(r,q,a,b,p.q("@<1>").ap(c).q("ct<1,2>")))
return r},
lh(a,b){return this.e6(a,null,b)},
fe(a,b,c){var s,r=this.$ti
r.ap(c).q("1/(2)").a(a)
s=new A.a_($.R,c.q("a_<0>"))
this.du(new A.ct(s,19,a,b,r.q("@<1>").ap(c).q("ct<1,2>")))
return s},
kc(a){this.a=this.a&1|16
this.c=a},
d2(a){this.a=a.a&30|this.a&1
this.c=a.c},
du(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.du(a)
return}r.d2(s)}A.cu(null,null,r.b,t.M.a(new A.jj(r,a)))}},
dU(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.dU(a)
return}m.d2(n)}l.a=m.df(a)
A.cu(null,null,m.b,t.M.a(new A.jq(l,m)))}},
de(){var s=t.F.a(this.c)
this.c=null
return this.df(s)},
df(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ic(a){var s,r,q,p=this
p.a^=2
try{a.e6(new A.jn(p),new A.jo(p),t.b)}catch(q){s=A.bY(q)
r=A.bC(q)
A.qH(new A.jp(p,s,r))}},
es(a){var s,r=this,q=r.$ti
q.q("1/").a(a)
s=r.de()
q.c.a(a)
r.a=8
r.c=a
A.db(r,s)},
dA(a){var s,r=this
r.$ti.c.a(a)
s=r.de()
r.a=8
r.c=a
A.db(r,s)},
cw(a,b){var s
t.l.a(b)
s=this.de()
this.kc(A.hF(a,b))
A.db(this,s)},
i0(a){var s=this.$ti
s.q("1/").a(a)
if(s.q("b7<1>").b(a)){this.eq(a)
return}this.i2(a)},
i2(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cu(null,null,s.b,t.M.a(new A.jl(s,a)))},
eq(a){var s=this.$ti
s.q("b7<1>").a(a)
if(s.b(a)){A.p_(a,this)
return}this.ic(a)},
i1(a,b){this.a^=2
A.cu(null,null,this.b,t.M.a(new A.jk(this,a,b)))},
$ib7:1}
A.jj.prototype={
$0(){A.db(this.a,this.b)},
$S:1}
A.jq.prototype={
$0(){A.db(this.b,this.a.a)},
$S:1}
A.jn.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.dA(p.$ti.c.a(a))}catch(q){s=A.bY(q)
r=A.bC(q)
p.cw(s,r)}},
$S:7}
A.jo.prototype={
$2(a,b){this.a.cw(t.K.a(a),t.l.a(b))},
$S:27}
A.jp.prototype={
$0(){this.a.cw(this.b,this.c)},
$S:1}
A.jm.prototype={
$0(){A.mc(this.a.a,this.b)},
$S:1}
A.jl.prototype={
$0(){this.a.dA(this.b)},
$S:1}
A.jk.prototype={
$0(){this.a.cw(this.b,this.c)},
$S:1}
A.jt.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.ld(t.fO.a(q.d),t.z)}catch(p){s=A.bY(p)
r=A.bC(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.hF(s,r)
o.b=!0
return}if(l instanceof A.a_&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(l instanceof A.a_){n=m.b.a
q=m.a
q.c=l.lh(new A.ju(n),t.z)
q.b=!1}},
$S:1}
A.ju.prototype={
$1(a){return this.a},
$S:31}
A.js.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.e5(o.q("2/(1)").a(p.d),m,o.q("2/"),n)}catch(l){s=A.bY(l)
r=A.bC(l)
q=this.a
q.c=A.hF(s,r)
q.b=!0}},
$S:1}
A.jr.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.kV(s)&&p.a.e!=null){p.c=p.a.kN(s)
p.b=!1}}catch(o){r=A.bY(o)
q=A.bC(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.hF(r,q)
n.b=!0}},
$S:1}
A.hj.prototype={}
A.ee.prototype={
gA(a){var s,r,q=this,p={},o=new A.a_($.R,t.fJ)
p.a=0
s=q.$ti
r=s.q("~(1)?").a(new A.iF(p,q))
t.g5.a(new A.iG(p,o))
A.kF(q.a,q.b,r,!1,s.c)
return o}}
A.iF.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.q("~(1)")}}
A.iG.prototype={
$0(){this.b.es(this.a.a)},
$S:1}
A.hr.prototype={}
A.eD.prototype={$im9:1}
A.jL.prototype={
$0(){A.nl(this.a,this.b)},
$S:1}
A.hq.prototype={
lf(a){var s,r,q
t.M.a(a)
try{if(B.r===$.R){a.$0()
return}A.mt(null,null,this,a,t.q)}catch(q){s=A.bY(q)
r=A.bC(q)
A.jK(t.K.a(s),t.l.a(r))}},
lg(a,b,c){var s,r,q
c.q("~(0)").a(a)
c.a(b)
try{if(B.r===$.R){a.$1(b)
return}A.mu(null,null,this,a,b,t.q,c)}catch(q){s=A.bY(q)
r=A.bC(q)
A.jK(t.K.a(s),t.l.a(r))}},
dZ(a){return new A.jx(this,t.M.a(a))},
kp(a,b){return new A.jy(this,b.q("~(0)").a(a),b)},
ld(a,b){b.q("0()").a(a)
if($.R===B.r)return a.$0()
return A.mt(null,null,this,a,b)},
e5(a,b,c,d){c.q("@<0>").ap(d).q("1(2)").a(a)
d.a(b)
if($.R===B.r)return a.$1(b)
return A.mu(null,null,this,a,b,c,d)},
le(a,b,c,d,e,f){d.q("@<0>").ap(e).ap(f).q("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.R===B.r)return a.$2(b,c)
return A.pX(null,null,this,a,b,c,d,e,f)},
fW(a,b,c,d){return b.q("@<0>").ap(c).ap(d).q("1(2,3)").a(a)}}
A.jx.prototype={
$0(){return this.a.lf(this.b)},
$S:1}
A.jy.prototype={
$1(a){var s=this.c
return this.a.lg(this.b,s.a(a),s)},
$S(){return this.c.q("~(0)")}}
A.ik.prototype={
$2(a,b){this.a.h(0,this.b.a(a),this.c.a(b))},
$S:13}
A.F.prototype={
gJ(a){return new A.c8(a,this.gA(a),A.aJ(a).q("c8<F.E>"))},
bv(a,b){return this.n(a,b)},
cb(a,b){var s,r=this.gA(a)
for(s=0;s<r;++s){if(this.n(a,s)===b)return!0
if(r!==this.gA(a))throw A.d(A.dm(a))}return!1},
ed(a,b){return A.kx(a,b,null,A.aJ(a).q("F.E"))},
bs(a,b,c){var s,r=this.gA(a)
A.aQ(b,c,r)
A.aQ(b,c,this.gA(a))
s=A.aJ(a).q("F.E")
return A.c9(A.kx(a,b,c,s),s)},
aW(a,b,c,d){var s
A.aJ(a).q("F.E?").a(d)
A.aQ(b,c,this.gA(a))
for(s=b;s<c;++s)this.h(a,s,d)},
am(a,b,c,d,e){var s,r,q,p,o=A.aJ(a)
o.q("e<F.E>").a(d)
A.aQ(b,c,this.gA(a))
s=c-b
if(s===0)return
A.h1(e,"skipCount")
if(o.q("p<F.E>").b(d)){r=e
q=d}else{q=J.l2(d,e).fZ(0,!1)
r=0}o=J.ac(q)
if(r+s>o.gA(q))throw A.d(A.lx())
if(r<b)for(p=s-1;p>=0;--p)this.h(a,b+p,o.n(q,r+p))
else for(p=0;p<s;++p)this.h(a,b+p,o.n(q,r+p))},
bC(a,b,c,d){return this.am(a,b,c,d,0)},
h7(a,b,c){A.aJ(a).q("e<F.E>").a(c)
this.bC(a,b,b+c.length,c)},
B(a){return A.ly(a,"[","]")},
$ie:1,
$ip:1}
A.d_.prototype={
gA(a){return this.a},
B(a){return A.kl(this)},
$ibs:1}
A.im.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.C(a)
r.a=s+": "
r.a+=A.C(b)},
$S:33}
A.iQ.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:9}
A.iP.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:9}
A.jD.prototype={
bM(a){var s,r,q,p,o
A.bT(a)
s=a.length
r=A.aQ(0,null,s)-0
q=new Uint8Array(r)
for(p=0;p<r;++p){if(!(p<s))return A.a(a,p)
o=a.charCodeAt(p)
if((o&4294967040)!==0)throw A.d(A.eL(a,"string","Contains invalid characters."))
if(!(p<r))return A.a(q,p)
q[p]=o}return q}}
A.jC.prototype={
bM(a){var s,r,q,p
t.L.a(a)
s=a.length
r=A.aQ(0,null,s)
for(q=0;q<r;++q){if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)!==0){if(!this.a)throw A.d(A.kd("Invalid value in input: "+p,null,null))
return this.ig(a,0,r)}}return A.h5(a,0,r)},
ig(a,b,c){var s,r,q,p
t.L.a(a)
for(s=a.length,r=b,q="";r<c;++r){if(!(r<s))return A.a(a,r)
p=a[r]
q+=A.cn((p&4294967040)!==0?65533:p)}return q.charCodeAt(0)==0?q:q}}
A.dk.prototype={
gkJ(){return B.cq}}
A.hG.prototype={
bM(a){var s
t.L.a(a)
s=a.length
if(s===0)return""
s=new A.je("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").kG(a,0,s,!0)
s.toString
return A.h5(s,0,null)}}
A.je.prototype={
kG(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.a.S(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.oZ(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.aW.prototype={}
A.eW.prototype={}
A.eY.prototype={}
A.fz.prototype={
c1(a,b){var s
t.L.a(b)
s=B.cX.bM(b)
return s}}
A.ii.prototype={}
A.ih.prototype={}
A.hd.prototype={
ky(a,b,c){t.L.a(b)
return(c===!0?B.ca:B.kN).bM(b)}}
A.he.prototype={
bM(a){var s,r
t.L.a(a)
s=this.a
r=A.o8(s,a,0,null)
if(r!=null)return r
return new A.jF(s).kw(a,0,null,!0)}}
A.jF.prototype={
kw(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.aQ(b,c,a.length)
if(b===s)return""
r=A.pm(a,b,s)
q=n.dB(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.pn(p)
n.b=0
throw A.d(A.kd(o,a,b+n.c))}return q},
dB(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.S(b+c,2)
r=q.dB(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dB(a,s,c,d)}return q.kC(a,b,c,d)},
kC(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.ef(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){e.a+=A.cn(f)
if(d===a0)break $label0$0
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:e.a+=A.cn(h)
break
case 65:e.a+=A.cn(h);--d
break
default:p=e.a+=A.cn(h)
e.a=p+A.cn(h)
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break $label0$0
o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]
if(s<128){while(!0){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.a(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.a(a,l)
e.a+=A.cn(a[l])}else e.a+=A.h5(a,d,n)
if(n===a0)break $label0$0
d=o}else d=o}if(a1&&g>32)if(r)e.a+=A.cn(h)
else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.dp.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.dp&&this.a===b.a},
gI(a){return B.a.gI(this.a)},
B(a){var s,r,q,p,o=this.a,n=B.a.S(o,36e8)
o%=36e8
s=B.a.S(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.S(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.l.l1(B.a.B(o%1e6),6,"0")}}
A.jg.prototype={
B(a){return this.a8()}}
A.O.prototype={
gd_(){return A.bC(this.$thrownJsError)}}
A.eM.prototype={
B(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hQ(s)
return"Assertion failed"}}
A.bt.prototype={}
A.b4.prototype={
gdG(){return"Invalid argument"+(!this.a?"(s)":"")},
gdF(){return""},
B(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.C(p),n=s.gdG()+q+o
if(!s.a)return n
return n+s.gdF()+": "+A.hQ(s.ge1())},
ge1(){return this.b}}
A.ec.prototype={
ge1(){return A.pq(this.b)},
gdG(){return"RangeError"},
gdF(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.C(q):""
else if(q==null)s=": Not greater than or equal to "+A.C(r)
else if(q>r)s=": Not in inclusive range "+A.C(r)+".."+A.C(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.C(r)
return s}}
A.fc.prototype={
ge1(){return A.k(this.b)},
gdG(){return"RangeError"},
gdF(){if(A.k(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gA(a){return this.f}}
A.hc.prototype={
B(a){return"Unsupported operation: "+this.a}}
A.ha.prototype={
B(a){return"UnimplementedError: "+this.a}}
A.d6.prototype={
B(a){return"Bad state: "+this.a}}
A.eV.prototype={
B(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hQ(s)+"."}}
A.fH.prototype={
B(a){return"Out of Memory"},
gd_(){return null},
$iO:1}
A.ed.prototype={
B(a){return"Stack Overflow"},
gd_(){return null},
$iO:1}
A.ji.prototype={
B(a){return"Exception: "+this.a}}
A.f4.prototype={
B(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.l.dt(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.a(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.a(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}if(r-p>78)if(f-p<75){l=p+75
k=p
j=""
i="..."}else{if(r-f<75){k=r-75
l=r
i=""}else{k=f-36
l=f+36
i="..."}j="..."}else{l=r
k=p
j=""
i=""}return g+j+B.l.dt(e,k,l)+i+"\n"+B.l.cY(" ",f-k+j.length)+"^\n"}else return f!=null?g+(" (at offset "+A.C(f)+")"):g}}
A.e.prototype={
gA(a){var s,r=this.gJ(this)
for(s=0;r.E();)++s
return s},
bv(a,b){var s,r
A.h1(b,"index")
s=this.gJ(this)
for(r=b;s.E();){if(r===0)return s.gU();--r}throw A.d(A.i6(b,b-r,this,"index"))},
B(a){return A.nI(this,"(",")")}}
A.af.prototype={
gI(a){return A.K.prototype.gI.call(this,this)},
B(a){return"null"}}
A.K.prototype={$iK:1,
X(a,b){return this===b},
gI(a){return A.e7(this)},
B(a){return"Instance of '"+A.it(this)+"'"},
gaR(a){return A.qu(this)},
toString(){return this.B(this)}}
A.hs.prototype={
B(a){return""},
$ibO:1}
A.ef.prototype={
gA(a){return this.a.length},
B(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.r.prototype={}
A.dg.prototype={
skP(a,b){a.href=b},
B(a){var s=String(a)
s.toString
return s}}
A.eJ.prototype={
B(a){var s=String(a)
s.toString
return s}}
A.eP.prototype={}
A.b5.prototype={
gA(a){return a.length}}
A.hO.prototype={
B(a){var s=String(a)
s.toString
return s}}
A.ak.prototype={
B(a){var s=a.localName
s.toString
return s},
gfR(a){return new A.by(a,"click",!1,t.do)},
gfS(a){return new A.by(a,"input",!1,t.E)},
$iak:1}
A.n.prototype={$in:1}
A.ah.prototype={
hY(a,b,c,d){return a.addEventListener(b,A.hw(t.bw.a(c),1),!1)},
$iah:1}
A.aD.prototype={$iaD:1}
A.dx.prototype={
gA(a){var s=a.length
s.toString
return s},
n(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.i6(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.c8.a(c)
throw A.d(A.ag("Cannot assign element of immutable List."))},
gfI(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.lZ("No elements"))},
bv(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iaa:1,
$iau:1,
$ie:1,
$ip:1}
A.dy.prototype={
glc(a){var s=a.result
if(t.dI.b(s))return A.y(s,0,null)
return s}}
A.f3.prototype={
gA(a){return a.length}}
A.cV.prototype={$icV:1}
A.aF.prototype={$iaF:1}
A.av.prototype={
B(a){var s=a.nodeValue
return s==null?this.hh(a):s}}
A.h3.prototype={
gA(a){return a.length}}
A.b2.prototype={}
A.k8.prototype={}
A.ep.prototype={}
A.by.prototype={}
A.eq.prototype={$io4:1}
A.jh.prototype={
$1(a){return this.a.$1(t.O.a(a))},
$S:10}
A.bL.prototype={
gJ(a){return new A.dz(a,a.length,A.aJ(a).q("dz<bL.E>"))},
am(a,b,c,d,e){A.aJ(a).q("e<bL.E>").a(d)
throw A.d(A.ag("Cannot setRange on immutable List."))},
bC(a,b,c,d){return this.am(a,b,c,d,0)},
aW(a,b,c,d){A.aJ(a).q("bL.E?").a(d)
throw A.d(A.ag("Cannot modify an immutable List."))}}
A.dz.prototype={
E(){var s=this,r=s.c+1,q=s.b
if(r<q){q=s.a
if(!(r>=0&&r<q.length))return A.a(q,r)
s.seO(q[r])
s.c=r
return!0}s.seO(null)
s.c=q
return!1},
gU(){var s=this.d
return s==null?this.$ti.c.a(s):s},
seO(a){this.d=this.$ti.q("1?").a(a)},
$iE:1}
A.hn.prototype={}
A.ho.prototype={}
A.q.prototype={
gfR(a){return new A.by(a,"click",!1,t.do)},
gfS(a){return new A.by(a,"input",!1,t.E)}}
A.hE.prototype={}
A.ff.prototype={}
A.fe.prototype={
gA(a){var s=this.e
s===$&&A.c("_length")
return s-(this.b-this.c)},
gcQ(){var s=this.b,r=this.e
r===$&&A.c("_length")
return s>=this.c+r},
C(){var s=this.a,r=this.b++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
ae(a){var s,r,q,p=this,o=p.c,n=p.b-o+o
if(a<0){s=p.e
s===$&&A.c("_length")
r=s-(n-o)}else r=a
q=A.c5(p.a,p.d,r,n)
p.b=p.b+q.gA(q)
return q},
k(){var s,r,q,p,o=this,n=o.a,m=o.b,l=o.b=m+1,k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.aA()
s=m&255
m=o.b=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.aA()
r=l&255
l=o.b=m+1
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.aA()
q=m&255
o.b=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.aA()
p=l&255
if(o.d===1)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
a1(){var s,r,q,p,o=this,n=o.gA(o),m=o.a
if(t.D.b(m)){s=o.b
r=m.length
if(s+n>r)n=r-s
return A.y(m.buffer,m.byteOffset+s,n)}s=o.b
q=s+n
p=m.length
return new Uint8Array(A.t(J.hD(m,s,q>p?p:q)))}}
A.is.prototype={}
A.iq.prototype={
m(a){var s,r,q=this
if(q.a===q.c.length)q.jq()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
cW(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(a)
if(b==null)b=a.length
for(;s=k.a,r=s+b,q=k.c,p=q.length,r>p;)k.dQ(r-p)
if(b===1){if(0>=a.length)return A.a(a,0)
o=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=o}else if(b===2){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
o=a[1]
if(!(n<p))return A.a(q,n)
q[n]=o}else if(b===3){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
o=a[2]
if(!(m<p))return A.a(q,m)
q[m]=o}else if(b===4){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
o=a[3]
if(!(n<p))return A.a(q,n)
q[n]=o}else if(b===5){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
o=a[4]
if(!(m<p))return A.a(q,m)
q[m]=o}else if(b===6){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
n=a[4]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+5
if(5>=o)return A.a(a,5)
o=a[5]
if(!(n<p))return A.a(q,n)
q[n]=o}else if(b===7){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
n=a[4]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+5
if(5>=o)return A.a(a,5)
m=a[5]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+6
if(6>=o)return A.a(a,6)
o=a[6]
if(!(m<p))return A.a(q,m)
q[m]=o}else if(b===8){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
n=a[4]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+5
if(5>=o)return A.a(a,5)
m=a[5]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+6
if(6>=o)return A.a(a,6)
n=a[6]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+7
if(7>=o)return A.a(a,7)
o=a[7]
if(!(n<p))return A.a(q,n)
q[n]=o}else if(b===9){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
n=a[4]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+5
if(5>=o)return A.a(a,5)
m=a[5]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+6
if(6>=o)return A.a(a,6)
n=a[6]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+7
if(7>=o)return A.a(a,7)
m=a[7]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+8
if(8>=o)return A.a(a,8)
o=a[8]
if(!(m<p))return A.a(q,m)
q[m]=o}else if(b===10){o=a.length
if(0>=o)return A.a(a,0)
n=a[0]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n
n=s+1
if(1>=o)return A.a(a,1)
m=a[1]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+2
if(2>=o)return A.a(a,2)
n=a[2]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+3
if(3>=o)return A.a(a,3)
m=a[3]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+4
if(4>=o)return A.a(a,4)
n=a[4]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+5
if(5>=o)return A.a(a,5)
m=a[5]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+6
if(6>=o)return A.a(a,6)
n=a[6]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+7
if(7>=o)return A.a(a,7)
m=a[7]
if(!(n<p))return A.a(q,n)
q[n]=m
m=s+8
if(8>=o)return A.a(a,8)
n=a[8]
if(!(m<p))return A.a(q,m)
q[m]=n
n=s+9
if(9>=o)return A.a(a,9)
o=a[9]
if(!(n<p))return A.a(q,n)
q[n]=o}else for(o=a.length,l=0;l<b;++l,++s){if(!(l<o))return A.a(a,l)
n=a[l]
if(!(s>=0&&s<p))return A.a(q,s)
q[s]=n}k.a=r},
a3(a){return this.cW(a,null)},
lp(a){var s,r,q,p,o=this,n=a.c
while(!0){s=o.a
r=a.e
r===$&&A.c("_length")
r=s+(r-(a.b-n))
q=o.c
p=q.length
if(!(r>p))break
o.dQ(r-p)}B.m.am(q,s,s+a.gA(a),a.a,a.b)
o.a=o.a+a.gA(a)},
G(a){var s=this
if(s.b===1){s.m(a>>>24&255)
s.m(a>>>16&255)
s.m(a>>>8&255)
s.m(a&255)
return}s.m(a&255)
s.m(a>>>8&255)
s.m(a>>>16&255)
s.m(a>>>24&255)},
ee(a,b){var s=this
if(a<0)a=s.a+a
if(b==null)b=s.a
else if(b<0)b=s.a+b
return A.y(s.c.buffer,a,b-a)},
aj(a){return this.ee(a,null)},
dQ(a){var s=a!=null?a>32768?a:32768:32768,r=this.c,q=r.length,p=new Uint8Array((q+s)*2)
B.m.bC(p,0,q,r)
this.c=p},
jq(){return this.dQ(null)},
gA(a){return this.a}}
A.jH.prototype={
cL(a,b){var s,r,q,p,o=a.C(),n=a.C(),m=o&8
B.a.j(o,3)
if(m!==8)throw A.d(A.dh("Only DEFLATE compression supported: "+m))
if(B.a.a6((o<<8>>>0)+n,31)!==0)throw A.d(A.dh("Invalid FCHECK"))
if((n>>>5&1)!==0){a.k()
throw A.d(A.dh("FDICT Encoding not currently supported"))}s=A.cM(B.bl)
r=A.cM(B.bC)
q=A.ir(0,null)
r=new A.fd(a,q,s,r)
r.b=!0
r.eP()
p=t.L.a(A.y(q.c.buffer,0,q.a))
a.k()
return p}}
A.hM.prototype={
iJ(a){var s,r,q,p,o=this
if(a>4||!1)throw A.d(A.dh("Invalid Deflate Parameter"))
s=o.x
s===$&&A.c("_pending")
if(s!==0)o.d8()
if(o.c.gcQ()){s=o.k3
s===$&&A.c("_lookAhead")
if(s===0)s=a!==0&&o.e!==666
else s=!0}else s=!0
if(s){switch($.b6.cD().e){case 0:r=o.iM(a)
break
case 1:r=o.iK(a)
break
case 2:r=o.iL(a)
break
default:r=-1
break}s=r===2
if(s||r===3)o.e=666
if(r===0||s)return 0
if(r===1){if(a===1){o.aB(2,3)
o.cm(256,B.ad)
o.fv()
s=o.bP
s===$&&A.c("_lastEOBLen")
q=o.be
q===$&&A.c("_numValidBits")
if(1+s+10-q<9){o.aB(2,3)
o.cm(256,B.ad)
o.fv()}o.bP=7}else{o.ff(0,0,!1)
if(a===3){s=o.db
s===$&&A.c("_hashSize")
q=o.cx
p=0
for(;p<s;++p){q===$&&A.c("_head")
if(!(p<q.length))return A.a(q,p)
q[p]=0}}}o.d8()}}if(a!==4)return 0
return 1},
jl(){var s,r,q,p=this,o=p.as
o===$&&A.c("_windowSize")
p.ch=2*o
o=p.cx
o===$&&A.c("_head")
s=p.db
s===$&&A.c("_hashSize");--s
r=o.length
if(!(s>=0&&s<r))return A.a(o,s)
o[s]=0
for(q=0;q<s;++q){if(!(q<r))return A.a(o,q)
o[q]=0}p.k3=p.fx=p.k1=0
p.fy=p.k4=2
p.cy=p.id=0},
eQ(){var s,r,q,p,o=this,n="_dynamicLengthTree"
for(s=o.p2,r=0;r<286;++r){s===$&&A.c(n)
q=r*2
if(!(q<1146))return A.a(s,q)
s[q]=0}for(q=o.p3,r=0;r<30;++r){q===$&&A.c("_dynamicDistTree")
p=r*2
if(!(p<122))return A.a(q,p)
q[p]=0}for(q=o.p4,r=0;r<19;++r){q===$&&A.c("_bitLengthTree")
p=r*2
if(!(p<78))return A.a(q,p)
q[p]=0}s===$&&A.c(n)
s[512]=1
o.b2=o.c2=o.b3=o.bO=0},
dT(a,b){var s,r,q,p,o,n=this.to
if(!(b>=0&&b<573))return A.a(n,b)
s=n[b]
r=b<<1>>>0
q=this.xr
while(!0){p=this.x1
p===$&&A.c("_heapLen")
if(!(r<=p))break
if(r<p){p=r+1
if(!(p>=0&&p<573))return A.a(n,p)
p=n[p]
if(!(r>=0&&r<573))return A.a(n,r)
p=A.l9(a,p,n[r],q)}else p=!1
if(p)++r
if(!(r>=0&&r<573))return A.a(n,r)
if(A.l9(a,s,n[r],q))break
p=n[r]
if(!(b>=0&&b<573))return A.a(n,b)
n[b]=p
o=r<<1>>>0
b=r
r=o}if(!(b>=0&&b<573))return A.a(n,b)
n[b]=s},
f8(a,b){var s,r,q,p,o,n,m,l,k,j="_bitLengthTree",i=a.length
if(1>=i)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}p=(b+1)*2+1
if(!(p>=0&&p<i))return A.a(a,p)
a[p]=65535
for(p=this.p4,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<i))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else if(m<q){p===$&&A.c(j)
l=s*2
if(!(l>=0&&l<78))return A.a(p,l)
p[l]=p[l]+m}else if(s!==0){if(s!==n){p===$&&A.c(j)
l=s*2
if(!(l>=0&&l<78))return A.a(p,l)
p[l]=p[l]+1}p===$&&A.c(j)
p[32]=p[32]+1}else if(m<=10){p===$&&A.c(j)
p[34]=p[34]+1}else{p===$&&A.c(j)
p[36]=p[36]+1}if(k===0){r=138
q=3}else if(s===k){r=6
q=3}else{r=7
q=4}n=s
m=0}},
i5(){var s,r,q=this,p=q.p2
p===$&&A.c("_dynamicLengthTree")
s=q.R8.b
s===$&&A.c("maxCode")
q.f8(p,s)
s=q.p3
s===$&&A.c("_dynamicDistTree")
p=q.RG.b
p===$&&A.c("maxCode")
q.f8(s,p)
q.rx.dw(q)
for(p=q.p4,r=18;r>=3;--r){p===$&&A.c("_bitLengthTree")
s=B.ac[r]*2+1
if(!(s<78))return A.a(p,s)
if(p[s]!==0)break}p=q.b3
p===$&&A.c("_optimalLen")
q.b3=p+(3*(r+1)+5+5+4)
return r},
kb(a,b,c){var s,r,q,p,o=this
o.aB(a-257,5)
s=b-1
o.aB(s,5)
o.aB(c-4,4)
for(r=0;r<c;++r){q=o.p4
q===$&&A.c("_bitLengthTree")
if(!(r<19))return A.a(B.ac,r)
p=B.ac[r]*2+1
if(!(p<78))return A.a(q,p)
o.aB(q[p],3)}q=o.p2
q===$&&A.c("_dynamicLengthTree")
o.f9(q,a-1)
q=o.p3
q===$&&A.c("_dynamicDistTree")
o.f9(q,s)},
f9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="_bitLengthTree",e=a.length
if(1>=e)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}for(p=t.L,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<e))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else if(m<q){l=s*2
j=l+1
do{i=g.p4
i===$&&A.c(f)
p.a(i)
if(!(l>=0&&l<78))return A.a(i,l)
h=i[l]
if(!(j>=0&&j<78))return A.a(i,j)
g.aB(h&65535,i[j]&65535)}while(--m,m!==0)}else if(s!==0){if(s!==n){l=g.p4
l===$&&A.c(f)
p.a(l)
j=s*2
if(!(j>=0&&j<78))return A.a(l,j)
i=l[j];++j
if(!(j<78))return A.a(l,j)
g.aB(i&65535,l[j]&65535);--m}l=g.p4
l===$&&A.c(f)
p.a(l)
g.aB(l[32]&65535,l[33]&65535)
g.aB(m-3,2)}else{l=g.p4
if(m<=10){l===$&&A.c(f)
p.a(l)
g.aB(l[34]&65535,l[35]&65535)
g.aB(m-3,3)}else{l===$&&A.c(f)
p.a(l)
g.aB(l[36]&65535,l[37]&65535)
g.aB(m-11,7)}}if(k===0){r=138
q=3}else if(s===k){r=6
q=3}else{r=7
q=4}n=s
m=0}},
jJ(a,b,c){var s,r,q,p,o,n
if(c===0)return
s=this.x
s===$&&A.c("_pending")
r=this.f
q=a.length
p=s
o=0
for(;o<c;++o,++p){r===$&&A.c("_pendingBuffer")
n=o+b
if(!(n>=0&&n<q))return A.a(a,n)
n=a[n]
if(!(p>=0&&p<r.length))return A.a(r,p)
r[p]=n}this.x=s+c},
bi(a){var s,r=this.f
r===$&&A.c("_pendingBuffer")
s=this.x
s===$&&A.c("_pending")
this.x=s+1
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a},
cm(a,b){var s,r,q
t.L.a(b)
s=a*2
r=b.length
if(!(s>=0&&s<r))return A.a(b,s)
q=b[s];++s
if(!(s<r))return A.a(b,s)
this.aB(q&65535,b[s]&65535)},
aB(a,b){var s,r=this,q="_bitBuffer",p=r.be
p===$&&A.c("_numValidBits")
s=r.bd
if(p>16-b){s===$&&A.c(q)
p=r.bd=(s|B.a.W(a,p)&65535)>>>0
r.bi(p)
r.bi(A.aw(p,8))
r.bd=A.aw(a,16-r.be)
r.be=r.be+(b-16)}else{s===$&&A.c(q)
r.bd=(s|B.a.W(a,p)&65535)>>>0
r.be=p+b}},
cG(a,b){var s,r,q,p,o,n=this,m="_dynamicLengthTree",l="_matches",k="_dynamicDistTree",j=n.f
j===$&&A.c("_pendingBuffer")
s=n.bl
s===$&&A.c("_dbuf")
r=n.b2
r===$&&A.c("_lastLit")
r=s+r*2
s=A.aw(a,8)
if(!(r<j.length))return A.a(j,r)
j[r]=s
s=n.f
r=n.bl
j=n.b2
r=r+j*2+1
q=s.length
if(!(r<q))return A.a(s,r)
s[r]=a
r=n.y1
r===$&&A.c("_lbuf")
r+=j
if(!(r<q))return A.a(s,r)
s[r]=b
n.b2=j+1
if(a===0){j=n.p2
j===$&&A.c(m)
s=b*2
if(!(s>=0&&s<1146))return A.a(j,s)
j[s]=j[s]+1}else{j=n.c2
j===$&&A.c(l)
n.c2=j+1
j=n.p2
j===$&&A.c(m)
if(!(b>=0&&b<256))return A.a(B.az,b)
s=(B.az[b]+256+1)*2
if(!(s<1146))return A.a(j,s)
j[s]=j[s]+1
s=n.p3
s===$&&A.c(k)
j=A.md(a-1)*2
if(!(j<122))return A.a(s,j)
s[j]=s[j]+1}j=n.b2
if((j&8191)===0){s=n.ok
s===$&&A.c("_level")
s=s>2}else s=!1
if(s){p=j*8
j=n.k1
j===$&&A.c("_strStart")
s=n.fx
s===$&&A.c("_blockStart")
for(r=n.p3,o=0;o<30;++o){r===$&&A.c(k)
q=o*2
if(!(q<122))return A.a(r,q)
p+=r[q]*(5+B.Z[o])}p=A.aw(p,3)
r=n.c2
r===$&&A.c(l)
q=n.b2
if(r<q/2&&p<(j-s)/2)return!0
j=q}s=n.y2
s===$&&A.c("_litBufferSize")
return j===s-1},
eu(a,b){var s,r,q,p,o,n,m,l,k=this,j=t.L
j.a(a)
j.a(b)
j=k.b2
j===$&&A.c("_lastLit")
if(j!==0){s=0
do{j=k.f
j===$&&A.c("_pendingBuffer")
r=k.bl
r===$&&A.c("_dbuf")
r+=s*2
q=j.length
if(!(r<q))return A.a(j,r)
p=j[r];++r
if(!(r<q))return A.a(j,r)
o=p<<8&65280|j[r]&255
r=k.y1
r===$&&A.c("_lbuf")
r+=s
if(!(r<q))return A.a(j,r)
n=j[r]&255;++s
if(o===0)k.cm(n,a)
else{m=B.az[n]
k.cm(m+256+1,a)
if(!(m<29))return A.a(B.aF,m)
l=B.aF[m]
if(l!==0)k.aB(n-B.i1[m],l);--o
m=A.md(o)
k.cm(m,b)
if(!(m<30))return A.a(B.Z,m)
l=B.Z[m]
if(l!==0)k.aB(o-B.hU[m],l)}}while(s<k.b2)}k.cm(256,a)
if(513>=a.length)return A.a(a,513)
k.bP=a[513]},
h8(){var s,r,q,p,o,n="_dynamicLengthTree"
for(s=this.p2,r=0,q=0;r<7;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}for(o=0;r<128;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
o+=s[p];++r}for(;r<256;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}this.y=q>A.aw(o,2)?0:1},
fv(){var s=this,r="_bitBuffer",q=s.be
q===$&&A.c("_numValidBits")
if(q===16){q=s.bd
q===$&&A.c(r)
s.bi(q)
s.bi(A.aw(q,8))
s.be=s.bd=0}else if(q>=8){q=s.bd
q===$&&A.c(r)
s.bi(q)
s.bd=A.aw(s.bd,8)
s.be=s.be-8}},
en(){var s=this,r="_bitBuffer",q=s.be
q===$&&A.c("_numValidBits")
if(q>8){q=s.bd
q===$&&A.c(r)
s.bi(q)
s.bi(A.aw(q,8))}else if(q>0){q=s.bd
q===$&&A.c(r)
s.bi(q)}s.be=s.bd=0},
bZ(a){var s,r,q,p,o,n=this,m=n.fx
m===$&&A.c("_blockStart")
if(m>=0)s=m
else s=-1
r=n.k1
r===$&&A.c("_strStart")
m=r-m
r=n.ok
r===$&&A.c("_level")
if(r>0){if(n.y===2)n.h8()
n.R8.dw(n)
n.RG.dw(n)
q=n.i5()
r=n.b3
r===$&&A.c("_optimalLen")
p=A.aw(r+3+7,3)
r=n.bO
r===$&&A.c("_staticLen")
o=A.aw(r+3+7,3)
if(o<=p)p=o}else{o=m+5
p=o
q=0}if(m+4<=p&&s!==-1)n.ff(s,m,a)
else if(o===p){n.aB(2+(a?1:0),3)
n.eu(B.ad,B.bz)}else{n.aB(4+(a?1:0),3)
m=n.R8.b
m===$&&A.c("maxCode")
s=n.RG.b
s===$&&A.c("maxCode")
n.kb(m+1,s+1,q+1)
s=n.p2
s===$&&A.c("_dynamicLengthTree")
m=n.p3
m===$&&A.c("_dynamicDistTree")
n.eu(s,m)}n.eQ()
if(a)n.en()
n.fx=n.k1
n.d8()},
iM(a){var s,r,q,p,o,n=this,m=n.r
m===$&&A.c("_pendingBufferSize")
s=m-5
s=65535>s?s:65535
for(m=a===0;!0;){r=n.k3
r===$&&A.c("_lookAhead")
if(r<=1){n.dI()
r=n.k3
q=r===0
if(q&&m)return 0
if(q)break}q=n.k1
q===$&&A.c("_strStart")
r=n.k1=q+r
n.k3=0
q=n.fx
q===$&&A.c("_blockStart")
p=q+s
if(r>=p){n.k3=r-p
n.k1=p
n.bZ(!1)}r=n.k1
q=n.fx
o=n.as
o===$&&A.c("_windowSize")
if(r-q>=o-262)n.bZ(!1)}m=a===4
n.bZ(m)
return m?3:1},
ff(a,b,c){var s,r=this
r.aB(c?1:0,3)
r.en()
r.bP=8
r.bi(b)
r.bi(A.aw(b,8))
s=(~b>>>0)+65536&65535
r.bi(s)
r.bi(A.aw(s,8))
s=r.ay
s===$&&A.c("_window")
r.jJ(s,a,b)},
dI(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_windowSize",f=h.c
do{s=h.ch
s===$&&A.c("_actualWindowSize")
r=h.k3
r===$&&A.c("_lookAhead")
q=h.k1
q===$&&A.c("_strStart")
p=s-r-q
if(p===0&&q===0&&r===0){s=h.as
s===$&&A.c(g)
p=s}else{s=h.as
s===$&&A.c(g)
if(q>=s+s-262){r=h.ay
r===$&&A.c("_window")
B.m.am(r,0,s,r,s)
s=h.k2
o=h.as
h.k2=s-o
h.k1=h.k1-o
s=h.fx
s===$&&A.c("_blockStart")
h.fx=s-o
s=h.db
s===$&&A.c("_hashSize")
r=h.cx
r===$&&A.c("_head")
q=r.length
n=s
m=n
do{--n
if(!(n>=0&&n<q))return A.a(r,n)
l=r[n]&65535
r[n]=l>=o?l-o:0}while(--m,m!==0)
s=h.CW
s===$&&A.c("_prev")
r=s.length
n=o
m=n
do{--n
if(!(n>=0&&n<r))return A.a(s,n)
l=s[n]&65535
s[n]=l>=o?l-o:0}while(--m,m!==0)
p+=o}}if(f.gcQ())return
s=h.ay
s===$&&A.c("_window")
m=h.jM(s,h.k1+h.k3,p)
s=h.k3=h.k3+m
if(s>=3){r=h.ay
q=h.k1
k=r.length
if(q>>>0!==q||q>=k)return A.a(r,q)
j=r[q]&255
h.cy=j
i=h.fr
i===$&&A.c("_hashShift")
i=B.a.W(j,i);++q
if(!(q<k))return A.a(r,q)
q=r[q]
r=h.dy
r===$&&A.c("_hashMask")
h.cy=((i^q&255)&r)>>>0}}while(s<262&&!f.gcQ())},
iK(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_insertHash",f="_hashShift",e="_window",d="_strStart",c="_hashMask",b="_windowMask"
for(s=a===0,r=$.b6.a,q=0;!0;){p=h.k3
p===$&&A.c("_lookAhead")
if(p<262){h.dI()
p=h.k3
if(p<262&&s)return 0
if(p===0)break}if(p>=3){p=h.cy
p===$&&A.c(g)
o=h.fr
o===$&&A.c(f)
o=B.a.W(p,o)
p=h.ay
p===$&&A.c(e)
n=h.k1
n===$&&A.c(d)
m=n+2
if(!(m>=0&&m<p.length))return A.a(p,m)
m=p[m]
p=h.dy
p===$&&A.c(c)
p=((o^m&255)&p)>>>0
h.cy=p
m=h.cx
m===$&&A.c("_head")
if(!(p<m.length))return A.a(m,p)
o=m[p]
q=o&65535
l=h.CW
l===$&&A.c("_prev")
k=h.ax
k===$&&A.c(b)
k=(n&k)>>>0
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=o
m[p]=n}if(q!==0){p=h.k1
p===$&&A.c(d)
o=h.as
o===$&&A.c("_windowSize")
o=(p-q&65535)<=o-262
p=o}else p=!1
if(p){p=h.p1
p===$&&A.c("_strategy")
if(p!==2)h.fy=h.eW(q)}p=h.fy
p===$&&A.c("_matchLength")
o=h.k1
if(p>=3){o===$&&A.c(d)
j=h.cG(o-h.k2,p-3)
p=h.k3
o=h.fy
p-=o
h.k3=p
n=$.b6.b
if(n===$.b6)A.az(A.ki(r))
if(o<=n.b&&p>=3){p=h.fy=o-1
do{o=h.k1=h.k1+1
n=h.cy
n===$&&A.c(g)
m=h.fr
m===$&&A.c(f)
m=B.a.W(n,m)
n=h.ay
n===$&&A.c(e)
l=o+2
if(!(l>=0&&l<n.length))return A.a(n,l)
l=n[l]
n=h.dy
n===$&&A.c(c)
n=((m^l&255)&n)>>>0
h.cy=n
l=h.cx
l===$&&A.c("_head")
if(!(n<l.length))return A.a(l,n)
m=l[n]
q=m&65535
k=h.CW
k===$&&A.c("_prev")
i=h.ax
i===$&&A.c(b)
i=(o&i)>>>0
if(!(i>=0&&i<k.length))return A.a(k,i)
k[i]=m
l[n]=o}while(p=h.fy=p-1,p!==0)
h.k1=o+1}else{p=h.k1=h.k1+o
h.fy=0
o=h.ay
o===$&&A.c(e)
n=o.length
if(!(p>=0&&p<n))return A.a(o,p)
m=o[p]&255
h.cy=m
l=h.fr
l===$&&A.c(f)
l=B.a.W(m,l);++p
if(!(p<n))return A.a(o,p)
p=o[p]
o=h.dy
o===$&&A.c(c)
h.cy=((l^p&255)&o)>>>0}}else{p=h.ay
p===$&&A.c(e)
o===$&&A.c(d)
if(!(o>=0&&o<p.length))return A.a(p,o)
j=h.cG(0,p[o]&255)
h.k3=h.k3-1
h.k1=h.k1+1}if(j)h.bZ(!1)}s=a===4
h.bZ(s)
return s?3:1},
iL(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="_insertHash",e="_hashShift",d="_window",c="_strStart",b="_hashMask",a="_windowMask",a0="_matchAvailable"
for(s=a1===0,r=$.b6.a,q=0;!0;){p=g.k3
p===$&&A.c("_lookAhead")
if(p<262){g.dI()
p=g.k3
if(p<262&&s)return 0
if(p===0)break}if(p>=3){p=g.cy
p===$&&A.c(f)
o=g.fr
o===$&&A.c(e)
o=B.a.W(p,o)
p=g.ay
p===$&&A.c(d)
n=g.k1
n===$&&A.c(c)
m=n+2
if(!(m>=0&&m<p.length))return A.a(p,m)
m=p[m]
p=g.dy
p===$&&A.c(b)
p=((o^m&255)&p)>>>0
g.cy=p
m=g.cx
m===$&&A.c("_head")
if(!(p<m.length))return A.a(m,p)
o=m[p]
q=o&65535
l=g.CW
l===$&&A.c("_prev")
k=g.ax
k===$&&A.c(a)
k=(n&k)>>>0
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=o
m[p]=n}p=g.fy
p===$&&A.c("_matchLength")
g.k4=p
g.go=g.k2
g.fy=2
if(q!==0){o=$.b6.b
if(o===$.b6)A.az(A.ki(r))
if(p<o.b){p=g.k1
p===$&&A.c(c)
o=g.as
o===$&&A.c("_windowSize")
o=(p-q&65535)<=o-262
p=o}else p=!1}else p=!1
if(p){p=g.p1
p===$&&A.c("_strategy")
if(p!==2){p=g.eW(q)
g.fy=p}else p=2
if(p<=5)if(g.p1!==1)if(p===3){o=g.k1
o===$&&A.c(c)
o=o-g.k2>4096}else o=!1
else o=!0
else o=!1
if(o){g.fy=2
p=2}}else p=2
o=g.k4
if(o>=3&&p<=o){p=g.k1
p===$&&A.c(c)
j=p+g.k3-3
i=g.cG(p-1-g.go,o-3)
o=g.k3
p=g.k4
g.k3=o-(p-1)
p=g.k4=p-2
do{o=g.k1=g.k1+1
if(o<=j){n=g.cy
n===$&&A.c(f)
m=g.fr
m===$&&A.c(e)
m=B.a.W(n,m)
n=g.ay
n===$&&A.c(d)
l=o+2
if(!(l>=0&&l<n.length))return A.a(n,l)
l=n[l]
n=g.dy
n===$&&A.c(b)
n=((m^l&255)&n)>>>0
g.cy=n
l=g.cx
l===$&&A.c("_head")
if(!(n<l.length))return A.a(l,n)
m=l[n]
q=m&65535
k=g.CW
k===$&&A.c("_prev")
h=g.ax
h===$&&A.c(a)
h=(o&h)>>>0
if(!(h>=0&&h<k.length))return A.a(k,h)
k[h]=m
l[n]=o}}while(p=g.k4=p-1,p!==0)
g.id=0
g.fy=2
g.k1=o+1
if(i)g.bZ(!1)}else{p=g.id
p===$&&A.c(a0)
if(p!==0){p=g.ay
p===$&&A.c(d)
o=g.k1
o===$&&A.c(c);--o
if(!(o>=0&&o<p.length))return A.a(p,o)
if(g.cG(0,p[o]&255))g.bZ(!1)
g.k1=g.k1+1
g.k3=g.k3-1}else{g.id=1
p=g.k1
p===$&&A.c(c)
g.k1=p+1
g.k3=g.k3-1}}}s=g.id
s===$&&A.c(a0)
if(s!==0){s=g.ay
s===$&&A.c(d)
r=g.k1
r===$&&A.c(c);--r
if(!(r>=0&&r<s.length))return A.a(s,r)
g.cG(0,s[r]&255)
g.id=0}s=a1===4
g.bZ(s)
return s?3:1},
eW(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=$.b6.cD().d,a=c.k1
a===$&&A.c("_strStart")
s=c.k4
s===$&&A.c("_prevLength")
r=c.as
r===$&&A.c("_windowSize")
r-=262
q=a>r?a-r:0
p=$.b6.cD().c
r=c.ax
r===$&&A.c("_windowMask")
o=c.k1+258
n=c.ay
n===$&&A.c("_window")
m=a+s
l=m-1
k=n.length
if(!(l>=0&&l<k))return A.a(n,l)
j=n[l]
if(!(m>=0&&m<k))return A.a(n,m)
i=n[m]
if(c.k4>=$.b6.cD().a)b=b>>>2
n=c.k3
n===$&&A.c("_lookAhead")
if(p>n)p=n
h=o-258
g=s
f=a
do{c$0:{a=c.ay
s=a0+g
n=a.length
if(!(s>=0&&s<n))return A.a(a,s)
if(a[s]===i){--s
if(!(s>=0))return A.a(a,s)
if(a[s]===j){if(!(a0>=0&&a0<n))return A.a(a,a0)
s=a[a0]
if(!(f>=0&&f<n))return A.a(a,f)
if(s===a[f]){e=a0+1
if(!(e<n))return A.a(a,e)
s=a[e]
m=f+1
if(!(m<n))return A.a(a,m)
m=s!==a[m]
s=m}else{e=a0
s=!0}}else{e=a0
s=!0}}else{e=a0
s=!0}if(s)break c$0
f+=2;++e
do{++f
if(!(f>=0&&f<n))return A.a(a,f)
s=a[f];++e
if(!(e>=0&&e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
s=s===a[e]&&f<o}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}while(s)
d=258-(o-f)
if(d>g){c.k2=a0
if(d>=p){g=d
break}a=c.ay
s=h+d
n=s-1
m=a.length
if(!(n>=0&&n<m))return A.a(a,n)
j=a[n]
if(!(s<m))return A.a(a,s)
i=a[s]
g=d}f=h}a=c.CW
a===$&&A.c("_prev")
s=a0&r
if(!(s>=0&&s<a.length))return A.a(a,s)
a0=a[s]&65535
if(a0>q){--b
a=b!==0}else a=!1}while(a)
a=c.k3
if(g<=a)return g
return a},
jM(a,b,c){var s,r,q,p,o=this
if(c===0||o.c.gcQ())return 0
s=o.c.ae(c)
r=s.gA(s)
if(r===0)return 0
q=s.a1()
p=q.length
if(r>p)r=p
B.m.bC(a,b,b+r,q)
o.b+=r
o.a=A.bh(q,o.a)
return r},
d8(){var s,r=this,q=r.x
q===$&&A.c("_pending")
s=r.f
s===$&&A.c("_pendingBuffer")
r.d.cW(s,q)
s=r.w
s===$&&A.c("_pendingOut")
r.w=s+q
q=r.x-q
r.x=q
if(q===0)r.w=0},
j6(a){switch(a){case 0:return new A.aU(0,0,0,0,0)
case 1:return new A.aU(4,4,8,4,1)
case 2:return new A.aU(4,5,16,8,1)
case 3:return new A.aU(4,6,32,32,1)
case 4:return new A.aU(4,4,16,16,2)
case 5:return new A.aU(8,16,32,32,2)
case 6:return new A.aU(8,16,128,128,2)
case 7:return new A.aU(8,32,128,256,2)
case 8:return new A.aU(32,128,258,1024,2)
case 9:return new A.aU(32,258,258,4096,2)}throw A.d(A.dh("Invalid Deflate parameter"))}}
A.aU.prototype={}
A.jv.prototype={
j4(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="_optimalLen",a3=a1.a
a3===$&&A.c("dynamicTree")
s=a1.c
s===$&&A.c("staticDesc")
r=s.a
q=s.b
p=s.c
o=s.e
for(s=a4.ry,n=0;n<=15;++n)s[n]=0
m=a4.to
l=a4.x2
l===$&&A.c("_heapMax")
if(!(l>=0&&l<573))return A.a(m,l)
k=m[l]*2+1
j=a3.length
if(!(k>=0&&k<j))return A.a(a3,k)
a3[k]=0
for(i=l+1,l=r!=null,k=q.length,h=0;i<573;++i){g=m[i]
f=g*2
e=f+1
if(!(e>=0&&e<j))return A.a(a3,e)
d=a3[e]*2+1
if(!(d>=0&&d<j))return A.a(a3,d)
n=a3[d]+1
if(n>o){++h
n=o}a3[e]=n
d=a1.b
d===$&&A.c("maxCode")
if(g>d)continue
if(!(n>=0&&n<16))return A.a(s,n)
s[n]=s[n]+1
if(g>=p){d=g-p
if(!(d>=0&&d<k))return A.a(q,d)
c=q[d]}else c=0
if(!(f>=0&&f<j))return A.a(a3,f)
b=a3[f]
f=a4.b3
f===$&&A.c(a2)
a4.b3=f+b*(n+c)
if(l){f=a4.bO
f===$&&A.c("_staticLen")
if(!(e<r.length))return A.a(r,e)
a4.bO=f+b*(r[e]+c)}}if(h===0)return
n=o-1
do{a=n
while(!0){if(!(a>=0&&a<16))return A.a(s,a)
l=s[a]
if(!(l===0))break;--a}s[a]=l-1
l=a+1
if(!(l<16))return A.a(s,l)
s[l]=s[l]+2
if(!(o<16))return A.a(s,o)
s[o]=s[o]-1
h-=2}while(h>0)
for(n=o;n!==0;--n){if(!(n>=0))return A.a(s,n)
g=s[n]
for(;g!==0;){--i
if(!(i>=0&&i<573))return A.a(m,i)
a0=m[i]
l=a1.b
l===$&&A.c("maxCode")
if(a0>l)continue
l=a0*2
k=l+1
if(!(k>=0&&k<j))return A.a(a3,k)
f=a3[k]
if(f!==n){e=a4.b3
e===$&&A.c(a2)
if(!(l>=0&&l<j))return A.a(a3,l)
a4.b3=e+(n-f)*a3[l]
a3[k]=n}--g}}},
dw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
c===$&&A.c("dynamicTree")
s=d.c
s===$&&A.c("staticDesc")
r=s.a
q=s.d
a.x1=0
a.x2=573
for(s=c.length,p=a.to,o=a.xr,n=0,m=-1;n<q;++n){l=n*2
if(!(l<s))return A.a(c,l)
if(c[l]!==0){l=++a.x1
if(!(l>=0&&l<573))return A.a(p,l)
p[l]=n
if(!(n<573))return A.a(o,n)
o[n]=0
m=n}else{++l
if(!(l<s))return A.a(c,l)
c[l]=0}}for(l=r!=null;k=a.x1,k<2;){++k
a.x1=k
if(m<2){++m
j=m}else j=0
if(!(k>=0))return A.a(p,k)
p[k]=j
k=j*2
if(!(k>=0&&k<s))return A.a(c,k)
c[k]=1
if(!(j>=0))return A.a(o,j)
o[j]=0
i=a.b3
i===$&&A.c("_optimalLen")
a.b3=i-1
if(l){i=a.bO
i===$&&A.c("_staticLen");++k
if(!(k<r.length))return A.a(r,k)
a.bO=i-r[k]}}d.b=m
for(n=B.a.S(k,2);n>=1;--n)a.dT(c,n)
j=q
do{n=p[1]
l=a.x1--
if(!(l>=0&&l<573))return A.a(p,l)
p[1]=p[l]
a.dT(c,1)
h=p[1]
l=--a.x2
if(!(l>=0&&l<573))return A.a(p,l)
p[l]=n;--l
a.x2=l
if(!(l>=0))return A.a(p,l)
p[l]=h
l=j*2
k=n*2
if(!(k>=0&&k<s))return A.a(c,k)
i=c[k]
g=h*2
if(!(g>=0&&g<s))return A.a(c,g)
f=c[g]
if(!(l<s))return A.a(c,l)
c[l]=i+f
if(!(n>=0&&n<573))return A.a(o,n)
f=o[n]
if(!(h>=0&&h<573))return A.a(o,h)
i=o[h]
l=f>i?f:i
if(!(j<573))return A.a(o,j)
o[j]=l+1;++k;++g
if(!(g<s))return A.a(c,g)
c[g]=j
if(!(k<s))return A.a(c,k)
c[k]=j
e=j+1
p[1]=j
a.dT(c,1)
if(a.x1>=2){j=e
continue}else break}while(!0)
s=--a.x2
o=p[1]
if(!(s>=0&&s<573))return A.a(p,s)
p[s]=o
d.j4(a)
A.p0(c,m,a.ry)}}
A.jz.prototype={}
A.hY.prototype={
ho(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.length
for(s=0;s<g;++s){if(!(s<a.length))return A.a(a,s)
r=a[s]
q=h.b
if(typeof r!=="number")return r.lr()
if(r>q)h.skW(r)
if(!(s<a.length))return A.a(a,s)
r=a[s]
q=h.c
if(typeof r!=="number")return r.ls()
if(r<q)h.sl_(r)}p=B.a.W(1,h.b)
h.a=new Uint32Array(p)
for(o=1,n=0,m=2;o<=h.b;){for(r=o<<16,s=0;s<g;++s){if(!(s<a.length))return A.a(a,s)
if(J.bF(a[s],o)){for(l=n,k=0,j=0;j<o;++j){k=(k<<1|l&1)>>>0
l=l>>>1}for(q=h.a,i=(r|s)>>>0,j=k;j<p;j+=m){if(!(j>=0&&j<q.length))return A.a(q,j)
q[j]=i}++n}}++o
n=n<<1>>>0
m=m<<1>>>0}},
skW(a){this.b=A.k(a)},
sl_(a){this.c=A.k(a)}}
A.fd.prototype={
eP(){var s,r,q,p,o=this
o.e=o.d=0
if(!o.b)return
s=o.a
s===$&&A.c("input")
r=s.c
while(!0){q=s.b
p=s.e
p===$&&A.c("_length")
if(!(q<r+p))break
if(!o.js())break}},
js(){var s,r=this,q=r.a
q===$&&A.c("input")
if(q.gcQ())return!1
s=r.bj(3)
switch(B.a.j(s,1)){case 0:if(r.jC()===-1)return!1
break
case 1:if(r.eA(r.r,r.w)===-1)return!1
break
case 2:if(r.jt()===-1)return!1
break
default:return!1}return(s&1)===0},
bj(a){var s,r,q,p,o=this
if(a===0)return 0
for(s=o.a;r=o.e,r<a;){s===$&&A.c("input")
q=s.b
p=s.e
p===$&&A.c("_length")
if(q>=s.c+p)return-1
p=s.a
s.b=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
o.d=(o.d|B.a.W(q,r))>>>0
o.e=r+8}s=o.d
q=B.a.R(1,a)
o.d=B.a.a9(s,a)
o.e=r-a
return(s&q-1)>>>0},
dW(a){var s,r,q,p,o,n,m,l=this,k=a.a
k===$&&A.c("table")
s=a.b
for(r=l.a;q=l.e,q<s;){r===$&&A.c("input")
p=r.b
o=r.e
o===$&&A.c("_length")
if(p>=r.c+o)return-1
o=r.a
r.b=p+1
if(!(p>=0&&p<o.length))return A.a(o,p)
p=o[p]
l.d=(l.d|B.a.W(p,q))>>>0
l.e=q+8}r=l.d
p=(r&B.a.W(1,s)-1)>>>0
if(!(p<k.length))return A.a(k,p)
n=k[p]
m=n>>>16
l.d=B.a.a9(r,m)
l.e=q-m
return n&65535},
jC(){var s,r,q=this
q.e=q.d=0
s=q.bj(16)
r=q.bj(16)
if(s!==0&&s!==(r^65535)>>>0)return-1
r=q.a
r===$&&A.c("input")
if(s>r.gA(r))return-1
q.c.lp(r.ae(s))
return 0},
jt(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.bj(5)
if(h===-1)return-1
h+=257
if(h>288)return-1
s=i.bj(5)
if(s===-1)return-1;++s
if(s>32)return-1
r=i.bj(4)
if(r===-1)return-1
r+=4
if(r>19)return-1
q=new Uint8Array(19)
for(p=0;p<r;++p){o=i.bj(3)
if(o===-1)return-1
n=B.ac[p]
if(!(n<19))return A.a(q,n)
q[n]=o}m=A.cM(q)
n=h+s
l=new Uint8Array(n)
k=A.y(l.buffer,0,h)
j=A.y(l.buffer,h,s)
if(i.ii(n,m,l)===-1)return-1
return i.eA(A.cM(k),A.cM(j))},
eA(a,b){var s,r,q,p,o,n,m,l=this
for(s=l.c;!0;){r=l.dW(a)
if(r<0||r>285)return-1
if(r===256)break
if(r<256){s.m(r&255)
continue}q=r-257
if(!(q>=0&&q<29))return A.a(B.bF,q)
p=B.bF[q]+l.bj(B.dI[q])
o=l.dW(b)
if(o<0||o>29)return-1
if(!(o>=0&&o<30))return A.a(B.bn,o)
n=B.bn[o]+l.bj(B.Z[o])
for(m=-n;p>n;){s.a3(s.aj(m))
p-=n}if(p===n)s.a3(s.aj(m))
else s.a3(s.ee(m,p-n))}for(s=l.a;m=l.e,m>=8;){l.e=m-8
s===$&&A.c("input")
if(--s.b<0)s.b=0}return 0},
ii(a,b,c){var s,r,q,p,o,n,m,l=this
t.L.a(c)
for(s=c.length,r=0,q=0;q<a;){p=l.dW(b)
if(p===-1)return-1
switch(p){case 16:o=l.bj(2)
if(o===-1)return-1
o+=3
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=r}break
case 17:o=l.bj(3)
if(o===-1)return-1
o+=3
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=0}r=0
break
case 18:o=l.bj(7)
if(o===-1)return-1
o+=11
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=0}r=0
break
default:if(p<0||p>15)return-1
m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=p
q=m
r=p
break}}return 0}}
A.j8.prototype={}
A.j7.prototype={}
A.j9.prototype={
fG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=t.L
g.a(a)
s=A.ir(1,32768)
s.m(120)
for(r=0;q=(r|0)>>>0,(30720+q)%31!==0;)++r
s.m(q)
p=A.qq(a)
o=A.c5(a,1,null,0)
q=A.kG()
n=A.kG()
m=A.kG()
l=new Uint16Array(16)
k=new Uint32Array(573)
j=new Uint8Array(573)
i=A.ir(0,32768)
l=new A.hM(o,i,q,n,m,l,k,j)
k=!1
if(k)A.az(A.dh("Invalid Deflate parameter"))
$.b6.b=l.j6(6)
k=new Uint16Array(1146)
l.p2=k
j=new Uint16Array(122)
l.p3=j
h=new Uint16Array(78)
l.p4=h
l.at=15
l.as=32768
l.ax=32767
l.dx=15
l.db=32768
l.dy=32767
l.fr=5
l.ay=new Uint8Array(65536)
l.CW=new Uint16Array(32768)
l.cx=new Uint16Array(32768)
l.y2=16384
l.f=new Uint8Array(65536)
l.r=65536
l.bl=16384
l.y1=49152
l.ok=6
l.w=l.x=l.p1=0
l.e=113
l.a=0
q.a=k
q.c=$.n0()
n.a=j
n.c=$.n_()
m.a=h
m.c=$.mZ()
l.be=l.bd=0
l.bP=8
l.eQ()
l.jl()
l.iJ(4)
l.d8()
s.a3(g.a(A.y(i.c.buffer,0,i.a)))
s.G(p)
g=A.y(s.c.buffer,0,s.a)
return g},
bw(a){return this.fG(a,null)}}
A.hK.prototype={
a8(){return"Channel."+this.b}}
A.M.prototype={
E(){var s=this.b
return++this.a<s.gA(s)},
gU(){return this.b.n(0,this.a)},
$iE:1}
A.cy.prototype={
T(a){return new A.cy(new Uint16Array(A.t(this.a)))},
gH(){return B.C},
gA(a){return this.a.length},
gL(){return null},
n(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]
r=$.N
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=A.H(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gO(a){return this.gp(this)},
gp(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]
r=$.N
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
gt(){var s,r=this.a
if(r.length>1){r=r[1]
s=$.N
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gu(){var s,r=this.a
if(r.length>2){r=r[2]
s=$.N
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gv(){var s,r=this.a
if(r.length>3){r=r[3]
s=$.N
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gak(){return A.Y(this)},
ah(a){var s=a.gp(a),r=this.a,q=r.length
if(q!==0){s=A.H(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=a.gt()
if(q>1)r[1]=A.H(s)
s=a.gu()
if(q>2)r[2]=A.H(s)
s=a.gv()
if(q>3)r[3]=A.H(s)},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a.length&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1}
A.cz.prototype={
T(a){return new A.cz(new Float32Array(A.t(this.a)))},
gH(){return B.K},
gA(a){return this.a.length},
gL(){return null},
n(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s[b]=c}},
gO(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gu(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:1},
gak(){return A.Y(this)},
ah(a){var s=a.gp(a),r=this.a,q=r.length
if(q!==0){if(0>=q)return A.a(r,0)
r[0]=s}s=a.gt()
if(q>1)r[1]=s
s=a.gu()
if(q>2)r[2]=s
s=a.gv()
if(q>3)r[3]=s},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a.length&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1}
A.cA.prototype={
T(a){return new A.cA(new Float64Array(A.t(this.a)))},
gH(){return B.N},
gA(a){return this.a.length},
gL(){return null},
n(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s[b]=c}},
gO(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gu(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:1},
gak(){return A.Y(this)},
ah(a){var s=a.gp(a),r=this.a,q=r.length
if(q!==0){if(0>=q)return A.a(r,0)
r[0]=s}s=a.gt()
if(q>1)r[1]=s
s=a.gu()
if(q>2)r[2]=s
s=a.gv()
if(q>3)r[3]=s},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a.length&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1}
A.cB.prototype={
T(a){return new A.cB(new Int16Array(A.t(this.a)))},
gH(){return B.P},
gA(a){return this.a.length},
gL(){return null},
n(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gO(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gu(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:0},
gak(){return A.Y(this)},
ah(a){var s=a.gp(a),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=a.gt()
if(q>1)r[1]=B.b.i(s)
s=a.gu()
if(q>2)r[2]=B.b.i(s)
s=a.gv()
if(q>3)r[3]=B.b.i(s)},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a.length&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1}
A.cC.prototype={
T(a){return new A.cC(new Int32Array(A.t(this.a)))},
gH(){return B.Q},
gA(a){return this.a.length},
gL(){return null},
n(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gO(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gu(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:0},
gak(){return A.Y(this)},
ah(a){var s=a.gp(a),r=this.a,q=r.length
if(q!==0){A.k(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=a.gt()
if(q>1)r[1]=B.b.i(s)
s=a.gu()
if(q>2)r[2]=B.b.i(s)
s=a.gv()
if(q>3)r[3]=B.b.i(s)},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a.length&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1}
A.cD.prototype={
T(a){return new A.cD(new Int8Array(A.t(this.a)))},
gH(){return B.O},
gA(a){return this.a.length},
gL(){return null},
n(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gO(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gu(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:0},
gak(){return A.Y(this)},
ah(a){var s=a.gp(a),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=a.gt()
if(q>1)r[1]=B.b.i(s)
s=a.gu()
if(q>2)r[2]=B.b.i(s)
s=a.gv()
if(q>3)r[3]=B.b.i(s)},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a.length&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1}
A.cE.prototype={
T(a){var s=this.b
s===$&&A.c("data")
return new A.cE(this.a,s)},
gH(){return B.y},
gL(){return null},
ce(a){var s
if(a<this.a){s=this.b
s===$&&A.c("data")
s=B.a.a2(s,7-a)&1}else s=0
return s},
cu(a,b){var s
if(a>=this.a)return
a=7-a
s=this.b
s===$&&A.c("data")
this.b=b!==0?(s|B.a.W(1,a))>>>0:(s&~(B.a.W(1,a)&255))>>>0},
n(a,b){return this.ce(b)},
h(a,b,c){return this.cu(b,c)},
gO(a){return this.ce(0)},
gp(a){return this.ce(0)},
gt(){return this.ce(1)},
gu(){return this.ce(2)},
gv(){return this.ce(3)},
gak(){return A.Y(this)},
ah(a){this.a7(a.gp(a),a.gt(),a.gu(),a.gv())},
a7(a,b,c,d){var s=this
s.cu(0,a)
s.cu(1,b)
s.cu(2,c)
s.cu(3,d)},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1,
gA(a){return this.a}}
A.cF.prototype={
T(a){return new A.cF(new Uint16Array(A.t(this.a)))},
gH(){return B.A},
gA(a){return this.a.length},
gL(){return null},
n(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gO(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gu(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:0},
gak(){return A.Y(this)},
ah(a){var s=a.gp(a),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=a.gt()
if(q>1)r[1]=B.b.i(s)
s=a.gu()
if(q>2)r[2]=B.b.i(s)
s=a.gv()
if(q>3)r[3]=B.b.i(s)},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a.length&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1}
A.cG.prototype={
T(a){var s=this.b
s===$&&A.c("data")
return new A.cG(this.a,s)},
gH(){return B.p},
gL(){return null},
cf(a){var s
if(a<this.a){s=this.b
s===$&&A.c("data")
s=B.a.a2(s,6-(a<<1>>>0))&3}else s=0
return s},
cv(a,b){var s,r,q
if(a>=this.a)return
if(!(a>=0&&a<4))return A.a(B.bg,a)
s=B.bg[a]
r=B.b.i(b)
q=this.b
q===$&&A.c("data")
this.b=(q&s|B.a.W(r&3,6-(a<<1>>>0)))>>>0},
n(a,b){return this.cf(b)},
h(a,b,c){return this.cv(b,c)},
gO(a){return this.cf(0)},
gp(a){return this.cf(0)},
gt(){return this.cf(1)},
gu(){return this.cf(2)},
gv(){return this.cf(3)},
gak(){return A.Y(this)},
ah(a){this.a7(a.gp(a),a.gt(),a.gu(),a.gv())},
a7(a,b,c,d){var s=this
s.cv(0,a)
s.cv(1,b)
s.cv(2,c)
s.cv(3,d)},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1,
gA(a){return this.a}}
A.cH.prototype={
T(a){return new A.cH(new Uint32Array(A.t(this.a)))},
gH(){return B.L},
gA(a){return this.a.length},
gL(){return null},
n(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gO(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gu(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:0},
gak(){return A.Y(this)},
ah(a){var s=a.gp(a),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=a.gt()
if(q>1)r[1]=B.b.i(s)
s=a.gu()
if(q>2)r[2]=B.b.i(s)
s=a.gv()
if(q>3)r[3]=B.b.i(s)},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a.length&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1}
A.cI.prototype={
T(a){return new A.cI(this.a,new Uint8Array(A.t(this.b)))},
gH(){return B.t},
gL(){return null},
cj(a){var s,r
if(a<0||a>=this.a)s=0
else{s=this.b
r=s.length
if(a<2){if(0>=r)return A.a(s,0)
s=B.a.a2(s[0],4-(a<<2>>>0))&15}else{if(1>=r)return A.a(s,1)
s=B.a.a2(s[1],4-((a&1)<<2))&15}}return s},
cF(a,b){var s,r,q
if(a>=this.a)return
s=B.a.N(B.b.i(b),0,15)
if(a>1){a&=1
r=1}else r=0
if(a===0){q=this.b
if(!(r<q.length))return A.a(q,r)
q[r]=(q[r]&15|s<<4)>>>0}else if(a===1){q=this.b
if(!(r<q.length))return A.a(q,r)
q[r]=(q[r]&240|s)>>>0}},
n(a,b){return this.cj(b)},
h(a,b,c){return this.cF(b,c)},
gO(a){return this.cj(0)},
gp(a){return this.cj(0)},
gt(){return this.cj(1)},
gu(){return this.cj(2)},
gv(){return this.cj(3)},
gak(){return A.Y(this)},
ah(a){this.a7(a.gp(a),a.gt(),a.gu(),a.gv())},
a7(a,b,c,d){var s=this
s.cF(0,a)
s.cF(1,b)
s.cF(2,c)
s.cF(3,d)},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1,
gA(a){return this.a}}
A.bk.prototype={
hj(a,b,c,d){var s=this.a,r=s.length
if(0>=r)return A.a(s,0)
s[0]=a
if(1>=r)return A.a(s,1)
s[1]=b
if(2>=r)return A.a(s,2)
s[2]=c
if(3>=r)return A.a(s,3)
s[3]=d},
T(a){return new A.bk(new Uint8Array(A.t(this.a)))},
gH(){return B.e},
gA(a){return this.a.length},
gL(){return null},
n(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gO(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gu(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:255},
gak(){return A.Y(this)},
ah(a){var s=a.gp(a),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=a.gt()
if(q>1)r[1]=B.b.i(s)
s=a.gu()
if(q>2)r[2]=B.b.i(s)
s=a.gv()
if(q>3)r[3]=B.b.i(s)},
gJ(a){return new A.M(this)},
X(a,b){if(b==null)return!1
return t.G.b(b)&&b.gA(b)===this.a.length&&b.gI(b)===A.l(A.x(this,!0,A.m(this).q("e.E")))},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
$iz:1}
A.eT.prototype={}
A.dl.prototype={}
A.al.prototype={
a8(){return"Format."+this.b}}
A.dA.prototype={
a8(){return"FormatType."+this.b}}
A.eO.prototype={
a8(){return"BlendMode."+this.b}}
A.c_.prototype={
cX(a){var s=$.k3()
if(!s.al(a))return"<unknown>"
return s.n(0,a).a},
B(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.a,r=A.b0(s,s.r,A.m(s).c),q=t.p,p=t.r,o=t.N,n=t.P,m="";r.E();){l=r.d
m+=l+"\n"
k=s.n(0,l)
for(l=k.a,j=new A.a2(l,l.r,A.m(l).q("a2<1>")),j.c=l.e;j.E();){l=j.d
i=k.n(0,l)
m=i==null?m+("\t"+e.cX(l)+"\n"):m+("\t"+e.cX(l)+": "+i.B(0)+"\n")}for(l=k.b.a,j=new A.a2(l,l.r,A.m(l).q("a2<1>")),j.c=l.e;j.E();){h=j.d
m+=h+"\n"
if(!l.al(h))l.h(0,h,new A.aE(A.I(q,p),new A.aL(A.I(o,n))))
g=l.n(0,h)
for(h=g.a,f=new A.a2(h,h.r,A.m(h).q("a2<1>")),f.c=h.e;f.E();){h=f.d
i=g.n(0,h)
m=i==null?m+("\t"+e.cX(h)+"\n"):m+("\t"+e.cX(h)+": "+i.B(0)+"\n")}}}return m.charCodeAt(0)==0?m:m},
aS(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3="exif",a4="interop",a5=a6.b
a6.b=!0
a6.a_(19789)
a6.a_(42)
a6.G(8)
s=a2.a
if(s.n(0,"ifd0")==null)s.h(0,"ifd0",new A.aE(A.I(t.p,t.r),new A.aL(A.I(t.N,t.P))))
r=t.N
q=t.p
p=A.I(r,q)
for(o=A.m(s),n=o.q("bc<1>"),o=A.b0(s,s.r,o.c),m=t.r,l=t.P,k=8;o.E();){j=o.d
i=s.n(0,j)
i.toString
p.h(0,j,k)
j=i.b.a
if(j.al(a3)){h=new Uint32Array(1)
h[0]=0
i.h(0,34665,new A.aM(h))}else i.a.dq(0,34665)
if(j.al(a4)){h=new Uint32Array(1)
h[0]=0
i.h(0,40965,new A.aM(h))}else i.a.dq(0,40965)
if(j.al("gps")){h=new Uint32Array(1)
h[0]=0
i.h(0,34853,new A.aM(h))}else i.a.dq(0,34853)
i=i.a
k+=2+12*i.gbH(i).a.a.a+4
for(i=i.gbH(i),h=i.a,g=h.a,h=new A.a2(g,g.r,h.$ti.q("a2<1>")),h.c=g.e,g=A.m(i),g=g.q("@<1>").ap(g.z[1]),i=new A.an(h,i.b,g.q("an<1,2>")),g=g.z[1];i.E();){h=i.a
if(h==null)h=g.a(h)
f=h.gaD(h).a
if(!(f<13))return A.a(B.x,f)
e=B.x[f]*h.gA(h)
if(e>4)k+=e}for(i=new A.a2(j,j.r,A.m(j).q("a2<1>")),i.c=j.e;i.E();){h=i.d
if(!j.al(h))j.h(0,h,new A.aE(A.I(q,m),new A.aL(A.I(r,l))))
g=j.n(0,h)
g.toString
p.h(0,h,k)
g=g.a
d=2+12*g.gbH(g).a.a.a
for(h=g.gbH(g),g=h.a,f=g.a,g=new A.a2(f,f.r,g.$ti.q("a2<1>")),g.c=f.e,f=A.m(h),f=f.q("@<1>").ap(f.z[1]),h=new A.an(g,h.b,f.q("an<1,2>")),f=f.z[1];h.E();){g=h.a
if(g==null)g=f.a(g)
c=g.gaD(g).a
if(!(c<13))return A.a(B.x,c)
e=B.x[c]*g.gA(g)
if(e>4)d+=e}k+=d}}b=s.a
for(o=b-1,a=0;a<b;++a){a0=new A.bc(s,n).bv(0,a)
j=s.gbH(s)
a1=j.b.$1(j.a.bv(0,a))
j=a1.b.a
if(j.al(a3)){i=a1.n(0,34665)
i.toString
h=p.n(0,a3)
h.toString
i.bI(h)}if(j.al(a4)){i=a1.n(0,40965)
i.toString
h=p.n(0,a4)
h.toString
i.bI(h)}if(j.al("gps")){i=a1.n(0,34853)
i.toString
h=p.n(0,"gps")
h.toString
i.bI(h)}i=p.n(0,a0)
i.toString
h=a1.a
a2.fo(a6,a1,i+2+12*h.gbH(h).a.a.a+4)
if(a===o)a6.G(0)
else{i=p.n(0,new A.bc(s,n).bv(0,a+1))
i.toString
a6.G(i)}a2.fp(a6,a1)
for(i=new A.a2(j,j.r,A.m(j).q("a2<1>")),i.c=j.e;i.E();){h=i.d
if(!j.al(h))j.h(0,h,new A.aE(A.I(q,m),new A.aL(A.I(r,l))))
g=j.n(0,h)
g.toString
h=p.n(0,h)
h.toString
f=g.a
a2.fo(a6,g,h+2+12*f.gbH(f).a.a.a)
a2.fp(a6,g)}}a6.b=a5},
fo(a,b,c){var s,r,q,p,o,n,m=b.a
a.a_(m.a)
for(m=A.b0(m,m.r,A.m(m).c);m.E();){s=m.d
r=b.n(0,s)
r.toString
q=s===273
p=q&&r.gaD(r)===B.D?B.n:r.gaD(r)
o=q&&r.gaD(r)===B.D?1:r.gA(r)
a.a_(s)
a.a_(p.a)
a.G(o)
s=r.gaD(r).a
if(!(s<13))return A.a(B.x,s)
n=B.x[s]*r.gA(r)
if(n<=4){r.aS(a)
for(;n<4;){a.m(0);++n}}else{a.G(c)
c+=n}}return c},
fp(a,b){var s,r,q,p
for(s=b.a,s=s.gbH(s),r=s.a,q=r.a,p=A.m(s),p=p.q("@<1>").ap(p.z[1]),s=new A.an(A.b0(q,q.r,r.$ti.c),s.b,p.q("an<1,2>")),p=p.z[1];s.E();){r=s.a
if(r==null)r=p.a(r)
q=r.gaD(r).a
if(!(q<13))return A.a(B.x,q)
if(B.x[q]*r.gA(r)>4)r.aS(a)}},
cn(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="Length must be a non-negative integer: ",a6=a7.e
a7.e=!0
s=a7.d
r=a7.l()
if(r===18761){a7.e=!1
if(a7.l()!==42){a7.e=a6
return!1}}else if(r===19789){a7.e=!0
if(a7.l()!==42){a7.e=a6
return!1}}else return!1
q=a7.k()
for(p=this.a,o=t.gn,n=t.p,m=t.r,l=t.N,k=t.P,j=0;q>0;){a7.d=s+q
i=new A.aE(A.I(n,m),new A.aL(A.I(l,k)))
h=a7.l()
g=A.b(new Array(h),o)
for(f=0;f<h;++f)g[f]=this.f3(a7,s)
for(e=g.length,d=0;d<g.length;g.length===e||(0,A.a6)(g),++d){c=g[d]
b=c.b
if(b!=null)i.h(0,c.a,b)}p.h(0,"ifd"+j,i);++j
q=a7.k()}for(p=p.gbH(p),e=p.a,b=e.a,a=A.m(p),a=a.q("@<1>").ap(a.z[1]),p=new A.an(A.b0(b,b.r,e.$ti.c),p.b,a.q("an<1,2>")),a=a.z[1];p.E();){e=p.a
if(e==null)e=a.a(e)
for(b=B.bX.gfN(),b=b.gJ(b),a0=e.a,a1=e.b.a;b.E();){a2=b.gU()
if(a0.al(a2)){a7.d=s+e.n(0,a2).i(0)
i=new A.aE(A.I(n,m),new A.aL(A.I(l,k)))
h=a7.l()
g=A.b(new Array(h),o)
for(f=0;f<h;++f)g[f]=this.f3(a7,s)
for(a3=g.length,d=0;d<g.length;g.length===a3||(0,A.a6)(g),++d){c=g[d]
a4=c.b
if(a4!=null)i.h(0,c.a,a4)}a2=B.bX.n(0,a2)
a2.toString
a1.h(0,a2,i)}}}a7.e=a6
return!1},
f3(a,b){var s,r,q,p,o=a.l(),n=a.l(),m=a.k(),l=new A.hm(o,null)
if(n>13)return l
if(!(n<13))return A.a(B.a9,n)
s=B.a9[n]
r=m*B.x[n]
q=a.d
if((r>4?a.d=a.k()+b:q)+r>a.c)return l
p=a.ae(r)
switch(s.a){case 0:break
case 6:l.b=new A.b9(new Int8Array(A.t(A.lG(p.a1().buffer,0,m))))
break
case 1:l.b=new A.aY(new Uint8Array(A.t(p.ae(m).a1())))
break
case 7:l.b=new A.bK(new Uint8Array(A.t(p.ae(m).a1())))
break
case 2:l.b=new A.c4(m===0?"":p.af(m-1))
break
case 3:l.b=A.lq(p,m)
break
case 4:l.b=A.ll(p,m)
break
case 5:l.b=A.lm(p,m)
break
case 10:l.b=A.lo(p,m)
break
case 8:l.b=A.lp(p,m)
break
case 9:l.b=A.ln(p,m)
break
case 11:l.b=A.ls(p,m)
break
case 12:l.b=A.lk(p,m)
break}a.d=q+4
return l}}
A.hm.prototype={}
A.eZ.prototype={}
A.aL.prototype={
hp(a){a.a.c4(0,new A.i0(this))},
gfK(a){var s,r,q,p=this.a
if(p.a===0)return!0
for(p=p.gbH(p),s=p.a,r=s.a,q=A.m(p),q=q.q("@<1>").ap(q.z[1]),p=new A.an(A.b0(r,r.r,s.$ti.c),p.b,q.q("an<1,2>")),q=q.z[1];p.E();){s=p.a
if(s==null)s=q.a(s)
if(s.a.a===0){s=s.b
s=s.gfK(s)}else s=!1
if(!s)return!1}return!0},
n(a,b){var s=this.a
if(!s.al(b))s.h(0,b,new A.aE(A.I(t.p,t.r),new A.aL(A.I(t.N,t.P))))
s=s.n(0,b)
s.toString
return s}}
A.i0.prototype={
$2(a,b){var s
A.bT(a)
s=A.li(t.P.a(b))
this.a.a.h(0,a,s)
return s},
$S:11}
A.aE.prototype={
fC(a){a.a.c4(0,new A.i1(this))
a.b.a.c4(0,new A.i2(this))},
n(a,b){var s=this.a.n(0,b)
return s},
h(a,b,c){var s,r,q,p,o,n=this
if(typeof b=="string")b=B.jU.n(0,b)
if(!A.aH(b))return
if(c instanceof A.a1)n.a.h(0,b,c)
else{s=$.k3().n(0,b)
if(s!=null)switch(s.b.a){case 1:if(t.L.b(c))n.a.h(0,b,new A.aY(new Uint8Array(A.t(new Uint8Array(A.t(c))))))
else if(A.aH(c)){r=new Uint8Array(1)
if(0>=1)return A.a(r,0)
r[0]=c
n.a.h(0,b,new A.aY(r))}break
case 2:break
case 3:if(t.L.b(c))n.a.h(0,b,new A.bo(new Uint16Array(A.t(new Uint16Array(A.t(c))))))
else if(A.aH(c))n.a.h(0,b,A.nC(c))
break
case 4:if(t.L.b(c))n.a.h(0,b,new A.aM(new Uint32Array(A.t(new Uint32Array(A.t(c))))))
else if(A.aH(c))n.a.h(0,b,A.nB(c))
break
case 5:if(t.bJ.b(c))n.a.h(0,b,new A.b8(A.c9(c,t.i)))
else if(t.L.b(c)&&c.length===2){r=J.aI(c)
n.a.h(0,b,new A.b8(A.b([new A.aR(r.n(c,0),r.n(c,1))],t.aK)))}else if(t.f.b(c)){q=c.length
r=t.i
p=J.fs(q,r)
for(o=0;o<q;++o)p[o]=new A.aR(B.a.n(c[o],0),B.a.n(c[o],1))
n.a.h(0,b,new A.b8(A.c9(p,r)))}break
case 6:if(t.L.b(c))n.a.h(0,b,new A.b9(new Int8Array(A.t(new Int8Array(A.t(c))))))
else if(A.aH(c)){r=new Int8Array(1)
if(0>=1)return A.a(r,0)
r[0]=c
n.a.h(0,b,new A.b9(r))}break
case 7:if(t.L.b(c))n.a.h(0,b,new A.bK(new Uint8Array(A.t(new Uint8Array(A.t(c))))))
break
case 8:if(t.L.b(c))n.a.h(0,b,new A.bn(new Int16Array(A.t(new Int16Array(A.t(c))))))
else if(A.aH(c)){r=new Int16Array(1)
if(0>=1)return A.a(r,0)
r[0]=c
n.a.h(0,b,new A.bn(r))}break
case 9:if(t.L.b(c))n.a.h(0,b,new A.bm(new Int32Array(A.t(new Int32Array(A.t(c))))))
else if(A.aH(c)){r=new Int32Array(1)
if(0>=1)return A.a(r,0)
r[0]=c
n.a.h(0,b,new A.bm(r))}break
case 10:if(t.bJ.b(c))n.a.h(0,b,new A.ba(A.c9(c,t.i)))
else if(t.L.b(c)&&c.length===2){r=J.aI(c)
n.a.h(0,b,new A.ba(A.b([new A.aR(r.n(c,0),r.n(c,1))],t.aK)))}else if(t.f.b(c)){q=c.length
r=t.i
p=J.fs(q,r)
for(o=0;o<q;++o)p[o]=new A.aR(B.a.n(c[o],0),B.a.n(c[o],1))
n.a.h(0,b,new A.ba(A.c9(p,r)))}break
case 11:if(t.H.b(c))n.a.h(0,b,new A.bJ(new Float32Array(A.t(new Float32Array(A.t(c))))))
else if(typeof c=="number")n.a.h(0,b,A.lr(c))
else if(A.aH(c))n.a.h(0,b,A.lr(c))
break
case 12:if(t.H.b(c))n.a.h(0,b,new A.bI(new Float64Array(A.t(new Float64Array(A.t(c))))))
else if(typeof c=="number")n.a.h(0,b,A.lj(c))
else if(A.aH(c))n.a.h(0,b,A.lj(c))
break
case 0:break}}},
gcd(){var s=this.a.n(0,274)
return s==null?null:J.k5(s)},
scd(a){this.a.dq(0,274)}}
A.i1.prototype={
$2(a,b){var s
A.k(a)
s=t.r.a(b).T(0)
this.a.a.h(0,a,s)
return s},
$S:17}
A.i2.prototype={
$2(a,b){var s
A.bT(a)
s=A.li(t.P.a(b))
this.a.b.a.h(0,a,s)
return s},
$S:11}
A.ai.prototype={
a8(){return"IfdValueType."+this.b}}
A.a1.prototype={
ag(a,b){A.k(b)
return 0},
i(a){return this.ag(a,0)},
by(){return new Uint8Array(0)},
B(a){return""},
X(a,b){var s=this
if(b==null)return!1
return b instanceof A.a1&&s.gaD(s)===b.gaD(b)&&s.gA(s)===b.gA(b)&&s.gI(s)===b.gI(b)},
gI(a){return 0},
bI(a){}}
A.aY.prototype={
T(a){return new A.aY(new Uint8Array(A.t(this.a)))},
gaD(a){return B.b0},
gA(a){return this.a.length},
X(a,b){var s,r
if(b==null)return!1
if(b instanceof A.aY){s=this.a
r=b.a
s=s.length===r.length&&A.l(s)===A.l(r)}else s=!1
return s},
gI(a){return A.l(this.a)},
ag(a,b){var s
A.k(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ag(a,0)},
bI(a){var s=this.a
if(0>=s.length)return A.a(s,0)
s[0]=a},
by(){return this.a},
aS(a){a.a3(this.a)},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.c4.prototype={
T(a){return new A.c4(this.a)},
gaD(a){return B.j},
gA(a){return this.a.length+1},
X(a,b){var s,r
if(b==null)return!1
if(b instanceof A.c4){s=this.a
r=b.a
s=s.length+1===r.length+1&&B.l.gI(s)===B.l.gI(r)}else s=!1
return s},
gI(a){return B.l.gI(this.a)},
by(){return new Uint8Array(A.t(new A.as(this.a)))},
aS(a){a.a3(new A.as(this.a))
a.m(0)},
B(a){return this.a}}
A.bo.prototype={
hu(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<b;++q){p=a.l()
if(!(q<r))return A.a(s,q)
s[q]=p}},
T(a){return new A.bo(new Uint16Array(A.t(this.a)))},
gaD(a){return B.h},
gA(a){return this.a.length},
X(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bo){s=this.a
r=b.a
s=s.length===r.length&&A.l(s)===A.l(r)}else s=!1
return s},
gI(a){return A.l(this.a)},
ag(a,b){var s
A.k(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ag(a,0)},
bI(a){var s=this.a
if(0>=s.length)return A.a(s,0)
s[0]=a},
by(){return A.y(this.a.buffer,0,null)},
aS(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.a_(r[s])},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.aM.prototype={
hr(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<b;++q){p=a.k()
if(!(q<r))return A.a(s,q)
s[q]=p}},
T(a){return new A.aM(new Uint32Array(A.t(this.a)))},
gaD(a){return B.n},
gA(a){return this.a.length},
X(a,b){var s,r
if(b==null)return!1
if(b instanceof A.aM){s=this.a
r=b.a
s=s.length===r.length&&A.l(s)===A.l(r)}else s=!1
return s},
gI(a){return A.l(this.a)},
ag(a,b){var s
A.k(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ag(a,0)},
bI(a){var s=this.a
if(0>=s.length)return A.a(s,0)
s[0]=a},
by(){return A.y(this.a.buffer,0,null)},
aS(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.G(r[s])},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.b8.prototype={
T(a){return new A.b8(A.c9(this.a,t.i))},
gaD(a){return B.q},
gA(a){return this.a.length},
ag(a,b){var s
A.k(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return J.k5(s[b])},
i(a){return this.ag(a,0)},
X(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.b8){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.l(s)===A.l(q)}else s=!1
return s},
gI(a){return A.l(this.a)},
aS(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q]
a.G(p.a)
a.G(p.b)}},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.C(s[0])}else s=A.C(s)
return s}}
A.b9.prototype={
T(a){return new A.b9(new Int8Array(A.t(this.a)))},
gaD(a){return B.b4},
gA(a){return this.a.length},
X(a,b){var s,r
if(b==null)return!1
if(b instanceof A.b9){s=this.a
r=b.a
s=s.length===r.length&&A.l(s)===A.l(r)}else s=!1
return s},
gI(a){return A.l(this.a)},
ag(a,b){var s
A.k(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ag(a,0)},
bI(a){var s=this.a
if(0>=s.length)return A.a(s,0)
s[0]=a},
by(){return A.y(this.a.buffer,0,null)},
aS(a){a.a3(A.y(this.a.buffer,0,null))},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.bn.prototype={
ht(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<b;++q){p=a.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
p=p[0]
if(!(q<r))return A.a(s,q)
s[q]=p}},
T(a){return new A.bn(new Int16Array(A.t(this.a)))},
gaD(a){return B.b5},
gA(a){return this.a.length},
X(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bn){s=this.a
r=b.a
s=s.length===r.length&&A.l(s)===A.l(r)}else s=!1
return s},
gI(a){return A.l(this.a)},
ag(a,b){var s
A.k(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ag(a,0)},
bI(a){var s=this.a
if(0>=s.length)return A.a(s,0)
s[0]=a},
by(){return A.y(this.a.buffer,0,null)},
aS(a){var s,r,q,p=new Int16Array(1),o=A.lH(p.buffer,0,null),n=this.a,m=n.length
for(s=o.length,r=0;r<m;++r){q=n[r]
if(0>=1)return A.a(p,0)
p[0]=q
if(0>=s)return A.a(o,0)
a.a_(o[0])}},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.bm.prototype={
hs(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<b;++q){p=a.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
p=p[0]
if(!(q<r))return A.a(s,q)
s[q]=p}},
T(a){return new A.bm(new Int32Array(A.t(this.a)))},
gaD(a){return B.b6},
gA(a){return this.a.length},
X(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bm){s=this.a
r=b.a
s=s.length===r.length&&A.l(s)===A.l(r)}else s=!1
return s},
gI(a){return A.l(this.a)},
ag(a,b){var s
A.k(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ag(a,0)},
bI(a){var s=this.a
if(0>=s.length)return A.a(s,0)
s[0]=a},
by(){return A.y(this.a.buffer,0,null)},
aS(a){var s,r,q=this.a,p=q.length
for(s=0;s<p;++s){r=q[s]
$.hB()[0]=r
r=$.k2()
if(0>=r.length)return A.a(r,0)
a.G(r[0])}},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.ba.prototype={
T(a){return new A.ba(A.c9(this.a,t.i))},
gaD(a){return B.b1},
gA(a){return this.a.length},
X(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.ba){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.l(s)===A.l(q)}else s=!1
return s},
gI(a){return A.l(this.a)},
ag(a,b){var s
A.k(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return J.k5(s[b])},
i(a){return this.ag(a,0)},
aS(a){var s,r,q,p,o,n
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q]
o=p.a
n=$.hB()
n[0]=o
o=$.k2()
if(0>=o.length)return A.a(o,0)
a.G(o[0])
n[0]=p.b
a.G(o[0])}},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.C(s[0])}else s=A.C(s)
return s}}
A.bJ.prototype={
hv(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<b;++q){p=a.k()
$.L()[0]=p
p=$.bZ()
if(0>=p.length)return A.a(p,0)
p=p[0]
if(!(q<r))return A.a(s,q)
s[q]=p}},
T(a){return new A.bJ(new Float32Array(A.t(this.a)))},
gaD(a){return B.b2},
gA(a){return this.a.length},
X(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bJ){s=this.a
r=b.a
s=s.length===r.length&&A.l(s)===A.l(r)}else s=!1
return s},
gI(a){return A.l(this.a)},
by(){return A.y(this.a.buffer,0,null)},
aS(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.ln(r[s])},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.C(s[0])}else s=A.C(s)
return s}}
A.bI.prototype={
hq(a,b){var s,r
for(s=this.a,r=0;r<b;++r)B.jV.h(s,r,a.dn())},
T(a){return new A.bI(new Float64Array(A.t(this.a)))},
gaD(a){return B.b3},
gA(a){return this.a.length},
X(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bI){s=this.a
r=b.a
s=s.length===r.length&&A.l(s)===A.l(r)}else s=!1
return s},
gI(a){return A.l(this.a)},
by(){return A.y(this.a.buffer,0,null)},
aS(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.lo(r[s])},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.C(s[0])}else s=A.C(s)
return s}}
A.bK.prototype={
T(a){return new A.bK(new Uint8Array(A.t(this.a)))},
gaD(a){return B.D},
gA(a){return this.a.length},
by(){return this.a},
X(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bK){s=this.a
r=b.a
s=s.length===r.length&&A.l(s)===A.l(r)}else s=!1
return s},
gI(a){return A.l(this.a)},
aS(a){a.a3(this.a)},
B(a){return"<data>"}}
A.eX.prototype={
a8(){return"DitherKernel."+this.b}}
A.ad.prototype={
a8(){return"BmpCompression."+this.b}}
A.hJ.prototype={}
A.bj.prototype={
eg(a,b){var s,r,q,p,o,n,m,l=this,k=l.d,j=k<=40
if(j){s=l.r
s=s===B.a2||s===B.ar}else s=!0
if(s){s=l.as=a.k()
r=A.jP(s)
l.CW=r
q=B.a.a2(s,r)
s=q>0
l.cx=s?255/q:0
r=l.at=a.k()
p=A.jP(r)
l.cy=p
o=B.a.a2(r,p)
l.db=s?255/o:0
r=l.ax=a.k()
p=A.jP(r)
l.dx=p
n=B.a.a2(r,p)
l.dy=s?255/n:0
if(!j||l.r===B.ar){j=l.ay=a.k()
s=A.jP(j)
l.fr=s
m=B.a.a2(j,s)
l.fx=m>0?255/m:0}else if(l.f===16){l.ay=4278190080
l.fr=24
l.fx=1}else{l.ay=4278190080
l.fr=24
l.fx=1}}else if(l.f===16){l.as=31744
l.CW=10
l.cx=8.225806451612904
l.at=992
l.cy=5
l.db=8.225806451612904
l.ax=31
l.dx=0
l.dy=8.225806451612904
l.fx=l.fr=l.ay=0}else{l.as=16711680
l.CW=16
l.cx=1
l.at=65280
l.cy=8
l.db=1
l.ax=255
l.dx=0
l.dy=1
l.ay=4278190080
l.fr=24
l.fx=1}j=a.d
a.d=j+(k-(j-l.fy))
if(l.f<=8)l.l6(a)},
gcN(){var s=this.d
if(s!==40)if(s===124){s=this.ay
s===$&&A.c("alphaMask")
s=s===0}else s=!1
else s=!0
return s},
gK(a){return Math.abs(this.c)},
l6(a){var s,r,q,p,o,n,m,l=this,k=l.z
if(k===0)k=B.a.R(1,l.f)
l.ch=new A.aG(new Uint8Array(k*3),k,3)
for(s=0;s<k;++s){r=a.a
q=a.d
p=a.d=q+1
o=r.length
if(!(q>=0&&q<o))return A.a(r,q)
q=r[q]
n=a.d=p+1
if(!(p>=0&&p<o))return A.a(r,p)
p=r[p]
m=a.d=n+1
if(!(n>=0&&n<o))return A.a(r,n)
n=r[n]
a.d=m+1
if(!(m>=0&&m<o))return A.a(r,m)
m=r[m]
l.ch.cZ(s,n,p,q,m)}},
kD(a2,a3){var s,r,q,p,o,n,m,l,k,j=this,i="_redShift",h="_redScale",g="greenMask",f="_greenShift",e="_greenScale",d="blueMask",c="_blueShift",b="_blueScale",a="alphaMask",a0="_alphaShift",a1="_alphaScale"
t.dX.a(a3)
if(j.ch!=null){s=j.f
if(s===1){r=a2.C()
for(q=7;q>=0;--q)a3.$4(B.a.b0(r,q)&1,0,0,0)
return}else if(s===2){r=a2.C()
for(q=6;q>=0;q-=2)a3.$4(B.a.b0(r,q)&2,0,0,0)}else if(s===4){r=a2.C()
a3.$4(B.a.j(r,4)&15,0,0,0)
a3.$4(r&15,0,0,0)
return}else if(s===8){a3.$4(a2.C(),0,0,0)
return}}s=j.r
if(s===B.a2&&j.f===32){p=a2.k()
s=j.as
s===$&&A.c("redMask")
o=j.CW
o===$&&A.c(i)
o=B.a.a2((p&s)>>>0,o)
s=j.cx
s===$&&A.c(h)
n=B.b.i(o*s)
s=j.at
s===$&&A.c(g)
o=j.cy
o===$&&A.c(f)
o=B.a.a2((p&s)>>>0,o)
s=j.db
s===$&&A.c(e)
m=B.b.i(o*s)
s=j.ax
s===$&&A.c(d)
o=j.dx
o===$&&A.c(c)
o=B.a.a2((p&s)>>>0,o)
s=j.dy
s===$&&A.c(b)
l=B.b.i(o*s)
if(j.gcN())k=255
else{s=j.ay
s===$&&A.c(a)
o=j.fr
o===$&&A.c(a0)
o=B.a.a2((p&s)>>>0,o)
s=j.fx
s===$&&A.c(a1)
k=B.b.i(o*s)}return a3.$4(n,m,l,k)}else{o=j.f
if(o===32&&s===B.aq){l=a2.C()
m=a2.C()
n=a2.C()
k=a2.C()
return a3.$4(n,m,l,j.gcN()?255:k)}else if(o===24){l=a2.C()
m=a2.C()
return a3.$4(a2.C(),m,l,255)}else if(o===16){p=a2.l()
s=j.as
s===$&&A.c("redMask")
o=j.CW
o===$&&A.c(i)
o=B.a.a2((p&s)>>>0,o)
s=j.cx
s===$&&A.c(h)
n=B.b.i(o*s)
s=j.at
s===$&&A.c(g)
o=j.cy
o===$&&A.c(f)
o=B.a.a2((p&s)>>>0,o)
s=j.db
s===$&&A.c(e)
m=B.b.i(o*s)
s=j.ax
s===$&&A.c(d)
o=j.dx
o===$&&A.c(c)
o=B.a.a2((p&s)>>>0,o)
s=j.dy
s===$&&A.c(b)
l=B.b.i(o*s)
if(j.gcN())k=255
else{s=j.ay
s===$&&A.c(a)
o=j.fr
o===$&&A.c(a0)
o=B.a.a2((p&s)>>>0,o)
s=j.fx
s===$&&A.c(a1)
k=B.b.i(o*s)}return a3.$4(n,m,l,k)}else throw A.d(A.j("Unsupported bitsPerPixel ("+o+") or compression ("+s.B(0)+")."))}},
$iS:1}
A.eQ.prototype={
bh(a){var s,r=null
if(!A.k6(A.w(a,!1,r,0)))return r
s=A.w(a,!1,r,0)
this.a=s
return this.b=A.nb(s,r)},
aw(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.b
if(a0==null)return new A.bp(a,a,a,a,0,B.i,0,0)
s=b.a
s===$&&A.c("_input")
r=a0.a.b
r===$&&A.c("imageOffset")
s.d=r
q=a0.f
r=a0.b
p=B.a.S(r*q+31,32)*4
s=b.c
if(s)o=4
else if(q===1||q===4||q===8)o=1
else{n=q===32?4:3
o=n}if(s)m=B.e
else if(q===1)m=B.y
else{if(q===2)n=B.p
else if(q===4)n=B.t
else{if(q!==8)if(q!==16)q!==24
n=B.e}m=n}l=s?a:a0.ch
k=A.Q(a,a,m,0,B.i,a0.gK(a0),a,0,o,l,r,!1)
for(j=k.gK(k)-1,s=a0.c,r=1/s<0,n=s<0,s=s===0;j>=0;--j){i={}
if(!(s?r:n))h=j
else{g=k.a
g=g==null?a:g.b
h=(g==null?0:g)-1-j}g=b.a
f=g.aj(p)
g.d=g.d+(f.c-f.d)
g=k.a
e=g==null
d=e?a:g.a
if(d==null)d=0
i.a=0
c=e?a:g.M(0,h,a)
if(c==null)c=new A.B()
for(;i.a<d;)a0.kD(f,new A.hH(i,b,d,a0,c))}return k},
bc(a,b,c){if(this.bh(b)==null)return null
return this.aw(0)}}
A.hH.prototype={
$4(a,b,c,d){var s,r,q=this,p=q.a
if(p.a<q.c){s=q.b.c&&q.d.ch!=null
r=q.e
if(s){s=q.d
r.a7(s.ch.aZ(a),s.ch.aY(a),s.ch.aX(a),s.ch.br(a))}else r.a7(a,b,c,d)
r.E();++p.a}},
$S:19}
A.hN.prototype={}
A.hI.prototype={
bw(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=A.a7(!1,8192),b8=c2.gaI(),b9=c2.a,c0=b9==null?b6:b9.gL(),c1=c2.gH()
b9=c1===B.y
if(b9&&b8===1&&c0==null){c0=new A.aG(new Uint8Array(6),2,3)
c0.aU(0,0,0,0)
c0.aU(1,255,255,255)}else if(b9&&b8===2){c2=c2.cJ(B.p,1,!0)
b9=c2.a
c0=b9==null?b6:b9.gL()}else if(b9&&b8===3&&c0==null){c2=c2.cc(B.t,!0)
b9=c2.a
c0=b9==null?b6:b9.gL()}else if(b9&&b8===4)c2=c2.cI(B.e,4)
else{b9=c1===B.p
if(b9&&b8===1&&c0==null){c2=c2.cc(B.p,!0)
b9=c2.a
c0=b9==null?b6:b9.gL()}else if(b9&&b8===2){c2=c2.cc(B.e,!0)
b9=c2.a
c0=b9==null?b6:b9.gL()}else if(b9&&b8===3&&c0==null){c2=c2.cc(B.e,!0)
b9=c2.a
c0=b9==null?b6:b9.gL()}else if(b9&&b8===4){c2=c2.cc(B.e,!0)
b9=c2.a
c0=b9==null?b6:b9.gL()}else{b9=c1===B.t
if(b9&&b8===1&&c0==null){c2=c2.cc(B.e,!0)
b9=c2.a
c0=b9==null?b6:b9.gL()}else if(b9&&b8===2)c2=c2.cI(B.e,3)
else if(b9&&b8===3&&c0==null)c2=c2.cI(B.e,3)
else if(b9&&b8===4)c2=c2.cI(B.e,4)
else{b9=c1===B.e
if(b9&&b8===1&&c0==null)c2=c2.cc(B.e,!0)
else if(b9&&b8===2)c2.cI(B.e,3)
else if(c2.gaQ())c2=c2.aP(B.e)
else if(c2.gaH()&&c2.gaI()===4)c2=c2.fB(4)}}}b9=c2.gaG()
s=c2.a
r=b9*s.c
if(r===12)r=16
b9=r>8
q=b9?B.a2:B.aq
s=s.gbg()
p=s
if(p==null)p=0
o=B.a.S(c2.gP(c2)*r+31,32)*4
n=o-p
m=n>0?A.U(n,255,!1,t.p):b6
l=o*c2.gK(c2)
k=b9?124:40
j=k+14
s=c2.a
s=s==null?b6:s.gL()
s=s==null?b6:s.a
i=(s==null?0:s)*4
h=j+i
g=h-h
b7.a_(19778)
b7.G(l+j+i+g)
b7.G(0)
b7.G(h)
b7.G(k)
b7.G(c2.gP(c2))
b7.G(c2.gK(c2))
b7.a_(1)
b7.a_(r)
b7.G(q.a)
b7.G(l)
b7.G(11811)
b7.G(11811)
s=r===8
b7.G(s?255:0)
b7.G(s?255:0)
if(b9){b9=r===16
f=b9?15:255
e=b9?240:65280
d=b9?3840:16711680
c=b9?61440:4278190080
b7.G(d)
b7.G(e)
b7.G(f)
b7.G(c)
b7.G(1934772034)
b7.G(0)
b7.G(0)
b7.G(0)
b7.G(0)
b7.G(0)
b7.G(0)
b7.G(0)
b7.G(0)
b7.G(0)
b7.G(0)
b7.G(0)
b7.G(0)
b7.G(2)
b7.G(0)
b7.G(0)
b7.G(0)}b9=r===1
b=!b9
if(!b||r===2||r===4||s)if(c0!=null){a=c0.a
for(a0=0;a0<a;++a0){b7.m(B.b.i(c0.aX(a0)))
b7.m(B.b.i(c0.aY(a0)))
b7.m(B.b.i(c0.aZ(a0)))
b7.m(0)}}else if(b9){b7.m(0)
b7.m(0)
b7.m(0)
b7.m(0)
b7.m(255)
b7.m(255)
b7.m(255)
b7.m(0)}else if(r===2)for(a0=0;a0<4;++a0){a1=a0*85
b7.m(a1)
b7.m(a1)
b7.m(a1)
b7.m(0)}else if(r===4)for(a0=0;a0<16;++a0){a1=a0*17
b7.m(a1)
b7.m(a1)
b7.m(a1)
b7.m(0)}else if(s)for(a0=0;a0<256;++a0){b7.m(a0)
b7.m(a0)
b7.m(a0)
b7.m(0)}for(a2=g;a3=a2-1,a2>0;a2=a3)b7.m(0)
if(!b||r===2||r===4||s){a4=c2.gfP(c2)-p
a5=c2.gK(c2)
for(s=m!=null,b=r===4,a6=r===2,a7=0;a7<a5;++a7){a8=c2.a
a8=a8==null?b6:a8.ga0(a8)
if(a8==null)a8=new Uint8Array(0).buffer
a9=new Uint8Array(a8,a4,p)
if(b9)b7.a3(a9)
else if(a6){a=a9.length
for(b0=0;b0<a;++b0){b1=a9[b0]
b7.m((b1&15)<<4|b1>>>4)}}else if(b){a=a9.length
for(b0=0;b0<a;++b0){b1=a9[b0]
b7.m(b1>>>4<<4|b1&15)}}else b7.a3(a9)
if(s)b7.a3(m)
a4-=p}return A.y(b7.c.buffer,0,b7.a)}b2=c2.gaI()===4
a5=c2.gK(c2)
b3=c2.gP(c2)
if(r===16)for(a7=a5-1,b9=m!=null,b4=b6;a7>=0;--a7){s=c2.a
b4=s==null?b6:s.M(0,a7,b4)
if(b4==null)b4=new A.B()
for(b5=0;b5<b3;++b5){b7.m((B.b.i(b4.gt())<<4|B.b.i(b4.gu()))>>>0)
b7.m((B.b.i(b4.gv())<<4|B.b.i(b4.gp(b4)))>>>0)
b4.E()}if(b9)b7.a3(m)}else for(a7=a5-1,b9=m!=null,b4=b6;a7>=0;--a7){s=c2.a
b4=s==null?b6:s.M(0,a7,b4)
if(b4==null)b4=new A.B()
for(b5=0;b5<b3;++b5){b7.m(A.k(b4.gu()))
b7.m(A.k(b4.gt()))
b7.m(A.k(b4.gp(b4)))
if(b2)b7.m(A.k(b4.gv()))
b4.E()}if(b9)b7.a3(m)}return A.y(b7.c.buffer,0,b7.a)}}
A.hL.prototype={}
A.hP.prototype={}
A.f_.prototype={}
A.dM.prototype={
cR(){return this.w},
bq(a,b,c,d,e){throw A.d(A.j("B44 compression not yet supported."))},
cp(a,b,c){return this.bq(a,b,c,null,null)},
B(a){return A.C(this.r)+" "+this.x}}
A.cK.prototype={
a8(){return"ExrChannelType."+this.b}}
A.c0.prototype={
a8(){return"ExrChannelName."+this.b}}
A.f0.prototype={
gkx(){var s=this.c
s===$&&A.c("dataType")
return s},
hk(a){var s=this,r=a.cS()
s.a=r
if(r.length===0)return
r=a.k()
if(!(r<3))return A.a(B.bL,r)
s.c=B.bL[r]
a.C()
a.d+=3
s.f=a.k()
s.r=a.k()
r=s.a
if(r==="R"){s.w=!0
s.b=B.cC}else if(r==="G"){s.w=!0
s.b=B.cD}else if(r==="B"){s.w=!0
s.b=B.cE}else if(r==="A"){s.w=!0
s.b=B.cF}else{s.w=!1
s.b=B.cG}switch(s.c.a){case 0:s.d=4
break
case 1:s.d=2
break
case 2:s.d=4
break
default:throw A.d(A.j("EXR Invalid pixel type: "+s.gkx().B(0)))}}}
A.aX.prototype={
a8(){return"ExrCompressorType."+this.b}}
A.bl.prototype={
bq(a,b,c,d,e){throw A.d(A.j("Unsupported compression type"))},
cp(a,b,c){return this.bq(a,b,c,null,null)}}
A.fh.prototype={}
A.f1.prototype={
sfT(a){this.c=t.T.a(a)}}
A.f2.prototype={
hl(a){var s,r,q,p,o=this,n=A.w(a,!1,null,0)
if(n.k()!==20000630)throw A.d(A.j("File is not an OpenEXR image file."))
s=o.d=n.C()
if(s!==2)throw A.d(A.j("Cannot read version "+s+" image files."))
s=o.e=n.bp()
if((s&4294967289)>>>0!==0)throw A.d(A.j("The file format version number's flag field contains unrecognized flags."))
if((s&16)===0){r=o.c
q=A.lv(r.length,(s&2)!==0,n)
if(q.w>0)B.c.D(r,q)}else for(s=o.c;!0;){q=A.lv(s.length,(o.e&2)!==0,n)
if(q.w<=0)break
B.c.D(s,q)}s=o.c
r=s.length
if(r===0)throw A.d(A.j("Error reading image header"))
for(p=0;p<s.length;s.length===r||(0,A.a6)(s),++p)s[p].l5(n)
o.jV(n)},
jV(a){var s,r,q,p,o=this
for(s=o.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q]
o.sP(0,Math.max(o.a,p.w))
o.sK(0,Math.max(o.b,p.x))
if(p.db)o.k7(p,a)
else o.k6(p,a)}},
k7(b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=this.e
b4===$&&A.c("flags")
s=(b4&16)!==0
b4=b5.b
b4.toString
r=b5.CW
q=b5.ay
p=A.o(b6,b3,0)
o=b5.c
n=b5.a
m=0
l=0
while(!0){k=b5.k1
k.toString
if(!(m<k))break
j=0
while(!0){k=b5.id
k.toString
if(!(j<k))break
k=l!==0
i=0
h=0
while(!0){g=b5.go
if(!(m<g.length))return A.a(g,m)
if(!(i<g[m]))break
f=0
while(!0){g=b5.fy
if(!(j<g.length))return A.a(g,j)
if(!(f<g[j]))break
if(k)break
if(!(l>=0&&l<q.length))return A.a(q,l)
g=q[l]
if(!(h>=0&&h<g.length))return A.a(g,h)
p.d=g[h]
if(s)if(p.k()!==n)throw A.d(A.j("Invalid Image Data"))
e=p.k()
d=p.k()
p.k()
p.k()
c=p.aj(p.k())
p.d=p.d+(c.c-c.d)
g=b5.dy
g.toString
b=d*g
a=b5.dx
a.toString
g=r.bq(c,e*a,b,a,g)
a=g.length
a0=new A.ae(g,0,a,0,!1)
a1=r.a
a2=r.b
a3=a-0
a4=o.length
a5=0
a6=0
while(!0){if(!(a6<a2&&b<this.b))break
for(a7=0;a7<a4;++a7){if(a5>=a3)break
if(!(a7<o.length))return A.a(o,a7)
a8=o[a7]
g=b5.dx
g.toString
a9=e*g
for(b0=0;b0<a1;++b0,++a9){g=a8.c
g===$&&A.c("dataType")
switch(g.a){case 1:g=a0.l()
a=$.N
a=a!=null?a:A.T()
if(!(g<a.length))return A.a(a,g)
b1=a[g]
break
case 2:b1=a0.l()
break
case 0:b1=a0.k()
break
default:b1=b3}g=a8.d
g===$&&A.c("dataSize")
a5+=g
g=a8.w
g===$&&A.c("isColorChannel")
if(g){g=b4.a
b2=g==null?b3:g.M(a9,b,b3)
if(b2==null)b2=new A.B()
g=a8.b
g===$&&A.c("nameType")
b2.h(0,g.a,b1)}else{g=a8.a
g===$&&A.c("name")
a=b4.b
g=a!=null?a.n(0,g):b3
if(g!=null)g.V(a9,b,b1,0,0)}}}++a6;++b}++f;++h}++i}++j;++l}++m}},
k6(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=this.e
a6===$&&A.c("flags")
s=(a6&16)!==0
a6=a7.b
a6.toString
r=a7.CW
q=a7.ay
if(0>=q.length)return A.a(q,0)
p=q[0]
o=a7.cx
n=A.o(a8,a5,0)
for(q=p.length,m=a7.c,l=r!=null,k=0,j=0;j<q;++j){n.d=p[j]
if(s)if(n.k()!==3.141592653589793)throw A.d(A.j("Invalid Image Data"))
i=n.k()
h=$.L()
h[0]=i
i=$.a8()
if(0>=i.length)return A.a(i,0)
h[0]=n.k()
g=n.aj(i[0])
n.d=n.d+(g.c-g.d)
if(l){i=r.cp(g,0,k)
f=new A.ae(i,0,i.length,0,!1)}else f=g
e=f.c-f.d
d=m.length
c=0
while(!0){if(!(c<o&&k<this.b))break
i=a7.cy
if(!(k>=0&&k<i.length))return A.a(i,k)
b=i[k]
if(b>=e)break
for(a=0;a<d;++a){if(b>=e)break
if(!(a<m.length))return A.a(m,a)
a0=m[a]
a1=a7.w
for(a2=0;a2<a1;++a2){i=a0.c
i===$&&A.c("dataType")
switch(i.a){case 1:i=f.l()
h=$.N
h=h!=null?h:A.T()
if(!(i<h.length))return A.a(h,i)
a3=h[i]
break
case 2:a3=f.l()
break
case 0:a3=f.k()
break
default:a3=a5}i=a0.d
i===$&&A.c("dataSize")
b+=i
i=a0.w
i===$&&A.c("isColorChannel")
if(i){i=a6.a
a4=i==null?a5:i.M(a2,k,a5)
if(a4==null)a4=new A.B()
i=a0.b
i===$&&A.c("nameType")
a4.h(0,i.a,a3)}else{i=a0.a
i===$&&A.c("name")
h=a6.b
i=h!=null?h.n(0,i):a5
if(i!=null)i.V(a2,k,a3,0,0)}}}++c;++k}}},
sP(a,b){this.a=A.k(b)},
sK(a,b){this.b=A.k(b)},
$iS:1}
A.du.prototype={
hm(a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4="dataType",a5="dataWindow",a6=A.I(t.N,t.I)
for(s=a2.e,r=t.t,q=t.L,p=a2.c,o=B.C;!0;){n=a9.cS()
if(n.length===0)break
a9.cS()
m=a9.aj(a9.k())
a9.d=a9.d+(m.c-m.d)
s.h(0,n,new A.f_())
switch(n){case"channels":for(;!0;){l=new A.f0()
l.hk(m)
k=l.a
k===$&&A.c("name")
if(k.length===0)break
j=l.w
j===$&&A.c("isColorChannel")
if(j){++a2.d
k=l.c
k===$&&A.c(a4)
if(k===B.as)o=B.C
else o=k===B.at?B.K:B.L}else{j=l.c
j===$&&A.c(a4)
if(j===B.as){j=a2.w
i=a2.x
a6.h(0,k,new A.cO(new Uint16Array(j*i),j,i,1))}else if(j===B.at){j=a2.w
i=a2.x
a6.h(0,k,new A.cP(new Float32Array(j*i),j,i,1))}else if(j===B.aX){j=a2.w
i=a2.x
a6.h(0,k,new A.cS(new Uint32Array(j*i),j,i,1))}}B.c.D(p,l)}break
case"chromaticities":k=new Float32Array(8)
a2.at=k
j=m.k()
i=$.L()
i[0]=j
j=$.bZ()
if(0>=j.length)return A.a(j,0)
k[0]=j[0]
k=a2.at
i[0]=m.k()
k[1]=j[0]
k=a2.at
i[0]=m.k()
k[2]=j[0]
k=a2.at
i[0]=m.k()
k[3]=j[0]
k=a2.at
i[0]=m.k()
k[4]=j[0]
k=a2.at
i[0]=m.k()
k[5]=j[0]
k=a2.at
i[0]=m.k()
k[6]=j[0]
k=a2.at
i[0]=m.k()
k[7]=j[0]
break
case"compression":k=m.a
j=m.d++
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
if(j>>>0!==j||j>=8)return A.a(B.bR,j)
a2.ax=B.bR[j]
break
case"dataWindow":k=m.k()
j=$.L()
j[0]=k
k=$.a8()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=m.k()
h=k[0]
j[0]=m.k()
g=k[0]
j[0]=m.k()
a2.shF(q.a(A.b([i,h,g,k[0]],r)))
k=a2.r
k===$&&A.c(a5)
a2.w=k[2]-k[0]+1
a2.x=k[3]-k[1]+1
break
case"displayWindow":k=m.k()
j=$.L()
j[0]=k
k=$.a8()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=m.k()
h=k[0]
j[0]=m.k()
g=k[0]
j[0]=m.k()
a2.skF(A.b([i,h,g,k[0]],r))
break
case"lineOrder":break
case"pixelAspectRatio":k=m.k()
$.L()[0]=k
k=$.bZ()
if(0>=k.length)return A.a(k,0)
break
case"screenWindowCenter":k=m.k()
j=$.L()
j[0]=k
k=$.bZ()
if(0>=k.length)return A.a(k,0)
j[0]=m.k()
break
case"screenWindowWidth":k=m.k()
$.L()[0]=k
k=$.bZ()
if(0>=k.length)return A.a(k,0)
break
case"tiles":a2.dx=m.k()
a2.dy=m.k()
k=m.a
j=m.d++
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
a2.fr=j&15
a2.fx=B.a.j(j,4)&15
break
case"type":f=m.cS()
if(f!=="deepscanline")if(f!=="deeptile")throw A.d(A.j("EXR Invalid type: "+f))
break
default:break}}s=a2.w
a2.b=A.Q(a3,a3,o,0,B.i,a2.x,a3,0,a2.d,a3,s,!1)
for(s=A.b0(a6,a6.r,a6.$ti.c);s.E();){r=s.d
q=a2.b
q.toString
k=a6.n(0,r)
k.toString
q.h9(r,k)}if(a2.db){s=a2.r
s===$&&A.c(a5)
a2.id=a2.i9(s[0],s[2],s[1],s[3])
s=a2.r
a2.k1=a2.ia(s[0],s[2],s[1],s[3])
if(a2.fr!==2)a2.k1=1
s=a2.id
s.toString
r=a2.r
a2.sjo(a2.ep(s,r[0],r[2],a2.dx,a2.fx))
r=a2.k1
r.toString
s=a2.r
a2.sjp(a2.ep(r,s[1],s[3],a2.dy,a2.fx))
s=a2.i8()
a2.k2=s
r=a2.dx
r.toString
r=s*r
a2.k3=r
a2.CW=A.lb(a2.ax,a2,r,a2.dy)
b0.a=b0.b=0
r=a2.id
r.toString
s=a2.k1
s.toString
a2.sf0(A.kk(r*s,new A.hS(b0,a2),t.bv))}else{s=a2.x
r=a2.ch=new Uint32Array(s+1)
for(q=p.length,k=a2.r,j=a2.w,e=0;e<q;++e){d=p[e]
i=d.d
i===$&&A.c("dataSize")
h=d.f
h===$&&A.c("xSampling")
c=B.a.aE(i*j,h)
for(i=d.r,b=0;b<s;++b){k===$&&A.c(a5)
h=k[1]
i===$&&A.c("ySampling")
if(B.a.a6(b+h,i)===0)r[b]=r[b]+c}}for(a=0,b=0;b<s;++b)a=Math.max(a,r[b])
s=A.lb(a2.ax,a2,a,a3)
a2.CW=s
s=a2.cx=s.cR()
r=a2.ch
q=r.length
p=new Uint32Array(q)
a2.cy=p
for(--q,a0=0,a1=0;a1<=q;++a1){if(B.a.a6(a1,s)===0)a0=0
p[a1]=a0
a0+=r[a1]}s=B.a.aE(a2.x+s,s)
a2.sf0(A.b([new Uint32Array(s-1)],t.hh))}},
i9(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.k(r)
s=(q===0?o.d7(r):o.d1(r))+1
break
case 2:p=b-a+1
s=(o.fx===0?o.d7(p):o.d1(p))+1
break
default:throw A.d(A.j("Unknown LevelMode format."))}return s},
ia(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.k(r)
s=(q===0?o.d7(r):o.d1(r))+1
break
case 2:p=d-c+1
s=(o.fx===0?o.d7(p):o.d1(p))+1
break
default:throw A.d(A.j("Unknown LevelMode format."))}return s},
d7(a){var s
for(s=0;a>1;){++s
a=B.a.j(a,1)}return s},
d1(a){var s,r
for(s=0,r=0;a>1;){if((a&1)!==0)r=1;++s
a=B.a.j(a,1)}return s+r},
i8(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p].d
o===$&&A.c("dataSize")
q+=o}return q},
ep(a,b,c,d,e){var s,r,q,p,o,n,m=J.am(a,t.p)
for(s=e===1,r=c-b+1,q=0;q<a;++q){p=B.a.R(1,q)
o=B.a.aE(r,p)
if(s&&o*p<r)++o
n=Math.max(o,1)
d.toString
m[q]=B.a.aE(n+d-1,d)}return m},
skF(a){t.T.a(a)},
shF(a){this.r=t.L.a(a)},
sf0(a){this.ay=t.gZ.a(a)},
sjo(a){this.fy=t.j.a(a)},
sjp(a){this.go=t.j.a(a)}}
A.hS.prototype={
$1(a){var s,r,q,p,o=this.b,n=o.fy,m=this.a,l=m.b
if(!(l<n.length))return A.a(n,l)
n=n[l]
s=o.go
r=m.a
if(!(r<s.length))return A.a(s,r)
s=s[r]
q=new Uint32Array(n*s)
p=l+1
m.b=p
if(p===o.id){m.b=0
m.a=r+1}return q},
$S:20}
A.fi.prototype={
l5(a){var s,r,q,p,o,n=this
if(n.db)for(s=0;s<n.ay.length;++s){r=0
while(!0){q=n.ay
if(!(s<q.length))return A.a(q,s)
q=q[s]
if(!(r<q.length))break
q[r]=a.e4();++r}}else{q=n.ay
if(0>=q.length)return A.a(q,0)
p=q[0].length
for(s=0;s<p;++s){q=n.ay
if(0>=q.length)return A.a(q,0)
q=q[0]
o=a.e4()
if(!(s<q.length))return A.a(q,s)
q[s]=o}}}}
A.fj.prototype={
hy(a,b,c){var s,r,q,p=this,o=a.c.length,n=J.am(o,t.eO)
for(s=0;s<o;++s)n[s]=new A.ex()
p.shG(t.gR.a(n))
r=p.w
r.toString
q=B.a.S(r*p.x,2)
p.z=new Uint16Array(q)},
cR(){return this.x},
bq(a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="_channelData"
if(b0==null)b0=a5.c.w
if(b1==null)b1=a5.c.cx
s=a8+b0-1
r=a9+b1-1
q=a5.c
p=q.w
if(s>p)s=p-1
p=q.x
if(r>p)r=p-1
a5.a=s-a8+1
a5.b=r-a9+1
o=q.c
n=o.length
for(m=0,l=0;l<n;++l){k=o[l]
q=a5.y
q===$&&A.c(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
j.b=j.a=m
q=k.f
q===$&&A.c("xSampling")
i=B.a.aE(a8,q)
h=B.a.aE(s,q)
q=i*q<a8?0:1
q=h-i+q
j.c=q
p=k.r
p===$&&A.c("ySampling")
i=B.a.aE(a9,p)
h=B.a.aE(r,p)
g=i*p<a9?0:1
g=h-i+g
j.d=g
j.e=p
p=k.d
p===$&&A.c("dataSize")
p=p/2|0
j.f=p
m+=q*g*p}f=a7.l()
e=a7.l()
if(e>=8192)throw A.d(A.j("Error in header for PIZ-compressed data (invalid bitmap size)."))
d=new Uint8Array(8192)
if(f<=e){c=a7.ae(e-f+1)
q=c.d
b=c.c-q
for(p=c.a,g=p.length,a=f,l=0;l<b;++l,a=a0){a0=a+1
a1=q+l
if(!(a1>=0&&a1<g))return A.a(p,a1)
a1=p[a1]
if(!(a<8192))return A.a(d,a)
d[a]=a1}}a2=new Uint16Array(65536)
a3=a5.ka(d,a2)
A.np(a7,a7.k(),a5.z,m)
for(l=0;l<n;++l){q=a5.y
q===$&&A.c(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
a=0
while(!0){q=j.f
q===$&&A.c("size")
if(!(a<q))break
p=a5.z
p.toString
g=j.a
g===$&&A.c("start")
a1=j.c
a1===$&&A.c("nx")
a4=j.d
a4===$&&A.c("ny")
A.ns(p,g+a,a1,q,a4,a1*q,a3);++a}}q=a5.z
q.toString
a5.i_(a2,q,m)
q=a5.r
if(q==null){q=a5.w
q.toString
q=a5.r=A.a7(!1,q*a5.x+73728)}q.a=0
for(;a9<=r;++a9)for(l=0;l<n;++l){q=a5.y
q===$&&A.c(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
q=j.e
q===$&&A.c("ys")
if(B.a.a6(a9,q)!==0)continue
q=j.c
q===$&&A.c("nx")
p=j.f
p===$&&A.c("size")
a8=q*p
for(;a8>0;--a8){q=a5.r
q.toString
p=a5.z
p.toString
g=j.b
g===$&&A.c("end")
j.b=g+1
if(!(g>=0&&g<p.length))return A.a(p,g)
q.a_(p[g])}}q=a5.r
return A.y(q.c.buffer,0,q.a)},
cp(a,b,c){return this.bq(a,b,c,null,null)},
i_(a,b,c){var s,r,q=t.L
q.a(a)
q.a(b)
for(q=b.length,s=0;s<c;++s){if(!(s<q))return A.a(b,s)
r=b[s]
if(!(r>=0&&r<65536))return A.a(a,r)
b[s]=a[r]}},
ka(a,b){var s,r,q,p,o
for(s=0,r=0;r<65536;++r){if(r!==0){q=r>>>3
if(!(q<8192))return A.a(a,q)
q=(a[q]&1<<(r&7))>>>0!==0}else q=!0
if(q){p=s+1
if(!(s<65536))return A.a(b,s)
b[s]=r
s=p}}for(p=s;p<65536;p=o){o=p+1
if(!(p<65536))return A.a(b,p)
b[p]=0}return s-1},
shG(a){this.y=t.gR.a(a)}}
A.ex.prototype={}
A.fk.prototype={
cR(){return this.x},
bq(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.Y.cL(A.c5(t.L.a(a4.a1()),1,null,0),!1),a3=a1.y
if(a3==null){a3=a1.w
a3.toString
a3=a1.y=A.a7(!1,a1.x*a3)}a3.a=0
s=A.b([0,0,0,0],t.t)
r=new Uint32Array(1)
q=A.y(r.buffer,0,null)
if(a7==null)a7=a1.c.w
if(a8==null)a8=a1.c.cx
p=a5+a7-1
o=a6+a8-1
a3=a1.c
n=a3.w
if(p>n)p=n-1
n=a3.x
if(o>n)o=n-1
a1.a=p-a5+1
a1.b=o-a6+1
a3=a3.c
m=a3.length
for(n=q.length,l=a2.length,k=a6,j=0;k<=o;++k)for(i=0;i<m;++i){if(!(i<a3.length))return A.a(a3,i)
h=a3[i]
g=h.r
g===$&&A.c("ySampling")
if(B.a.a6(a6,g)!==0)continue
g=h.f
g===$&&A.c("xSampling")
f=B.a.aE(a5,g)
e=B.a.aE(p,g)
g=f*g<a5?0:1
d=e-f+g
if(0>=1)return A.a(r,0)
r[0]=0
g=h.c
g===$&&A.c("dataType")
switch(g.a){case 0:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
B.c.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.c.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.m(q[a0])}}break
case 1:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
j=s[1]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
r[0]=r[0]+((g<<8|b)>>>0)
for(a0=0;a0<2;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.m(q[a0])}}break
case 2:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
B.c.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.c.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.m(q[a0])}}break}}a3=a1.y
return A.y(a3.c.buffer,0,a3.a)},
cp(a,b,c){return this.bq(a,b,c,null,null)}}
A.fl.prototype={
cR(){return 1},
bq(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c,a=A.a7(!1,(b-a0.d)*2)
if(a3==null)a3=c.c.w
if(a4==null)a4=c.c.cx
s=a1+a3-1
r=a2+a4-1
q=c.c
p=q.w
if(s>p)s=p-1
q=q.x
if(r>q)r=q-1
c.a=s-a1+1
c.b=r-a2+1
for(;q=a0.d,q<b;){p=a0.a
a0.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
$.ar()[0]=q
q=$.aC()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){n=-o
for(;m=n-1,n>0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.m(q[p])}}else for(n=o;m=n-1,n>=0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.m(q[p])}}l=A.y(a.c.buffer,0,a.a)
k=l.length
for(j=1;j<k;++j)l[j]=l[j-1]+l[j]-128
b=c.r
if(b==null||b.length!==k)b=c.r=new Uint8Array(k)
q=B.a.S(k+1,2)
for(i=0,h=0;!0;q=d,i=f){if(h<k){b.toString
g=h+1
f=i+1
if(!(i<k))return A.a(l,i)
p=l[i]
e=b.length
if(!(h<e))return A.a(b,h)
b[h]=p}else break
if(g<k){h=g+1
d=q+1
if(!(q<k))return A.a(l,q)
q=l[q]
if(!(g<e))return A.a(b,g)
b[g]=q}else break}b.toString
return b},
cp(a,b,c){return this.bq(a,b,c,null,null)},
B(a){return A.C(this.w)}}
A.dN.prototype={
cR(){return this.x},
bq(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.Y.cL(A.c5(t.L.a(a.a1()),1,null,0),!1)
if(d==null)d=f.c.w
if(a0==null)a0=f.c.cx
s=b+d-1
r=c+a0-1
q=f.c
p=q.w
if(s>p)s=p-1
q=q.x
if(r>q)r=q-1
f.a=s-b+1
f.b=r-c+1
o=e.length
for(n=1;n<o;++n)e[n]=e[n-1]+e[n]-128
q=f.y
if(q==null||q.length!==o)q=f.y=new Uint8Array(o)
p=B.a.S(o+1,2)
for(m=0,l=0;!0;p=g,m=j){if(l<o){q.toString
k=l+1
j=m+1
if(!(m<o))return A.a(e,m)
i=e[m]
h=q.length
if(!(l<h))return A.a(q,l)
q[l]=i}else break
if(k<o){l=k+1
g=p+1
if(!(p<o))return A.a(e,p)
p=e[p]
if(!(k<h))return A.a(q,k)
q[k]=p}else break}q.toString
return q},
cp(a,b,c){return this.bq(a,b,c,null,null)},
B(a){return A.C(this.w)}}
A.hR.prototype={
aw(a){var s=this.a
if(s==null)return null
s=s.c
if(!(a<s.length))return A.a(s,a)
return s[a].b},
bc(a,b,c){var s=new A.f2(A.b([],t.dw))
s.hl(b)
this.a=s
return this.aw(0)}}
A.dB.prototype={
e8(){var s,r,q,p,o,n,m,l=this
if(l.c==null)return l.d
s=l.d
r=s.a
q=new A.aG(new Uint8Array(r*4),r,4)
for(p=0;p<r;++p){o=s.aZ(p)
n=s.aY(p)
m=s.aX(p)
q.cZ(p,o,n,m,p===l.c?0:255)}return q}}
A.dC.prototype={
hn(a){var s,r,q,p,o,n,m,l,k=this
k.a=a.l()
k.b=a.l()
k.c=a.l()
k.d=a.l()
s=a.C()
k.e=(s&64)!==0
if((s&128)!==0){k.f=A.le(B.a.R(1,(s&7)+1))
for(r=0;q=k.f,r<q.b;++r){p=a.a
o=a.d
n=a.d=o+1
m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
l=a.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
a.d=l+1
if(!(l>=0&&l<m))return A.a(p,l)
l=p[l]
q.d.aU(r,o,n,l)}}k.x=a.d-a.b}}
A.fm.prototype={}
A.dD.prototype={$iS:1}
A.hV.prototype={
bh(a){var s,r,q,p,o,n,m,l,k,j=this
j.f=A.w(a,!1,null,0)
j.a=new A.dD(A.b([],t.cM))
if(!j.eJ())return null
try{for(;p=j.f,o=p.d,o<p.c;){n=p.a
m=p.d=o+1
l=n.length
if(!(o>=0&&o<l))return A.a(n,o)
s=n[o]
switch(s){case 44:r=j.fc()
if(r==null){p=j.a
return p}p=r
p.r=j.e
p.w=j.c===2
if(j.b!==0){if(r.f==null&&j.a.e!=null){p=j.a.e
o=p.a
n=p.b
m=p.c
p=p.d
r.f=new A.dB(o,n,m,new A.aG(new Uint8Array(A.t(p.c)),p.a,p.b))}if(r.f!=null)r.f.c=j.d}B.c.D(j.a.r,r)
break
case 33:p.d=m+1
if(!(m>=0&&m<l))return A.a(n,m)
q=n[m]
if(J.bF(q,255)){p=j.f
o=p.a
n=p.d++
if(!(n>=0&&n<o.length))return A.a(o,n)
if(p.af(o[n])==="NETSCAPE2.0"){o=p.a
n=p.d
m=p.d=n+1
l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
p.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
if(n===3&&m===1)j.r=p.l()}else j.dg()}else if(J.bF(q,249)){p=j.f
p.toString
j.jR(p)}else j.dg()
break
case 59:p=j.a
return p
default:break}}}catch(k){}return j.a},
jR(a){var s,r,q,p,o=this
a.C()
s=a.C()
o.e=a.l()
o.d=a.C()
a.C()
o.c=B.a.j(s,2)&7
o.b=s&1
r=a.d0(1,0)
q=r.a
r=r.d
if(!(r>=0&&r<q.length))return A.a(q,r)
if(q[r]===44){++a.d
p=o.fc()
if(p==null)return
p.r=o.e
p.w=o.c===2
if(o.b!==0){r=p.f
if(r==null&&o.a.e!=null){r=o.a.e
r.toString
r=p.f=A.ny(r)}if(r!=null)r.c=o.d}B.c.D(o.a.r,p)}},
aw(a){var s,r,q,p=this,o=p.f
if(o==null||p.a==null)return null
s=p.a.r
r=s.length
if(a>=r||!1)return null
if(!(a<r))return A.a(s,a)
q=s[a]
o.toString
s=q.x
s===$&&A.c("_inputPosition")
o.d=s
return p.ix(q)},
bc(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(c.bh(a0)==null)return b
if(c.a.r.length===1||!1)return c.aw(0)
for(s=b,r=s,q=0;p=c.a.r,q<p.length;++q){a1=p[q]
o=c.aw(q)
if(o==null)return b
o.y=a1.r*10
if(r==null||s==null){o.r=c.r
s=o
r=s
continue}p=o.a
n=p==null
m=n?b:p.a
if(m==null)m=0
l=s.a
k=l==null
j=k?b:l.a
if(m===(j==null?0:j)){p=n?b:p.b
if(p==null)p=0
n=k?b:l.b
if(p===(n==null?0:n)){p=a1.a
p===$&&A.c("x")
if(p===0){p=a1.b
p===$&&A.c("y")
p=p===0&&a1.w}else p=!1}else p=!1}else p=!1
if(p){r.aL(o)
s=o
continue}if(a1.w){i=a1.f
if(!(i!=null)){p=c.a.e
p.toString
i=p}p=k?b:l.a
if(p==null)p=0
n=k?b:l.b
if(n==null)n=0
s=A.Q(b,b,B.e,0,B.i,n,b,0,1,i.e8(),p,!1)
p=c.a.c.a
n=p.length
if(n!==0){if(0>=n)return A.a(p,0)
p=p[0]}else p=0
n=i.d
h=n.aZ(p)
g=n.aY(p)
f=n.aX(p)
e=p===i.c?0:255
p=new Uint8Array(4)
if(0>=4)return A.a(p,0)
p[0]=h
if(1>=4)return A.a(p,1)
p[1]=g
if(2>=4)return A.a(p,2)
p[2]=f
if(3>=4)return A.a(p,3)
p[3]=e
n=s.a
if(n!=null)n.aO(0,new A.bk(p))}else s=A.aZ(s,!1,!1)
s.y=o.y
for(p=o.a,p=p.gJ(p);p.E();){d=p.gU()
if(d.gv()!==0){n=d.gb4(d)
m=a1.a
m===$&&A.c("x")
l=d.gb5(d)
k=a1.b
k===$&&A.c("y")
s.bX(n+m,l+k,d)}}r.aL(s)}return r},
fc(){var s,r=this.f
if(r.d>=r.c)return null
s=new A.fm()
s.hn(r);++this.f.d
this.dg()
return s},
ix(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(i.w==null){i.w=new Uint8Array(256)
i.x=new Uint8Array(4095)
i.y=new Uint8Array(4096)
i.z=new Uint32Array(4096)}s=i.Q=i.f.C()
r=B.a.W(1,s)
i.dy=r;++r
i.dx=r
i.db=r+1;++s
i.cy=s
i.cx=B.a.W(1,s)
i.ay=0
i.CW=4098
i.at=i.ax=0
i.w[0]=0
s=i.z
s.toString
B.W.aW(s,0,4096,4098)
s=a.c
s===$&&A.c("width")
r=a.d
r===$&&A.c("height")
q=a.a
q===$&&A.c("x")
p=i.a
if(q+s<=p.a){q=a.b
q===$&&A.c("y")
q=q+r>p.b}else q=!0
if(q)return h
o=a.f
if(!(o!=null)){q=p.e
q.toString
o=q}i.as=s*r
n=A.Q(h,h,B.e,0,B.i,r,h,0,1,o.e8(),s,!1)
m=new Uint8Array(s)
s=a.e
s===$&&A.c("interlaced")
if(s){s=a.b
s===$&&A.c("y")
for(r=s+r,l=0,k=0;l<4;++l)for(j=s+B.d7[l];j<r;j+=B.dV[l],++k){if(!i.eK(m))return n
i.fi(n,j,o,m)}}else for(j=0;j<r;++j){if(!i.eK(m))return n
i.fi(n,j,o,m)}return n},
fi(a,b,c,d){var s,r,q,p=d.length
for(s=0;s<p;++s){r=d[s]
q=a.a
if(q!=null)q.V(s,b,r,0,0)}},
eJ(){var s,r,q,p,o,n,m,l,k,j=this,i=j.f.af(6)
if(i!=="GIF87a"&&i!=="GIF89a")return!1
s=j.a
s.toString
s.a=j.f.l()
s=j.a
s.toString
s.b=j.f.l()
r=j.f.C()
s=j.a
s.toString
s.c=new A.bk(new Uint8Array(A.t(A.b([j.f.C()],t.t))));++j.f.d
if((r&128)!==0){s=j.a
s.toString
s.e=A.le(B.a.R(1,(r&7)+1))
for(q=0;s=j.a.e,q<s.b;++q){p=j.f
o=p.a
n=p.d
m=p.d=n+1
l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
k=p.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
p.d=k+1
if(!(k>=0&&k<l))return A.a(o,k)
k=o[k]
s.d.aU(q,n,m,k)}}j.a.toString
return!0},
eK(a){var s=this,r=s.as
r.toString
s.as=r-a.length
if(!s.iI(a))return!1
if(s.as===0)s.dg()
return!0},
dg(){var s,r,q,p=this.f
if(p.d>=p.c)return!0
s=p.C()
while(!0){if(s!==0){p=this.f
p=p.d<p.c}else p=!1
if(!p)break
p=this.f
r=p.d+=s
if(r>=p.c)return!0
q=p.a
p.d=r+1
if(!(r>=0&&r<q.length))return A.a(q,r)
s=q[r]}return!0},
iI(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_stack",f="_suffix",e=h.ay
if(e>4095)return!1
s=a.length
if(e!==0){r=0
while(!0){if(!(e!==0&&r<s))break
q=r+1
p=h.x
p===$&&A.c(g)
e=h.ay=e-1
if(!(e>=0))return A.a(p,e)
p=p[e]
if(!(r<s))return A.a(a,r)
a[r]=p
r=q}}else r=0
for(;r<s;){o=h.ch=h.iH()
if(o==null)return!1
e=h.dx
if(o===e)return!1
p=h.dy
if(o===p){for(p=h.z,n=0;n<=4095;++n)p[n]=4098
h.db=e+1
e=h.Q+1
h.cy=e
h.cx=B.a.W(1,e)
h.CW=4098}else{if(o<p){q=r+1
if(!(r>=0))return A.a(a,r)
a[r]=o
r=q}else{e=h.z
e.toString
if(o>>>0!==o||o>=4096)return A.a(e,o)
if(e[o]===4098){m=h.db-2
if(o===m){o=h.CW
l=h.y
l===$&&A.c(f)
k=h.x
k===$&&A.c(g)
j=h.ay++
p=h.dM(e,o,p)
if(!(j>=0&&j<4095))return A.a(k,j)
k[j]=p
if(!(m>=0&&m<4096))return A.a(l,m)
l[m]=p}else return!1}n=0
while(!0){i=n+1
if(!(n<=4095&&o>h.dy&&o<=4095))break
e=h.x
e===$&&A.c(g)
p=h.ay++
m=h.y
m===$&&A.c(f)
if(!(o>=0&&o<4096))return A.a(m,o)
m=m[o]
if(!(p>=0&&p<4095))return A.a(e,p)
e[p]=m
m=h.z
m.toString
if(!(o<4096))return A.a(m,o)
o=m[o]
n=i}if(i>=4095||o>4095)return!1
e=h.x
e===$&&A.c(g)
p=h.ay++
if(!(p>=0&&p<4095))return A.a(e,p)
e[p]=o
while(!0){e=h.ay
if(!(e!==0&&r<s))break
q=r+1
p=h.x;--e
h.ay=e
if(!(e>=0&&e<4095))return A.a(p,e)
e=p[e]
if(!(r>=0&&r<s))return A.a(a,r)
a[r]=e
r=q}}e=h.CW
if(e!==4098){p=h.z
p.toString
m=h.db-2
if(!(m>=0&&m<4096))return A.a(p,m)
m=p[m]===4098
p=m}else p=!1
if(p){p=h.z
p.toString
m=h.db-2
if(!(m>=0&&m<4096))return A.a(p,m)
p[m]=e
l=h.ch
k=h.y
j=h.dy
if(l===m){k===$&&A.c(f)
k[m]=h.dM(p,e,j)}else{k===$&&A.c(f)
l.toString
k[m]=h.dM(p,l,j)}}e=h.ch
e.toString
h.CW=e}}return!0},
iH(){var s,r,q,p,o=this
if(o.cy>12)return null
for(;s=o.ax,r=o.cy,s<r;){s=o.i4()
s.toString
r=o.at
q=o.ax
o.at=(r|B.a.W(s,q))>>>0
o.ax=q+8}q=o.at
if(!(r>=0&&r<13))return A.a(B.bU,r)
p=B.bU[r]
o.at=B.a.a9(q,r)
o.ax=s-r
s=o.db
if(s<4097){++s
o.db=s
s=s>o.cx&&r<12}else s=!1
if(s){o.cx=o.cx<<1>>>0
o.cy=r+1}return q&p},
dM(a,b,c){var s,r,q=0
while(!0){if(b>c){s=q+1
r=q<=4095
q=s}else r=!1
if(!r)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
i4(){var s,r,q=this,p=q.w,o=p[0]
if(o===0){p[0]=q.f.C()
p=q.w
o=p[0]
if(o===0)return null
B.m.bC(p,1,1+o,q.f.ae(o).a1())
p=q.w
s=p[1]
p[1]=2
p[0]=p[0]-1}else{r=p[1]
p[1]=r+1
if(!(r<256))return A.a(p,r)
s=p[r]
p[0]=o-1}return s}}
A.hW.prototype={
fu(a,b){var s,r,q,p=this
if(p.fx==null){p.fx=A.a7(!1,8192)
if(!a.gaH()){s=A.km(a,256,10)
p.y=s
p.w=A.mC(a,B.aW,s,!1)}else p.w=a
p.x=b
p.z=a.gP(a)
p.Q=a.gK(a)
return}if(p.as===0){s=p.z
s===$&&A.c("_width")
r=p.Q
r===$&&A.c("_height")
p.fs(s,r)
p.fm()}s=p.w
s.toString
p.fq(s)
s=p.w
s.toString
r=p.z
r===$&&A.c("_width")
q=p.Q
q===$&&A.c("_height")
p.ei(s,r,q);++p.as
if(!a.gaH()){s=A.km(a,256,10)
p.y=s
p.w=A.mC(a,B.aW,s,!1)}else p.w=a
p.x=b},
aL(a){return this.fu(a,null)},
dl(){var s,r,q,p,o=this
if(o.fx==null)return null
if(o.as===0){s=o.z
s===$&&A.c("_width")
r=o.Q
r===$&&A.c("_height")
o.fs(s,r)
o.fm()}s=o.w
s.toString
o.fq(s)
s=o.w
s.toString
r=o.z
r===$&&A.c("_width")
q=o.Q
q===$&&A.c("_height")
o.ei(s,r,q)
o.fx.m(59)
o.y=o.w=null
o.as=0
q=o.fx
p=A.y(q.c.buffer,0,q.a)
o.fx=null
return p},
bw(a){var s,r,q,p,o=this
if(a.gai().length<=1||!1){o.aL(a)
s=o.dl()
s.toString
return s}o.b=a.r
for(s=a.gai(),r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q]
o.fu(p,B.a.S(p.y,10))}s=o.dl()
s.toString
return s},
ei(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(!a.gaH())throw A.d(A.j("GIF can only encode palette images."))
s=a.a
r=s==null?null:s.gL()
q=r.a
p=this.fx
p.m(44)
p.a_(0)
p.a_(0)
p.a_(b)
p.a_(c)
o=A.y(r.ga0(r),0,null)
p.m(135)
n=r.b
if(n===3)p.a3(o)
else if(n===4)for(s=o.length,m=0,l=0;m<q;++m,l+=4){if(!(l<s))return A.a(o,l)
p.m(o[l])
k=l+1
if(!(k<s))return A.a(o,k)
p.m(o[k])
k=l+2
if(!(k<s))return A.a(o,k)
p.m(o[k])}else if(n===1||n===2)for(s=o.length,m=0,l=0;m<q;++m,l+=n){if(!(l>=0&&l<s))return A.a(o,l)
j=o[l]
p.m(j)
p.m(j)
p.m(j)}for(m=q;m<256;++m){p.m(0)
p.m(0)
p.m(0)}this.iR(a,b,c)},
iR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={}
e.fr=e.ax=e.at=0
e.dy=new Uint8Array(256)
e.fx.m(8)
s=new Int32Array(5003)
r=new Int32Array(5003)
q=a.a
p=q.gJ(q)
p.E()
e.ay=e.ch=9
e.cx=511
e.cy=256
e.CW=257
e.dx=!1
e.db=258
d.a=!1
o=new A.hX(d,p)
n=o.$0()
for(m=0,l=5003;l<65536;l*=2)++m
m=8-m
for(k=0;k<5003;++k)s[k]=-1
e.cC(e.cy)
for(j=!0;j;){i=o.$0()
for(j=!1;i!==-1;){h=(i<<12>>>0)+n
k=(B.a.W(i,m)^n)>>>0
if(!(k<5003))return A.a(s,k)
q=s[k]
if(q===h){n=r[k]
i=o.$0()
continue}else if(q>=0){g=5003-k
if(k===0)g=1
do{k-=g
if(k<0)k+=5003
if(!(k>=0&&k<5003))return A.a(s,k)
q=s[k]
if(q===h){n=r[k]
j=!0
break}}while(q>=0)
if(j)break}e.cC(n)
q=e.db
if(q<4096){e.db=q+1
r[k]=q
s[k]=h}else{for(k=0;k<5003;++k)s[k]=-1
q=e.cy
e.db=q+2
e.dx=!0
e.cC(q)}f=o.$0()
n=i
i=f}}e.cC(n)
e.cC(e.CW)
e.fx.m(0)},
cC(a){var s,r=this,q=r.at,p=r.ax
if(!(p>=0&&p<17))return A.a(B.bi,p)
q&=B.bi[p]
r.at=q
if(p>0){q=(q|B.a.R(a,p))>>>0
r.at=q}else{r.at=a
q=a}p+=r.ay
r.ax=p
for(;p>=8;){r.ek(q&255)
q=B.a.j(r.at,8)
r.at=q
p=r.ax-=8}if(r.db>r.cx||r.dx)if(r.dx){s=r.ch
r.ay=s
r.cx=B.a.R(1,s)-1
r.dx=!1}else{s=++r.ay
if(s===12)r.cx=4096
else r.cx=B.a.R(1,s)-1}if(a===r.CW){for(;p>0;){r.ek(q&255)
q=B.a.j(r.at,8)
r.at=q
p=r.ax-=8}r.fn()}},
fn(){var s,r=this,q=r.fr
if(q>0){r.fx.m(q)
q=r.fx
q.toString
s=r.dy
s===$&&A.c("_block")
q.cW(s,r.fr)
r.fr=0}},
ek(a){var s,r,q=this,p=q.dy
p===$&&A.c("_block")
s=q.fr
r=s+1
q.fr=r
if(!(s<256))return A.a(p,s)
p[s]=a
if(r>=254)q.fn()},
fm(){var s,r=this
r.fx.m(33)
r.fx.m(255)
r.fx.m(11)
r.fx.a3(new A.as("NETSCAPE2.0"))
s=r.fx
s.toString
s.a3(A.b([3,1],t.t))
r.fx.a_(r.b)
r.fx.m(0)},
fq(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.fx.m(33)
h.fx.m(249)
h.fx.m(4)
s=a.a
r=s==null?null:s.gL()
q=r.b
p=q-1
if(q===4||q===2){o=A.y(r.ga0(r),0,null)
n=r.a
s=o.length
k=p
j=0
while(!0){if(!(j<n)){m=0
l=0
break}if(!(k>=0&&k<s))return A.a(o,k)
if(o[k]===0){m=j
l=1
break}++j
k+=q}}else{m=0
l=0}h.fx.m(l|8)
s=h.fx
s.toString
i=h.x
s.a_(i==null?80:i)
h.fx.m(m)
h.fx.m(0)},
fs(a,b){var s=this
s.fx.a3(new A.as("GIF89a"))
s.fx.a_(a)
s.fx.a_(b)
s.fx.m(0)
s.fx.m(0)
s.fx.m(0)}}
A.hX.prototype={
$0(){var s,r,q=this.a
if(q.a)return-1
s=this.b
r=A.k(J.n6(s.gU()))
if(!s.E())q.a=!0
return r},
$S:21}
A.cN.prototype={
a8(){return"IcoType."+this.b}}
A.f9.prototype={$iS:1}
A.fa.prototype={}
A.f7.prototype={
gK(a){return B.a.S(A.bj.prototype.gK.call(this,this),2)},
gcN(){return!(this.d===40&&this.f===32)&&A.bj.prototype.gcN.call(this)}}
A.i_.prototype={
bc(a,b,c){var s,r,q,p=this,o=A.w(b,!1,null,0)
p.a=o
s=p.b=A.lh(o)
if(s==null)return null
if(s.e.length===1||!1)return p.aw(0)
for(r=null,q=0;q<p.b.e.length;++q){c=p.aw(q)
if(c==null)continue
if(r==null){c.w=B.i
r=c}else r.aL(c)}return r},
aw(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=this.a
if(a8!=null){s=this.b
s=s==null||a9>=s.d}else s=!0
if(s)return a7
s=this.b.e
if(!(a9<s.length))return A.a(s,a9)
r=s[a9]
s=a8.a
a8=a8.b+r.e
q=r.d
p=J.hD(s,a8,a8+q)
o=new A.fN(A.lw())
t.D.a(p)
if(o.dm(p))return o.c1(0,p)
n=A.a7(!1,14)
n.a_(19778)
n.G(q)
n.G(0)
n.G(0)
a8=A.w(p,!1,a7,0)
s=A.l3(A.w(A.y(n.c.buffer,0,n.a),!1,a7,0))
q=a8.d
m=a8.k()
l=a8.k()
k=$.L()
k[0]=l
l=$.a8()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=a8.k()
l=l[0]
i=a8.l()
h=a8.l()
g=a8.k()
if(!(g<14))return A.a(B.ag,g)
g=B.ag[g]
a8.k()
k[0]=a8.k()
k[0]=a8.k()
k=a8.k()
a8.k()
f=new A.f7(s,j,l,m,i,h,g,k,q)
f.eg(a8,s)
if(m!==40&&i!==1)return a7
e=k===0&&h<=8?40+4*B.a.R(1,h):40+4*k
s.b=e
n.a-=4
n.G(e)
d=A.w(p,!1,a7,0)
c=new A.hN(!0)
c.a=d
c.b=f
b=c.aw(0)
if(h>=32)return b
a=32-B.a.a6(j,32)
a0=B.a.S(a===32?j:j+a,8)
for(a8=1/l<0,s=l<0,l=l===0,a1=0;a1<B.a.S(A.bj.prototype.gK.call(f,f),2);++a1){if(!(l?a8:s))a2=a1
else{q=b.a
q=q==null?a7:q.b
a2=(q==null?0:q)-1-a1}a3=d.aj(a0)
d.d=d.d+(a3.c-a3.d)
q=b.a
a4=q==null?a7:q.M(0,a2,a7)
if(a4==null)a4=new A.B()
for(a5=0;a5<j;){q=a3.a
m=a3.d++
if(!(m>=0&&m<q.length))return A.a(q,m)
m=q[m]
a6=7
while(!0){if(!(a6>-1&&a5<j))break
if((m&B.a.W(1,a6))>>>0!==0)a4.sv(0)
a4.E();++a5;--a6}}}return b}}
A.j6.prototype={
bw(a){if(a.gai().length>1&&!0)return this.fH(a.gai())
else return this.fH(A.b([a],t.g))},
fH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
t.Y.a(a)
s=a.length
r=A.a7(!1,8192)
r.a_(0)
r.a_(1)
r.a_(s)
q=6+s*16
p=A.b([A.b([],t.t)],t.S)
for(o=a.length,n=0,m=0;m<a.length;a.length===o||(0,A.a6)(a),++m){l=a[m]
k=l.a
j=k==null
i=j?g:k.a
if((i==null?0:i)<=256){i=j?g:k.b
i=(i==null?0:i)>256}else i=!0
if(i)throw A.d(A.la("ICO and CUR support only sizes until 256"))
k=j?g:k.a
r.m(k==null?0:k)
k=l.a
k=k==null?g:k.b
r.m(k==null?0:k)
r.m(0)
r.m(0)
r.a_(0)
r.a_(32)
h=new A.fO().bw(l)
k=h.length
r.G(k)
r.G(q)
q+=k;++n
B.c.D(p,h)}for(o=p.length,m=0;m<p.length;p.length===o||(0,A.a6)(p),++m)r.a3(p[m])
return A.y(r.c.buffer,0,r.a)}}
A.f8.prototype={}
A.eU.prototype={}
A.bH.prototype={}
A.c3.prototype={}
A.dE.prototype={}
A.i9.prototype={}
A.br.prototype={
shH(a){this.r=t.fZ.a(a)},
shJ(a){this.w=t.A.a(a)},
shI(a){this.x=t.A.a(a)}}
A.ib.prototype={
lm(a){var s,r,q,p,o,n,m,l=this,k=A.w(t.L.a(a),!0,null,0)
l.a=k
s=k.d0(2,0)
k=s.a
r=s.d
q=k.length
if(!(r>=0&&r<q))return A.a(k,r)
if(k[r]===255){++r
if(!(r<q))return A.a(k,r)
r=k[r]!==216
k=r}else k=!0
if(k)return!1
if(l.ck()!==216)return!1
p=l.ck()
o=!1
n=!1
while(!0){if(p!==217){k=l.a
k=k.d<k.c}else k=!1
if(!k)break
m=l.a.l()
if(m<2)break
k=l.a
k.d=k.d+(m-2)
switch(p){case 192:case 193:case 194:o=!0
break
case 218:n=!0
break}p=l.ck()}return o&&n},
cn(a){var s,r,q,p,o,n,m,l,k=this
k.a=A.w(t.L.a(a),!0,null,0)
k.jK()
if(k.x.length!==1)throw A.d(A.j("Only single frame JPEGs supported"))
for(s=k.Q,r=0;q=k.d,p=q.z,r<p.length;++r){o=q.y.n(0,p[r])
q=o.a
p=k.d
n=p.f
m=o.b
l=p.r
p=k.i6(p,o)
q=q===1&&n===2?1:0
B.c.D(s,new A.eU(p,q,m===1&&l===2?1:0))}},
jK(){var s,r,q,p,o,n,m,l,k=this
if(k.ck()!==216)throw A.d(A.j("Start Of Image marker not found."))
s=k.ck()
while(!0){if(s!==217){r=k.a
r===$&&A.c("input")
r=r.d<r.c}else r=!1
if(!r)break
r=k.a
r===$&&A.c("input")
q=r.l()
if(q<2)A.az(A.j("Invalid Block"))
r=k.a
p=r.aj(q-2)
r.d=r.d+(p.c-p.d)
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:k.jL(s,p)
break
case 219:k.jO(p)
break
case 192:case 193:case 194:k.jQ(s,p)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.d(A.j("Unhandled frame type "+B.a.co(s,16)))
case 196:k.jN(p)
break
case 221:k.e=p.l()
break
case 218:k.k5(p)
break
case 255:r=k.a
o=r.a
n=r.d
if(!(n>=0&&n<o.length))return A.a(o,n)
if(o[n]!==255)r.d=n-1
break
default:r=k.a
o=r.a
n=r.d
m=n+-3
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
if(o[m]===255){m=n+-2
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
o=m>=192&&m<=254}else o=!1
if(o){r.d=n-3
break}if(s!==0)throw A.d(A.j("Unknown JPEG marker "+B.a.co(s,16)))
break}s=k.ck()}},
ck(){var s,r=this,q=r.a
q===$&&A.c("input")
if(q.d>=q.c)return 0
do{do{s=r.a.C()
if(s!==255){q=r.a
q=q.d<q.c}else q=!1}while(q)
q=r.a
if(q.d>=q.c)return s
do{s=r.a.C()
if(s===255){q=r.a
q=q.d<q.c}else q=!1}while(q)
if(s===0){q=r.a
q=q.d<q.c}else q=!1}while(q)
return s},
jP(a){if(a.k()!==1165519206)return
if(a.l()!==0)return
this.r.cn(a)},
jL(a,b){var s,r,q,p,o,n=b
if(a===224){s=n
r=s.a
s=s.d
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===74){s=n
r=s.a
s=s.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===70){s=n
r=s.a
s=s.d+2
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===73){s=n
r=s.a
s=s.d+3
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===70){s=n
r=s.a
s=s.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]===0}else s=!1}else s=!1}else s=!1}else s=!1
if(s){s=new A.ie()
r=n
q=r.a
r=r.d+5
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+6
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+7
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+8
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+9
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+10
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+11
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+12
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
s.f=q
r=n
p=r.a
r=r.d+13
if(!(r>=0&&r<p.length))return A.a(p,r)
r=p[r]
s.r=r
this.b=s
n.d0(14+3*q*r,14)}}else if(a===225)this.jP(n)
else if(a===238){s=n
r=s.a
s=s.d
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===65){s=n
r=s.a
s=s.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===100){s=n
r=s.a
s=s.d+2
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===111){s=n
r=s.a
s=s.d+3
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===98){s=n
r=s.a
s=s.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===101){s=n
r=s.a
s=s.d+5
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]===0}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
if(s){s=new A.i9()
this.c=s
r=n
q=r.a
r=r.d+6
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+7
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+8
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+9
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+10
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+11
if(!(q>=0&&q<r.length))return A.a(r,q)
s.d=r[q]}}else if(a===254)try{n.l8()}catch(o){A.bC(o)}},
jO(a){var s,r,q,p,o,n,m,l,k,j
for(s=a.c,r=this.w;q=a.d,p=q<s,p;){p=a.a
a.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
o=B.a.j(q,4)
n=q&15
if(n>=4)throw A.d(A.j("Invalid number of quantization tables"))
if(r[n]==null)B.c.h(r,n,new Int16Array(64))
m=r[n]
for(q=o!==0,l=0;l<64;++l){if(q)k=a.l()
else{p=a.a
j=a.d++
if(!(j>=0&&j<p.length))return A.a(p,j)
k=p[j]}m.toString
p=B.M[l]
if(!(p<64))return A.a(m,p)
m[p]=k}}if(p)throw A.d(A.j("Bad length for DQT block"))},
jQ(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.d!=null)throw A.d(A.j("Duplicate JPG frame data found."))
s=j.d=new A.fw(A.I(t.p,t.d2),A.b([],t.t))
s.b=a===194
s.c=b.C()
s=j.d
s.toString
s.d=b.l()
s=j.d
s.toString
s.e=b.l()
r=b.C()
for(s=j.w,q=0;q<r;++q){p=b.a
o=b.d
n=b.d=o+1
m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
l=b.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
k=B.a.j(n,4)
b.d=l+1
if(!(l>=0&&l<m))return A.a(p,l)
l=p[l]
B.c.D(j.d.z,o)
j.d.y.h(0,o,new A.br(k&15,n&15,s,l))}j.d.l3()
B.c.D(j.x,j.d)},
jN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=a.c,r=this.z,q=this.y;p=a.d,p<s;){o=a.a
n=a.d=p+1
if(!(p>=0&&p<o.length))return A.a(o,p)
m=o[p]
l=new Uint8Array(16)
for(p=n,k=0,j=0;j<16;++j,p=n){n=p+1
a.d=n
if(!(p>=0&&p<o.length))return A.a(o,p)
p=o[p]
if(!(j<16))return A.a(l,j)
l[j]=p
k+=l[j]}i=a.aj(k)
a.d=a.d+(i.c-i.d)
h=i.a1()
if((m&16)!==0){m-=16
g=q}else g=r
if(g.length<=m)B.c.sA(g,m+1)
B.c.h(g,m,this.i7(l,h))}},
k5(a){var s,r,q,p,o,n,m,l=this,k=a.C()
if(k<1||k>4)throw A.d(A.j("Invalid SOS block"))
s=A.kk(k,new A.ic(l,a),t.d2)
r=a.C()
q=a.C()
p=a.C()
o=B.a.j(p,4)
n=l.a
n===$&&A.c("input")
m=l.d
o=new A.fx(n,m,s,l.e,r,q,o&15,p&15)
n=m.w
n===$&&A.c("mcusPerLine")
o.f=n
o.r=m.b
o.bN(0)},
i7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.b([],t.e8),g=16
while(!0){if(!(g>0&&a[g-1]===0))break;--g}s=t.fR
B.c.D(h,new A.dc(A.b([],s)))
if(0>=h.length)return A.a(h,0)
r=h[0]
for(q=b.length,p=0,o=0;o<g;){for(n=0;n<a[o];++n){if(0>=h.length)return A.a(h,-1)
r=h.pop()
m=r.a
l=m.length
k=r.b
if(l<=k)B.c.sA(m,k+1)
l=r.b
if(!(p>=0&&p<q))return A.a(b,p)
B.c.h(m,l,new A.dE(b[p]))
for(;m=r.b,m>0;){if(0>=h.length)return A.a(h,-1)
r=h.pop()}r.b=m+1
B.c.D(h,r)
for(;h.length<=o;r=j){m=A.b([],s)
j=new A.dc(m)
B.c.D(h,j)
l=r.a
k=l.length
i=r.b
if(k<=i)B.c.sA(l,i+1)
B.c.h(l,r.b,new A.c3(m))}++p}++o
if(o<g){m=A.b([],s)
j=new A.dc(m)
B.c.D(h,j)
l=r.a
k=l.length
i=r.b
if(k<=i)B.c.sA(l,i+1)
B.c.h(l,r.b,new A.c3(m))
r=j}}if(0>=h.length)return A.a(h,0)
return h[0].a},
i6(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.e
a2===$&&A.c("blocksPerLine")
s=a4.f
s===$&&A.c("blocksPerColumn")
r=a2<<3>>>0
q=new Int32Array(64)
p=new Uint8Array(64)
o=s*8
n=A.U(o,null,!1,t.aD)
for(m=a4.c,l=a4.d,k=0,j=0;j<s;++j){i=j<<3>>>0
for(h=0;h<8;++h,k=g){g=k+1
B.c.h(n,k,new Uint8Array(r))}for(f=0;f<a2;++f){if(!(l>=0&&l<4))return A.a(m,l)
e=m[l]
e.toString
d=a4.r
d===$&&A.c("blocks")
if(!(j<d.length))return A.a(d,j)
d=d[j]
if(!(f<d.length))return A.a(d,f)
A.qF(e,d[f],p,q)
c=f<<3>>>0
for(b=0,a=0;a<8;++a){e=i+a
if(!(e<o))return A.a(n,e)
a0=n[e]
for(h=0;h<8;++h,b=a1){a0.toString
e=c+h
a1=b+1
if(!(b>=0&&b<64))return A.a(p,b)
d=p[b]
if(!(e<a0.length))return A.a(a0,e)
a0[e]=d}}}}return n}}
A.ic.prototype={
$1(a){var s,r,q,p,o,n=this.b,m=n.C(),l=n.C()
n=this.a
if(!n.d.y.al(m))throw A.d(A.j("Invalid Component in SOS block"))
s=n.d.y.n(0,m)
s.toString
r=B.a.j(l,4)&15
q=l&15
p=n.z
o=p.length
if(r<o){if(!(r<o))return A.a(p,r)
p=p[r]
p.toString
s.shJ(t.A.a(p))}n=n.y
p=n.length
if(q<p){if(!(q<p))return A.a(n,q)
n=n[q]
n.toString
s.shI(t.A.a(n))}return s},
$S:34}
A.dc.prototype={}
A.fw.prototype={
l3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
for(s=a.y,r=A.m(s).c,q=A.b0(s,s.r,r);q.E();){p=s.n(0,q.d)
a.skX(Math.max(a.f,p.a))
a.skY(Math.max(a.r,p.b))}q=a.e
q.toString
a.w=B.b.bb(q/8/a.f)
q=a.d
q.toString
a.x=B.b.bb(q/8/a.r)
for(r=A.b0(s,s.r,r),q=t.fZ,o=t.an,n=t.f0;r.E();){m=s.n(0,r.d)
m.toString
l=a.e
l.toString
k=m.a
j=B.b.bb(B.b.bb(l/8)*k/a.f)
l=a.d
l.toString
i=m.b
h=B.b.bb(B.b.bb(l/8)*i/a.r)
g=a.w*k
f=a.x*i
e=J.am(f,n)
for(d=0;d<f;++d){c=J.am(g,o)
for(b=0;b<g;++b)c[b]=new Int32Array(64)
e[d]=c}m.e=j
m.f=h
m.shH(q.a(e))}},
skX(a){this.f=A.k(a)},
skY(a){this.r=A.k(a)}}
A.ie.prototype={}
A.fx.prototype={
bN(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="blocksPerLine",a2=a0.y,a3=a2.length,a4=a0.r
a4.toString
if(a4)if(a0.Q===0)s=a0.at===0?a0.git():a0.giv()
else s=a0.at===0?a0.gij():a0.gil()
else s=a0.giq()
a4=a3===1
if(a4){if(0>=a3)return A.a(a2,0)
r=a2[0]
q=r.e
q===$&&A.c(a1)
r=r.f
r===$&&A.c("blocksPerColumn")
p=q*r}else{r=a0.f
r===$&&A.c("mcusPerLine")
q=a0.b.x
q===$&&A.c("mcusPerColumn")
p=r*q}r=a0.z
if(r==null||r===0)a0.z=p
for(r=a0.a,q=t.m,o=0;o<p;){for(n=0;n<a3;++n){if(!(n<a2.length))return A.a(a2,n)
a2[n].y=0}a0.CW=0
if(a4){if(0>=a2.length)return A.a(a2,0)
m=a2[0]
l=0
while(!0){k=a0.z
k.toString
if(!(l<k))break
q.a(s)
k=m.e
k===$&&A.c(a1)
j=B.a.aE(o,k)
i=B.a.a6(o,k)
k=m.r
k===$&&A.c("blocks")
if(!(j>=0&&j<k.length))return A.a(k,j)
k=k[j]
if(!(i>=0&&i<k.length))return A.a(k,i)
s.$2(m,k[i]);++o;++l}}else{l=0
while(!0){k=a0.z
k.toString
if(!(l<k))break
for(n=0;n<a3;++n){if(!(n<a2.length))return A.a(a2,n)
m=a2[n]
h=m.a
g=m.b
for(f=0;f<g;++f)for(e=0;e<h;++e)a0.iy(m,s,o,f,e)}++o;++l}}a0.ch=0
k=r.a
d=r.d
c=k.length
if(!(d>=0&&d<c))return A.a(k,d)
b=k[d]
a=d+1
if(!(a<c))return A.a(k,a)
a=k[a]
if(b===255)if(a>=208&&a<=215)r.d=d+2
else break}},
c9(){var s,r,q=this,p=q.ch
if(p>0){--p
q.ch=p
return B.a.b0(q.ay,p)&1}p=q.a
if(p.d>=p.c)return null
s=p.C()
q.ay=s
if(s===255){r=p.C()
if(r!==0)throw A.d(A.j("unexpected marker: "+B.a.co((q.ay<<8|r)>>>0,16)))}q.ch=7
return B.a.j(q.ay,7)&1},
cB(a){var s,r,q=new A.c3(t.A.a(a))
for(;s=this.c9(),s!=null;){if(q instanceof A.c3){r=q.a
if(s>>>0!==s||s>=r.length)return A.a(r,s)
q=r[s]}if(q instanceof A.dE)return q.a}return null},
dX(a){var s,r
for(s=0;a>0;){r=this.c9()
if(r==null)return null
s=(s<<1|r)>>>0;--a}return s},
cE(a){var s
if(a===1)return this.c9()===1?1:-1
a.toString
s=this.dX(a)
s.toString
if(s>=B.a.W(1,a-1))return s
return s+B.a.R(-1,a)+1},
ir(a,b){var s,r,q,p,o,n,m,l=this
t.L.a(b)
s=a.w
s===$&&A.c("huffmanTableDC")
r=l.cB(s)
q=r===0?0:l.cE(r)
s=a.y
s===$&&A.c("pred")
s+=q
a.y=s
b[0]=s
for(p=1;p<64;){s=a.x
s===$&&A.c("huffmanTableAC")
s=l.cB(s)
s.toString
o=s&15
n=s>>>4
if(o===0){if(n<15)break
p+=16
continue}p+=n
o=l.cE(o)
if(!(p>=0&&p<80))return A.a(B.M,p)
m=B.M[p]
if(!(m<64))return A.a(b,m)
b[m]=o;++p}},
iu(a,b){var s,r,q
t.L.a(b)
s=a.w
s===$&&A.c("huffmanTableDC")
r=this.cB(s)
q=r===0?0:B.a.R(this.cE(r),this.ax)
s=a.y
s===$&&A.c("pred")
s+=q
a.y=s
b[0]=s},
iw(a,b){var s,r
t.L.a(b)
s=b[0]
r=this.c9()
r.toString
b[0]=(s|B.a.R(r,this.ax))>>>0},
ik(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=k.CW
if(s>0){k.CW=s-1
return}r=k.Q
q=k.as
for(s=k.ax;r<=q;){p=a.x
p===$&&A.c("huffmanTableAC")
p=k.cB(p)
p.toString
o=p&15
n=p>>>4
if(o===0){if(n<15){s=k.dX(n)
s.toString
k.CW=s+B.a.R(1,n)-1
break}r+=16
continue}r+=n
if(!(r>=0&&r<80))return A.a(B.M,r)
m=B.M[r]
p=k.cE(o)
l=B.a.R(1,s)
if(!(m<64))return A.a(b,m)
b[m]=p*l;++r}},
im(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.L.a(b)
s=j.Q
r=j.as
$label0$1:for(q=j.ax,p=0;s<=r;){if(!(s>=0&&s<80))return A.a(B.M,s)
o=B.M[s]
n=j.cx
switch(n){case 0:n=a.x
n===$&&A.c("huffmanTableAC")
m=j.cB(n)
if(m==null)throw A.d(A.j("Invalid progressive encoding"))
l=m&15
p=m>>>4
if(l===0)if(p<15){n=j.dX(p)
n.toString
j.CW=n+B.a.R(1,p)
j.cx=4}else{j.cx=1
p=16}else{if(l!==1)throw A.d(A.j("invalid ACn encoding"))
j.cy=j.cE(l)
j.cx=p!==0?2:3}continue $label0$1
case 1:case 2:if(!(o<64))return A.a(b,o)
k=b[o]
if(k!==0){n=j.c9()
n.toString
n=B.a.R(n,q)
if(!(o<64))return A.a(b,o)
b[o]=k+n}else{--p
if(p===0)j.cx=n===2?3:0}break
case 3:if(!(o<64))return A.a(b,o)
n=b[o]
if(n!==0){k=j.c9()
k.toString
k=B.a.R(k,q)
if(!(o<64))return A.a(b,o)
b[o]=n+k}else{n=j.cy
n===$&&A.c("successiveACNextValue")
n=B.a.R(n,q)
if(!(o<64))return A.a(b,o)
b[o]=n
j.cx=0}break
case 4:if(!(o<64))return A.a(b,o)
n=b[o]
if(n!==0){k=j.c9()
k.toString
k=B.a.R(k,q)
if(!(o<64))return A.a(b,o)
b[o]=n+k}break}++s}if(j.cx===4)if(--j.CW===0)j.cx=0},
iy(a,b,c,d,e){var s,r,q,p,o
t.m.a(b)
s=this.f
s===$&&A.c("mcusPerLine")
r=B.a.aE(c,s)*a.b+d
q=B.a.a6(c,s)*a.a+e
s=a.r
s===$&&A.c("blocks")
p=s.length
if(r>=p)return
if(!(r>=0))return A.a(s,r)
s=s[r]
o=s.length
if(q>=o)return
if(!(q>=0))return A.a(s,q)
b.$2(a,s[q])}}
A.fv.prototype={
bc(a,b,c){var s=A.lD()
s.cn(b)
if(s.x.length!==1)throw A.d(A.j("only single frame JPEGs supported"))
return A.qr(s)},
c1(a,b){return this.bc(a,b,null)}}
A.ia.prototype={
a8(){return"JpegChroma."+this.b}}
A.id.prototype={
ha(a){a=B.b.i(B.a.N(a,1,100))
if(this.at===a)return
this.jf(a<50?B.b.c3(5000/a):B.a.c3(200-a*2))
this.at=a},
bw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.a7(!0,8192)
e.c0(d,216)
e.c0(d,224)
d.a_(16)
d.m(74)
d.m(70)
d.m(73)
d.m(70)
d.m(0)
d.m(1)
d.m(1)
d.m(0)
d.a_(1)
d.a_(1)
d.m(0)
d.m(0)
e.ki(d,a.gbE())
e.kk(d)
s=a.gP(a)
r=a.gK(a)
e.c0(d,192)
d.a_(17)
d.m(8)
d.a_(r)
d.a_(s)
d.m(3)
d.m(1)
d.m(17)
d.m(0)
d.m(2)
d.m(17)
d.m(1)
d.m(3)
d.m(17)
d.m(1)
e.kj(d)
e.c0(d,218)
d.a_(12)
d.m(3)
d.m(1)
d.m(0)
d.m(2)
d.m(17)
d.m(3)
d.m(17)
d.m(0)
d.m(63)
d.m(0)
e.ax=0
e.ay=7
q=a.gP(a)
p=a.gK(a)
o=new Float32Array(64)
n=new Float32Array(64)
m=new Float32Array(64)
for(s=e.c,r=e.d,l=0,k=0,j=0,i=0;i<p;i+=8)for(h=0;h<q;h+=8){e.ib(a,h,i,q,p,o,n,m)
g=e.e
f=e.r
f===$&&A.c("_yacHuffman")
l=e.dV(d,o,s,l,g,f)
f=e.f
g=e.w
g===$&&A.c("_uvacHuffman")
k=e.dV(d,n,r,k,f,g)
j=e.dV(d,m,r,j,e.f,e.w)}s=e.ay
if(s>=0){++s
e.bK(d,A.b([B.a.W(1,s)-1,s],t.t))}e.c0(d,217)
return A.y(d.c.buffer,0,d.a)},
ib(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.as,r=c+1,q=0;q<64;++q){p=q>>>3
o=c+p
n=b+(q&7)
if(o>=e)o-=r+p-e
if(n>=d)n-=n-d+1
m=a.a
l=m==null?null:m.M(n,o,null)
if(l==null)l=new A.B()
if(l.gH()!==B.e)l=l.aP(B.e)
k=B.b.i(l.gp(l))
j=B.b.i(l.gt())
i=B.b.i(l.gu())
if(!(k>=0&&k<2048))return A.a(s,k)
m=s[k]
h=j+256
if(!(h>=0&&h<2048))return A.a(s,h)
h=s[h]
g=i+512
if(!(g>=0&&g<2048))return A.a(s,g)
g=B.a.j(m+h+s[g],16)
if(!(q<64))return A.a(f,q)
f[q]=g-128
g=k+768
if(!(g<2048))return A.a(s,g)
g=s[g]
h=j+1024
if(!(h>=0&&h<2048))return A.a(s,h)
h=s[h]
m=i+1280
if(!(m>=0&&m<2048))return A.a(s,m)
m=B.a.j(g+h+s[m],16)
if(!(q<64))return A.a(a0,q)
a0[q]=m-128
m=k+1280
if(!(m<2048))return A.a(s,m)
m=s[m]
h=j+1536
if(!(h>=0&&h<2048))return A.a(s,h)
h=s[h]
g=i+1792
if(!(g>=0&&g<2048))return A.a(s,g)
g=B.a.j(m+h+s[g],16)
if(!(q<64))return A.a(a1,q)
a1[q]=g-128}},
c0(a,b){a.m(255)
a.m(b&255)},
jf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(s=d.a,r=0;r<64;++r){q=B.b.c3((B.j_[r]*a+50)/100)
if(q<1)q=1
else if(q>255)q=255
p=B.a0[r]
if(!(p<64))return A.a(s,p)
s[p]=q}for(p=d.b,o=0;o<64;++o){n=B.b.c3((B.j0[o]*a+50)/100)
if(n<1)n=1
else if(n>255)n=255
m=B.a0[o]
if(!(m<64))return A.a(p,m)
p[m]=n}for(m=d.c,l=d.d,k=0,j=0;j<8;++j)for(i=0;i<8;++i){if(!(k>=0&&k<64))return A.a(B.a0,k)
h=B.a0[k]
if(!(h<64))return A.a(s,h)
g=s[h]
f=B.by[j]
e=B.by[i]
m[k]=1/(g*f*e*8)
l[k]=1/(p[h]*f*e*8);++k}},
d3(a,b){var s,r,q,p,o,n,m,l=t.L
l.a(a)
l.a(b)
l=t.t
s=A.b([A.b([],l)],t.ca)
for(r=b.length,q=0,p=0,o=1;o<=16;++o){for(n=1;n<=a[o];++n){if(!(p>=0&&p<r))return A.a(b,p)
m=b[p]
if(s.length<=m)B.c.sA(s,m+1)
B.c.h(s,m,A.b([q,o],l));++p;++q}q*=2}return s},
jd(){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.y,r=this.x,q=t.t,p=1,o=2,n=1;n<=15;++n){for(m=p;m<o;++m){l=32767+m
B.c.h(s,l,n)
B.c.h(r,l,A.b([m,n],q))}for(l=o-1,k=-l,j=-p;k<=j;++k){i=32767+k
B.c.h(s,i,n)
B.c.h(r,i,A.b([l+k,n],q))}p=p<<1>>>0
o=o<<1>>>0}},
jg(){var s,r
for(s=this.as,r=0;r<256;++r){s[r]=19595*r
s[r+256]=38470*r
s[r+512]=7471*r+32768
s[r+768]=-11059*r
s[r+1024]=-21709*r
s[r+1280]=32768*r+8421375
s[r+1536]=-27439*r
s[r+1792]=-5329*r}},
iW(d5,d6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4=t.H
d4.a(d5)
d4.a(d6)
for(s=0,r=0;r<8;++r){if(!(s<64))return A.a(d5,s)
q=d5[s]
d4=s+1
if(!(d4<64))return A.a(d5,d4)
p=d5[d4]
o=s+2
if(!(o<64))return A.a(d5,o)
n=d5[o]
m=s+3
if(!(m<64))return A.a(d5,m)
l=d5[m]
k=s+4
if(!(k<64))return A.a(d5,k)
j=d5[k]
i=s+5
if(!(i<64))return A.a(d5,i)
h=d5[i]
g=s+6
if(!(g<64))return A.a(d5,g)
f=d5[g]
e=s+7
if(!(e<64))return A.a(d5,e)
d=d5[e]
c=q+d
b=q-d
a=p+f
a0=p-f
a1=n+h
a2=n-h
a3=l+j
a4=c+a3
a5=c-a3
a6=a+a1
if(!(s<64))return A.a(d5,s)
d5[s]=a4+a6
if(!(k<64))return A.a(d5,k)
d5[k]=a4-a6
a7=(a-a1+a5)*0.707106781
if(!(o<64))return A.a(d5,o)
d5[o]=a5+a7
if(!(g<64))return A.a(d5,g)
d5[g]=a5-a7
a4=l-j+a2
a8=a0+b
a9=(a4-a8)*0.382683433
b0=0.5411961*a4+a9
b1=1.306562965*a8+a9
b2=(a2+a0)*0.707106781
b3=b+b2
b4=b-b2
if(!(i<64))return A.a(d5,i)
d5[i]=b4+b0
if(!(m<64))return A.a(d5,m)
d5[m]=b4-b0
if(!(d4<64))return A.a(d5,d4)
d5[d4]=b3+b1
if(!(e<64))return A.a(d5,e)
d5[e]=b3-b1
s+=8}for(s=0,r=0;r<8;++r){if(!(s<64))return A.a(d5,s)
q=d5[s]
d4=s+8
if(!(d4<64))return A.a(d5,d4)
p=d5[d4]
o=s+16
if(!(o<64))return A.a(d5,o)
n=d5[o]
m=s+24
if(!(m<64))return A.a(d5,m)
l=d5[m]
k=s+32
if(!(k<64))return A.a(d5,k)
j=d5[k]
i=s+40
if(!(i<64))return A.a(d5,i)
h=d5[i]
g=s+48
if(!(g<64))return A.a(d5,g)
f=d5[g]
e=s+56
if(!(e<64))return A.a(d5,e)
d=d5[e]
b5=q+d
b6=q-d
b7=p+f
b8=p-f
b9=n+h
c0=n-h
c1=l+j
c2=b5+c1
c3=b5-c1
c4=b7+b9
if(!(s<64))return A.a(d5,s)
d5[s]=c2+c4
if(!(k<64))return A.a(d5,k)
d5[k]=c2-c4
c5=(b7-b9+c3)*0.707106781
if(!(o<64))return A.a(d5,o)
d5[o]=c3+c5
if(!(g<64))return A.a(d5,g)
d5[g]=c3-c5
c2=l-j+c0
c6=b8+b6
c7=(c2-c6)*0.382683433
c8=0.5411961*c2+c7
c9=1.306562965*c6+c7
d0=(c0+b8)*0.707106781
d1=b6+d0
d2=b6-d0
if(!(i<64))return A.a(d5,i)
d5[i]=d2+c8
if(!(m<64))return A.a(d5,m)
d5[m]=d2-c8
if(!(d4<64))return A.a(d5,d4)
d5[d4]=d1+c9
if(!(e<64))return A.a(d5,e)
d5[e]=d1-c9;++s}for(d4=this.z,r=0;r<64;++r){d3=d5[r]*d6[r]
B.c.h(d4,r,d3>0?B.b.i(d3+0.5):B.b.i(d3-0.5))}return d4},
ki(a,b){var s,r
if(b.gfK(b))return
s=A.a7(!1,8192)
b.aS(s)
r=A.y(s.c.buffer,0,s.a)
this.c0(a,225)
a.a_(r.length+8)
a.G(1165519206)
a.a_(0)
a.a3(r)},
kk(a){var s,r,q
this.c0(a,219)
a.a_(132)
a.m(0)
for(s=this.a,r=0;r<64;++r)a.m(s[r])
a.m(1)
for(s=this.b,q=0;q<64;++q)a.m(s[q])},
kj(a){var s,r,q,p,o,n,m,l
this.c0(a,196)
a.a_(418)
a.m(0)
for(s=0;s<16;){++s
a.m(B.br[s])}for(r=0;r<=11;++r)a.m(B.a6[r])
a.m(16)
for(q=0;q<16;){++q
a.m(B.bt[q])}for(p=0;p<=161;++p)a.m(B.bx[p])
a.m(1)
for(o=0;o<16;){++o
a.m(B.bs[o])}for(n=0;n<=11;++n)a.m(B.a6[n])
a.m(17)
for(m=0;m<16;){++m
a.m(B.bu[m])}for(l=0;l<=161;++l)a.m(B.bA[l])},
dV(a,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=t.H
b.a(a0)
b.a(a1)
t.h.a(a3)
t.d.a(a4)
b=a4.length
if(0>=b)return A.a(a4,0)
s=a4[0]
if(240>=b)return A.a(a4,240)
r=a4[240]
q=c.iW(a0,a1)
for(b=c.Q,p=0;p<64;++p)B.c.h(b,B.a0[p],q[p])
o=b[0]
o.toString
n=o-a2
if(n===0){if(0>=a3.length)return A.a(a3,0)
m=a3[0]
m.toString
c.bK(a,m)}else{l=32767+n
a3.toString
m=c.y
if(!(l>=0&&l<65535))return A.a(m,l)
m=m[l]
m.toString
if(!(m<a3.length))return A.a(a3,m)
m=a3[m]
m.toString
c.bK(a,m)
m=c.x[l]
m.toString
c.bK(a,m)}k=63
while(!0){if(!(k>0&&b[k]===0))break;--k}if(k===0){s.toString
c.bK(a,s)
return o}for(m=c.y,j=c.x,i=1;i<=k;){h=i
while(!0){if(!(h>=0&&h<64))return A.a(b,h)
if(!(b[h]===0&&h<=k))break;++h}g=h-i
if(g>=16){f=B.a.j(g,4)
for(e=1;e<=f;++e){r.toString
c.bK(a,r)}g&=15}d=b[h]
d.toString
l=32767+d
if(!(l>=0&&l<65535))return A.a(m,l)
d=m[l]
d.toString
d=(g<<4>>>0)+d
if(!(d<a4.length))return A.a(a4,d)
d=a4[d]
d.toString
c.bK(a,d)
d=j[l]
d.toString
c.bK(a,d)
i=h+1}if(k!==63){s.toString
c.bK(a,s)}return o},
bK(a,b){var s,r,q,p=this
t.L.a(b)
s=b.length
if(0>=s)return A.a(b,0)
r=b[0]
if(1>=s)return A.a(b,1)
q=b[1]-1
for(;q>=0;){if((r&B.a.W(1,q))>>>0!==0)p.ax=(p.ax|B.a.W(1,p.ay))>>>0;--q
if(--p.ay<0){s=p.ax
if(s===255){a.m(255)
a.m(0)}else a.m(s)
p.ay=7
p.ax=0}}},
skl(a){this.e=t.h.a(a)},
skh(a){this.f=t.h.a(a)},
shL(a){this.r=t.d.a(a)},
shK(a){this.w=t.d.a(a)}}
A.d1.prototype={
a8(){return"PngDisposeMode."+this.b}}
A.e5.prototype={
a8(){return"PngBlendMode."+this.b}}
A.e6.prototype={}
A.fn.prototype={}
A.bN.prototype={
a8(){return"PngFilterType."+this.b}}
A.fQ.prototype={
sL(a){this.w=t.j.a(a)},
slj(a){this.x=t.T.a(a)},
$iS:1}
A.fo.prototype={}
A.fN.prototype={
dm(a){var s,r,q,p,o,n=A.w(a,!0,null,0).ae(8)
for(s=n.a,r=n.d,q=s.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(s,o)
if(s[o]!==B.bG[p])return!1}return!0},
bh(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=A.w(b5,!0,b3,0)
b2.d=b4
s=b4.ae(8)
for(b4=s.a,r=s.d,q=b4.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(b4,o)
if(b4[o]!==B.bG[p])return b3}for(b4=b2.a,r=b4.CW,q=t.t,o=b4.cx,n=t.L,m=b4.ax;!0;){l=b2.d
k=l.d-l.b
j=l.k()
i=b2.d.af(4)
switch(i){case"tEXt":l=b2.d
h=l.aj(j)
l.d=l.d+(h.c-h.d)
g=h.a1()
f=g.length
for(p=0;p<f;++p)if(g[p]===0){l=p+1
m.h(0,B.aS.c1(0,new Uint8Array(g.subarray(0,A.bg(0,p,f)))),B.aS.c1(0,new Uint8Array(g.subarray(l,A.bg(l,b3,f)))))
break}b2.d.d+=4
break
case"IHDR":l=b2.d
h=l.aj(j)
l.d=l.d+(h.c-h.d)
e=A.o(h,b3,0)
d=e.a1()
b4.a=e.k()
b4.b=e.k()
l=e.a
c=e.d
b=e.d=c+1
a=l.length
if(!(c>=0&&c<a))return A.a(l,c)
b4.c=l[c]
c=e.d=b+1
if(!(b>=0&&b<a))return A.a(l,b)
b=b4.d=l[b]
a0=e.d=c+1
if(!(c>=0&&c<a))return A.a(l,c)
c=e.d=a0+1
if(!(a0>=0&&a0<a))return A.a(l,a0)
a0=l[a0]
b4.f=a0
e.d=c+1
if(!(c>=0&&c<a))return A.a(l,c)
b4.r=l[c]
if(!(b===0||b===2||b===3||b===4||b===6))return b3
if(a0!==0)return b3
switch(b){case 0:if(!B.c.cb(A.b([1,2,4,8,16],q),b4.c))return b3
break
case 2:if(!B.c.cb(A.b([8,16],q),b4.c))return b3
break
case 3:if(!B.c.cb(A.b([1,2,4,8],q),b4.c))return b3
break
case 4:if(!B.c.cb(A.b([8,16],q),b4.c))return b3
break
case 6:if(!B.c.cb(A.b([8,16],q),b4.c))return b3
break}if(b2.d.k()!==A.bh(n.a(d),A.bh(new A.as(i),0)))throw A.d(A.j("Invalid "+i+" checksum"))
break
case"PLTE":l=b2.d
h=l.aj(j)
l.d=l.d+(h.c-h.d)
b4.sL(h.a1())
if(b2.d.k()!==A.bh(n.a(n.a(b4.w)),A.bh(new A.as(i),0)))throw A.d(A.j("Invalid "+i+" checksum"))
break
case"tRNS":l=b2.d
h=l.aj(j)
l.d=l.d+(h.c-h.d)
b4.slj(h.a1())
a1=b2.d.k()
l=b4.x
l.toString
if(a1!==A.bh(n.a(l),A.bh(new A.as(i),0)))throw A.d(A.j("Invalid "+i+" checksum"))
break
case"IEND":b2.d.d+=4
break
case"gAMA":if(j!==4)throw A.d(A.j("Invalid gAMA chunk"))
b2.d.k()
b2.d.d+=4
break
case"IDAT":B.c.D(o,k)
l=b2.d
c=l.d+=j
l.d=c+4
break
case"acTL":b4.ay=b2.d.k()
b2.d.k()
b2.d.d+=4
break
case"fcTL":b2.d.k()
l=b2.d.k()
c=b2.d.k()
b=b2.d.k()
a=b2.d.k()
a0=b2.d.l()
a2=b2.d.l()
a3=b2.d
a4=a3.a
a5=a3.d
a6=a3.d=a5+1
a7=a4.length
if(!(a5>=0&&a5<a7))return A.a(a4,a5)
a5=a4[a5]
if(a5>>>0!==a5||a5>=3)return A.a(B.bT,a5)
a5=B.bT[a5]
a3.d=a6+1
if(!(a6>=0&&a6<a7))return A.a(a4,a6)
a6=a4[a6]
if(a6>>>0!==a6||a6>=2)return A.a(B.bB,a6)
a6=B.bB[a6]
B.c.D(r,new A.fn(A.b([],q),l,c,b,a,a0,a2,a5,a6))
b2.d.d+=4
break
case"fdAT":b2.d.k()
B.c.D(B.c.gfO(r).y,k)
l=b2.d
c=l.d+=j-4
l.d=c+4
break
case"bKGD":l=b4.d
if(l===3){l=b2.d
c=l.a
l=l.d++
if(!(l>=0&&l<c.length))return A.a(c,l)
l=c[l];--j
a8=l*3
c=b4.w
b=c.length
if(!(a8>=0&&a8<b))return A.a(c,a8)
a9=c[a8]
a=a8+1
if(!(a<b))return A.a(c,a)
b0=c[a]
a=a8+2
if(!(a<b))return A.a(c,a)
b1=c[a]
c=b4.x
if(c!=null){l=B.m.cb(c,l)?0:255
c=new Uint8Array(4)
c[0]=a9
c[1]=b0
c[2]=b1
c[3]=l
b4.z=new A.dl(c)}else{l=new Uint8Array(3)
l[0]=a9
l[1]=b0
l[2]=b1
b4.z=new A.eT(l)}}else if(l===0||l===4){b2.d.l()
j-=2}else if(l===2||l===6){l=b2.d
l.l()
l.l()
l.l()
j-=24}if(j>0)b2.d.d+=j
b2.d.d+=4
break
case"iCCP":l=b2.d.cS()
b4.Q=l
c=b2.d
b=c.a
a=c.d++
if(!(a>=0&&a<b.length))return A.a(b,a)
h=c.aj(j-(l.length+2))
c.d=c.d+(h.c-h.d)
b4.at=h.a1()
b2.d.d+=4
break
default:l=b2.d
c=l.d+=j
l.d=c+4
break}if(i==="IEND")break
l=b2.d
if(l.d>=l.c)return b3}return b4},
aw(c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=null,b8=b5.a,b9=b8.a,c0=b8.b,c1=b8.CW,c2=c1.length
if(c2===0||c3===0){r=A.b([],t.gN)
c1=b8.cx
q=c1.length
for(c2=t.L,p=0,o=0;o<q;++o){n=b5.d
n===$&&A.c("_input")
if(!(o<c1.length))return A.a(c1,o)
n.d=c1[o]
m=n.k()
l=b5.d.af(4)
n=b5.d
k=n.aj(m)
n.d=n.d+(k.c-k.d)
j=k.a1()
p+=j.length
B.c.D(r,j)
if(b5.d.k()!==A.bh(c2.a(j),A.bh(new A.as(l),0)))throw A.d(A.j("Invalid "+l+" checksum"))}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.a6)(r),++h){j=r[h]
J.l1(b7,i,j)
i+=j.length}}else{if(c3>=c2)throw A.d(A.j("Invalid Frame Number: "+c3))
if(!(c3<c2))return A.a(c1,c3)
g=c1[c3]
b9=g.b
c0=g.c
r=A.b([],t.gN)
for(c1=g.y,p=0,o=0;o<c1.length;++o){c2=b5.d
c2===$&&A.c("_input")
c2.d=c1[o]
m=c2.k()
c2=b5.d
c2.af(4)
c2.d+=4
c2=b5.d
k=c2.aj(m-4)
c2.d=c2.d+(k.c-k.d)
j=k.a1()
p+=j.length
B.c.D(r,j)}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.a6)(r),++h){j=r[h]
J.l1(b7,i,j)
i+=j.length}}c1=b8.d
if(c1===3)f=1
else if(c1===0)f=1
else{if(c1===4)c1=2
else c1=c1===6?4:3
f=c1}s=null
try{s=B.Y.cL(A.c5(t.L.a(b7),1,b6,0),!1)}catch(e){return b6}d=A.w(s,!0,b6,0)
b5.c=b5.b=0
if(b8.d===3){c1=b8.w
if(c1!=null){c2=c1.length
c=c2/3|0
b=b8.x
n=b!=null
a=n?b.length:0
a0=n?4:3
a1=new A.aG(new Uint8Array(c*a0),c,a0)
for(n=a0===4,o=0,a2=0;o<c;++o,a2+=3){if(n&&o<a){if(!(o<b.length))return A.a(b,o)
a3=b[o]}else a3=255
if(!(a2<c2))return A.a(c1,a2)
a4=c1[a2]
a5=a2+1
if(!(a5<c2))return A.a(c1,a5)
a5=c1[a5]
a6=a2+2
if(!(a6<c2))return A.a(c1,a6)
a1.cZ(o,a4,a5,c1[a6],a3)}}else a1=b6}else a1=b6
if(b8.d===0&&b8.x!=null&&a1==null&&b8.c<=8){b=b8.x
a7=b.length
c1=b8.c
c=B.a.W(1,c1)
a1=new A.aG(new Uint8Array(c*4),c,4)
if(c1===1)a8=255
else if(c1===2)a8=85
else{c1=c1===4?17:1
a8=c1}for(o=0;o<c;++o){a9=o*a8
a1.cZ(o,a9,a9,a9,255)}for(c1=a1.b,c2=3<c1,n=a1.c,a4=n.length,o=0;o<a7;o+=2){a5=b[o]
a6=o+1
if(!(a6<a7))return A.a(b,a6)
b0=(a5&255)<<8|b[a6]&255
if(b0<c)if(c2){a5=b0*c1+3
if(!(a5>=0&&a5<a4))return A.a(n,a5)
n[a5]=0}}}c1=b8.c
if(c1===1)b1=B.y
else if(c1===2)b1=B.p
else{if(c1===4)c2=B.t
else c2=c1===16?B.A:B.e
b1=c2}c2=b8.d
if(c2===0&&b8.x!=null&&c1>8)f=4
b2=A.Q(b6,b6,b1,0,B.i,c0,b6,0,c2===2&&b8.x!=null?4:f,a1,b9,!1)
b3=b8.a
b4=b8.b
b8.a=b9
b8.b=c0
b5.e=0
if(b8.r!==0){c1=c0+7>>>3
b5.c8(d,b2,0,0,8,8,b9+7>>>3,c1)
c2=b9+3
b5.c8(d,b2,4,0,8,8,c2>>>3,c1)
c1=c0+3
b5.c8(d,b2,0,4,4,8,c2>>>2,c1>>>3)
c2=b9+1
b5.c8(d,b2,2,0,4,4,c2>>>2,c1>>>2)
c1=c0+1
b5.c8(d,b2,0,2,2,4,c2>>>1,c1>>>2)
b5.c8(d,b2,1,0,2,2,b9>>>1,c1>>>1)
b5.c8(d,b2,0,1,1,2,b9,c0>>>1)}else b5.jE(d,b2)
b8.a=b3
b8.b=b4
c1=b8.at
if(c1!=null)b2.c=new A.dF(b8.Q,B.aw,c1)
b8=b8.ax
if(b8.a!==0)b2.ko(b8)
return b2},
bc(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.bh(t.D.a(b))==null)return e
s=f.a
r=s.CW
if(r.length===0||!1){s=f.aw(0)
s.toString
return s}for(q=e,p=q,o=0;o<s.ay;++o){if(!(o<r.length))return A.a(r,o)
c=r[o]
n=f.aw(o)
if(n==null)continue
if(p==null||q==null){m=c.f
n.y=B.b.i((m===0||c.r===0?0:m/c.r)*1000)
q=n
p=q
continue}m=n.a
l=m==null
k=l?e:m.a
if(k==null)k=0
j=q.a
i=j==null
h=i?e:j.a
if(k===(h==null?0:h)){m=l?e:m.b
if(m==null)m=0
l=i?e:j.b
m=m===(l==null?0:l)&&c.d===0&&c.e===0&&c.x===B.bZ}else m=!1
if(m){m=c.f
n.y=B.b.i((m===0||c.r===0?0:m/c.r)*1000)
p.aL(n)
q=n
continue}g=c.w
if(g===B.c0){q=A.aZ(q,!1,!1)
m=s.z
l=q.a
if(l!=null)l.aO(0,m)}else q=g===B.c1?A.aZ(q,!1,!1):A.aZ(q,!1,!1)
m=c.f
q.y=B.b.i((m===0||c.r===0?0:m/c.r)*1000)
m=c.x===B.c_?B.aP:B.ap
A.mB(q,n,m,c.d,c.e)
p.aL(q)}return p},
c1(a,b){return this.bc(a,b,null)},
c8(a4,a5,a6,a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.d
if(a3===4)s=2
else if(a3===2)s=3
else{a3=a3===6?4:1
s=a3}r=s*a2.c
q=B.a.j(r+7,3)
p=B.a.j(r*b0+7,3)
o=A.b([null,null],t.ff)
n=A.b([0,0,0,0],t.t)
for(a2=a8>1,m=a8-a6,l=a7,k=0,j=0;k<b1;++k,l+=a9,++a1.e){a3=a4.a
i=a4.d++
if(!(i>=0&&i<a3.length))return A.a(a3,i)
i=a3[i]
if(i>>>0!==i||i>=5)return A.a(B.aj,i)
h=B.aj[i]
g=a4.aj(p)
a4.d=a4.d+(g.c-g.d)
B.c.h(o,j,g.a1())
if(!(j>=0&&j<2))return A.a(o,j)
f=o[j]
j=1-j
e=o[j]
f.toString
a1.fg(h,q,f,e)
a1.c=a1.b=0
d=new A.ae(f,0,f.length,0,!0)
for(a3=m<=1,c=a6,b=0;b<b0;++b,c+=a8){a1.f5(d,n)
i=a5.a
i=i==null?null:i.M(c,l,null)
a1.dY(i==null?new A.B():i,n)
if(!a3||a2)for(a=0;a<a8;++a)for(i=l+a,a0=0;a0<m;++a0)a1.dY(a5.an(c+a0,i),n)}}},
jE(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=a.d
if(a0===4)s=2
else if(a0===2)s=3
else{a0=a0===6?4:1
s=a0}r=s*a.c
q=a.a
p=a.b
o=B.a.j(q*r+7,3)
n=B.a.j(r+7,3)
m=A.U(o,0,!1,t.p)
l=A.b([m,m],t.S)
k=A.b([0,0,0,0],t.t)
a=a2.a
j=a.gJ(a)
j.E()
for(i=0,h=0;i<p;++i,h=e){a=a1.a
a0=a1.d++
if(!(a0>=0&&a0<a.length))return A.a(a,a0)
a0=a[a0]
if(a0>>>0!==a0||a0>=5)return A.a(B.aj,a0)
g=B.aj[a0]
f=a1.aj(o)
a1.d=a1.d+(f.c-f.d)
B.c.h(l,h,f.a1())
if(!(h>=0&&h<2))return A.a(l,h)
e=1-h
b.fg(g,n,l[h],l[e])
b.c=b.b=0
a0=l[h]
a=a0.length
d=new A.ae(a0,0,a,0,!0)
for(c=0;c<q;++c){b.f5(d,k)
b.dY(j.gU(),k)
j.E()}}},
fg(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.L.a(c)
t.T.a(d)
s=c.length
switch(a.a){case 0:break
case 1:for(r=J.aI(c),q=b;q<s;++q){p=c.length
if(!(q<p))return A.a(c,q)
o=c[q]
n=q-b
if(!(n>=0&&n<p))return A.a(c,n)
n=c[n]
if(typeof o!=="number")return o.aJ()
if(typeof n!=="number")return A.aV(n)
r.h(c,q,o+n&255)}break
case 2:for(r=J.aI(c),p=d!=null,q=0;q<s;++q){if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
o=c[q]
if(typeof o!=="number")return o.aJ()
r.h(c,q,o+m&255)}break
case 3:for(r=J.aI(c),p=d!=null,q=0;q<s;++q){if(q<b)l=0
else{o=q-b
if(!(o>=0&&o<c.length))return A.a(c,o)
l=c[o]}if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
o=c[q]
n=B.a.j(l+m,1)
if(typeof o!=="number")return o.aJ()
r.h(c,q,o+n&255)}break
case 4:for(r=J.aI(c),p=d==null,o=!p,q=0;q<s;++q){n=q<b
if(n)l=0
else{k=q-b
if(!(k>=0&&k<c.length))return A.a(c,k)
l=c[k]}if(o){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(n||p)j=0
else{n=q-b
if(!(n>=0&&n<d.length))return A.a(d,n)
j=d[n]}i=l+m-j
h=Math.abs(i-l)
g=Math.abs(i-m)
f=Math.abs(i-j)
if(h<=g&&h<=f)e=l
else e=g<=f?m:j
if(!(q<c.length))return A.a(c,q)
n=c[q]
if(typeof n!=="number")return n.aJ()
r.h(c,q,n+e&255)}break
default:throw A.d(A.j("Invalid filter value: "+a.B(0)))}},
bt(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.C()
if(b===16)return a.l()
for(s=a.c;r=n.c,r<b;){q=a.d
if(q>=s)throw A.d(A.j("Invalid PNG data."))
p=a.a
a.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
n.b=B.a.W(p[q],r)
n.c=r+8}if(b===1)o=1
else if(b===2)o=3
else{if(b===4)s=15
else s=0
o=s}s=r-b
r=B.a.a2(n.b,s)
n.c=s
return r&o},
f5(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.d
switch(r){case 0:B.c.h(b,0,q.bt(a,s.c))
return
case 2:B.c.h(b,0,q.bt(a,s.c))
B.c.h(b,1,q.bt(a,s.c))
B.c.h(b,2,q.bt(a,s.c))
return
case 3:B.c.h(b,0,q.bt(a,s.c))
return
case 4:B.c.h(b,0,q.bt(a,s.c))
B.c.h(b,1,q.bt(a,s.c))
return
case 6:B.c.h(b,0,q.bt(a,s.c))
B.c.h(b,1,q.bt(a,s.c))
B.c.h(b,2,q.bt(a,s.c))
B.c.h(b,3,q.bt(a,s.c))
return}throw A.d(A.j("Invalid color type: "+r+"."))},
dY(a,b){var s,r,q,p,o,n,m,l,k,j,i
t.L.a(b)
s=this.a
r=s.d
switch(r){case 0:q=s.x
if(q!=null&&s.c>8){s=q.length
if(0>=s)return A.a(q,0)
r=q[0]
if(1>=s)return A.a(q,1)
s=q[1]
p=b[0]
a.a7(p,p,p,p!==((r&255)<<24|s&255)>>>0?a.gF():0)
return}a.aK(b[0],0,0)
return
case 2:o=b[0]
p=b[1]
n=b[2]
s=s.x
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
m=s[0]
if(1>=r)return A.a(s,1)
l=s[1]
if(2>=r)return A.a(s,2)
k=s[2]
if(3>=r)return A.a(s,3)
j=s[3]
if(4>=r)return A.a(s,4)
i=s[4]
if(5>=r)return A.a(s,5)
s=s[5]
if(o!==((m&255)<<8|l&255)||p!==((k&255)<<8|j&255)||n!==((i&255)<<8|s&255)){a.a7(o,p,n,a.gF())
return}}a.aK(o,p,n)
return
case 3:a.sO(0,b[0])
return
case 4:a.aK(b[0],b[1],0)
return
case 6:a.a7(b[0],b[1],b[2],b[3])
return}throw A.d(A.j("Invalid color type: "+r+"."))}}
A.fP.prototype={
a8(){return"PngFilter."+this.b}}
A.fO.prototype={
aL(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=8192
if(!(a.gaQ()&&a.gH()!==B.A))s=a.gaG()<8&&!a.gaH()&&a.gaI()>1
else s=!0
if(s)a=a.aP(B.e)
if(i.w==null){s=A.a7(!0,h)
i.w=s
s.a3(A.b([137,80,78,71,13,10,26,10],t.t))
r=A.a7(!0,h)
r.G(a.gP(a))
r.G(a.gK(a))
r.m(a.gaG())
if(a.gaH())s=3
else if(a.gaI()===1)s=0
else if(a.gaI()===2)s=4
else s=a.gaI()===3?2:6
r.m(s)
r.m(0)
r.m(0)
r.m(0)
s=i.w
s.toString
i.bu(s,"IHDR",A.y(r.c.buffer,0,r.a))
s=a.c
if(s!=null){r=A.a7(!0,h)
r.a3(new A.as(s.a))
r.m(0)
r.m(0)
r.a3(s.kv())
s=i.w
s.toString
i.bu(s,"iCCP",A.y(r.c.buffer,0,r.a))}if(a.gaH()){s=i.a
if(s!=null){s=s.a
s===$&&A.c("palette")
i.ft(s)}else{s=a.a
s=s==null?null:s.gL()
s.toString
i.ft(s)}}if(i.r){r=A.a7(!0,h)
s=i.e
s===$&&A.c("_frames")
r.G(s)
r.G(i.c)
s=i.w
s.toString
i.bu(s,"acTL",A.y(r.c.buffer,0,r.a))}}q=a.gaH()?1:a.gaI()
p=a.gH()===B.A?2:1
s=a.gP(a)
o=a.gK(a)
n=a.gK(a)
m=new Uint8Array(s*o*q*p+n)
i.iX(0,a,m)
l=B.aU.fG(m,null)
s=a.d
if(s!=null)for(s=A.b0(s,s.r,A.m(s).c);s.E();){o=s.d
n=a.d.n(0,o)
n.toString
A.bT(n)
r=new A.fI(!0,new Uint8Array(8192))
r.a3(B.aT.bM(o))
r.m(0)
r.a3(B.aT.bM(n))
o=i.w
o.toString
n=r.c.buffer
k=r.a
n=new Uint8Array(n,0,k)
i.bu(o,"tEXt",n)}if(i.r){r=A.a7(!0,h)
r.G(i.f)
r.G(a.gP(a))
r.G(a.gK(a))
r.G(0)
r.G(0)
r.a_(a.y)
r.a_(1000)
r.m(1)
r.m(0)
s=i.w
s.toString
i.bu(s,"fcTL",A.y(r.c.buffer,0,r.a));++i.f}if(i.f<=1){s=i.w
s.toString
i.bu(s,"IDAT",l)}else{j=A.a7(!0,h)
j.G(i.f)
j.a3(l)
s=i.w
s.toString
i.bu(s,"fdAT",A.y(j.c.buffer,0,j.a));++i.f}},
dl(){var s,r=this,q=r.w
if(q==null)return null
r.bu(q,"IEND",A.b([],t.t))
r.f=0
q=r.w
s=A.y(q.c.buffer,0,q.a)
r.w=null
return s},
bw(a){var s,r,q,p,o,n,m=this
if(a.gai().length<=1||!1){m.r=!1
m.aL(a)}else{m.r=!0
m.e=a.gai().length
m.c=a.r
if(a.gaH()){s=m.a=A.km(a,256,10)
for(r=a.gai(),q=r.length,p=0;p<r.length;r.length===q||(0,A.a6)(r),++p){o=r[p]
if(o!==a){s.eV(o)
s.eG()
s.eS()
s.ev()}}}for(r=a.gai(),q=r.length,p=0;p<r.length;r.length===q||(0,A.a6)(r),++p){o=r[p]
n=m.a
if(n!=null)m.aL(n.e7(o))
else m.aL(o)}}r=m.dl()
r.toString
return r},
ft(a){var s,r,q,p=this
if(a.gH()===B.e&&a.b===3&&a.a===256){s=p.w
s.toString
p.bu(s,"PLTE",A.y(a.ga0(a),0,null))}else{s=a.a
r=A.a7(!0,s*3)
for(q=0;q<s;++q){r.m(B.b.i(a.aZ(q)))
r.m(B.b.i(a.aY(q)))
r.m(B.b.i(a.aX(q)))}s=p.w
s.toString
p.bu(s,"PLTE",A.y(r.c.buffer,0,r.a))}if(a.b===4){s=a.a
r=A.a7(!0,s)
for(q=0;q<s;++q)r.m(B.b.i(a.br(q)))
s=p.w
s.toString
p.bu(s,"tRNS",A.y(r.c.buffer,0,r.a))}},
bu(a,b,c){t.L.a(c)
a.G(c.length)
a.a3(new A.as(b))
a.a3(c)
a.G(A.bh(c,A.bh(new A.as(b),0)))},
iX(a,b,c){var s,r,q=this,p=b.gaH()?B.k3:B.k4,o=b.ga0(b),n=b.a.gbg(),m=b.gaH()?1:b.gaI(),l=B.a.j(m*b.gaG()+7,3),k=b.gaG()+7>>>3,j=p.a,i=0,h=0,g=null,f=0
while(!0){s=b.a
s=s==null?null:s.b
if(!(f<(s==null?0:s)))break
r=new Uint8Array(o,h,n)
h+=n
switch(j){case 1:i=q.j1(r,k,l,c,i)
break
case 2:i=q.j2(r,g,k,c,i)
break
case 3:i=q.iY(r,g,k,l,c,i)
break
case 4:i=q.j_(r,g,k,l,c,i)
break
default:i=q.iZ(r,k,c,i)
break}++f
g=r}},
fl(a,b,c,d,e){var s,r,q,p;--a
for(s=b.length,r=d.length;a>=0;e=q){q=e+1
p=c+a
if(!(p<s))return A.a(b,p)
p=b[p]
if(!(e<r))return A.a(d,e)
d[e]=p;--a}return e},
iZ(a,b,c,d){var s,r,q,p=d+1,o=c.length
if(!(d<o))return A.a(c,d)
c[d]=0
s=a.length
if(b===1)for(d=p,r=0;r<s;++r,d=p){p=d+1
q=a[r]
if(!(d<o))return A.a(c,d)
c[d]=q}else for(d=p,r=0;r<s;r+=b)d=this.fl(b,a,r,c,d)
return d},
j1(a,b,c,d,e){var s,r,q,p,o,n,m,l=e+1,k=d.length
if(!(e<k))return A.a(d,e)
d[e]=1
for(e=l,s=0;s<c;s+=b)e=this.fl(b,a,s,d,e)
r=a.length
for(q=b-1,s=c;s<r;s+=b)for(p=q,o=0;o<b;++o,--p,e=l){l=e+1
n=s+p
if(!(n>=0&&n<r))return A.a(a,n)
m=a[n]
n-=c
if(!(n>=0))return A.a(a,n)
n=a[n]
if(!(e>=0&&e<k))return A.a(d,e)
d[e]=m-n&255}return e},
j2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=e+1,j=d.length
if(!(e<j))return A.a(d,e)
d[e]=2
s=a.length
for(r=c-1,q=b!=null,e=k,p=0;p<s;p+=c)for(o=r,n=0;n<c;++n,--o,e=k){if(q){m=p+o
if(!(m>=0&&m<b.length))return A.a(b,m)
l=b[m]}else l=0
k=e+1
m=p+o
if(!(m>=0&&m<s))return A.a(a,m)
m=a[m]
if(!(e>=0&&e<j))return A.a(d,e)
d[e]=m-l&255}return e},
iY(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h=f+1,g=e.length
if(!(f<g))return A.a(e,f)
e[f]=3
s=a.length
for(r=c-1,q=b==null,f=h,p=0;p<s;p+=c)for(o=r,n=0;n<c;++n,--o,f=h){m=p+o
if(m<d)l=0
else{k=m-d
if(!(k>=0&&k<s))return A.a(a,k)
l=a[k]}if(q)j=0
else{if(!(m>=0&&m<b.length))return A.a(b,m)
j=b[m]}if(!(m>=0&&m<s))return A.a(a,m)
i=a[m]
h=f+1
if(!(f>=0&&f<g))return A.a(e,f)
e[f]=i-(l+j>>>1)}return f},
jr(a,b,c){var s=a+b-c,r=s>a?s-a:a-s,q=s>b?s-b:b-s,p=s>c?s-c:c-s
if(r<=q&&r<=p)return a
else if(q<=p)return b
return c},
j_(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2+1,d=a1.length
if(!(a2<d))return A.a(a1,a2)
a1[a2]=4
s=a.length
for(r=c-1,q=b==null,a2=e,p=0;p<s;p+=c)for(o=r,n=0;n<c;++n,--o,a2=e){m=p+o
l=m<a0
if(l)k=0
else{j=m-a0
if(!(j>=0&&j<s))return A.a(a,j)
k=a[j]}if(q)i=0
else{if(!(m>=0&&m<b.length))return A.a(b,m)
i=b[m]}if(l||q)h=0
else{l=m-a0
if(!(l>=0&&l<b.length))return A.a(b,l)
h=b[l]}if(!(m>=0&&m<s))return A.a(a,m)
g=a[m]
f=this.jr(k,i,h)
e=a2+1
if(!(a2>=0&&a2<d))return A.a(a1,a2)
a1[a2]=g-f&255}return a2}}
A.fR.prototype={
skO(a){t.T.a(a)},
shb(a){t.T.a(a)},
sl9(a){t.T.a(a)},
sla(a){t.T.a(a)}}
A.fS.prototype={
sbL(a,b){t.T.a(b)},
sbQ(a){t.T.a(a)}}
A.bd.prototype={}
A.fV.prototype={
sbL(a,b){t.T.a(b)},
sbQ(a){t.T.a(a)}}
A.fW.prototype={
sbL(a,b){t.T.a(b)},
sbQ(a){t.T.a(a)}}
A.fY.prototype={
sbL(a,b){t.T.a(b)},
sbQ(a){t.T.a(a)}}
A.fZ.prototype={
sbL(a,b){t.T.a(b)},
sbQ(a){t.T.a(a)}}
A.e9.prototype={}
A.fX.prototype={}
A.iu.prototype={
hz(a){var s,r,q,p,o=this
a.l()
a.l()
a.l()
a.l()
s=B.a.S(a.c-a.d,8)
if(s>0){o.e=new Uint16Array(s)
o.f=new Uint16Array(s)
o.r=new Uint16Array(s)
o.w=new Uint16Array(s)
for(r=0;r<s;++r){q=o.e
p=a.l()
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.f
q=a.l()
if(!(r<p.length))return A.a(p,r)
p[r]=q
q=o.r
p=a.l()
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.w
q=a.l()
if(!(r<p.length))return A.a(p,r)
p[r]=q}}}}
A.co.prototype={
fV(a,b,c,d,e,f,g){if(e==null)e=a.l()
switch(e){case 0:d.toString
this.k0(a,b,c,d)
break
case 1:if(f==null)f=this.jY(a,c)
d.toString
this.k_(a,b,c,d,f,g)
break
default:throw A.d(A.j("Unsupported compression: "+e))}},
l7(a,b,c,d){return this.fV(a,b,c,d,null,null,0)},
jY(a,b){var s,r,q=new Uint16Array(b)
for(s=0;s<b;++s){r=a.l()
if(!(s<b))return A.a(q,s)
q[s]=r}return q},
k0(a,b,c,d){var s,r=b*c
if(d===16)r*=2
if(r>a.c-a.d){s=new Uint8Array(r)
this.c=s
B.m.aW(s,0,r,255)
return}this.c=a.ae(r).a1()},
k_(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=b*c
if(d===16)l*=2
s=new Uint8Array(l)
this.c=s
r=f*c
q=e.length
if(r>=q){B.m.aW(s,0,l,255)
return}for(p=0,o=0;o<c;++o,r=n){n=r+1
if(!(r>=0&&r<q))return A.a(e,r)
m=a.aj(e[r])
a.d=a.d+(m.c-m.d)
this.iD(m,this.c,p)
p+=b}},
iD(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=b.length;q=a.d,q<s;){p=a.a
o=a.d=q+1
n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
q=p[q]
$.ar()[0]=q
q=$.aC()
if(0>=q.length)return A.a(q,0)
m=q[0]
if(m<0){m=1-m
a.d=o+1
if(!(o>=0&&o<n))return A.a(p,o)
q=p[o]
for(l=0;l<m;++l,c=k){k=c+1
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=q}}else{++m
for(q=o,l=0;l<m;++l,q=o,c=k){k=c+1
o=q+1
a.d=o
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=q}}}}}
A.b1.prototype={
a8(){return"PsdColorMode."+this.b}}
A.fT.prototype={
hA(a){var s,r,q=this
q.as=A.w(a,!0,null,0)
q.jH()
if(q.c!==943870035)return
s=q.as.k()
q.as.ae(s)
s=q.as.k()
q.at=q.as.ae(s)
s=q.as.k()
q.ax=q.as.ae(s)
r=q.as
q.ay=r.ae(r.c-r.d)},
bN(a){var s,r=this
if(r.c===943870035){s=r.as
s===$&&A.c("_input")
s=s==null}else s=!0
if(s)return!1
r.jW()
r.jX()
r.jZ()
r.ay=r.ax=r.at=r.as=null
return!0},
fE(){if(!this.bN(0))return null
return this.lb()},
lb(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.y
if(a1!=null)return a1
a1=a.a
a1=A.Q(a0,a0,B.e,0,B.i,a.b,a0,0,4,a0,a1,!1)
a.y=a1
a1.kr(0)
s=0
while(!0){a1=a.w
a1===$&&A.c("layers")
if(!(s<a1.length))break
c$0:{r=a1[s]
a1=r.y
a1===$&&A.c("flags")
if((a1&2)!==0)break c$0
a1=r.w
a1===$&&A.c("opacity")
q=a1/255
p=r.r
a1=r.cx
a1===$&&A.c("layerImage")
o=r.a
o.toString
n=o
m=0
while(!0){o=r.f
o===$&&A.c("height")
if(!(m<o))break
o=r.a
o.toString
l=o+m
k=r.b
o=n>=0
j=0
while(!0){i=r.e
i===$&&A.c("width")
if(!(j<i))break
i=a1.a
h=i==null?a0:i.M(j,m,a0)
if(h==null)h=new A.B()
g=B.b.i(h.gp(h))
f=B.b.i(h.gt())
e=B.b.i(h.gu())
d=B.b.i(h.gv())
k.toString
if(k>=0&&k<a.a&&o&&n<a.b){i=r.b
i.toString
c=a.y.a
b=c==null?a0:c.M(i+j,l,a0)
if(b==null)b=new A.B()
a.i3(B.b.i(b.gp(b)),B.b.i(b.gt()),B.b.i(b.gu()),B.b.i(b.gv()),g,f,e,d,p,q,b)}++j;++k}++m;++n}}++s}a1=a.y
a1.toString
return a1},
i3(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n=h/255*j
switch(i){case 1885434739:s=d
r=c
q=b
p=a
break
case 1852797549:s=h
r=g
q=f
p=e
break
case 1684632435:s=h
r=g
q=f
p=e
break
case 1684107883:p=Math.min(a,e)
q=Math.min(b,f)
r=Math.min(c,g)
s=h
break
case 1836411936:p=B.a.j(a*e,8)
q=B.a.j(b*f,8)
r=B.a.j(c*g,8)
s=h
break
case 1768188278:p=A.iw(a,e)
q=A.iw(b,f)
r=A.iw(c,g)
s=h
break
case 1818391150:p=A.iy(a,e)
q=A.iy(b,f)
r=A.iy(c,g)
s=h
break
case 1684751212:s=h
r=g
q=f
p=e
break
case 1818850405:p=Math.max(a,e)
q=Math.max(b,f)
r=Math.max(c,g)
s=h
break
case 1935897198:p=A.kt(a,e)
q=A.kt(b,f)
r=A.kt(c,g)
s=h
break
case 1684633120:p=A.ix(a,e)
q=A.ix(b,f)
r=A.ix(c,g)
s=h
break
case 1818518631:p=e+a>255?255:a+e
q=f+b>255?255:b+f
r=g+c>255?255:c+g
s=h
break
case 1818706796:s=h
r=g
q=f
p=e
break
case 1870030194:p=A.kr(a,e,d,h)
q=A.kr(b,f,d,h)
r=A.kr(c,g,d,h)
s=h
break
case 1934387572:p=A.ku(a,e)
q=A.ku(b,f)
r=A.ku(c,g)
s=h
break
case 1749838196:p=A.kp(a,e)
q=A.kp(b,f)
r=A.kp(c,g)
s=h
break
case 1984719220:p=A.kv(a,e)
q=A.kv(b,f)
r=A.kv(c,g)
s=h
break
case 1816947060:p=A.kq(a,e)
q=A.kq(b,f)
r=A.kq(c,g)
s=h
break
case 1884055924:p=A.ks(a,e)
q=A.ks(b,f)
r=A.ks(c,g)
s=h
break
case 1749903736:p=e<255-a?0:255
q=f<255-b?0:255
r=g<255-c?0:255
s=h
break
case 1684629094:p=Math.abs(e-a)
q=Math.abs(f-b)
r=Math.abs(g-c)
s=h
break
case 1936553316:p=A.ko(a,e)
q=A.ko(b,f)
r=A.ko(c,g)
s=h
break
case 1718842722:s=h
r=g
q=f
p=e
break
case 1717856630:s=h
r=g
q=f
p=e
break
case 1752524064:s=h
r=g
q=f
p=e
break
case 1935766560:s=h
r=g
q=f
p=e
break
case 1668246642:s=h
r=g
q=f
p=e
break
case 1819634976:s=h
r=g
q=f
p=e
break
default:s=h
r=g
q=f
p=e}o=1-n
k.sp(0,B.b.i(a*o+p*n))
k.st(B.b.i(b*o+q*n))
k.su(B.b.i(c*o+r*n))
k.sv(B.b.i(d*o+s*n))},
jH(){var s,r,q,p,o,n=this,m=n.as
m===$&&A.c("_input")
n.c=m.k()
m=n.as.l()
n.d=m
if(m!==1){n.c=0
return}s=n.as.ae(6)
for(m=s.a,r=s.d,q=m.length,p=0;p<6;++p){o=r+p
if(!(o>=0&&o<q))return A.a(m,o)
if(m[o]!==0){n.c=0
return}}n.e=n.as.l()
n.b=n.as.k()
n.a=n.as.k()
n.f=n.as.l()
m=n.as.l()
if(!(m<8))return A.a(B.bQ,m)
n.r=B.bQ[m]},
jW(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.c("_imageResourceData")
k.d=k.b
for(k=l.z;s=l.at,s.d<s.c;){r=s.k()
q=l.at.l()
s=l.at
p=s.a
o=s.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
o=p[o]
s.af(o)
if((o&1)===0)++l.at.d
n=l.at.k()
s=l.at
m=s.aj(n)
s.d=s.d+(m.c-m.d)
if((n&1)===1)++l.at.d
if(r===943868237)k.h(0,q,new A.fU())}},
jX(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.ax
h===$&&A.c("_layerAndMaskData")
h.d=h.b
s=h.k()
if((s&1)!==0)++s
r=i.ax.ae(s)
h=t.cE
i.shQ(t.x.a(A.b([],h)))
if(s>0){q=r.l()
$.aq()[0]=q
q=$.aB()
if(0>=q.length)return A.a(q,0)
p=q[0]
if(p<0)p=-p
for(q=t.N,o=t.ha,n=t.af,m=0;m<p;++m){l=new A.e8(A.I(q,o),A.b([],h),A.b([],n))
l.hB(r)
k=i.w
k===$&&A.c("layers")
B.c.D(k,l)}}m=0
while(!0){h=i.w
h===$&&A.c("layers")
if(!(m<h.length))break
h[m].l4(r,i);++m}s=i.ax.k()
j=i.ax.ae(s)
if(s>0){j.l()
j.l()
j.l()
j.l()
j.l()
j.l()
j.C()}},
jZ(){var s,r,q,p,o,n,m,l,k=this,j="channels",i="mergeImageChannels",h=k.ay
h===$&&A.c("_imageData")
h.d=h.b
s=h.l()
if(s===1){h=k.b
r=k.e
r===$&&A.c(j)
q=h*r
p=new Uint16Array(q)
for(o=0;o<q;++o)p[o]=k.ay.l()}else p=null
k.shR(t.s.a(A.b([],t.h0)))
o=0
while(!0){h=k.e
h===$&&A.c(j)
if(!(o<h))break
h=k.x
h===$&&A.c(i)
r=k.ay
r.toString
n=o===3?-1:o
n=new A.co(n)
n.fV(r,k.a,k.b,k.f,s,p,o)
B.c.D(h,n);++o}h=k.r
r=k.f
n=k.a
m=k.b
l=k.x
l===$&&A.c(i)
k.y=A.lW(h,r,n,m,l)},
shQ(a){this.w=t.x.a(a)},
shR(a){this.x=t.s.a(a)},
$iS:1}
A.fU.prototype={}
A.e8.prototype={
hB(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a7.k(),a6=$.L()
a6[0]=a5
a5=$.a8()
if(0>=a5.length)return A.a(a5,0)
a4.a=a5[0]
a6[0]=a7.k()
a4.b=a5[0]
a6[0]=a7.k()
a4.c=a5[0]
a6[0]=a7.k()
a5=a5[0]
a4.d=a5
a6=a4.b
a6.toString
a4.e=a5-a6
a6=a4.c
a5=a4.a
a5.toString
a4.f=a6-a5
a4.shS(t.s.a(A.b([],t.h0)))
s=a7.l()
for(r=0;r<s;++r){a5=a7.l()
$.aq()[0]=a5
a5=$.aB()
if(0>=a5.length)return A.a(a5,0)
q=a5[0]
a7.k()
a5=a4.as
a5===$&&A.c("channels")
B.c.D(a5,new A.co(q))}p=a7.k()
if(p!==943868237)throw A.d(A.j("Invalid PSD layer signature: "+B.a.co(p,16)))
a4.r=a7.k()
a4.w=a7.C()
a7.C()
a4.y=a7.C()
if(a7.C()!==0)throw A.d(A.j("Invalid PSD layer data"))
o=a7.k()
n=a7.ae(o)
if(o>0){o=n.k()
if(o>0){m=n.ae(o)
a5=m.d
m.k()
m.k()
m.k()
m.k()
m.C()
m.C()
if(m.c-a5===20)m.d+=2
else{m.C()
m.C()
m.k()
m.k()
m.k()
m.k()}}o=n.k()
if(o>0)new A.iu().hz(n.ae(o))
o=n.C()
n.af(o)
l=4-B.a.a6(o,4)-1
if(l>0)n.d+=l
for(a5=n.c,a6=a4.ay,k=a4.cy,j=t.t,i=t.g0;n.d<a5;){p=n.k()
if(p!==943868237)throw A.d(A.j("PSD invalid signature for layer additional data: "+B.a.co(p,16)))
h=n.af(4)
o=n.k()
g=n.aj(o)
f=n.d+(g.c-g.d)
n.d=f
if((o&1)===1)n.d=f+1
a6.h(0,h,A.o_(h,g))
if(h==="lrFX"){e=A.o(i.a(a6.n(0,"lrFX")).b,null,0)
e.l()
d=e.l()
for(c=0;c<d;++c){e.af(4)
b=e.af(4)
a=e.k()
if(b==="dsdw"){a0=new A.fS()
B.c.D(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.k()
a0.sbL(0,A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.af(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.sbQ(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else if(b==="isdw"){a0=new A.fW()
B.c.D(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.k()
a0.sbL(0,A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.af(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.sbQ(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else if(b==="oglw"){a0=new A.fY()
B.c.D(k,a0)
a0.a=e.k()
e.k()
e.k()
a0.sbL(0,A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.af(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2)a0.sbQ(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else if(b==="iglw"){a0=new A.fV()
B.c.D(k,a0)
a0.a=e.k()
e.k()
e.k()
a0.sbL(0,A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.af(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2){e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.sbQ(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}}else if(b==="bevl"){a0=new A.fR()
B.c.D(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.af(8)
e.af(8)
a0.skO(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
a0.shb(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a2=e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a2=e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2){a0.sl9(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
a0.sla(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}}else if(b==="sofi"){a0=new A.fZ()
B.c.D(k,a0)
a0.a=e.k()
e.af(4)
a0.sbL(0,A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a0.sbQ(A.b([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else e.d+=a}}}}},
l4(a,b){var s,r,q,p,o,n=this,m=0
while(!0){s=n.as
s===$&&A.c("channels")
if(!(m<s.length))break
s=s[m]
r=n.e
r===$&&A.c("width")
q=n.f
q===$&&A.c("height")
s.l7(a,r,q,b.f);++m}r=b.r
q=b.f
p=n.e
p===$&&A.c("width")
o=n.f
o===$&&A.c("height")
n.cx=A.lW(r,q,p,o,s)},
shS(a){this.as=t.s.a(a)}}
A.d2.prototype={}
A.iv.prototype={
bc(a,b,c){var s,r,q,p=null,o=A.lV(b)
this.a=o
s=1
if(s===1||!1){o=o.fE()
return o}for(r=p,q=0;q<s;++q){o=this.a
c=o==null?p:o.fE()
if(c==null)continue
if(r==null){c.w=B.cQ
r=c}else r.aL(c)}return r}}
A.h_.prototype={}
A.aP.prototype={
cK(){return new A.aP(this.a,this.b,this.c)},
ea(a){var s,r=this
t.k.a(a)
s=a.a
if(s<r.a)r.a=s
s=a.b
if(s<r.b)r.b=s
s=a.c
if(s<r.c)r.c=s},
e9(a){var s,r=this
t.k.a(a)
s=a.a
if(s>r.a)r.a=s
s=a.b
if(s>r.b)r.b=s
s=a.c
if(s>r.c)r.c=s}}
A.J.prototype={
cK(){var s=this
return new A.J(s.a,s.b,s.c,s.d)},
aJ(a,b){var s=this
return new A.J(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
aV(a,b){var s=this
return new A.J(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
fF(a){var s=this
return s.a*a.a+s.b*a.b+s.c*a.c+s.d*a.d},
ea(a){var s,r=this
t.R.a(a)
s=a.a
if(s<r.a)r.a=s
s=a.b
if(s<r.b)r.b=s
s=a.c
if(s<r.c)r.c=s
s=a.d
if(s<r.d)r.d=s},
e9(a){var s,r=this
t.R.a(a)
s=a.a
if(s>r.a)r.a=s
s=a.b
if(s>r.b)r.b=s
s=a.c
if(s>r.c)r.c=s
s=a.d
if(s>r.d)r.d=s}}
A.d5.prototype={
D(a,b){this.$ti.c.a(b)
this.a.ea(b)
this.b.e9(b)}}
A.d3.prototype={$iS:1,
gK(a){return this.b}}
A.d4.prototype={$iS:1,
gK(a){return this.f}}
A.ea.prototype={$iS:1,
gK(a){return this.b}}
A.Z.prototype={
scH(a){var s=this.a,r=this.b+1
if(!(r<s.length))return A.a(s,r)
s[r]=a},
bT(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.o,s)
return new A.aP(B.o[s],B.o[q>>>4&31],B.v[q&15])}else return new A.aP(B.v[q>>>7&15],B.v[q>>>3&15],B.af[q&7])},
bV(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.o,s)
return new A.J(B.o[s],B.o[q>>>4&31],B.v[q&15],255)}else return new A.J(B.v[q>>>7&15],B.v[q>>>3&15],B.af[q&7],B.af[q>>>11&7])},
bU(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.o,s)
return new A.aP(B.o[s],B.o[q>>>5&31],B.o[q&31])}else return new A.aP(B.v[q>>>8&15],B.v[q>>>4&15],B.v[q&15])},
bW(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.o,s)
return new A.J(B.o[s],B.o[q>>>5&31],B.o[q&31],255)}else return new A.J(B.v[q>>>8&15],B.v[q>>>4&15],B.v[q&15],B.af[q>>>12&7])},
aF(){var s=this,r=s.c?1:0,q=s.d,p=s.e?1:0,o=s.f,n=s.r?1:0
return(r|(q&16383)<<1|p<<15|(o&32767)<<16|n<<31)>>>0},
av(){var s,r=this,q=r.a,p=r.b+1
if(!(p<q.length))return A.a(q,p)
s=q[p]
r.c=(s&1)===1
r.scH(r.aF())
r.d=s>>>1&16383
r.scH(r.aF())
r.e=(s>>>15&1)===1
r.scH(r.aF())
r.f=s>>>16&32767
r.scH(r.aF())
r.r=(s>>>31&1)===1
r.scH(r.aF())}}
A.iz.prototype={
bh(a){var s,r=this,q=a.length,p=q-(q>>>1&1431655765)>>>0
p=(p&858993459)+(p>>>2&858993459)
if((p+(p>>>4)>>>0&252645135)*16843009>>>0>>>24===1){s=r.ip(a)
if(s!=null){r.a=a
return r.b=s}}s=r.iC(a)
if(s!=null){r.a=a
return r.b=s}s=r.iA(a)
if(s!=null){r.a=a
return r.b=s}return null},
iC(a){var s,r,q=A.w(a,!1,null,0)
if(q.k()!==52)return null
if(q.k()!==55727696)return null
s=A.b([0,0,0,0],t.t)
r=new A.d4(s)
q.k()
r.b=q.k()
B.c.h(s,0,q.C())
B.c.h(s,1,q.C())
B.c.h(s,2,q.C())
B.c.h(s,3,q.C())
q.k()
q.k()
r.f=q.k()
r.r=q.k()
q.k()
q.k()
q.k()
q.k()
r.Q=q.k()
return r},
iA(a){var s,r,q=A.w(a,!1,null,0)
if(q.k()!==52)return null
s=new A.d3()
s.b=q.k()
s.a=q.k()
q.k()
s.d=q.k()
q.k()
s.f=q.k()
q.k()
q.k()
q.k()
s.y=q.k()
r=q.k()
s.z=r
s.Q=q.k()
if(r!==559044176)return null
return s},
ip(a){var s,r,q,p,o,n,m=null,l=a.length,k=A.w(a,!1,m,0)
if(k.k()!==0)return m
s=new A.ea()
s.b=k.k()
s.a=k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
r=k.k()
s.y=r
if(r===559044176)return m
if(l===32){q=0
p=8}else{o=0
while(!0){if(!(o<10)){q=1
p=8
break}n=o<<1>>>0
if((B.a.R(64,n)&l)>>>0!==0){p=B.a.R(16,o)
q=1
break}if((B.a.R(128,n)&l)>>>0!==0){p=B.a.R(16,o)
q=0
break}++o}if(o===10)return m}if((q+1)*2===4)return m
s.b=s.a=p
return s},
aw(a){var s,r,q=this,p=q.b
if(p==null||q.a==null)return null
if(p instanceof A.ea){p=p.a
s=q.b
s=s.gK(s)
r=q.a
r.toString
return q.dE(p,s,r)}else if(p instanceof A.d3){p=q.a
p.toString
return q.iz(p)}else if(p instanceof A.d4){p=q.a
p.toString
return q.iB(p)}return null},
bc(a,b,c){if(this.bh(b)==null)return null
return this.aw(0)},
iz(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=a.length
if(f<52||h.b==null)return g
s=h.b
s.toString
t.fi.a(s)
r=A.w(a,!1,g,0)
r.d+=52
q=s.Q
if(q<1)q=(s.d&4096)!==0?6:1
if(q!==1)return g
p=s.a
o=s.b
if(p*o*s.f/8>f-52)return g
switch(s.d&255){case 16:n=A.Q(g,g,B.e,0,B.i,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gJ(s);s.E();){m=s.gU()
p=r.a
o=r.d
l=r.d=o+1
k=p.length
if(!(o>=0&&o<k))return A.a(p,o)
o=p[o]
r.d=l+1
if(!(l>=0&&l<k))return A.a(p,l)
l=p[l]
m.sp(0,l&240)
m.st((l&15)<<4)
m.su(o&240)
m.sv((o&15)<<4)}return n
case 17:n=A.Q(g,g,B.e,0,B.i,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gJ(s);s.E();){m=s.gU()
j=r.l()
i=(j&1)!==0?255:0
m.sp(0,j>>>8&248)
m.st(j>>>3&248)
m.su((j&62)<<2)
m.sv(i)}return n
case 18:n=A.Q(g,g,B.e,0,B.i,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gJ(s);s.E();){m=s.gU()
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.sp(0,p[o])
o=r.a
p=r.d++
if(!(p>=0&&p<o.length))return A.a(o,p)
m.st(o[p])
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.su(p[o])
o=r.a
p=r.d++
if(!(p>=0&&p<o.length))return A.a(o,p)
m.sv(o[p])}return n
case 19:n=A.Q(g,g,B.e,0,B.i,o,g,0,3,g,p,!1)
for(s=n.a,s=s.gJ(s);s.E();){m=s.gU()
j=r.l()
m.sp(0,j>>>8&248)
m.st(j>>>3&252)
m.su((j&31)<<3)}return n
case 20:n=A.Q(g,g,B.e,0,B.i,o,g,0,3,g,p,!1)
for(s=n.a,s=s.gJ(s);s.E();){m=s.gU()
j=r.l()
m.sp(0,(j&31)<<3)
m.st(j>>>2&248)
m.su(j>>>7&248)}return n
case 21:n=A.Q(g,g,B.e,0,B.i,o,g,0,3,g,p,!1)
for(s=n.a,s=s.gJ(s);s.E();){m=s.gU()
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.sp(0,p[o])
o=r.a
p=r.d++
if(!(p>=0&&p<o.length))return A.a(o,p)
m.st(o[p])
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.su(p[o])}return n
case 22:n=A.Q(g,g,B.e,0,B.i,o,g,0,1,g,p,!1)
for(s=n.a,s=s.gJ(s);s.E();){m=s.gU()
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.sp(0,p[o])}return n
case 23:n=A.Q(g,g,B.e,0,B.i,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gJ(s);s.E();){m=s.gU()
p=r.a
o=r.d
l=r.d=o+1
k=p.length
if(!(o>=0&&o<k))return A.a(p,o)
o=p[o]
r.d=l+1
if(!(l>=0&&l<k))return A.a(p,l)
l=p[l]
m.sp(0,l)
m.st(l)
m.su(l)
m.sv(o)}return n
case 24:return g
case 25:return s.y===0?h.eD(p,o,r.a1()):h.dE(p,o,r.a1())}return g},
iB(a){var s,r,q=this.b
if(!(q instanceof A.d4))return null
s=A.w(a,!1,null,0)
r=s.d+=52
s.d=r+q.Q
if(q.c[0]===0)switch(q.b){case 2:return this.eD(q.r,q.f,s.a1())
case 3:return this.dE(q.r,q.f,s.a1())}return null},
eD(e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4=null,d5=A.Q(d4,d4,B.e,0,B.i,e5,d4,0,3,d4,e4,!1),d6=e4/4|0,d7=d6-1,d8=A.V(e6.buffer,0,d4),d9=new A.Z(d8),e0=new A.Z(A.V(e6.buffer,0,d4)),e1=new A.Z(A.V(e6.buffer,0,d4)),e2=new A.Z(A.V(e6.buffer,0,d4)),e3=new A.Z(A.V(e6.buffer,0,d4))
for(s=d8.length,r=0,q=0;r<d6;++r,q+=4)for(p=0,o=0;p<d6;++p,o+=4){d9.b=A.a3(p,r)<<1>>>0
d9.av()
n=d9.b
if(!(n<s))return A.a(d8,n)
m=d8[n]
l=d9.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&d7)>>>0
h=(i+1&d7)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&d7)>>>0
e=(f+1&d7)>>>0
e0.b=A.a3(f,i)<<1>>>0
e0.av()
e1.b=A.a3(e,i)<<1>>>0
e1.av()
e2.b=A.a3(f,h)<<1>>>0
e2.av()
e3.b=A.a3(e,h)<<1>>>0
e3.av()
d=e0.bT()
if(!(k>=0&&k<16))return A.a(B.f,k)
c=B.f[k][0]
b=d.a
a=d.b
d=d.c
a0=e1.bT()
a1=B.f[k][1]
a2=a0.a
a3=a0.b
a0=a0.c
a4=e2.bT()
a5=B.f[k][2]
a6=a4.a
a7=a4.b
a4=a4.c
a8=e3.bT()
a9=B.f[k][3]
b0=a8.a
b1=a8.b
a8=a8.c
b2=e0.bU()
b3=B.f[k][0]
b4=b2.a
b5=b2.b
b2=b2.c
b6=e1.bU()
b7=B.f[k][1]
b8=b6.a
b9=b6.b
b6=b6.c
c0=e2.bU()
c1=B.f[k][2]
c2=c0.a
c3=c0.b
c0=c0.c
c4=e3.bU()
c5=B.f[k][3]
c6=c4.a
c7=c4.b
c4=c4.c
c8=B.bj[l+m&3]
c9=c8[0]
d0=c8[1]
d1=B.a.j((b*c+a2*a1+a6*a5+b0*a9)*c9+(b4*b3+b8*b7+c2*c1+c6*c5)*d0,7)
d2=B.a.j((a*c+a3*a1+a7*a5+b1*a9)*c9+(b5*b3+b9*b7+c3*c1+c7*c5)*d0,7)
d3=B.a.j((d*c+a0*a1+a4*a5+a8*a9)*c9+(b2*b3+b6*b7+c0*c1+c4*c5)*d0,7)
d0=d5.a
if(d0!=null)d0.V(g+o,n,d1,d2,d3)
m=m>>>2;++k}}}return d5},
dE(c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1=A.Q(b0,b0,B.e,0,B.i,c1,b0,0,4,b0,c0,!1),b2=c0/4|0,b3=b2-1,b4=A.V(c2.buffer,0,b0),b5=new A.Z(b4),b6=new A.Z(A.V(c2.buffer,0,b0)),b7=new A.Z(A.V(c2.buffer,0,b0)),b8=new A.Z(A.V(c2.buffer,0,b0)),b9=new A.Z(A.V(c2.buffer,0,b0))
for(s=b4.length,r=0,q=0;r<b2;++r,q+=4)for(p=0,o=0;p<b2;++p,o+=4){b5.b=A.a3(p,r)<<1>>>0
b5.av()
n=b5.b
if(!(n<s))return A.a(b4,n)
m=b4[n]
l=b5.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&b3)>>>0
h=(i+1&b3)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&b3)>>>0
e=(f+1&b3)>>>0
b6.b=A.a3(f,i)<<1>>>0
b6.av()
b7.b=A.a3(e,i)<<1>>>0
b7.av()
b8.b=A.a3(f,h)<<1>>>0
b8.av()
b9.b=A.a3(e,h)<<1>>>0
b9.av()
d=b6.bV()
if(!(k>=0&&k<16))return A.a(B.f,k)
c=B.f[k][0]
b=d.a
a=d.b
a0=d.c
d=d.d
a1=b7.bV()
a2=B.f[k][1]
a2=new A.J(b*c,a*c,a0*c,d*c).aJ(0,new A.J(a1.a*a2,a1.b*a2,a1.c*a2,a1.d*a2))
a1=b8.bV()
c=B.f[k][2]
c=a2.aJ(0,new A.J(a1.a*c,a1.b*c,a1.c*c,a1.d*c))
a1=b9.bV()
a2=B.f[k][3]
a3=c.aJ(0,new A.J(a1.a*a2,a1.b*a2,a1.c*a2,a1.d*a2))
a2=b6.bW()
a1=B.f[k][0]
c=a2.a
d=a2.b
a0=a2.c
a2=a2.d
a=b7.bW()
b=B.f[k][1]
b=new A.J(c*a1,d*a1,a0*a1,a2*a1).aJ(0,new A.J(a.a*b,a.b*b,a.c*b,a.d*b))
a=b8.bW()
a1=B.f[k][2]
a1=b.aJ(0,new A.J(a.a*a1,a.b*a1,a.c*a1,a.d*a1))
a=b9.bW()
b=B.f[k][3]
a4=a1.aJ(0,new A.J(a.a*b,a.b*b,a.c*b,a.d*b))
a5=B.bj[l+m&3]
b=a3.a
a=a5[0]
a1=a4.a
a2=a5[1]
a6=B.a.j(b*a+a1*a2,7)
a7=B.a.j(a3.b*a+a4.b*a2,7)
a8=B.a.j(a3.c*a+a4.c*a2,7)
a9=B.a.j(a3.d*a5[2]+a4.d*a5[3],7)
a2=b1.a
if(a2!=null)a2.ao(g+o,n,a6,a7,a8,a9)
m=m>>>2;++k}}}return b1}}
A.eb.prototype={
a8(){return"PvrFormat."+this.b}}
A.iA.prototype={
bw(a){var s,r,q,p,o=A.a7(!1,8192)
switch(0){case 0:if(a.gaI()===3){s=this.kH(a)
r=B.k9}else{s=this.kI(a)
r=B.ka}break}q=a.gK(a)
p=a.gP(a)
o.G(55727696)
o.G(0)
o.G(r.a-1)
o.G(0)
o.G(0)
o.G(0)
o.G(q)
o.G(p)
o.G(1)
o.G(1)
o.G(1)
o.G(1)
o.G(0)
o.a3(s)
return A.y(o.c.buffer,0,o.a)},
kH(d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=null
if(d1.gP(d1)!==d1.gK(d1))throw A.d(A.j("PVRTC requires a square image."))
s=d1.gP(d1)
if((s&s-1)>>>0!==0)throw A.d(A.j(u.b))
r=B.a.S(d1.gP(d1),4)
q=r-1
s=B.a.S(d1.gP(d1)*d1.gK(d1),2)
p=new Uint8Array(s)
s=A.V(p.buffer,0,d0)
o=new A.Z(s)
n=new A.Z(A.V(p.buffer,0,d0))
m=new A.Z(A.V(p.buffer,0,d0))
l=new A.Z(A.V(p.buffer,0,d0))
k=new A.Z(A.V(p.buffer,0,d0))
for(j=s.length,i=t.k,h=0;h<r;++h)for(g=0;g<r;++g){f=A.o0(d1,g,h)
o.b=A.a3(g,h)<<1>>>0
o.av()
o.c=!1
e=o.aF()
d=o.b+1
if(!(d<j))return A.a(s,d)
s[d]=e
e=i.a(f.a)
d=e.a
if(!(d>=0&&d<256))return A.a(B.E,d)
c=B.E[d]
d=e.b
if(!(d>=0&&d<256))return A.a(B.E,d)
b=B.E[d]
e=e.c
if(!(e>=0&&e<256))return A.a(B.F,e)
o.d=(c<<9|b<<4|B.F[e])>>>0
e=o.aF()
d=o.b+1
if(!(d<j))return A.a(s,d)
s[d]=e
o.e=!0
e=o.aF()
d=o.b+1
if(!(d<j))return A.a(s,d)
s[d]=e
e=i.a(f.b)
d=e.a
if(!(d>=0&&d<256))return A.a(B.u,d)
c=B.u[d]
d=e.b
if(!(d>=0&&d<256))return A.a(B.u,d)
b=B.u[d]
e=e.c
if(!(e>=0&&e<256))return A.a(B.u,e)
o.f=(c<<10|b<<5|B.u[e])>>>0
e=o.aF()
d=o.b+1
if(!(d<j))return A.a(s,d)
s[d]=e
o.r=!1
e=o.aF()
d=o.b+1
if(!(d<j))return A.a(s,d)
s[d]=e}for(h=0,a=0;h<r;++h,a+=4)for(g=0,a0=0;g<r;++g,a0+=4){for(a1=0,a2=0,a3=0;a3<4;++a3){a4=(h+(a3<2?-1:0)&q)>>>0
a5=(a4+1&q)>>>0
for(i=a+a3,a6=0;a6<4;++a6){a7=(g+(a6<2?-1:0)&q)>>>0
a8=(a7+1&q)>>>0
n.b=A.a3(a7,a4)<<1>>>0
n.av()
m.b=A.a3(a8,a4)<<1>>>0
m.av()
l.b=A.a3(a7,a5)<<1>>>0
l.av()
k.b=A.a3(a8,a5)<<1>>>0
k.av()
e=n.bT()
if(!(a1>=0&&a1<16))return A.a(B.f,a1)
d=B.f[a1][0]
a9=e.a
b0=e.b
e=e.c
b1=m.bT()
b2=B.f[a1][1]
b3=b1.a
b4=b1.b
b1=b1.c
b5=l.bT()
b6=B.f[a1][2]
b7=b5.a
b8=b5.b
b5=b5.c
b9=k.bT()
c0=B.f[a1][3]
b7=a9*d+b3*b2+b7*b6+b9.a*c0
b8=b0*d+b4*b2+b8*b6+b9.b*c0
c0=e*d+b1*b2+b5*b6+b9.c*c0
b9=n.bU()
b6=B.f[a1][0]
b5=b9.a
b2=b9.b
b9=b9.c
b1=m.bU()
d=B.f[a1][1]
e=b1.a
b4=b1.b
b1=b1.c
b0=l.bU()
b3=B.f[a1][2]
a9=b0.a
c1=b0.b
b0=b0.c
c2=k.bU()
c3=B.f[a1][3]
c4=c2.a
c5=c2.b
c2=c2.c
c6=d1.a
c7=c6==null?d0:c6.M(a0+a6,i,d0)
if(c7==null)c7=new A.B()
e=b5*b6+e*d+a9*b3+c4*c3-b7
c5=b2*b6+b4*d+c1*b3+c5*c3-b8
c3=b9*b6+b1*d+b0*b3+c2*c3-c0
c8=((B.b.i(c7.gp(c7))*16-b7)*e+(B.b.i(c7.gt())*16-b8)*c5+(B.b.i(c7.gu())*16-c0)*c3)*16
c9=e*e+c5*c5+c3*c3
if(c8>3*c9)++a2
if(c8>8*c9)++a2
if(c8>13*c9)++a2
a2=(a2>>>2|a2<<30)>>>0;++a1}}o.b=A.a3(g,h)<<1>>>0
o.av()
i=o.b
if(!(i<j))return A.a(s,i)
s[i]=a2}return p},
kI(c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=null
if(c3.gP(c3)!==c3.gK(c3))throw A.d(A.j("PVRTC requires a square image."))
s=c3.gP(c3)
if((s&s-1)>>>0!==0)throw A.d(A.j(u.b))
r=B.a.S(c3.gP(c3),4)
q=r-1
s=B.a.S(c3.gP(c3)*c3.gK(c3),2)
p=new Uint8Array(s)
s=A.V(p.buffer,0,c2)
o=new A.Z(s)
n=new A.Z(A.V(p.buffer,0,c2))
m=new A.Z(A.V(p.buffer,0,c2))
l=new A.Z(A.V(p.buffer,0,c2))
k=new A.Z(A.V(p.buffer,0,c2))
for(j=s.length,i=t.R,h=0,g=0;h<r;++h,g+=4)for(f=0,e=0;f<r;++f,e+=4){d=A.o1(c3,e,g)
o.b=A.a3(f,h)<<1>>>0
o.av()
o.c=!1
c=o.aF()
b=o.b+1
if(!(b<j))return A.a(s,b)
s[b]=c
c=i.a(d.a)
b=c.d
if(!(b>=0&&b<256))return A.a(B.a5,b)
a=B.a5[b]
b=c.a
a0=c.b
c=c.c
if(a===7){if(!(b>=0&&b<256))return A.a(B.E,b)
a1=B.E[b]
if(!(a0>=0&&a0<256))return A.a(B.E,a0)
a2=B.E[a0]
if(!(c>=0&&c<256))return A.a(B.F,c)
o.d=(a1<<9|a2<<4|B.F[c])>>>0
c=o.aF()
b=o.b+1
if(!(b<j))return A.a(s,b)
s[b]=c
o.e=!0
c=o.aF()
b=o.b+1
if(!(b<j))return A.a(s,b)
s[b]=c}else{if(!(b>=0&&b<256))return A.a(B.F,b)
a1=B.F[b]
if(!(a0>=0&&a0<256))return A.a(B.F,a0)
a2=B.F[a0]
if(!(c>=0&&c<256))return A.a(B.a5,c)
o.d=(a<<11|a1<<7|a2<<3|B.a5[c])>>>0
c=o.aF()
b=o.b+1
if(!(b<j))return A.a(s,b)
s[b]=c
o.e=!1
c=o.aF()
b=o.b+1
if(!(b<j))return A.a(s,b)
s[b]=c}c=i.a(d.b)
b=c.d
if(!(b>=0&&b<256))return A.a(B.bh,b)
a=B.bh[b]
b=c.a
a0=c.b
c=c.c
if(a===7){if(!(b>=0&&b<256))return A.a(B.u,b)
a1=B.u[b]
if(!(a0>=0&&a0<256))return A.a(B.u,a0)
a2=B.u[a0]
if(!(c>=0&&c<256))return A.a(B.u,c)
o.f=(a1<<10|a2<<5|B.u[c])>>>0
c=o.aF()
b=o.b+1
if(!(b<j))return A.a(s,b)
s[b]=c
o.r=!0
c=o.aF()
b=o.b+1
if(!(b<j))return A.a(s,b)
s[b]=c}else{if(!(b>=0&&b<256))return A.a(B.S,b)
a1=B.S[b]
if(!(a0>=0&&a0<256))return A.a(B.S,a0)
a2=B.S[a0]
if(!(c>=0&&c<256))return A.a(B.S,c)
o.f=(a<<12|a1<<8|a2<<4|B.S[c])>>>0
c=o.aF()
b=o.b+1
if(!(b<j))return A.a(s,b)
s[b]=c
o.r=!1
c=o.aF()
b=o.b+1
if(!(b<j))return A.a(s,b)
s[b]=c}}for(h=0,g=0;h<r;++h,g+=4)for(f=0,e=0;f<r;++f,e+=4){for(a3=0,a4=0,a5=0;a5<4;++a5){a6=(h+(a5<2?-1:0)&q)>>>0
a7=(a6+1&q)>>>0
for(i=g+a5,a8=0;a8<4;++a8){a9=(f+(a8<2?-1:0)&q)>>>0
b0=(a9+1&q)>>>0
n.b=A.a3(a9,a6)<<1>>>0
n.av()
m.b=A.a3(b0,a6)<<1>>>0
m.av()
l.b=A.a3(a9,a7)<<1>>>0
l.av()
k.b=A.a3(b0,a7)<<1>>>0
k.av()
c=n.bV()
if(!(a3>=0&&a3<16))return A.a(B.f,a3)
b=B.f[a3][0]
a0=c.a
b1=c.b
b2=c.c
c=c.d
b3=m.bV()
b4=B.f[a3][1]
b4=new A.J(a0*b,b1*b,b2*b,c*b).aJ(0,new A.J(b3.a*b4,b3.b*b4,b3.c*b4,b3.d*b4))
b3=l.bV()
b=B.f[a3][2]
b=b4.aJ(0,new A.J(b3.a*b,b3.b*b,b3.c*b,b3.d*b))
b3=k.bV()
b4=B.f[a3][3]
b5=b.aJ(0,new A.J(b3.a*b4,b3.b*b4,b3.c*b4,b3.d*b4))
b4=n.bW()
b3=B.f[a3][0]
b=b4.a
c=b4.b
b2=b4.c
b4=b4.d
b1=m.bW()
a0=B.f[a3][1]
a0=new A.J(b*b3,c*b3,b2*b3,b4*b3).aJ(0,new A.J(b1.a*a0,b1.b*a0,b1.c*a0,b1.d*a0))
b1=l.bW()
b3=B.f[a3][2]
b3=a0.aJ(0,new A.J(b1.a*b3,b1.b*b3,b1.c*b3,b1.d*b3))
b1=k.bW()
a0=B.f[a3][3]
b6=b3.aJ(0,new A.J(b1.a*a0,b1.b*a0,b1.c*a0,b1.d*a0))
a0=c3.a
b7=a0==null?c2:a0.M(e+a8,i,c2)
if(b7==null)b7=new A.B()
a1=A.k(b7.gp(b7))
a2=A.k(b7.gt())
b8=A.k(b7.gu())
a=A.k(b7.gv())
b9=b6.aV(0,b5)
c0=new A.J(a1*16,a2*16,b8*16,a*16).aV(0,b5).fF(b9)*16
c1=b9.fF(b9)
if(c0>3*c1)++a4
if(c0>8*c1)++a4
if(c0>13*c1)++a4
a4=(a4>>>2|a4<<30)>>>0;++a3}}o.b=A.a3(f,h)<<1>>>0
o.av()
i=o.b
if(!(i<j))return A.a(s,i)
s[i]=a4}return p}}
A.iB.prototype={
$2(a,b){var s=this.a.aM(this.b+a,this.c+b)
return new A.aP(A.k(s.gp(s)),A.k(s.gt()),A.k(s.gu()))},
$S:24}
A.iC.prototype={
$2(a,b){var s=this.a.aM(this.b+a,this.c+b)
return new A.J(A.k(s.gp(s)),A.k(s.gt()),A.k(s.gu()),A.k(s.gv()))},
$S:25}
A.eh.prototype={
cn(a){var s,r,q=this
if(a.c-a.d<18)return
q.a=a.C()
q.b=a.C()
s=a.C()
if(s<12){if(!(s>=0))return A.a(B.b7,s)
r=B.b7[s]}else r=B.am
q.c=r
a.l()
q.e=a.l()
q.f=a.C()
a.l()
a.l()
q.x=a.l()
q.y=a.l()
q.z=a.C()
q.Q=a.C()},
fM(){var s=this,r=s.z
if(r!==8&&r!==16&&r!==24&&r!==32)return!1
r=s.c
if(r===B.H||r===B.I){if(s.e>256||s.b!==1)return!1
r=s.f
if(r!==16&&r!==24&&r!==32)return!1}else if(s.b===1)return!1
return!0},
$iS:1}
A.ao.prototype={
a8(){return"TgaImageType."+this.b}}
A.iH.prototype={
bc(a,b,c){if(this.bh(b)==null)return null
return this.aw(0)},
bh(a){var s,r,q,p,o=this
o.a=new A.eh(B.am)
s=A.w(a,!1,null,0)
o.b=s
r=s.ae(18)
o.a.cn(r)
if(!o.a.fM())return null
s=o.b
q=o.a
s.d+=q.a
p=q.c
if(p===B.H||p===B.I)q.as=s.ae(q.e*B.a.j(q.f,3)).a1()
s=o.a
s.ax=o.b.d
return s},
aw(a){var s=this,r=s.a
if(r==null)return null
r=r.c
if(r===B.c7)return s.eC()
else if(r===B.c6||r===B.I)return s.iE()
else if(r===B.H)return s.eC()
return null},
ey(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.w(a,!1,null,0),e=g.a.f
if(e===16){e=g.b
e===$&&A.c("input")
s=e.l()
r=s>>>7&248
q=s>>>2&248
p=(s&31)<<3
o=(s&32768)!==0?0:255
for(n=0;n<g.a.e;++n){b.bD(n,r)
b.bB(n,q)
b.bA(n,p)
b.bz(n,o)}}else{m=e===32
for(n=0;n<g.a.e;++n){e=f.a
l=f.d
k=f.d=l+1
j=e.length
if(!(l>=0&&l<j))return A.a(e,l)
l=e[l]
i=f.d=k+1
if(!(k>=0&&k<j))return A.a(e,k)
k=e[k]
h=f.d=i+1
if(!(i>=0&&i<j))return A.a(e,i)
i=e[i]
if(m){f.d=h+1
if(!(h>=0&&h<j))return A.a(e,h)
o=e[h]}else o=255
b.bD(n,i)
b.bB(n,k)
b.bA(n,l)
b.bz(n,o)}}},
iE(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.a,a0=a.z,a1=a0===16,a2=a1||a0===32,a3=a.x,a4=a.y,a5=a2?4:3
a=a.c
s=A.Q(b,b,B.e,0,B.i,a4,b,0,a5,b,a3,a===B.H||a===B.I)
a=s.a
if((a==null?b:a.gL())!=null){a=c.a.as
a.toString
a3=s.a
a3=a3==null?b:a3.gL()
a3.toString
c.ey(a,a3)}r=s.gP(s)
q=s.gK(s)-1
a=a0===8
p=0
while(!0){a3=c.b
a3===$&&A.c("input")
a4=a3.d
if(!(a4<a3.c&&q>=0))break
a5=a3.a
o=a3.d=a4+1
n=a5.length
if(!(a4>=0&&a4<n))return A.a(a5,a4)
a4=a5[a4]
m=(a4&127)+1
if((a4&128)!==0)if(a){a3.d=o+1
if(!(o>=0&&o<n))return A.a(a5,o)
a3=a5[o]
for(l=0;l<m;++l){k=p+1
a4=s.a
if(a4!=null)a4.aN(p,q,a3)
if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}}else if(a1){j=a3.l()
i=j>>>7&248
h=j>>>2&248
g=(j&31)<<3
f=(j&32768)!==0?0:255
for(l=0;l<m;++l){k=p+1
a3=s.a
if(a3!=null)a3.ao(p,q,i,h,g,f)
if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}}else{a4=a3.d=o+1
if(!(o>=0&&o<n))return A.a(a5,o)
o=a5[o]
e=a3.d=a4+1
if(!(a4>=0&&a4<n))return A.a(a5,a4)
a4=a5[a4]
d=a3.d=e+1
if(!(e>=0&&e<n))return A.a(a5,e)
e=a5[e]
if(a2){a3.d=d+1
if(!(d>=0&&d<n))return A.a(a5,d)
f=a5[d]}else f=255
for(l=0;l<m;++l){k=p+1
a3=s.a
if(a3!=null)a3.ao(p,q,e,a4,o,f)
if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}}else if(a)for(l=0;l<m;++l){a3=c.b
a4=a3.a
a3=a3.d++
if(!(a3>=0&&a3<a4.length))return A.a(a4,a3)
a3=a4[a3]
k=p+1
a4=s.a
if(a4!=null)a4.aN(p,q,a3)
if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}else if(a1)for(l=0;l<m;++l){j=a3.l()
f=(j&32768)!==0?0:255
k=p+1
a3=s.a
if(a3!=null)a3.ao(p,q,j>>>7&248,j>>>2&248,(j&31)<<3,f)
a3=c.b
if(a3.d>=a3.c){p=k
break}if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}else for(l=0;l<m;++l){a3=c.b
a4=a3.a
a5=a3.d
o=a3.d=a5+1
n=a4.length
if(!(a5>=0&&a5<n))return A.a(a4,a5)
a5=a4[a5]
e=a3.d=o+1
if(!(o>=0&&o<n))return A.a(a4,o)
o=a4[o]
d=a3.d=e+1
if(!(e>=0&&e<n))return A.a(a4,e)
e=a4[e]
if(a2){a3.d=d+1
if(!(d>=0&&d<n))return A.a(a4,d)
f=a4[d]}else f=255
k=p+1
a3=s.a
if(a3!=null)a3.ao(p,q,e,o,a5,f)
if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}if(p>=r){--q
if(q<0)break
p=0}}return s},
eC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.b
b===$&&A.c("input")
s=d.a
b.d=s.ax
r=s.z
b=r===16
if(!b)if(r!==32){q=s.c
if(q===B.H||q===B.I){q=s.f
q=q===16||q===32}else q=!1
p=q}else p=!0
else p=!0
q=s.x
o=s.y
n=p?4:3
s=s.c
m=A.Q(c,c,B.e,0,B.i,o,c,0,n,c,q,s===B.H||s===B.I)
s=d.a
q=s.c
if(q===B.H||q===B.I){s=s.as
s.toString
q=m.a
q=q==null?c:q.gL()
q.toString
d.ey(s,q)}if(r===8)for(l=m.gK(m)-1;l>=0;--l){k=0
while(!0){b=m.a
s=b==null
q=s?c:b.a
if(!(k<(q==null?0:q)))break
q=d.b
o=q.a
q=q.d++
if(!(q>=0&&q<o.length))return A.a(o,q)
q=o[q]
if(!s)b.aN(k,l,q);++k}}else if(b)for(l=m.gK(m)-1;l>=0;--l){k=0
while(!0){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
j=d.b.l()
i=(j&32768)!==0?0:255
b=m.a
if(b!=null)b.ao(k,l,j>>>7&248,j>>>2&248,(j&31)<<3,i);++k}}else for(l=m.gK(m)-1;l>=0;--l){k=0
while(!0){b=m.a
s=b==null
q=s?c:b.a
if(!(k<(q==null?0:q)))break
q=d.b
o=q.a
n=q.d
h=q.d=n+1
g=o.length
if(!(n>=0&&n<g))return A.a(o,n)
n=o[n]
f=q.d=h+1
if(!(h>=0&&h<g))return A.a(o,h)
h=o[h]
e=q.d=f+1
if(!(f>=0&&f<g))return A.a(o,f)
f=o[f]
if(p){q.d=e+1
if(!(e>=0&&e<g))return A.a(o,e)
i=o[e]}else i=255
if(!s)b.ao(k,l,f,h,n,i);++k}}return m}}
A.iI.prototype={
bw(a){var s,r,q,p,o,n,m,l=null,k=A.a7(!0,8192),j=A.U(18,0,!1,t.p)
B.c.h(j,2,2)
B.c.h(j,12,a.gP(a)&255)
B.c.h(j,13,B.a.j(a.gP(a),8)&255)
B.c.h(j,14,a.gK(a)&255)
B.c.h(j,15,B.a.j(a.gK(a),8)&255)
s=a.a
s=s==null?l:s.gL()
r=s==null?l:s.b
if(r==null)r=a.gaI()
B.c.h(j,16,r===3?24:32)
k.a3(j)
if(r===4)for(q=a.gK(a)-1;q>=0;--q){p=0
while(!0){s=a.a
o=s==null
n=o?l:s.a
if(!(p<(n==null?0:n)))break
m=o?l:s.M(p,q,l)
if(m==null)m=new A.B()
k.m(A.k(m.gu()))
k.m(A.k(m.gt()))
k.m(A.k(m.gp(m)))
k.m(A.k(m.gv()));++p}}else for(q=a.gK(a)-1;q>=0;--q){p=0
while(!0){s=a.a
o=s==null
n=o?l:s.a
if(!(p<(n==null?0:n)))break
m=o?l:s.M(p,q,l)
if(m==null)m=new A.B()
k.m(A.k(m.gu()))
k.m(A.k(m.gt()))
k.m(A.k(m.gp(m)));++p}}return A.y(k.c.buffer,0,k.a)}}
A.iJ.prototype={
ad(a){var s,r,q,p,o,n=this
if(a===0)return 0
if(n.c===0){n.c=8
n.b=n.a.C()}for(s=n.a,r=0;q=n.c,a>q;){p=B.a.W(r,q)
o=n.b
if(!(q>=0&&q<9))return A.a(B.z,q)
r=p+(o&B.z[q])
a-=q
n.c=8
q=s.a
o=s.d++
if(!(o>=0&&o<q.length))return A.a(q,o)
n.b=q[o]}if(a>0){if(q===0){n.c=8
n.b=s.C()}s=B.a.W(r,a)
q=n.b
p=n.c-a
q=B.a.b0(q,p)
if(!(a<9))return A.a(B.z,a)
r=s+(q&B.z[a])
n.c=p}return r}}
A.h7.prototype={
B(a){var s=this,r=s.a,q=$.k3().n(0,r)
if(q!=null)return q.a+": "+s.b.B(0)+" "+s.c
return"<"+r+">: "+s.b.B(0)+" "+s.c},
bo(){var s,r,q,p,o=this,n=o.e
if(n!=null)return n
n=o.f
n.d=o.d
s=o.c
r=o.b
if(r!==B.d){q=r.a
if(!(q<13))return A.a(B.x,q)
q=B.x[q]}else q=0
p=n.ae(s*q)
switch(r.a){case 1:return o.e=new A.aY(new Uint8Array(A.t(p.ae(s).a1())))
case 2:return o.e=new A.c4(s===0?"":p.af(s-1))
case 7:return o.e=new A.aY(new Uint8Array(A.t(p.ae(s).a1())))
case 3:return o.e=A.lq(p,s)
case 4:return o.e=A.ll(p,s)
case 5:return o.e=A.lm(p,s)
case 11:return o.e=A.ls(p,s)
case 12:return o.e=A.lk(p,s)
case 6:return o.e=new A.b9(new Int8Array(A.t(A.lG(p.a1().buffer,0,s))))
case 8:return o.e=A.lp(p,s)
case 9:return o.e=A.ln(p,s)
case 10:return o.e=A.lo(p,s)
case 0:return null}}}
A.iM.prototype={
kA(a,b,c,d){var s,r,q,p=this
p.r=b
p.x=p.w=0
s=B.a.S(p.a+7,8)
for(r=0,q=0;q<d;++q){p.dD(a,r,c)
r+=s}},
dD(a,b,c){var s,r,q,p,o,n,m,l=this
l.d=0
for(s=l.a,r=!0;c<s;){for(;r;){q=l.c_(10)
if(!(q<1024))return A.a(B.ak,q)
p=B.ak[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|l.b1(2))>>>0
if(!(q<16))return A.a(B.G,q)
p=B.G[q]
n=B.a.j(p,1)
c+=B.a.j(p,4)&4095
l.aC(4-(n&7))}else if(o===0)throw A.d(A.j("TIFFFaxDecoder0"))
else if(o===15)throw A.d(A.j("TIFFFaxDecoder1"))
else{c+=B.a.j(p,5)&2047
l.aC(10-o)
if((p&1)===0){B.c.h(l.f,l.d++,c)
r=!1}}}if(c===s){if(l.z===2)if(l.w!==0){s=l.x
s.toString
l.x=s+1
l.w=0}break}for(;!r;){q=l.b1(4)
if(!(q<16))return A.a(B.ah,q)
p=B.ah[q]
m=p>>>5&2047
if(m===100){q=l.c_(9)
if(!(q<512))return A.a(B.ae,q)
p=B.ae[q]
o=B.a.j(p,1)&15
m=B.a.j(p,5)&2047
if(o===12){l.aC(5)
q=l.b1(4)
if(!(q<16))return A.a(B.G,q)
p=B.G[q]
n=B.a.j(p,1)
m=B.a.j(p,4)&4095
l.ba(a,b,c,m)
c+=m
l.aC(4-(n&7))}else if(o===15)throw A.d(A.j("TIFFFaxDecoder2"))
else{l.ba(a,b,c,m)
c+=m
l.aC(9-o)
if((p&1)===0){B.c.h(l.f,l.d++,c)
r=!0}}}else{if(m===200){q=l.b1(2)
if(!(q<4))return A.a(B.a4,q)
p=B.a4[q]
m=p>>>5&2047
l.ba(a,b,c,m)
c+=m
l.aC(2-(p>>>1&15))
B.c.h(l.f,l.d++,c)}else{l.ba(a,b,c,m)
c+=m
l.aC(4-(p>>>1&15))
B.c.h(l.f,l.d++,c)}r=!0}}if(c===s){if(l.z===2)if(l.w!==0){s=l.x
s.toString
l.x=s+1
l.w=0}break}}B.c.h(l.f,l.d++,c)},
kB(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
a0.r=a2
a0.z=3
a0.x=a0.w=0
s=a0.a
r=B.a.S(s+7,8)
q=A.U(2,null,!1,t.v)
a0.at=a5&1
a0.as=a5>>>2&1
if(a0.f2()!==1)throw A.d(A.j("TIFFFaxDecoder3"))
a0.dD(a1,0,a3)
for(p=r,o=1;o<a4;++o){if(a0.f2()===0){n=a0.e
a0.se3(a0.f)
a0.se0(n)
a0.y=0
m=a3
l=-1
k=!0
j=0
while(!0){m.toString
if(!(m<s))break
a0.eL(l,k,q)
i=q[0]
h=q[1]
g=a0.b1(7)
if(!(g<128))return A.a(B.a7,g)
g=B.a7[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a0.ba(a1,p,m,h-m)}a0.aC(7-e)
m=h
l=m}else if(f===1){a0.aC(7-e)
d=j+1
c=d+1
if(k){m+=a0.d5()
B.c.h(a0.f,j,m)
b=a0.d4()
a0.ba(a1,p,m,b)
m+=b
B.c.h(a0.f,d,m)}else{b=a0.d4()
a0.ba(a1,p,m,b)
m+=b
B.c.h(a0.f,j,m)
m+=a0.d5()
B.c.h(a0.f,d,m)}j=c
l=m}else{if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.c.h(a0.f,j,a)
k=!k
if(k)a0.ba(a1,p,m,a-m)
a0.aC(7-e)}else throw A.d(A.j("TIFFFaxDecoder4"))
m=a
j=d
l=m}}B.c.h(a0.f,j,m)
a0.d=j+1}else a0.dD(a1,p,a3)
p+=r}},
kE(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.r=a5
a3.z=4
a3.x=a3.w=0
s=a3.a
r=B.a.S(s+7,8)
q=A.U(2,null,!1,t.v)
p=a3.f
a3.d=0
a3.d=1
B.c.h(p,0,s)
B.c.h(p,a3.d++,s)
for(o=0,n=0;n<a7;++n){m=a3.e
a3.se3(a3.f)
a3.se0(m)
a3.y=0
l=a6
k=-1
j=!0
i=0
while(!0){l.toString
if(!(l<s))break
a3.eL(k,j,q)
h=q[0]
g=q[1]
f=a3.b1(7)
if(!(f<128))return A.a(B.a7,f)
f=B.a7[f]&255
e=f>>>3&15
d=f&7
if(e===0){if(!j){g.toString
a3.ba(a4,o,l,g-l)}a3.aC(7-d)
l=g
k=l}else if(e===1){a3.aC(7-d)
c=i+1
b=c+1
if(j){l+=a3.d5()
B.c.h(m,i,l)
a=a3.d4()
a3.ba(a4,o,l,a)
l+=a
B.c.h(m,c,l)}else{a=a3.d4()
a3.ba(a4,o,l,a)
l+=a
B.c.h(m,i,l)
l+=a3.d5()
B.c.h(m,c,l)}i=b
k=l}else if(e<=8){h.toString
a0=h+(e-5)
c=i+1
B.c.h(m,i,a0)
j=!j
if(j)a3.ba(a4,o,l,a0-l)
a3.aC(7-d)
l=a0
i=c
k=l}else if(e===11){if(a3.b1(3)!==7)throw A.d(A.j("TIFFFaxDecoder5"))
for(a1=0,a2=!1;!a2;){for(;a3.b1(1)!==1;)++a1
if(a1>5){a1-=6
if(!j&&a1>0){c=i+1
B.c.h(m,i,l)
i=c}l+=a1
if(a1>0)j=!0
if(a3.b1(1)===0){if(!j){c=i+1
B.c.h(m,i,l)
i=c}j=!0}else{if(j){c=i+1
B.c.h(m,i,l)
i=c}j=!1}a2=!0}if(a1===5){if(!j){c=i+1
B.c.h(m,i,l)
i=c}l+=a1
j=!0}else{l+=a1
c=i+1
B.c.h(m,i,l)
a3.ba(a4,o,l,1);++l
i=c
j=!1}}}else throw A.d(A.j("TIFFFaxDecoder5 "+e))}B.c.h(m,i,l)
a3.d=i+1
o+=r}},
d5(){var s,r,q,p,o,n,m=this
for(s=0,r=!0;r;){q=m.c_(10)
if(!(q<1024))return A.a(B.ak,q)
p=B.ak[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|m.b1(2))>>>0
if(!(q<16))return A.a(B.G,q)
p=B.G[q]
n=B.a.j(p,1)
s+=B.a.j(p,4)&4095
m.aC(4-(n&7))}else if(o===0)throw A.d(A.j("TIFFFaxDecoder0"))
else if(o===15)throw A.d(A.j("TIFFFaxDecoder1"))
else{s+=B.a.j(p,5)&2047
m.aC(10-o)
if((p&1)===0)r=!1}}return s},
d4(){var s,r,q,p,o,n,m,l=this
for(s=0,r=!1;!r;){q=l.b1(4)
if(!(q<16))return A.a(B.ah,q)
p=B.ah[q]
o=p>>>5&2047
if(o===100){q=l.c_(9)
if(!(q<512))return A.a(B.ae,q)
p=B.ae[q]
n=B.a.j(p,1)&15
m=B.a.j(p,5)
if(n===12){l.aC(5)
q=l.b1(4)
if(!(q<16))return A.a(B.G,q)
p=B.G[q]
m=B.a.j(p,1)
s+=B.a.j(p,4)&4095
l.aC(4-(m&7))}else if(n===15)throw A.d(A.j("TIFFFaxDecoder2"))
else{s+=m&2047
l.aC(9-n)
if((p&1)===0)r=!0}}else{if(o===200){q=l.b1(2)
if(!(q<4))return A.a(B.a4,q)
p=B.a4[q]
s+=p>>>5&2047
l.aC(2-(p>>>1&15))}else{s+=o
l.aC(4-(p>>>1&15))}r=!0}}return s},
f2(){var s,r,q=this,p="TIFFFaxDecoder8",o=q.as
if(o===0){if(q.c_(12)!==1)throw A.d(A.j("TIFFFaxDecoder6"))}else if(o===1){o=q.w
o.toString
s=8-o
if(q.c_(s)!==0)throw A.d(A.j(p))
if(s<4)if(q.c_(8)!==0)throw A.d(A.j(p))
for(;r=q.c_(8),r!==1;)if(r!==0)throw A.d(A.j(p))}if(q.at===0)return 1
else return q.b1(1)},
eL(a,b,c){var s,r,q,p,o,n,m=this
t.cP.a(c)
s=m.e
r=m.d
q=m.y
p=q>0?q-1:0
p=b?(p&4294967294)>>>0:(p|1)>>>0
for(q=s.length,o=p;o<r;o+=2){if(!(o<q))return A.a(s,o)
n=s[o]
n.toString
a.toString
if(n>a){m.y=o
B.c.h(c,0,n)
break}}n=o+1
if(n<r){if(!(n<q))return A.a(s,n)
B.c.h(c,1,s[n])}},
ba(a,b,c,d){var s,r,q,p,o,n=8*b+A.k(c),m=n+d,l=B.a.j(n,3),k=n&7
if(k>0){s=B.a.W(1,7-k)
r=a.a
q=a.d+l
if(!(q>=0&&q<r.length))return A.a(r,q)
p=r[q]
while(!0){if(!(s>0&&n<m))break
p=(p|s)>>>0
s=s>>>1;++n}a.h(0,l,p)}l=B.a.j(n,3)
for(r=m-7;n<r;l=o){o=l+1
J.A(a.a,a.d+l,255)
n+=8}for(;n<m;){l=B.a.j(n,3)
r=a.a
q=a.d+l
if(!(q>=0&&q<r.length))return A.a(r,q)
J.A(r,q,(r[q]|B.a.W(1,7-(n&7)))>>>0);++n}},
c_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.r
c===$&&A.c("data")
s=c.d
r=c.c-s-1
q=d.x
p=d.c
if(p===1){q.toString
c=c.a
p=s+q
o=c.length
if(!(p>=0&&p<o))return A.a(c,p)
n=c[p]
if(q===r){m=0
l=0}else{p=q+1
k=s+p
if(p===r){if(!(k>=0&&k<o))return A.a(c,k)
m=c[k]
l=0}else{if(!(k>=0&&k<o))return A.a(c,k)
m=c[k]
s+=q+2
if(!(s>=0&&s<o))return A.a(c,s)
l=c[s]}}}else if(p===2){q.toString
c=c.a
p=s+q
o=c.length
if(!(p>=0&&p<o))return A.a(c,p)
n=B.R[c[p]&255]
if(q===r){m=0
l=0}else{p=q+1
k=s+p
if(p===r){if(!(k>=0&&k<o))return A.a(c,k)
m=B.R[c[k]&255]
l=0}else{if(!(k>=0&&k<o))return A.a(c,k)
m=B.R[c[k]&255]
s+=q+2
if(!(s>=0&&s<o))return A.a(c,s)
l=B.R[c[s]&255]}}}else throw A.d(A.j("TIFFFaxDecoder7"))
c=d.w
c.toString
j=8-c
i=a-j
if(i>8){h=i-8
g=8}else{g=i
h=0}q.toString
c=d.x=q+1
if(!(j>=0&&j<9))return A.a(B.z,j)
f=B.a.W(n&B.z[j],i)
if(!(g>=0))return A.a(B.T,g)
e=B.a.a2(m&B.T[g],8-g)
if(h!==0){e=B.a.W(e,h)
if(!(h<9))return A.a(B.T,h)
e|=B.a.a2(l&B.T[h],8-h)
d.x=c+1
d.w=h}else if(g===8){d.w=0
d.x=c+1}else d.w=g
return(f|e)>>>0},
b1(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r
g===$&&A.c("data")
s=g.d
r=g.c-s-1
q=h.x
p=h.c
if(p===1){q.toString
g=g.a
p=s+q
o=g.length
if(!(p>=0&&p<o))return A.a(g,p)
n=g[p]
if(q===r)m=0
else{s+=q+1
if(!(s>=0&&s<o))return A.a(g,s)
m=g[s]}}else if(p===2){q.toString
g=g.a
p=s+q
o=g.length
if(!(p>=0&&p<o))return A.a(g,p)
n=B.R[g[p]&255]
if(q===r)m=0
else{s+=q+1
if(!(s>=0&&s<o))return A.a(g,s)
m=B.R[g[s]&255]}}else throw A.d(A.j("TIFFFaxDecoder7"))
g=h.w
g.toString
l=8-g
k=a-l
j=l-a
if(j>=0){if(!(l>=0&&l<9))return A.a(B.z,l)
i=B.a.a2(n&B.z[l],j)
g+=a
h.w=g
if(g===8){h.w=0
q.toString
h.x=q+1}}else{if(!(l>=0&&l<9))return A.a(B.z,l)
i=B.a.W(n&B.z[l],-j)
if(!(k>=0&&k<9))return A.a(B.T,k)
i=(i|B.a.a2(m&B.T[k],8-k))>>>0
q.toString
h.x=q+1
h.w=k}return i},
aC(a){var s,r=this,q=r.w
q.toString
s=q-a
if(s<0){q=r.x
q.toString
r.x=q-1
r.w=8+s}else r.w=s},
se3(a){this.e=t.j.a(a)},
se0(a){this.f=t.j.a(a)}}
A.h8.prototype={
hC(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=A.o(a2,a,0),a1=a2.l()
for(s=b.a,r=0;r<a1;++r){q=a2.l()
p=a2.l()
if(!(p<13))return A.a(B.a9,p)
o=B.a9[p]
n=B.x[p]
m=a2.k()
if(m*n>4)l=a2.k()
else{l=a2.d
a2.d=l+4}k=new A.h7(q,o,m,l,a0)
s.h(0,q,k)
if(q===256){j=k.bo()
j=j==null?a:j.i(0)
b.b=j==null?0:j}else if(q===257){j=k.bo()
j=j==null?a:j.i(0)
b.c=j==null?0:j}else if(q===262){i=k.bo()
h=i==null?a:i.i(0)
if(h==null)h=17
if(h<17){if(!(h>=0))return A.a(B.bq,h)
b.d=B.bq[h]}else b.d=B.aL}else if(q===259){j=k.bo()
j=j==null?a:j.i(0)
b.e=j==null?0:j}else if(q===258){j=k.bo()
j=j==null?a:j.i(0)
b.f=j==null?0:j}else if(q===277){j=k.bo()
j=j==null?a:j.i(0)
b.r=j==null?0:j}else if(q===317){j=k.bo()
j=j==null?a:j.i(0)
b.z=j==null?0:j}else if(q===339){j=k.bo()
i=j==null?a:j.i(0)
if(i==null)i=0
if(!(i>=0&&i<4))return A.a(B.bm,i)
b.w=B.bm[i]}else if(q===320){i=k.bo()
if(i!=null){j=i.by().buffer
g=B.a.S(j.byteLength-0,2)
b.skt(new Uint16Array(j,0,g))
b.id=0
j=b.go.length/3|0
b.k1=j
b.k2=j*2}}}f=b.go
j=f!=null
if(j&&b.d===B.aM)b.r=1
if(b.b===0||b.c===0)return
if(j&&b.f===8){e=f.length
for(r=0;r<e;++r)f[r]=f[r]>>>8}if(b.d===B.aK)b.y=!0
if(s.al(324)){b.ax=b.cl(322)
b.ay=b.cl(323)
b.sfY(b.dd(324))
b.sfX(b.dd(325))}else{b.ax=b.dc(322,b.b)
if(!s.al(278))b.ay=b.dc(323,b.c)
else{d=b.cl(278)
if(d===-1)b.ay=b.c
else b.ay=d}b.sfY(b.dd(273))
b.sfX(b.dd(279))}j=b.b
c=b.ax
b.cx=B.a.aE(j+c-1,c)
c=b.c
j=b.ay
b.cy=B.a.aE(c+j-1,j)
b.dx=b.dc(266,1)
b.dy=b.cl(292)
b.fr=b.cl(293)
b.cl(338)
switch(b.d.a){case 0:case 1:s=b.f
if(s===1&&b.r===1)b.x=B.aJ
else if(s===4&&b.r===1)b.x=B.kj
else if(B.a.a6(s,8)===0){s=b.r
if(s===1)b.x=B.kk
else if(s===2)b.x=B.kl
else b.x=B.an}break
case 2:if(B.a.a6(b.f,8)===0){s=b.r
if(s===3)b.x=B.c8
else if(s===4)b.x=B.kn
else b.x=B.an}break
case 3:if(b.r===1)if(b.go!=null){s=b.f
s=s===4||s===8||s===16}else s=!1
else s=!1
if(s)b.x=B.km
break
case 4:if(b.f===1&&b.r===1)b.x=B.aJ
break
case 6:if(b.e===7&&b.f===8&&b.r===3)b.x=B.c8
else{if(s.al(530)){i=s.n(0,530).bo()
b.Q=i.i(0)
s=b.as=i.ag(0,1)}else s=b.as=b.Q=2
j=b.Q
j===$&&A.c("chromaSubH")
if(j*s===1)b.x=B.an
else if(b.f===8&&b.r===3)b.x=B.ko}break
default:if(B.a.a6(b.f,8)===0)b.x=B.an
break}},
c1(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.w,b=c===B.X,a=c===B.k
c=e.f
if(c===1)s=B.y
else if(c===2)s=B.p
else{if(c===4)c=B.t
else if(b&&c===16)c=B.C
else if(b&&c===32)c=B.K
else if(b&&c===64)c=B.N
else if(a&&c===8)c=B.O
else if(a&&c===16)c=B.P
else if(a&&c===32)c=B.Q
else if(c===16)c=B.A
else c=c===32?B.L:B.e
s=c}r=e.go!=null&&e.d===B.aM
q=r?3:e.r
c=e.b
p=A.Q(d,d,s,0,B.i,e.c,d,0,q,d,c,r)
if(r){c=p.a
c=c==null?d:c.gL()
c.toString
o=e.go
n=o.length
m=n/3|0
for(l=0;l<m;++l){k=e.id
k===$&&A.c("colorMapRed")
k+=l
if(!(k<n))return A.a(o,k)
k=o[k]
j=e.k1
j===$&&A.c("colorMapGreen")
j+=l
if(!(j<n))return A.a(o,j)
j=o[j]
i=e.k2
i===$&&A.c("colorMapBlue")
i+=l
if(!(i<n))return A.a(o,i)
c.aU(l,k,j,o[i])}}h=0
g=0
while(!0){c=e.cy
c===$&&A.c("tilesY")
if(!(h<c))break
f=0
while(!0){c=e.cx
c===$&&A.c("tilesX")
if(!(f<c))break
e.iF(a1,p,f,h);++f;++g}++h}return p},
iF(b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null
if(b2.x===B.aJ){b2.is(b4,b5,b6,b7)
return}p=b2.cx
p===$&&A.c("tilesX")
o=b7*p+b6
p=b2.ch
if(!(o>=0&&o<p.length))return A.a(p,o)
b4.sfQ(0,p[o])
p=b2.ax
n=b6*p
m=b2.ay
l=b7*m
k=b2.CW
if(!(o<k.length))return A.a(k,o)
s=k[o]
j=p*m*b2.r
p=b2.f
m=p===16
if(m)j*=2
else if(p===32)j*=4
r=null
if(p===8||m||p===32||p===64){p=b2.e
if(p===1)r=b4
else if(p===5){r=A.w(new Uint8Array(j),!1,b3,0)
q=A.lE()
try{J.n4(q,A.o(b4,s,0),r.a)}catch(i){}if(b2.z===2)for(h=0;h<b2.ay;++h){g=b2.r
p=b2.ax
f=g*(h*p+1)
e=p*g
for(;g<e;++g){p=r
m=p.a
p=p.d+f
if(!(p>=0&&p<m.length))return A.a(m,p)
k=m[p]
d=r
c=b2.r
b=d.a
c=d.d+(f-c)
if(!(c>=0&&c<b.length))return A.a(b,c)
J.A(m,p,k+b[c]);++f}}}else if(p===32773){r=A.w(new Uint8Array(j),!1,b3,0)
b2.eB(b4,j,r.a)}else if(p===32946){p=A.lu(b4.cT(0,0,s)).c
r=A.w(t.L.a(A.y(p.c.buffer,0,p.a)),!1,b3,0)}else if(p===8)r=A.w(B.Y.cL(A.c5(t.L.a(b4.cT(0,0,s)),1,b3,0),!1),!1,b3,0)
else if(p===6){b2.jk(new A.fv().c1(0,t.D.a(b4.cT(0,0,s))),b5,n,l,b2.ax,b2.ay)
return}else throw A.d(A.j("Unsupported Compression Type: "+p))
a=l
a0=0
while(!0){if(!(a0<b2.ay&&a<b2.c))break
a1=n
a2=0
while(!0){if(!(a2<b2.ax&&a1<b2.b))break
p=b2.r
if(p===1){p=b2.w
if(p===B.X){p=b2.f
if(p===32){p=r.k()
$.L()[0]=p
p=$.bZ()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else if(p===64)a3=r.dn()
else if(p===16){p=r.l()
m=$.N
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a3=m[p]}else a3=0
p=b5.a
if(p!=null)p.aN(a1,a,a3)}else{m=b2.f
if(m===8)if(p===B.k){p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
p=m[p]
$.ar()[0]=p
p=$.aC()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
a3=m[p]}else if(m===16)if(p===B.k){p=r.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else a3=r.l()
else if(m===32)if(p===B.k){p=r.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else a3=r.k()
else a3=0
if(b2.d===B.aK){p=b5.a
a4=p==null?b3:p.gF()
a3=(a4==null?0:a4)-a3}p=b5.a
if(p!=null)p.aN(a1,a,a3)}}else if(p===2){p=b2.f
if(p===8){p=b2.w===B.k
if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.ar()[0]=m
m=$.aC()
if(0>=m.length)return A.a(m,0)
a5=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a5=k[m]}if(p){p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
p=m[p]
$.ar()[0]=p
p=$.aC()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
a6=m[p]}}else if(p===16){if(b2.w===B.k){p=r.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.l()
if(b2.w===B.k){p=r.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.l()}else if(p===32){if(b2.w===B.k){p=r.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.k()
if(b2.w===B.k){p=r.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.k()}else{a5=0
a6=0}p=b5.a
if(p!=null)p.V(a1,a,a5,a6,0)}else if(p===3){p=b2.w
if(p===B.X){p=b2.f
if(p===32){p=r.k()
m=$.L()
m[0]=p
p=$.bZ()
if(0>=p.length)return A.a(p,0)
a7=p[0]
m[0]=r.k()
a8=p[0]
m[0]=r.k()
a9=p[0]}else if(p===64){a7=r.dn()
a8=0
a9=0}else if(p===16){p=r.l()
m=$.N
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.l()
m=$.N
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a8=m[p]
p=r.l()
m=$.N
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a9=m[p]}else{a7=0
a8=0
a9=0}p=b5.a
if(p!=null)p.V(a1,a,a7,a8,a9)}else{m=b2.f
if(m===8){p=p===B.k
if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.ar()[0]=m
m=$.aC()
if(0>=m.length)return A.a(m,0)
a7=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a7=k[m]}if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.ar()[0]=m
m=$.aC()
if(0>=m.length)return A.a(m,0)
a8=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a8=k[m]}if(p){p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
p=m[p]
$.ar()[0]=p
p=$.aC()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
a9=m[p]}}else if(m===16){if(p===B.k){p=r.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.l()
if(b2.w===B.k){p=r.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.l()
if(b2.w===B.k){p=r.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.l()}else if(m===32){if(p===B.k){p=r.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.k()
if(b2.w===B.k){p=r.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.k()
if(b2.w===B.k){p=r.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.k()}else{a7=0
a8=0
a9=0}p=b5.a
if(p!=null)p.V(a1,a,a7,a8,a9)}}else if(p>=4){p=b2.w
if(p===B.X){p=b2.f
if(p===32){p=r.k()
m=$.L()
m[0]=p
p=$.bZ()
if(0>=p.length)return A.a(p,0)
a7=p[0]
m[0]=r.k()
a8=p[0]
m[0]=r.k()
a9=p[0]
m[0]=r.k()
b0=p[0]}else if(p===64){a7=r.dn()
a8=0
a9=0
b0=0}else if(p===16){p=r.l()
m=$.N
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.l()
m=$.N
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a8=m[p]
p=r.l()
m=$.N
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a9=m[p]
p=r.l()
m=$.N
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
b0=m[p]}else{a7=0
a8=0
a9=0
b0=0}p=b5.a
if(p!=null)p.ao(a1,a,a7,a8,a9,b0)}else{m=b2.f
if(m===8){p=p===B.k
if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.ar()[0]=m
m=$.aC()
if(0>=m.length)return A.a(m,0)
a7=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a7=k[m]}if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.ar()[0]=m
m=$.aC()
if(0>=m.length)return A.a(m,0)
a8=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a8=k[m]}if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.ar()[0]=m
m=$.aC()
if(0>=m.length)return A.a(m,0)
a9=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a9=k[m]}if(p){p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
p=m[p]
$.ar()[0]=p
p=$.aC()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
b0=m[p]}}else if(m===16){if(p===B.k){p=r.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.l()
if(b2.w===B.k){p=r.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.l()
if(b2.w===B.k){p=r.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.l()
if(b2.w===B.k){p=r.l()
$.aq()[0]=p
p=$.aB()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else b0=r.l()}else if(m===32){if(p===B.k){p=r.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.k()
if(b2.w===B.k){p=r.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.k()
if(b2.w===B.k){p=r.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.k()
if(b2.w===B.k){p=r.k()
$.L()[0]=p
p=$.a8()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else b0=r.k()}else{a7=0
a8=0
a9=0
b0=0}if(b2.d===B.c9){b1=A.mA(a7,a8,a9,b0)
a7=b1[0]
a8=b1[1]
a9=b1[2]
p=b5.a
b0=p==null?b3:p.gF()
if(b0==null)b0=0}p=b5.a
if(p!=null)p.ao(a1,a,a7,a8,a9,b0)}}++a2;++a1}++a0;++a}}else throw A.d(A.j("Unsupported bitsPerSample: "+p))},
jk(a,b,c,d,e,f){var s,r,q,p
for(s=0;s<f;++s)for(r=s+d,q=0;q<e;++q){p=a.a
p=p==null?null:p.M(q,s,null)
if(p==null)p=new A.B()
b.bX(q+c,r,p)}},
is(a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=a4.cx
a6===$&&A.c("tilesX")
r=b0*a6+a9
a6=a4.ch
if(!(r>=0&&r<a6.length))return A.a(a6,r)
a7.sfQ(0,a6[r])
a6=a4.ax
q=a9*a6
p=a4.ay
o=b0*p
n=a4.CW
if(!(r<n.length))return A.a(n,r)
m=n[r]
s=null
n=a4.e
if(n===32773){l=B.a.a6(a6,8)===0?B.a.S(a6,8)*p:(B.a.S(a6,8)+1)*p
s=A.w(new Uint8Array(a6*p),!1,a5,0)
a4.eB(a7,l,s.a)}else if(n===5){s=A.w(new Uint8Array(a6*p),!1,a5,0)
A.lE().fD(0,A.o(a7,m,0),s.a)
if(a4.z===2)for(k=0;k<a4.c;++k){j=a4.r
i=j*(k*a4.b+1)
for(;a6=a4.b,p=a4.r,j<a6*p;++j){a6=s
n=a6.a
a6=a6.d+i
if(!(a6>=0&&a6<n.length))return A.a(n,a6)
h=n[a6]
g=s
f=g.a
p=g.d+(i-p)
if(!(p>=0&&p<f.length))return A.a(f,p)
J.A(n,a6,h+f[p]);++i}}}else if(n===2){s=A.w(new Uint8Array(a6*p),!1,a5,0)
try{A.kz(a4.dx,a6,p).kA(s,a7,0,a4.ay)}catch(e){}}else if(n===3){s=A.w(new Uint8Array(a6*p),!1,a5,0)
try{A.kz(a4.dx,a6,p).kB(s,a7,0,a4.ay,a4.dy)}catch(e){}}else if(n===4){s=A.w(new Uint8Array(a6*p),!1,a5,0)
try{A.kz(a4.dx,a6,p).kE(s,a7,0,a4.ay,a4.fr)}catch(e){}}else if(n===8)s=A.w(B.Y.cL(A.c5(t.L.a(a7.cT(0,0,m)),1,a5,0),!1),!1,a5,0)
else if(n===32946){a6=A.lu(a7.cT(0,0,m)).c
s=A.w(t.L.a(A.y(a6.c.buffer,0,a6.a)),!1,a5,0)}else if(n===1)s=a7
else throw A.d(A.j("Unsupported Compression Type: "+n))
d=new A.iJ(s)
c=a8.gF()
a6=a4.y
b=a6?c:0
a=a6?0:c
for(a0=o,a1=0;a1<a4.ay;++a1,++a0){for(a2=q,a3=0;a3<a4.ax;++a3,++a2){a6=a8.a
p=a6==null
n=p?a5:a6.b
if(a0<(n==null?0:n)){a6=p?a5:a6.a
a6=a2>=(a6==null?0:a6)}else a6=!0
if(a6)break
a6=d.ad(1)
p=a8.a
if(a6===0){if(p!=null)p.V(a2,a0,b,0,0)}else if(p!=null)p.V(a2,a0,a,0,0)}d.c=0}},
eB(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
t.L.a(c)
for(s=J.aI(c),r=0,q=0;q<b;){p=r+1
o=a.a
n=a.d
m=n+r
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
$.ar()[0]=m
m=$.aC()
if(0>=m.length)return A.a(m,0)
k=m[0]
if(k>=0&&k<=127)for(o=k+1,r=p,j=0;j<o;++j,q=i,r=p){i=q+1
p=r+1
n=a.a
m=a.d+r
if(!(m>=0&&m<n.length))return A.a(n,m)
s.h(c,q,n[m])}else{m=k<=-1&&k>=-127
r=p+1
if(m){n+=p
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
for(o=-k+1,j=0;j<o;++j,q=i){i=q+1
s.h(c,q,n)}}}}},
dc(a,b){var s=this.a
if(!s.al(a))return b
s=s.n(0,a).bo()
s=s==null?null:s.i(0)
return s==null?0:s},
cl(a){return this.dc(a,0)},
dd(a){var s,r=this.a
if(!r.al(a))return null
s=r.n(0,a)
r=s.bo()
r.toString
return A.kk(s.c,r.gbS(r),t.p)},
sfY(a){this.ch=t.T.a(a)},
sfX(a){this.CW=t.T.a(a)},
skt(a){this.go=t.T.a(a)}}
A.cp.prototype={
a8(){return"TiffFormat."+this.b}}
A.a4.prototype={
a8(){return"TiffPhotometricType."+this.b}}
A.aT.prototype={
a8(){return"TiffImageType."+this.b}}
A.h9.prototype={$iS:1}
A.il.prototype={
fD(a,b,c){var s,r,q,p,o,n,m,l,k=this,j="_out",i="_bufferLength"
t.L.a(c)
k.shM(c)
s=c.length
k.w=0
r=t.D.a(b.a)
k.e=r
q=k.f=r.length
k.b=b.d
if(0>=q)return A.a(r,0)
if(r[0]===0){if(1>=q)return A.a(r,1)
r=r[1]===1}else r=!1
if(r)throw A.d(A.j("Invalid LZW Data"))
k.eR()
k.d=k.c=0
p=k.dL()
r=k.x
o=0
while(!0){if(!(p!==257&&k.w<s))break
if(p===256){k.eR()
p=k.dL()
k.as=0
if(p===257)break
q=k.r
q===$&&A.c(j)
J.A(q,k.w++,p)
o=p}else{q=k.Q
q.toString
if(p<q){k.eM(p)
q=k.as
q===$&&A.c(i)
n=q-1
for(;n>=0;--n){q=k.r
q===$&&A.c(j)
m=k.w++
if(!(n<4096))return A.a(r,n)
J.A(q,m,r[n])}q=k.as-1
if(!(q>=0&&q<4096))return A.a(r,q)
k.ej(o,r[q])}else{k.eM(o)
q=k.as
q===$&&A.c(i)
n=q-1
for(;n>=0;--n){q=k.r
q===$&&A.c(j)
m=k.w++
if(!(n<4096))return A.a(r,n)
J.A(q,m,r[n])}q=k.r
q===$&&A.c(j)
m=k.w++
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
J.A(q,m,r[l])
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
k.ej(o,r[l])}o=p}p=k.dL()}},
ej(a,b){var s,r=this,q=r.y
q===$&&A.c("_table")
s=r.Q
s.toString
if(!(s<4096))return A.a(q,s)
q[s]=b
q=r.z
q===$&&A.c("_prefix")
q[s]=a
s=r.Q=s+1
if(s===511)r.a=10
else if(s===1023)r.a=11
else if(s===2047)r.a=12},
eM(a){var s,r,q,p,o,n,m,l=this
l.as=0
s=l.x
l.as=1
r=l.y
r===$&&A.c("_table")
if(!(a<4096))return A.a(r,a)
s[0]=r[a]
q=l.z
q===$&&A.c("_prefix")
p=q[a]
for(o=1;p!==4098;o=n){n=o+1
l.as=n
if(!(p>=0&&p<4096))return A.a(r,p)
m=r[p]
if(!(o<4096))return A.a(s,o)
s[o]=m
p=q[p]}},
dL(){var s,r,q,p,o=this,n=o.b,m=o.f
m===$&&A.c("_dataLength")
if(n>=m)return 257
for(;s=o.d,r=o.a,s<r;n=p){if(n>=m)return 257
r=o.c
q=o.e
q===$&&A.c("_data")
p=n+1
o.b=p
if(!(n>=0&&n<q.length))return A.a(q,n)
o.c=(r<<8>>>0)+q[n]>>>0
o.d=s+8}n=s-r
o.d=n
n=B.a.a2(o.c,n)
r-=9
if(!(r>=0&&r<4))return A.a(B.bd,r)
return n&B.bd[r]},
eR(){var s,r,q=this
q.y=new Uint8Array(4096)
s=new Uint32Array(4096)
q.z=s
B.W.aW(s,0,4096,4098)
for(s=q.y,r=0;r<256;++r)s[r]=r
q.a=9
q.Q=258},
shM(a){this.r=t.L.a(a)}}
A.iK.prototype={
aw(a){var s,r,q=this.a
if(q==null)return null
q=q.f
if(!(a<q.length))return A.a(q,a)
q=q[a]
s=this.c
s===$&&A.c("_input")
r=q.c1(0,s)
return r},
bc(a,b,c){var s=this,r=A.w(b,!1,null,0)
s.c=r
r=s.f4(r)
s.a=r
if(r==null)return null
return s.aw(0)},
f4(a){var s,r,q,p,o,n,m,l,k,j,i=null,h=A.b([],t.aU),g=new A.h9(h),f=a.l()
if(f!==18761&&f!==19789)return i
if(f===19789)a.e=!0
else a.e=!1
q=a.l()
g.d=q
if(q!==42)return i
p=a.k()
o=A.o(a,i,0)
o.d=p
s=o
for(q=t.p,n=t.cV;p!==0;){r=null
try{m=new A.h8(A.I(q,n),B.aL,B.aI,B.kp)
m.hC(s)
r=m
l=r
if(!(l.b!==0&&l.c!==0))break}catch(k){break}B.c.D(h,r)
l=h.length
if(l===1){if(0>=l)return A.a(h,0)
j=h[0]
g.a=j.b
if(0>=l)return A.a(h,0)
g.b=j.c}p=s.k()
if(p!==0)s.d=p}return h.length!==0?g:i}}
A.iL.prototype={
bw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="ifd0",f=A.a7(!1,8192),e=new A.c_(A.I(t.N,t.P))
if(a.e!=null)e.n(0,g).fC(a.gbE().n(0,g))
if(a.gaQ())a=a.aP(B.e)
if(a.gaI()===1)s=1
else s=a.gaH()?3:2
r=a.gaI()
q=e.n(0,g)
q.h(0,"ImageWidth",a.gP(a))
q.h(0,"ImageHeight",a.gK(a))
q.h(0,"BitsPerSample",a.gaG())
q.h(0,"SampleFormat",this.j9(a).a)
q.h(0,"SamplesPerPixel",a.gaH()?1:r)
q.h(0,"Compression",1)
q.h(0,"PhotometricInterpretation",s)
q.h(0,"RowsPerStrip",a.gK(a))
q.h(0,"PlanarConfiguration",1)
q.h(0,"TileWidth",a.gP(a))
q.h(0,"TileLength",a.gK(a))
q.h(0,"StripByteCounts",a.gfP(a))
q.h(0,"StripOffsets",new A.bK(new Uint8Array(A.t(a.a1()))))
if(a.gaH()){p=a.a
o=p==null?null:p.gL()
n=o.a
p=n*3
m=new Uint16Array(p)
for(l=0,k=0;l<3;++l)for(j=0;j<n;++j,k=i){i=k+1
h=B.b.i(o.b6(j,l))
if(!(k>=0&&k<p))return A.a(m,k)
m[k]=h<<8>>>0}q.h(0,"ColorMap",m)}e.aS(f)
return A.y(f.c.buffer,0,f.a)},
j9(a){var s=a.a
s=s==null?null:s.gbm()
switch((s==null?B.J:s).a){case 0:return B.aI
case 1:return B.k
case 2:return B.X}}}
A.iR.prototype={
cM(){var s,r=this.a,q=r.bp()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.bp()!==2752925)return!1
s=this.b
s.a=r.l()
s.b=r.l()
return!0},
bN(a){var s,r,q=this,p=null
if(!q.j7())return p
s=q.b
r=s.a
q.d=A.Q(p,p,B.e,0,B.i,s.b,p,0,4,p,r,!1)
q.je()
if(!q.jv())return p
return q.d},
j7(){var s,r,q,p,o=this
if(!o.cM())return!1
o.fr=A.oO()
for(s=o.dy,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.c.h(s,r,new A.hh(q,p,new Int32Array(2)))}o.y=o.Q=0
s=o.b
q=s.a
o.z=q
s=s.b
o.as=s
o.at=q+15>>>4
o.ax=s+15>>>4
o.k1=0
s=o.a
q=o.f
p=q.d
p===$&&A.c("partitionLength")
p=A.m5(s.aj(p))
o.c=p
s.d+=q.d
p.Z(1)
o.c.Z(1)
o.jB(o.x,o.fr)
o.ju()
if(!o.jx(s))return!1
o.jz()
o.c.Z(1)
o.jy()
return!0},
jB(a,b){var s,r,q,p=this,o=p.c
o===$&&A.c("br")
o=o.Z(1)!==0
a.a=o
if(o){a.b=p.c.Z(1)!==0
if(p.c.Z(1)!==0){a.c=p.c.Z(1)!==0
for(o=a.d,s=0;s<4;++s){if(p.c.Z(1)!==0){r=p.c
q=r.Z(7)
r=r.Z(1)===1?-q:q}else r=0
o[s]=r}for(o=a.e,s=0;s<4;++s){if(p.c.Z(1)!==0){r=p.c
q=r.Z(6)
r=r.Z(1)===1?-q:q}else r=0
o[s]=r}}if(a.b)for(s=0;s<3;++s){o=b.a
o[s]=p.c.Z(1)!==0?p.c.Z(8):255}}else a.b=!1
return!0},
ju(){var s,r,q,p=this,o=p.w,n=p.c
n===$&&A.c("br")
o.a=n.Z(1)!==0
o.b=p.c.Z(6)
o.c=p.c.Z(3)
n=p.c.Z(1)!==0
o.d=n
if(n)if(p.c.Z(1)!==0){for(n=o.e,s=0;s<4;++s)if(p.c.Z(1)!==0){r=p.c
q=r.Z(6)
n[s]=r.Z(1)===1?-q:q}for(n=o.f,s=0;s<4;++s)if(p.c.Z(1)!==0){r=p.c
q=r.Z(6)
n[s]=r.Z(1)===1?-q:q}}if(o.b===0)n=0
else n=o.a?1:2
p.bl=n
return!0},
jx(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.c-a.d,g=this.c
g===$&&A.c("br")
g=B.a.R(1,g.Z(2))
this.cy=g
s=g-1
r=s*3
if(h<r)return!1
for(g=this.db,q=0,p=0;p<s;++p,r=i){o=a.d0(3,q)
n=o.a
m=o.d
l=n.length
if(!(m>=0&&m<l))return A.a(n,m)
k=n[m]
j=m+1
if(!(j<l))return A.a(n,j)
j=n[j]
m+=2
if(!(m<l))return A.a(n,m)
i=r+((k|j<<8|n[m]<<16)>>>0)
if(i>h)i=h
n=new A.ej(a.c7(i-r,r))
n.b=254
n.c=0
n.d=-8
B.c.h(g,p,n)
q+=3}B.c.h(g,s,A.m5(a.c7(h-r,a.d-a.b+r)))
return r<h},
jz(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c
e===$&&A.c("br")
s=e.Z(7)
r=f.c.Z(1)!==0?f.c.cr(4):0
q=f.c.Z(1)!==0?f.c.cr(4):0
p=f.c.Z(1)!==0?f.c.cr(4):0
o=f.c.Z(1)!==0?f.c.cr(4):0
n=f.c.Z(1)!==0?f.c.cr(4):0
m=f.x
for(e=f.dy,l=m.d,k=0;k<4;++k){if(m.a){j=l[k]
if(!m.c)j+=s}else{if(k>0){i=e[0]
if(!(k>=0&&k<4))return A.a(e,k)
e[k]=i
continue}j=s}h=e[k]
i=h.a
g=j+r
if(g<0)g=0
else if(g>127)g=127
i[0]=B.aE[g]
if(j<0)g=0
else g=j>127?127:j
i[1]=B.aD[g]
g=h.b
i=j+q
if(i<0)i=0
else if(i>127)i=127
g[0]=B.aE[i]*2
i=j+p
if(i<0)i=0
else if(i>127)i=127
g[1]=B.aD[i]*101581>>>16
if(g[1]<8)g[1]=8
i=h.c
g=j+o
if(g<0)g=0
else if(g>117)g=117
i[0]=B.aE[g]
g=j+n
if(g<0)g=0
else if(g>127)g=127
i[1]=B.aD[g]}},
jy(){var s,r,q,p,o,n,m=this,l=m.fr
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=m.c
o===$&&A.c("br")
n=o.a5(B.e7[s][r][q][p])!==0?m.c.Z(8):B.iY[s][r][q][p]
o=l.b
if(!(s<o.length))return A.a(o,s)
o=o[s]
if(!(r<o.length))return A.a(o,r)
o=o[r].a
if(!(q<o.length))return A.a(o,q)
o[q][p]=n}o=m.c
o===$&&A.c("br")
o=o.Z(1)!==0
m.fx=o
if(o)m.fy=m.c.Z(8)},
jD(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.bl
f.toString
if(f>0){s=g.w
for(f=s.e,r=s.f,q=g.x,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){m=g.b3
m===$&&A.c("_fStrengths")
if(!(o<m.length))return A.a(m,o)
k=m[o][l]
m=s.d
m===$&&A.c("useLfDelta")
if(m){n.toString
j=n+f[0]
if(l!==0)j+=r[0]}else j=n
j.toString
if(j<0)j=0
else if(j>63)j=63
if(j>0){m=s.c
m===$&&A.c("sharpness")
if(m>0){i=m>4?B.a.j(j,2):B.a.j(j,1)
h=9-m
if(i>h)i=h}else i=j
if(i<1)i=1
k.b=i
k.a=2*j+i
if(j>=40)m=2
else m=j>=15?1:0
k.d=m}else k.a=0
k.c=l!==0}}}},
je(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.b,e=f.at
if(e!=null)h.c2=e
s=J.am(4,t.e6)
for(e=t.ao,r=0;r<4;++r)s[r]=A.b([new A.bw(),new A.bw()],e)
h.shU(t.gS.a(s))
e=h.at
e.toString
s=J.am(e,t.dE)
for(q=0;q<e;++q){p=new Uint8Array(16)
o=new Uint8Array(8)
s[q]=new A.en(p,o,new Uint8Array(8))}h.shX(t.cC.a(s))
h.ok=new Uint8Array(832)
e=h.at
e.toString
h.go=new Uint8Array(4*e)
p=h.p4=16*e
o=h.R8=8*e
n=h.bl
n.toString
if(!(n<3))return A.a(B.a3,n)
m=B.a3[n]
l=m*p
k=(m/2|0)*o
h.p1=A.w(new Uint8Array(16*p+l),!1,g,l)
p=8*o+k
h.p2=A.w(new Uint8Array(p),!1,g,k)
h.p3=A.w(new Uint8Array(p),!1,g,k)
f=f.a
h.RG=A.w(new Uint8Array(f),!1,g,0)
j=f+1>>>1
h.rx=A.w(new Uint8Array(j),!1,g,0)
h.ry=A.w(new Uint8Array(j),!1,g,0)
if(n===2)h.ch=h.ay=0
else{f=h.y
f===$&&A.c("_cropLeft")
f=B.a.S(f-m,16)
h.ay=f
p=h.Q
p.toString
p=B.a.S(p-m,16)
h.ch=p
if(f<0)h.ay=0
if(p<0)h.ch=0}f=h.as
f.toString
f=B.a.S(f+15+m,16)
h.cx=f
p=h.z
p===$&&A.c("_cropRight")
p=B.a.S(p+15+m,16)
h.CW=p
if(p>e)h.CW=e
p=h.ax
p.toString
if(f>p)h.cx=p
i=e+1
s=J.am(i,t.ai)
for(q=0;q<i;++q)s[q]=new A.el()
h.shW(t.eQ.a(s))
f=h.at
f.toString
s=J.am(f,t.gU)
for(q=0;q<f;++q){e=new Int16Array(384)
s[q]=new A.em(e,new Uint8Array(16))}h.shV(t.db.a(s))
f=h.at
f.toString
h.shT(t.ge.a(A.U(f,g,!1,t.aj)))
h.jD()
A.of()
h.e=new A.iS()
return!0},
jv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="isIntra4x4"
e.y2=0
s=e.id
r=e.x
q=e.db
p=0
while(!0){o=e.cx
o.toString
if(!(p<o))break
o=e.cy
o===$&&A.c("_numPartitions")
o=(p&o-1)>>>0
if(!(o>=0&&o<8))return A.a(q,o)
n=q[o]
while(!0){p=e.y1
o=e.at
o.toString
if(!(p<o))break
o=e.k3
o===$&&A.c("_mbInfo")
m=o.length
if(0>=m)return A.a(o,0)
l=o[0]
k=1+p
if(!(k<m))return A.a(o,k)
j=o[k]
k=e.b2
k===$&&A.c("_mbData")
if(!(p<k.length))return A.a(k,p)
i=k[p]
if(r.b){p=e.c
p===$&&A.c("br")
p=p.a5(e.fr.a[0])
o=e.c
m=e.fr
e.k1=p===0?o.a5(m.a[1]):2+o.a5(m.a[2])}p=e.fx
p===$&&A.c("_useSkipProba")
if(p){p=e.c
p===$&&A.c("br")
o=e.fy
o===$&&A.c("_skipP")
h=p.a5(o)!==0}else h=!1
e.jw()
if(!h)h=e.jA(j,n)
else{l.a=j.a=0
p=i.b
p===$&&A.c(d)
if(!p)l.b=j.b=0
i.f=i.e=0}p=e.bl
p.toString
if(p>0){p=e.k4
p===$&&A.c("_fInfo")
o=e.y1
m=e.b3
m===$&&A.c("_fStrengths")
k=e.k1
k===$&&A.c("_segment")
if(!(k<m.length))return A.a(m,k)
k=m[k]
m=i.b
m===$&&A.c(d)
B.c.h(p,o,k[m?1:0])
p=e.k4
o=e.y1
if(!(o<p.length))return A.a(p,o)
g=p[o]
g.c=g.c||!h}++e.y1}p=e.k3
p===$&&A.c("_mbInfo")
if(0>=p.length)return A.a(p,0)
p=p[0]
p.b=p.a=0
B.m.aW(s,0,4,0)
e.y1=0
e.k9()
p=e.bl
p.toString
if(p>0){p=e.y2
o=e.ch
o===$&&A.c("_tlMbY")
if(p>=o){o=e.cx
o.toString
o=p<=o
f=o}else f=!1}else f=!1
if(!e.j3(f))return!1
p=++e.y2}return!0},
k9(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="_dsp",a6=a3.y2,a7=a3.ok
a7===$&&A.c("_yuvBlock")
s=A.w(a7,!1,a4,40)
r=A.w(a7,!1,a4,584)
q=A.w(a7,!1,a4,600)
a7=a6>0
p=0
while(!0){o=a3.at
o.toString
if(!(p<o))break
o=a3.b2
o===$&&A.c("_mbData")
if(!(p<o.length))return A.a(o,p)
n=o[p]
if(p>0){for(m=-1;m<16;++m){o=m*32
s.bn(o-4,4,s,o+12)}for(m=-1;m<8;++m){o=m*32
l=o-4
o+=4
r.bn(l,4,r,o)
q.bn(l,4,q,o)}}else{for(m=0;m<16;++m)J.A(s.a,s.d+(m*32-1),129)
for(m=0;m<8;++m){o=m*32-1
J.A(r.a,r.d+o,129)
J.A(q.a,q.d+o,129)}if(a7){J.A(q.a,q.d+-33,129)
J.A(r.a,r.d+-33,129)
J.A(s.a,s.d+-33,129)}}o=a3.k2
o===$&&A.c("_yuvT")
if(!(p<o.length))return A.a(o,p)
k=o[p]
j=n.a
i=n.e
if(a7){s.c5(-32,16,k.a)
r.c5(-32,8,k.b)
q.c5(-32,8,k.c)}else if(p===0){o=s.a
l=s.d+-33
J.bi(o,l,l+21,127)
l=r.a
o=r.d+-33
J.bi(l,o,o+9,127)
o=q.a
l=q.d+-33
J.bi(o,l,l+9,127)}o=n.b
o===$&&A.c("isIntra4x4")
if(o){h=A.o(s,a4,-16)
g=h.cU()
if(a7){o=a3.at
o.toString
if(p>=o-1){o=k.a[15]
l=h.a
f=h.d
J.bi(l,f,f+4,o)}else{o=a3.k2
l=p+1
if(!(l<o.length))return A.a(o,l)
h.c5(0,4,o[l].a)}}o=g.length
if(0>=o)return A.a(g,0)
e=g[0]
if(96>=o)return A.a(g,96)
g[96]=e
g[64]=e
g[32]=e
for(o=n.c,d=0;d<16;++d,i=i<<2>>>0){c=A.o(s,a4,B.bJ[d])
l=o[d]
if(!(l<10))return A.a(B.bS,l)
B.bS[l].$1(c)
i.toString
l=d*16
a3.eE(i,new A.ae(j,l,384,l,!1),c)}}else{o=A.m8(p,a6,n.c[0])
o.toString
if(!(o<7))return A.a(B.bo,o)
B.bo[o].$1(s)
if(i!==0)for(d=0;d<16;++d,i=i<<2>>>0){c=A.o(s,a4,B.bJ[d])
i.toString
o=d*16
a3.eE(i,new A.ae(j,o,384,o,!1),c)}}o=n.f
o===$&&A.c("nonZeroUV")
l=A.m8(p,a6,n.d)
l.toString
if(!(l<7))return A.a(B.ax,l)
B.ax[l].$1(r)
B.ax[l].$1(q)
b=new A.ae(j,256,384,256,!1)
if((o&255)!==0){l=a3.e
if((o&170)!==0){l===$&&A.c(a5)
l.bG(b,r)
l.bG(A.o(b,a4,16),A.o(r,a4,4))
f=A.o(b,a4,32)
a=A.o(r,a4,128)
l.bG(f,a)
l.bG(A.o(f,a4,16),A.o(a,a4,4))}else{l===$&&A.c(a5)
l.h0(b,r)}}a0=new A.ae(j,320,384,320,!1)
o=o>>>8
if((o&255)!==0){l=a3.e
if((o&170)!==0){l===$&&A.c(a5)
l.bG(a0,q)
l.bG(A.o(a0,a4,16),A.o(q,a4,4))
o=A.o(a0,a4,32)
f=A.o(q,a4,128)
l.bG(o,f)
l.bG(A.o(o,a4,16),A.o(f,a4,4))}else{l===$&&A.c(a5)
l.h0(a0,q)}}o=a3.ax
o.toString
if(a6<o-1){B.m.am(k.a,0,16,s.a1(),480)
B.m.am(k.b,0,8,r.a1(),224)
B.m.am(k.c,0,8,q.a1(),224)}a1=p*16
a2=p*8
for(m=0;m<16;++m){o=a3.p4
o.toString
l=a3.p1
l===$&&A.c("_cacheY")
l.bn(a1+m*o,16,s,m*32)}for(m=0;m<8;++m){o=a3.R8
o.toString
l=a3.p2
l===$&&A.c("_cacheU")
f=m*32
l.bn(a2+m*o,8,r,f)
o=a3.R8
o.toString
l=a3.p3
l===$&&A.c("_cacheV")
l.bn(a2+m*o,8,q,f)}++p}},
eE(a,b,c){var s,r,q,p,o,n,m,l,k="_dsp"
switch(a>>>30){case 3:s=this.e
s===$&&A.c(k)
s.li(0,b,c,!1)
break
case 2:this.e===$&&A.c(k)
s=b.a
r=b.d
q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
p=s[r]+4
r+=4
if(!(r<q))return A.a(s,r)
o=B.a.az(B.a.j(s[r]*35468,16),32)
r=b.a
s=b.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
n=B.a.az(B.a.j(r[s]*85627,16),32)
s=b.a
r=b.d+1
if(!(r>=0&&r<s.length))return A.a(s,r)
m=B.a.az(B.a.j(s[r]*35468,16),32)
r=b.a
s=b.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
l=B.a.az(B.a.j(r[s]*85627,16),32)
A.iU(c,0,p+n,l,m)
A.iU(c,1,p+o,l,m)
A.iU(c,2,p-o,l,m)
A.iU(c,3,p-n,l,m)
break
case 1:s=this.e
s===$&&A.c(k)
s.cV(b,c)
break
default:break}},
iO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="_dsp",e=h.p4,d=h.k4
d===$&&A.c("_fInfo")
if(!(a>=0&&a<d.length))return A.a(d,a)
d=d[a]
d.toString
s=h.p1
s===$&&A.c("_cacheY")
r=A.o(s,g,a*16)
q=d.b
p=d.a
if(p===0)return
if(h.bl===1){if(a>0){s=h.e
s===$&&A.c(f)
e.toString
s.eb(r,e,p+4)}if(d.c){s=h.e
s===$&&A.c(f)
e.toString
s.hc(r,e,p)}if(b>0){s=h.e
s===$&&A.c(f)
e.toString
s.ec(r,e,p+4)}if(d.c){d=h.e
d===$&&A.c(f)
e.toString
d.hd(r,e,p)}}else{o=h.R8
s=h.p2
s===$&&A.c("_cacheU")
n=a*8
m=A.o(s,g,n)
s=h.p3
s===$&&A.c("_cacheV")
l=A.o(s,g,n)
k=d.d
if(a>0){s=h.e
s===$&&A.c(f)
e.toString
n=p+4
s.ci(r,1,e,16,n,q,k)
o.toString
s.ci(m,1,o,8,n,q,k)
s.ci(l,1,o,8,n,q,k)}if(d.c){s=h.e
s===$&&A.c(f)
e.toString
s.kM(r,e,p,q,k)
o.toString
j=A.o(m,g,4)
i=A.o(l,g,4)
s.cg(j,1,o,8,p,q,k)
s.cg(i,1,o,8,p,q,k)}if(b>0){s=h.e
s===$&&A.c(f)
e.toString
n=p+4
s.ci(r,e,1,16,n,q,k)
o.toString
s.ci(m,o,1,8,n,q,k)
s.ci(l,o,1,8,n,q,k)}if(d.c){d=h.e
d===$&&A.c(f)
e.toString
d.ll(r,e,p,q,k)
o.toString
s=4*o
j=A.o(m,g,s)
i=A.o(l,g,s)
d.cg(j,o,1,8,p,q,k)
d.cg(i,o,1,8,p,q,k)}}},
j0(){var s,r=this,q=r.ay
q===$&&A.c("_tlMbX")
s=q
while(!0){q=r.CW
q.toString
if(!(s<q))break
r.iO(s,r.y2);++s}},
j3(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.bl
a0.toString
if(!(a0<3))return A.a(B.a3,a0)
s=B.a3[a0]
a0=b.p4
a0.toString
r=s*a0
a0=b.R8
a0.toString
q=(s/2|0)*a0
a0=b.p1
a0===$&&A.c("_cacheY")
p=-r
o=A.o(a0,a,p)
a0=b.p2
a0===$&&A.c("_cacheU")
n=-q
m=A.o(a0,a,n)
a0=b.p3
a0===$&&A.c("_cacheV")
l=A.o(a0,a,n)
k=b.y2
a0=b.cx
a0.toString
j=k*16
i=(k+1)*16
if(a1)b.j0()
if(k!==0){j-=s
b.to=A.o(o,a,0)
b.x1=A.o(m,a,0)
b.x2=A.o(l,a,0)}else{b.to=A.o(b.p1,a,0)
b.x1=A.o(b.p2,a,0)
b.x2=A.o(b.p3,a,0)}a0=k<a0-1
if(a0)i-=s
h=b.as
h.toString
if(i>h)i=h
b.xr=null
if(b.c2!=null&&j<i){h=b.xr=b.iG(j,i-j)
if(h==null)return!1}else h=a
g=b.Q
g.toString
if(j<g){f=g-j
e=b.to
e===$&&A.c("_y")
d=e.d
c=b.p4
c.toString
e.d=d+c*f
c=b.x1
c===$&&A.c("_u")
d=c.d
e=b.R8
e.toString
e*=B.a.j(f,1)
c.d=d+e
d=b.x2
d===$&&A.c("_v")
d.d+=e
if(h!=null)h.d=h.d+b.b.a*f
j=g}if(j<i){e=b.to
e===$&&A.c("_y")
d=e.d
c=b.y
c===$&&A.c("_cropLeft")
e.d=d+c
d=b.x1
d===$&&A.c("_u")
e=c>>>1
d.d=d.d+e
d=b.x2
d===$&&A.c("_v")
d.d+=e
if(h!=null)h.d+=c
h=b.z
h===$&&A.c("_cropRight")
b.jI(j-g,h-c,i-j)}if(a0){a0=b.p1
h=b.p4
h.toString
a0.bn(p,r,o,16*h)
h=b.p2
p=b.R8
p.toString
h.bn(n,q,m,8*p)
p=b.p3
h=b.R8
h.toString
p.bn(n,q,l,8*h)}return!0},
jI(a,b,c){if(b<=0||c<=0)return!1
this.iQ(a,b,c)
this.iP(a,b,c)
return!0},
dz(a){var s
if((a&-4194304)>>>0===0)s=B.a.j(a,14)
else s=a<0?0:255
return s},
di(a,b,c,d){var s=19077*a
d.h(0,0,this.dz(s+26149*c+-3644112))
d.h(0,1,this.dz(s-6419*b-13320*c+2229552))
d.h(0,2,this.dz(s+33050*b+-4527440))},
dh(a6,a7,a8,a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=new A.j3(),a2=b4-1,a3=B.a.j(a2,1),a4=a8.a,a5=a8.d
if(!(a5>=0&&a5<a4.length))return A.a(a4,a5)
a5=a4[a5]
a4=a9.a
s=a9.d
if(!(s>=0&&s<a4.length))return A.a(a4,s)
r=a1.$2(a5,a4[s])
s=b0.a
a4=b0.d
if(!(a4>=0&&a4<s.length))return A.a(s,a4)
a4=s[a4]
s=b1.a
a5=b1.d
if(!(a5>=0&&a5<s.length))return A.a(s,a5)
q=a1.$2(a4,s[a5])
p=B.a.j(3*r+q+131074,2)
a5=a6.a
s=a6.d
if(!(s>=0&&s<a5.length))return A.a(a5,s)
a.di(a5[s],p&255,p>>>16,b2)
b2.h(0,3,255)
a4=a7!=null
if(a4){p=B.a.j(3*q+r+131074,2)
a5=a7.a
s=a7.d
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
b3.toString
a.di(s,p&255,p>>>16,b3)
b3.h(0,3,255)}for(o=1;o<=a3;++o,q=l,r=m){a5=a8.a
s=a8.d+o
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
a5=a9.a
n=a9.d+o
if(!(n>=0&&n<a5.length))return A.a(a5,n)
m=a1.$2(s,a5[n])
n=b0.a
a5=b0.d+o
if(!(a5>=0&&a5<n.length))return A.a(n,a5)
a5=n[a5]
n=b1.a
s=b1.d+o
if(!(s>=0&&s<n.length))return A.a(n,s)
l=a1.$2(a5,n[s])
k=r+m+q+l+524296
j=B.a.j(k+2*(m+q),3)
i=B.a.j(k+2*(r+l),3)
p=B.a.j(j+r,1)
h=B.a.j(i+m,1)
s=2*o
n=s-1
a5=a6.a
g=a6.d+n
if(!(g>=0&&g<a5.length))return A.a(a5,g)
g=a5[g]
a5=p&255
f=p>>>16
e=n*4
d=A.o(b2,a0,e)
g=19077*g
c=g+26149*f+-3644112
if((c&-4194304)>>>0===0)b=B.a.j(c,14)
else b=c<0?0:255
J.A(d.a,d.d,b)
f=g-6419*a5-13320*f+2229552
if((f&-4194304)>>>0===0)b=B.a.j(f,14)
else b=f<0?0:255
J.A(d.a,d.d+1,b)
a5=g+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.j(a5,14)
else b=a5<0?0:255
J.A(d.a,d.d+2,b)
J.A(d.a,d.d+3,255)
a5=s-0
g=a6.a
f=a6.d+a5
if(!(f>=0&&f<g.length))return A.a(g,f)
f=g[f]
g=h&255
d=h>>>16
a5=A.o(b2,a0,a5*4)
f=19077*f
c=f+26149*d+-3644112
if((c&-4194304)>>>0===0)b=B.a.j(c,14)
else b=c<0?0:255
J.A(a5.a,a5.d,b)
d=f-6419*g-13320*d+2229552
if((d&-4194304)>>>0===0)b=B.a.j(d,14)
else b=d<0?0:255
J.A(a5.a,a5.d+1,b)
g=f+33050*g+-4527440
if((g&-4194304)>>>0===0)b=B.a.j(g,14)
else b=g<0?0:255
J.A(a5.a,a5.d+2,b)
J.A(a5.a,a5.d+3,255)
if(a4){p=B.a.j(i+q,1)
h=B.a.j(j+l,1)
a5=a7.a
n=a7.d+n
if(!(n>=0&&n<a5.length))return A.a(a5,n)
n=a5[n]
a5=p&255
g=p>>>16
b3.toString
e=A.o(b3,a0,e)
n=19077*n
f=n+26149*g+-3644112
if((f&-4194304)>>>0===0)b=B.a.j(f,14)
else b=f<0?0:255
J.A(e.a,e.d,b)
g=n-6419*a5-13320*g+2229552
if((g&-4194304)>>>0===0)b=B.a.j(g,14)
else b=g<0?0:255
J.A(e.a,e.d+1,b)
a5=n+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.j(a5,14)
else b=a5<0?0:255
J.A(e.a,e.d+2,b)
J.A(e.a,e.d+3,255)
a5=a7.a
n=a7.d+s
if(!(n>=0&&n<a5.length))return A.a(a5,n)
n=a5[n]
a5=h&255
g=h>>>16
s=A.o(b3,a0,s*4)
n=19077*n
f=n+26149*g+-3644112
if((f&-4194304)>>>0===0)b=B.a.j(f,14)
else b=f<0?0:255
J.A(s.a,s.d,b)
g=n-6419*a5-13320*g+2229552
if((g&-4194304)>>>0===0)b=B.a.j(g,14)
else b=g<0?0:255
J.A(s.a,s.d+1,b)
a5=n+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.j(a5,14)
else b=a5<0?0:255
J.A(s.a,s.d+2,b)
J.A(s.a,s.d+3,255)}}if((b4&1)===0){p=B.a.j(3*r+q+131074,2)
a5=a6.a
s=a6.d+a2
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
a5=a2*4
n=A.o(b2,a0,a5)
a.di(s,p&255,p>>>16,n)
n.h(0,3,255)
if(a4){p=B.a.j(3*q+r+131074,2)
a4=a7.a
a2=a7.d+a2
if(!(a2>=0&&a2<a4.length))return A.a(a4,a2)
a2=a4[a2]
b3.toString
a5=A.o(b3,a0,a5)
a.di(a2,p&255,p>>>16,a5)
a5.h(0,3,255)}}},
iP(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.xr
if(j==null)return
s=A.o(j,null,0)
if(a===0){r=c-1
q=a}else{q=a-1
s.d=s.d-k.b.a
r=c}j=k.Q
j.toString
p=k.as
if(j+a+c===p){p.toString
r=p-j-q}for(j=k.b,o=0;o<r;++o){for(p=o+q,n=0;n<b;++n){m=s.a
l=s.d+n
if(!(l>=0&&l<m.length))return A.a(m,l)
l=m[l]
m=k.d.a
m=m==null?null:m.M(n,p,null);(m==null?new A.B():m).sv(l)}s.d=s.d+j.a}},
iQ(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.d,b=A.y(c.ga0(c),0,d)
c=e.b.a
s=A.w(b,!1,d,a*c*4)
r=e.to
r===$&&A.c("_y")
q=A.o(r,d,0)
r=e.x1
r===$&&A.c("_u")
p=A.o(r,d,0)
r=e.x2
r===$&&A.c("_v")
o=A.o(r,d,0)
n=a+a1
m=B.a.j(a0+1,1)
l=c*4
c=e.rx
c===$&&A.c("_tmpU")
k=A.o(c,d,0)
c=e.ry
c===$&&A.c("_tmpV")
j=A.o(c,d,0)
if(a===0){e.dh(q,d,p,o,p,o,s,d,a0)
i=a1}else{c=e.RG
c===$&&A.c("_tmpY")
e.dh(c,q,k,j,p,o,A.o(s,d,-l),s,a0)
i=a1+1}k.sa0(0,p.a)
j.sa0(0,o.a)
for(c=2*l,r=-l,h=a;h+=2,h<n;){k.d=p.d
j.d=o.d
g=p.d
f=e.R8
f.toString
p.d=g+f
o.d+=f
s.d+=c
f=q.d
g=e.p4
g.toString
q.d=f+2*g
e.dh(A.o(q,d,-g),q,k,j,p,o,A.o(s,d,r),s,a0)}c=q.d
r=e.p4
r.toString
q.d=c+r
c=e.Q
c.toString
r=e.as
r.toString
if(c+n<r){c=e.RG
c===$&&A.c("_tmpY")
c.c5(0,a0,q)
e.rx.c5(0,m,p)
e.ry.c5(0,m,o);--i}else if((n&1)===0)e.dh(q,d,p,o,p,o,A.o(s,d,l),d,a0)
return i},
iG(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="_alphaPlane",f=i.b,e=f.a,d=f.b
if(a<0||b<=0||a+b>d)return h
if(a===0){f=e*d
i.bP=new Uint8Array(f)
s=i.c2
r=new A.j4(s,e,d)
q=s.C()
r.d=q&3
r.e=B.a.j(q,2)&3
r.f=B.a.j(q,4)&3
r.r=B.a.j(q,6)&3
if(r.gfL()){p=r.d
if(p===0){if(s.c-s.d<f)r.r=1}else if(p===1){o=new A.da(B.a1,A.b([],t.J))
o.a=e
o.b=d
f=A.b([],t.e5)
p=A.b([],t.gk)
n=new Uint32Array(2)
m=new A.hf(s,n)
n=m.d=A.y(n.buffer,0,h)
l=s.C()
k=n.length
if(0>=k)return A.a(n,0)
n[0]=l
l=s.C()
if(1>=k)return A.a(n,1)
n[1]=l
l=s.C()
if(2>=k)return A.a(n,2)
n[2]=l
l=s.C()
if(3>=k)return A.a(n,3)
n[3]=l
l=s.C()
if(4>=k)return A.a(n,4)
n[4]=l
l=s.C()
if(5>=k)return A.a(n,5)
n[5]=l
l=s.C()
if(6>=k)return A.a(n,6)
n[6]=l
s=s.C()
if(7>=k)return A.a(n,7)
n[7]=s
p=new A.fp(m,o,f,p)
p.db=e
r.x=p
p.cz(e,d,!0)
f=r.x
s=f.ax
p=s.length
if(p===1){if(0>=p)return A.a(s,0)
f=s[0].a===B.cc&&f.jj()}else f=!1
if(f){r.y=!0
f=r.x
s=f.c
j=s.a*s.b
f.cx=0
s=B.a.a6(j,4)
s=new Uint8Array(j+(4-s))
f.CW=s
f.ch=A.V(s.buffer,0,h)}else{r.y=!1
r.x.el()}}else r.r=1}i.bO=r}f=i.bO
f===$&&A.c("_alpha")
if(!f.w){s=i.bP
s===$&&A.c(g)
if(!f.kz(0,a,b,s))return h}f=i.bP
f===$&&A.c(g)
return A.w(f,!1,h,a*e)},
jA(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.fr.b,a5=a3.dy,a6=a3.k1
a6===$&&A.c("_segment")
if(!(a6<4))return A.a(a5,a6)
s=a5[a6]
a6=a3.b2
a6===$&&A.c("_mbData")
a5=a3.y1
if(!(a5<a6.length))return A.a(a6,a5)
r=a6[a5]
q=A.w(r.a,!1,null,0)
a5=a3.k3
a5===$&&A.c("_mbInfo")
if(0>=a5.length)return A.a(a5,0)
p=a5[0]
q.kZ(0,q.c-q.d,0)
a5=r.b
a5===$&&A.c("isIntra4x4")
if(!a5){o=A.w(new Int16Array(16),!1,null,0)
a5=a7.b
a6=p.b
if(1>=a4.length)return A.a(a4,1)
n=a3.dK(a8,a4[1],a5+a6,s.b,0,o)
a7.b=p.b=n>0?1:0
if(n>1)a3.kg(o,q)
else{a5=o.a
a6=o.d
if(!(a6>=0&&a6<a5.length))return A.a(a5,a6)
m=B.a.j(a5[a6]+3,3)
for(l=0;l<256;l+=16)J.A(q.a,q.d+l,m)}k=a4[0]
j=1}else{if(3>=a4.length)return A.a(a4,3)
k=a4[3]
j=0}i=a7.a&15
h=p.a&15
for(g=0,f=0;f<4;++f){e=h&1
for(d=0,c=0;c<4;++c){n=a3.dK(a8,k,e+(i&1),s.a,j,q)
e=n>j?1:0
i=i>>>1|e<<7
a5=q.a
a6=q.d
if(!(a6>=0&&a6<a5.length))return A.a(a5,a6)
a5=a5[a6]!==0?1:0
if(n>3)a5=3
else if(n>1)a5=2
d=d<<2|a5
q.d=a6+16}i=i>>>4
h=h>>>1|e<<7
g=(g<<8|d)>>>0}b=h>>>4
for(a5=a4.length,a=i,a0=0,a1=0;a1<4;a1+=2){a6=4+a1
i=B.a.a9(a7.a,a6)
h=B.a.a9(p.a,a6)
for(d=0,f=0;f<2;++f){e=h&1
for(c=0;c<2;++c){if(2>=a5)return A.a(a4,2)
n=a3.dK(a8,a4[2],e+(i&1),s.c,0,q)
e=n>0?1:0
i=i>>>1|e<<3
a6=q.a
a2=q.d
if(!(a2>=0&&a2<a6.length))return A.a(a6,a2)
a6=a6[a2]!==0?1:0
if(n>3)a6=3
else if(n>1)a6=2
d=(d<<2|a6)>>>0
q.d=a2+16}i=i>>>2
h=h>>>1|e<<5}a0=(a0|B.a.R(d,4*a1))>>>0
a=(a|B.a.R(i<<4>>>0,a1))>>>0
b=(b|B.a.R(h&240,a1))>>>0}a7.a=a
p.a=b
r.e=g
r.f=a0
if((a0&43690)===0)s.toString
return(g|a0)>>>0===0},
kg(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
for(s=a.a,r=a.d,q=s.length,p=0;p<4;++p){o=r+p
if(!(o>=0&&o<q))return A.a(s,o)
o=s[o]
n=12+p
m=r+n
if(!(m>=0&&m<q))return A.a(s,m)
m=s[m]
l=o+m
k=4+p
j=r+k
if(!(j>=0&&j<q))return A.a(s,j)
j=s[j]
i=8+p
h=r+i
if(!(h>=0&&h<q))return A.a(s,h)
h=s[h]
g=j+h
f=j-h
e=o-m
if(!(p<16))return A.a(b,p)
b[p]=l+g
if(!(i<16))return A.a(b,i)
b[i]=l-g
b[k]=e+f
if(!(n<16))return A.a(b,n)
b[n]=e-f}for(d=0,p=0;p<4;++p){s=p*4
if(!(s<16))return A.a(b,s)
c=b[s]+3
r=3+s
if(!(r<16))return A.a(b,r)
r=b[r]
l=c+r
q=1+s
if(!(q<16))return A.a(b,q)
q=b[q]
s=2+s
if(!(s<16))return A.a(b,s)
s=b[s]
g=q+s
f=q-s
e=c-r
r=B.a.j(l+g,3)
J.A(a0.a,a0.d+d,r)
r=B.a.j(e+f,3)
J.A(a0.a,a0.d+(d+16),r)
r=B.a.j(l-g,3)
J.A(a0.a,a0.d+(d+32),r)
r=B.a.j(e-f,3)
J.A(a0.a,a0.d+(d+48),r)
d+=64}},
j8(a,b){var s,r,q,p,o,n,m
t.L.a(b)
if(a.a5(b[3])===0)s=a.a5(b[4])===0?2:3+a.a5(b[5])
else if(a.a5(b[6])===0)s=a.a5(b[7])===0?5+a.a5(159):7+2*a.a5(165)+a.a5(145)
else{r=a.a5(b[8])
q=9+r
if(!(q<11))return A.a(b,q)
p=2*r+a.a5(b[q])
if(!(p<4))return A.a(B.bO,p)
o=B.bO[p]
n=o.length
for(s=0,m=0;m<n;++m)s+=s+a.a5(o[m])
s+=3+B.a.R(8,p)}return s},
dK(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j
t.c7.a(b)
t.L.a(d)
s=b.length
if(!(e<s))return A.a(b,e)
r=b[e].a
if(!(c<r.length))return A.a(r,c)
q=r[c]
for(;e<16;e=p){if(a.a5(q[0])===0)return e
for(;a.a5(q[1])===0;){++e
if(!(e>=0&&e<17))return A.a(B.aa,e)
r=B.aa[e]
if(!(r<s))return A.a(b,r)
r=b[r].a
if(0>=r.length)return A.a(r,0)
q=r[0]
if(e===16)return 16}p=e+1
if(!(p>=0&&p<17))return A.a(B.aa,p)
r=B.aa[p]
if(!(r<s))return A.a(b,r)
o=b[r].a
r=o.length
if(a.a5(q[2])===0){if(1>=r)return A.a(o,1)
q=o[1]
n=1}else{n=this.j8(a,q)
if(2>=r)return A.a(o,2)
q=o[2]}if(!(e>=0&&e<16))return A.a(B.bK,e)
r=B.bK[e]
m=a.b
m===$&&A.c("_range")
l=a.eo(B.a.j(m,1))
m=a.b
if(m>>>0!==m||m>=128)return A.a(B.a8,m)
k=B.a8[m]
a.b=B.bE[m]
m=a.d
m===$&&A.c("_bits")
a.d=m-k
m=l!==0?-n:n
j=d[e>0?1:0]
J.A(f.a,f.d+r,m*j)}return 16},
jw(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.y1,g=4*h,f=i.go,e=i.id,d=i.b2
d===$&&A.c("_mbData")
if(!(h<d.length))return A.a(d,h)
s=d[h]
h=i.c
h===$&&A.c("br")
h=h.a5(145)===0
s.b=h
if(!h){if(i.c.a5(156)!==0)r=i.c.a5(128)!==0?1:3
else r=i.c.a5(163)!==0?2:0
s.c[0]=r
f.toString
B.m.aW(f,g,g+4,r)
B.m.aW(e,0,4,r)}else{q=s.c
for(p=0,o=0;o<4;++o,p=j){r=e[o]
for(n=0;n<4;++n){h=g+n
if(!(h<f.length))return A.a(f,h)
d=f[h]
if(!(d<10))return A.a(B.bI,d)
d=B.bI[d]
if(!(r>=0&&r<10))return A.a(d,r)
m=d[r]
l=i.c.a5(m[0])
if(!(l<18))return A.a(B.ai,l)
k=B.ai[l]
for(;k>0;){d=i.c
if(!(k<9))return A.a(m,k)
d=2*k+d.a5(m[k])
if(!(d>=0&&d<18))return A.a(B.ai,d)
k=B.ai[d]}r=-k
f[h]=r}j=p+4
f.toString
B.m.am(q,p,j,f,g)
if(!(o<4))return A.a(e,o)
e[o]=r}}if(i.c.a5(142)===0)h=0
else if(i.c.a5(114)===0)h=2
else h=i.c.a5(183)!==0?1:3
s.d=h},
shX(a){this.k2=t.cC.a(a)},
shW(a){this.k3=t.eQ.a(a)},
shT(a){this.k4=t.ge.a(a)},
shV(a){this.b2=t.db.a(a)},
shU(a){this.b3=t.gS.a(a)}}
A.j3.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:26}
A.ej.prototype={
Z(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.W(this.a5(128),r))>>>0
return s},
cr(a){var s=this.Z(a)
return this.Z(1)===1?-s:s},
a5(a){var s,r=this,q=r.b
q===$&&A.c("_range")
s=r.eo(B.a.j(q*a,8))
if(r.b<=126)r.kd()
return s},
eo(a){var s,r,q,p,o,n=this,m="_value",l=n.d
l===$&&A.c("_bits")
if(l<0){s=n.a
r=s.c
q=s.d
if(r-q>=1){p=s.C()
l=n.c
l===$&&A.c(m)
n.c=(p|l<<8)>>>0
l=n.d+8
n.d=l
o=l}else{if(q<r){l=s.C()
s=n.c
s===$&&A.c(m)
n.c=(l|s<<8)>>>0
s=n.d+8
n.d=s
l=s}else if(!n.e){s=n.c
s===$&&A.c(m)
n.c=s<<8>>>0
l+=8
n.d=l
n.e=!0}o=l}}else o=l
l=n.c
l===$&&A.c(m)
if(B.a.b0(l,o)>a){s=n.b
s===$&&A.c("_range")
r=a+1
n.b=s-r
n.c=l-B.a.W(r,o)
return 1}else{n.b=a
return 0}},
kd(){var s,r=this,q=r.b
q===$&&A.c("_range")
if(!(q>=0&&q<128))return A.a(B.a8,q)
s=B.a8[q]
r.b=B.bE[q]
q=r.d
q===$&&A.c("_bits")
r.d=q-s}}
A.iS.prototype={
ec(a,b,c){var s,r=A.o(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s
if(this.eY(r,b,c))this.d6(r,b)}},
eb(a,b,c){var s,r=A.o(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s*b
if(this.eY(r,1,c))this.d6(r,1)}},
hd(a,b,c){var s,r,q=A.o(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.ec(q,b,c)}},
hc(a,b,c){var s,r=A.o(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.eb(r,b,c)}},
ll(a,b,c,d,e){var s,r,q=A.o(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.cg(q,b,1,16,c,d,e)}},
kM(a,b,c,d,e){var s,r=A.o(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.cg(r,1,b,16,c,d,e)}},
ci(a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.o(a1,null,0)
for(s=-3*a2,r=-2*a2,q=-a2,p=2*a2;o=a4-1,a4>0;a4=o){if(this.eZ(a0,a2,a5,a6))if(this.eN(a0,a2,a7))this.d6(a0,a2)
else{n=a0.a
m=a0.d
l=m+s
k=n.length
if(!(l>=0&&l<k))return A.a(n,l)
j=n[l]
i=m+r
if(!(i>=0&&i<k))return A.a(n,i)
i=n[i]
h=m+q
if(!(h>=0&&h<k))return A.a(n,h)
h=n[h]
if(!(m>=0&&m<k))return A.a(n,m)
g=n[m]
f=m+a2
if(!(f<k))return A.a(n,f)
f=n[f]
m+=p
if(!(m<k))return A.a(n,m)
m=n[m]
k=$.k1()
e=1020+i-f
if(!(e>=0&&e<2041))return A.a(k,e)
e=1020+3*(g-h)+k[e]
if(!(e>=0&&e<2041))return A.a(k,e)
d=k[e]
e=B.a.j(27*d+63,7)
c=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(18*d+63,7)
b=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(9*d+63,7)
a=(e&2147483647)-((e&2147483648)>>>0)
e=$.aA()
j=255+j+a
if(!(j>=0&&j<766))return A.a(e,j)
J.A(n,l,e[j])
j=$.aA()
i=255+i+b
if(!(i>=0&&i<766))return A.a(j,i)
i=j[i]
J.A(a0.a,a0.d+r,i)
i=$.aA()
h=255+h+c
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.A(a0.a,a0.d+q,h)
h=$.aA()
g=255+g-c
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.A(a0.a,a0.d,g)
g=$.aA()
f=255+f-b
if(!(f>=0&&f<766))return A.a(g,f)
f=g[f]
J.A(a0.a,a0.d+a2,f)
f=$.aA()
m=255+m-a
if(!(m>=0&&m<766))return A.a(f,m)
m=f[m]
J.A(a0.a,a0.d+p,m)}a0.d+=a3}},
cg(a,b,c,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.o(a,null,0)
for(s=-2*b,r=-b;q=a0-1,a0>0;a0=q){if(this.eZ(d,b,a1,a2))if(this.eN(d,b,a3))this.d6(d,b)
else{p=d.a
o=d.d
n=o+s
m=p.length
if(!(n>=0&&n<m))return A.a(p,n)
l=p[n]
k=o+r
if(!(k>=0&&k<m))return A.a(p,k)
k=p[k]
if(!(o>=0&&o<m))return A.a(p,o)
j=p[o]
o+=b
if(!(o<m))return A.a(p,o)
o=p[o]
i=3*(j-k)
m=$.hA()
h=B.a.j(i+4,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
if(!(h>=0&&h<225))return A.a(m,h)
g=m[h]
h=B.a.j(i+3,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
if(!(h>=0&&h<225))return A.a(m,h)
f=m[h]
h=B.a.j(g+1,1)
e=(h&2147483647)-((h&2147483648)>>>0)
h=$.aA()
l=255+l+e
if(!(l>=0&&l<766))return A.a(h,l)
J.A(p,n,h[l])
l=$.aA()
k=255+k+f
if(!(k>=0&&k<766))return A.a(l,k)
k=l[k]
J.A(d.a,d.d+r,k)
k=$.aA()
j=255+j-g
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.A(d.a,d.d,j)
j=$.aA()
o=255+o-e
if(!(o>=0&&o<766))return A.a(j,o)
o=j[o]
J.A(d.a,d.d+b,o)}d.d+=c}},
d6(a,b){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-2*b,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=-b
r=l+s
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
if(!(l>=0&&l<j))return A.a(m,l)
q=m[l]
l+=b
if(!(l<j))return A.a(m,l)
l=m[l]
m=$.k1()
l=1020+k-l
if(!(l>=0&&l<2041))return A.a(m,l)
p=3*(q-r)+m[l]
l=$.hA()
m=112+B.a.az(B.a.j(p+4,3),32)
if(!(m>=0&&m<225))return A.a(l,m)
o=l[m]
m=$.hA()
l=112+B.a.az(B.a.j(p+3,3),32)
if(!(l>=0&&l<225))return A.a(m,l)
n=m[l]
l=$.aA()
r=255+r+n
if(!(r>=0&&r<766))return A.a(l,r)
a.h(0,s,l[r])
r=$.aA()
q=255+q-o
if(!(q>=0&&q<766))return A.a(r,q)
a.h(0,0,r[q])},
eN(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
if(!(o>=0&&o<n))return A.a(q,o)
o=q[o]
s=p+-b
if(!(s>=0&&s<n))return A.a(q,s)
s=q[s]
if(!(p>=0&&p<n))return A.a(q,p)
r=q[p]
p+=b
if(!(p<n))return A.a(q,p)
p=q[p]
q=$.hz()
s=255+o-s
if(!(s>=0&&s<511))return A.a(q,s)
if(q[s]<=c){p=255+p-r
if(!(p>=0&&p<511))return A.a(q,p)
p=q[p]>c
q=p}else q=!0
return q},
eY(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
if(!(o>=0&&o<n))return A.a(q,o)
o=q[o]
s=p+-b
if(!(s>=0&&s<n))return A.a(q,s)
s=q[s]
if(!(p>=0&&p<n))return A.a(q,p)
r=q[p]
p+=b
if(!(p<n))return A.a(q,p)
p=q[p]
q=$.hz()
r=255+s-r
if(!(r>=0&&r<511))return A.a(q,r)
r=q[r]
q=$.k0()
p=255+o-p
if(!(p>=0&&p<511))return A.a(q,p)
return 2*r+q[p]<=c},
eZ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=a.a,i=a.d,h=i+-4*b,g=j.length
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
s=i+-3*b
if(!(s>=0&&s<g))return A.a(j,s)
s=j[s]
r=i+-2*b
if(!(r>=0&&r<g))return A.a(j,r)
r=j[r]
q=i+-b
if(!(q>=0&&q<g))return A.a(j,q)
q=j[q]
if(!(i>=0&&i<g))return A.a(j,i)
p=j[i]
o=i+b
if(!(o<g))return A.a(j,o)
o=j[o]
n=i+2*b
if(!(n<g))return A.a(j,n)
n=j[n]
i+=3*b
if(!(i<g))return A.a(j,i)
i=j[i]
j=$.hz()
g=255+q-p
if(!(g>=0&&g<511))return A.a(j,g)
g=j[g]
m=$.k0()
l=255+r
k=l-o
if(!(k>=0&&k<511))return A.a(m,k)
if(2*g+m[k]>c)return!1
h=255+h-s
if(!(h>=0&&h<511))return A.a(j,h)
if(j[h]<=d){h=255+s-r
if(!(h>=0&&h<511))return A.a(j,h)
if(j[h]<=d){h=l-q
if(!(h>=0&&h<511))return A.a(j,h)
if(j[h]<=d){i=255+i-n
if(!(i>=0&&i<511))return A.a(j,i)
if(j[i]<=d){i=255+n-o
if(!(i>=0&&i<511))return A.a(j,i)
if(j[i]<=d){i=255+o-p
if(!(i>=0&&i<511))return A.a(j,i)
i=j[i]<=d
j=i}else j=!1}else j=!1}else j=!1}else j=!1}else j=!1
return j},
bG(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
for(s=a.a,r=a.d,q=s.length,p=0,o=0,n=0;n<4;++n){m=r+p
if(!(m>=0&&m<q))return A.a(s,m)
m=s[m]
l=r+(p+8)
if(!(l>=0&&l<q))return A.a(s,l)
l=s[l]
k=m+l
j=m-l
l=r+(p+4)
if(!(l>=0&&l<q))return A.a(s,l)
l=s[l]
m=B.a.j(l*35468,16)
i=r+(p+12)
if(!(i>=0&&i<q))return A.a(s,i)
i=s[i]
h=B.a.j(i*85627,16)
g=(m&2147483647)-((m&2147483648)>>>0)-((h&2147483647)-((h&2147483648)>>>0))
l=B.a.j(l*85627,16)
i=B.a.j(i*35468,16)
f=(l&2147483647)-((l&2147483648)>>>0)+((i&2147483647)-((i&2147483648)>>>0))
e=o+1
if(!(o<16))return A.a(b,o)
b[o]=k+f
o=e+1
if(!(e<16))return A.a(b,e)
b[e]=j+g
e=o+1
if(!(o<16))return A.a(b,o)
b[o]=j-g
o=e+1
if(!(e<16))return A.a(b,e)
b[e]=k-f;++p}for(d=0,o=0,n=0;n<4;++n){if(!(o<16))return A.a(b,o)
c=b[o]+4
s=o+8
if(!(s<16))return A.a(b,s)
s=b[s]
k=c+s
j=c-s
s=o+4
if(!(s<16))return A.a(b,s)
s=b[s]
r=B.a.j(s*35468,16)
q=o+12
if(!(q<16))return A.a(b,q)
q=b[q]
m=B.a.j(q*85627,16)
g=(r&2147483647)-((r&2147483648)>>>0)-((m&2147483647)-((m&2147483648)>>>0))
s=B.a.j(s*85627,16)
q=B.a.j(q*35468,16)
f=(s&2147483647)-((s&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.bQ(a0,d,0,0,k+f)
A.bQ(a0,d,1,0,j+g)
A.bQ(a0,d,2,0,j-g)
A.bQ(a0,d,3,0,k-f);++o
d+=32}},
li(a,b,c,d){this.bG(b,c)
if(d)this.bG(A.o(b,null,16),A.o(c,null,4))},
cV(a,b){var s,r,q,p=a.a,o=a.d
if(!(o>=0&&o<p.length))return A.a(p,o)
s=p[o]+4
for(r=0;r<4;++r)for(q=0;q<4;++q)A.bQ(b,0,q,r,s)},
h0(a,b){var s=this,r=null,q=a.a,p=a.d
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cV(a,b)
q=a.a
p=a.d+16
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cV(A.o(a,r,16),A.o(b,r,4))
q=a.a
p=a.d+32
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cV(A.o(a,r,32),A.o(b,r,128))
q=a.a
p=a.d+48
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cV(A.o(a,r,48),A.o(b,r,132))}}
A.iX.prototype={}
A.j0.prototype={}
A.j2.prototype={}
A.ei.prototype={}
A.j1.prototype={}
A.iT.prototype={}
A.bw.prototype={}
A.el.prototype={}
A.hh.prototype={}
A.em.prototype={}
A.en.prototype={}
A.ek.prototype={
cM(){var s,r=this.b
if(r.ad(8)!==47)return!1
s=this.c
s.f=B.ao
s.a=r.ad(14)+1
s.b=r.ad(14)+1
s.d=r.ad(1)!==0
if(r.ad(3)!==0)return!1
return!0},
bN(a){var s,r,q,p=this,o=null
p.e=0
if(!p.cM())return o
s=p.c
p.cz(s.a,s.b,!0)
p.el()
r=s.a
p.d=A.Q(o,o,B.e,0,B.i,s.b,o,0,4,o,r,!1)
r=p.ch
r.toString
q=s.a
s=s.b
if(!p.dC(r,q,s,s,p.gjF()))return o
return p.d},
el(){var s,r=this,q=r.c,p=q.a
q=p*q.b+p
s=new Uint32Array(q+p*16)
r.ch=s
r.CW=A.y(s.buffer,0,null)
r.cx=q
return!0},
k8(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.ad(2)
q=l.ay
p=B.a.R(1,r)
if((q&p)>>>0!==0)return!1
l.ay=(q|p)>>>0
o=new A.hg(B.cb)
B.c.D(l.ax,o)
if(!(r<4))return A.a(B.bM,r)
q=B.bM[r]
o.a=q
o.b=a[0]
o.c=a[1]
switch(q.a){case 0:case 1:s=s.ad(3)+2
o.e=s
o.d=l.cz(A.bR(o.b,s),A.bR(o.c,o.e),!1)
break
case 3:n=s.ad(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.c.h(a,0,A.bR(o.b,m))
o.e=m
o.d=l.cz(n,1,!1)
l.iU(n,o)
break
case 2:break
default:throw A.d(A.j("Invalid WebP transform type: "+r))}return!0},
cz(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(c){for(s=k.b,r=t.t,q=b,p=a;s.ad(1)!==0;){o=A.b([p,q],r)
if(!k.k8(o))throw A.d(A.j("Invalid Transform"))
p=o[0]
q=o[1]}c=!0}else{q=b
p=a}s=k.b
if(s.ad(1)!==0){n=s.ad(4)
if(!(n>=1&&n<=11))throw A.d(A.j("Invalid Color Cache"))}else n=0
if(!k.jU(p,q,n,c))throw A.d(A.j("Invalid Huffman Codes"))
if(n>0){s=B.a.R(1,n)
k.r=s
k.w=new A.iY(new Uint32Array(s),32-n)}else k.r=0
s=k.c
s.a=p
s.b=q
m=k.y
k.z=A.bR(p,m)
k.x=m===0?4294967295:B.a.R(1,m)-1
if(c){k.e=0
return null}l=new Uint32Array(p*q)
if(!k.dC(l,p,q,q,null))throw A.d(A.j("Failed to decode image data."))
k.e=0
return l},
dC(b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
t.bK.a(b5)
s=b0.e
r=B.a.aE(s,b2)
q=B.a.a6(s,b2)
p=b0.eI(q,r)
o=b0.e
n=b2*b3
m=b2*b4
s=b0.r
l=280+s
k=s>0?b0.w:null
j=b0.x
s=b1.length
i=b0.b
h=b5!=null
g=o
while(!0){f=i.b
e=f.c
if(!(!(f.d>=e&&i.a>=64)&&o<m))break
if((q&j)>>>0===0){d=b0.cA(b0.Q,b0.z,b0.y,q,r)
f=b0.at
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(i.a>=32)i.ca()
f=p.a
e=f.length
if(0>=e)return A.a(f,0)
c=f[0].c6(i)
if(c<256){if(1>=e)return A.a(f,1)
b=f[1].c6(i)
if(i.a>=32)i.ca()
if(2>=e)return A.a(f,2)
a=f[2].c6(i)
if(3>=e)return A.a(f,3)
a0=A.mJ(a,c,b,f[3].c6(i))
if(!(o>=0&&o<s))return A.a(b1,o)
b1[o]=a0;++o;++q
if(q>=b2){++r
if(B.a.a6(r,16)===0&&h)b5.$1(r)
if(k!=null)for(f=k.b,e=k.a,a1=e.length;g<o;){if(!(g>=0))return A.a(b1,g)
a2=b1[g]
a3=B.a.a2(a2*506832829>>>0,f)
if(!(a3<a1))return A.a(e,a3)
e[a3]=a2;++g}q=0}}else if(c<280){a4=b0.d9(c-256)
if(4>=e)return A.a(f,4)
a5=f[4].c6(i)
if(i.a>=32)i.ca()
a6=b0.f1(b2,b0.d9(a5))
if(o<a6||n-o<a4)return!1
else{a7=o-a6
for(a8=0;a8<a4;++a8){f=o+a8
e=a7+a8
if(!(e>=0&&e<s))return A.a(b1,e)
e=b1[e]
if(!(f>=0&&f<s))return A.a(b1,f)
b1[f]=e}o+=a4}q+=a4
for(;q>=b2;){q-=b2;++r
if(B.a.a6(r,16)===0&&h)b5.$1(r)}if(o<m){if((q&j)>>>0!==0){d=b0.cA(b0.Q,b0.z,b0.y,q,r)
f=b0.at
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(k!=null)for(f=k.b,e=k.a,a1=e.length;g<o;){if(!(g>=0&&g<s))return A.a(b1,g)
a2=b1[g]
a3=B.a.a2(a2*506832829>>>0,f)
if(!(a3<a1))return A.a(e,a3)
e[a3]=a2;++g}}}else if(c<l){a3=c-280
for(;g<o;){k.toString
if(!(g>=0&&g<s))return A.a(b1,g)
f=b1[g]
a9=B.a.a2(f*506832829>>>0,k.b)
e=k.a
if(!(a9<e.length))return A.a(e,a9)
e[a9]=f;++g}f=k.a
e=f.length
if(!(a3<e))return A.a(f,a3)
a1=f[a3]
if(!(o>=0&&o<s))return A.a(b1,o)
b1[o]=a1;++o;++q
if(q>=b2){++r
if(B.a.a6(r,16)===0&&h)b5.$1(r)
for(a1=k.b;g<o;){if(!(g>=0))return A.a(b1,g)
a2=b1[g]
a3=B.a.a2(a2*506832829>>>0,a1)
if(!(a3<e))return A.a(f,a3)
f[a3]=a2;++g}q=0}}else return!1}if(h)b5.$1(r)
if(f.d>=e&&i.a>=64&&o<n)return!1
b0.e=o
return!0},
jj(){var s,r,q,p,o,n
if(this.r>0)return!1
for(s=this.as,r=this.at,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p].a
n=o.length
if(1>=n)return A.a(o,1)
if(o[1].f>1)return!1
if(2>=n)return A.a(o,2)
if(o[2].f>1)return!1
if(3>=n)return A.a(o,3)
if(o[3].f>1)return!1}return!0},
iV(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.f,g=a-h
if(g<=0)return
s=i.c
i.em(g,s.a*h)
r=s.a
q=r*g
p=r*i.f
s=i.ch
s.toString
h=i.cx
h.toString
o=A.w(s,!1,null,h)
for(h=i.cy,s=o.a,n=o.d,m=s.length,l=0;l<q;++l){h.toString
k=p+l
j=n+l
if(!(j>=0&&j<m))return A.a(s,j)
j=B.a.j(s[j],8)
if(!(k>=0&&k<h.length))return A.a(h,k)
h[k]=j&255}i.f=a},
io(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=this,h="_pixels8",g=i.e,f=B.a.aE(g,a1),e=B.a.a6(g,a1),d=i.eI(e,f),c=i.e,b=a1*a2,a=a1*a3,a0=i.x
g=i.b
while(!0){s=g.b
if(!(!(s.d>=s.c&&g.a>=64)&&c<a))break
if((e&a0)>>>0===0){r=i.cA(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}if(g.a>=32)g.ca()
s=d.a
q=s.length
if(0>=q)return A.a(s,0)
p=s[0].c6(g)
if(p<256){s=i.CW
s===$&&A.c(h)
if(!(c>=0&&c<s.length))return A.a(s,c)
s[c]=p;++c;++e
if(e>=a1){++f
if(B.a.a6(f,16)===0)i.dH(f)
e=0}}else if(p<280){o=i.d9(p-256)
if(4>=q)return A.a(s,4)
n=s[4].c6(g)
if(g.a>=32)g.ca()
m=i.f1(a1,i.d9(n))
if(c>=m&&b-c>=o)for(s=i.CW,l=0;l<o;++l){s===$&&A.c(h)
q=c+l
k=q-m
j=s.length
if(!(k>=0&&k<j))return A.a(s,k)
k=s[k]
if(!(q>=0&&q<j))return A.a(s,q)
s[q]=k}else{i.e=c
return!0}c+=o
e+=o
for(;e>=a1;){e-=a1;++f
if(B.a.a6(f,16)===0)i.dH(f)}if(c<a&&(e&a0)>>>0!==0){r=i.cA(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}}else return!1}i.dH(f)
i.e=c
return!0},
dH(a){var s,r,q,p=this,o=p.f,n=a-o,m=p.CW
m===$&&A.c("_pixels8")
s=A.w(m,!1,null,p.c.a*o)
if(n>0){m=p.cy
m.toString
r=p.db
r.toString
q=A.w(m,!1,null,r*o)
r=p.ax
if(0>=r.length)return A.a(r,0)
r[0].ks(o,o+n,s,q)}p.f=a},
jG(a){var s,r,q,p,o,n=this,m=n.c,l=m.a,k=n.f,j=a-k
if(j<=0)return
n.em(j,l*k)
l=n.cx
l.toString
s=n.f
r=l
q=0
for(;q<j;++q,++s)for(p=0;p<m.a;++p,++r){l=n.ch
if(!(r>=0&&r<l.length))return A.a(l,r)
o=l[r]
l=n.d.a
if(l!=null)l.ao(p,s,o>>>16&255,o>>>8&255,o&255,o>>>24&255)}n.f=a},
em(a,b){var s,r,q,p=this,o=p.ax,n=o.length,m=p.c.a,l=p.f,k=l+a,j=p.cx
j.toString
s=p.ch
s.toString
B.W.am(s,j,j+m*a,s,b)
for(r=b;q=n-1,n>0;r=j,n=q){if(!(q>=0&&q<o.length))return A.a(o,q)
m=o[q]
s=p.ch
s.toString
m.kU(l,k,s,r,s,j)}},
jU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(d&&e.b.ad(1)!==0){s=e.b.ad(3)+2
r=A.bR(a,s)
q=A.bR(b,s)
p=r*q
o=e.cz(r,q,!1)
e.y=s
for(n=1,m=0;m<p;++m){if(!(m<o.length))return A.a(o,m)
l=o[m]>>>8&65535
o[m]=l
if(l>=n)n=l+1}}else{o=null
n=1}k=J.am(n,t.ct)
for(j=0;j<n;++j)k[j]=A.nA()
for(i=c>0,m=0;m<n;++m)for(h=0;h<5;++h){g=B.eb[h]
if(h===0&&i)g+=B.a.R(1,c)
if(!(m<n))return A.a(k,m)
f=k[m].a
if(!(h<f.length))return A.a(f,h)
if(!e.jS(g,f[h]))return!1}e.Q=o
e.as=n
e.sjb(k)
return!0},
jS(a,b){var s,r,q,p,o,n,m,l,k,j,i=this.b
if(i.ad(1)!==0){s=t.t
r=A.b([0,0],s)
q=A.b([0,0],s)
p=A.b([0,0],s)
o=i.ad(1)+1
B.c.h(r,0,i.ad(i.ad(1)===0?1:8))
B.c.h(q,0,0)
s=o-1
B.c.h(p,0,s)
if(o===2){B.c.h(r,1,i.ad(8))
B.c.h(q,1,1)
B.c.h(p,1,s)}n=b.kq(p,q,r,a,o)}else{m=new Int32Array(19)
l=i.ad(4)+4
if(l>19)return!1
p=new Int32Array(a)
for(k=0;k<l;++k){s=B.hO[k]
j=i.ad(3)
if(!(s<19))return A.a(m,s)
m[s]=j}n=this.jT(m,a,p)
if(n)n=b.fz(p,a)}return n},
jT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(c)
s=A.lf()
if(!s.fz(a,19))return!1
e=this.b
if(e.ad(1)!==0){r=2+e.ad(2+2*e.ad(3))
if(r>b)return!1}else r=b
for(q=c.length,p=0,o=8;p<b;r=n){n=r-1
if(r===0)break
if(e.a>=32)e.ca()
m=s.c6(e)
if(m<16){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=m
if(m!==0)o=m
p=l}else{k=m-16
if(!(k<3))return A.a(B.bb,k)
j=B.bb[k]
i=B.du[k]
h=e.ad(j)+i
if(p+h>b)return!1
else{g=m===16?o:0
for(;f=h-1,h>0;h=f,p=l){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=g}}}}return!0},
d9(a){var s
if(a<4)return a+1
s=B.a.j(a-2,1)
return B.a.R(2+(a&1),s)+this.b.ad(s)+1},
f1(a,b){var s,r,q
if(b>120)return b-120
else{s=b-1
if(!(s>=0))return A.a(B.bV,s)
r=B.bV[s]
q=(r>>>4)*a+(8-(r&15))
return q>=1?q:1}},
iU(a,b){var s,r,q,p,o,n=B.a.R(1,B.a.a9(8,b.e)),m=new Uint32Array(n),l=A.y(b.d.buffer,0,null),k=A.y(m.buffer,0,null),j=b.d
if(0>=j.length)return A.a(j,0)
j=j[0]
if(0>=n)return A.a(m,0)
m[0]=j
s=4*a
for(j=l.length,r=k.length,q=4;q<s;++q){if(!(q<j))return A.a(l,q)
p=l[q]
o=q-4
if(!(o<r))return A.a(k,o)
o=k[o]
if(!(q<r))return A.a(k,q)
k[q]=p+o&255}for(s=4*n;q<s;++q){if(!(q<r))return A.a(k,q)
k[q]=0}b.d=m
return!0},
cA(a,b,c,d,e){var s
if(c===0)return 0
a.toString
s=b*B.a.j(e,c)+B.a.j(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
eI(a,b){var s=this,r=s.cA(s.Q,s.z,s.y,a,b),q=s.at
if(!(r<q.length))return A.a(q,r)
return q[r]},
sjb(a){this.at=t.d1.a(a)}}
A.fp.prototype={
kL(a){return this.iV(a)}}
A.hf.prototype={
fU(){var s,r,q,p=this.a
if(p<32){s=this.c
r=B.a.a2(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.a_,p)
q=r+((s&B.a_[p])>>>0)*(B.a_[32-p]+1)}else{s=this.c
q=p===32?s[1]:B.a.a2(s[1],p-32)}return q},
ad(a){var s,r=this,q=r.b
if(!(q.d>=q.c&&r.a>=64)&&a<25){q=r.fU()
if(!(a<33))return A.a(B.a_,a)
s=B.a_[a]
r.a+=a
r.ca()
return(q&s)>>>0}else throw A.d(A.j("Not enough data in input."))},
ca(){var s,r,q,p,o=this,n=o.b,m=o.c,l=n.c
while(!0){s=o.a
if(!(s>=8&&n.d<l))break
r=n.a
q=n.d++
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=m[0]
p=m[1]
m[0]=(r>>>8)+(p&255)*16777216
m[1]=p>>>8
m[1]=(m[1]|q*16777216)>>>0
o.a=s-8}}}
A.iY.prototype={}
A.cr.prototype={
a8(){return"VP8LImageTransformType."+this.b}}
A.hg.prototype={
kU(a,b,c,d,e,f){var s,r,q,p,o=this,n=o.b
switch(o.a.a){case 2:o.km(e,f,f+(b-a)*n)
break
case 0:o.l2(a,b,e,f)
if(b!==o.c){s=f-n
B.W.am(e,s,s+n,c,f+(b-a-1)*n)}break
case 1:o.ku(a,b,e,f)
break
case 3:if(d===f&&o.e>0){r=b-a
q=r*A.bR(n,o.e)
p=f+r*n-q
B.W.am(e,p,p+q,c,f)
o.fA(a,b,c,p,e,f)}else o.fA(a,b,c,d,e,f)
break}},
ks(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.a9(8,m),k=this.b,j=this.d
if(l<8){s=B.a.R(1,m)-1
r=B.a.R(1,l)-1
for(q=a;q<b;++q)for(p=0,o=0;o<k;++o){if((o&s)>>>0===0){m=c.a
n=c.d
if(!(n>=0&&n<m.length))return A.a(m,n)
p=m[n]
c.d=n+1}m=(p&r)>>>0
if(!(m>=0&&m<j.length))return A.a(j,m)
m=j[m]
J.A(d.a,d.d,m>>>8&255);++d.d
p=B.a.j(p,l)}}else for(q=a;q<b;++q)for(o=0;o<k;++o){m=c.a
n=c.d
if(!(n>=0&&n<m.length))return A.a(m,n)
m=m[n]
c.d=n+1
if(m>>>0!==m||m>=j.length)return A.a(j,m)
m=j[m]
J.A(d.a,d.d,m>>>8&255);++d.d}},
fA(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.a9(8,j),h=this.b,g=this.d
if(i<8){s=B.a.R(1,j)-1
r=B.a.R(1,i)-1
for(j=e.length,q=c.length,p=a;p<b;++p)for(o=0,n=0;n<h;++n,f=l){if((n&s)>>>0===0){m=d+1
if(!(d>=0&&d<q))return A.a(c,d)
o=c[d]>>>8&255
d=m}l=f+1
k=o&r
if(!(k>=0&&k<g.length))return A.a(g,k)
k=g[k]
if(!(f>=0&&f<j))return A.a(e,f)
e[f]=k
o=B.a.a9(o,i)}}else for(j=c.length,q=e.length,p=a;p<b;++p)for(n=0;n<h;++n,f=l,d=m){l=f+1
g.toString
m=d+1
if(!(d>=0&&d<j))return A.a(c,d)
k=c[d]>>>8&255
if(!(k<g.length))return A.a(g,k)
k=g[k]
if(!(f>=0&&f<q))return A.a(e,f)
e[f]=k}},
ku(a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.b,a0=b.e,a1=B.a.R(1,a0)-1,a2=A.bR(a,a0),a3=B.a.j(a4,b.e)*a2
for(a0=a6.length,s=a4;s<a5;){r=new Uint8Array(3)
for(q=a3,p=0;p<a;++p){if((p&a1)>>>0===0){o=b.d
n=q+1
if(!(q<o.length))return A.a(o,q)
o=o[q]
r[0]=o&255
r[1]=o>>>8&255
r[2]=o>>>16&255
q=n}o=a7+p
if(!(o<a0))return A.a(a6,o)
m=a6[o]
l=m>>>8&255
k=r[0]
j=$.ar()
j[0]=k
k=$.aC()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=l
h=k[0]
g=$.hB()
g[0]=i*h
f=$.k2()
if(0>=f.length)return A.a(f,0)
e=(m>>>16&255)+(f[0]>>>5)>>>0&255
j[0]=r[1]
i=k[0]
j[0]=l
g[0]=i*k[0]
d=f[0]
j[0]=r[2]
i=k[0]
j[0]=e
g[0]=i*k[0]
c=f[0]
a6[o]=(m&4278255360|e<<16|((m&255)+(d>>>5)>>>0)+(c>>>5)>>>0&255)>>>0}a7+=a;++s
if((s&a1)>>>0===0)a3+=a2}},
l2(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b
if(a===0){s=d-1
r=c.length
if(!(s>=0&&s<r))return A.a(c,s)
A.iZ(c,d,4278190080)
for(q=1;q<g;++q){s=d+q
p=s-1
if(!(p<r))return A.a(c,p)
A.iZ(c,s,c[p])}d+=g;++a}s=h.e
o=B.a.R(1,s)-1
n=A.bR(g,s)
m=B.a.j(a,h.e)*n
for(s=c.length,l=a;l<b;){r=d-1
if(!(r>=0&&r<s))return A.a(c,r)
r=d-g
if(!(r>=0&&r<s))return A.a(c,r)
A.iZ(c,d,c[r])
r=h.d
k=m+1
if(!(m<r.length))return A.a(r,m)
j=$.m7[r[m]>>>8&15]
for(q=1;q<g;++q){if((q&o)>>>0===0){r=h.d
i=k+1
if(!(k<r.length))return A.a(r,k)
j=$.m7[r[k]>>>8&15]
k=i}r=d+q
p=r-1
if(!(p<s))return A.a(c,p)
A.iZ(c,r,j.$3(c,c[p],r-g))}d+=g;++l
if((l&o)>>>0===0)m+=n}},
km(a,b,c){var s,r,q,p
for(s=a.length;b<c;b=p){if(!(b<s))return A.a(a,b)
r=a[b]
q=r>>>8&255
p=b+1
a[b]=(r&4278255360|(r&16711935)+(q<<16|q)&16711935)>>>0}}}
A.j4.prototype={
gfL(){var s=this,r=s.d
if(r>1||s.e>=4||s.f>1||s.r!==0)return!1
return!0},
kz(a,b,c,d){var s,r,q,p,o,n,m=this
if(!m.gfL())return!1
s=m.e
if(!(s<4))return A.a(B.bD,s)
r=B.bD[s]
if(m.d===0){s=m.b
q=b*s
p=m.a
B.m.am(d,q,c*s,p.a,p.d-p.b+q)}else{s=b+c
p=m.x
p===$&&A.c("_vp8l")
p.cy=d
o=p.c
if(m.y)s=p.io(o.a,o.b,s)
else{n=p.ch
n.toString
p=p.dC(n,o.a,o.b,s,t.aR.a(p.gkK()))
s=p}if(!s)return!1}if(r!=null){s=m.b
r.$6(s,m.c,s,b,c,d)}if(m.f===1)if(!m.iN(d,m.b,m.c,b,c))return!1
if(b+c===m.c)m.w=!0
return!0},
iN(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.eo.prototype={
hD(a,b){var s=this,r=a.C()
s.r=0
s.f=(r&1)!==0
s.w=a.d-a.b
s.x=b-16}}
A.fq.prototype={}
A.f6.prototype={
dN(a){var s,r,q=this
if(a===0)return!1
s=(a<<1>>>0)-1
q.e=s
s=s<<1>>>0
r=q.d=new Int32Array(s)
if(1>=s)return A.a(r,1)
r[1]=-1
q.f=1
B.m.aW(q.a,0,128,255)
return!0},
fz(a,b){var s,r,q,p,o,n,m=this
t.L.a(a)
for(s=a.length,r=0,q=0,p=0;p<b;++p){if(!(p<s))return A.a(a,p)
if(a[p]>0){++r
q=p}}if(!m.dN(r))return!1
if(r===1){if(q<0||q>=b)return!1
return m.dv(q,0,0)}o=new Int32Array(b)
if(!m.jc(a,b,o))return!1
for(p=0;p<b;++p){if(!(p<s))return A.a(a,p)
n=a[p]
if(n>0)if(!m.dv(p,o[p],n))return!1}return m.f===m.e},
kq(a,b,c,d,e){var s,r,q=this,p=t.L
p.a(a)
p.a(b)
p.a(c)
if(!q.dN(e))return!1
for(s=0;s<e;++s){if(!(s<2))return A.a(b,s)
p=b[s]
if(p!==-1){r=c[s]
if(r>=d)return q.f===q.e
if(!q.dv(r,p,a[s]))return q.f===q.e}}return q.f===q.e},
c6(a){var s,r,q,p=this,o=a.fU(),n=a.a,m=o&127,l=p.a[m]
if(l<=7){a.a=n+l
return p.b[m]}s=p.c[m]
n+=7
o=o>>>7
do{r=p.d
r===$&&A.c("tree")
q=(s<<1>>>0)+1
if(!(q<r.length))return A.a(r,q)
s=s+r[q]+(o&1)
o=o>>>1;++n}while(p.f_(s))
a.a=n
r=p.d
q=s<<1>>>0
if(!(q<r.length))return A.a(r,q)
return r[q]},
dv(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(c<=7){s=g.f7(b,c)
for(r=B.a.W(1,7-c),q=g.b,p=g.a,o=0;o<r;++o){n=(s|B.a.W(o,c))>>>0
if(!(n<128))return A.a(q,n)
q[n]=a
p[n]=c}}else s=g.f7(B.a.b0(b,c-7),7)
for(r=g.c,m=7,l=0;k=c-1,c>0;c=k){q=g.e
if(l>=q)return!1
p=g.d
p===$&&A.c("tree")
j=(l<<1>>>0)+1
i=p.length
if(!(j<i))return A.a(p,j)
h=p[j]
if(h<0){h=g.f
if(h===q)return!1
p[j]=h-l
g.f=h+2
q=(h<<1>>>0)+1
if(!(q<i))return A.a(p,q)
p[q]=-1
h=(h+1<<1>>>0)+1
if(!(h<i))return A.a(p,h)
p[h]=-1}else if(h===0)return!1
l+=p[j]+(B.a.b0(b,k)&1);--m
if(m===0){if(!(s<128))return A.a(r,s)
r[s]=l}}if(g.jm(l))g.jn(l,0)
else if(g.f_(l))return!1
r=g.d
r===$&&A.c("tree")
q=l<<1>>>0
if(!(q<r.length))return A.a(r,q)
r[q]=a
return!0},
f7(a,b){var s=B.aG[a&15],r=B.a.j(a,4)
if(!(r<16))return A.a(B.aG,r)
return B.a.a2((s<<4|B.aG[r])>>>0,8-b)},
jn(a,b){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
r[s]=b},
f_(a){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
return r[s]!==0},
jm(a){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
return r[s]<0},
jc(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=t.L
i.a(a)
i.a(c)
s=new Int32Array(16)
r=new Int32Array(16)
for(i=a.length,q=0,p=0;q<b;++q){if(!(q<i))return A.a(a,q)
o=a[q]
if(o>p)p=o}if(p>15)return!1
for(q=0;q<b;++q){if(!(q<i))return A.a(a,q)
n=a[q]
if(!(n>=0&&n<16))return A.a(s,n)
m=s[n]
if(!(n<16))return A.a(s,n)
s[n]=m+1}if(0>=16)return A.a(s,0)
s[0]=0
if(0>=16)return A.a(r,0)
r[0]=-1
for(l=1,k=0;l<=p;++l){k=k+s[l-1]<<1>>>0
if(!(l<16))return A.a(r,l)
r[l]=k}for(n=c.length,q=0;q<b;++q){if(!(q<i))return A.a(a,q)
m=a[q]
if(m>0){if(!(m<16))return A.a(r,m)
j=r[m]
if(!(m<16))return A.a(r,m)
r[m]=j+1
if(!(q<n))return A.a(c,q)
c[q]=j}else{if(!(q<n))return A.a(c,q)
c[q]=-1}}return!0}}
A.cL.prototype={}
A.d9.prototype={
a8(){return"WebPFormat."+this.b}}
A.da.prototype={$iS:1}
A.dO.prototype={}
A.j5.prototype={
dm(a){var s=A.w(t.L.a(a),!1,null,0)
this.b=s
if(!this.eH(s))return!1
return!0},
bh(a){var s,r=this,q=null,p=A.w(t.L.a(a),!1,q,0)
r.b=p
if(!r.eH(p))return q
p=new A.dO(B.a1,A.b([],t.J))
r.a=p
s=r.b
s.toString
if(!r.fk(s,p))return q
p=r.a
switch(p.f.a){case 3:p.as=p.z.length
return p
case 2:s=r.b
s.toString
s.d=p.ay
if(!A.kE(s,p).cM())return q
p=r.a
p.as=p.z.length
return p
case 1:s=r.b
s.toString
s.d=p.ay
if(!A.kC(s,p).cM())return q
p=r.a
p.as=p.z.length
return p
case 0:throw A.d(A.j("Unknown format for WebP"))}},
aw(a){var s,r,q,p,o=this,n=o.b
if(n==null||o.a==null)return null
s=o.a
if(s.e){s=s.z
r=s.length
if(a>=r||!1)return null
if(!(a<r))return A.a(s,a)
q=s[a]
n.toString
s=q.x
s===$&&A.c("_frameSize")
r=q.w
r===$&&A.c("_framePosition")
return o.ez(n.c7(s,r),a)}r=s.f
if(r===B.ao){n.toString
p=n.c7(s.ch,s.ay)
n=o.a
n.toString
return A.kE(p,n).bN(0)}else if(r===B.aO){n.toString
p=n.c7(s.ch,s.ay)
n=o.a
n.toString
return A.kC(p,n).bN(0)}return null},
bc(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=null
if(k.bh(t.L.a(b))==null)return j
if(!k.a.e||!1)return k.aw(0)
for(s=j,r=s,q=0;p=k.a,q<p.as;++q){p=p.z
if(!(q<p.length))return A.a(p,q)
c=p[q]
o=k.aw(q)
if(o==null)continue
o.y=c.e
if(r==null||s==null){p=k.a
n=p.a
p=p.b
m=o.gaI()
l=o.a
l=l==null?j:l.gH()
r=A.Q(j,j,l==null?B.e:l,0,B.i,p,j,0,m,j,n,!1)
s=r}else{s=A.aZ(s,!1,!1)
p=c.f
p===$&&A.c("clearFrame")
if(p){p=s.a
if(p!=null)p.aO(0,j)}}A.mB(s,o,B.aP,c.a,c.b)
r.aL(s)}return r},
ez(a,b){var s,r,q,p=null,o=A.b([],t.J),n=new A.dO(B.a1,o)
if(!this.fk(a,n))return p
if(n.f===B.a1)return p
n.as=this.a.as
if(n.e){s=o.length
if(b>=s||!1)return p
if(!(b<s))return A.a(o,b)
r=o[b]
o=r.x
o===$&&A.c("_frameSize")
s=r.w
s===$&&A.c("_framePosition")
return this.ez(a.c7(o,s),b)}else{q=a.c7(n.ch,n.ay)
o=n.f
if(o===B.ao)return A.kE(q,n).bN(0)
else if(o===B.aO)return A.kC(q,n).bN(0)}return p},
eH(a){if(a.af(4)!=="RIFF")return!1
a.k()
if(a.af(4)!=="WEBP")return!1
return!0},
fk(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=a.c,f=!1
while(!0){if(!(a.d<g&&!f))break
s=a.af(4)
r=a.k()
q=r+1>>>1<<1>>>0
p=a.d
o=p-h
switch(s){case"VP8X":if(!this.ja(a,b))return!1
break
case"VP8 ":b.ay=o
b.ch=r
b.f=B.aO
f=!0
break
case"VP8L":b.ay=o
b.ch=r
b.f=B.ao
f=!0
break
case"ALPH":n=a.a
m=a.e
l=n.length
n=new A.ae(n,0,l,0,m)
b.at=n
n.d=p
a.d+=q
break
case"ANIM":b.f=B.kQ
k=a.k()
p=new Uint8Array(4)
if(0>=4)return A.a(p,0)
p[0]=k>>>8&255
if(1>=4)return A.a(p,1)
p[1]=k>>>16&255
if(2>=4)return A.a(p,2)
p[2]=k>>>24&255
if(3>=4)return A.a(p,3)
p[3]=k&255
a.l()
break
case"ANMF":if(!this.j5(a,b,r))return!1
break
case"ICCP":b.toString
j=a.aj(r)
a.d=a.d+(j.c-j.d)
j.a1()
break
case"EXIF":b.toString
a.af(r)
break
case"XMP ":b.toString
a.af(r)
break
default:a.d=p+q
break}p=a.d
i=q-(p-h-o)
if(i>0)a.d=p+i}if(!b.d)b.d=b.at!=null
return b.f!==B.a1},
ja(a,b){var s,r,q,p,o=a.C()
if((o&192)!==0)return!1
s=B.a.j(o,4)
r=B.a.j(o,1)
if((o&1)!==0)return!1
if(a.bp()!==0)return!1
q=a.bp()
p=a.bp()
b.a=q+1
b.b=p+1
b.e=(r&1)!==0
b.d=(s&1)!==0
return!0},
j5(a,b,c){var s,r=a.bp(),q=a.bp()
a.bp()
a.bp()
s=new A.fq(r*2,q*2,a.bp())
s.hD(a,c)
if(s.r!==0)return!1
B.c.D(b.z,s)
return!0}}
A.hZ.prototype={
a8(){return"IccProfileCompression."+this.b}}
A.dF.prototype={
kv(){var s,r=this
if(r.b===B.aw)return r.c
s=t.D.a(B.aU.bw(r.c))
r.c=s
r.b=B.aw
return s}}
A.f5.prototype={
a8(){return"FrameType."+this.b}}
A.bp.prototype={
gai(){var s=this.x
if(s===$){s=A.b([],t.g)
this.sbY(s)}return s},
hx(a,b,c,d){var s,r,q,p=this,o=a.gH(),n=a.gaI(),m=a.a
p.ew(d,b,o,n,m==null?null:m.gL())
o=a.b
if(o!=null)p.sdk(A.fA(o,t.N,t.I))
o=a.d
if(o!=null){n=t.N
p.sdr(A.fA(o,n,n))}B.c.D(p.gai(),p)
if(!c){s=a.gai().length
for(o=t.g,r=1;r<s;++r){q=a.x
if(q===$){q=A.b([],o)
a.sbY(q)}if(!(r<q.length))return A.a(q,r)
p.aL(A.fb(q[r],b,!1,d))}}},
hw(a,b,c){var s,r,q,p,o=this,n=a.b
if(n!=null)o.sdk(A.fA(n,t.N,t.I))
n=a.d
if(n!=null){s=t.N
o.sdr(A.fA(n,s,s))}B.c.D(o.gai(),o)
if(!b&&a.gai().length>1){r=a.gai().length
for(n=t.g,q=1;q<r;++q){p=a.x
if(p===$){p=A.b([],n)
a.sbY(p)}if(!(q<p.length))return A.a(p,q)
o.aL(A.aZ(p[q],!1,!1))}}},
aL(a){var s=this
if(a==null)a=A.aZ(s,!0,!0)
a.z=s.gai().length
if(B.c.gfO(s.gai())!==a)B.c.D(s.gai(),a)
return a},
dj(){return this.aL(null)},
ew(a,b,c,d,e){var s,r,q=this
switch(c.a){case 0:if(e==null){s=B.b.bb(a*d/8)
r=new A.cQ($,s,null,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.bb(a/8)
r=new A.cQ($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 1:if(e==null){s=B.b.bb(a*(d<<1>>>0)/8)
r=new A.cR($,s,null,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.bb(a/4)
r=new A.cR($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 2:if(e==null){if(d===2)s=a
else if(d===4)s=a*2
else s=d===3?B.b.bb(a*1.5):B.b.bb(a/2)
r=new A.cT($,s,null,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.bb(a/2)
r=new A.cT($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 3:if(e==null)q.a=A.lt(a,b,d)
else q.a=new A.cU(new Uint8Array(a*b),e,a,b,1)
break
case 4:q.a=new A.dK(new Uint16Array(a*b*d),a,b,d)
break
case 5:q.a=A.nF(a,b,d)
break
case 6:q.a=new A.dJ(new Int8Array(a*b*d),a,b,d)
break
case 7:q.a=new A.dH(new Int16Array(a*b*d),a,b,d)
break
case 8:q.a=new A.dI(new Int32Array(a*b*d),a,b,d)
break
case 9:q.a=A.nD(a,b,d)
break
case 10:q.a=A.nE(a,b,d)
break
case 11:q.a=new A.dG(new Float64Array(a*b*4*d),a,b,d)
break}},
B(a){var s=this
return"Image("+s.gP(s)+", "+s.gK(s)+", "+s.gH().b+", "+s.gaI()+")"},
gP(a){var s=this.a
s=s==null?null:s.a
return s==null?0:s},
gK(a){var s=this.a
s=s==null?null:s.b
return s==null?0:s},
gH(){var s=this.a
s=s==null?null:s.gH()
return s==null?B.e:s},
gbE(){var s=this.e
return s==null?this.e=new A.c_(A.I(t.N,t.P)):s},
h9(a,b){var s=this
if(s.b==null)s.sdk(A.I(t.N,t.I))
s.b.h(0,a,b)
if(s.b.a===0)s.sdk(null)},
gJ(a){var s=this.a
return s.gJ(s)},
ga0(a){var s=this.a
s=s==null?null:s.ga0(s)
if(s==null)s=new Uint8Array(0).buffer
return s},
a1(){var s=this.a
s=s==null?null:A.y(s.ga0(s),0,null)
return s==null?A.y(this.ga0(this),0,null):s},
gfP(a){var s=this.a
s=s==null?null:s.ga0(s).byteLength
return s==null?0:s},
gaI(){var s=this.a
s=s==null?null:s.gL()
s=s==null?null:s.b
if(s==null){s=this.a
s=s==null?null:s.c}return s==null?0:s},
gaQ(){var s=this.a
s=s==null?null:s.gaQ()
return s===!0},
gaH(){var s=this.a
return(s==null?null:s.gL())!=null},
gaG(){var s=this.a
s=s==null?null:s.gaG()
return s==null?0:s},
fJ(a,b){var s=this
return a>=0&&b>=0&&a<s.gP(s)&&b<s.gK(s)},
aT(a,b,c,d){var s=this.a
s=s==null?null:s.aT(a,b,c,d)
if(s==null)s=new A.bk(new Uint8Array(0))
return s},
M(a,b,c){var s=this.a
s=s==null?null:s.M(a,b,c)
return s==null?new A.B():s},
aM(a,b){return this.M(a,b,null)},
an(a,b){var s=this
if(a<0||a>=s.gP(s)||b<0||b>=s.gK(s))return new A.B()
return s.M(a,b,null)},
h5(a,b,c){switch(c.a){case 0:return this.an(B.b.i(a),B.b.i(b))
case 1:case 3:return this.h6(a,b)
case 2:return this.h4(a,b)}},
h6(a,b){var s,r,q,p,o,n,m=this,l=B.b.i(a),k=l-(a>=0?0:1),j=k+1
l=B.b.i(b)
s=l-(b>=0?0:1)
r=s+1
l=new A.i5(a-k,b-s)
q=m.an(k,s)
p=r>=m.gK(m)?q:m.an(k,r)
o=j>=m.gP(m)?q:m.an(j,s)
n=j>=m.gP(m)||r>=m.gK(m)?q:m.an(j,r)
return m.aT(l.$4(q.gp(q),o.gp(o),p.gp(p),n.gp(n)),l.$4(q.gt(),o.gt(),p.gt(),n.gt()),l.$4(q.gu(),o.gu(),p.gu(),n.gu()),l.$4(q.gv(),o.gv(),p.gv(),n.gv()))},
h4(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=this,c7=B.b.i(d2),c8=c7-(d2>=0?0:1),c9=c8-1,d0=c8+1,d1=c8+2
c7=B.b.i(d3)
s=c7-(d3>=0?0:1)
r=s-1
q=s+1
p=s+2
o=d2-c8
n=d3-s
c7=new A.i4()
m=c6.an(c8,s)
l=c9<0
k=!l
j=!k||r<0?m:c6.an(c9,r)
i=l?m:c6.an(c8,r)
h=r<0
g=h||d0>=c6.gP(c6)?m:c6.an(d0,r)
f=d1>=c6.gP(c6)||h?m:c6.an(d1,r)
e=c7.$5(o,j.gp(j),i.gp(i),g.gp(g),f.gp(f))
d=c7.$5(o,j.gt(),i.gt(),g.gt(),f.gt())
c=c7.$5(o,j.gu(),i.gu(),g.gu(),f.gu())
b=c7.$5(o,j.gv(),i.gv(),g.gv(),f.gv())
a=l?m:c6.an(c9,s)
a0=d0>=c6.gP(c6)?m:c6.an(d0,s)
a1=d1>=c6.gP(c6)?m:c6.an(d1,s)
a2=c7.$5(o,a.gp(a),m.gp(m),a0.gp(a0),a1.gp(a1))
a3=c7.$5(o,a.gt(),m.gt(),a0.gt(),a1.gt())
a4=c7.$5(o,a.gu(),m.gu(),a0.gu(),a1.gu())
a5=c7.$5(o,a.gv(),m.gv(),a0.gv(),a1.gv())
a6=!k||q>=c6.gK(c6)?m:c6.an(c9,q)
a7=q>=c6.gK(c6)?m:c6.an(c8,q)
a8=d0>=c6.gP(c6)||q>=c6.gK(c6)?m:c6.an(d0,q)
a9=d1>=c6.gP(c6)||q>=c6.gK(c6)?m:c6.an(d1,q)
b0=c7.$5(o,a6.gp(a6),a7.gp(a7),a8.gp(a8),a9.gp(a9))
b1=c7.$5(o,a6.gt(),a7.gt(),a8.gt(),a9.gt())
b2=c7.$5(o,a6.gu(),a7.gu(),a8.gu(),a9.gu())
b3=c7.$5(o,a6.gv(),a7.gv(),a8.gv(),a9.gv())
b4=!k||p>=c6.gK(c6)?m:c6.an(c9,p)
b5=p>=c6.gK(c6)?m:c6.an(c8,p)
b6=d0>=c6.gP(c6)||p>=c6.gK(c6)?m:c6.an(d0,p)
b7=d1>=c6.gP(c6)||p>=c6.gK(c6)?m:c6.an(d1,p)
b8=c7.$5(o,b4.gp(b4),b5.gp(b5),b6.gp(b6),b7.gp(b7))
b9=c7.$5(o,b4.gt(),b5.gt(),b6.gt(),b7.gt())
c0=c7.$5(o,b4.gu(),b5.gu(),b6.gu(),b7.gu())
c1=c7.$5(o,b4.gv(),b5.gv(),b6.gv(),b7.gv())
c2=c7.$5(n,e,a2,b0,b8)
c3=c7.$5(n,d,a3,b1,b9)
c4=c7.$5(n,c,a4,b2,c0)
c5=c7.$5(n,b,a5,b3,c1)
return c6.aT(B.b.i(c2),B.b.i(c3),B.b.i(c4),B.b.i(c5))},
bX(a,b,c){var s
if(t.dv.b(c))if(c.gbf().gL()!=null)if(this.gaH()){s=this.a
if(s!=null)s.V(a,b,c.gO(c),0,0)
return}s=this.a
if(s!=null)s.ao(a,b,c.gp(c),c.gt(),c.gu(),c.gv())},
gF(){var s=this.a
s=s==null?null:s.gF()
return s==null?0:s},
aO(a,b){var s=this.a
return s==null?null:s.aO(0,b)},
kr(a){return this.aO(a,null)},
cJ(a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null
if(a7==null)a7=a5.gH()
if(a8==null)a8=a5.gaI()
s=B.bW.n(0,a7)
if(a9)if(a8<4){if(a7!==B.y)if(a7!==B.p)if(a7!==B.t)r=a7===B.e&&a8===1
else r=!0
else r=!0
else r=!0
r=!r}else r=!0
else r=!1
if(!r)r=a7.a<3&&a5.gH().a>=3
else r=!0
if(r)a9=!1
if(a7===a5.gH())if(a8===a5.gaI()){if(!a9){r=a5.a
r=(r==null?a6:r.gL())==null}else r=!1
if(!r)if(a9){r=a5.a
r=(r==null?a6:r.gL())!=null}else r=!1
else r=!0}else r=!1
else r=!1
if(r)return A.aZ(a5,!1,!1)
for(r=a5.gai(),q=r.length,p=t.N,o=t.p,n=a6,m=0;m<r.length;r.length===q||(0,A.a6)(r),++m,n=d){l=r[m]
k=l.a
j=k==null
i=j?a6:k.a
if(i==null)i=0
k=j?a6:k.b
if(k==null)k=0
j=l.e
j=j==null?a6:A.dt(j)
h=l.c
if(h==null)h=a6
else{g=h.a
f=h.b
h=h.c
h=new A.dF(g,f,new Uint8Array(h.subarray(0,A.bg(0,a6,h.length))))}g=l.w
f=l.r
e=A.Q(a6,j,a7,l.y,g,k,h,f,a8,a6,i,a9)
k=l.d
e.sdr(k!=null?A.fA(k,p,p):a6)
if(n!=null){n.aL(e)
d=n}else d=e
k=e.a
c=k==null?a6:k.gL()
k=e.a
k=k==null?a6:k.gL()
b=k==null?a6:k.gH()
if(b==null)b=a7
k=l.a
if(c!=null){a=A.I(o,o)
a0=k==null?a6:k.M(0,0,a6)
if(a0==null)a0=new A.B()
for(k=e.a,k=k.gJ(k),a1=a6,a2=0;k.E();){a3=k.gU()
a4=A.mJ(B.b.c3(a0.gab()*255),B.b.c3(a0.ga4()*255),B.b.c3(a0.gaa()*255),0)
if(a.al(a4)){j=a.n(0,a4)
j.toString
a3.sO(0,j)}else{a.h(0,a4,a2)
a3.sO(0,a2)
a1=A.ay(a0,s,b,a8,a1)
c.aU(a2,a1.gp(a1),a1.gt(),a1.gu());++a2}a0.E()}}else{a0=k==null?a6:k.M(0,0,a6)
if(a0==null)a0=new A.B()
for(k=e.a,k=k.gJ(k);k.E();){A.ay(a0,s,a6,a6,k.gU())
a0.E()}}}n.toString
return n},
cc(a,b){return this.cJ(a,null,b)},
cI(a,b){return this.cJ(a,b,!1)},
aP(a){return this.cJ(a,null,!1)},
fB(a){return this.cJ(null,a,!1)},
ko(a){var s,r,q,p
t.ck.a(a)
if(this.d==null){s=t.N
this.sdr(A.I(s,s))}for(s=A.b0(a,a.r,A.m(a).c);s.E();){r=s.d
q=this.d
q.toString
p=a.n(0,r)
p.toString
q.h(0,r,p)}},
gbJ(){var s,r=this
if(r.gH()===B.y)s=2
else if(r.gH()===B.p)s=4
else if(r.gH()===B.t)s=16
else s=r.gH()===B.e?256:0
return s},
ih(a,b){var s,r=this
switch(a.a){case 0:return null
case 1:return null
case 2:return null
case 3:s=r.gbJ()
return new A.aG(new Uint8Array(s*b),s,b)
case 4:s=r.gbJ()
return new A.e4(new Uint16Array(s*b),s,b)
case 5:s=r.gbJ()
return new A.d0(new Uint32Array(s*b),s,b)
case 6:s=r.gbJ()
return new A.e3(new Int8Array(s*b),s,b)
case 7:s=r.gbJ()
return new A.e1(new Int16Array(s*b),s,b)
case 8:s=r.gbJ()
return new A.e2(new Int32Array(s*b),s,b)
case 9:s=r.gbJ()
return new A.dZ(new Uint16Array(s*b),s,b)
case 10:s=r.gbJ()
return new A.e_(new Float32Array(s*b),s,b)
case 11:s=r.gbJ()
return new A.e0(new Float64Array(s*b),s,b)}},
sdk(a){this.b=t.ew.a(a)},
sdr(a){this.d=t.cZ.a(a)},
sbY(a){this.x=t.Y.a(a)}}
A.i5.prototype={
$4(a,b,c,d){var s=this.b
return a+this.a*(b-a+s*(a+d-c-b))+s*(c-a)},
$S:28}
A.i4.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:29}
A.a9.prototype={
gL(){return null}}
A.cO.prototype={
bk(a,b){var s=this,r=s.d
if(b)r=new Uint16Array(r.length)
else r=new Uint16Array(A.t(r))
return new A.cO(r,s.a,s.b,s.c)},
gH(){return B.C},
gbm(){return B.av},
ga0(a){return this.d.buffer},
gaG(){return 16},
gbg(){return this.a*this.c*2},
gJ(a){return A.lK(this)},
gA(a){return this.d.byteLength},
gF(){return 1},
gaQ(){return!0},
aT(a,b,c,d){var s=new Uint16Array(4),r=new A.cy(s),q=A.H(a)
if(0>=4)return A.a(s,0)
s[0]=q
q=A.H(b)
if(1>=4)return A.a(s,1)
s[1]=q
q=A.H(c)
if(2>=4)return A.a(s,2)
s[2]=q
q=A.H(d)
if(3>=4)return A.a(s,3)
s[3]=q
s=r
return s},
M(a,b,c){var s,r
if(c==null||!(c instanceof A.cb)||c.d!==this)c=A.lK(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=A.H(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
V(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.H(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.H(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=A.H(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
ao(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.H(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.H(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=A.H(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=A.H(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
B(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.cP.prototype={
bk(a,b){var s=this,r=s.d
if(b)r=new Float32Array(r.length)
else r=new Float32Array(A.t(r))
return new A.cP(r,s.a,s.b,s.c)},
gH(){return B.K},
gbm(){return B.av},
ga0(a){return this.d.buffer},
gaG(){return 32},
gJ(a){return A.lL(this)},
gA(a){return this.d.byteLength},
gF(){return 1},
gbg(){return this.a*this.c*4},
gaQ(){return!0},
aT(a,b,c,d){var s=new Float32Array(4),r=new A.cz(s)
if(0>=4)return A.a(s,0)
s[0]=a
if(1>=4)return A.a(s,1)
s[1]=b
if(2>=4)return A.a(s,2)
s[2]=c
if(3>=4)return A.a(s,3)
s[3]=d
s=r
return s},
M(a,b,c){var s,r
if(c==null||!(c instanceof A.cc)||c.d!==this)c=A.lL(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
V(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<o))return A.a(p,s)
p[s]=d
if(r>2){r=q+2
if(!(r<o))return A.a(p,r)
p[r]=e}}},
ao(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<o))return A.a(p,s)
p[s]=d
if(r>2){s=q+2
if(!(s<o))return A.a(p,s)
p[s]=e
if(r>3){r=q+3
if(!(r<o))return A.a(p,r)
p[r]=f}}}},
B(a){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.dG.prototype={
bk(a,b){var s=this,r=s.d
if(b)r=new Float64Array(r.length)
else r=new Float64Array(A.t(r))
return new A.dG(r,s.a,s.b,s.c)},
gH(){return B.N},
gbm(){return B.av},
ga0(a){return this.d.buffer},
gA(a){return this.d.byteLength},
gaG(){return 64},
gJ(a){return A.lM(this)},
gF(){return 1},
gbg(){return this.a*this.c*8},
gaQ(){return!0},
aT(a,b,c,d){var s=new Float64Array(4),r=new A.cA(s)
if(0>=4)return A.a(s,0)
s[0]=a
if(1>=4)return A.a(s,1)
s[1]=b
if(2>=4)return A.a(s,2)
s[2]=c
if(3>=4)return A.a(s,3)
s[3]=d
s=r
return s},
M(a,b,c){var s,r
if(c==null||!(c instanceof A.cd)||c.d!==this)c=A.lM(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
V(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<o))return A.a(p,s)
p[s]=d
if(r>2){r=q+2
if(!(r<o))return A.a(p,r)
p[r]=e}}},
ao(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<o))return A.a(p,s)
p[s]=d
if(r>2){s=q+2
if(!(s<o))return A.a(p,s)
p[s]=e
if(r>3){r=q+3
if(!(r<o))return A.a(p,r)
p[r]=f}}}},
B(a){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.dH.prototype={
bk(a,b){var s=this,r=s.d
if(b)r=new Int16Array(r.length)
else r=new Int16Array(A.t(r))
return new A.dH(r,s.a,s.b,s.c)},
gH(){return B.P},
gbm(){return B.au},
ga0(a){return this.d.buffer},
gJ(a){return A.lN(this)},
gA(a){return this.d.byteLength},
gF(){return 32767},
gaQ(){return!0},
gaG(){return 16},
gbg(){return this.a*this.c*2},
aT(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int16Array(4),n=new A.cB(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
M(a,b,c){var s,r
if(c==null||!(c instanceof A.ce)||c.d!==this)c=A.lN(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
V(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
ao(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
B(a){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.dI.prototype={
bk(a,b){var s=this,r=s.d
if(b)r=new Int32Array(r.length)
else r=new Int32Array(A.t(r))
return new A.dI(r,s.a,s.b,s.c)},
gH(){return B.Q},
gbm(){return B.au},
ga0(a){return this.d.buffer},
gaG(){return 32},
gbg(){return this.a*this.c*4},
gJ(a){return A.lO(this)},
gA(a){return this.d.byteLength},
gF(){return 2147483647},
gaQ(){return!0},
aT(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int32Array(4),n=new A.cC(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
M(a,b,c){var s,r
if(c==null||!(c instanceof A.cf)||c.d!==this)c=A.lO(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
V(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
ao(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
B(a){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.dJ.prototype={
bk(a,b){var s=this,r=s.d
if(b)r=new Int8Array(r.length)
else r=new Int8Array(A.t(r))
return new A.dJ(r,s.a,s.b,s.c)},
gH(){return B.O},
gbm(){return B.au},
ga0(a){return this.d.buffer},
gbg(){return this.a*this.c},
gJ(a){return A.lP(this)},
gA(a){return this.d.byteLength},
gF(){return 127},
gaQ(){return!0},
gaG(){return 8},
aT(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int8Array(4),n=new A.cD(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
M(a,b,c){var s,r
if(c==null||!(c instanceof A.cg)||c.d!==this)c=A.lP(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
V(a,b,c,d,e){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
ao(a,b,c,d,e,f){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
B(a){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.cQ.prototype={
lt(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.kW("data")
this.d=s},
bk(a,b){var s,r=this,q=r.d
if(b){q===$&&A.c("data")
q=new Uint8Array(q.length)}else{q===$&&A.c("data")
q=new Uint8Array(A.t(q))}s=r.f
s=s==null?null:s.T(0)
return new A.cQ(q,r.e,s,r.a,r.b,r.c)},
gH(){return B.y},
gbm(){return B.J},
gA(a){var s=this.d
s===$&&A.c("data")
return s.byteLength},
gF(){var s=this.f
s=s==null?null:s.gF()
return s==null?1:s},
gaQ(){return!1},
ga0(a){var s=this.d
s===$&&A.c("data")
return s.buffer},
gaG(){return 1},
gJ(a){return A.fJ(this)},
aT(a,b,c,d){var s=new A.cE(4,0)
s.a7(B.b.i(a),B.b.i(b),B.b.i(c),B.b.i(d))
return s},
M(a,b,c){if(c==null||!(c instanceof A.ch)||c.f!==this)c=A.fJ(this)
c.b_(a,b)
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fJ(r):s).b_(a,b)
r.r.aq(0,c)},
V(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fJ(r):s).b_(a,b)
r.r.aK(c,d,e)},
ao(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fJ(r):s).b_(a,b)
r.r.a7(c,d,e,f)},
B(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){},
gbg(){return this.e},
gL(){return this.f}}
A.dK.prototype={
bk(a,b){var s=this,r=s.d
if(b)r=new Uint16Array(r.length)
else r=new Uint16Array(A.t(r))
return new A.dK(r,s.a,s.b,s.c)},
gH(){return B.A},
gbm(){return B.J},
ga0(a){return this.d.buffer},
gaG(){return 16},
gF(){return 65535},
gbg(){return this.a*this.c*2},
gJ(a){return A.lQ(this)},
gA(a){return this.d.byteLength},
gaQ(){return!0},
aT(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Uint16Array(4),n=new A.cF(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
M(a,b,c){var s,r
if(c==null||!(c instanceof A.ci)||c.d!==this)c=A.lQ(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
V(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
ao(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
B(a){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.cR.prototype={
lu(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.kW("data")
this.d=s},
bk(a,b){var s,r=this,q=r.d
if(b){q===$&&A.c("data")
q=new Uint8Array(q.length)}else{q===$&&A.c("data")
q=new Uint8Array(A.t(q))}s=r.f
s=s==null?null:s.T(0)
return new A.cR(q,r.e,s,r.a,r.b,r.c)},
gH(){return B.p},
gbm(){return B.J},
gaG(){return 2},
ga0(a){var s=this.d
s===$&&A.c("data")
return s.buffer},
gJ(a){return A.fK(this)},
gA(a){var s=this.d
s===$&&A.c("data")
return s.byteLength},
gF(){var s=this.f
s=s==null?null:s.gF()
return s==null?3:s},
gaQ(){return!1},
aT(a,b,c,d){var s=new A.cG(4,0)
s.a7(B.b.i(a),B.b.i(b),B.b.i(c),B.b.i(d))
return s},
M(a,b,c){if(c==null||!(c instanceof A.cj)||c.f!==this)c=A.fK(this)
c.b_(a,b)
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fK(r):s).b_(a,b)
r.r.ar(0,c)},
V(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fK(r):s).b_(a,b)
r.r.aK(c,d,e)},
ao(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fK(r):s).b_(a,b)
r.r.a7(c,d,e,f)},
B(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){},
gbg(){return this.e},
gL(){return this.f}}
A.cS.prototype={
bk(a,b){var s=this,r=s.d
if(b)r=new Uint32Array(r.length)
else r=new Uint32Array(A.t(r))
return new A.cS(r,s.a,s.b,s.c)},
gH(){return B.L},
gbm(){return B.J},
ga0(a){return this.d.buffer},
gbg(){return this.a*this.c*4},
gaG(){return 32},
gF(){return 4294967295},
gJ(a){return A.lR(this)},
gA(a){return this.d.byteLength},
gaQ(){return!0},
aT(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Uint32Array(4),n=new A.cH(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
M(a,b,c){var s,r
if(c==null||!(c instanceof A.ck)||c.d!==this)c=A.lR(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
V(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
ao(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
B(a){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.cT.prototype={
lv(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.kW("data")
this.d=s},
bk(a,b){var s,r=this,q=r.d
if(b){q===$&&A.c("data")
q=new Uint8Array(q.length)}else{q===$&&A.c("data")
q=new Uint8Array(A.t(q))}s=r.f
s=s==null?null:s.T(0)
return new A.cT(q,r.e,s,r.a,r.b,r.c)},
gH(){return B.t},
gbm(){return B.J},
ga0(a){var s=this.d
s===$&&A.c("data")
return s.buffer},
gJ(a){return A.fL(this)},
gA(a){var s=this.d
s===$&&A.c("data")
return s.byteLength},
gF(){var s=this.f
s=s==null?null:s.gF()
return s==null?15:s},
gaQ(){return!1},
gaG(){return 4},
aT(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new A.cI(4,new Uint8Array(2))
o.a7(s,r,q,p)
s=o
return s},
M(a,b,c){if(c==null||!(c instanceof A.cl)||c.e!==this)c=A.fL(this)
c.b_(a,b)
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fL(r):s).b_(a,b)
r.r.au(0,c)},
V(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fL(r):s).b_(a,b)
r.r.aK(c,d,e)},
ao(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fL(r):s).b_(a,b)
r.r.a7(c,d,e,f)},
B(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){},
gbg(){return this.e},
gL(){return this.f}}
A.cU.prototype={
bk(a,b){var s,r=this,q=r.d
if(b)q=new Uint8Array(q.length)
else q=new Uint8Array(A.t(q))
s=r.e
s=s==null?null:s.T(0)
return new A.cU(q,s,r.a,r.b,r.c)},
gH(){return B.e},
gbm(){return B.J},
ga0(a){return this.d.buffer},
gbg(){return this.a*this.c},
gaG(){return 8},
gJ(a){return A.kn(this)},
gA(a){return this.d.byteLength},
gF(){var s=this.e
s=s==null?null:s.gF()
return s==null?255:s},
gaQ(){return!1},
aT(a,b,c,d){var s=A.nj(B.b.i(B.b.N(a,0,255)),B.b.i(B.b.N(b,0,255)),B.b.i(B.b.N(c,0,255)),B.b.i(B.b.N(d,0,255)))
return s},
M(a,b,c){var s,r
if(c==null||!(c instanceof A.cm)||c.d!==this)c=A.kn(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aM(a,b){return this.M(a,b,null)},
aN(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
V(a,b,c,d,e){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
ao(a,b,c,d,e,f){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
B(a){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=b==null?e:A.ay(b,e,B.e,e,e),c=f.c
if(c===1){s=d==null?0:B.a.N(A.k(d.gp(d)),0,255)
c=f.d
B.m.aW(c,0,c.length,s)}else if(c===2){c=d==null
s=c?0:B.a.N(A.k(d.gp(d)),0,255)
r=c?0:B.a.N(A.k(d.gt()),0,255)
q=A.lH(f.d.buffer,0,e)
B.jW.aW(q,0,q.length,(r<<8|s)>>>0)}else if(c===4){c=d==null
s=c?0:B.a.N(A.k(d.gp(d)),0,255)
r=c?0:B.a.N(A.k(d.gt()),0,255)
p=c?0:B.a.N(A.k(d.gu()),0,255)
o=c?0:B.a.N(A.k(d.gv()),0,255)
n=A.V(f.d.buffer,0,e)
B.W.aW(n,0,n.length,(o<<24|p<<16|r<<8|s)>>>0)}else{c=d==null
s=c?0:B.a.N(A.k(d.gp(d)),0,255)
r=c?0:B.a.N(A.k(d.gt()),0,255)
p=c?0:B.a.N(A.k(d.gu()),0,255)
for(m=A.kn(f),c=m.d,l=c.c,k=l>2,j=l>1,l=l>0,c=c.d,i=c.length;m.E();){if(l){h=m.c
g=B.b.i(B.a.N(s,0,255))
if(!(h>=0&&h<i))return A.a(c,h)
c[h]=g}if(j){h=m.c+1
g=B.b.i(B.a.N(r,0,255))
if(!(h>=0&&h<i))return A.a(c,h)
c[h]=g}if(k){h=m.c+2
g=B.b.i(B.a.N(p,0,255))
if(!(h>=0&&h<i))return A.a(c,h)
c[h]=g}}}},
gL(){return this.e}}
A.fr.prototype={
a8(){return"Interpolation."+this.b}}
A.aO.prototype={}
A.dZ.prototype={
T(a){return new A.dZ(new Uint16Array(A.t(this.c)),this.a,this.b)},
ga0(a){return this.c.buffer},
gH(){return B.C},
gF(){return 1},
Y(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=A.H(c)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aU(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=A.H(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=A.H(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=A.H(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b6(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.N
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aZ(a){var s,r
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
s=s[a]
r=$.N
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
return r[s]},
aY(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.N
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.N
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.N
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
return s[r]},
bD(a,b){return this.Y(a,0,b)},
bB(a,b){return this.Y(a,1,b)},
bA(a,b){return this.Y(a,2,b)},
bz(a,b){return this.Y(a,3,b)}}
A.e_.prototype={
T(a){return new A.e_(new Float32Array(A.t(this.c)),this.a,this.b)},
ga0(a){return this.c.buffer},
gH(){return B.K},
gF(){return 1},
Y(a,b,c){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
aU(a,b,c,d){var s,r,q,p=this.b
a*=p
s=this.c
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
s[a]=b
if(p>1){q=a+1
if(!(q<r))return A.a(s,q)
s[q]=c
if(p>2){p=a+2
if(!(p<r))return A.a(s,p)
s[p]=d}}},
b6(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aZ(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aY(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bD(a,b){return this.Y(a,0,b)},
bB(a,b){return this.Y(a,1,b)},
bA(a,b){return this.Y(a,2,b)},
bz(a,b){return this.Y(a,3,b)}}
A.e0.prototype={
T(a){return new A.e0(new Float64Array(A.t(this.c)),this.a,this.b)},
ga0(a){return this.c.buffer},
gH(){return B.N},
gF(){return 1},
Y(a,b,c){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
aU(a,b,c,d){var s,r,q,p=this.b
a*=p
s=this.c
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
s[a]=b
if(p>1){q=a+1
if(!(q<r))return A.a(s,q)
s[q]=c
if(p>2){p=a+2
if(!(p<r))return A.a(s,p)
s[p]=d}}},
b6(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aZ(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aY(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bD(a,b){return this.Y(a,0,b)},
bB(a,b){return this.Y(a,1,b)},
bA(a,b){return this.Y(a,2,b)},
bz(a,b){return this.Y(a,3,b)}}
A.e1.prototype={
T(a){return new A.e1(new Int16Array(A.t(this.c)),this.a,this.b)},
ga0(a){return this.c.buffer},
gH(){return B.P},
gF(){return 32767},
Y(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aU(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b6(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aZ(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aY(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bD(a,b){return this.Y(a,0,b)},
bB(a,b){return this.Y(a,1,b)},
bA(a,b){return this.Y(a,2,b)},
bz(a,b){return this.Y(a,3,b)}}
A.e2.prototype={
T(a){return new A.e2(new Int32Array(A.t(this.c)),this.a,this.b)},
ga0(a){return this.c.buffer},
gH(){return B.Q},
gF(){return 2147483647},
Y(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aU(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b6(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aZ(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aY(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bD(a,b){return this.Y(a,0,b)},
bB(a,b){return this.Y(a,1,b)},
bA(a,b){return this.Y(a,2,b)},
bz(a,b){return this.Y(a,3,b)}}
A.e3.prototype={
T(a){return new A.e3(new Int8Array(A.t(this.c)),this.a,this.b)},
ga0(a){return this.c.buffer},
gH(){return B.O},
gF(){return 127},
Y(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aU(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b6(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aZ(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aY(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bD(a,b){return this.Y(a,0,b)},
bB(a,b){return this.Y(a,1,b)},
bA(a,b){return this.Y(a,2,b)},
bz(a,b){return this.Y(a,3,b)}}
A.e4.prototype={
T(a){return new A.e4(new Uint16Array(A.t(this.c)),this.a,this.b)},
ga0(a){return this.c.buffer},
gH(){return B.A},
gF(){return 65535},
Y(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aU(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b6(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aZ(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aY(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bD(a,b){return this.Y(a,0,b)},
bB(a,b){return this.Y(a,1,b)},
bA(a,b){return this.Y(a,2,b)},
bz(a,b){return this.Y(a,3,b)}}
A.d0.prototype={
T(a){return new A.d0(new Uint32Array(A.t(this.c)),this.a,this.b)},
ga0(a){return this.c.buffer},
gH(){return B.L},
gF(){return 4294967295},
Y(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.b.i(c)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aU(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b6(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aZ(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aY(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bD(a,b){return this.Y(a,0,b)},
bB(a,b){return this.Y(a,1,b)},
bA(a,b){return this.Y(a,2,b)},
bz(a,b){return this.Y(a,3,b)}}
A.aG.prototype={
T(a){return A.lI(this)},
ga0(a){return this.c.buffer},
gH(){return B.e},
gF(){return 255},
Y(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aU(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
cZ(a,b,c,d,e){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.a.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.a.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){r=a+2
p=B.a.i(d)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>3){o=a+3
r=B.a.i(e)
if(!(o<q))return A.a(s,o)
s[o]=r}}}},
b6(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aZ(a){var s,r
a*=this.b
s=this.c
r=s.length
if(a>=r)return 0
if(!(a>=0))return A.a(s,a)
return s[a]},
aY(a){var s,r,q=this.b
if(q<2)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+1
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
aX(a){var s,r,q=this.b
if(q<3)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+2
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
br(a){var s,r,q=this.b
if(q<4)return 255
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+3
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
bD(a,b){return this.Y(a,0,b)},
bB(a,b){return this.Y(a,1,b)},
bA(a,b){return this.Y(a,2,b)},
bz(a,b){return this.Y(a,3,b)}}
A.cb.prototype={
T(a){var s=this
return new A.cb(s.a,s.b,s.c,s.d)},
gH(){return B.C},
gA(a){return this.d.c},
gL(){return null},
gF(){return 1},
gb4(a){return this.a},
gb5(a){return this.b},
gU(){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
n(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.N
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=A.H(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gO(a){return this.gp(this)},
sO(a,b){this.sp(0,b)},
gp(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.N
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sp(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=A.H(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.N
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=A.H(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.N
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=A.H(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.N
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q,p=this.d
if(p.c>3){s=this.gt()
p=p.d
r=this.c+3
q=A.H(s)
if(!(r>=0&&r<p.length))return A.a(p,r)
p[r]=q}},
gab(){return this.gp(this)/1},
sab(a){this.sp(0,a)},
ga4(){return this.gt()/1},
sa4(a){this.st(a)},
gaa(){return this.gu()/1},
saa(a){this.su(a)},
gac(){return this.gv()/1},
sac(a){this.sv(a)},
gak(){return A.Y(this)},
ah(a){var s=this
if(s.d.c>0){s.sp(0,a.gp(a))
s.st(a.gt())
s.su(a.gu())
s.sv(a.gv())}},
aK(a,b,c){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.H(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){s=p.c+1
r=A.H(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){n=p.c+2
s=A.H(c)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}},
a7(a,b,c,d){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.H(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){s=p.c+1
r=A.H(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){s=p.c+2
r=A.H(c)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>3){n=p.c+3
s=A.H(d)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cb)return A.l(A.x(n,!0,A.m(n).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=J.ac(b)
r=n.d
q=r.c
if(s.gA(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.n(b,3))return!1}}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.d}}
A.cc.prototype={
T(a){var s=this
return new A.cc(s.a,s.b,s.c,s.d)},
gA(a){return this.d.c},
gL(){return null},
gF(){return 1},
gH(){return B.K},
gb4(a){return this.a},
gb5(a){return this.b},
gU(){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
n(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gO(a){return this.gp(this)},
sO(a,b){this.sp(0,b)},
gp(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sp(a,b){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=b}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gu(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=1
return r},
sv(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gab(){return this.gp(this)/1},
sab(a){this.sp(0,a)},
ga4(){return this.gt()/1},
sa4(a){this.st(a)},
gaa(){return this.gu()/1},
saa(a){this.su(a)},
gac(){return this.gv()/1},
sac(a){this.sv(a)},
gak(){return A.Y(this)},
ah(a){var s=this
s.sp(0,a.gp(a))
s.st(a.gt())
s.su(a.gu())
s.sv(a.gv())},
aK(a,b,c){var s,r=this.d,q=r.d,p=this.c,o=q.length
if(!(p>=0&&p<o))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<o))return A.a(q,s)
q[s]=b
if(r>2){r=p+2
if(!(r<o))return A.a(q,r)
q[r]=c}}},
a7(a,b,c,d){var s,r=this.d,q=r.d,p=this.c,o=q.length
if(!(p>=0&&p<o))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<o))return A.a(q,s)
q[s]=b
if(r>2){s=p+2
if(!(s<o))return A.a(q,s)
q[s]=c
if(r>3){r=p+3
if(!(r<o))return A.a(q,r)
q[r]=d}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cc)return A.l(A.x(n,!0,A.m(n).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=J.ac(b)
r=n.d
q=r.c
if(s.gA(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.n(b,3))return!1}}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.d}}
A.cd.prototype={
T(a){var s=this
return new A.cd(s.a,s.b,s.c,s.d)},
gA(a){return this.d.c},
gL(){return null},
gF(){return 1},
gH(){return B.N},
gb4(a){return this.a},
gb5(a){return this.b},
gU(){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
n(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gO(a){return this.gp(this)},
sO(a,b){this.sp(0,b)},
gp(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sp(a,b){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=b}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gu(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gab(){return this.gp(this)/1},
sab(a){this.sp(0,a)},
ga4(){return this.gt()/1},
sa4(a){this.st(a)},
gaa(){return this.gu()/1},
saa(a){this.su(a)},
gac(){return this.gv()/1},
sac(a){this.sv(a)},
gak(){return A.Y(this)},
ah(a){var s=this
s.sp(0,a.gp(a))
s.st(a.gt())
s.su(a.gu())
s.sv(a.gv())},
aK(a,b,c){var s,r=this.d,q=r.d,p=this.c,o=q.length
if(!(p>=0&&p<o))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<o))return A.a(q,s)
q[s]=b
if(r>2){r=p+2
if(!(r<o))return A.a(q,r)
q[r]=c}}},
a7(a,b,c,d){var s,r=this.d,q=r.d,p=this.c,o=q.length
if(!(p>=0&&p<o))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<o))return A.a(q,s)
q[s]=b
if(r>2){s=p+2
if(!(s<o))return A.a(q,s)
q[s]=c
if(r>3){r=p+3
if(!(r<o))return A.a(q,r)
q[r]=d}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cd)return A.l(A.x(n,!0,A.m(n).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=J.ac(b)
r=n.d
q=r.c
if(s.gA(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.n(b,3))return!1}}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.d}}
A.ce.prototype={
T(a){var s=this
return new A.ce(s.a,s.b,s.c,s.d)},
gA(a){return this.d.c},
gL(){return null},
gF(){return 32767},
gH(){return B.P},
gb4(a){return this.a},
gb5(a){return this.b},
gU(){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
n(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gO(a){return this.gp(this)},
sO(a,b){this.sp(0,b)},
gp(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sp(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gab(){return this.gp(this)/32767},
sab(a){this.sp(0,a*32767)},
ga4(){return this.gt()/32767},
sa4(a){this.st(a*32767)},
gaa(){return this.gu()/32767},
saa(a){this.su(a*32767)},
gac(){return this.gv()/32767},
sac(a){this.sv(a*32767)},
gak(){return A.Y(this)},
ah(a){var s=this
s.sp(0,a.gp(a))
s.st(a.gt())
s.su(a.gu())
s.sv(a.gv())},
aK(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.ce)return A.l(A.x(n,!0,A.m(n).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=J.ac(b)
r=n.d
q=r.c
if(s.gA(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.n(b,3))return!1}}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.d}}
A.cf.prototype={
T(a){var s=this
return new A.cf(s.a,s.b,s.c,s.d)},
gA(a){return this.d.c},
gL(){return null},
gF(){return 2147483647},
gH(){return B.Q},
gb4(a){return this.a},
gb5(a){return this.b},
gU(){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
n(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gO(a){return this.gp(this)},
sO(a,b){this.sp(0,b)},
gp(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sp(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gab(){return this.gp(this)/2147483647},
sab(a){this.sp(0,a*2147483647)},
ga4(){return this.gt()/2147483647},
sa4(a){this.st(a*2147483647)},
gaa(){return this.gu()/2147483647},
saa(a){this.su(a*2147483647)},
gac(){return this.gv()/2147483647},
sac(a){this.sv(a*2147483647)},
gak(){return A.Y(this)},
ah(a){var s=this
s.sp(0,a.gp(a))
s.st(a.gt())
s.su(a.gu())
s.sv(a.gv())},
aK(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cf)return A.l(A.x(n,!0,A.m(n).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=J.ac(b)
r=n.d
q=r.c
if(s.gA(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.n(b,3))return!1}}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.d}}
A.cg.prototype={
T(a){var s=this
return new A.cg(s.a,s.b,s.c,s.d)},
gA(a){return this.d.c},
gL(){return null},
gF(){return 127},
gH(){return B.O},
gb4(a){return this.a},
gb5(a){return this.b},
gU(){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
n(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gO(a){return this.gp(this)},
sO(a,b){this.sp(0,b)},
gp(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sp(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gab(){return this.gp(this)/127},
sab(a){this.sp(0,a*127)},
ga4(){return this.gt()/127},
sa4(a){this.st(a*127)},
gaa(){return this.gu()/127},
saa(a){this.su(a*127)},
gac(){return this.gv()/127},
sac(a){this.sv(a*127)},
gak(){return A.Y(this)},
ah(a){var s=this
s.sp(0,a.gp(a))
s.st(a.gt())
s.su(a.gu())
s.sv(a.gv())},
aK(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cg)return A.l(A.x(n,!0,A.m(n).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=J.ac(b)
r=n.d
q=r.c
if(s.gA(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.n(b,3))return!1}}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.d}}
A.ch.prototype={
T(a){var s=this
return new A.ch(s.a,s.b,s.c,s.d,s.e,s.f)},
gA(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gL(){return this.f.f},
gF(){return this.f.gF()},
gH(){return B.y},
gb4(a){return this.a},
gb5(a){return this.b},
b_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.f
r=b*s.e
q.e=r
s=a*s.c
q.c=r+B.a.j(s,3)
q.d=s&7},
gU(){return this},
E(){var s,r=this,q=++r.a,p=r.f
if(q===p.a){r.a=0
q=++r.b
r.d=0;++r.c
r.e=r.e+p.e
return q<p.b}s=p.c
if(p.f!=null||s===1){if(++r.d>7){r.d=0;++r.c}}else{q*=s
r.d=q&7
r.c=r.e+B.a.j(q,3)}q=r.c
p=p.d
p===$&&A.c("data")
return q<p.byteLength},
dR(a){var s,r,q=this.c,p=7-(this.d+a)
if(p<0){p+=8;++q}s=this.f.d
s===$&&A.c("data")
r=s.length
if(q>=r)return 0
if(!(q>=0))return A.a(s,q)
return B.a.a2(s[q],p)&1},
b7(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.dR(a):0
else s=r.b6(this.dR(0),a)
return s},
aq(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=7-(this.d+a)
if(r<0){++s
r+=8}q=m.d
q===$&&A.c("data")
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.N(B.b.i(b),0,1)
if(!(r>=0&&r<8))return A.a(B.bP,r)
n=B.bP[r]
q=B.b.W(o,r)
m=m.d
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
n(a,b){return this.b7(b)},
h(a,b,c){return this.aq(b,c)},
gO(a){return this.dR(0)},
sO(a,b){this.aq(0,b)},
gp(a){return this.b7(0)},
sp(a,b){this.aq(0,b)},
gt(){return this.b7(1)},
st(a){this.aq(1,a)},
gu(){return this.b7(2)},
su(a){this.aq(2,a)},
gv(){return this.b7(3)},
sv(a){this.aq(3,a)},
gab(){return this.b7(0)/this.f.gF()},
sab(a){this.aq(0,a*this.f.gF())},
ga4(){return this.b7(1)/this.f.gF()},
sa4(a){this.aq(1,a*this.f.gF())},
gaa(){return this.b7(2)/this.f.gF()},
saa(a){this.aq(2,a*this.f.gF())},
gac(){return this.b7(3)/this.f.gF()},
sac(a){this.aq(3,a*this.f.gF())},
gak(){return A.Y(this)},
ah(a){var s=this
s.aq(0,a.gp(a))
s.aq(1,a.gt())
s.aq(2,a.gu())
s.aq(3,a.gv())},
aK(a,b,c){var s=this,r=s.f.c
if(r>0){s.aq(0,a)
if(r>1){s.aq(1,b)
if(r>2)s.aq(2,c)}}},
a7(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.aq(0,a)
if(r>1){s.aq(1,b)
if(r>2){s.aq(2,c)
if(r>3)s.aq(3,d)}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.ch)return A.l(A.x(p,!0,A.m(p).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.ac(b)
if(s.gA(b)!==q)return!1
if(p.b7(0)!==s.n(b,0))return!1
if(q>1){if(p.b7(1)!==s.n(b,1))return!1
if(q>2){if(p.b7(2)!==s.n(b,2))return!1
if(q>3)if(p.b7(3)!==s.n(b,3))return!1}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.f}}
A.ci.prototype={
T(a){var s=this
return new A.ci(s.a,s.b,s.c,s.d)},
gA(a){return this.d.c},
gL(){return null},
gF(){return 65535},
gH(){return B.A},
gb4(a){return this.a},
gb5(a){return this.b},
gU(){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
n(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gO(a){return this.gp(this)},
sO(a,b){this.sp(0,b)},
gp(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sp(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gab(){return this.gp(this)/65535},
sab(a){this.sp(0,a*65535)},
ga4(){return this.gt()/65535},
sa4(a){this.st(a*65535)},
gaa(){return this.gu()/65535},
saa(a){this.su(a*65535)},
gac(){return this.gv()/65535},
sac(a){this.sv(a*65535)},
gak(){return A.Y(this)},
ah(a){var s=this
s.sp(0,a.gp(a))
s.st(a.gt())
s.su(a.gu())
s.sv(a.gv())},
aK(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.ci)return A.l(A.x(n,!0,A.m(n).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=J.ac(b)
r=n.d
q=r.c
if(s.gA(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.n(b,3))return!1}}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.d}}
A.cj.prototype={
T(a){var s=this
return new A.cj(s.a,s.b,s.c,s.d,s.e,s.f)},
gA(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gL(){return this.f.f},
gF(){return this.f.gF()},
gH(){return B.p},
gfw(){var s=this.f
return s.f!=null?2:s.c<<1>>>0},
gb4(a){return this.a},
gb5(a){return this.b},
b_(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.gfw()
r=p.b*p.f.e
p.e=r
q=p.a*s
p.c=r+B.a.j(q,3)
p.d=q&7},
gU(){return this},
E(){var s,r,q=this,p=q.f
if(++q.a===p.a){q.a=0
s=++q.b
q.d=0;++q.c
q.e=q.e+p.e
return s<p.b}if(p.f!=null||p.c===1){s=q.d+=2
if(s>7){q.d=0;++q.c}}else{r=q.gfw()
s=q.a*r
q.d=s&7
q.c=q.e+B.a.j(s,3)}s=q.c
p=p.d
p===$&&A.c("data")
return s<p.length},
dS(a){var s,r=this.c,q=6-(this.d+(a<<1>>>0))
if(q<0){q+=8;++r}s=this.f.d
s===$&&A.c("data")
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.a2(s[r],q)&3},
b8(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.dS(a):0
else s=r.b6(this.dS(0),a)
return s},
ar(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=6-(this.d+(a<<1>>>0))
if(r<0){++s
r+=8}q=m.d
q===$&&A.c("data")
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.N(B.b.i(b),0,3)
q=B.a.j(r,1)
if(!(q<4))return A.a(B.b9,q)
n=B.b9[q]
q=B.b.W(o,r)
m=m.d
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
n(a,b){return this.b8(b)},
h(a,b,c){return this.ar(b,c)},
gO(a){return this.dS(0)},
sO(a,b){this.ar(0,b)},
gp(a){return this.b8(0)},
sp(a,b){this.ar(0,b)},
gt(){return this.b8(1)},
st(a){this.ar(1,a)},
gu(){return this.b8(2)},
su(a){this.ar(2,a)},
gv(){return this.b8(3)},
sv(a){this.ar(3,a)},
gab(){return this.b8(0)/this.f.gF()},
sab(a){this.ar(0,a*this.f.gF())},
ga4(){return this.b8(1)/this.f.gF()},
sa4(a){this.ar(1,a*this.f.gF())},
gaa(){return this.b8(2)/this.f.gF()},
saa(a){this.ar(2,a*this.f.gF())},
gac(){return this.b8(3)/this.f.gF()},
sac(a){this.ar(3,a*this.f.gF())},
gak(){return A.Y(this)},
ah(a){var s=this
s.ar(0,a.gp(a))
s.ar(1,a.gt())
s.ar(2,a.gu())
s.ar(3,a.gv())},
aK(a,b,c){var s=this,r=s.f.c
if(r>0){s.ar(0,a)
if(r>1){s.ar(1,b)
if(r>2)s.ar(2,c)}}},
a7(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.ar(0,a)
if(r>1){s.ar(1,b)
if(r>2){s.ar(2,c)
if(r>3)s.ar(3,d)}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cj)return A.l(A.x(p,!0,A.m(p).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.ac(b)
if(s.gA(b)!==q)return!1
if(p.b8(0)!==s.n(b,0))return!1
if(q>1){if(p.b8(1)!==s.n(b,1))return!1
if(q>2){if(p.b8(2)!==s.n(b,2))return!1
if(q>3)if(p.b8(3)!==s.n(b,3))return!1}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.f}}
A.ck.prototype={
T(a){var s=this
return new A.ck(s.a,s.b,s.c,s.d)},
gA(a){return this.d.c},
gL(){return null},
gF(){return 4294967295},
gH(){return B.L},
gb4(a){return this.a},
gb5(a){return this.b},
gU(){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
n(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gO(a){return this.gp(this)},
sO(a,b){this.sp(0,b)},
gp(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sp(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gab(){return this.gp(this)/4294967295},
sab(a){this.sp(0,a*4294967295)},
ga4(){return this.gt()/4294967295},
sa4(a){this.st(a*4294967295)},
gaa(){return this.gu()/4294967295},
saa(a){this.su(a*4294967295)},
gac(){return this.gv()/4294967295},
sac(a){this.sv(a*4294967295)},
gak(){return A.Y(this)},
ah(a){var s=this
s.sp(0,a.gp(a))
s.st(a.gt())
s.su(a.gu())
s.sv(a.gv())},
aK(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.ck)return A.l(A.x(n,!0,A.m(n).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=J.ac(b)
r=n.d
q=r.c
if(s.gA(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.n(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.n(b,3))return!1}}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.d}}
A.cl.prototype={
T(a){var s=this
return new A.cl(s.a,s.b,s.c,s.d,s.e)},
gA(a){var s=this.e,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gL(){return this.e.f},
gF(){return this.e.gF()},
gH(){return B.t},
gb4(a){return this.a},
gb5(a){return this.b},
b_(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.e
r=s.c*4
q=s.e
if(r===4)s=b*q+B.a.j(a,1)
else if(r===8)s=b*s.a+a
else{s=b*q
s=r===16?s+(a<<1>>>0):s+B.a.j(a*r,3)}p.c=s
s=a*r
p.d=r>7?s&4:s&7},
gU(){return this},
E(){var s,r,q,p=this,o=p.e
if(++p.a===o.a){p.a=0
s=++p.b
p.d=0
p.c=s*o.e
return s<o.b}r=o.c
s=o.f!=null||r===1
q=p.d
if(s){s=q+4
p.d=s
if(s>7){p.d=0;++p.c}}else{s=p.d=q+(r<<2>>>0)
for(;s>7;){s-=8
p.d=s;++p.c}}s=p.c
o=o.d
o===$&&A.c("data")
return s<o.length},
dJ(a){var s,r=this.c,q=4-(this.d+(a<<2>>>0))
if(q<0){q+=8;++r}s=this.e.d
s===$&&A.c("data")
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.a2(s[r],q)&15},
b9(a){var s=this.e,r=s.f
if(r==null)s=s.c>a?this.dJ(a):0
else s=r.b6(this.dJ(0),a)
return s},
au(a,b){var s,r,q,p,o,n,m=this.e
if(a>=m.c)return
s=this.c
r=4-(this.d+(a<<2>>>0))
if(r<0){r+=8;++s}q=m.d
q===$&&A.c("data")
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.N(B.b.i(b),0,15)
n=r===4?15:240
q=B.b.W(o,r)
m=m.d
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
n(a,b){return this.b9(b)},
h(a,b,c){return this.au(b,c)},
gO(a){return this.dJ(0)},
sO(a,b){this.au(0,b)},
gp(a){return this.b9(0)},
sp(a,b){this.au(0,b)},
gt(){return this.b9(1)},
st(a){this.au(1,a)},
gu(){return this.b9(2)},
su(a){this.au(2,a)},
gv(){return this.b9(3)},
sv(a){this.au(3,a)},
gab(){return this.b9(0)/this.e.gF()},
sab(a){this.au(0,a*this.e.gF())},
ga4(){return this.b9(1)/this.e.gF()},
sa4(a){this.au(1,a*this.e.gF())},
gaa(){return this.b9(2)/this.e.gF()},
saa(a){this.au(2,a*this.e.gF())},
gac(){return this.b9(3)/this.e.gF()},
sac(a){this.au(3,a*this.e.gF())},
gak(){return A.Y(this)},
ah(a){var s=this
s.au(0,a.gp(a))
s.au(1,a.gt())
s.au(2,a.gu())
s.au(3,a.gv())},
aK(a,b,c){var s=this,r=s.e.c
if(r>0){s.au(0,a)
if(r>1){s.au(1,b)
if(r>2)s.au(2,c)}}},
a7(a,b,c,d){var s=this,r=s.e.c
if(r>0){s.au(0,a)
if(r>1){s.au(1,b)
if(r>2){s.au(2,c)
if(r>3)s.au(3,d)}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q=this
if(b==null)return!1
if(b instanceof A.cl)return A.l(A.x(q,!0,A.m(q).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=q.e.c
r=J.ac(b)
if(r.gA(b)!==s)return!1
if(q.b9(0)!==r.n(b,0))return!1
if(s>1){if(q.b9(1)!==r.n(b,1))return!1
if(s>2){if(q.b9(2)!==r.n(b,2))return!1
if(s>3)if(q.b9(3)!==r.n(b,3))return!1}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.e}}
A.cm.prototype={
T(a){var s=this
return new A.cm(s.a,s.b,s.c,s.d)},
gA(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gL(){return this.d.e},
gF(){return this.d.gF()},
gH(){return B.e},
gb4(a){return this.a},
gb5(a){return this.b},
gU(){return this},
E(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
cq(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.b6(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
n(a,b){return this.cq(b)},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(B.b.N(c,0,255))
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gO(a){var s=this.d.d,r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
sO(a,b){var s=this.d.d,r=this.c,q=B.b.i(B.b.N(b,0,255))
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q},
gp(a){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aZ(r[s])
r=s}return r},
sp(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(B.b.N(b,0,255))
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d,q=r.e
if(q==null)if(r.c>1){r=r.d
q=this.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aY(r[s])
r=s}return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(B.b.N(a,0,255))
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d,q=r.e
if(q==null)if(r.c>2){r=r.d
q=this.c+2
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aX(r[s])
r=s}return r},
su(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(B.b.N(a,0,255))
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d,q=r.e
if(q==null)if(r.c>3){r=r.d
q=this.c+3
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=255
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.br(r[s])
r=s}return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(B.b.N(a,0,255))
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gab(){return this.gp(this)/this.d.gF()},
sab(a){this.sp(0,a*this.d.gF())},
ga4(){return this.gt()/this.d.gF()},
sa4(a){this.st(a*this.d.gF())},
gaa(){return this.gu()/this.d.gF()},
saa(a){this.su(a*this.d.gF())},
gac(){return this.gv()/this.d.gF()},
sac(a){this.sv(a*this.d.gF())},
gak(){return A.Y(this)},
ah(a){var s=this
if(s.d.e!=null)s.sO(0,a.gO(a))
else{s.sp(0,a.gp(a))
s.st(a.gt())
s.su(a.gu())
s.sv(a.gv())}},
aK(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.M(this)},
X(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cm)return A.l(A.x(p,!0,A.m(p).q("e.E")))===A.l(A.x(b,!0,A.m(b).q("e.E")))
if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.ac(b)
if(s.gA(b)!==q)return!1
if(p.cq(0)!==s.n(b,0))return!1
if(q>1){if(p.cq(1)!==s.n(b,1))return!1
if(q>2){if(p.cq(2)!==s.n(b,2))return!1
if(q>3)if(p.cq(3)!==s.n(b,3))return!1}}return!0}return!1},
gI(a){return A.l(A.x(this,!0,A.m(this).q("e.E")))},
aP(a){return A.ay(this,null,a,null,null)},
$iE:1,
$iz:1,
$iu:1,
gbf(){return this.d}}
A.B.prototype={
T(a){return new A.B()},
gbf(){return $.mM()},
gb4(a){return 0},
gb5(a){return 0},
gA(a){return 0},
gF(){return 0},
gH(){return B.e},
gL(){return null},
n(a,b){return 0},
h(a,b,c){},
gO(a){return 0},
sO(a,b){},
gp(a){return 0},
sp(a,b){},
gt(){return 0},
st(a){},
gu(){return 0},
su(a){},
gv(){return 0},
sv(a){},
gab(){return 0},
sab(a){},
ga4(){return 0},
sa4(a){},
gaa(){return 0},
saa(a){},
gac(){return 0},
sac(a){},
gak(){return 0},
ah(a){},
aK(a,b,c){},
a7(a,b,c,d){},
gU(){return this},
E(){return!1},
X(a,b){if(b==null)return!1
return b instanceof A.B},
gI(a){return 0},
gJ(a){return new A.M(this)},
aP(a){return this},
$iE:1,
$iz:1,
$iu:1}
A.hT.prototype={
a8(){return"FlipDirection."+this.b}}
A.i3.prototype={
B(a){return"ImageException: "+this.a}}
A.ae.prototype={
gA(a){return this.c-this.d},
h(a,b,c){J.A(this.a,this.d+b,c)
return c},
bn(a,b,c,d){var s=this.a,r=J.aI(s),q=this.d+a
if(c instanceof A.ae)r.am(s,q,q+b,c.a,c.d+d)
else r.am(s,q,q+b,t.L.a(c),d)},
c5(a,b,c){return this.bn(a,b,c,0)},
kZ(a,b,c){var s=this.a,r=this.d+a
J.bi(s,r,r+b,c)},
ds(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.w(s.a,s.e,a,r+b)},
aj(a){return this.ds(a,0,null)},
c7(a,b){return this.ds(a,0,b)},
d0(a,b){return this.ds(a,b,null)},
C(){var s=this.a,r=this.d++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
ae(a){var s=this.aj(a)
this.d=this.d+(s.c-s.d)
return s},
af(a){var s,r,q,p,o=this
if(a==null){s=A.b([],t.t)
for(r=o.c;q=o.d,q<r;){p=o.a
o.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
if(q===0)return A.h5(s,0,null)
B.c.D(s,q)}throw A.d(A.j("EOF reached without finding string terminator (length: "+A.C(a)+")"))}return A.h5(o.ae(a).a1(),0,null)},
cS(){return this.af(null)},
l8(){var s,r,q,p=this,o=A.b([],t.t)
for(s=p.c;r=p.d,r<s;){q=p.a
p.d=r+1
if(!(r>=0&&r<q.length))return A.a(q,r)
r=q[r]
if(r===0){t.L.a(o)
return B.ca.bM(o)}B.c.D(o,r)}return B.cy.ky(0,o,!0)},
l(){var s,r,q=this,p=q.a,o=q.d,n=q.d=o+1,m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
if(typeof o!=="number")return o.aA()
s=o&255
q.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
if(typeof n!=="number")return n.aA()
r=n&255
if(q.e)return s<<8|r
return r<<8|s},
bp(){var s,r,q,p=this,o=p.a,n=p.d,m=p.d=n+1,l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
if(typeof n!=="number")return n.aA()
s=n&255
n=p.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
if(typeof m!=="number")return m.aA()
r=m&255
p.d=n+1
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
if(typeof n!=="number")return n.aA()
q=n&255
if(p.e)return q|r<<8|s<<16
return s|r<<8|q<<16},
k(){var s,r,q,p,o=this,n=o.a,m=o.d,l=o.d=m+1,k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.aA()
s=m&255
m=o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.aA()
r=l&255
l=o.d=m+1
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.aA()
q=m&255
o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.aA()
p=l&255
if(o.e)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
dn(){return A.qL(this.e4())},
e4(){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.d,h=k.d=i+1,g=j.length
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.aA()
s=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.aA()
r=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.aA()
q=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.aA()
p=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.aA()
o=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.aA()
n=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.aA()
m=i&255
k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.aA()
l=h&255
if(k.e)return(B.a.R(s,56)|B.a.R(r,48)|B.a.R(q,40)|B.a.R(p,32)|o<<24|n<<16|m<<8|l)>>>0
return(B.a.R(l,56)|B.a.R(m,48)|B.a.R(n,40)|B.a.R(o,32)|p<<24|q<<16|r<<8|s)>>>0},
cT(a,b,c){var s,r=this,q=r.a
if(t.D.b(q))return r.h_(b,c)
s=r.b+b+b
return J.hD(q,s,c<=0?r.c:s+c)},
h_(a,b){var s,r=this,q=b==null?r.c-r.d-a:b,p=r.a
if(t.D.b(p))return A.y(p.buffer,p.byteOffset+r.d+a,q)
s=r.d+a
s=J.hD(p,s,s+q)
return new Uint8Array(A.t(s))},
a1(){return this.h_(0,null)},
cU(){var s=this.a
if(t.D.b(s))return A.V(s.buffer,s.byteOffset+this.d,null)
return A.V(this.a1().buffer,0,null)},
sa0(a,b){this.a=t.L.a(b)},
sfQ(a,b){this.d=A.k(b)}}
A.fG.prototype={
gL(){var s=this.a
s===$&&A.c("palette")
return s},
kn(a){var s=this
s.eV(a)
s.eG()
s.eS()
s.ev()},
h2(a){var s=B.b.i(a.gp(a)),r=B.b.i(a.gt())
return this.eT(B.b.i(a.gu()),r,s)},
h3(a,b,c){return this.eT(c,b,a)},
jh(a){var s,r,q,p,o,n,m,l,k=this
k.sl0(Math.max(a,4))
s=k.c
k.f=s-k.d
k.r=s-1
r=B.a.S(s,8)
k.w=r
k.x=r*256
k.Q=new A.d0(new Uint32Array(1024),256,4)
k.a=new A.aG(new Uint8Array(768),256,3)
k.d=3
k.e=2
r=B.a.j(s,3)
k.y=new Int32Array(r)
r=t.W
q=t.H
k.shP(q.a(A.U(s*3,0,!1,r)))
k.shN(q.a(A.U(k.c,0,!1,r)))
k.shO(q.a(A.U(k.c,0,!1,r)))
r=k.z
r===$&&A.c("_network")
B.c.h(r,0,0)
B.c.h(k.z,1,0)
B.c.h(k.z,2,0)
B.c.h(k.z,3,255)
B.c.h(k.z,4,255)
B.c.h(k.z,5,255)
p=1/k.c
for(o=0;n=k.d,o<n;++o){s=k.ax
s===$&&A.c("_freq")
B.c.h(s,o,p)
s=k.at
s===$&&A.c("_bias")
B.c.h(s,o,0)}for(m=n*3,o=n;o<k.c;++o,m=l){l=m+1
B.c.h(k.z,m,255*(o-k.d)/k.f)
m=l+1
B.c.h(k.z,l,255*(o-k.d)/k.f)
l=m+1
B.c.h(k.z,m,255*(o-k.d)/k.f)
s=k.ax
s===$&&A.c("_freq")
B.c.h(s,o,p)
s=k.at
s===$&&A.c("_bias")
B.c.h(s,o,0)}},
ev(){var s,r,q,p,o,n,m
for(s=0;s<this.c;++s){r=this.a
r===$&&A.c("palette")
q=this.Q
q===$&&A.c("_palette")
p=q.b
if(2<p){o=q.c
n=s*p+2
if(!(n>=0&&n<o.length))return A.a(o,n)
n=o[n]
o=n}else o=0
if(1<p){n=q.c
m=s*p+1
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
if(0<p){q=q.c
p=s*p
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0
r.aU(s,Math.abs(o),Math.abs(n),Math.abs(q))}},
eT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i="_palette",h=this.as
if(!(b>=0&&b<256))return A.a(h,b)
s=h[b]
r=s-1
q=this.c
h=this.Q
p=1000
o=-1
while(!0){n=s<q
if(!(n||r>=0))break
if(n){h===$&&A.c(i)
n=h.b
if(1<n){m=h.c
l=s*n+1
if(!(l>=0&&l<m.length))return A.a(m,l)
l=m[l]
m=l}else m=0
k=m-b
if(k>=p)s=q
else{if(k<0)k=-k
if(0<n){m=h.c
l=s*n
if(!(l>=0&&l<m.length))return A.a(m,l)
l=m[l]
m=l}else m=0
j=m-a
k+=j<0?-j:j
if(k<p){if(2<n){m=h.c
n=s*n+2
if(!(n>=0&&n<m.length))return A.a(m,n)
n=m[n]}else n=0
j=n-c
k+=j<0?-j:j
if(k<p){o=s
p=k}}++s}}if(r>=0){h===$&&A.c(i)
n=h.b
if(1<n){m=h.c
l=r*n+1
if(!(l>=0&&l<m.length))return A.a(m,l)
l=m[l]
m=l}else m=0
k=b-m
if(k>=p)r=-1
else{if(k<0)k=-k
if(0<n){m=h.c
l=r*n
if(!(l>=0&&l<m.length))return A.a(m,l)
l=m[l]
m=l}else m=0
j=m-a
k+=j<0?-j:j
if(k<p){if(2<n){m=h.c
n=r*n+2
if(!(n>=0&&n<m.length))return A.a(m,n)
n=m[n]}else n=0
j=n-c
k+=j<0?-j:j
if(k<p){o=r
p=k}}--r}}}return o},
eG(){var s,r,q,p,o,n,m,l=this,k="_palette"
for(s=0,r=0;s<l.c;++s){for(q=0;q<3;++q,++r){p=l.z
p===$&&A.c("_network")
if(!(r>=0&&r<p.length))return A.a(p,r)
p=p[r]
if(typeof p!=="number")return A.aV(p)
o=B.a.N(B.b.i(0.5+p),0,255)
p=l.Q
p===$&&A.c(k)
n=p.b
if(q<n){p=p.c
n=s*n+q
m=B.b.i(o)
if(!(n>=0&&n<p.length))return A.a(p,n)
p[n]=m}}p=l.Q
p===$&&A.c(k)
n=p.b
if(3<n){p=p.c
n=s*n+3
m=B.a.i(s)
if(!(n>=0&&n<p.length))return A.a(p,n)
p[n]=m}}},
eS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
for(s=c.c,r=c.Q,q=c.as,p=0,o=0,n=0;n<s;n=h){r===$&&A.c("_palette")
m=r.b
l=1<m
if(l){k=r.c
j=n*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
i=k[j]}else i=0
for(h=n+1,g=h,f=n;g<s;++g){if(l){k=r.c
j=g*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(k<i){if(l){k=r.c
j=g*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
i=k[j]}else i=0
f=g}}if(n!==f){k=0<m
if(k){j=r.c
e=f*m
if(!(e>=0&&e<j.length))return A.a(j,e)
g=j[e]}else g=0
if(k){j=r.c
e=n*m
if(!(e>=0&&e<j.length))return A.a(j,e)
e=j[e]
j=e}else j=0
if(k){d=f*m
e=r.c
j=B.a.i(j)
if(!(d>=0&&d<e.length))return A.a(e,d)
e[d]=j}if(k){d=n*m
k=r.c
j=B.a.i(g)
if(!(d>=0&&d<k.length))return A.a(k,d)
k[d]=j}if(l){k=r.c
j=f*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=r.c
j=n*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=r.c
e=f*m+1
k=B.a.i(k)
if(!(e>=0&&e<j.length))return A.a(j,e)
j[e]=k}if(l){l=r.c
k=n*m+1
j=B.a.i(g)
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=j}l=2<m
if(l){k=r.c
j=f*m+2
if(!(j>=0&&j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=r.c
j=n*m+2
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=r.c
e=f*m+2
k=B.a.i(k)
if(!(e>=0&&e<j.length))return A.a(j,e)
j[e]=k}if(l){l=r.c
k=n*m+2
j=B.a.i(g)
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=j}l=3<m
if(l){k=r.c
j=f*m+3
if(!(j>=0&&j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=r.c
j=n*m+3
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=r.c
e=f*m+3
k=B.a.i(k)
if(!(e>=0&&e<j.length))return A.a(j,e)
j[e]=k}if(l){l=r.c
m=n*m+3
k=B.a.i(g)
if(!(m>=0&&m<l.length))return A.a(l,m)
l[m]=k}}if(i!==p){if(!(p>=0&&p<256))return A.a(q,p)
q[p]=o+n>>>1
for(g=p+1;g<i;++g){if(!(g<256))return A.a(q,g)
q[g]=n}o=n
p=i}}s=c.r
s.toString
r=B.a.j(o+s,1)
if(!(p>=0&&p<256))return A.a(q,p)
q[p]=r
for(h=p+1;h<256;++h)q[h]=s},
fj(a,b){var s,r,q,p
for(s=this.y,r=a*a,q=0;q<a;++q){s===$&&A.c("_radiusPower")
p=B.b.i(b*((r-q*q)*256/r))
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
eV(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4="_network",a5=a3.x
a5===$&&A.c("initBiasRadius")
s=30+B.a.S(a3.b-1,3)
r=a6.gP(a6)*a6.gK(a6)
q=B.a.aE(r,a3.b)
p=Math.max(B.a.S(q,100),1)
if(p===0)p=1
o=B.a.j(a5,8)
if(o<=1)o=0
a3.fj(o,1024)
if(r<1509)n=a3.b=1
else if(B.a.a6(r,499)!==0)n=499
else if(B.a.a6(r,491)!==0)n=491
else n=B.a.a6(r,487)!==0?487:503
m=a6.gP(a6)
l=a6.gK(a6)
for(k=a5,j=1024,i=0,h=0,g=0,f=0;f<q;){a5=a6.a
e=a5==null?null:a5.M(h,g,null)
if(e==null)e=new A.B()
d=e.gp(e)
c=e.gt()
b=e.gu()
if(f===0){a5=a3.z
a5===$&&A.c(a4)
a=a3.e
a===$&&A.c("bgColor")
B.c.h(a5,a*3,b)
B.c.h(a3.z,a3.e*3+1,c)
B.c.h(a3.z,a3.e*3+2,d)}a0=a3.ke(b,c,d)
if(a0<0)a0=a3.ie(b,c,d)
if(a0>=a3.d){a1=j/1024
e=a0*3
a5=a3.z
a5===$&&A.c(a4)
if(!(e>=0&&e<a5.length))return A.a(a5,e)
a=a5[e]
if(typeof a!=="number")return a.aV()
B.c.h(a5,e,a-a1*(a-b))
a=a3.z
a5=e+1
if(!(a5<a.length))return A.a(a,a5)
a2=a[a5]
if(typeof a2!=="number")return a2.aV()
B.c.h(a,a5,a2-a1*(a2-c))
a2=a3.z
a5=e+2
if(!(a5<a2.length))return A.a(a2,a5)
a=a2[a5]
if(typeof a!=="number")return a.aV()
B.c.h(a2,a5,a-a1*(a-d))
if(o>0)a3.hZ(a1,o,a0,b,c,d)}i+=n
h+=n
for(;h>m;){h-=m;++g}for(;i>=r;){i-=r
g-=l}++f
if(B.a.a6(f,p)===0){j-=B.a.aE(j,s)
k-=B.a.S(k,30)
o=B.a.j(k,8)
if(o<=1)o=0
a3.fj(o,j)}}},
hZ(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_network",f=c-b,e=h.d-1
if(f<e)f=e
s=c+b
r=h.c
if(s>r)s=r
q=c+1
p=c-1
o=1
while(!0){n=q<s
if(!(n||p>f))break
m=h.y
m===$&&A.c("_radiusPower")
l=o+1
if(!(o<m.length))return A.a(m,o)
k=m[o]
if(n){j=q*3
n=h.z
n===$&&A.c(g)
if(!(j>=0&&j<n.length))return A.a(n,j)
m=n[j]
if(typeof m!=="number")return m.aV()
B.c.h(n,j,m-k*(m-d)/262144)
m=h.z
n=j+1
if(!(n<m.length))return A.a(m,n)
i=m[n]
if(typeof i!=="number")return i.aV()
B.c.h(m,n,i-k*(i-a0)/262144)
i=h.z
n=j+2
if(!(n<i.length))return A.a(i,n)
m=i[n]
if(typeof m!=="number")return m.aV()
B.c.h(i,n,m-k*(m-a1)/262144);++q}if(p>f){j=p*3
n=h.z
n===$&&A.c(g)
if(!(j>=0&&j<n.length))return A.a(n,j)
m=n[j]
if(typeof m!=="number")return m.aV()
B.c.h(n,j,m-k*(m-d)/262144)
m=h.z
n=j+1
if(!(n<m.length))return A.a(m,n)
i=m[n]
if(typeof i!=="number")return i.aV()
B.c.h(m,n,i-k*(i-a0)/262144)
i=h.z
n=j+2
if(!(n<i.length))return A.a(i,n)
m=i[n]
if(typeof m!=="number")return m.aV()
B.c.h(i,n,m-k*(m-a1)/262144);--p}o=l}},
ie(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=1e30
for(s=e.d,r=s*3,q=d,p=q,o=-1,n=-1;s<e.c;++s,r=l){m=e.z
m===$&&A.c("_network")
l=r+1
k=m.length
if(!(r<k))return A.a(m,r)
j=m[r]
if(typeof j!=="number")return j.aV()
i=j-a
if(i<0)i=-i
r=l+1
if(!(l<k))return A.a(m,l)
j=m[l]
if(typeof j!=="number")return j.aV()
h=j-b
if(h<0)h=-h
l=r+1
if(!(r<k))return A.a(m,r)
m=m[r]
if(typeof m!=="number")return m.aV()
g=m-c
if(g<0)g=-g
i=i+h+g
if(i<p){o=s
p=i}m=e.at
m===$&&A.c("_bias")
if(!(s<m.length))return A.a(m,s)
f=i-m[s]
if(f<q){n=s
q=f}m=e.ax
m===$&&A.c("_freq")
if(!(s<m.length))return A.a(m,s)
k=m[s]
B.c.h(m,s,k-0.0009765625*k)
k=e.at
if(!(s<k.length))return A.a(k,s)
m=k[s]
j=e.ax
if(!(s<j.length))return A.a(j,s)
B.c.h(k,s,m+j[s])}m=e.ax
m===$&&A.c("_freq")
if(!(o>=0&&o<m.length))return A.a(m,o)
B.c.h(m,o,m[o]+0.0009765625)
m=e.at
m===$&&A.c("_bias")
if(!(o<m.length))return A.a(m,o)
B.c.h(m,o,m[o]-1)
return n},
ke(a,b,c){var s,r,q,p,o=this
for(s=0,r=0;s<o.d;++s){q=o.z
q===$&&A.c("_network")
p=r+1
if(!(r<q.length))return A.a(q,r)
if(J.bF(q[r],a)){q=o.z
r=p+1
if(!(p<q.length))return A.a(q,p)
if(J.bF(q[p],b)){q=o.z
p=r+1
if(!(r<q.length))return A.a(q,r)
q=J.bF(q[r],c)
r=p}else q=!1}else{r=p
q=!1}if(q)return s}return-1},
sl0(a){this.c=A.k(a)},
shP(a){this.z=t.H.a(a)},
shN(a){this.at=t.H.a(a)},
shO(a){this.ax=t.H.a(a)}}
A.fI.prototype={
m(a){var s,r,q=this
if(q.a===q.c.length)q.iT()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
cW(a,b){var s,r,q,p,o=this
t.L.a(a)
if(b==null)b=J.df(a)
for(;s=o.a,r=s+b,q=o.c,p=q.length,r>p;)o.eF(r-p)
B.m.bC(q,s,r,a)
o.a+=b},
a3(a){return this.cW(a,null)},
a_(a){var s=this
if(s.b){s.m(B.a.j(a,8)&255)
s.m(a&255)
return}s.m(a&255)
s.m(B.a.j(a,8)&255)},
G(a){var s=this
if(s.b){s.m(B.a.j(a,24)&255)
s.m(B.a.j(a,16)&255)
s.m(B.a.j(a,8)&255)
s.m(a&255)
return}s.m(a&255)
s.m(B.a.j(a,8)&255)
s.m(B.a.j(a,16)&255)
s.m(B.a.j(a,24)&255)},
ln(a){var s,r,q=this,p=new Float32Array(1)
p[0]=a
s=A.y(p.buffer,0,null)
if(q.b){if(3>=s.length)return A.a(s,3)
q.m(s[3])
q.m(s[2])
q.m(s[1])
q.m(s[0])
return}r=s.length
if(0>=r)return A.a(s,0)
q.m(s[0])
if(1>=r)return A.a(s,1)
q.m(s[1])
if(2>=r)return A.a(s,2)
q.m(s[2])
if(3>=r)return A.a(s,3)
q.m(s[3])},
lo(a){var s,r,q=this,p=new Float64Array(1)
p[0]=a
s=A.y(p.buffer,0,null)
if(q.b){if(7>=s.length)return A.a(s,7)
q.m(s[7])
q.m(s[6])
q.m(s[5])
q.m(s[4])
q.m(s[3])
q.m(s[2])
q.m(s[1])
q.m(s[0])
return}r=s.length
if(0>=r)return A.a(s,0)
q.m(s[0])
if(1>=r)return A.a(s,1)
q.m(s[1])
if(2>=r)return A.a(s,2)
q.m(s[2])
if(3>=r)return A.a(s,3)
q.m(s[3])
if(4>=r)return A.a(s,4)
q.m(s[4])
if(5>=r)return A.a(s,5)
q.m(s[5])
if(6>=r)return A.a(s,6)
q.m(s[6])
if(7>=r)return A.a(s,7)
q.m(s[7])},
eF(a){var s,r,q,p
if(a!=null)s=a
else{r=this.c.length
s=r===0?8192:r*2}r=this.c
q=r.length
p=new Uint8Array(q+s)
B.m.bC(p,0,q,r)
this.c=p},
iT(){return this.eF(null)},
gA(a){return this.a}}
A.iD.prototype={
a8(){return"QuantizerType."+this.b}}
A.h0.prototype={
e7(a){var s,r,q=a.gP(a),p=A.Q(null,null,B.e,0,B.i,a.gK(a),null,0,1,this.gL(),q,!1)
q=p.a
s=q.gJ(q)
s.E()
p.z=a.z
p.w=a.w
p.y=a.y
for(q=a.a,q=q.gJ(q);q.E();){r=q.gU()
s.gU().h(0,0,this.h2(r))
s.E()}return p}}
A.aR.prototype={
i(a){var s=this.b
return s===0?0:B.a.aE(this.a,s)},
X(a,b){if(b==null)return!1
return b instanceof A.aR&&this.a===b.a&&this.b===b.b},
gI(a){return A.nU(this.a,this.b)},
B(a){return""+this.a+"/"+this.b}}
A.jY.prototype={
$1(a){var s=document,r=s.querySelector("#uploadFile")
r.toString
r=t.e.a(r).files
r.toString
r=B.aZ.gfI(r).type
r.toString
if(B.l.he(r,"image"))s.querySelector("#downloadBtn").removeAttribute("disabled")},
$S:10}
A.jZ.prototype={
$1(a){return this.h1(t.b3.a(a))},
h1(a){var s=0,r=A.pT(t.q),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.q7(function(b,c){if(b===1)return A.pv(c,r)
while(true)switch(s){case 0:h=document
g=h.querySelector("#uploadFile")
g.toString
p=t.e
g=p.a(g).files
g.toString
o=B.aZ.gfI(g)
g=q.a
g.readAsArrayBuffer(o)
n=t.z
case 2:if(!!0){s=3
break}m=g.readyState
m.toString
if(!(m!==2)){s=3
break}s=4
return A.pu(A.nx(new A.dp(1e5),n),$async$$1)
case 4:s=2
break
case 3:g=t.D.a(B.cO.glc(g))
l=A.ql(g)
g=l==null?null:l.bc(0,g,null)
g.toString
n=h.querySelector("input[type='radio'][name='scale_by']:checked")
n.toString
n=p.a(n).getAttribute("data-value")
n.toString
k=A.qi(n)
n=h.querySelector("input[type='radio'][name='scale_type']:checked")
n.toString
p=p.a(n).id
p.toString
if(p==="downscale")k=1/k
j=B.b.i(g.gP(g)*k)
i=A.qf(g,B.b.i(g.gK(g)*k),j)
g=o.type
g.toString
p=o.name
p.toString
p=A.qk(p,i)
p.toString
t.bB.q("aW.S").a(p)
p=B.cp.gkJ().bM(p)
h=h.createElement("a")
h.toString
B.cd.skP(h,"data:"+g+";base64,"+p)
h.setAttribute("download","")
h.click()
return A.pw(null,r)}})
return A.px($async$$1,r)},
$S:30};(function aliases(){var s=J.dL.prototype
s.hh=s.B
s=J.c7.prototype
s.hi=s.B
s=A.F.prototype
s.ef=s.am})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_1u,n=hunkHelpers.installStaticTearOff
s(A,"q9","oW",6)
s(A,"qa","oX",6)
s(A,"qb","oY",6)
r(A,"my","q1",1)
q(A.a1.prototype,"gbS",1,0,null,["$1","$0"],["ag","i"],3,0,0)
q(A.aY.prototype,"gbS",1,0,null,["$1","$0"],["ag","i"],3,0,0)
q(A.bo.prototype,"gbS",1,0,null,["$1","$0"],["ag","i"],3,0,0)
q(A.aM.prototype,"gbS",1,0,null,["$1","$0"],["ag","i"],3,0,0)
q(A.b8.prototype,"gbS",1,0,null,["$1","$0"],["ag","i"],3,0,0)
q(A.b9.prototype,"gbS",1,0,null,["$1","$0"],["ag","i"],3,0,0)
q(A.bn.prototype,"gbS",1,0,null,["$1","$0"],["ag","i"],3,0,0)
q(A.bm.prototype,"gbS",1,0,null,["$1","$0"],["ag","i"],3,0,0)
q(A.ba.prototype,"gbS",1,0,null,["$1","$0"],["ag","i"],3,0,0)
var m
p(m=A.fx.prototype,"giq","ir",4)
p(m,"git","iu",4)
p(m,"giv","iw",4)
p(m,"gij","ik",4)
p(m,"gil","im",4)
s(A,"qV","ol",0)
s(A,"qO","od",0)
s(A,"qM","ob",0)
s(A,"qT","oj",0)
s(A,"qU","ok",0)
s(A,"qS","oi",0)
s(A,"qR","oh",0)
s(A,"qQ","og",0)
s(A,"qX","on",0)
s(A,"qW","om",0)
s(A,"qP","oe",0)
s(A,"qN","oc",0)
s(A,"r7","oy",0)
s(A,"r5","ow",0)
s(A,"qY","oo",0)
s(A,"r_","oq",0)
s(A,"qZ","op",0)
s(A,"r0","or",0)
s(A,"r8","oz",0)
s(A,"r6","ox",0)
s(A,"r1","os",0)
s(A,"r2","ot",0)
s(A,"r3","ou",0)
s(A,"r4","ov",0)
o(A.ek.prototype,"gjF","jG",12)
o(A.fp.prototype,"gkK","kL",12)
n(A,"kX",3,null,["$3"],["oA"],2,0)
n(A,"r9",3,null,["$3"],["oB"],2,0)
n(A,"re",3,null,["$3"],["oG"],2,0)
n(A,"rf",3,null,["$3"],["oH"],2,0)
n(A,"rg",3,null,["$3"],["oI"],2,0)
n(A,"rh",3,null,["$3"],["oJ"],2,0)
n(A,"ri",3,null,["$3"],["oK"],2,0)
n(A,"rj",3,null,["$3"],["oL"],2,0)
n(A,"rk",3,null,["$3"],["oM"],2,0)
n(A,"rl",3,null,["$3"],["oN"],2,0)
n(A,"ra",3,null,["$3"],["oC"],2,0)
n(A,"rb",3,null,["$3"],["oD"],2,0)
n(A,"rc",3,null,["$3"],["oE"],2,0)
n(A,"rd",3,null,["$3"],["oF"],2,0)
n(A,"rn",6,null,["$6"],["oT"],5,0)
n(A,"ro",6,null,["$6"],["oU"],5,0)
n(A,"rm",6,null,["$6"],["oS"],5,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.K,null)
q(A.K,[A.kg,J.dL,J.di,A.O,A.F,A.iE,A.e,A.c8,A.an,A.at,A.bP,A.cJ,A.es,A.iN,A.ip,A.ds,A.ey,A.bG,A.d_,A.ij,A.a2,A.jf,A.aS,A.hp,A.ht,A.jA,A.hi,A.dj,A.ct,A.a_,A.hj,A.ee,A.hr,A.eD,A.eW,A.aW,A.je,A.jF,A.dp,A.jg,A.fH,A.ed,A.ji,A.f4,A.af,A.hs,A.ef,A.k8,A.eq,A.bL,A.dz,A.ff,A.is,A.j8,A.hM,A.aU,A.jv,A.jz,A.hY,A.fd,A.j7,A.j9,A.M,A.aL,A.hm,A.eZ,A.aE,A.a1,A.hJ,A.bj,A.hL,A.hP,A.f_,A.bl,A.f0,A.f1,A.f2,A.du,A.ex,A.dB,A.dC,A.dD,A.f9,A.fa,A.eU,A.bH,A.i9,A.br,A.ib,A.dc,A.fw,A.ie,A.fx,A.e6,A.fQ,A.bd,A.d2,A.iu,A.co,A.fT,A.fU,A.e8,A.h_,A.d5,A.d3,A.d4,A.ea,A.Z,A.eh,A.iJ,A.h7,A.iM,A.h8,A.h9,A.il,A.iR,A.ej,A.iS,A.iX,A.j0,A.j2,A.ei,A.j1,A.iT,A.bw,A.el,A.hh,A.em,A.en,A.ek,A.hf,A.iY,A.hg,A.j4,A.eo,A.f6,A.cL,A.da,A.dF,A.aO,A.i3,A.ae,A.h0,A.fI,A.aR])
q(J.dL,[J.ft,J.dQ,J.bb,J.cY,J.cZ,J.cW,J.cX])
q(J.bb,[J.c7,J.v,A.fB,A.dV,A.ah,A.eP,A.hO,A.n,A.hn])
q(J.c7,[J.fM,J.cq,J.bq])
r(J.i8,J.v)
q(J.cW,[J.dP,J.fu])
q(A.O,[A.c6,A.bt,A.fy,A.hb,A.hk,A.h2,A.hl,A.eM,A.b4,A.hc,A.ha,A.d6,A.eV])
r(A.d7,A.F)
r(A.as,A.d7)
q(A.e,[A.dq,A.dT,A.er,A.cy,A.cz,A.cA,A.cB,A.cC,A.cD,A.cE,A.cF,A.cG,A.cH,A.cI,A.bk,A.bp,A.a9,A.cb,A.cc,A.cd,A.ce,A.cf,A.cg,A.ch,A.ci,A.cj,A.ck,A.cl,A.cm,A.B])
q(A.dq,[A.dS,A.bc])
r(A.eg,A.dS)
r(A.dr,A.dT)
q(A.cJ,[A.dn,A.c2])
r(A.dY,A.bt)
q(A.bG,[A.eR,A.eS,A.h6,A.ig,A.jU,A.jW,A.jb,A.ja,A.jI,A.jn,A.ju,A.iF,A.jy,A.jh,A.hH,A.hS,A.ic,A.i5,A.i4,A.jY,A.jZ])
q(A.h6,[A.h4,A.cx])
r(A.b_,A.d_)
r(A.dR,A.b_)
q(A.eS,[A.jV,A.jJ,A.jM,A.jo,A.ik,A.im,A.i0,A.i1,A.i2,A.iB,A.iC,A.j3])
r(A.aj,A.dV)
q(A.aj,[A.et,A.ev])
r(A.eu,A.et)
r(A.bM,A.eu)
r(A.ew,A.ev)
r(A.aN,A.ew)
q(A.bM,[A.fC,A.dU])
q(A.aN,[A.fD,A.fE,A.fF,A.dW,A.dX,A.ca])
r(A.ez,A.hl)
q(A.eR,[A.jc,A.jd,A.jB,A.hU,A.jj,A.jq,A.jp,A.jm,A.jl,A.jk,A.jt,A.js,A.jr,A.iG,A.jL,A.jx,A.iQ,A.iP,A.hX])
r(A.hq,A.eD)
q(A.eW,[A.jD,A.jC,A.hG,A.he])
q(A.aW,[A.dk,A.eY])
q(A.eY,[A.fz,A.hd])
r(A.ii,A.jD)
r(A.ih,A.jC)
q(A.b4,[A.ec,A.fc])
q(A.ah,[A.av,A.dy])
q(A.av,[A.ak,A.b5])
q(A.ak,[A.r,A.q])
q(A.r,[A.dg,A.eJ,A.f3,A.cV,A.h3])
r(A.aD,A.eP)
r(A.ho,A.hn)
r(A.dx,A.ho)
r(A.b2,A.n)
r(A.aF,A.b2)
r(A.ep,A.ee)
r(A.by,A.ep)
r(A.hE,A.f4)
r(A.fe,A.ff)
r(A.iq,A.is)
r(A.jH,A.j8)
q(A.jg,[A.hK,A.al,A.dA,A.eO,A.ai,A.eX,A.ad,A.cK,A.c0,A.aX,A.cN,A.ia,A.d1,A.e5,A.bN,A.fP,A.b1,A.eb,A.ao,A.cp,A.a4,A.aT,A.cr,A.d9,A.hZ,A.f5,A.fr,A.hT,A.iD])
q(A.bk,[A.eT,A.dl])
r(A.c_,A.aL)
q(A.a1,[A.aY,A.c4,A.bo,A.aM,A.b8,A.b9,A.bn,A.bm,A.ba,A.bJ,A.bI,A.bK])
q(A.hL,[A.eQ,A.hR,A.hV,A.i_,A.fv,A.fN,A.iv,A.iz,A.iH,A.iK,A.j5])
r(A.hN,A.eQ)
q(A.hP,[A.hI,A.hW,A.j6,A.id,A.fO,A.iA,A.iI,A.iL])
r(A.fh,A.bl)
q(A.fh,[A.dM,A.fj,A.fk,A.fl,A.dN])
r(A.fi,A.du)
r(A.fm,A.dC)
r(A.f7,A.bj)
r(A.f8,A.j6)
q(A.bH,[A.c3,A.dE])
r(A.fn,A.e6)
r(A.fo,A.fQ)
q(A.bd,[A.fR,A.fS,A.fV,A.fW,A.fY,A.fZ])
q(A.d2,[A.e9,A.fX])
q(A.h_,[A.aP,A.J])
r(A.fp,A.ek)
r(A.fq,A.eo)
r(A.dO,A.da)
q(A.a9,[A.cO,A.cP,A.dG,A.dH,A.dI,A.dJ,A.cQ,A.dK,A.cR,A.cS,A.cT,A.cU])
q(A.aO,[A.dZ,A.e_,A.e0,A.e1,A.e2,A.e3,A.e4,A.d0,A.aG])
r(A.fG,A.h0)
s(A.d7,A.bP)
s(A.et,A.F)
s(A.eu,A.at)
s(A.ev,A.F)
s(A.ew,A.at)
s(A.hn,A.F)
s(A.ho,A.bL)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",G:"double",i:"num",W:"String",jN:"bool",af:"Null",p:"List"},mangledNames:{},types:["~(ae)","~()","h(be,h,h)","h([h])","~(br,p<h>)","~(h,h,h,h,h,bv)","~(~())","af(@)","af()","@()","~(n)","~(W,aE)","~(h)","~(@,@)","af(~())","@(W)","@(@,W)","~(h,a1)","~(@)","~(i,i,i,i)","be(h)","h()","af(@,bO)","~(h,@)","aP(h,h)","J(h,h)","h(h,h)","af(K,bO)","i(i,i,i,i)","i(i,i,i,i,i)","b7<~>(aF)","a_<@>(@)","@(@)","~(K?,K?)","br(h)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.pi(v.typeUniverse,JSON.parse('{"fM":"c7","cq":"c7","bq":"c7","rq":"n","rw":"n","rp":"q","rx":"q","rr":"r","rA":"r","ry":"av","rv":"av","rC":"aF","rt":"b2","rs":"b5","rF":"b5","rz":"ak","ft":{"jN":[],"P":[]},"dQ":{"af":[],"P":[]},"v":{"p":["1"],"e":["1"],"aa":["1"]},"i8":{"v":["1"],"p":["1"],"e":["1"],"aa":["1"]},"di":{"E":["1"]},"cW":{"G":[],"i":[]},"dP":{"G":[],"h":[],"i":[],"P":[]},"fu":{"G":[],"i":[],"P":[]},"cX":{"W":[],"lJ":[],"aa":["@"],"P":[]},"c6":{"O":[]},"as":{"F":["h"],"bP":["h"],"p":["h"],"e":["h"],"F.E":"h","bP.E":"h"},"dq":{"e":["1"]},"dS":{"e":["1"]},"eg":{"dS":["1"],"e":["1"],"e.E":"1"},"c8":{"E":["1"]},"dT":{"e":["2"],"e.E":"2"},"dr":{"dT":["1","2"],"e":["2"],"e.E":"2"},"an":{"E":["2"]},"d7":{"F":["1"],"bP":["1"],"p":["1"],"e":["1"]},"cJ":{"bs":["1","2"]},"dn":{"cJ":["1","2"],"bs":["1","2"]},"er":{"e":["1"],"e.E":"1"},"es":{"E":["1"]},"c2":{"cJ":["1","2"],"bs":["1","2"]},"dY":{"bt":[],"O":[]},"fy":{"O":[]},"hb":{"O":[]},"ey":{"bO":[]},"bG":{"c1":[]},"eR":{"c1":[]},"eS":{"c1":[]},"h6":{"c1":[]},"h4":{"c1":[]},"cx":{"c1":[]},"hk":{"O":[]},"h2":{"O":[]},"b_":{"d_":["1","2"],"kj":["1","2"],"bs":["1","2"]},"bc":{"e":["1"],"e.E":"1"},"a2":{"E":["1"]},"dR":{"b_":["1","2"],"d_":["1","2"],"kj":["1","2"],"bs":["1","2"]},"fB":{"k7":[],"P":[]},"dV":{"a5":[]},"aj":{"au":["1"],"a5":[],"aa":["1"]},"bM":{"F":["G"],"aj":["G"],"p":["G"],"au":["G"],"a5":[],"aa":["G"],"e":["G"],"at":["G"]},"aN":{"F":["h"],"aj":["h"],"p":["h"],"au":["h"],"a5":[],"aa":["h"],"e":["h"],"at":["h"]},"fC":{"bM":[],"F":["G"],"kb":[],"aj":["G"],"p":["G"],"au":["G"],"a5":[],"aa":["G"],"e":["G"],"at":["G"],"P":[],"F.E":"G"},"dU":{"bM":[],"F":["G"],"kc":[],"aj":["G"],"p":["G"],"au":["G"],"a5":[],"aa":["G"],"e":["G"],"at":["G"],"P":[],"F.E":"G"},"fD":{"aN":[],"F":["h"],"i7":[],"aj":["h"],"p":["h"],"au":["h"],"a5":[],"aa":["h"],"e":["h"],"at":["h"],"P":[],"F.E":"h"},"fE":{"aN":[],"F":["h"],"fg":[],"aj":["h"],"p":["h"],"au":["h"],"a5":[],"aa":["h"],"e":["h"],"at":["h"],"P":[],"F.E":"h"},"fF":{"aN":[],"F":["h"],"ke":[],"aj":["h"],"p":["h"],"au":["h"],"a5":[],"aa":["h"],"e":["h"],"at":["h"],"P":[],"F.E":"h"},"dW":{"aN":[],"F":["h"],"kB":[],"aj":["h"],"p":["h"],"au":["h"],"a5":[],"aa":["h"],"e":["h"],"at":["h"],"P":[],"F.E":"h"},"dX":{"aN":[],"F":["h"],"be":[],"aj":["h"],"p":["h"],"au":["h"],"a5":[],"aa":["h"],"e":["h"],"at":["h"],"P":[],"F.E":"h"},"ca":{"aN":[],"F":["h"],"bv":[],"aj":["h"],"p":["h"],"au":["h"],"a5":[],"aa":["h"],"e":["h"],"at":["h"],"P":[],"F.E":"h"},"hl":{"O":[]},"ez":{"bt":[],"O":[]},"a_":{"b7":["1"]},"dj":{"O":[]},"eD":{"m9":[]},"hq":{"eD":[],"m9":[]},"F":{"p":["1"],"e":["1"]},"d_":{"bs":["1","2"]},"dk":{"aW":["p<h>","W"],"aW.S":"p<h>"},"eY":{"aW":["W","p<h>"]},"fz":{"aW":["W","p<h>"],"aW.S":"W"},"hd":{"aW":["W","p<h>"],"aW.S":"W"},"G":{"i":[]},"h":{"i":[]},"p":{"e":["1"]},"W":{"lJ":[]},"eM":{"O":[]},"bt":{"O":[]},"b4":{"O":[]},"ec":{"O":[]},"fc":{"O":[]},"hc":{"O":[]},"ha":{"O":[]},"d6":{"O":[]},"eV":{"O":[]},"fH":{"O":[]},"ed":{"O":[]},"hs":{"bO":[]},"aF":{"n":[]},"r":{"ak":[],"ah":[]},"dg":{"ak":[],"ah":[]},"eJ":{"ak":[],"ah":[]},"b5":{"ah":[]},"ak":{"ah":[]},"dx":{"F":["aD"],"bL":["aD"],"p":["aD"],"au":["aD"],"e":["aD"],"aa":["aD"],"F.E":"aD","bL.E":"aD"},"dy":{"ah":[]},"f3":{"ak":[],"ah":[]},"cV":{"ak":[],"ah":[]},"av":{"ah":[]},"h3":{"ak":[],"ah":[]},"b2":{"n":[]},"ep":{"ee":["1"]},"by":{"ep":["1"],"ee":["1"]},"eq":{"o4":["1"]},"dz":{"E":["1"]},"q":{"ak":[],"ah":[]},"fe":{"ff":[]},"M":{"E":["i"]},"cy":{"z":[],"e":["i"],"e.E":"i"},"cz":{"z":[],"e":["i"],"e.E":"i"},"cA":{"z":[],"e":["i"],"e.E":"i"},"cB":{"z":[],"e":["i"],"e.E":"i"},"cC":{"z":[],"e":["i"],"e.E":"i"},"cD":{"z":[],"e":["i"],"e.E":"i"},"cE":{"z":[],"e":["i"],"e.E":"i"},"cF":{"z":[],"e":["i"],"e.E":"i"},"cG":{"z":[],"e":["i"],"e.E":"i"},"cH":{"z":[],"e":["i"],"e.E":"i"},"cI":{"z":[],"e":["i"],"e.E":"i"},"bk":{"z":[],"e":["i"],"e.E":"i"},"eT":{"z":[],"e":["i"],"e.E":"i"},"dl":{"z":[],"e":["i"],"e.E":"i"},"c_":{"aL":[]},"aY":{"a1":[]},"c4":{"a1":[]},"bo":{"a1":[]},"aM":{"a1":[]},"b8":{"a1":[]},"b9":{"a1":[]},"bn":{"a1":[]},"bm":{"a1":[]},"ba":{"a1":[]},"bJ":{"a1":[]},"bI":{"a1":[]},"bK":{"a1":[]},"bj":{"S":[]},"dM":{"bl":[]},"fh":{"bl":[]},"f2":{"S":[]},"fi":{"du":[]},"fj":{"bl":[]},"fk":{"bl":[]},"fl":{"bl":[]},"dN":{"bl":[]},"fm":{"dC":[]},"dD":{"S":[]},"f9":{"S":[]},"f7":{"bj":[],"S":[]},"c3":{"bH":[]},"dE":{"bH":[]},"fn":{"e6":[]},"fQ":{"S":[]},"fo":{"S":[]},"fR":{"bd":[]},"fS":{"bd":[]},"fV":{"bd":[]},"fW":{"bd":[]},"fY":{"bd":[]},"fZ":{"bd":[]},"e9":{"d2":[]},"fX":{"d2":[]},"fT":{"S":[]},"d3":{"S":[]},"d4":{"S":[]},"ea":{"S":[]},"eh":{"S":[]},"h9":{"S":[]},"fq":{"eo":[]},"da":{"S":[]},"dO":{"da":[],"S":[]},"bp":{"e":["u"],"e.E":"u"},"a9":{"e":["u"]},"cO":{"a9":[],"e":["u"],"e.E":"u"},"cP":{"a9":[],"e":["u"],"e.E":"u"},"dG":{"a9":[],"e":["u"],"e.E":"u"},"dH":{"a9":[],"e":["u"],"e.E":"u"},"dI":{"a9":[],"e":["u"],"e.E":"u"},"dJ":{"a9":[],"e":["u"],"e.E":"u"},"cQ":{"a9":[],"e":["u"],"e.E":"u"},"dK":{"a9":[],"e":["u"],"e.E":"u"},"cR":{"a9":[],"e":["u"],"e.E":"u"},"cS":{"a9":[],"e":["u"],"e.E":"u"},"cT":{"a9":[],"e":["u"],"e.E":"u"},"cU":{"a9":[],"e":["u"],"e.E":"u"},"dZ":{"aO":[]},"e_":{"aO":[]},"e0":{"aO":[]},"e1":{"aO":[]},"e2":{"aO":[]},"e3":{"aO":[]},"e4":{"aO":[]},"d0":{"aO":[]},"aG":{"aO":[]},"cb":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"cc":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"cd":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"ce":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"cf":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"cg":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"ch":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"ci":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"cj":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"ck":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"cl":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"cm":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"B":{"u":[],"z":[],"e":["i"],"E":["u"],"e.E":"i"},"fG":{"h0":[]},"ke":{"p":["h"],"e":["h"],"a5":[]},"bv":{"p":["h"],"e":["h"],"a5":[]},"i7":{"p":["h"],"e":["h"],"a5":[]},"kB":{"p":["h"],"e":["h"],"a5":[]},"fg":{"p":["h"],"e":["h"],"a5":[]},"be":{"p":["h"],"e":["h"],"a5":[]},"kb":{"p":["G"],"e":["G"],"a5":[]},"kc":{"p":["G"],"e":["G"],"a5":[]},"u":{"z":[],"E":["u"],"e":["i"]}}'))
A.ph(v.typeUniverse,JSON.parse('{"dq":1,"d7":1,"aj":1,"eW":2,"h_":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",b:"PVRTC requires a power-of-two sized image."}
var t=(function rtii(){var s=A.a0
return{n:s("dj"),bB:s("dk"),dI:s("k7"),G:s("z"),Q:s("O"),O:s("n"),aX:s("f_"),gV:s("f1"),c8:s("aD"),Z:s("c1"),b9:s("b7<@>"),ct:s("cL"),bs:s("f6"),gx:s("fa"),P:s("aE"),r:s("a1"),I:s("a9"),e:s("cV"),an:s("fg"),bM:s("e<G>"),hf:s("e<@>"),hb:s("e<h>"),eB:s("v<eU>"),g9:s("v<f0>"),dw:s("v<du>"),cM:s("v<dC>"),e5:s("v<cL>"),g:s("v<bp>"),dB:s("v<p<p<p<h>>>>"),o:s("v<p<p<h>>>"),S:s("v<p<h>>"),U:s("v<p<i>>"),dm:s("v<e6>"),h0:s("v<co>"),af:s("v<bd>"),cE:s("v<e8>"),aK:s("v<aR>"),V:s("v<W>"),aU:s("v<h8>"),gN:s("v<bv>"),ao:s("v<bw>"),gk:s("v<hg>"),J:s("v<eo>"),gn:s("v<hm>"),e8:s("v<dc>"),cO:s("v<@>"),t:s("v<h>"),fR:s("v<bH?>"),f8:s("v<fw?>"),ca:s("v<p<h>?>"),hh:s("v<be?>"),ff:s("v<bv?>"),a:s("v<i>"),B:s("v<~(ae)>"),aP:s("aa<@>"),u:s("dQ"),cj:s("bq"),ez:s("au<@>"),d2:s("br"),d1:s("p<cL>"),Y:s("p<bp>"),f0:s("p<fg>"),fZ:s("p<p<p<h>>>"),gS:s("p<p<bw>>"),f:s("p<p<h>>"),s:s("p<co>"),x:s("p<e8>"),bJ:s("p<aR>"),c7:s("p<ei>"),e6:s("p<bw>"),eQ:s("p<el>"),db:s("p<em>"),cC:s("p<en>"),H:s("p<G>"),aH:s("p<@>"),L:s("p<h>"),A:s("p<bH?>"),d:s("p<p<h>?>"),ge:s("p<bw?>"),gR:s("p<ex?>"),cP:s("p<h?>"),ck:s("bs<W,W>"),b3:s("aF"),d4:s("bM"),bc:s("aN"),bm:s("ca"),b:s("af"),K:s("K"),dv:s("u"),fW:s("co"),fh:s("fU"),g0:s("e9"),ha:s("d2"),fi:s("d3"),aN:s("d5<aP>"),eZ:s("d5<J>"),k:s("aP"),R:s("J"),i:s("aR"),gT:s("rD"),l:s("bO"),N:s("W"),cV:s("h7"),ci:s("P"),eK:s("bt"),ak:s("a5"),bv:s("be"),D:s("bv"),bI:s("cq"),dd:s("ei"),ai:s("el"),gU:s("em"),dE:s("en"),E:s("by<n>"),do:s("by<aF>"),c:s("a_<@>"),fJ:s("a_<h>"),eO:s("ex"),y:s("jN"),al:s("jN(K)"),W:s("G"),z:s("@"),fO:s("@()"),w:s("@(K)"),C:s("@(K,bO)"),p:s("h"),aw:s("0&*"),_:s("K*"),eH:s("b7<af>?"),bC:s("i7?"),T:s("p<h>?"),eA:s("p<bH?>?"),h:s("p<p<h>?>?"),gZ:s("p<be?>?"),j:s("p<h?>?"),ew:s("bs<W,a9>?"),cZ:s("bs<W,W>?"),X:s("K?"),aD:s("bv?"),eW:s("ej?"),aj:s("bw?"),dP:s("hh?"),F:s("ct<@,@>?"),bw:s("@(n)?"),v:s("h?"),g5:s("~()?"),bK:s("~(h)?"),di:s("i"),q:s("~"),M:s("~()"),m:s("~(br,p<h>)"),aR:s("~(h)"),dX:s("~(i,i,i,i)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cd=A.dg.prototype
B.aZ=A.dx.prototype
B.cO=A.dy.prototype
B.cT=J.dL.prototype
B.c=J.v.prototype
B.a=J.dP.prototype
B.b=J.cW.prototype
B.l=J.cX.prototype
B.cV=J.bq.prototype
B.cW=J.bb.prototype
B.jV=A.dU.prototype
B.jW=A.dW.prototype
B.W=A.dX.prototype
B.m=A.ca.prototype
B.bY=J.fM.prototype
B.aN=J.cq.prototype
B.ap=new A.eO(0,"direct")
B.aP=new A.eO(1,"alpha")
B.aq=new A.ad(0,"none")
B.a2=new A.ad(3,"bitfields")
B.ar=new A.ad(6,"alphaBitfields")
B.cq=new A.hG()
B.cp=new A.dk()
B.aQ=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cr=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.cw=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.cs=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ct=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.cv=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.cu=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.aR=function(hooks) { return hooks; }

B.aS=new A.fz()
B.aT=new A.ii()
B.cx=new A.fH()
B.kR=new A.iE()
B.cy=new A.hd()
B.kS=new A.j7()
B.aU=new A.j9()
B.r=new A.hq()
B.cz=new A.hs()
B.Y=new A.jH()
B.aV=new A.hK(4,"luminance")
B.cA=new A.eX(0,"none")
B.aW=new A.eX(2,"floydSteinberg")
B.cB=new A.dp(0)
B.cC=new A.c0(0,"red")
B.cD=new A.c0(1,"green")
B.cE=new A.c0(2,"blue")
B.cF=new A.c0(3,"alpha")
B.cG=new A.c0(4,"other")
B.aX=new A.cK(0,"uint")
B.as=new A.cK(1,"half")
B.at=new A.cK(2,"float")
B.aY=new A.aX(0,"none")
B.cP=new A.hT(2,"both")
B.J=new A.dA(0,"uint")
B.au=new A.dA(1,"int")
B.av=new A.dA(2,"float")
B.y=new A.al(0,"uint1")
B.p=new A.al(1,"uint2")
B.K=new A.al(10,"float32")
B.N=new A.al(11,"float64")
B.t=new A.al(2,"uint4")
B.e=new A.al(3,"uint8")
B.A=new A.al(4,"uint16")
B.L=new A.al(5,"uint32")
B.O=new A.al(6,"int8")
B.P=new A.al(7,"int16")
B.Q=new A.al(8,"int32")
B.C=new A.al(9,"float16")
B.cQ=new A.f5(1,"page")
B.i=new A.f5(2,"sequence")
B.aw=new A.hZ(1,"deflate")
B.b_=new A.cN(2,"cur")
B.d=new A.ai(0,"none")
B.b0=new A.ai(1,"byte")
B.b1=new A.ai(10,"sRational")
B.b2=new A.ai(11,"single")
B.b3=new A.ai(12,"double")
B.j=new A.ai(2,"ascii")
B.h=new A.ai(3,"short")
B.n=new A.ai(4,"long")
B.q=new A.ai(5,"rational")
B.b4=new A.ai(6,"sByte")
B.D=new A.ai(7,"undefined")
B.b5=new A.ai(8,"sShort")
B.b6=new A.ai(9,"sLong")
B.cU=new A.fr(0,"nearest")
B.kT=new A.fr(1,"linear")
B.kU=new A.ia(0,"yuv444")
B.cX=new A.ih(!1)
B.ax=A.b(s([A.r1(),A.qU(),A.r8(),A.r6(),A.r3(),A.r2(),A.r4()]),t.B)
B.R=A.b(s([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),t.t)
B.am=new A.ao(0,"none")
B.H=new A.ao(1,"palette")
B.c7=new A.ao(2,"rgb")
B.kc=new A.ao(3,"gray")
B.kd=new A.ao(4,"reserved4")
B.ke=new A.ao(5,"reserved5")
B.kf=new A.ao(6,"reserved6")
B.kg=new A.ao(7,"reserved7")
B.kh=new A.ao(8,"reserved8")
B.I=new A.ao(9,"paletteRle")
B.c6=new A.ao(10,"rgbRle")
B.kb=new A.ao(11,"grayRle")
B.b7=A.b(s([B.am,B.H,B.c7,B.kc,B.kd,B.ke,B.kf,B.kg,B.kh,B.I,B.c6,B.kb]),A.a0("v<ao>"))
B.a3=A.b(s([0,2,8]),t.t)
B.d7=A.b(s([0,4,2,1]),t.t)
B.b9=A.b(s([252,243,207,63]),t.t)
B.a4=A.b(s([292,260,226,226]),t.t)
B.bb=A.b(s([2,3,7]),t.t)
B.du=A.b(s([3,3,11]),t.t)
B.bd=A.b(s([511,1023,2047,4095]),t.t)
B.bg=A.b(s([63,207,243,252]),t.t)
B.dI=A.b(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),t.t)
B.a5=A.b(s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7]),t.t)
B.F=A.b(s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15]),t.t)
B.E=A.b(s([0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,31]),t.t)
B.bh=A.b(s([0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]),t.t)
B.S=A.b(s([0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]),t.t)
B.u=A.b(s([0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31]),t.t)
B.az=A.b(s([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),t.t)
B.bi=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535]),t.t)
B.z=A.b(s([0,1,3,7,15,31,63,127,255]),t.t)
B.T=A.b(s([0,128,192,224,240,248,252,254,255]),t.t)
B.v=A.b(s([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),t.t)
B.dV=A.b(s([8,8,4,2]),t.t)
B.aA=A.b(s([8,0,8,0]),t.t)
B.dH=A.b(s([5,3,5,3]),t.t)
B.dv=A.b(s([3,5,3,5]),t.t)
B.b8=A.b(s([0,8,0,8]),t.t)
B.bc=A.b(s([4,4,4,4]),t.t)
B.dA=A.b(s([4,4,0,0]),t.t)
B.bj=A.b(s([B.aA,B.dH,B.dv,B.b8,B.aA,B.bc,B.dA,B.b8]),t.S)
B.w=A.b(s([255,255,255,255,255,255,255,255,255,255,255]),t.t)
B.V=A.b(s([B.w,B.w,B.w]),t.S)
B.hC=A.b(s([176,246,255,255,255,255,255,255,255,255,255]),t.t)
B.hq=A.b(s([223,241,252,255,255,255,255,255,255,255,255]),t.t)
B.dW=A.b(s([249,253,253,255,255,255,255,255,255,255,255]),t.t)
B.iC=A.b(s([B.hC,B.hq,B.dW]),t.S)
B.dD=A.b(s([255,244,252,255,255,255,255,255,255,255,255]),t.t)
B.j1=A.b(s([234,254,254,255,255,255,255,255,255,255,255]),t.t)
B.bk=A.b(s([253,255,255,255,255,255,255,255,255,255,255]),t.t)
B.iO=A.b(s([B.dD,B.j1,B.bk]),t.S)
B.dE=A.b(s([255,246,254,255,255,255,255,255,255,255,255]),t.t)
B.ef=A.b(s([239,253,254,255,255,255,255,255,255,255,255]),t.t)
B.bw=A.b(s([254,255,254,255,255,255,255,255,255,255,255]),t.t)
B.hY=A.b(s([B.dE,B.ef,B.bw]),t.S)
B.be=A.b(s([255,248,254,255,255,255,255,255,255,255,255]),t.t)
B.eg=A.b(s([251,255,254,255,255,255,255,255,255,255,255]),t.t)
B.dx=A.b(s([B.be,B.eg,B.w]),t.S)
B.aC=A.b(s([255,253,254,255,255,255,255,255,255,255,255]),t.t)
B.dF=A.b(s([251,254,254,255,255,255,255,255,255,255,255]),t.t)
B.jd=A.b(s([B.aC,B.dF,B.bw]),t.S)
B.hd=A.b(s([255,254,253,255,254,255,255,255,255,255,255]),t.t)
B.ee=A.b(s([250,255,254,255,254,255,255,255,255,255,255]),t.t)
B.ab=A.b(s([254,255,255,255,255,255,255,255,255,255,255]),t.t)
B.jT=A.b(s([B.hd,B.ee,B.ab]),t.S)
B.iH=A.b(s([B.V,B.iC,B.iO,B.hY,B.dx,B.jd,B.jT,B.V]),t.o)
B.hh=A.b(s([217,255,255,255,255,255,255,255,255,255,255]),t.t)
B.hA=A.b(s([225,252,241,253,255,255,254,255,255,255,255]),t.t)
B.ia=A.b(s([234,250,241,250,253,255,253,254,255,255,255]),t.t)
B.hz=A.b(s([B.hh,B.hA,B.ia]),t.S)
B.aB=A.b(s([255,254,255,255,255,255,255,255,255,255,255]),t.t)
B.j2=A.b(s([223,254,254,255,255,255,255,255,255,255,255]),t.t)
B.e9=A.b(s([238,253,254,254,255,255,255,255,255,255,255]),t.t)
B.iQ=A.b(s([B.aB,B.j2,B.e9]),t.S)
B.e0=A.b(s([249,254,255,255,255,255,255,255,255,255,255]),t.t)
B.dM=A.b(s([B.be,B.e0,B.w]),t.S)
B.dX=A.b(s([255,253,255,255,255,255,255,255,255,255,255]),t.t)
B.e1=A.b(s([247,254,255,255,255,255,255,255,255,255,255]),t.t)
B.dC=A.b(s([B.dX,B.e1,B.w]),t.S)
B.hi=A.b(s([252,255,255,255,255,255,255,255,255,255,255]),t.t)
B.iL=A.b(s([B.aC,B.hi,B.w]),t.S)
B.bf=A.b(s([255,254,254,255,255,255,255,255,255,255,255]),t.t)
B.ja=A.b(s([B.bf,B.bk,B.w]),t.S)
B.e2=A.b(s([255,254,253,255,255,255,255,255,255,255,255]),t.t)
B.bv=A.b(s([250,255,255,255,255,255,255,255,255,255,255]),t.t)
B.j6=A.b(s([B.e2,B.bv,B.ab]),t.S)
B.ii=A.b(s([B.hz,B.iQ,B.dM,B.dC,B.iL,B.ja,B.j6,B.V]),t.o)
B.hr=A.b(s([186,251,250,255,255,255,255,255,255,255,255]),t.t)
B.ea=A.b(s([234,251,244,254,255,255,255,255,255,255,255]),t.t)
B.hb=A.b(s([251,251,243,253,254,255,254,255,255,255,255]),t.t)
B.j7=A.b(s([B.hr,B.ea,B.hb]),t.S)
B.hs=A.b(s([236,253,254,255,255,255,255,255,255,255,255]),t.t)
B.dT=A.b(s([251,253,253,254,254,255,255,255,255,255,255]),t.t)
B.fI=A.b(s([B.aC,B.hs,B.dT]),t.S)
B.j3=A.b(s([254,254,254,255,255,255,255,255,255,255,255]),t.t)
B.iP=A.b(s([B.bf,B.j3,B.w]),t.S)
B.hD=A.b(s([254,254,255,255,255,255,255,255,255,255,255]),t.t)
B.hS=A.b(s([B.aB,B.hD,B.ab]),t.S)
B.bH=A.b(s([B.w,B.ab,B.w]),t.S)
B.jP=A.b(s([B.j7,B.fI,B.iP,B.hS,B.bH,B.V,B.V,B.V]),t.o)
B.hj=A.b(s([248,255,255,255,255,255,255,255,255,255,255]),t.t)
B.jw=A.b(s([250,254,252,254,255,255,255,255,255,255,255]),t.t)
B.hE=A.b(s([248,254,249,253,255,255,255,255,255,255,255]),t.t)
B.iK=A.b(s([B.hj,B.jw,B.hE]),t.S)
B.dY=A.b(s([255,253,253,255,255,255,255,255,255,255,255]),t.t)
B.hk=A.b(s([246,253,253,255,255,255,255,255,255,255,255]),t.t)
B.d8=A.b(s([252,254,251,254,254,255,255,255,255,255,255]),t.t)
B.ih=A.b(s([B.dY,B.hk,B.d8]),t.S)
B.dG=A.b(s([255,254,252,255,255,255,255,255,255,255,255]),t.t)
B.hF=A.b(s([248,254,253,255,255,255,255,255,255,255,255]),t.t)
B.i0=A.b(s([253,255,254,254,255,255,255,255,255,255,255]),t.t)
B.j9=A.b(s([B.dG,B.hF,B.i0]),t.S)
B.eh=A.b(s([255,251,254,255,255,255,255,255,255,255,255]),t.t)
B.ei=A.b(s([245,251,254,255,255,255,255,255,255,255,255]),t.t)
B.ej=A.b(s([253,253,254,255,255,255,255,255,255,255,255]),t.t)
B.id=A.b(s([B.eh,B.ei,B.ej]),t.S)
B.dZ=A.b(s([255,251,253,255,255,255,255,255,255,255,255]),t.t)
B.ht=A.b(s([252,253,254,255,255,255,255,255,255,255,255]),t.t)
B.iJ=A.b(s([B.dZ,B.ht,B.aB]),t.S)
B.e3=A.b(s([255,252,255,255,255,255,255,255,255,255,255]),t.t)
B.ek=A.b(s([249,255,254,255,255,255,255,255,255,255,255]),t.t)
B.el=A.b(s([255,255,254,255,255,255,255,255,255,255,255]),t.t)
B.iM=A.b(s([B.e3,B.ek,B.el]),t.S)
B.e_=A.b(s([255,255,253,255,255,255,255,255,255,255,255]),t.t)
B.ik=A.b(s([B.e_,B.bv,B.w]),t.S)
B.ed=A.b(s([B.iK,B.ih,B.j9,B.id,B.iJ,B.iM,B.ik,B.bH]),t.o)
B.e7=A.b(s([B.iH,B.ii,B.jP,B.ed]),t.dB)
B.bl=A.b(s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),t.t)
B.ki=new A.cp(0,"invalid")
B.aI=new A.cp(1,"uint")
B.k=new A.cp(2,"int")
B.X=new A.cp(3,"float")
B.bm=A.b(s([B.ki,B.aI,B.k,B.X]),A.a0("v<cp>"))
B.eb=A.b(s([280,256,256,256,40]),t.t)
B.bn=A.b(s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),t.t)
B.cR=new A.cN(0,"invalid")
B.cS=new A.cN(1,"ico")
B.fJ=A.b(s([B.cR,B.cS,B.b_]),A.a0("v<cN>"))
B.bo=A.b(s([A.qY(),A.qS(),A.r7(),A.r5(),A.r_(),A.qZ(),A.r0()]),t.B)
B.aK=new A.a4(0,"whiteIsZero")
B.kq=new A.a4(1,"blackIsZero")
B.kx=new A.a4(2,"rgb")
B.aM=new A.a4(3,"palette")
B.ky=new A.a4(4,"transparencyMask")
B.c9=new A.a4(5,"cmyk")
B.kz=new A.a4(6,"yCbCr")
B.kA=new A.a4(7,"reserved7")
B.kB=new A.a4(8,"cieLab")
B.kC=new A.a4(9,"iccLab")
B.kr=new A.a4(10,"ituLab")
B.ks=new A.a4(11,"logL")
B.kt=new A.a4(12,"logLuv")
B.ku=new A.a4(13,"colorFilterArray")
B.kv=new A.a4(14,"linearRaw")
B.kw=new A.a4(15,"depth")
B.aL=new A.a4(16,"unknown")
B.bq=A.b(s([B.aK,B.kq,B.kx,B.aM,B.ky,B.c9,B.kz,B.kA,B.kB,B.kC,B.kr,B.ks,B.kt,B.ku,B.kv,B.kw,B.aL]),A.a0("v<a4>"))
B.a6=A.b(s([0,1,2,3,4,5,6,7,8,9,10,11]),t.t)
B.M=A.b(s([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),t.t)
B.aD=A.b(s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),t.t)
B.aE=A.b(s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),t.t)
B.a8=A.b(s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),t.t)
B.a7=A.b(s([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),t.t)
B.a9=A.b(s([B.d,B.b0,B.j,B.h,B.n,B.q,B.b4,B.D,B.b5,B.b6,B.b1,B.b2,B.b3]),A.a0("v<ai>"))
B.br=A.b(s([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),t.t)
B.bu=A.b(s([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),t.t)
B.bt=A.b(s([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),t.t)
B.bs=A.b(s([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),t.t)
B.aa=A.b(s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),t.t)
B.bx=A.b(s([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),t.t)
B.by=A.b(s([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),A.a0("v<G>"))
B.x=A.b(s([0,1,1,2,4,8,1,1,2,4,8,4,8]),t.t)
B.bz=A.b(s([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),t.t)
B.bA=A.b(s([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),t.t)
B.bZ=new A.e5(0,"source")
B.c_=new A.e5(1,"over")
B.bB=A.b(s([B.bZ,B.c_]),A.a0("v<e5>"))
B.ds=A.b(s([2,6,2,6]),t.t)
B.dJ=A.b(s([6,2,6,2]),t.t)
B.dr=A.b(s([2,2,6,6]),t.t)
B.de=A.b(s([1,3,3,9]),t.t)
B.dy=A.b(s([4,0,12,0]),t.t)
B.dt=A.b(s([3,1,9,3]),t.t)
B.dU=A.b(s([8,8,0,0]),t.t)
B.dz=A.b(s([4,12,0,0]),t.t)
B.db=A.b(s([16,0,0,0]),t.t)
B.da=A.b(s([12,4,0,0]),t.t)
B.dK=A.b(s([6,6,2,2]),t.t)
B.dw=A.b(s([3,9,1,3]),t.t)
B.d9=A.b(s([12,0,4,0]),t.t)
B.e5=A.b(s([9,3,3,1]),t.t)
B.f=A.b(s([B.bc,B.ds,B.aA,B.dJ,B.dr,B.de,B.dy,B.dt,B.dU,B.dz,B.db,B.da,B.dK,B.dw,B.d9,B.e5]),t.S)
B.hN=A.b(s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),t.t)
B.ac=A.b(s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),t.t)
B.hO=A.b(s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),t.t)
B.o=A.b(s([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),t.t)
B.Z=A.b(s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),t.t)
B.hU=A.b(s([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),t.t)
B.bC=A.b(s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),t.t)
B.bD=A.b(s([null,A.rn(),A.ro(),A.rm()]),A.a0("v<~(h,h,h,h,h,bv)?>"))
B.bE=A.b(s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),t.t)
B.ad=A.b(s([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),t.t)
B.U=A.b(s([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),t.t)
B.aF=A.b(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),t.t)
B.i1=A.b(s([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),t.t)
B.bF=A.b(s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),t.t)
B.ae=A.b(s([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),t.t)
B.af=A.b(s([0,36,72,109,145,182,218,255]),t.t)
B.bG=A.b(s([137,80,78,71,13,10,26,10]),t.t)
B.a_=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),t.t)
B.ce=new A.ad(1,"rle8")
B.cj=new A.ad(2,"rle4")
B.ck=new A.ad(4,"jpeg")
B.cl=new A.ad(5,"png")
B.cm=new A.ad(7,"reserved7")
B.cn=new A.ad(8,"reserved8")
B.co=new A.ad(9,"reserved9")
B.cf=new A.ad(10,"reserved10")
B.cg=new A.ad(11,"cmyk")
B.ch=new A.ad(12,"cmykRle8")
B.ci=new A.ad(13,"cmykRle4")
B.ag=A.b(s([B.aq,B.ce,B.cj,B.a2,B.ck,B.cl,B.ar,B.cm,B.cn,B.co,B.cf,B.cg,B.ch,B.ci]),A.a0("v<ad>"))
B.jQ=A.b(s([231,120,48,89,115,113,120,152,112]),t.t)
B.ep=A.b(s([152,179,64,126,170,118,46,70,95]),t.t)
B.eq=A.b(s([175,69,143,80,85,82,72,155,103]),t.t)
B.er=A.b(s([56,58,10,171,218,189,17,13,152]),t.t)
B.eC=A.b(s([114,26,17,163,44,195,21,10,173]),t.t)
B.eN=A.b(s([121,24,80,195,26,62,44,64,85]),t.t)
B.eY=A.b(s([144,71,10,38,171,213,144,34,26]),t.t)
B.f8=A.b(s([170,46,55,19,136,160,33,206,71]),t.t)
B.fj=A.b(s([63,20,8,114,114,208,12,9,226]),t.t)
B.fu=A.b(s([81,40,11,96,182,84,29,16,36]),t.t)
B.e6=A.b(s([B.jQ,B.ep,B.eq,B.er,B.eC,B.eN,B.eY,B.f8,B.fj,B.fu]),t.S)
B.fF=A.b(s([134,183,89,137,98,101,106,165,148]),t.t)
B.fH=A.b(s([72,187,100,130,157,111,32,75,80]),t.t)
B.es=A.b(s([66,102,167,99,74,62,40,234,128]),t.t)
B.h6=A.b(s([41,53,9,178,241,141,26,8,107]),t.t)
B.et=A.b(s([74,43,26,146,73,166,49,23,157]),t.t)
B.eu=A.b(s([65,38,105,160,51,52,31,115,128]),t.t)
B.jF=A.b(s([104,79,12,27,217,255,87,17,7]),t.t)
B.ev=A.b(s([87,68,71,44,114,51,15,186,23]),t.t)
B.ew=A.b(s([47,41,14,110,182,183,21,17,194]),t.t)
B.ex=A.b(s([66,45,25,102,197,189,23,18,22]),t.t)
B.jg=A.b(s([B.fF,B.fH,B.es,B.h6,B.et,B.eu,B.jF,B.ev,B.ew,B.ex]),t.S)
B.ey=A.b(s([88,88,147,150,42,46,45,196,205]),t.t)
B.ez=A.b(s([43,97,183,117,85,38,35,179,61]),t.t)
B.eA=A.b(s([39,53,200,87,26,21,43,232,171]),t.t)
B.eB=A.b(s([56,34,51,104,114,102,29,93,77]),t.t)
B.eD=A.b(s([39,28,85,171,58,165,90,98,64]),t.t)
B.eE=A.b(s([34,22,116,206,23,34,43,166,73]),t.t)
B.eF=A.b(s([107,54,32,26,51,1,81,43,31]),t.t)
B.eG=A.b(s([68,25,106,22,64,171,36,225,114]),t.t)
B.eH=A.b(s([34,19,21,102,132,188,16,76,124]),t.t)
B.eI=A.b(s([62,18,78,95,85,57,50,48,51]),t.t)
B.iX=A.b(s([B.ey,B.ez,B.eA,B.eB,B.eD,B.eE,B.eF,B.eG,B.eH,B.eI]),t.S)
B.eJ=A.b(s([193,101,35,159,215,111,89,46,111]),t.t)
B.eK=A.b(s([60,148,31,172,219,228,21,18,111]),t.t)
B.jG=A.b(s([112,113,77,85,179,255,38,120,114]),t.t)
B.h7=A.b(s([40,42,1,196,245,209,10,25,109]),t.t)
B.eL=A.b(s([88,43,29,140,166,213,37,43,154]),t.t)
B.eM=A.b(s([61,63,30,155,67,45,68,1,209]),t.t)
B.eO=A.b(s([100,80,8,43,154,1,51,26,71]),t.t)
B.h8=A.b(s([142,78,78,16,255,128,34,197,171]),t.t)
B.eP=A.b(s([41,40,5,102,211,183,4,1,221]),t.t)
B.eQ=A.b(s([51,50,17,168,209,192,23,25,82]),t.t)
B.hw=A.b(s([B.eJ,B.eK,B.jG,B.h7,B.eL,B.eM,B.eO,B.h8,B.eP,B.eQ]),t.S)
B.dP=A.b(s([138,31,36,171,27,166,38,44,229]),t.t)
B.eR=A.b(s([67,87,58,169,82,115,26,59,179]),t.t)
B.eS=A.b(s([63,59,90,180,59,166,93,73,154]),t.t)
B.eT=A.b(s([40,40,21,116,143,209,34,39,175]),t.t)
B.eU=A.b(s([47,15,16,183,34,223,49,45,183]),t.t)
B.eV=A.b(s([46,17,33,183,6,98,15,32,183]),t.t)
B.eW=A.b(s([57,46,22,24,128,1,54,17,37]),t.t)
B.eX=A.b(s([65,32,73,115,28,128,23,128,205]),t.t)
B.eZ=A.b(s([40,3,9,115,51,192,18,6,223]),t.t)
B.f_=A.b(s([87,37,9,115,59,77,64,21,47]),t.t)
B.h_=A.b(s([B.dP,B.eR,B.eS,B.eT,B.eU,B.eV,B.eW,B.eX,B.eZ,B.f_]),t.S)
B.f0=A.b(s([104,55,44,218,9,54,53,130,226]),t.t)
B.f1=A.b(s([64,90,70,205,40,41,23,26,57]),t.t)
B.f2=A.b(s([54,57,112,184,5,41,38,166,213]),t.t)
B.f3=A.b(s([30,34,26,133,152,116,10,32,134]),t.t)
B.dQ=A.b(s([39,19,53,221,26,114,32,73,255]),t.t)
B.f4=A.b(s([31,9,65,234,2,15,1,118,73]),t.t)
B.jH=A.b(s([75,32,12,51,192,255,160,43,51]),t.t)
B.f5=A.b(s([88,31,35,67,102,85,55,186,85]),t.t)
B.f6=A.b(s([56,21,23,111,59,205,45,37,192]),t.t)
B.f7=A.b(s([55,38,70,124,73,102,1,34,98]),t.t)
B.hG=A.b(s([B.f0,B.f1,B.f2,B.f3,B.dQ,B.f4,B.jH,B.f5,B.f6,B.f7]),t.S)
B.f9=A.b(s([125,98,42,88,104,85,117,175,82]),t.t)
B.fa=A.b(s([95,84,53,89,128,100,113,101,45]),t.t)
B.fb=A.b(s([75,79,123,47,51,128,81,171,1]),t.t)
B.fc=A.b(s([57,17,5,71,102,57,53,41,49]),t.t)
B.fd=A.b(s([38,33,13,121,57,73,26,1,85]),t.t)
B.fe=A.b(s([41,10,67,138,77,110,90,47,114]),t.t)
B.jI=A.b(s([115,21,2,10,102,255,166,23,6]),t.t)
B.ff=A.b(s([101,29,16,10,85,128,101,196,26]),t.t)
B.fg=A.b(s([57,18,10,102,102,213,34,20,43]),t.t)
B.fh=A.b(s([117,20,15,36,163,128,68,1,26]),t.t)
B.h2=A.b(s([B.f9,B.fa,B.fb,B.fc,B.fd,B.fe,B.jI,B.ff,B.fg,B.fh]),t.S)
B.dN=A.b(s([102,61,71,37,34,53,31,243,192]),t.t)
B.fi=A.b(s([69,60,71,38,73,119,28,222,37]),t.t)
B.dO=A.b(s([68,45,128,34,1,47,11,245,171]),t.t)
B.fk=A.b(s([62,17,19,70,146,85,55,62,70]),t.t)
B.fl=A.b(s([37,43,37,154,100,163,85,160,1]),t.t)
B.fm=A.b(s([63,9,92,136,28,64,32,201,85]),t.t)
B.jJ=A.b(s([75,15,9,9,64,255,184,119,16]),t.t)
B.jK=A.b(s([86,6,28,5,64,255,25,248,1]),t.t)
B.jL=A.b(s([56,8,17,132,137,255,55,116,128]),t.t)
B.fn=A.b(s([58,15,20,82,135,57,26,121,40]),t.t)
B.he=A.b(s([B.dN,B.fi,B.dO,B.fk,B.fl,B.fm,B.jJ,B.jK,B.jL,B.fn]),t.S)
B.fo=A.b(s([164,50,31,137,154,133,25,35,218]),t.t)
B.fp=A.b(s([51,103,44,131,131,123,31,6,158]),t.t)
B.fq=A.b(s([86,40,64,135,148,224,45,183,128]),t.t)
B.fr=A.b(s([22,26,17,131,240,154,14,1,209]),t.t)
B.fs=A.b(s([45,16,21,91,64,222,7,1,197]),t.t)
B.ft=A.b(s([56,21,39,155,60,138,23,102,213]),t.t)
B.jM=A.b(s([83,12,13,54,192,255,68,47,28]),t.t)
B.fv=A.b(s([85,26,85,85,128,128,32,146,171]),t.t)
B.fw=A.b(s([18,11,7,63,144,171,4,4,246]),t.t)
B.fx=A.b(s([35,27,10,146,174,171,12,26,128]),t.t)
B.h3=A.b(s([B.fo,B.fp,B.fq,B.fr,B.fs,B.ft,B.jM,B.fv,B.fw,B.fx]),t.S)
B.fy=A.b(s([190,80,35,99,180,80,126,54,45]),t.t)
B.fz=A.b(s([85,126,47,87,176,51,41,20,32]),t.t)
B.fA=A.b(s([101,75,128,139,118,146,116,128,85]),t.t)
B.fB=A.b(s([56,41,15,176,236,85,37,9,62]),t.t)
B.jN=A.b(s([71,30,17,119,118,255,17,18,138]),t.t)
B.fC=A.b(s([101,38,60,138,55,70,43,26,142]),t.t)
B.jO=A.b(s([146,36,19,30,171,255,97,27,20]),t.t)
B.fD=A.b(s([138,45,61,62,219,1,81,188,64]),t.t)
B.fE=A.b(s([32,41,20,117,151,142,20,21,163]),t.t)
B.fG=A.b(s([112,19,12,61,195,128,48,4,24]),t.t)
B.hy=A.b(s([B.fy,B.fz,B.fA,B.fB,B.jN,B.fC,B.jO,B.fD,B.fE,B.fG]),t.S)
B.bI=A.b(s([B.e6,B.jg,B.iX,B.hw,B.h_,B.hG,B.h2,B.he,B.h3,B.hy]),t.o)
B.bK=A.b(s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),t.t)
B.bJ=A.b(s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),t.t)
B.aG=A.b(s([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),t.t)
B.bL=A.b(s([B.aX,B.as,B.at]),A.a0("v<cK>"))
B.aH=A.b(s([128,128,128,128,128,128,128,128,128,128,128]),t.t)
B.bp=A.b(s([B.aH,B.aH,B.aH]),t.S)
B.hu=A.b(s([253,136,254,255,228,219,128,128,128,128,128]),t.t)
B.fQ=A.b(s([189,129,242,255,227,213,255,219,128,128,128]),t.t)
B.hP=A.b(s([106,126,227,252,214,209,255,255,128,128,128]),t.t)
B.hW=A.b(s([B.hu,B.fQ,B.hP]),t.S)
B.jx=A.b(s([1,98,248,255,236,226,255,255,128,128,128]),t.t)
B.jk=A.b(s([181,133,238,254,221,234,255,154,128,128,128]),t.t)
B.fR=A.b(s([78,134,202,247,198,180,255,219,128,128,128]),t.t)
B.e8=A.b(s([B.jx,B.jk,B.fR]),t.S)
B.je=A.b(s([1,185,249,255,243,255,128,128,128,128,128]),t.t)
B.d3=A.b(s([184,150,247,255,236,224,128,128,128,128,128]),t.t)
B.cY=A.b(s([77,110,216,255,236,230,128,128,128,128,128]),t.t)
B.j5=A.b(s([B.je,B.d3,B.cY]),t.S)
B.jf=A.b(s([1,101,251,255,241,255,128,128,128,128,128]),t.t)
B.hg=A.b(s([170,139,241,252,236,209,255,255,128,128,128]),t.t)
B.fZ=A.b(s([37,116,196,243,228,255,255,255,128,128,128]),t.t)
B.hV=A.b(s([B.jf,B.hg,B.fZ]),t.S)
B.jE=A.b(s([1,204,254,255,245,255,128,128,128,128,128]),t.t)
B.cZ=A.b(s([207,160,250,255,238,128,128,128,128,128,128]),t.t)
B.d4=A.b(s([102,103,231,255,211,171,128,128,128,128,128]),t.t)
B.j4=A.b(s([B.jE,B.cZ,B.d4]),t.S)
B.iR=A.b(s([1,152,252,255,240,255,128,128,128,128,128]),t.t)
B.d5=A.b(s([177,135,243,255,234,225,128,128,128,128,128]),t.t)
B.d_=A.b(s([80,129,211,255,194,224,128,128,128,128,128]),t.t)
B.jR=A.b(s([B.iR,B.d5,B.d_]),t.S)
B.ba=A.b(s([1,1,255,128,128,128,128,128,128,128,128]),t.t)
B.dh=A.b(s([246,1,255,128,128,128,128,128,128,128,128]),t.t)
B.fP=A.b(s([255,128,128,128,128,128,128,128,128,128,128]),t.t)
B.hB=A.b(s([B.ba,B.dh,B.fP]),t.S)
B.hX=A.b(s([B.bp,B.hW,B.e8,B.j5,B.hV,B.j4,B.jR,B.hB]),t.o)
B.di=A.b(s([198,35,237,223,193,187,162,160,145,155,62]),t.t)
B.jh=A.b(s([131,45,198,221,172,176,220,157,252,221,1]),t.t)
B.iD=A.b(s([68,47,146,208,149,167,221,162,255,223,128]),t.t)
B.jj=A.b(s([B.di,B.jh,B.iD]),t.S)
B.fM=A.b(s([1,149,241,255,221,224,255,255,128,128,128]),t.t)
B.fS=A.b(s([184,141,234,253,222,220,255,199,128,128,128]),t.t)
B.hH=A.b(s([81,99,181,242,176,190,249,202,255,255,128]),t.t)
B.hR=A.b(s([B.fM,B.fS,B.hH]),t.S)
B.h9=A.b(s([1,129,232,253,214,197,242,196,255,255,128]),t.t)
B.jl=A.b(s([99,121,210,250,201,198,255,202,128,128,128]),t.t)
B.hI=A.b(s([23,91,163,242,170,187,247,210,255,255,128]),t.t)
B.dS=A.b(s([B.h9,B.jl,B.hI]),t.S)
B.iS=A.b(s([1,200,246,255,234,255,128,128,128,128,128]),t.t)
B.h5=A.b(s([109,178,241,255,231,245,255,255,128,128,128]),t.t)
B.jy=A.b(s([44,130,201,253,205,192,255,255,128,128,128]),t.t)
B.h0=A.b(s([B.iS,B.h5,B.jy]),t.S)
B.df=A.b(s([1,132,239,251,219,209,255,165,128,128,128]),t.t)
B.jz=A.b(s([94,136,225,251,218,190,255,255,128,128,128]),t.t)
B.fT=A.b(s([22,100,174,245,186,161,255,199,128,128,128]),t.t)
B.iZ=A.b(s([B.df,B.jz,B.fT]),t.S)
B.hl=A.b(s([1,182,249,255,232,235,128,128,128,128,128]),t.t)
B.d6=A.b(s([124,143,241,255,227,234,128,128,128,128,128]),t.t)
B.fU=A.b(s([35,77,181,251,193,211,255,205,128,128,128]),t.t)
B.ig=A.b(s([B.hl,B.d6,B.fU]),t.S)
B.i_=A.b(s([1,157,247,255,236,231,255,255,128,128,128]),t.t)
B.fN=A.b(s([121,141,235,255,225,227,255,255,128,128,128]),t.t)
B.fV=A.b(s([45,99,188,251,195,217,255,224,128,128,128]),t.t)
B.jt=A.b(s([B.i_,B.fN,B.fV]),t.S)
B.hm=A.b(s([1,1,251,255,213,255,128,128,128,128,128]),t.t)
B.i2=A.b(s([203,1,248,255,255,128,128,128,128,128,128]),t.t)
B.iT=A.b(s([137,1,177,255,224,255,128,128,128,128,128]),t.t)
B.js=A.b(s([B.hm,B.i2,B.iT]),t.S)
B.hZ=A.b(s([B.jj,B.hR,B.dS,B.h0,B.iZ,B.ig,B.jt,B.js]),t.o)
B.iN=A.b(s([253,9,248,251,207,208,255,192,128,128,128]),t.t)
B.hx=A.b(s([175,13,224,243,193,185,249,198,255,255,128]),t.t)
B.iE=A.b(s([73,17,171,221,161,179,236,167,255,234,128]),t.t)
B.jb=A.b(s([B.iN,B.hx,B.iE]),t.S)
B.fO=A.b(s([1,95,247,253,212,183,255,255,128,128,128]),t.t)
B.fK=A.b(s([239,90,244,250,211,209,255,255,128,128,128]),t.t)
B.hQ=A.b(s([155,77,195,248,188,195,255,255,128,128,128]),t.t)
B.e4=A.b(s([B.fO,B.fK,B.hQ]),t.S)
B.dg=A.b(s([1,24,239,251,218,219,255,205,128,128,128]),t.t)
B.d1=A.b(s([201,51,219,255,196,186,128,128,128,128,128]),t.t)
B.fW=A.b(s([69,46,190,239,201,218,255,228,128,128,128]),t.t)
B.ji=A.b(s([B.dg,B.d1,B.fW]),t.S)
B.ie=A.b(s([1,191,251,255,255,128,128,128,128,128,128]),t.t)
B.hn=A.b(s([223,165,249,255,213,255,128,128,128,128,128]),t.t)
B.i3=A.b(s([141,124,248,255,255,128,128,128,128,128,128]),t.t)
B.dR=A.b(s([B.ie,B.hn,B.i3]),t.S)
B.i4=A.b(s([1,16,248,255,255,128,128,128,128,128,128]),t.t)
B.iU=A.b(s([190,36,230,255,236,255,128,128,128,128,128]),t.t)
B.dj=A.b(s([149,1,255,128,128,128,128,128,128,128,128]),t.t)
B.jS=A.b(s([B.i4,B.iU,B.dj]),t.S)
B.dk=A.b(s([1,226,255,128,128,128,128,128,128,128,128]),t.t)
B.iW=A.b(s([247,192,255,128,128,128,128,128,128,128,128]),t.t)
B.dl=A.b(s([240,128,255,128,128,128,128,128,128,128,128]),t.t)
B.jr=A.b(s([B.dk,B.iW,B.dl]),t.S)
B.i5=A.b(s([1,134,252,255,255,128,128,128,128,128,128]),t.t)
B.i6=A.b(s([213,62,250,255,255,128,128,128,128,128,128]),t.t)
B.dm=A.b(s([55,93,255,128,128,128,128,128,128,128,128]),t.t)
B.jD=A.b(s([B.i5,B.i6,B.dm]),t.S)
B.jv=A.b(s([B.jb,B.e4,B.ji,B.dR,B.jS,B.jr,B.jD,B.bp]),t.o)
B.ib=A.b(s([202,24,213,235,186,191,220,160,240,175,255]),t.t)
B.iF=A.b(s([126,38,182,232,169,184,228,174,255,187,128]),t.t)
B.iG=A.b(s([61,46,138,219,151,178,240,170,255,216,128]),t.t)
B.ju=A.b(s([B.ib,B.iF,B.iG]),t.S)
B.hJ=A.b(s([1,112,230,250,199,191,247,159,255,255,128]),t.t)
B.jm=A.b(s([166,109,228,252,211,215,255,174,128,128,128]),t.t)
B.hK=A.b(s([39,77,162,232,172,180,245,178,255,255,128]),t.t)
B.d0=A.b(s([B.hJ,B.jm,B.hK]),t.S)
B.hL=A.b(s([1,52,220,246,198,199,249,220,255,255,128]),t.t)
B.ha=A.b(s([124,74,191,243,183,193,250,221,255,255,128]),t.t)
B.hM=A.b(s([24,71,130,219,154,170,243,182,255,255,128]),t.t)
B.iV=A.b(s([B.hL,B.ha,B.hM]),t.S)
B.fX=A.b(s([1,182,225,249,219,240,255,224,128,128,128]),t.t)
B.jn=A.b(s([149,150,226,252,216,205,255,171,128,128,128]),t.t)
B.dL=A.b(s([28,108,170,242,183,194,254,223,255,255,128]),t.t)
B.h4=A.b(s([B.fX,B.jn,B.dL]),t.S)
B.jo=A.b(s([1,81,230,252,204,203,255,192,128,128,128]),t.t)
B.jA=A.b(s([123,102,209,247,188,196,255,233,128,128,128]),t.t)
B.fY=A.b(s([20,95,153,243,164,173,255,203,128,128,128]),t.t)
B.hv=A.b(s([B.jo,B.jA,B.fY]),t.S)
B.d2=A.b(s([1,222,248,255,216,213,128,128,128,128,128]),t.t)
B.hc=A.b(s([168,175,246,252,235,205,255,255,128,128,128]),t.t)
B.jB=A.b(s([47,116,215,255,211,212,255,255,128,128,128]),t.t)
B.iI=A.b(s([B.d2,B.hc,B.jB]),t.S)
B.jC=A.b(s([1,121,236,253,212,214,255,255,128,128,128]),t.t)
B.jp=A.b(s([141,84,213,252,201,202,255,219,128,128,128]),t.t)
B.jq=A.b(s([42,80,160,240,162,185,255,205,128,128,128]),t.t)
B.j8=A.b(s([B.jC,B.jp,B.jq]),t.S)
B.dn=A.b(s([244,1,255,128,128,128,128,128,128,128,128]),t.t)
B.dp=A.b(s([238,1,255,128,128,128,128,128,128,128,128]),t.t)
B.dB=A.b(s([B.ba,B.dn,B.dp]),t.S)
B.i7=A.b(s([B.ju,B.d0,B.iV,B.h4,B.hv,B.iI,B.j8,B.dB]),t.o)
B.iY=A.b(s([B.hX,B.hZ,B.jv,B.i7]),t.dB)
B.ah=A.b(s([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),t.t)
B.a0=A.b(s([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),t.t)
B.j_=A.b(s([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),t.t)
B.j0=A.b(s([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),t.t)
B.cb=new A.cr(0,"predictor")
B.kO=new A.cr(1,"crossColor")
B.kP=new A.cr(2,"subtractGreen")
B.cc=new A.cr(3,"colorIndexing")
B.bM=A.b(s([B.cb,B.kO,B.kP,B.cc]),A.a0("v<cr>"))
B.ay=A.b(s([0,0,0]),t.a)
B.ho=A.b(s([B.ay,B.ay,B.ay]),t.U)
B.il=A.b(s([0.375,1,0]),t.a)
B.im=A.b(s([0.375,0,1]),t.a)
B.io=A.b(s([0.25,1,1]),t.a)
B.hp=A.b(s([B.il,B.im,B.io]),t.U)
B.iu=A.b(s([0.4375,1,0]),t.a)
B.em=A.b(s([0.1875,-1,1]),t.a)
B.iv=A.b(s([0.3125,0,1]),t.a)
B.iw=A.b(s([0.0625,1,1]),t.a)
B.hT=A.b(s([B.iu,B.em,B.iv,B.iw]),t.U)
B.ix=A.b(s([0.19047619047619047,1,0]),t.a)
B.iy=A.b(s([0.09523809523809523,2,0]),t.a)
B.ic=A.b(s([0.047619047619047616,-2,1]),t.a)
B.en=A.b(s([0.09523809523809523,-1,1]),t.a)
B.iz=A.b(s([0.19047619047619047,0,1]),t.a)
B.iA=A.b(s([0.09523809523809523,1,1]),t.a)
B.i8=A.b(s([0.047619047619047616,2,1]),t.a)
B.hf=A.b(s([0.023809523809523808,-2,2]),t.a)
B.fL=A.b(s([0.047619047619047616,-1,2]),t.a)
B.iB=A.b(s([0.09523809523809523,0,2]),t.a)
B.i9=A.b(s([0.047619047619047616,1,2]),t.a)
B.ij=A.b(s([0.023809523809523808,2,2]),t.a)
B.h1=A.b(s([B.ix,B.iy,B.ic,B.en,B.iz,B.iA,B.i8,B.hf,B.fL,B.iB,B.i9,B.ij]),t.U)
B.ip=A.b(s([0.125,1,0]),t.a)
B.iq=A.b(s([0.125,2,0]),t.a)
B.eo=A.b(s([0.125,-1,1]),t.a)
B.ir=A.b(s([0.125,0,1]),t.a)
B.is=A.b(s([0.125,1,1]),t.a)
B.it=A.b(s([0.125,0,2]),t.a)
B.jc=A.b(s([B.ip,B.iq,B.eo,B.ir,B.is,B.it]),t.U)
B.bN=A.b(s([B.ho,B.hp,B.hT,B.h1,B.jc]),A.a0("v<p<p<i>>>"))
B.dc=A.b(s([173,148,140]),t.t)
B.dd=A.b(s([176,155,140,135]),t.t)
B.ec=A.b(s([180,157,141,134,130]),t.t)
B.dq=A.b(s([254,254,243,230,196,177,153,140,133,130,129]),t.t)
B.bO=A.b(s([B.dc,B.dd,B.ec,B.dq]),t.S)
B.B=A.b(s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),t.t)
B.bP=A.b(s([254,253,251,247,239,223,191,127]),t.t)
B.ai=A.b(s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),t.t)
B.k5=new A.b1(0,"bitmap")
B.c2=new A.b1(1,"grayscale")
B.k6=new A.b1(2,"indexed")
B.c3=new A.b1(3,"rgb")
B.c4=new A.b1(4,"cmyk")
B.k7=new A.b1(5,"multiChannel")
B.k8=new A.b1(6,"duoTone")
B.c5=new A.b1(7,"lab")
B.bQ=A.b(s([B.k5,B.c2,B.k6,B.c3,B.c4,B.k7,B.k8,B.c5]),A.a0("v<b1>"))
B.G=A.b(s([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),t.t)
B.jZ=new A.bN(0,"none")
B.k_=new A.bN(1,"sub")
B.k0=new A.bN(2,"up")
B.k1=new A.bN(3,"average")
B.k2=new A.bN(4,"paeth")
B.aj=A.b(s([B.jZ,B.k_,B.k0,B.k1,B.k2]),A.a0("v<bN>"))
B.cH=new A.aX(1,"rle")
B.cI=new A.aX(2,"zips")
B.cJ=new A.aX(3,"zip")
B.cK=new A.aX(4,"piz")
B.cL=new A.aX(5,"pxr24")
B.cM=new A.aX(6,"b44")
B.cN=new A.aX(7,"b44a")
B.bR=A.b(s([B.aY,B.cH,B.cI,B.cJ,B.cK,B.cL,B.cM,B.cN]),A.a0("v<aX>"))
B.bS=A.b(s([A.qM(),A.qT(),A.qV(),A.qO(),A.qR(),A.qX(),A.qQ(),A.qW(),A.qN(),A.qP()]),t.B)
B.jY=new A.d1(0,"none")
B.c0=new A.d1(1,"background")
B.c1=new A.d1(2,"previous")
B.bT=A.b(s([B.jY,B.c0,B.c1]),A.a0("v<d1>"))
B.bU=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),t.t)
B.bV=A.b(s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),t.t)
B.ak=A.b(s([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),t.t)
B.al=A.b(s([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),t.t)
B.jX={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
B.jU=new A.dn(B.jX,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],A.a0("dn<W,h>"))
B.bW=new A.c2([B.y,1,B.p,3,B.t,15,B.e,255,B.A,65535,B.L,4294967295,B.O,127,B.P,32767,B.Q,2147483647,B.C,1,B.K,1,B.N,1],A.a0("c2<al,h>"))
B.bX=new A.c2([34665,"exif",40965,"interop",34853,"gps"],A.a0("c2<h,W>"))
B.k3=new A.fP(0,"none")
B.k4=new A.fP(4,"paeth")
B.kV=new A.eb(0,"auto")
B.k9=new A.eb(3,"rgb4")
B.ka=new A.eb(4,"rgba4")
B.kW=new A.iD(1,"neural")
B.aJ=new A.aT(0,"bilevel")
B.kj=new A.aT(1,"gray4bit")
B.kk=new A.aT(2,"gray")
B.kl=new A.aT(3,"grayAlpha")
B.km=new A.aT(4,"palette")
B.c8=new A.aT(5,"rgb")
B.kn=new A.aT(6,"rgba")
B.ko=new A.aT(7,"yCbCrSub")
B.an=new A.aT(8,"generic")
B.kp=new A.aT(9,"invalid")
B.kD=A.bE("k7")
B.kE=A.bE("kb")
B.kF=A.bE("kc")
B.kG=A.bE("i7")
B.kH=A.bE("fg")
B.kI=A.bE("ke")
B.kJ=A.bE("K")
B.kK=A.bE("kB")
B.kL=A.bE("be")
B.kM=A.bE("bv")
B.kN=new A.he(!1)
B.ca=new A.he(!0)
B.a1=new A.d9(0,"undefined")
B.aO=new A.d9(1,"lossy")
B.ao=new A.d9(2,"lossless")
B.kQ=new A.d9(3,"animated")})();(function staticFields(){$.jw=null
$.aK=A.b([],A.a0("v<K>"))
$.lT=null
$.l6=null
$.l5=null
$.mF=null
$.mx=null
$.mI=null
$.jR=null
$.jX=null
$.kR=null
$.dd=null
$.eE=null
$.eF=null
$.kO=!1
$.R=B.r
$.b6=A.ma("_config")
$.kL=null
$.m6=!1
$.m7=A.b([A.kX(),A.r9(),A.re(),A.rf(),A.rg(),A.rh(),A.ri(),A.rj(),A.rk(),A.rl(),A.ra(),A.rb(),A.rc(),A.rd(),A.kX(),A.kX()],A.a0("v<h(be,h,h)>"))
$.N=null
$.ld=A.ma("_eLut")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ru","mL",()=>A.qt("_$dart_dartClosure"))
s($,"rG","mN",()=>A.bu(A.iO({
toString:function(){return"$receiver$"}})))
s($,"rH","mO",()=>A.bu(A.iO({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"rI","mP",()=>A.bu(A.iO(null)))
s($,"rJ","mQ",()=>A.bu(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"rM","mT",()=>A.bu(A.iO(void 0)))
s($,"rN","mU",()=>A.bu(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"rL","mS",()=>A.bu(A.m1(null)))
s($,"rK","mR",()=>A.bu(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"rP","mW",()=>A.bu(A.m1(void 0)))
s($,"rO","mV",()=>A.bu(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"rX","kY",()=>A.oV())
s($,"rQ","mX",()=>new A.iQ().$0())
s($,"rR","mY",()=>new A.iP().$0())
s($,"tm","l0",()=>A.kU(B.kJ))
s($,"t_","n0",()=>A.kH(B.ad,B.aF,257,286,15))
s($,"rZ","n_",()=>A.kH(B.bz,B.Z,0,30,15))
s($,"rY","mZ",()=>A.kH(null,B.hN,0,19,7))
s($,"to","k3",()=>{var q=null,p="ISOSpeed"
return A.nM([11,A.f("ProcessingSoftware",B.j,q),254,A.f("SubfileType",B.n,1),255,A.f("OldSubfileType",B.n,1),256,A.f("ImageWidth",B.n,1),257,A.f("ImageLength",B.n,1),258,A.f("BitsPerSample",B.h,1),259,A.f("Compression",B.h,1),262,A.f("PhotometricInterpretation",B.h,1),263,A.f("Thresholding",B.h,1),264,A.f("CellWidth",B.h,1),265,A.f("CellLength",B.h,1),266,A.f("FillOrder",B.h,1),269,A.f("DocumentName",B.j,q),270,A.f("ImageDescription",B.j,q),271,A.f("Make",B.j,q),272,A.f("Model",B.j,q),273,A.f("StripOffsets",B.n,q),274,A.f("Orientation",B.h,1),277,A.f("SamplesPerPixel",B.h,1),278,A.f("RowsPerStrip",B.n,1),279,A.f("StripByteCounts",B.n,1),280,A.f("MinSampleValue",B.h,1),281,A.f("MaxSampleValue",B.h,1),282,A.f("XResolution",B.q,1),283,A.f("YResolution",B.q,1),284,A.f("PlanarConfiguration",B.h,1),285,A.f("PageName",B.j,q),286,A.f("XPosition",B.q,1),287,A.f("YPosition",B.q,1),290,A.f("GrayResponseUnit",B.h,1),291,A.f("GrayResponseCurve",B.d,q),292,A.f("T4Options",B.d,q),293,A.f("T6Options",B.d,q),296,A.f("ResolutionUnit",B.h,1),297,A.f("PageNumber",B.h,2),300,A.f("ColorResponseUnit",B.d,q),301,A.f("TransferFunction",B.h,768),305,A.f("Software",B.j,q),306,A.f("DateTime",B.j,q),315,A.f("Artist",B.j,q),316,A.f("HostComputer",B.j,q),317,A.f("Predictor",B.h,1),318,A.f("WhitePoint",B.q,2),319,A.f("PrimaryChromaticities",B.q,6),320,A.f("ColorMap",B.h,q),321,A.f("HalftoneHints",B.h,2),322,A.f("TileWidth",B.n,1),323,A.f("TileLength",B.n,1),324,A.f("TileOffsets",B.n,q),325,A.f("TileByteCounts",B.d,q),326,A.f("BadFaxLines",B.d,q),327,A.f("CleanFaxData",B.d,q),328,A.f("ConsecutiveBadFaxLines",B.d,q),332,A.f("InkSet",B.d,q),333,A.f("InkNames",B.d,q),334,A.f("NumberofInks",B.d,q),336,A.f("DotRange",B.d,q),337,A.f("TargetPrinter",B.j,q),338,A.f("ExtraSamples",B.d,q),339,A.f("SampleFormat",B.h,1),340,A.f("SMinSampleValue",B.d,q),341,A.f("SMaxSampleValue",B.d,q),342,A.f("TransferRange",B.d,q),343,A.f("ClipPath",B.d,q),512,A.f("JPEGProc",B.d,q),513,A.f("JPEGInterchangeFormat",B.d,q),514,A.f("JPEGInterchangeFormatLength",B.d,q),529,A.f("YCbCrCoefficients",B.q,3),530,A.f("YCbCrSubSampling",B.h,1),531,A.f("YCbCrPositioning",B.h,1),532,A.f("ReferenceBlackWhite",B.q,6),700,A.f("ApplicationNotes",B.h,1),18246,A.f("Rating",B.h,1),33421,A.f("CFARepeatPatternDim",B.d,q),33422,A.f("CFAPattern",B.d,q),33423,A.f("BatteryLevel",B.d,q),33432,A.f("Copyright",B.j,q),33434,A.f("ExposureTime",B.q,1),33437,A.f("FNumber",B.q,q),33723,A.f("IPTC-NAA",B.n,1),34665,A.f("ExifOffset",B.d,q),34675,A.f("InterColorProfile",B.d,q),34850,A.f("ExposureProgram",B.h,1),34852,A.f("SpectralSensitivity",B.j,q),34853,A.f("GPSOffset",B.d,q),34855,A.f(p,B.n,1),34856,A.f("OECF",B.d,q),34864,A.f("SensitivityType",B.h,1),34866,A.f("RecommendedExposureIndex",B.n,1),34867,A.f(p,B.n,1),36864,A.f("ExifVersion",B.D,q),36867,A.f("DateTimeOriginal",B.j,q),36868,A.f("DateTimeDigitized",B.j,q),36880,A.f("OffsetTime",B.j,q),36881,A.f("OffsetTimeOriginal",B.j,q),36882,A.f("OffsetTimeDigitized",B.j,q),37121,A.f("ComponentsConfiguration",B.D,q),37122,A.f("CompressedBitsPerPixel",B.d,q),37377,A.f("ShutterSpeedValue",B.d,q),37378,A.f("ApertureValue",B.d,q),37379,A.f("BrightnessValue",B.d,q),37380,A.f("ExposureBiasValue",B.d,q),37381,A.f("MaxApertureValue",B.d,q),37382,A.f("SubjectDistance",B.d,q),37383,A.f("MeteringMode",B.d,q),37384,A.f("LightSource",B.d,q),37385,A.f("Flash",B.d,q),37386,A.f("FocalLength",B.d,q),37396,A.f("SubjectArea",B.d,q),37500,A.f("MakerNote",B.D,q),37510,A.f("UserComment",B.D,q),37520,A.f("SubSecTime",B.d,q),37521,A.f("SubSecTimeOriginal",B.d,q),37522,A.f("SubSecTimeDigitized",B.d,q),40091,A.f("XPTitle",B.d,q),40092,A.f("XPComment",B.d,q),40093,A.f("XPAuthor",B.d,q),40094,A.f("XPKeywords",B.d,q),40095,A.f("XPSubject",B.d,q),40960,A.f("FlashPixVersion",B.d,q),40961,A.f("ColorSpace",B.h,1),40962,A.f("ExifImageWidth",B.h,1),40963,A.f("ExifImageLength",B.h,1),40964,A.f("RelatedSoundFile",B.d,q),40965,A.f("InteroperabilityOffset",B.d,q),41483,A.f("FlashEnergy",B.d,q),41484,A.f("SpatialFrequencyResponse",B.d,q),41486,A.f("FocalPlaneXResolution",B.d,q),41487,A.f("FocalPlaneYResolution",B.d,q),41488,A.f("FocalPlaneResolutionUnit",B.d,q),41492,A.f("SubjectLocation",B.d,q),41493,A.f("ExposureIndex",B.d,q),41495,A.f("SensingMethod",B.d,q),41728,A.f("FileSource",B.d,q),41729,A.f("SceneType",B.d,q),41730,A.f("CVAPattern",B.d,q),41985,A.f("CustomRendered",B.d,q),41986,A.f("ExposureMode",B.d,q),41987,A.f("WhiteBalance",B.d,q),41988,A.f("DigitalZoomRatio",B.d,q),41989,A.f("FocalLengthIn35mmFilm",B.d,q),41990,A.f("SceneCaptureType",B.d,q),41991,A.f("GainControl",B.d,q),41992,A.f("Contrast",B.d,q),41993,A.f("Saturation",B.d,q),41994,A.f("Sharpness",B.d,q),41995,A.f("DeviceSettingDescription",B.d,q),41996,A.f("SubjectDistanceRange",B.d,q),42016,A.f("ImageUniqueID",B.d,q),42032,A.f("CameraOwnerName",B.j,q),42033,A.f("BodySerialNumber",B.j,q),42034,A.f("LensSpecification",B.d,q),42035,A.f("LensMake",B.j,q),42036,A.f("LensModel",B.j,q),42037,A.f("LensSerialNumber",B.j,q),42240,A.f("Gamma",B.q,1),50341,A.f("PrintIM",B.d,q),59932,A.f("Padding",B.d,q),59933,A.f("OffsetSchema",B.d,q),65e3,A.f("OwnerName",B.j,q),65001,A.f("SerialNumber",B.j,q)],t.p,A.a0("eZ"))})
r($,"rS","hz",()=>A.io(511))
r($,"rT","k0",()=>A.io(511))
r($,"rV","k1",()=>A.lF(2041))
r($,"rW","hA",()=>A.lF(225))
r($,"rU","aA",()=>A.io(766))
s($,"rB","mM",()=>A.lt(0,0,0))
s($,"tb","ar",()=>A.io(1))
s($,"tc","aC",()=>A.nG($.ar().buffer,0,null))
s($,"t4","aq",()=>A.nS(1))
s($,"t5","aB",()=>{var q,p=$.aq().buffer
A.bA(p,0,null)
q=B.a.S(p.byteLength-0,2)
return new Int16Array(p,0,q)})
s($,"t6","L",()=>A.nT(1))
s($,"t8","a8",()=>{var q,p=$.L().buffer
A.bA(p,0,null)
q=B.a.S(p.byteLength-0,4)
return new Int32Array(p,0,q)})
s($,"t7","bZ",()=>A.nv($.L().buffer))
s($,"t2","hB",()=>A.nR(1))
s($,"t3","k2",()=>A.m2($.hB().buffer,0))
s($,"t0","kZ",()=>A.nP(1))
s($,"t1","n1",()=>A.m2($.kZ().buffer,0))
s($,"t9","l_",()=>A.o7(1))
s($,"ta","n2",()=>{var q=$.l_()
return A.nw(q.ga0(q))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.bb,MediaError:J.bb,NavigatorUserMediaError:J.bb,OverconstrainedError:J.bb,PositionError:J.bb,GeolocationPositionError:J.bb,ArrayBuffer:A.fB,ArrayBufferView:A.dV,Float32Array:A.fC,Float64Array:A.dU,Int16Array:A.fD,Int32Array:A.fE,Int8Array:A.fF,Uint16Array:A.dW,Uint32Array:A.dX,Uint8Array:A.ca,HTMLAudioElement:A.r,HTMLBRElement:A.r,HTMLBaseElement:A.r,HTMLBodyElement:A.r,HTMLButtonElement:A.r,HTMLCanvasElement:A.r,HTMLContentElement:A.r,HTMLDListElement:A.r,HTMLDataElement:A.r,HTMLDataListElement:A.r,HTMLDetailsElement:A.r,HTMLDialogElement:A.r,HTMLDivElement:A.r,HTMLEmbedElement:A.r,HTMLFieldSetElement:A.r,HTMLHRElement:A.r,HTMLHeadElement:A.r,HTMLHeadingElement:A.r,HTMLHtmlElement:A.r,HTMLIFrameElement:A.r,HTMLImageElement:A.r,HTMLLIElement:A.r,HTMLLabelElement:A.r,HTMLLegendElement:A.r,HTMLLinkElement:A.r,HTMLMapElement:A.r,HTMLMediaElement:A.r,HTMLMenuElement:A.r,HTMLMetaElement:A.r,HTMLMeterElement:A.r,HTMLModElement:A.r,HTMLOListElement:A.r,HTMLObjectElement:A.r,HTMLOptGroupElement:A.r,HTMLOptionElement:A.r,HTMLOutputElement:A.r,HTMLParagraphElement:A.r,HTMLParamElement:A.r,HTMLPictureElement:A.r,HTMLPreElement:A.r,HTMLProgressElement:A.r,HTMLQuoteElement:A.r,HTMLScriptElement:A.r,HTMLShadowElement:A.r,HTMLSlotElement:A.r,HTMLSourceElement:A.r,HTMLSpanElement:A.r,HTMLStyleElement:A.r,HTMLTableCaptionElement:A.r,HTMLTableCellElement:A.r,HTMLTableDataCellElement:A.r,HTMLTableHeaderCellElement:A.r,HTMLTableColElement:A.r,HTMLTableElement:A.r,HTMLTableRowElement:A.r,HTMLTableSectionElement:A.r,HTMLTemplateElement:A.r,HTMLTextAreaElement:A.r,HTMLTimeElement:A.r,HTMLTitleElement:A.r,HTMLTrackElement:A.r,HTMLUListElement:A.r,HTMLUnknownElement:A.r,HTMLVideoElement:A.r,HTMLDirectoryElement:A.r,HTMLFontElement:A.r,HTMLFrameElement:A.r,HTMLFrameSetElement:A.r,HTMLMarqueeElement:A.r,HTMLElement:A.r,HTMLAnchorElement:A.dg,HTMLAreaElement:A.eJ,Blob:A.eP,CDATASection:A.b5,CharacterData:A.b5,Comment:A.b5,ProcessingInstruction:A.b5,Text:A.b5,DOMException:A.hO,MathMLElement:A.ak,Element:A.ak,AbortPaymentEvent:A.n,AnimationEvent:A.n,AnimationPlaybackEvent:A.n,ApplicationCacheErrorEvent:A.n,BackgroundFetchClickEvent:A.n,BackgroundFetchEvent:A.n,BackgroundFetchFailEvent:A.n,BackgroundFetchedEvent:A.n,BeforeInstallPromptEvent:A.n,BeforeUnloadEvent:A.n,BlobEvent:A.n,CanMakePaymentEvent:A.n,ClipboardEvent:A.n,CloseEvent:A.n,CustomEvent:A.n,DeviceMotionEvent:A.n,DeviceOrientationEvent:A.n,ErrorEvent:A.n,ExtendableEvent:A.n,ExtendableMessageEvent:A.n,FetchEvent:A.n,FontFaceSetLoadEvent:A.n,ForeignFetchEvent:A.n,GamepadEvent:A.n,HashChangeEvent:A.n,InstallEvent:A.n,MediaEncryptedEvent:A.n,MediaKeyMessageEvent:A.n,MediaQueryListEvent:A.n,MediaStreamEvent:A.n,MediaStreamTrackEvent:A.n,MessageEvent:A.n,MIDIConnectionEvent:A.n,MIDIMessageEvent:A.n,MutationEvent:A.n,NotificationEvent:A.n,PageTransitionEvent:A.n,PaymentRequestEvent:A.n,PaymentRequestUpdateEvent:A.n,PopStateEvent:A.n,PresentationConnectionAvailableEvent:A.n,PresentationConnectionCloseEvent:A.n,ProgressEvent:A.n,PromiseRejectionEvent:A.n,PushEvent:A.n,RTCDataChannelEvent:A.n,RTCDTMFToneChangeEvent:A.n,RTCPeerConnectionIceEvent:A.n,RTCTrackEvent:A.n,SecurityPolicyViolationEvent:A.n,SensorErrorEvent:A.n,SpeechRecognitionError:A.n,SpeechRecognitionEvent:A.n,SpeechSynthesisEvent:A.n,StorageEvent:A.n,SyncEvent:A.n,TrackEvent:A.n,TransitionEvent:A.n,WebKitTransitionEvent:A.n,VRDeviceEvent:A.n,VRDisplayEvent:A.n,VRSessionEvent:A.n,MojoInterfaceRequestEvent:A.n,ResourceProgressEvent:A.n,USBConnectionEvent:A.n,IDBVersionChangeEvent:A.n,AudioProcessingEvent:A.n,OfflineAudioCompletionEvent:A.n,WebGLContextEvent:A.n,Event:A.n,InputEvent:A.n,SubmitEvent:A.n,EventTarget:A.ah,File:A.aD,FileList:A.dx,FileReader:A.dy,HTMLFormElement:A.f3,HTMLInputElement:A.cV,MouseEvent:A.aF,DragEvent:A.aF,PointerEvent:A.aF,WheelEvent:A.aF,Document:A.av,DocumentFragment:A.av,HTMLDocument:A.av,ShadowRoot:A.av,XMLDocument:A.av,Attr:A.av,DocumentType:A.av,Node:A.av,HTMLSelectElement:A.h3,CompositionEvent:A.b2,FocusEvent:A.b2,KeyboardEvent:A.b2,TextEvent:A.b2,TouchEvent:A.b2,UIEvent:A.b2,SVGAElement:A.q,SVGAnimateElement:A.q,SVGAnimateMotionElement:A.q,SVGAnimateTransformElement:A.q,SVGAnimationElement:A.q,SVGCircleElement:A.q,SVGClipPathElement:A.q,SVGDefsElement:A.q,SVGDescElement:A.q,SVGDiscardElement:A.q,SVGEllipseElement:A.q,SVGFEBlendElement:A.q,SVGFEColorMatrixElement:A.q,SVGFEComponentTransferElement:A.q,SVGFECompositeElement:A.q,SVGFEConvolveMatrixElement:A.q,SVGFEDiffuseLightingElement:A.q,SVGFEDisplacementMapElement:A.q,SVGFEDistantLightElement:A.q,SVGFEFloodElement:A.q,SVGFEFuncAElement:A.q,SVGFEFuncBElement:A.q,SVGFEFuncGElement:A.q,SVGFEFuncRElement:A.q,SVGFEGaussianBlurElement:A.q,SVGFEImageElement:A.q,SVGFEMergeElement:A.q,SVGFEMergeNodeElement:A.q,SVGFEMorphologyElement:A.q,SVGFEOffsetElement:A.q,SVGFEPointLightElement:A.q,SVGFESpecularLightingElement:A.q,SVGFESpotLightElement:A.q,SVGFETileElement:A.q,SVGFETurbulenceElement:A.q,SVGFilterElement:A.q,SVGForeignObjectElement:A.q,SVGGElement:A.q,SVGGeometryElement:A.q,SVGGraphicsElement:A.q,SVGImageElement:A.q,SVGLineElement:A.q,SVGLinearGradientElement:A.q,SVGMarkerElement:A.q,SVGMaskElement:A.q,SVGMetadataElement:A.q,SVGPathElement:A.q,SVGPatternElement:A.q,SVGPolygonElement:A.q,SVGPolylineElement:A.q,SVGRadialGradientElement:A.q,SVGRectElement:A.q,SVGScriptElement:A.q,SVGSetElement:A.q,SVGStopElement:A.q,SVGStyleElement:A.q,SVGElement:A.q,SVGSVGElement:A.q,SVGSwitchElement:A.q,SVGSymbolElement:A.q,SVGTSpanElement:A.q,SVGTextContentElement:A.q,SVGTextElement:A.q,SVGTextPathElement:A.q,SVGTextPositioningElement:A.q,SVGTitleElement:A.q,SVGUseElement:A.q,SVGViewElement:A.q,SVGGradientElement:A.q,SVGComponentTransferFunctionElement:A.q,SVGFEDropShadowElement:A.q,SVGMPathElement:A.q})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBuffer:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,File:true,FileList:true,FileReader:true,HTMLFormElement:true,HTMLInputElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.aj.$nativeSuperclassTag="ArrayBufferView"
A.et.$nativeSuperclassTag="ArrayBufferView"
A.eu.$nativeSuperclassTag="ArrayBufferView"
A.bM.$nativeSuperclassTag="ArrayBufferView"
A.ev.$nativeSuperclassTag="ArrayBufferView"
A.ew.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.qD
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
