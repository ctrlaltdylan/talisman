webpackJsonp([4],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=r(o),u=n(14),a=n(29),s=r(a),f=n(95),l=r(f),c=n(384),d=n(385),p=r(d),y=function(e){var t=(0,l.default)(e),n=new c.LegalipyTokenizer;return n.train(t),n.finalize(),n.tokenize.bind(n)},h='This is some training text: "History is the discovery, collection, organization, analysis, and presentation of information about past events. History can also mean a continuous, typically chronological record of important or public events or of a particular trend or institution. Scholars who write about history are called historians. It is a field of knowledge which uses a narrative to examine and analyse the sequence of events, and it sometimes attempts to objectively investigate the patterns of cause and effect that determine events. Historians debate the nature of history and its usefulness. This includes discussing the study of the discipline as an end in itself and as a way of providing "perspective" on the problems of the present. The stories common to a particular culture but not supported by external sources (such as the legends surrounding King Arthur) are usually classified as cultural heritage rather than as the "disinterested investigation" needed by the discipline of history. Events of the past prior to written record are considered prehistory."';(0,u.render)(i.default.createElement(s.default,{tokenizer:y,trained:!0,training:h}),document.getElementById("legalipy-mount")),(0,u.render)(i.default.createElement(s.default,{tokenizer:p.default}),document.getElementById("sonoripy-mount"))},3:function(e,t,n){"use strict";var r=n(15),o=r.Symbol;e.exports=o},7:function(e,t){"use strict";function n(e,t){var n=[];if(!e.global){var r=e.exec(t);return r&&n.push(r),n}for(var o=void 0;o=e.exec(t);)n.push(o);return e.lastIndex=0,n}function r(e){return"string"==typeof e?e.split(""):e}function o(e){for(var t="string"==typeof e,n=r(e),o=[n[0]],i=1,u=n.length;i<u;i++)n[i]!==n[i-1]&&o.push(n[i]);return t?o.join(""):o}function i(e,t){var n={};if(e=e.split(""),t=t.split(""),e.length!==t.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var r=0,o=e.length;r<o;r++)n[e[r]]=t[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.findall=n,t.seq=r,t.squeeze=o,t.translation=i},15:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(20),i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,u=o||i||Function("return this")();e.exports=u},17:function(e,t,n){"use strict";function r(e){return null==e?void 0===e?s:a:f&&f in Object(e)?i(e):u(e)}var o=n(3),i=n(21),u=n(22),a="[object Null]",s="[object Undefined]",f=o?o.toStringTag:void 0;e.exports=r},18:function(e,t){"use strict";function n(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},19:function(e,t,n){"use strict";function r(e){if("string"==typeof e)return e;if(u(e))return i(e,r)+"";if(a(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}var o=n(3),i=n(18),u=n(23),a=n(25),s=1/0,f=o?o.prototype:void 0,l=f?f.toString:void 0;e.exports=r},20:function(e,t){(function(t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="object"==("undefined"==typeof t?"undefined":n(t))&&t&&t.Object===Object&&t;e.exports=r}).call(t,function(){return this}())},21:function(e,t,n){"use strict";function r(e){var t=u.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[s]=n:delete e[s]),o}var o=n(3),i=Object.prototype,u=i.hasOwnProperty,a=i.toString,s=o?o.toStringTag:void 0;e.exports=r},22:function(e,t){"use strict";function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},23:function(e,t){"use strict";var n=Array.isArray;e.exports=n},24:function(e,t){"use strict";function n(e){return null!=e&&"object"==("undefined"==typeof e?"undefined":r(e))}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=n},25:function(e,t,n){"use strict";function r(e){return"symbol"==("undefined"==typeof e?"undefined":o(e))||u(e)&&i(e)==a}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(17),u=n(24),a="[object Symbol]";e.exports=r},26:function(e,t,n){"use strict";function r(e){return null==e?"":o(e)}var o=n(19);e.exports=r},28:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.value,n=void 0===t?"":t,r=e.placeholder,o=void 0===r?null:r,i=e.status,a=void 0===i?"default":i,s=e.onChange,f=void 0===s?Function.prototype:s,l=e.faded,c=void 0!==l&&l,d="bar-textarea";return"error"===a?d+=" error":"success"===a&&(d+=" success"),u.default.createElement("div",null,u.default.createElement("textarea",{placeholder:o,onChange:f,value:n,className:a+(c?" faded":"")}),u.default.createElement("span",{className:d}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(1),u=r(i)},29:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),u=n(13),a=n(12),s=r(a),f=n(28),l=r(f),c=(0,u.compose)((0,u.withState)("input","setInput",""),(0,u.withState)("training","setTraining",function(e){return e.training||""})),d=c(function(e){var t=e.tokenizer,n=e.input,r=e.setInput,o=e.training,u=e.setTraining,a=e.textarea,f=void 0!==a&&a,c=e.trained,d=void 0!==c&&c,p=e.flow,y=void 0===p||p,h=f?l.default:s.default,v=void 0;return v=d?n?t(o)(n):[]:n?t(n):[],i.default.createElement("div",{style:{width:"55%"}},i.default.createElement("div",null,d&&i.default.createElement(l.default,{placeholder:"Enter training text here...",value:o,onChange:function(e){return u(e.target.value)},faded:!0}),i.default.createElement(h,{placeholder:"Enter raw text here to test the tokenizer...",value:n,onChange:function(e){return r(e.target.value)}}),i.default.createElement("p",{style:{width:"100%"}},v.map(function(e){return y?i.default.createElement("span",{className:"token",style:{float:"left"}},e):i.default.createElement("div",{className:"token"},e)}))),i.default.createElement("div",{style:{clear:"both"}}))});t.default=d},87:function(e,t){"use strict";function n(e){return e.match(r)||[]}var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=n},89:function(e,t){"use strict";function n(e){return r.test(e)}var r=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=n},90:function(e,t){"use strict";function n(e){return e.match($)||[]}var r="\\ud800-\\udfff",o="\\u0300-\\u036f",i="\\ufe20-\\ufe2f",u="\\u20d0-\\u20ff",a=o+i+u,s="\\u2700-\\u27bf",f="a-z\\xdf-\\xf6\\xf8-\\xff",l="\\xac\\xb1\\xd7\\xf7",c="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",d="\\u2000-\\u206f",p=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",y="A-Z\\xc0-\\xd6\\xd8-\\xde",h="\\ufe0e\\ufe0f",v=l+c+d+p,b="['’]",m="["+v+"]",g="["+a+"]",x="\\d+",S="["+s+"]",z="["+f+"]",w="[^"+r+v+x+s+f+y+"]",E="\\ud83c[\\udffb-\\udfff]",j="(?:"+g+"|"+E+")",k="[^"+r+"]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",T="[\\ud800-\\udbff][\\udc00-\\udfff]",q="["+y+"]",O="\\u200d",A="(?:"+z+"|"+w+")",M="(?:"+q+"|"+w+")",L="(?:"+b+"(?:d|ll|m|re|s|t|ve))?",C="(?:"+b+"(?:D|LL|M|RE|S|T|VE))?",F=j+"?",P="["+h+"]?",N="(?:"+O+"(?:"+[k,_,T].join("|")+")"+P+F+")*",Z="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",I="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",R=P+F+N,H="(?:"+[S,_,T].join("|")+")"+R,$=RegExp([q+"?"+z+"+"+L+"(?="+[m,q,"$"].join("|")+")",M+"+"+C+"(?="+[m,q+A,"$"].join("|")+")",q+"?"+A+"+"+L,q+"+"+C,I,Z,x,H].join("|"),"g");e.exports=n},91:function(e,t,n){"use strict";function r(e,t,n){return e=u(e),t=n?void 0:t,void 0===t?i(e)?a(e):o(e):e.match(t)||[]}var o=n(87),i=n(89),u=n(26),a=n(90);e.exports=r},95:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(91),i=r(o);t.default=i.default,e.exports=t.default},270:function(e,t,n){"use strict";function r(e){var t={};e=(0,s.seq)(e);for(var n=0,r=e.length;n<r;n++){var o=e[n];t[o]||(t[o]=0),t[o]++}return t}function o(e){var t=void 0,n=void 0;if("object"!==("undefined"==typeof e?"undefined":a(e))||Array.isArray(e))n=e.length,t=r(e);else{t=e,n=0;for(var o in t)n+=t[o]}var i={};for(var u in t)i[u]=t[u]/n;return i}function i(e,t){t=(0,s.seq)(t);var n=r(t);for(var o in e)n[o]=(n[o]||0)+e[o];return n}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!1}),t.relative=t.absolute=void 0;var a="function"==typeof Symbol&&"symbol"===u(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":u(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":u(e)};t.updateFrequencies=i;var s=n(7);t.default=r,t.absolute=r,t.relative=o,e.exports=t.default,t.default.updateFrequencies=t.updateFrequencies,t.default.absolute=t.absolute,t.default.relative=t.relative},384:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){return e.toLowerCase().replace(l,"").replace(/\d/g,"")}function i(e){var t=new d;t.train(e),t.finalize();for(var n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t.tokenize(e[r]);return n}Object.defineProperty(t,"__esModule",{value:!1}),t.LegalipyTokenizer=void 0,t.default=i;var u=n(270),a="aeiouyàáâäæãåāèéêëēėęîïíīįìôöòóœøōõûüùúūůÿ",s=new RegExp("["+a+"]","g"),f=new Set(a),l=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g,c=2e-4,d=t.LegalipyTokenizer=function(){function e(){r(this,e),this.frequencies={},this.onsets=new Set,this.finalized=!1}return e.prototype.train=function(e){if(this.finalized)throw new Error("talisman/tokenizers/syllables/legalipy.train: the tokenizer has already finalized its training.");for(var t=[],n=0,r=e.length;n<r;n++){var i=o(e[n]);if(i){for(var a="",s=0,l=i.length;s<l;s++){var c=i[s];if(f.has(c))break;a+=c}a&&t.push(a)}}return this.frequencies=(0,u.updateFrequencies)(this.frequencies,t),this},e.prototype.finalize=function(){var e=this;this.finalized=!0,this.frequencies=(0,u.relative)(this.frequencies);for(var t in this.frequencies)this.frequencies[t]>c&&this.onsets.add(t);return this.onsets.forEach(function(t){t.length>2&&e.onsets.add(t.slice(-2)),t.length>3&&e.onsets.add(t.slice(-3))}),this.frequencies=null,this},e.prototype.tokenize=function(e){if(!this.finalized)throw new Error("talisman/tokenizers/syllables/legalipy.train: you should finalize the tokenizer's training before being able to tokenize.");var t=(e.match(s)||[]).length,n=[];if(t<=1)n.push(e);else{for(var r="",o=!1,i=!0,u=e.length-1;u>=0;u--){var a=e[u],l=a.toLowerCase(),c=r.toLowerCase();if(i){if(r=a+c,f.has(l)){i=!1;continue}}else i||(c?this.onsets.has(l)&&f.has(c[0])||this.onsets.has(l+c[0])&&f.has(c[1])||this.onsets.has(l+c.slice(0,2))&&f.has(c[2])||this.onsets.has(l+c.slice(0,3))&&f.has(c[3])?(r=a+c,o=!0):f.has(l)&&!o?r=a+c:f.has(l)&&o?(n.unshift(c),r=a):(n.unshift(c),r=a,i=!0):r=a+c)}n.unshift(r)}return n},e.prototype.export=function(){return{onsets:Array.from(this.onsets)}},e.prototype.toJSON=function(){return this.export()},e.prototype.import=function(e){this.finalize(),this.onsets=new Set(e.onsets)},e}();e.exports=t.default,t.default.LegalipyTokenizer=t.LegalipyTokenizer},385:function(e,t){"use strict";function n(e){return e.replace(/(?:^[.:;?!()'"]+)|(?:[.:;?!()'"]+$)/g,"")}function r(e,t){for(var n=[],r="",o=0,i=t.length;o<i;o++){var u=t[o];e.test(u)?n.length?n.push(u):n.push(r+u):n.length?n=n.slice(0,-1).concat(n.slice(-1)+u):r+=u}return n}function o(e){e=e||{};var t=e.hierarchy;if(!t)throw new Error("talisman/tokenizers/syllables/sonoripy: a hierachy must be provided.");var o=t[0],i=new Set(o),u={};t.forEach(function(e,n){var r=e.split(""),o=t.length-n-1;r.forEach(function(e){return u[e]=o})});var a=new RegExp("["+o+"]");return function(e){for(var t=n(e),o=0,s=[],f=0,l=t.length;f<l;f++){var c=t[f],d=c.toLowerCase();i.has(d)&&o++,s.push([c,u[c]||0])}var p=[];if(o<=1)return[e];for(var y=s[0][0],h=1,v=s.length;h<v;h++){var b=s[h],m=b[0],g=b[1],x=(s[h-1]||[])[1],S=(s[h+1]||[])[1];h===v-1?(y+=m,p.push(y)):g===S&&g===x||g===S&&g<x?(y+=m,p.push(y),y=""):g<S&&g<x?(p.push(y),y=m):y+=m}var z=r(a,p);return z}}Object.defineProperty(t,"__esModule",{value:!1}),t.merge=r,t.createTokenizer=o;var i=["aeiouy","lmnrw","zvsf","bcdgtkpqxhj"],u=o({hierarchy:i});t.default=u,e.exports=t.default,t.default.merge=t.merge,t.default.createTokenizer=t.createTokenizer}});