jQuery(function(i){i(".live-date-preview").siblings("input").on("change",function(){var n=i(this),t=n.val(),e=n.siblings(".live-date-preview");e.append("<span class='spinner'></span>"),e.find(".spinner").css("visibility","visible");var a={action:"date_format",date:t};i.post(ajaxurl,a,function(n){n=i("<div/>").html(n).text(),e.html(n)},"text")})});