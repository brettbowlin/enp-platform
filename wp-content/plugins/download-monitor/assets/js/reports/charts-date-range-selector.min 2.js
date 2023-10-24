jQuery.fn.extend({dlm_reports_date_range:function(t,e,a){return new DLM_Reports_Date_Range_Selector(this,t,e,a),this}});var DLM_Reports_Date_Range_Selector=function(t,e,a,n){this.container=t,this.startDate=new Date(e),this.endDate=new Date(a),this.url=n.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(e)}),this.el=null,this.opened=!1,this.startDateInput=null,this.endDateInput=null,this.setup=function(){var t=this;this.container.click(function(){return t.toggleDisplay(),!1})},this.setup()};DLM_Reports_Date_Range_Selector.prototype.toggleDisplay=function(){this.opened?this.hide():this.display()},DLM_Reports_Date_Range_Selector.prototype.display=function(){this.opened||(this.opened=!0,this.el=this.createElement(),this.container.append(this.el))},DLM_Reports_Date_Range_Selector.prototype.hide=function(){this.opened=!1,this.el.remove()},DLM_Reports_Date_Range_Selector.prototype.apply=function(){var t=new Date(this.startDateInput.val()+"T00:00:00"),e=new Date(this.endDateInput.val()+"T00:00:00"),a=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();this.hide(),window.location.replace(this.url+"&date_from="+a+"&date_to="+n)},DLM_Reports_Date_Range_Selector.prototype.createElement=function(){var t=this,e=jQuery("<div>").addClass("dlm_rdrs_overlay"),a=jQuery("<div>").addClass("dlm_rdrs_date").attr("id","dlm_rdrs_date_start"),n=jQuery("<div>").addClass("dlm_rdrs_date").attr("id","dlm_rdrs_date_end");this.startDateInput=jQuery("<input>").attr("type","hidden"),this.endDateInput=jQuery("<input>").attr("type","hidden");var r=jQuery("<div>").addClass("dlm_rdrs_actions"),i=jQuery("<a>").addClass("button").html("Apply").click(function(){return t.apply(),!1});return r.append(i),e.append(a).append(n).append(r).append(this.startDateInput).append(this.endDateInput),a.datepicker({inline:!0,altField:this.startDateInput,dateFormat:"yy-mm-dd",defaultDate:this.startDate}),n.datepicker({inline:!0,altField:this.endDateInput,dateFormat:"yy-mm-dd",defaultDate:this.endDate}),e.click(function(){return!1}),e};