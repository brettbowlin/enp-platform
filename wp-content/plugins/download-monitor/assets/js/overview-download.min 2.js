!function(p){var d=inlineEditPost.edit;inlineEditPost.edit=function(e){d.apply(this,arguments);var t=0;if("object"==typeof e&&(t=parseInt(this.getId(e))),0<t){var n=p("#edit-"+t),i=p("#post-"+t),o="Yes"==p(".column-featured",i).text(),r="Yes"==p(".column-members_only",i).text(),c="Yes"==p(".column-redirect_only",i).text();p(':input[name="_featured"]',n).prop("checked",o),p(':input[name="_members_only"]',n).prop("checked",r),p(':input[name="_redirect_only"]',n).prop("checked",c)}}}(jQuery);