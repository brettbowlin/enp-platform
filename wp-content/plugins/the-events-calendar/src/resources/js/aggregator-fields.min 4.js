var tribe_aggregator=tribe_aggregator||{};tribe_aggregator.fields={selector:{container:".tribe-ea",form:".tribe-ea-form",help:".tribe-ea-help",fields:".tribe-ea-field",dropdown:".tribe-ea-dropdown",origin_field:"#tribe-ea-field-origin",field_url_source:"#tribe-ea-field-url_source",eventbrite_url_source:"#tribe-ea-field-eventbrite_source",post_status:".tribe-ea-field-post_status",import_type_field:".tribe-import-type",media_button:".tribe-ea-media_button",datepicker:".tribe-datepicker",save_credentials_button:".enter-credentials .tribe-save",preview_container:".tribe-preview-container",preview_button:".tribe-preview:visible",refine_filters:".tribe-refine-filters",clear_filters_button:".tribe-clear-filters",finalize_button:".tribe-finalize",cancel_button:".tribe-cancel",schedule_delete_link:".tribe-ea-tab-scheduled a.submitdelete",tab_new:".tribe-ea-tab-new",action:"#tribe-action",view_filters:".tribe-view-filters"},media:{},$:{},construct:{},events:{},import_id:null,result_fetch_count:0,max_result_fetch_count:15,polling_frequency_index:0,polling_frequencies:[500,1e3,5e3,2e4],progress:{},eventbrite:{refineControls:".tribe-refine-filters.eventbrite, .tribe-refine-filters.eventbrite .tribe-refine",refineControlsHideMap:{event:"tr.tribe-refine-filters",organizer:""},detect_type:function(e){if(!tribe_aggregator.source_origin_regexp.eventbrite)return null;var t=tribe_aggregator.source_origin_regexp.eventbrite,r={event:t+"e/[A-z0-9_-]+",organizer:t+"o/[A-z0-9_-]+"},i=void 0;return _.each(r,function(t,r){null!==new RegExp(t,"g").exec(e)&&(i=r)}),i}}},function(e,t,r,i){"use strict";r.init=function(){r.$.container=e(r.selector.container),r.$.form=e(r.selector.form),r.$.action=e(r.selector.action),r.$.fields=r.$.container.find(r.selector.fields),r.$.preview_container=e(r.selector.preview_container),r.origin=e("#tribe-ea-field-origin"),r.importType=e("#tribe-ea-field-url_import_type"),r.urlImport={startDate:e("#tribe-ea-field-url_start"),originalMinDate:function(){return e("#tribe-ea-field-url_start").datepicker("option","minDate")||""}},e.each(r.construct,function(e,t){t(r.$.fields)});var a=e(document.getElementById("eventDetails"));a.data("datepicker_format")&&(tribe_ev.state.datepicker_format=a.data("datepicker_format")),e(document).on("keypress",r.selector.fields,r.events.trigger_field_change).on("click",r.selector.save_credentials_button,r.events.trigger_save_credentials).on("click",r.selector.clear_filters_button,r.clear_filters).on("click",r.selector.finalize_button,r.finalize_manual_import).on("click",r.selector.preview_button,r.preview_import).on("click",r.selector.cancel_button,r.events.cancel_edit).on("click",r.selector.schedule_delete_link,r.events.verify_schedule_delete).on("click",r.selector.view_filters,r.events.toggle_view_filters).on("blur",r.selector.datepicker,r.date_helper).on("submit",r.selector.tab_new,r.events.suppress_submission).on("change",r.selector.import_type_field,function(){r.reset_preview();var t=e(this),i=e(this).next(r.selector.fields),a=t.val();i.val("schedule"===a?"daily":"").trigger("change"),r.$.form.attr("data-type",a),r.maybeLimitUrlStartDate()}).on("change",r.selector.origin_field,function(){var t=e(this),a=(e(this).data("select2"),t.val());r.$.form.attr("data-origin",a),r.reset_preview(),e(".tribe-bumpdown-active").removeClass("tribe-bumpdown-active"),e(".tribe-bumpdown:visible").hide(),"redirect"===e(this).val()&&(window.open("https://theeventscalendar.com/wordpress-event-aggregator/?utm_source=importoptions&utm_medium=plugin-tec&utm_campaign=in-app","_blank"),location.reload()),""!==a&&e(r.selector.post_status).val(i.default_settings[a].post_status).trigger("change"),r.maybeLimitUrlStartDate()}).on("change",r.selector.eventbrite_url_source,function(t){e(r.eventbrite.refineControls).show();var i=r.eventbrite.detect_type(e("#tribe-ea-field-eventbrite_source").val());if(i){var a=r.eventbrite.refineControlsHideMap[i];a&&e(a).hide()}}).on("change",r.selector.field_url_source,function(a){var n=e(this),s=(e(this).data("select2"),n.val()),o=null;if(s&&(t.each(i.source_origin_regexp,function(e,t){null!==new RegExp(e,"g").exec(s)&&(o=t)}),null!=o)){var l=e(r.selector.origin_field);if(l.find('option[value="'+o+'"]').length){var c=e("#tribe-ea-field-url_import_type"),d=c.val(),_=null;"schedule"===d&&(_=e("#tribe-ea-field-url_import_frequency").val()),c.val(""),l.val(o).trigger("change"),e("#tribe-ea-field-"+o+"_import_type").val(d).trigger("change"),"schedule"===d&&e("#tribe-ea-field-"+o+"_import_frequency").val(_).trigger("change"),"eventbrite"===o&&(e("#tribe-ea-field-"+o+"_source_type_url").trigger("click"),e("#tribe-ea-field-"+o+"_import_source").val("source_type_url").trigger("change")),e("#tribe-ea-field-"+o+"_source").val(s).trigger("change")}}}),e(".tribe-dependency").trigger("change"),tribe_timepickers.setup_timepickers(e(tribe_timepickers.selector.timepicker)),"edit"===r.$.action.val()&&(r.$.form.addClass("edit-form"),e(r.selector.finalize_button).html(i.l10n.edit_save)),"object"==typeof tribe_aggregator_save&&r.progress.init()},r.preview_import=function(t){t.preventDefault();var i=e(".tribe-ea-form.tribe-validation");if(r.reset_post_status(),i.trigger("validation.tribe"),!tribe.validation.hasErrors(i)){r.reset_polling_counter();e(".tribe-fetch-warning-message").html("");var a=e("#tribe-post_id");a.data("value",a.val()),a.val("");var n=e("#tribe-import_id");n.data("value",n.val()),n.val("");var s=e(r.selector.preview_button),o=(i=s.closest("form")).serialize();a.val(a.data("value")),n.val(a.data("value")),r.$.preview_container.addClass("tribe-fetching").removeClass("tribe-fetch-error"),r.$.form.removeClass("show-data"),s.prop("disabled",!0);var l=e(".dataTable").data("table");void 0!==l&&l.clear().draw(),"edit"===r.$.action.val()?r.preview_save_import(o):r.create_import(o)}},r.reset_post_status=function(){var t=e(r.selector.origin_field),a=0===t.length?"":t.val();""!==a&&e(r.selector.post_status).val(i.default_settings[a].post_status).trigger("change")},r.reset_polling_counter=function(){r.polling_frequency_index=0,r.result_fetch_count=0},r.reset_form=function(){r.$.fields.val("").trigger("change"),e('[id$="import_frequency"]').val("daily").trigger("change"),r.$.form.removeClass("show-data")},r.reset_preview=function(){r.$.form.removeClass("show-data"),e(".tribe-fetched, .tribe-fetching, .tribe-fetch-error").removeClass("tribe-fetched tribe-fetching tribe-fetch-error")},r.clear_filters=function(){e(r.selector.refine_filters).find("input, select").val("").trigger("change")},r.preview_save_import=function(t){e.ajax({type:"POST",url:ajaxurl+"?action=tribe_aggregator_preview_import",data:t,dataType:"json"}).done(r.handle_preview_create_results)},r.create_import=function(t){e.ajax({type:"POST",url:ajaxurl+"?action=tribe_aggregator_create_import",data:t,dataType:"json"}).done(r.handle_preview_create_results)},r.handle_preview_create_results=function(a){if(!a.success){var n=a.data;return t.isString(n)||(n=n.message),void r.display_fetch_error(["<b>",i.l10n.preview_fetch_error_prefix,"</b>"," "+n].join(" "))}if(r.import_id=a.data.data.import_id,e("#tribe-import_id").val(r.import_id),void 0!==a.data.data.items)return r.init_datatable(a.data.data),void r.$.preview_container.removeClass("tribe-fetching").addClass("tribe-fetched");r.$.container.find(".spinner-message").html(i.l10n.preview_polling[0]),setTimeout(r.poll_for_results,r.polling_frequencies[r.polling_frequency_index])},r.poll_for_results=function(){r.result_fetch_count++,e.ajax({type:"GET",url:ajaxurl+"?action=tribe_aggregator_fetch_import&import_id="+r.import_id,dataType:"json"}).done(function(t){if(void 0!==t.data.warning&&t.data.warning){var a=t.data.warning;r.display_fetch_warning(["<b>",i.l10n.preview_fetch_warning_prefix,"</b>"," "+a].join(" "))}var n;if(!t.success)return void 0!==t.data.message?n=t.data.message:void 0!==t.data[0].message&&(n=t.data[0].message),void r.display_fetch_error(["<b>",i.l10n.preview_fetch_error_prefix,"</b>"," "+n].join(" "));"error"===t.data.status?r.display_fetch_error(t.data.message):"success"!==t.data.status?(r.result_fetch_count>r.max_result_fetch_count&&(r.polling_frequency_index++,r.$.container.find(".spinner-message").html(i.l10n.preview_polling[r.polling_frequency_index]),r.result_fetch_count=0),void 0===r.polling_frequencies[r.polling_frequency_index]?r.display_fetch_error(i.l10n.preview_timeout):setTimeout(r.poll_for_results,r.polling_frequencies[r.polling_frequency_index])):(t.data.data.items=t.data.data.events,r.init_datatable(t.data.data),r.$.preview_container.removeClass("tribe-fetching").addClass("tribe-fetched"),e(r.selector.preview_button).prop("disabled",!1))})},r.init_datatable=function(t){var a=!1,n="csv"===(x=e(r.selector.origin_field).val()),s=e('[id$="import_type"]:visible'),o="manual";if(void 0!==i.default_settings[x])for(var l in i.default_settings[x]){if(i.default_settings[x].hasOwnProperty(l))e("#tribe-ea-field-"+l).val(i.default_settings[x][l]).trigger("change")}if(s.length&&(o=e("#"+s.first().attr("id").replace("s2id_","")).val()),"manual"!==o||t.items.length){s.length&&"manual"!==o||(a=!0);var c=r.$.preview_container.find(".data-container table"),d=[];for(var _ in t.items){var p=t.items[_];p.checkbox=a?'<input type="checkbox">':"",p.all_day?p.start_time=i.l10n.all_day:(void 0!==p.start_meridian&&p.start_meridian||(parseInt(p.start_hour,10)>11?p.start_meridian=i.l10n.pm:p.start_meridian=i.l10n.am),p.start_hour>12&&(p.start_hour=p.start_hour-12),p.start_time=(0===parseInt(p.start_hour,10)?12:p.start_hour)+":"+("00"+p.start_minute).slice(-2),p.start_time+=" "+p.start_meridian),d.push(p)}a&&!n?c.addClass("display-checkboxes"):c.removeClass("display-checkboxes"),r.$.form.addClass("show-data");var u,g={lengthMenu:[[5,10,25,50,-1],[5,10,25,50,tribe_l10n_datatables.pagination.all]],order:[[1,"asc"]],columnDefs:[{cellType:"th",className:"check-column",orderable:!1,targets:0}],data:d};if(void 0!==t.columns){g.columns=[{data:"checkbox"}];var f=c.find("thead tr"),v=c.find("tfoot tr"),m=e({}),b="",h="";if(f.find("th:first").nextAll().remove(),v.find("th:first").nextAll().remove(),n){var w=c.closest(".data-container");c.closest(".data-container").addClass("csv-data"),w.find(".tribe-preview-message .tribe-csv-filename").html(e("#tribe-ea-field-csv_file_name").text()),f.closest("thead").prepend('<tr class="tribe-column-map"><th scope="row" class="check-column column-cb"></th></tr>'),m=e(".tribe-column-map"),h=(h=e("#tribe-ea-field-csv_content_type").val()).replace("tribe_",""),b=e("#tribe-csv-column-map-"+h).html()}var y=0;for(_ in t.columns){if(g.columns.push({data:t.columns[_]}),f.append('<th scope="col">'+t.columns[_]+"</th>"),v.append('<th scope="col">'+t.columns[_]+"</th>"),n){var $=t.columns[_].toLowerCase().replace(/^\s+|\s+$/g,"").replace(/\s/g,"_").replace(/[^a-z0-9_]/g,"");m.append('<th scope="col">'+b.replace('name="column_map[]"','name="aggregator[column_map]['+y+']" id="column-'+y+'"')+"</th>");var k=m.find("#column-"+y);void 0!==i.csv_column_mapping[h][y]&&($=i.csv_column_mapping[h][y]),k.find('option[value="'+$+'"]').prop("selected",!0)}y++}g.scrollX=!0}else g.columns=[{data:"checkbox"},{data:"start_date"},{data:"start_time"},{data:"end_date"},{data:"title"}],g.autoWidth=!1;c.tribeDataTable(g),r.wrap_cell_content(),c.on("select.dt",r.events.twiddle_finalize_button_text).on("deselect.dt",r.events.twiddle_finalize_button_text).on("draw.dt",r.wrap_cell_content),"new"===r.$.action.val()&&(u="manual"===o&&n?i.l10n.import_all_no_number:"manual"===o?i.l10n.import_all.replace("%d",d.length):i.l10n.create_schedule),e(r.selector.finalize_button).html(u)}else{var x=t.origin,C=void 0!==i.l10n[x]&&void 0!==i.l10n[x].no_results?i.l10n[x].no_results:i.l10n.no_results;r.display_fetch_error(C)}},r.wrap_cell_content=function(){e(".dataTable").find("tbody td").each(function(){var t=e(this);t.html('<div class="tribe-td-height-limit">'+t.html()+"</div>")})},r.display_fetch_error=function(t){var i=e(".tribe-fetch-error-message");r.$.preview_container.removeClass("tribe-fetching").addClass("tribe-fetch-error"),i.html(""),r.display_error(i,t),e(r.selector.preview_button).prop("disabled",!1)},r.display_fetch_warning=function(t){var i=e(".tribe-fetch-warning-message");r.$.preview_container.removeClass("tribe-fetching").addClass("tribe-fetch-warning"),i.html(""),r.display_warning(i,t)},r.display_error=function(e,t){e.prepend(['<div class="notice notice-error">',"<p>",t,"</p>","</div>"].join(""))},r.display_warning=function(e,t){e.prepend(['<div class="notice notice-warning">',"<p>",t,"</p>","</div>"].join(""))},r.display_success=function(e,t){e.prepend(['<div class="notice notice-success">',"<p>",t,"</p>","</div>"].join(""))},r.save_credentials=function(t){var r=t.find(".tribe-fieldset").find("input").serialize(),i=ajaxurl+"?action=tribe_aggregator_save_credentials";e.post(i,r).done(function(e){e.success&&(t.addClass("credentials-entered"),t.find('[name="has-credentials"]').val(1).trigger("change"))})},r.finalize_manual_import=function(){var t=e("#tribe-ea-field-origin").val(),a=e(".dataTable"),n=window.tribe_data_table;if(a.hasClass("display-checkboxes")){var s=n.rows({selected:!0});if(s[0].length||(s=n.rows()),!s[0].length)return void r.display_error(e(".tribe-finalize-container"),i.l10n.events_required_for_manual_submit);var o=s.data(),l=[],c=null;if("meetup"===t?c="meetup_id":"eventbrite"===t?c="eventbrite_id":"ical"===t||"ics"===t||"gcal"===t?c="uid":"url"===t&&(c="id"),null!==c){for(var d in o)isNaN(d)||void 0!==o[d][c]&&l.push(o[d][c]);e("#tribe-selected-rows").text(JSON.stringify(l))}else e("#tribe-selected-rows").text("all")}else e("#tribe-selected-rows").text("all");e(".dataTables_scrollBody").find('[name^="aggregator[column_map]"]').remove(),r.$.form.trigger("submit")},r.search_id=function(e){var t=null;return void 0!==e.id?t=e.id:void 0!==e.ID?t=e.ID:void 0!==e.value&&(t=e.value),null==e?null:t},r.construct.dropdown=function(t){var r=function(t){var r=e(t.element);return"string"==typeof r.data("subtitle")&&(t.text=t.text+'<br><span class="tribe-dropdown-subtitle">'+r.data("subtitle")+"</span>"),t.text},i={formatResult:r,formatSelection:r};return tribe_dropdowns.dropdown(t.filter(".tribe-ea-dropdown"),i),t},r.construct.media_button=function(t){var i=t.filter(r.selector.media_button);return"undefined"!=typeof wp&&wp.media&&wp.media.editor?(i.each(function(){var t=e(this),i=t.data("input"),a=e("#"+i),n=e("#"+i+"_name"),s=r.media[i]=wp.media({title:t.data("mediaTitle"),library:{type:t.data("mimeType")},multiple:!1});s.on("select",function(){var e=s.state().get("selection");e&&e.each(function(e){a.data({id:e.attributes.id,text:e.attributes.title}),a.val(e.attributes.id),a.trigger("change"),n.html(e.attributes.filename),n.attr("title",e.attributes.filename)})})}),r.$.container.on("click",r.selector.media_button,function(t){if(t.preventDefault(),e(this).is(":visible")){var i=e(this).data("input");return r.media[i].open(i),!1}}),i):i},r.events.trigger_field_change=function(){e(this).trigger("change")},r.events.trigger_save_credentials=function(){r.save_credentials(e(this).closest(".enter-credentials"))},r.events.suppress_submission=function(t){e("#tribe-ea-field-origin").val();if(e("#tribe-selected-rows").val().length)return!0;t.preventDefault()},r.events.twiddle_finalize_button_text=function(t,a){if("new"===r.$.action.val()){var n=a.rows({selected:!0})[0].length,s=i.l10n.import_checked;n||(s=i.l10n.import_all,n=a.rows()[0].length),s=s.replace("%d",n),e(r.selector.finalize_button).html(s)}},r.events.cancel_edit=function(e){e.preventDefault();var t=window.location.href;t=(t=t.replace("tab=edit","tab=scheduled")).replace(/id=\d+/,""),window.location.href=t},r.events.verify_schedule_delete=function(){return confirm(i.l10n.verify_schedule_delete)},r.events.toggle_view_filters=function(t){t.preventDefault();var r=e(this);r.toggleClass("tribe-active"),r.is(".tribe-active")?r.html(i.l10n.hide_filters):r.html(i.l10n.view_filters)},r.progress.init=function(){r.progress.data={},r.progress.$={},r.progress.$.notice=e(".tribe-notice-aggregator-update-msg"),r.progress.$.spinner=r.progress.$.notice.find("img"),r.progress.$.progress=r.progress.$.notice.find(".progress"),r.progress.$.tracker=r.progress.$.notice.find(".tracker"),r.progress.$.created=r.progress.$.tracker.find(".track-created .value"),r.progress.$.updated=r.progress.$.tracker.find(".track-updated .value"),r.progress.$.skipped=r.progress.$.tracker.find(".track-skipped .value"),r.progress.$.remaining=r.progress.$.tracker.find(".track-remaining .value"),r.progress.$.bar=r.progress.$.notice.find(".bar"),r.progress.data.time=Date.now(),r.progress.hasHeartBeat="undefined"!=typeof wp&&wp.heartbeat,r.progress.hasHeartBeat&&wp.heartbeat.interval(15),setTimeout(r.progress.start)},r.progress.start=function(){"object"==typeof tribe_aggregator_save&&(r.progress.update(tribe_aggregator_save.progress,tribe_aggregator_save.progressText),r.progress.hasHeartBeat||r.progress.send_request())},r.progress.continue=!0,e(document).on("heartbeat-send",function(e,t){"object"==typeof tribe_aggregator_save&&r.progress.continue&&(t.ea_record=tribe_aggregator_save.record_id)}),e(document).on("heartbeat-tick",function(e,t){t.ea_progress&&r.progress.handle_response(t.ea_progress)}),r.progress.handle_response=function(e){e.html&&r.progress.data.notice.html(e.html),isNaN(parseInt(e.progress,10))||r.progress.update(e),r.progress.continue=e.continue,e.continue&&!r.progress.hasHeartBeat&&setTimeout(r.progress.send_request,15e3),e.error?(r.progress.$.notice.find(".tribe-message").html(e.error_text),r.progress.$.tracker.remove(),r.progress.$.notice.find(".progress-container").remove(),r.progress.$.notice.removeClass("warning").addClass("error")):e.complete&&(r.progress.$.notice.find(".tribe-message").html(e.complete_text),r.progress.$.tracker.remove(),r.progress.$.notice.find(".progress-container").remove(),r.progress.$.notice.removeClass("warning").addClass("completed"))},r.progress.send_request=function(){var t={record:tribe_aggregator_save.record_id,check:tribe_aggregator_save.check,action:"tribe_aggregator_realtime_update"};e.post(ajaxurl,t,r.progress.handle_response,"json")},r.progress.update=function(e){var t=parseInt(e.progress,10);if(!(t<0||t>100)&&void 0!==e.counts){var i=["created","updated","skipped"];for(var a in i)if(e.counts[i[a]]){var n=e.counts[i[a]],s=r.progress.$[i[a]];if("updated"===i[a]||"skipped"===i[a])n>(s?s.html():0)&&s.html(n);else s.html(n);r.progress.$.tracker.hasClass("has-"+i[a])||r.progress.$.tracker.addClass("has-"+i[a])}r.progress.$.bar.css("width",t+"%"),r.progress.$.progress.attr("title",e.progress_text)}},r.progress.remove_notice=function(){r.progress.$.notice.animate({opacity:0,height:"toggle"},1e3,function(){r.progress.$.notice.remove()})},r.date_helper=function(){var t;if((t=e(this)).hasClass("tribe-datepicker")){var r=t.val();if(""!==r&&null!==r){var i=t.attr("id").match("tribe-ea-field-(.*)_start")[1];""!==i&&null!==i&&jQuery("#tribe-date-helper-date-"+i).html(r)}}},r.maybeLimitUrlStartDate=function(){"url"===r.origin.val()&&("schedule"!==r.importType.val()?r.urlImport.startDate.data("datepicker-min-date",null):r.urlImport.startDate.data("datepicker-min-date","today"))},e(r.init)}(jQuery,_,tribe_aggregator.fields,tribe_aggregator);