var tribe_ignore_events=void 0!==tribe_ignore_events?tribe_ignore_events:{};!function(e,t){"use strict";e(function(){e("#tribe-migrate-legacy-events").on("click",function(){var t=e(this),n=t.next(".spinner"),i=t.parents(".notice").eq(0).find(".notice-dismiss"),o=t.parent();n.css({visibility:"visible"}),e.ajax(ajaxurl,{dataType:"json",method:"POST",data:{action:"tribe_convert_legacy_ignored_events"},success:function(t,n){t.status?(o.html(t.text),setTimeout(function(){i.trigger("click")},5e3)):o.before(e("<p>").html(t.text))},complete:function(){n.css({visibility:"hidden"})}})})}),e(function(){return-1===[typeof pagenow,typeof typenow,typeof adminpage].indexOf("undefined")&&("edit-tribe_events"===pagenow&&"tribe_events"===typenow&&"edit-php"===adminpage&&(void 0!==t.archive&&void e("#bulk-action-selector-top, #bulk-action-selector-bottom").each(function(){e(this).append(e("<option>",{value:"delete",text:t.archive.delete_label}))})))}),e(function(){return-1===[typeof pagenow,typeof typenow,typeof adminpage].indexOf("undefined")&&("tribe_events"===pagenow&&"tribe_events"===typenow&&"post-php"===adminpage&&(void 0!==t.single&&(e(".submitdelete").attr("title",t.single.link_title).html(t.single.link_text),void(void 0!==t.single.link_nonce&&(e("#post_status").append(e("<option>",{value:"ignored",text:t.single.link_status}).prop("selected",!0)),e("#post-status-display").html(t.single.link_status),e(".submitdelete").attr("href","post.php?action=delete&post="+t.single.link_post+"&_wpnonce="+t.single.link_nonce))))))})}(jQuery,tribe_ignore_events);