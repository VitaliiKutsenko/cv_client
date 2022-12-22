"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[973],{93973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>G});var r,i,o=t(27378),l=t(34791),a=t(51676);function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var c,f,s,m=l.ZP.div(r||(r=u(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  //background: ",";\n  background: linear-gradient(to left, white, rgba(165, 165, 165, 0.49));\n"])),a.rS.colors.mateWhite),p=l.ZP.div(i||(i=u(["\n  display: flex;\n  width: 70%;\n  @media (max-width: 1000px) {\n    & {\n      width: 100%;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"]))),d=t(14935),y=t(68780),b=t(55172);function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var v=l.ZP.div(c||(c=h(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  //background: ",";\n  //background: coral;\n"])),a.rS.colors.mateWhite),g=l.ZP.ul(f||(f=h(["\n  width: 100%;\n  //height: 100%;\n  //height: auto;\n  //min-height: 20px;\n  display: flex;\n  flex-direction: row;\n  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.5);\n\n  & li {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n\n    & button {\n      margin: 10px;\n      padding: 5px;\n      font-size: 16px;\n    }\n  }\n"]))),j=(l.ZP.div(s||(s=h(["\n  //width: 90%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: row;\n"]))),function(e){var n=e.setEdit,t=(0,y.v9)((function(e){return e.userCv||{}})),r=(0,d.s0)();return o.createElement(g,null,o.createElement("li",null,o.createElement("button",{onClick:function(){return n((function(e){return!e}))}},"Edit"),o.createElement("button",{onClick:function(){r("menu",{state:{collectionId:null==t?void 0:t.cv.collectionId}})}},"add")))}),w=t(94380);function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o,l,a=[],u=!0,c=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(a.push(r.value),a.length!==n);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var E=function(e){var n=e.children,t=(0,y.v9)((function(e){return e.auth.checkAuth||{}})),r=x((0,o.useState)("false"),2),i=r[0],l=r[1];return t.success?o.createElement(o.Fragment,null,o.createElement(v,null,o.createElement(j,{setEdit:l})),o.createElement(w.Z.Provider,{value:i},n)):n},S=t(61166),P=t(48262);function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o,l,a=[],u=!0,c=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(a.push(r.value),a.length!==n);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return k(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var C=(0,S.P1)([function(e){return e.userCv||[]}],(function(e){var n={},t={},r=e.cv.data;return Object.entries(r||[]).map((function(e){var r=A(e,2),i=r[0];r[1].map((function(e,r,o){"left"===e.options.area.position&&(n[i]=o),"right"===e.options.area.position&&(t[i]=o)}))})),{leftColumn:n,rightColumn:t}}));function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){D(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function D(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==I(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===I(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o,l,a=[],u=!0,c=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(a.push(r.value),a.length!==n);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var M,$=function(e){var n,t=e.content;return n=t,Object.entries(n||[]).map((function(e){var n=T(e,2),t=n[0];return n[1].map((function(e){return o.createElement(P.L,{key:"".concat(t,"_").concat(e.id),path:t,options:null==e?void 0:e.options,cardContents:Z({},e)})}))}))};var W,F,L,N=function(e){var n=e.content;return o.createElement(_,null,o.createElement($,{content:n}))},_=l.ZP.ul(M||(W=["\n  display: flex;\n  flex-direction: column;\n  //background: rgba(0, 139, 139, 0.57);\n  width: 40%;\n  height: 100%;\n  margin: 10px 10px 0px 10px;\n  padding: 10px;\n  gap: 10px;\n  @media (max-width: 1000px) {\n    & {\n      width: 100%;\n      margin: 0;\n    }\n  }\n"],F||(F=W.slice(0)),M=Object.freeze(Object.defineProperties(W,{raw:{value:Object.freeze(F)}}))));var q=function(e){var n=e.content;return o.createElement(B,null,o.createElement($,{content:n}))},B=l.ZP.ul(L||(L=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  display: flex;\n  flex-direction: column;\n  //background: darkcyan;\n  height: fit-content;\n  width: 60%;\n  margin: 10px 10px 10px 0px;\n  padding: 10px;\n  gap: 10px;\n  @media (max-width: 1000px) {\n    & {\n      width: 100%;\n      margin: 0;\n    }\n  }\n"])));const G=function(){var e=(0,d.UO)(),n=e.username,t=e.name,r=(0,y.v9)((function(e){return e.userCv||{}})),i=(0,y.v9)(C),l=i.rightColumn,a=i.leftColumn,u=(0,y.I0)();if((0,o.useEffect)((function(){n&&t&&u((0,b.zw)({username:n,name:t}))}),[]),r.success)return o.createElement(m,null,o.createElement(E,null,o.createElement(p,null,o.createElement(N,{content:a}),o.createElement(q,{content:l}))),o.createElement(d.j3,null))}}}]);