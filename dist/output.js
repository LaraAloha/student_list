!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1)},function(e,t){angular.module("myApp",["ngAnimate"]).controller("studController",["$scope","$http",function(e,t){let n;t({method:"GET",url:"src/js/index.json"}).then(function(t,o){e.students=t.data,n=Object.assign({},e.students)}),e.checkForms={},e.buttonReturn=function(){storageCopy=Object.assign({},n),e.students=storageCopy},e.buttonDelete=function(){Object.keys(e.students).forEach(function(t){1==e.checkForms[t]&&delete e.students[t]}),e.checkForms={}},e.mainCheckbox=!1,e.$watch("mainCheckbox",function(){if(void 0===e.students)return;Object.keys(e.students).forEach(function(t){e.checkForms[t]=e.mainCheckbox})})}])}]);