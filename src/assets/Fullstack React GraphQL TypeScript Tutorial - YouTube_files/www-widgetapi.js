(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}ka=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function x(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.F=b.prototype}
function qa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.v=this.h=null}
function ta(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
qa.prototype.s=function(a){this.g=a};
function ua(a,b){a.h={ia:b,U:!0};a.f=a.l||a.j}
qa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function y(a,b,c){a.f=c;return{value:b}}
qa.prototype.B=function(a){this.f=a};
function va(a){this.f=new qa;this.g=a}
function wa(a,b){ta(a.f);var c=a.f.i;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,ua(a.f,g),ya(a)}a.f.i=null;d.call(a.f,f);return ya(a)}
function ya(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,ua(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.U)throw b.ia;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){ta(a.f);a.f.i?b=xa(a,a.f.i.next,b,a.f.s):(a.f.s(b),b=ya(a));return b};
this["throw"]=function(b){ta(a.f);a.f.i?b=xa(a,a.f.i["throw"],b,a.f.s):(ua(a.f,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function z(a,b){var c=new za(new va(b));pa&&a.prototype&&pa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||pa});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ea});
t("Promise",function(a){function b(g){this.f=0;this.h=void 0;this.g=[];this.m=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.da),reject:g(this.j)}};
b.prototype.da=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.sa(g):this.l(g)}};
b.prototype.sa=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.ga(h,g):this.l(g)};
b.prototype.j=function(g){this.s(2,g)};
b.prototype.l=function(g){this.s(1,g)};
b.prototype.s=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.h=h;2===this.f&&this.ea();this.v()};
b.prototype.ea=function(){var g=this;e(function(){if(g.G()){var h=da.console;"undefined"!==typeof h&&h.error(g.h)}},1)};
b.prototype.G=function(){if(this.m)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.h;return k(g)};
b.prototype.v=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.g(this.g[g]);this.g=null}};
var f=new c;b.prototype.fa=function(g){var h=this.i();g.H(h.resolve,h.reject)};
b.prototype.ga=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:q}
var l,m,n=new b(function(r,q){l=r;m=q});
this.H(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.H=function(g,h){function k(){switch(l.f){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.g?f.g(k):this.g.push(k);this.m=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).H(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){r[v]=w;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).H(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Fa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Fa(this,b,"includes").indexOf(b,c||0)}});
t("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ha(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&A(h.g,l))for(var n=0;n<m.length;n++){var r=m[n];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:n,o:r}}return{id:l,list:m,index:-1,o:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.o?l.o.value=k:(l.o={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.o),this.f.previous.next=l.o,this.f.previous=l.o,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.o&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.o.previous.next=h.o.next,h.o.next.previous=h.o.previous,h.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).o};
e.prototype.get=function(h){return(h=d(this,h).o)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ha(){}
function Ka(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function La(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(1E9*Math.random()>>>0),Oa=0;function Pa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa=Pa:Sa=Ra;return Sa.apply(null,arguments)}
function D(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.F=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Ta(a){return a}
;function G(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(Ua,Error);Ua.prototype.name="CustomError";var Va=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Wa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Xa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ya(a){return Array.prototype.concat.apply([],arguments)}
function Za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function $a(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=kb(a[c]);return b}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;var ob=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},pb=/&/g,qb=/</g,rb=/>/g,sb=/"/g,tb=/'/g,ub=/\x00/g,vb=/[\x00&<>"']/;var I;a:{var wb=B.navigator;if(wb){var xb=wb.userAgent;if(xb){I=xb;break a}}I=""}function J(a){return-1!=I.indexOf(a)}
;function yb(){}
;var zb=J("Opera"),Ab=J("Trident")||J("MSIE"),Bb=J("Edge"),Cb=J("Gecko")&&!(-1!=I.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),Db=-1!=I.toLowerCase().indexOf("webkit")&&!J("Edge");function Eb(){var a=B.document;return a?a.documentMode:void 0}
var Fb;a:{var Gb="",Hb=function(){var a=I;if(Cb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Bb)return/Edge\/([\d\.]+)/.exec(a);if(Ab)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Db)return/WebKit\/(\S+)/.exec(a);if(zb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Hb&&(Gb=Hb?Hb[1]:"");if(Ab){var Ib=Eb();if(null!=Ib&&Ib>parseFloat(Gb)){Fb=String(Ib);break a}}Fb=Gb}var Jb=Fb,Kb;if(B.document&&Ab){var Tb=Eb();Kb=Tb?Tb:parseInt(Jb,10)||void 0}else Kb=void 0;var Ub=Kb;var Vb=J("iPhone")&&!J("iPod")&&!J("iPad")||J("iPod"),Wb=J("iPad");var Xb={},Yb=null;var K=window;function Zb(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=$b(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ac[c])c=ac[c];else{c=String(c);if(!ac[c]){var f=/function\s+([^\(]+)/m.exec(c);ac[c]=f?f[1]:"[Anonymous]"}c=ac[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function $b(a,b){b||(b={});b[bc(a)]=!0;var c=a.stack||"",d=a.Ga;d&&!b[bc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=$b(d,b));return c}
function bc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ac={};function cc(a){this.f=a||{cookie:""}}
p=cc.prototype;p.isEnabled=function(){return navigator.cookieEnabled};
p.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Na;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.V}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ob(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{V:0,path:b,domain:c});return d};
p.isEmpty=function(){return!this.f.cookie};
p.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ob(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var dc=new cc("undefined"==typeof document?null:document);function ec(a,b){this.width=a;this.height=b}
p=ec.prototype;p.clone=function(){return new ec(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.isEmpty=function(){return!(this.width*this.height)};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function fc(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,k;if(k="function"==typeof h.split)k=0<=Va(h.split(/\s+/),a);k&&(g[d++]=e)}g.length=d;return g}return f}
function gc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function hc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var ic=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function jc(a){return a?decodeURI(a):a}
function L(a){return jc(a.match(ic)[3]||null)}
function kc(a){var b=a.match(ic);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function lc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)lc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function mc(a){var b=[],c;for(c in a)lc(c,a[c],b);return b.join("&")}
var nc=/#|$/;function oc(a){var b=pc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function qc(){var a=[];oc(function(b){a.push(b)});
return a}
var pc={ta:"allow-forms",ua:"allow-modals",va:"allow-orientation-lock",wa:"allow-pointer-lock",xa:"allow-popups",ya:"allow-popups-to-escape-sandbox",za:"allow-presentation",Aa:"allow-same-origin",Ba:"allow-scripts",Ca:"allow-top-navigation",Da:"allow-top-navigation-by-user-activation"},rc=fb(function(){return qc()});
function sc(){var a=gc(),b={};H(rc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function tc(){this.h=this.h;this.i=this.i}
tc.prototype.h=!1;tc.prototype.dispose=function(){this.h||(this.h=!0,this.O())};
tc.prototype.O=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var uc={};function vc(){}
function wc(a,b){if(b!==uc)throw Error("Bad secret");this.f=a}
x(wc,vc);wc.prototype.toString=function(){return this.f};new wc("about:blank",uc);new wc("about:invalid#zTSz",uc);var xc=(new Date).getTime();function yc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function zc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,q=0;64>q;q+=4)r[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],F=e[3],Qa=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var la=F^v&(w^F);var Da=1518500249}else la=v^w^F,Da=1859775393;else 60>q?(la=v&w|F&(v|w),Da=2400959708):(la=v^w^F,Da=3395469782);la=((n<<5|n>>>27)&4294967295)+la+Qa+Da+r[q]&4294967295;Qa=F;F=w;w=(v<<30|v>>>2)&4294967295;v=n;n=la}e[0]=e[0]+n&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+w&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Qa&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],v=0,w=n.length;v<w;++v)q.push(n.charCodeAt(v));n=q}r||(r=n.length);q=0;if(0==l)for(;q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var v=24;0<=v;v-=8)n[r++]=e[q]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ha:function(){for(var n=d(),r="",q=0;q<n.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return r}}}
;function Ac(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),Bc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=Bc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Bc(a){var b=zc();b.update(a);return b.ha().toLowerCase()}
;function Cc(a){var b=yc(String(B.location.href)),c;(c=B.__SAPISID||B.__APISID||B.__OVERRIDE_SID)?c=!0:(c=new cc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,c||(c=new cc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(B.location.href);return d&&c&&b?[b,Ac(yc(d),
c,a||null)].join(" "):null}return null}
;function Dc(){this.g=[];this.f=-1}
Dc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Dc.prototype.get=function(a){return!!this.g[a]};
function Ec(a){-1==a.f&&(a.f=Wa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Fc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Fc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Gc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Hc(a){B.setTimeout(function(){throw a;},0)}
var Ic;function Jc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=gc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Sa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.T;c.T=null;e()}};
return function(e){d.next={T:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Kc(){this.g=this.f=null}
var Mc=new Fc(function(){return new Lc},function(a){a.reset()});
Kc.prototype.add=function(a,b){var c=Mc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Kc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Lc(){this.next=this.scope=this.f=null}
Lc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Lc.prototype.reset=function(){this.next=this.scope=this.f=null};function Nc(a,b){Oc||Pc();Qc||(Oc(),Qc=!0);Rc.add(a,b)}
var Oc;function Pc(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Oc=function(){a.then(Sc)}}else Oc=function(){var b=Sc;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!J("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Ic||(Ic=Jc()),Ic(b)):B.setImmediate(b)}}
var Qc=!1,Rc=new Kc;function Sc(){for(var a;a=Rc.remove();){try{a.f.call(a.scope)}catch(b){Hc(b)}Gc(Mc,a)}Qc=!1}
;function Tc(){this.g=-1}
;function Uc(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(Uc,Tc);Uc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Vc(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Uc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Vc(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Vc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Vc(this,e);f=0;break}}this.h=f;this.j+=b}};
Uc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Vc(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var Wc="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function Xc(){}
Xc.prototype.next=function(){throw Wc;};
Xc.prototype.A=function(){return this};
function Yc(a){if(a instanceof Xc)return a;if("function"==typeof a.A)return a.A(!1);if(Ka(a)){var b=0,c=new Xc;c.next=function(){for(;;){if(b>=a.length)throw Wc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Zc(a,b){if(Ka(a))try{H(a,b,void 0)}catch(c){if(c!==Wc)throw c;}else{a=Yc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Wc)throw c;}}}
function $c(a){if(Ka(a))return Za(a);a=Yc(a);var b=[];Zc(a,function(c){b.push(c)});
return b}
;function ad(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ad)for(c=vd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function vd(a){wd(a);return a.f.concat()}
p=ad.prototype;p.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||xd;wd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function xd(a,b){return a===b}
p.isEmpty=function(){return 0==this.g};
p.clear=function(){this.h={};this.i=this.g=this.f.length=0};
p.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&wd(this),!0):!1};
function wd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
p.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
p.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
p.forEach=function(a,b){for(var c=vd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
p.clone=function(){return new ad(this)};
p.A=function(a){wd(this);var b=0,c=this.i,d=this,e=new Xc;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Wc;var f=d.f[b++];return a?f:d.h[f]};
return e};var yd=B.JSON.stringify;function M(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ha)try{var b=this;a.call(void 0,function(c){zd(b,2,c)},function(c){zd(b,3,c)})}catch(c){zd(this,3,c)}}
function Ad(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Ad.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Bd=new Fc(function(){return new Ad},function(a){a.reset()});
function Cd(a,b,c){var d=Bd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Dd(a){if(a instanceof M)return a;var b=new M(Ha);zd(b,2,a);return b}
function Ed(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return Fd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
M.prototype.$goog_Thenable=!0;function Gd(a,b){return Fd(a,null,b,void 0)}
M.prototype.cancel=function(a){if(0==this.f){var b=new Hd(a);Nc(function(){Id(this,b)},this)}};
function Id(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Id(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Jd(c),Kd(c,e,3,b)))}a.h=null}else zd(a,3,b)}
function Ld(a,b){a.g||2!=a.f&&3!=a.f||Md(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Fd(a,b,c,d){var e=Cd(null,null,null);e.f=new M(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Hd?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Ld(a,e);return e.f}
M.prototype.v=function(a){this.f=0;zd(this,2,a)};
M.prototype.G=function(a){this.f=0;zd(this,3,a)};
function zd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.v,f=a.G;if(d instanceof M){Ld(d,Cd(e||Ha,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(La(d))try{var k=d.then;if("function"===typeof k){Nd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.m=c,a.f=b,a.h=null,Md(a),3!=b||c instanceof Hd||Od(a,c))}}
function Nd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Md(a){a.l||(a.l=!0,Nc(a.s,a))}
function Jd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
M.prototype.s=function(){for(var a;a=Jd(this);)Kd(this,a,this.f,this.m);this.l=!1};
function Kd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Pd(b,c,d);else try{b.h?b.g.call(b.context):Pd(b,c,d)}catch(e){Qd.call(null,e)}Gc(Bd,b)}
function Pd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Od(a,b){a.j=!0;Nc(function(){a.j&&Qd.call(null,b)})}
var Qd=Hc;function Hd(a){Ua.call(this,a)}
E(Hd,Ua);Hd.prototype.name="cancel";function N(a){tc.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.g={};this.s=!!a}
E(N,tc);p=N.prototype;p.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function Rd(a,b,c){var d=Sd;if(a=d.g[a]){var e=d.f;(a=Xa(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.L(a)}}
p.L=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.l)this.j.push(a),this.f[a+1]=Ha;else{if(c){var d=Va(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
p.J=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Td(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.L(c)}}return 0!=e}return!1};
function Td(a,b,c){Nc(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.g[a];b&&(H(b,this.L,this),delete this.g[a])}else this.f.length=0,this.g={}};
p.O=function(){N.F.O.call(this);this.clear();this.j.length=0};function Ud(a){this.f=a}
Ud.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,yd(b))};
Ud.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ud.prototype.remove=function(a){this.f.remove(a)};function Vd(a){this.f=a}
E(Vd,Ud);function Wd(a){this.data=a}
function Xd(a){return void 0===a||a instanceof Wd?a:new Wd(a)}
Vd.prototype.set=function(a,b){Vd.F.set.call(this,a,Xd(b))};
Vd.prototype.g=function(a){a=Vd.F.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Vd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Yd(a){this.f=a}
E(Yd,Vd);Yd.prototype.set=function(a,b,c){if(b=Xd(b)){if(c){if(c<Date.now()){Yd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Yd.F.set.call(this,a,b)};
Yd.prototype.g=function(a){var b=Yd.F.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Yd.prototype.remove.call(this,a);else return b}};function Zd(){}
;function $d(){}
E($d,Zd);$d.prototype.clear=function(){var a=$c(this.A(!0)),b=this;H(a,function(c){b.remove(c)})};function ae(a){this.f=a}
E(ae,$d);p=ae.prototype;p.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
p.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeItem(a)};
p.A=function(a){var b=0,c=this.f,d=new Xc;d.next=function(){if(b>=c.length)throw Wc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){this.f.clear()};
p.key=function(a){return this.f.key(a)};function be(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(be,ae);function ce(a,b){this.g=a;this.f=null;if(Ab&&!(9<=Number(Ub))){de||(de=new ad);this.f=de.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),de.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(ce,$d);var ee={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},de=null;function fe(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ee[b]})}
p=ce.prototype;p.isAvailable=function(){return!!this.f};
p.set=function(a,b){this.f.setAttribute(fe(a),b);ge(this)};
p.get=function(a){a=this.f.getAttribute(fe(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeAttribute(fe(a));ge(this)};
p.A=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Xc;d.next=function(){if(b>=c.length)throw Wc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ge(this)};
function ge(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function he(a,b){this.g=a;this.f=b+"::"}
E(he,$d);he.prototype.set=function(a,b){this.g.set(this.f+a,b)};
he.prototype.get=function(a){return this.g.get(this.f+a)};
he.prototype.remove=function(a){this.g.remove(this.f+a)};
he.prototype.A=function(a){var b=this.g.A(!0),c=this,d=new Xc;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var ie=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};D("yt.config_",ie);function je(a){var b=arguments;1<b.length?ie[b[0]]=b[1]:1===b.length&&Object.assign(ie,b[0])}
function P(a,b){return a in ie?ie[a]:b}
;var ke=[];function le(a){ke.forEach(function(b){return b(a)})}
function me(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ne(b),le(b)}}:a}
function ne(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),je("ERRORS",b))}
function oe(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),je("ERRORS",b))}
;var pe=0;D("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++pe});var qe={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function re(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in qe||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
re.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
re.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
re.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=B.ytEventsEventsListeners||{};D("ytEventsEventsListeners",ib);var se=B.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",se);
function te(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=La(e[4])&&La(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ue(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ve()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
var ve=fb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function we(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=te(a,b,c,d);if(!e){e=++se.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new re(h);if(!hc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new re(h);
h.currentTarget=a;return c.call(a,h)};
g=me(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ve()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d]}}}
;function xe(a,b){"function"===typeof a&&(a=me(a));return window.setTimeout(a,b)}
function ye(a){"function"===typeof a&&(a=me(a));return window.setInterval(a,250)}
;function ze(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ae(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?$a(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};ne(h)}}}return b}
function Be(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ae(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=mc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Ce={};function De(a){return Ce[a]||(Ce[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ee={},Fe=[],Sd=new N,Ge={};function He(){for(var a=u(Fe),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Ie(a,b){b||(b=document);var c=Za(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):fc(d,b);d=Za(d);return Ya(c,d)}
function Q(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[De(b)]:a.getAttribute("data-"+b):null;return c}
function Je(a,b){Sd.J.apply(Sd,arguments)}
;function Ke(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function S(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Le(a,b,c){Me||(Me={},we(window,"message",Sa(a.i,a)));Me[c]=b}
Ke.prototype.i=function(a){if(a.origin==S(this,"host")||a.origin==S(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Me[b.id])a.s=!0,a.s&&(H(a.m,a.S,a),a.m.length=0),a.ba(b)}};
var Me=null;function T(a){a=Ne(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Oe(a,b){var c=Ne(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Ne(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
;function Pe(){}
function Qe(a,b){return Re(a,0,b)}
;function Se(){}
x(Se,Pe);function Re(a,b,c){isNaN(c)&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):xe(a,c||0)}
Se.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Se.f=void 0;Se.g=function(){Se.f||(Se.f=new Se)};
Se.g();var Te=B.ytPubsubPubsubInstance||new N,Ue=B.ytPubsubPubsubSubscribedKeys||{},Ve=B.ytPubsubPubsubTopicToKeys||{},We=B.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.L;N.prototype.publish=N.prototype.J;N.prototype.clear=N.prototype.clear;D("ytPubsubPubsubInstance",Te);D("ytPubsubPubsubTopicToKeys",Ve);D("ytPubsubPubsubIsSynchronous",We);D("ytPubsubPubsubSubscribedKeys",Ue);var Xe=window,U=Xe.ytcsi&&Xe.ytcsi.now?Xe.ytcsi.now:Xe.performance&&Xe.performance.timing&&Xe.performance.now&&Xe.performance.timing.navigationStart?function(){return Xe.performance.timing.navigationStart+Xe.performance.now()}:function(){return(new Date).getTime()};var Ye=Oe("initial_gel_batch_timeout",1E3),Ze=Math.pow(2,16)-1,$e=null,af=0,bf=void 0,cf=0,df=0,ef=0,ff=!0,gf=B.ytLoggingTransportLogPayloadsQueue_||{};D("ytLoggingTransportLogPayloadsQueue_",gf);var Of=B.ytLoggingTransportGELQueue_||new Map;D("ytLoggingTransportGELQueue_",Of);var Pf=B.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Pf);
function Qf(){window.clearTimeout(cf);window.clearTimeout(df);df=0;bf&&bf.isReady()?(Rf(Of),"log_event"in gf&&Rf(Object.entries(gf.log_event)),Of.clear(),delete gf.log_event):Sf()}
function Sf(){T("web_gel_timeout_cap")&&!df&&(df=xe(Qf,6E4));window.clearTimeout(cf);var a=P("LOGGING_BATCH_TIMEOUT",Oe("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&ff&&(a=Ye);cf=xe(Qf,a)}
function Rf(a){var b=bf,c=Math.round(U());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=kb({context:Tf(b.f||Uf())});e.events=f;(f=Pf[d])&&Vf(e,d,f);delete Pf[d];Wf(e,c);Xf(b,"log_event",e,{retry:!0,onSuccess:function(){af=Math.round(U()-c)}});
ff=!1}}
function Wf(a,b){a.requestTimeMs=String(b);T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&T("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Ze/2));d++;d>Ze&&(d=1);je("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;$e&&af&&T("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:$e,roundtripMs:String(af)});$e=c;af=0}}
function Vf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Yf=B.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Yf);function Zf(a){var b=$f;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(ag(b),bg(b));b.ca_type="image";a&&(b.bid=a);return b}
function ag(a){var b={};b.dt=xc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?K:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(b.u_h=K.screen.height,b.u_w=K.screen.width,b.u_ah=K.screen.availHeight,b.u_aw=K.screen.availWidth,b.u_cd=K.screen.colorDepth);
K.navigator&&K.navigator.plugins&&(b.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(b.u_nmime=K.navigator.mimeTypes.length);return b}
function bg(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new ec(l.clientWidth,l.clientHeight)).round()}catch(n){m=new ec(-12245933,-12245933)}k=m;m={};l=new Dc;B.SVGElement&&
B.document.createElementNS&&l.set(0);c=sc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);B.crypto&&B.crypto.subtle&&l.set(3);B.TextDecoder&&B.TextEncoder&&l.set(4);l=Ec(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!K.WebGLRenderingContext,m}
var $f=new function(){var a=window.document;this.f=window;this.g=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return ze(Zf(a))});var cg="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function dg(){if(!cg)return null;var a=cg();return"open"in a?a:null}
;var eg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},fg="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
gg=!1;
function hg(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(ic)[1]||null,e=L(a);d&&e?(d=c,c=a.match(ic),d=d.match(ic),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?L(c)==e&&(Number(c.match(ic)[4]||null)||null)==(Number(a.match(ic)[4]||null)||null):!0;d=T("web_ajax_ignore_global_headers_if_set");for(var f in eg)e=P(eg[f]),!e||!c&&L(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!L(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!L(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!L(a))b["X-YouTube-Ad-Signals"]=ze(Zf(void 0));return b}
function ig(a){var b=window.location.search,c=L(a),d=jc(a.match(ic)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ae(b),f={};H(fg,function(g){e[g]&&(f[g]=e[g])});
return Be(a,f||{},!1)}
function jg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=kg(a,b);var d=lg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.P&&b.P.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Y&&0<b.timeout&&(f=xe(function(){e||(e=!0,window.clearTimeout(f),b.Y.call(b.context||B))},b.timeout))}else mg(a,b)}
function mg(a,b){var c=b.format||"JSON";a=kg(a,b);var d=lg(a,b),e=!1,f=ng(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=og(a,c,k,b.Ha);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.P&&b.P.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.I&&0<b.timeout){var g=b.I;var h=xe(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function kg(a,b){b.La&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.ra;d&&(d[c]&&delete d[c],a=Be(a,d||{},!0));return a}
function lg(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.u,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Ka||L(a)&&!b.withCredentials&&L(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.u&&b.u[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ae(e),mb(e,f),e=b.aa&&"JSON"==b.aa?JSON.stringify(e):mc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!gg&&c&&"POST"!=b.method&&
(gg=!0,ne(Error("AJAX request with postData should use POST")));return e}
function og(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,oe(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?pg(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=qg(g)})}d&&rg(e);
return e}
function rg(a){if(La(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===nb){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ta,createScript:Ta,createScriptURL:Ta})}catch(g){B.console&&B.console.error(g.message)}nb=e}else nb=e}(e=nb)&&e.createHTML(d);a[c]=new yb}else rg(a[b])}}
function pg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function qg(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ng(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&me(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=dg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;T("debug_forward_web_query_parameters")&&(a=ig(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=hg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function sg(){for(var a={},b=u(Object.entries(Ae(P("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function tg(){return"INNERTUBE_API_KEY"in ie&&"INNERTUBE_API_VERSION"in ie}
function Uf(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),ja:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ka:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ma:P("INNERTUBE_CONTEXT_HL",void 0),la:P("INNERTUBE_CONTEXT_GL",void 0),na:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",pa:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),oa:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Tf(a){var b={client:{hl:a.ma,gl:a.la,clientName:a.ka,clientVersion:a.innertubeContextClientVersion,configInfo:a.ja}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=P("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=P("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&T("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);P("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,sg());return b}
function ug(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Fa||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ea:b=Cc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),T("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function vg(a){a=Object.assign({},a);delete a.Authorization;var b=Cc();if(b){var c=new Uc;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ka(b);void 0===c&&(c=0);if(!Yb){Yb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Xb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Yb[k]&&(Yb[k]=h)}}}c=Xb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function wg(a){a=vg(a);var b=new Uc;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function xg(){var a=new be;(a=a.isAvailable()?new he(a,"yt.innertube"):null)||(a=new ce("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Yd(a):null;this.g=document.domain||window.location.hostname}
xg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(yd(b))}catch(f){return}else e=escape(b);b=this.g;dc.set(""+a,e,{V:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
xg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=dc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
xg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;dc.remove(""+a,"/",void 0===b?"youtube.com":b)};var yg;function zg(){yg||(yg=new xg);return yg}
function Ag(a,b,c,d){if(d)return null;d=zg().get("nextId",!0)||1;var e=zg().get("requests",!0)||{};e[d]={method:a,request:b,authState:vg(c),requestTime:Math.round(U())};zg().set("nextId",d+1,86400,!0);zg().set("requests",e,86400,!0);return d}
function Bg(a){var b=zg().get("requests",!0)||{};delete b[a];zg().set("requests",b,86400,!0)}
function Cg(a){var b=zg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=vg(ug(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Xf(a,d.method,e,{}));delete b[c]}}zg().set("requests",b,86400,!0)}}
;function Dg(){}
;var Eg=Vb||Wb;function Fg(a){if(!a)throw Error();throw a;}
function Gg(a){return a}
function V(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={D:0};f.D<a.length;f={D:f.D},++f.D)Hg(V.resolve(a[f.D]).then(function(g){return function(h){d[g.D]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Gg,e=null!==b&&void 0!==b?b:Fg;return new V(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Ig(c,c,d,f,g)}),c.onRejected.push(function(){Jg(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ig(c,c,d,f,g):"REJECTED"===c.state.status&&Jg(c,c,e,f,g)})};
function Hg(a,b){a.then(void 0,b)}
function Ig(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Kg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Jg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Kg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Kg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Kg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Lg(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Lg.prototype)}
x(Lg,Error);function Mg(){var a=Error.call(this,"IndexedDB is not supported.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Mg.prototype)}
x(Mg,Error);function Ng(){var a=Error.call(this,"The current transaction exceeded its quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Ng.prototype)}
x(Ng,Error);function Og(){var a=Error.call(this,"The current transaction may have failed because of exceeding quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Og.prototype)}
x(Og,Error);function Pg(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
function Qg(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Rg(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Sg(a){return new M(function(b,c){Rg(a,b,c)})}
function X(a){return new V(function(b,c){Rg(a,b,c)})}
;function Tg(a,b){this.f=a;this.options=b}
p=Tg.prototype;p.add=function(a,b,c){return Ug(this,[a],"readwrite",function(d){return Vg(d,a).add(b,c)})};
p.clear=function(a){return Ug(this,[a],"readwrite",function(b){return Vg(b,a).clear()})};
p.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Ug(this,[a],"readonly",function(c){return Vg(c,a).count(b)})};
function Wg(a,b,c){a=a.f.createObjectStore(b,c);return new Xg(a)}
p["delete"]=function(a,b){return Ug(this,[a],"readwrite",function(c){return Vg(c,a)["delete"](b)})};
p.get=function(a,b){return Ug(this,[a],"readwrite",function(c){return Vg(c,a).get(b)})};
function Yg(a,b){return Ug(a,["databases"],"readwrite",function(c){c=Vg(c,"databases");return X(c.f.put(b,void 0))})}
function Ug(a,b,c,d){c=void 0===c?"readonly":c;return new M(function(e,f){var g=a.f.transaction(b,c),h=new Zg(g);Hg(d(h).then(function(k){Gd($g(h).then(function(){e(k)}),function(l){f(l)})}),function(k){f(k)})})}
function Xg(a){this.f=a}
p=Xg.prototype;p.add=function(a,b){return X(this.f.add(a,b))};
p.clear=function(){return X(this.f.clear()).then(function(){})};
p.count=function(a){return X(this.f.count(a))};
p["delete"]=function(a){return X(this.f["delete"](a))};
p.get=function(a){return X(this.f.get(a))};
p.index=function(a){return new ah(this.f.index(a))};
p.getName=function(){return this.f.name};
function Zg(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new M(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;e?("QuotaExceededError"===e.name?oe(new Ng):"UnknownError"===e.name&&oe(new Og),d(e)):d(new Lg)})})}
Zg.prototype.abort=function(){this.f.abort();this.aborted=!0};
function $g(a){var b=a.f;b.commit&&!a.aborted&&b.commit();return a.done}
function Vg(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new Xg(c),a.g.set(c,d));return d}
function ah(a){this.f=a}
ah.prototype.count=function(a){return X(this.f.count(a))};
ah.prototype.get=function(a){return X(this.f.get(a))};
function bh(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ch(a).then(function(d){return Qg(d,c)})}
function dh(a,b){this.request=a;this.f=b}
function ch(a){return X(a).then(function(b){return null===b?null:new dh(a,b)})}
dh.prototype["delete"]=function(){return X(this.f["delete"]()).then(function(){})};
dh.prototype.update=function(a){return X(this.f.update(a))};function eh(a,b,c){function d(){n||(n=new Tg(f.result,{closed:m}));return n}
var e=Zg,f=self.indexedDB.open(a,b),g=c.blocked,h=c.blocking,k=c.f,l=c.upgrade,m=c.closed,n;l&&f.addEventListener("upgradeneeded",function(r){if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var q=d(),v=new e(f.transaction);l(q,r.oldVersion,r.newVersion,v)});
g&&f.addEventListener("blocked",function(){g()});
return Sg(f).then(function(r){h&&r.addEventListener("versionchange",function(){h(d())});
k&&r.addEventListener("close",function(){k()});
return d()})}
function fh(a,b,c){c=void 0===c?{}:c;return eh(a,b,c)}
;var gh,hh,ih=["getAll","getAllKeys","getKey","openKeyCursor"],jh=["getAll","getAllKeys","getKey","openKeyCursor"];
function kh(){return G(this,function b(){var c;return z(b,function(d){switch(d.f){case 1:var e;if(e=Eg)e=/WebKit\/([0-9]+)/.exec(I),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(I),e=!(e&&602<=parseInt(e[1],10)));if(e&&!T("ytidb_allow_on_ios_safari_v8_and_v9")||Bb)return d["return"](!1);try{if(!self.indexedDB)return d["return"](!1)}catch(f){return d["return"](!1)}d.l=2;d.j=3;return y(d,fh("yt-idb-test-do-not-use"),5);case 5:c=d.g;case 3:d.v=[d.h];d.l=0;d.j=0;if(c)try{c.close()}catch(f){}e=
d.v.splice(0)[0];(e=d.h=d.h||e)?e.U?d.f=d.l||d.j:void 0!=e.B&&d.j<e.B?(d.f=e.B,d.h=null):d.f=d.j:d.f=4;break;case 2:return d.l=0,d.h=null,d["return"](!1);case 4:return d["return"](!0)}})})}
function lh(){return void 0!==gh?Dd(gh):new M(function(a){kh().then(function(b){gh=b;a(b)})})}
function mh(){return void 0!==hh?Dd(hh):lh().then(function(a){if(!a)return!1;var b=u(ih);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(jh);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return hh=a})}
;var nh;function oh(){function a(b){b.close();nh=void 0}
nh||(nh=Gd(fh("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&Wg(b,"databases",{keyPath:"actualName"})}}),function(b){return Pg(b)?fh("YtIdbMeta",void 0,{blocking:a}):Ed(b)}));
return nh}
function ph(a){return oh().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return Yg(b,a)})})}
function qh(a){return oh().then(function(b){return b["delete"]("databases",a)})}
;function rh(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return Ed(c)}return Gd(ph(b).then(function(){return a(b)}),function(c){return Gd(qh(b.actualName),function(){}).then(function(){return Ed(c)})})}
function sh(){return lh().then(function(a){if(!a)throw new Mg;})}
function th(a,b){b=void 0===b?{}:b;return sh().then(function(){return rh(function(c){return fh(c.actualName,a,b)})})}
;function uh(){V.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
x(uh,V);uh.reject=V.reject;uh.resolve=V.resolve;uh.all=V.all;var vh;function wh(){return G(this,function b(){return z(b,function(c){if(!vh)try{vh=th(1,{upgrade:function(d,e){1>e&&(Wg(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),Wg(d,"sapisid"))}})}catch(d){if(!Pg(d))return ne(d),c["return"](Promise.reject(d));
vh=th()}return c["return"](vh)})})}
function xh(a){return G(this,function c(){var d,e,f;return z(c,function(g){if(1==g.f)return y(g,yh(),2);if(3!=g.f)return d=g.g,y(g,wh(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function zh(){return G(this,function b(){var c,d,e,f,g,h;return z(b,function(k){switch(k.f){case 1:return y(k,yh(),2);case 2:return c=k.g,d=["NEW",c,0],e=["NEW",c,U()],f=IDBKeyRange.bound(d,e),y(k,wh(),3);case 3:return g=k.g,h=void 0,y(k,Ug(g,["LogsRequestsStore"],"readwrite",function(l){return bh(Vg(l,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(m){m.f.value&&(h=m.f.value,h.status="QUEUED",m.update(h))})}),4);
case 4:return k["return"](h)}})})}
function Ah(a){return G(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,wh(),2);d=e.g;return e["return"](Ug(d,["LogsRequestsStore"],"readwrite",function(f){var g=Vg(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",X(g.f.put(h,void 0)).then(function(){return h})})}))})})}
function Bh(a){return G(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,wh(),2);d=e.g;return e["return"](Ug(d,["LogsRequestsStore"],"readwrite",function(f){var g=Vg(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,X(g.f.put(h,void 0)).then(function(){return h})):uh.resolve(void 0)})}))})})}
function Ch(a){return G(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,wh(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function yh(){return G(this,function b(){var c;return z(b,function(d){if(1==d.f){Dg.f||(Dg.f=new Dg);var e={};var f=Cc([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=P("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in ie||(e["X-Origin"]=window.location.origin),T("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in ie&&(e["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));e=Dd(e);return y(d,e,2)}c=d.g;return d["return"](wg(c))})})}
;var Dh=Oe("network_polling_interval",3E4);function Eh(){this.i=0;this.f=window.navigator.onLine;Fh(this);Gh(this)}
function Hh(){Eh.f||(Eh.f=new Eh);return Eh.f}
function Ih(a){var b=Jh,c=Kh;(new M(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)});
Lh(a)}
function Gh(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Fh(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function Lh(a){a.i||(Mh(a),window.navigator.onLine&&a.g&&a.g())}
function Mh(a){a.i=Qe(function(){window.navigator.onLine?(!1===a.f&&ne(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&ne(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());Mh(a)},Dh)}
;var Nh=Oe("networkless_throttle_timeout")||100,Oh=Oe("networkless_retry_attempts")||1,Ph=0;function Qh(a,b){b=void 0===b?{}:b;Rh().then(function(c){var d=Hh().f;if(!c||T("networkless_bypass_write")||d&&T("vss_networkless_bypass_write"))mg(a,b);else{var e={url:a,options:b,timestamp:U(),status:"NEW",sendCount:0};xh(e).then(function(f){e.id=f;f=Hh();f.f&&!T("networkless_always_offline")?Sh(e):Ih(f)})["catch"](function(f){Sh(e);
ne(f)})}})}
function Jh(){var a=this;Ph||(Ph=Re(function(){return G(a,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,zh(),2);if(3!=e.f)return d=e.g,d?y(e,Sh(d),3):(Kh(),e["return"]());Ph=0;Jh();e.f=0})})},1,Nh))}
function Kh(){var a=Ph;if(!isNaN(a)){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}Ph=0}
function Sh(a){return G(this,function c(){var d;return z(c,function(e){switch(e.f){case 1:if(!a.id){e.B(2);break}return y(e,Ah(a.id),3);case 3:(d=e.g)?a=d:oe(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=U()-f)){e.B(4);break}oe(Error("Networkless Logging: Stored logs request expired age limit"));if(!a.id){e.B(5);break}return y(e,Ch(a.id),5);case 5:return e["return"]();case 4:f=a=Th(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||
void 0===g?void 0:g.u)||void 0===h?0:h.requestTimeMs)f.options.u.requestTimeMs=Math.round(U());(a=f)&&mg(a.url,a.options);e.f=0}})})}
function Th(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return G(b,function h(){return z(h,function(k){if(1==k.f)return a&&a.id?a.sendCount<Oh?y(k,Bh(a.id),6):y(k,Ch(a.id),2):k.B(2);2!=k.f&&Ih(Hh());c(e,f);k.f=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return G(b,function h(){return z(h,function(k){if(1==k.f)return a&&a.id?y(k,Ch(a.id),2):k.B(2);d(e,f);k.f=0})})};
return a}
function Rh(){return G(this,function b(){return z(b,function(c){return T("networkless_logging")?(2===Oe("networkless_ytidb_version")&&mh().then(function(d){return d}),c["return"](lh())):c["return"](!1)})})}
;function Uh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ia(u(c)))}
x(Uh,Error);function Vh(a){var b=this;this.f=null;a?this.f=a:tg()&&(this.f=Uf());Qe(function(){Cg(b)},5E3)}
Vh.prototype.isReady=function(){!this.f&&tg()&&(this.f=Uf());return!!this.f};
function Xf(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&oe(new Uh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Uh("innertube xhrclient not ready",b,c,d);ne(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",u:c,aa:"JSON",I:function(){d.I()},
Y:d.I,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
X:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
Ma:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.na)&&(g=e);var h=a.f.pa||!1,k=ug(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.oa&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=Be(""+g+e,l||{},!0);Rh().then(function(n){if(d.retry&&T("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(T("networkless_gel")&&!n||!T("networkless_gel"))var r=Ag(b,
c,k,h);if(r){var q=f.onSuccess,v=f.X;f.onSuccess=function(w,F){Bg(r);q(w,F)};
c.X=function(w,F){Bg(r);v(w,F)}}}try{T("use_fetch_for_op_xhr")?jg(m,f):T("networkless_gel")&&d.retry?(f.method="POST",Qh(m,f)):(f.method="POST",f.u||(f.u={}),mg(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(Bg(r),r=0),oe(Error("An extension is blocking network request."));
else throw w;}r&&Qe(function(){Cg(a)},5E3)})}
;var Wh=[{W:function(a){return"Cannot read property '"+a.key+"'"},
R:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{W:function(a){return"Cannot call '"+a.key+"'"},
R:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];function Xh(){this.f=[];this.g=[]}
var Yh;var Zh=new N;var $h=new Set,ai=0,bi=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ci(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.l=this.f=this.g=null;this.j=Ma(this);this.h=0;this.s=!1;this.m=[];this.i=null;this.v=c;this.G={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?kc(a.src):"https://www.youtube.com"),this.g=new Ke(b),c||(b=di(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Ma(this.f)),Ee[this.f.id]=this,window.postMessage){this.i=new N;ei(this);b=S(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Ge)fi(this,e)}}
p=Y.prototype;p.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
p.qa=function(){return this.f};
p.ba=function(a){this.K(a.event,a)};
p.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);gi(this,a);return this};
function fi(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.v==c[0]&&gi(a,d)}}
p.destroy=function(){this.f.id&&(Ee[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Me&&(Me[this.j]=null);this.g=null;a=this.f;for(var c in ib)ib[c][0]==a&&ue(c);this.l=this.f=null};
p.M=function(){return{}};
function hi(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.S(b):a.m.push(b)}
p.K=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.J(a,c);Je(this.v+"."+a,c)}};
function di(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+S(a.g,"title"));(d=S(a.g,"width"))&&c.setAttribute("width",d);(d=S(a.g,"height"))&&c.setAttribute("height",d);var h=
a.M();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.j;window.location.href&&H(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(nc);b:{var n=0;for(var r=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var q=l.charCodeAt(n-1);if(38==q||63==q)if(q=l.charCodeAt(n+r),!q||61==q||38==q||35==q)break b;n+=r+1}n=-1}if(0>n)l=null;else{r=l.indexOf("&",n);if(0>r||r>m)r=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
r-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=S(a.g,"host")+a.N()+"?"+mc(h);return c}
p.Z=function(){this.f&&this.f.contentWindow?this.S({event:"listening"}):window.clearInterval(this.h)};
function ei(a){Le(a.g,a,a.j);a.h=ye(Sa(a.Z,a));we(a.f,"load",Sa(function(){window.clearInterval(this.h);this.h=ye(Sa(this.Z,this))},a))}
function gi(a,b){a.G[b]||(a.G[b]=!0,hi(a,"addEventListener",[b]))}
p.S=function(a){a.id=this.j;a.channel="widget";var b=yd(a),c=this.g,d=kc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.h?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(Ia){if(Ia.name&&"SyntaxError"==Ia.name){if(!(Ia.message&&0<Ia.message.indexOf("target origin ''"))){var g=void 0,h=void 0,k=Ia;h=void 0===h?{}:h;h.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=h||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(k){if(T("console_log_js_exceptions")){var n=k,r=[];r.push("Name: "+n.name);r.push("Message: "+n.message);n.hasOwnProperty("params")&&r.push("Error Params: "+JSON.stringify(n.params));r.push("File name: "+n.fileName);r.push("Stacktrace: "+n.stack);window.console.log(r.join("\n"),n)}if((window&&window.yterr||g)&&!(5<=ai)&&0!==k.sampleWeight){var q=void 0,v=k,w=l,F=Zb(v),Qa=F.message||"Unknown Error",la=F.name||"UnknownError",
Da=F.lineNumber||"Not available",ni=F.fileName||"Not available",oi=F.stack||v.f||"Not available";if(v.hasOwnProperty("args")&&v.args&&v.args.length)for(var ra=0,Lb=0;Lb<v.args.length;Lb++){var R=v.args[Lb],Aa="params."+Lb;ra+=Aa.length;if(R)if(Array.isArray(R)){for(var pi=w,bd=ra,ab=0;ab<R.length&&!(R[ab]&&(bd+=ci(ab,R[ab],Aa,pi),500<bd));ab++);ra=bd}else if("object"===typeof R){var Mb=void 0,qi=w,cd=ra;for(Mb in R)if(R[Mb]&&(cd+=ci(Mb,R[Mb],Aa,qi),500<cd))break;ra=cd}else w[Aa]=String(JSON.stringify(R)).substring(0,
500),ra+=w[Aa].length;else w[Aa]=String(JSON.stringify(R)).substring(0,500),ra+=w[Aa].length;if(500<=ra)break}else if(v.hasOwnProperty("params")&&v.params){var Nb=v.params;if("object"===typeof v.params){var hf=0;for(q in Nb)if(Nb[q]){var jf="params."+q,kf=String(JSON.stringify(Nb[q])).substr(0,500);w[jf]=kf;hf+=jf.length+kf.length;if(500<hf)break}}else w.params=String(JSON.stringify(Nb)).substr(0,500)}navigator.vendor&&!w.hasOwnProperty("vendor")&&(w.vendor=navigator.vendor);var dd={message:Qa,name:la,
lineNumber:Da,fileName:ni,stack:oi,params:w},lf=Number(v.columnNumber);isNaN(lf)||(dd.lineNumber=dd.lineNumber+":"+lf);for(var ea,Ba=dd,mf=u(Wh),ed=mf.next();!ed.done;ed=mf.next()){var fd=ed.value;if(fd.R[Ba.name])for(var nf=u(fd.R[Ba.name]),gd=nf.next();!gd.done;gd=nf.next()){var of=gd.value,Ob=Ba.message.match(of.regexp);if(Ob){Ba.params["error.original"]=Ob[0];for(var hd=of.groups,pf={},Ja=0;Ja<hd.length;Ja++)pf[hd[Ja]]=Ob[Ja+1],Ba.params["error."+hd[Ja]]=Ob[Ja+1];Ba.message=fd.W(pf);break}}}ea=
Ba;window.yterr&&"function"===typeof window.yterr&&window.yterr(ea);if(!($h.has(ea.message)||0<=ea.stack.indexOf("/YouTubeCenter.js")||0<=ea.stack.indexOf("/mytube.js"))){Zh.J("handleError",ea);if(T("kevlar_gel_error_routing")){var Pb=void 0,qf=m,O=ea;a:{for(var rf=u(bi),id=rf.next();!id.done;id=rf.next()){var sf=I;if(sf&&0<=sf.toLowerCase().indexOf(id.value.toLowerCase())){var tf=!0;break a}}tf=!1}if(!tf){var bb={stackTrace:O.stack};O.fileName&&(bb.filename=O.fileName);var fa=O.lineNumber&&O.lineNumber.split?
O.lineNumber.split(":"):[];0!==fa.length&&(1!==fa.length||isNaN(Number(fa[0]))?2!==fa.length||isNaN(Number(fa[0]))||isNaN(Number(fa[1]))||(bb.lineNumber=Number(fa[0]),bb.columnNumber=Number(fa[1])):bb.lineNumber=Number(fa[0]));var ri=O.message,si=O.name;Yh||(Yh=new Xh);var uf=Yh;a:{for(var vf=u(uf.g),jd=vf.next();!jd.done;jd=vf.next()){var wf=jd.value;if(O.message&&O.message.match(wf.f)){var kd=wf.weight;break a}}for(var xf=u(uf.f),ld=xf.next();!ld.done;ld=xf.next()){var yf=ld.value;if(yf.f(O)){kd=
yf.weight;break a}}kd=1}var md={level:"ERROR_LEVEL_UNKNOWN",message:ri,errorClassName:si,sampleWeight:kd};"ERROR"===qf?md.level="ERROR_LEVEL_ERROR":"WARNING"===qf&&(md.level="ERROR_LEVEL_WARNNING");var ti={isObfuscated:!0,browserStackInfo:bb},Qb={pageUrl:window.location.href,kvPairs:[]},nd=O.params;if(nd)for(var zf=u(Object.keys(nd)),od=zf.next();!od.done;od=zf.next()){var Af=od.value;Qb.kvPairs.push({key:"client."+Af,value:String(nd[Af])})}var Bf=P("SERVER_NAME",void 0),Cf=P("SERVER_VERSION",void 0);
Bf&&Cf&&(Qb.kvPairs.push({key:"server.name",value:Bf}),Qb.kvPairs.push({key:"server.version",value:Cf}));var ui={errorMetadata:Qb,stackTrace:ti,logMessage:md};Pb=void 0===Pb?{}:Pb;var Df=Vh;P("ytLoggingEventsDefaultDisabled",!1)&&Vh==Vh&&(Df=null);var vi=Df,W=Pb;W=void 0===W?{}:W;var cb={};cb.eventTimeMs=Math.round(W.timestamp||U());cb.clientError=ui;var wi=String;if(W.timestamp)var Ef=-1;else{var Ff=C("_lact",window);Ef=null==Ff?-1:Math.max(Date.now()-Ff,0)}cb.context={lastActivityMs:wi(Ef)};if(T("log_sequence_info_on_gel_web")&&
W.ca){var xi=cb.context,db=W.ca;Yf[db]=db in Yf?Yf[db]+1:0;xi.sequence={index:Yf[db],groupKey:db};W.Ja&&delete Yf[W.ca]}var yi=cb,Rb=W.Ia,Gf=vi,pd="";if(Rb){var Sb=Rb,qd={};Sb.videoId?qd.videoId=Sb.videoId:Sb.playlistId&&(qd.playlistId=Sb.playlistId);Pf[Rb.token]=qd;pd=Rb.token}var rd=Of.get(pd)||[];Of.set(pd,rd);rd.push(yi);Gf&&(bf=new Gf);var zi=Oe("web_logging_max_batch")||100,Hf=U();rd.length>=zi?Qf():10<=Hf-ef&&(Sf(),ef=Hf);Qf()}}var sd,Ca=ea,eb=Ca.params||{},sa={ra:{a:"logerror",t:"jserror",
type:Ca.name,msg:Ca.message.substr(0,250),line:Ca.lineNumber,level:m,"client.name":eb.name},u:{url:P("PAGE_NAME",window.location.href),file:Ca.fileName},method:"POST"};eb.version&&(sa["client.version"]=eb.version);if(sa.u){Ca.stack&&(sa.u.stack=Ca.stack);for(var If=u(Object.keys(eb)),td=If.next();!td.done;td=If.next()){var Jf=td.value;sa.u["client."+Jf]=eb[Jf]}if(sd=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var Kf=u(Object.keys(sd)),ud=Kf.next();!ud.done;ud=Kf.next()){var Lf=ud.value;
sa.u[Lf]=sd[Lf]}var Mf=P("SERVER_NAME",void 0),Nf=P("SERVER_VERSION",void 0);Mf&&Nf&&(sa.u["server.name"]=Mf,sa.u["server.version"]=Nf)}mg(P("ECATCHER_REPORT_HOST","")+"/error_204",sa);$h.add(ea.message);ai++}}}}}else throw Ia;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function ii(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function ji(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.C={};this.playerInfo={}}
x(Z,Y);p=Z.prototype;p.N=function(){return"/embed/"+S(this.g,"videoId")};
p.M=function(){var a=S(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=S(this.g,"embedConfig")){if(La(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
p.ba=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(La(a))for(var c in a)this.C[c]=a[c];break;case "infoDelivery":ki(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.C={};li(this,a.apiInterface);ki(this,a);break;default:this.K(b,a)}};
function ki(a,b){if(La(b))for(var c in b)a.playerInfo[c]=b[c]}
function li(a,b){H(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:ii(c)?this[c]=function(){this.playerInfo={};
this.C={};hi(this,c,arguments);return this}:ji(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){hi(this,c,arguments);
return this})},a)}
p.getVideoEmbedCode=function(){var a=parseInt(S(this.g,"width"),10),b=parseInt(S(this.g,"height"),10),c=S(this.g,"host")+this.N();vb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(pb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(qb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(rb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(sb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(tb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(ub,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
p.getOptions=function(a){return this.C.namespaces?a?this.C[a].options||[]:this.C.namespaces||[]:[]};
p.getOption=function(a,b){if(this.C.namespaces&&a&&b)return this.C[a][b]};
function mi(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");b&&(b={videoId:b,width:Q(a,"width"),height:Q(a,"height")},new Z(a,b))}}
;function Ai(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
x(Ai,Y);Ai.prototype.N=function(){return"/embed/"+S(this.g,"videoId")};
Ai.prototype.M=function(){return{player:0,thumb_width:S(this.g,"thumbWidth"),thumb_height:S(this.g,"thumbHeight"),thumb_align:S(this.g,"thumbAlign")}};
Ai.prototype.K=function(a,b){Y.prototype.K.call(this,a,b?b.info:void 0)};
function Bi(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");if(b){b={videoId:b,events:{},width:Q(a,"width"),height:Q(a,"height"),thumbWidth:Q(a,"thumb-width"),thumbHeight:Q(a,"thumb-height"),thumbAlign:Q(a,"thumb-align")};var c=Q(a,"onclick");c&&(b.events.onClick=c);new Ai(a,b)}}}
;D("YT.PlayerState.UNSTARTED",-1);D("YT.PlayerState.ENDED",0);D("YT.PlayerState.PLAYING",1);D("YT.PlayerState.PAUSED",2);D("YT.PlayerState.BUFFERING",3);D("YT.PlayerState.CUED",5);D("YT.get",function(a){return Ee[a]});
D("YT.scan",He);D("YT.subscribe",function(a,b,c){Sd.subscribe(a,b,c);Ge[a]=!0;for(var d in Ee)fi(Ee[d],a)});
D("YT.unsubscribe",function(a,b,c){Rd(a,b,c)});
D("YT.Player",Z);D("YT.Thumbnail",Ai);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.qa;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;Fe.push(function(a){a=Ie("player",a);H(a,mi)});
Fe.push(function(){var a=Ie("thumbnail");H(a,Bi)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||He();var Ci=B.onYTReady;Ci&&Ci();var Di=B.onYouTubeIframeAPIReady;Di&&Di();var Ei=B.onYouTubePlayerAPIReady;Ei&&Ei();}).call(this);
