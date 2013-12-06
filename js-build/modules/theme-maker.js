define(["jquery","underscore","colpick","nouislider","icheck","text!tmpl/theme-maker.html"],function(e,t,n,r,i,s){e("body").append(s);var o=function(t){this.defaults={$themeMaker:e(".theme-maker"),$themeContent:e(".theme-maker-content"),$themeTrigger:e(".theme-maker-trigger"),panelWidth:300,panelSlideDuration:800},this.init(t)};return o.prototype.init=function(n){this.conf=e.extend(!0,this.defaults,n);var r=this,i=r.conf,s=i.$themeContent,o=i.$themeTrigger;s.on("click",".list-title",function(){e(this).parent().addClass("active").siblings().removeClass("active")}),o.click(function(){r.trigger()}),t.forEach(i.themeElements,function(e){var t=e.type;switch(t){case"color":r.renderColor(e);break;case"font":break;case"font-size":r.renderSize(e);break;case"font-family":break;case"background":break;case"background-color":r.renderColor(e);break;case"height":r.renderSize(e);break;case"width":r.renderSize(e);break;case"display":r.renderDisplay(e);case"href":r.changeAttr(e)}})},o.prototype.trigger=function(){var e=this,t=e.conf,n=t.$themeMaker,r=t.$themeTrigger,i=0;r.hasClass("show-panel")&&(i="-"+t.panelWidth+"px"),n.animate({left:i},t.panelSlideDuration,function(){r.toggleClass("show-panel")})},o.prototype._change=function(n,r){typeof n=="string"?e(n).css(r):t.forEach(n,function(t){e(t).css(r)})},o.prototype.renderColor=function(t){var n=this,r=this.conf,i={};t.colorPicker?n._showColpicker({target:"."+t.EL,cb:function(e){i[t.type]=e,n._change(t.effectedTarget,i)}}):e(document).on("click","."+t.EL,function(){i[t.type]=e(this).css(t.type),n._change(t.effectedTarget,i)})},o.prototype.renderSize=function(e){var t=this,n={};t._showSlider({target:"."+e.EL,range:e.range,start:e.start,step:e.step||10,cb:function(r){n[e.type]=r,t._change(e.effectedTarget,n)}})},o.prototype.renderDisplay=function(e){var t=this,n=t.conf.$themeContent,r={};n.find("."+e.EL).iCheck({checkboxClass:"icheckbox_minimal-blue"}).on("ifToggled",function(n){n.currentTarget.checked?r[e.type]="block":r[e.type]="none",t._change(n.currentTarget.value,r)})},o.prototype.changeAttr=function(t){var n=this,r=n.conf.$themeContent,i={};r.find("."+t.EL).on("change",function(){var t=e(this);e(t.attr("name")).attr("href",t.val())})},o.prototype._showSlider=function(t){var n=this,r=e(t.target);r.noUiSlider({range:t.range,start:t.start||0,step:t.step||10,handles:t.handles||1,slide:function(){var n=e(t.target).val()*1;r.next().text(n+"px"),t.cb(n)}}).next().text(t.start+"px")},o.prototype._showColpicker=function(t){var n=this,r=e(t.target);r.colpick({onSubmit:function(n,r,i,s){e(s).css("background-color","#"+r).text("#"+r),e(s).colpickHide(),t.cb("#"+r)}})},o});