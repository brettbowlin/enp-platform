jQuery(function(e){e.each(e(".dlm-create-page"),function(e,t){new DLM_Onboarding_CP(t)})});var DLM_Onboarding_CP=function(e){this.el=e,this.page=jQuery(e).data("page"),this.allowAction=!0,this.setup()};DLM_Onboarding_CP.prototype.setup=function(){var e=this;jQuery(this.el).click(function(){e.process()})},DLM_Onboarding_CP.prototype.process=function(){if(!this.allowAction)return!1;this.allowAction=!1;var t=this;jQuery(t.el).html(dlm_onboarding.lbl_creating),jQuery.get(dlm_onboarding.ajax_url_create_page,{page:this.page},function(e){"success"===e.result?(jQuery(t.el).html(dlm_onboarding.lbl_created),jQuery(t.el).removeClass("dlm-create-page").addClass("dlm-page-exists")):(jQuery(t.el).html(dlm_onboarding.lbl_create_page),void 0!==e.error&&alert(e.error),t.allowAction=!0),console.log(e)})};