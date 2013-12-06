/*! $.noUiSlider
 @version 5.0.0
 @author Leon Gersen https://twitter.com/LeonGersen
 @license WTFPL http://www.wtfpl.net/about/
 @documentation http://refreshless.com/nouislider/
*/

(function(e){if(e.zepto&&!e.fn.removeData)throw new ReferenceError("Zepto is loaded without the data module.");e.fn.noUiSlider=function(t,n){function f(e,t){return t*100/(e[1]-e[0])}function l(e,t){return f(e,e[0]<0?t+Math.abs(e[0]):t-e[0])}function c(e,t){return t*(e[1]-e[0])/100+e[0]}function h(t){return t instanceof e||e.zepto&&e.zepto.isZ(t)}function p(e){return!isNaN(parseFloat(e))&&isFinite(e)}function d(t,n){e.isArray(t)||(t=[t]),e.each(t,function(){typeof this=="function"&&this.call(n)})}function v(t,n){return function(){var r=[null,null];r[n]=e(this).val(),t.val(r,!0)}}function m(e,t){return Math.round(e/t)*t}function g(e,t){return e=e.toFixed(t.decimals),parseFloat(e)===0&&(e=e.replace("-0","0")),e.replace(".",t.serialization.mark)}function y(e,t,n){if(e.length===1)return e[0];var r=e[0].offset()[n]+e[1].offset()[n];return e[t<r/2?0:1]}function b(e,t){return parseFloat(e.toFixed(t))}function w(t){t.preventDefault();var n=t.type.indexOf("touch")===0,r=t.type.indexOf("mouse")===0,i=t.type.indexOf("pointer")===0,s,o,u=t;t.type.indexOf("MSPointer")===0&&(i=!0),t.originalEvent&&(t=t.originalEvent),n&&(s=t.changedTouches[0].pageX,o=t.changedTouches[0].pageY);if(r||i)!i&&window.pageXOffset===undefined&&(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=document.documentElement.scrollTop),s=t.clientX+window.pageXOffset,o=t.clientY+window.pageYOffset;return e.extend(u,{pointX:s,pointY:o,cursor:r})}function E(e,t,n,r){var i=r.target;return e=e.replace(/\s/g,s+" ")+s,t.on(e,function(e){var t=i.attr("disabled");t=t!==undefined&&t!==null;if(i.hasClass("noUi-state-tap")||t)return!1;n(w(e),r,i.data("base").data("options"))})}function S(t){var n=this.target;if(t===undefined)return this.element.data("value");t===!0?t=this.element.data("value"):this.element.data("value",t);if(t===undefined)return;e.each(this.elements,function(){typeof this=="function"?this.call(n,t):this[0][this[1]](t)})}function x(t,n,r){if(h(n)){var i=[],o=t.data("target");return t.data("options").direction&&(r=r?0:1),n.each(function(){e(this).on("change"+s,v(o,r)),i.push([e(this),"val"])}),i}return typeof n=="string"&&(n=[e('<input type="hidden" name="'+n+'">').appendTo(t).addClass(u[3]).change(function(e){e.stopPropagation()}),"val"]),[n]}function T(t,n,r){var i=[];return e.each(r.to[n],function(e){i=i.concat(x(t,r.to[n][e],n))}),{element:t,elements:i,target:t.data("target"),val:S}}function N(e,t){var n=e.data("target");n.hasClass(u[14])||(t||(n.addClass(u[15]),setTimeout(function(){n.removeClass(u[15])},450)),n.addClass(u[14]),d(e.data("options").block,n))}function C(e,t){var n=e.data("options");t=b(t,7),e.data("target").removeClass(u[14]),e.css(n.style,t+"%").data("pct",t),e.is(":first-child")&&e.toggleClass(u[13],t>50),n.direction&&(t=100-t),e.data("store").val(g(c(n.range,t),n))}function k(e,t){var n=e.data("base"),r=n.data("options"),i=n.data("handles"),s=0,o=100;return p(t)?(r.step&&(t=m(t,r.step)),i.length>1&&(e[0]!==i[0][0]?s=b(i[0].data("pct")+r.margin,7):o=b(i[1].data("pct")-r.margin,7)),t=Math.min(Math.max(t,s),o<0?100:o),t===e.data("pct")?[s?s:!1,o===100?!1:o]:(C(e,t),!0)):!1}function L(e,t,n,r){e.addClass(u[5]),setTimeout(function(){e.removeClass(u[5])},300),k(t,n),d(r,e.data("target")),e.data("target").change()}function A(t,n,r){var i=n.handles,s,o=t[n.point]-n.start[n.point];o=o*100/n.size;if(i.length===1){s=k(i[0],n.positions[0]+o);if(s!==!0){e.inArray(i[0].data("pct"),s)>=0&&N(n.base,!r.margin);return}}else{var u,a,f,l;r.step&&(o=m(o,r.step)),u=f=n.positions[0]+o,a=l=n.positions[1]+o,u<0?(a+=-1*u,u=0):a>100&&(u-=a-100,a=100);if(f<0&&!u&&!i[0].data("pct"))return;if(a===100&&l>100&&i[1].data("pct")===100)return;C(i[0],u),C(i[1],a)}d(r.slide,n.target)}function O(e,t,n){t.handles.length===1&&t.handles[0].data("grab").removeClass(u[4]),e.cursor&&i.css("cursor","").off(s),r.off(s),t.target.removeClass(u[14]+" "+u[20]).change(),d(n.set,t.target)}function M(t,n,o){n.handles.length===1&&n.handles[0].data("grab").addClass(u[4]),t.stopPropagation(),E(a.move,r,A,{start:t,base:n.base,target:n.target,handles:n.handles,positions:[n.handles[0].data("pct"),n.handles[n.handles.length-1].data("pct")],point:o.orientation?"pointY":"pointX",size:o.orientation?n.base.height():n.base.width()}),E(a.end,r,O,{target:n.target,handles:n.handles}),t.cursor&&(i.css("cursor",e(t.target).css("cursor")),n.handles.length>1&&n.target.addClass(u[20]),i.on("selectstart"+s,function(){return!1}))}function _(e,t,n){var r=t.base,i,s,o,u;e.stopPropagation(),n.orientation?(o=e.pointY,u=r.height()):(o=e.pointX,u=r.width()),i=y(r.data("handles"),o,n.style),s=(o-r.offset()[n.style])*100/u,L(r,i,s,[n.slide,n.set])}function D(e,t,n){var r=t.base.data("handles"),i,s;s=n.orientation?e.pointY:e.pointX,s=s<t.base.offset()[n.style],i=s?0:100,s=s?0:r.length-1,L(t.base,r[s],i,[n.slide,n.set])}function P(t,n){function r(e){return e.length!==2?!1:(e=[parseFloat(e[0]),parseFloat(e[1])],!p(e[0])||!p(e[1])?!1:e[1]<e[0]?!1:e)}var i={resolution:function(e,t){switch(e){case 1:case.1:case.01:case.001:case 1e-4:case 1e-5:e=e.toString().split("."),t.decimals=e[0]==="1"?0:e[1].length;break;case undefined:t.decimals=2;break;default:return!1}return!0},mark:function(e,t,n){if(!e)return t[n].mark=".",!0;switch(e){case".":case",":return!0;default:return!1}},to:function(t,n,r){function i(e){return h(e)||typeof e=="string"||typeof e=="function"||e===!1||h(e[0])&&typeof e[0][e[1]]=="function"}function s(t){var n=[[],[]];return i(t)?n[0].push(t):e.each(t,function(e,t){if(e>1)return;i(t)?n[e].push(t):n[e]=n[e].concat(t)}),n}if(!t)n[r].to=[[],[]];else{var o,u;t=s(t),n.direction&&t[1].length&&t.reverse();for(o=0;o<n.handles;o++)for(u=0;u<t[o].length;u++){if(!i(t[o][u]))return!1;t[o][u]||t[o].splice(u,1)}n[r].to=t}return!0}},s={handles:{r:!0,t:function(e){return e=parseInt(e,10),e===1||e===2}},range:{r:!0,t:function(e,t,n){return t[n]=r(e),t[n]&&t[n][0]!==t[n][1]}},start:{r:!0,t:function(t,n,i){return n.handles===1?(e.isArray(t)&&(t=t[0]),t=parseFloat(t),n.start=[t],p(t)):(n[i]=r(t),!!n[i])}},connect:{r:!0,t:function(e,t,n){if(e==="lower")t[n]=1;else if(e==="upper")t[n]=2;else if(e===!0)t[n]=3;else{if(e!==!1)return!1;t[n]=0}return!0}},orientation:{t:function(e,t,n){switch(e){case"horizontal":t[n]=0;break;case"vertical":t[n]=1;break;default:return!1}return!0}},margin:{r:!0,t:function(e,t,n){return e=parseFloat(e),t[n]=f(t.range,e),p(e)}},direction:{r:!0,t:function(e,t,n){switch(e){case"ltr":t[n]=0;break;case"rtl":t[n]=1,t.connect=[0,2,1,3][t.connect];break;default:return!1}return!0}},behaviour:{r:!0,t:function(e,t,n){return t[n]={tap:e!==(e=e.replace("tap","")),extend:e!==(e=e.replace("extend","")),drag:e!==(e=e.replace("drag","")),fixed:e!==(e=e.replace("fixed",""))},!e.replace("none","").replace(/\-/g,"")}},serialization:{r:!0,t:function(e,t,n){return i.to(e.to,t,n)&&i.resolution(e.resolution,t)&&i.mark(e.mark,t,n)}},slide:{t:function(t){return e.isFunction(t)}},set:{t:function(t){return e.isFunction(t)}},block:{t:function(t){return e.isFunction(t)}},step:{t:function(e,t,n){return e=parseFloat(e),t[n]=f(t.range,e),p(e)}}};e.each(s,function(e,r){var i=t[e],s=i!==undefined;if(r.r&&!s||s&&!r.t(i,t,e))throw console&&console.log&&console.group&&(console.group("Invalid noUiSlider initialisation:"),console.log("Option:	",e),console.log("Value:	",i),console.log("Slider(s):	",n),console.groupEnd()),new RangeError("noUiSlider")})}function H(t){return this.data("options",e.extend(!0,{},t)),t=e.extend({handles:2,margin:0,connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"},t),t.serialization=t.serialization||{},P(t,this),t.style=t.orientation?"top":"left",this.each(function(){var n=e(this),r,i,s=[],o,f=e("<div/>").appendTo(n);if(n.data("base"))throw new Error("Slider was already initialized.");n.data("base",f).addClass([u[6],u[16+t.direction],u[10+t.orientation]].join(" "));for(r=0;r<t.handles;r++)o=e("<div><div/></div>").appendTo(f),o.addClass(u[1]),o.children().addClass([u[2],u[2]+u[7+t.direction+(t.direction?-1*r:r)]].join(" ")),o.data({base:f,target:n,options:t,grab:o.children(),pct:-1}).attr("data-style",t.style),o.data({store:T(o,r,t.serialization)}),s.push(o);switch(t.connect){case 1:n.addClass(u[9]),s[0].addClass(u[12]);break;case 3:s[1].addClass(u[12]);case 2:s[0].addClass(u[9]);case 0:n.addClass(u[12])}f.addClass(u[0]).data({target:n,options:t,handles:s}),n.val(t.start);if(!t.behaviour.fixed)for(r=0;r<s.length;r++)E(a.start,s[r].children(),M,{base:f,target:n,handles:[s[r]]});t.behaviour.tap&&E(a.start,f,_,{base:f,target:n}),t.behaviour.extend&&(n.addClass(u[19]),t.behaviour.tap&&E(a.start,n,D,{base:f,target:n})),t.behaviour.drag&&(i=f.find("."+u[9]).addClass(u[18]),t.behaviour.fixed&&(i=i.add(f.children().not(i).data("grab"))),E(a.start,i,M,{base:f,target:n,handles:s}))})}function B(){var t=e(this).data("base"),n=[];return e.each(t.data("handles"),function(){n.push(e(this).data("store").val())}),n.length===1?n[0]:t.data("options").direction?n.reverse():n}function j(t,n){return e.isArray(t)||(t=[t]),this.each(function(){var r=e(this).data("base"),i,s,o=Array.prototype.slice.call(r.data("handles"),0),u=r.data("options");o.length>1&&(o[2]=o[0]),u.direction&&t.reverse();for(s=0;s<o.length;s++){i=t[s%2];if(i===null||i===undefined)continue;e.type(i)==="string"&&(i=i.replace(",",".")),i=l(u.range,parseFloat(i)),u.direction&&(i=100-i),k(o[s],i)!==!0&&o[s].data("store").val(!0),n===!0&&d(u.set,e(this))}})}function F(t){var n=[[t,""]];e.each(t.data("base").data("handles"),function(){n=n.concat(e(this).data("store").elements)}),e.each(n,function(){this.length>1&&this[0].off(s)}),t.removeClass(u.join(" ")),t.empty().removeData("base options")}function I(t){return this.each(function(){var n=e(this).val()||!1,r=e(this).data("options"),i=e.extend({},r,t);n!==!1&&F(e(this));if(!t)return;e(this).noUiSlider(i),n!==!1&&i.start===r.start&&e(this).val(n)})}var r=e(document),i=e("body"),s=".nui",o=e.fn.val,u=["noUi-base","noUi-origin","noUi-handle","noUi-input","noUi-active","noUi-state-tap","noUi-target","-lower","-upper","noUi-connect","noUi-horizontal","noUi-vertical","noUi-background","noUi-stacking","noUi-block","noUi-state-blocked","noUi-ltr","noUi-rtl","noUi-dragable","noUi-extended","noUi-state-drag"],a=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"};return e.fn.val=function(){return this.hasClass(u[6])?arguments.length?j.apply(this,arguments):B.apply(this):o.apply(this,arguments)},(n?I:H).call(this,t)}})(window.jQuery||window.Zepto);