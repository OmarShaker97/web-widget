parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
!function(){var e;if(void 0===window.jQuery||"1.4.2"!==window.jQuery.fn.jquery){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"),t.readyState?t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||a()}:t.onload=a,(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(t)}else e=window.jQuery,n();function a(){e=window.jQuery.noConflict(!0),n()}function n(){e(document).ready(function(e){e("<link>",{rel:"stylesheet",type:"text/css",href:"style.css"}).appendTo("head");e.getJSON("data.py?callback=?",function(t){e("#example-widget-container").html("This data comes from another server: "+t.html)})})}}();
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.b0f072c0.js.map