!function(t){t.fn.rating=function(i){i=i||function(){},this.each(function(n,a){t(a).data("rating",{callback:i}).bind("init.rating",t.fn.rating.init).bind("set.rating",t.fn.rating.set).bind("hover.rating",t.fn.rating.hover).trigger("init.rating")})},t.extend(t.fn.rating,{init:function(i){for(var n=t(this),a="",e=null,r=n.children(),s=0,l=r.length;l>s;s++)a=a+'<a class="star" title="'+t(r[s]).val()+'" />',t(r[s]).is(":checked")&&(e=t(r[s]).val());r.hide(),n.append('<div class="stars">'+a+"</div>").trigger("set.rating",e),t("a",n).bind("click",t.fn.rating.click),n.trigger("hover.rating")},set:function(i,n){var a=t(this),e=t("a",a),r=void 0;n&&(e.removeClass("fullStar"),r=e.filter(function(i){return t(this).attr("title")==n?t(this):!1}),r.addClass("fullStar").prevAll().addClass("fullStar"))},hover:function(i){var n=t(this),a=t("a",n);a.bind("mouseenter",function(i){t(this).addClass("tmp_fs").prevAll().addClass("tmp_fs"),t(this).nextAll().addClass("tmp_es")}),a.bind("mouseleave",function(i){t(this).removeClass("tmp_fs").prevAll().removeClass("tmp_fs"),t(this).nextAll().removeClass("tmp_es")})},click:function(i){i.preventDefault();var n=t(i.target),a=n.parent().parent(),e=a.children("input"),r=n.attr("title");matchInput=e.filter(function(i){return t(this).val()==r?!0:!1}),matchInput.attr("checked",!0).trigger("change").siblings("input").attr("checked",!1),a.trigger("set.rating",matchInput.val()).data("rating").callback(r,i)}})}(jQuery);