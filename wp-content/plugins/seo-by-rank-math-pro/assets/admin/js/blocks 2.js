!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=373)}({11:function(e,t){e.exports=wp.components},12:function(e,t){e.exports=wp.element},2:function(e,t){e.exports=wp.i18n},23:function(e,t){e.exports=wp.hooks},358:function(e,t){e.exports=wp.blocks},373:function(e,t,o){"use strict";o.r(t);var n=o(6),a=o(2),r=o(23),l=o(11),s=o(358),i=o(12),p=o(9),u=o(85);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function h(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=g(e);if(t){var a=g(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return y(this,o)}}function y(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w,k,O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(i,e);var t,o,r,s=d(i);function i(){var e;return b(this,i),(e=s.apply(this,arguments)).getAdditionalSettings=e.getAdditionalSettings.bind(f(e)),e.getMapSettings=e.getMapSettings.bind(f(e)),e}return t=i,(o=[{key:"render",value:function(){var e=this,t=this.props,o=t.className,n=t.setAttributes,r=t.attributes,s=t.locationsData,i=t.termsData;return wp.element.createElement("div",{id:"rank-math-local",className:"rank-math-block "+o},wp.element.createElement(u.InspectorControls,{key:"inspector"},wp.element.createElement(l.PanelBody,{title:Object(a.__)("Settings","rank-math-pro"),initialOpen:"true"},wp.element.createElement(l.SelectControl,{label:Object(a.__)("Type","rank-math-pro"),value:r.type,options:[{value:"address",label:Object(a.__)("Address","rank-math-pro")},{value:"opening-hours",label:Object(a.__)("Opening Hours","rank-math-pro")},{value:"map",label:Object(a.__)("Map","rank-math-pro")},{value:"store-locator",label:Object(a.__)("Store Locator","rank-math-pro")}],onChange:function(e){return n({type:e})}}),"store-locator"!==r.type&&wp.element.createElement(l.SelectControl,{label:Object(a.__)("Locations","rank-math-pro"),value:r.locations,options:s,onChange:function(e){return n({locations:e})}}),"store-locator"!==r.type&&wp.element.createElement(l.SelectControl,{label:Object(a.__)("Location Categories","rank-math-pro"),multiple:!0,value:r.terms,options:i,onChange:function(e){return n({terms:e})}}),wp.element.createElement(l.TextControl,{type:"number",label:Object(a.__)("Maximum number of locations to show","rank-math-pro"),value:r.limit,onChange:function(t){return e.props.setAttributes({limit:t})}}),"address"===r.type&&this.getAddressSettings(),"opening-hours"===r.type&&this.getHoursSettings(),"map"===r.type&&this.getMapSettings(),"store-locator"===r.type&&this.getStoreLocatorSettings()),"address"===r.type&&this.getAdditionalSettings("getHoursSettings"),("map"===r.type||"store-locator"===r.type)&&this.getAdditionalSettings("getAddressSettings"),"store-locator"===r.type&&this.getAdditionalSettings("getMapSettings")),this.getBlockContent(r))}},{key:"getBlockContent",value:function(e){return"map"===e.type?wp.element.createElement("img",{src:rankMath.previewImage,alt:Object(a.__)("Preview Image","rank-math-pro")}):wp.element.createElement(l.ServerSideRender,{block:"rank-math/local-business",attributes:e})}},{key:"getAdditionalSettings",value:function(e){var t=Object(a.__)("Address Settings","rank-math-pro");return"getHoursSettings"===e?t=Object(a.__)("Opening Hours Settings","rank-math-pro"):"getMapSettings"===e&&(t=Object(a.__)("Map Settings","rank-math-pro")),wp.element.createElement(l.PanelBody,{title:t},this[e]())}},{key:"getFieldsData",value:function(e){var t=this,o=[];return Object(n.forEach)(e,(function(e,n){"boolean"===e.type&&o.push(wp.element.createElement(l.ToggleControl,{label:e.label,checked:t.props.attributes[n],onChange:function(e){return t.props.setAttributes(h({},n,e))}})),"string"===e.type&&o.push(wp.element.createElement(l.TextControl,{label:e.label,value:t.props.attributes[n],onChange:function(e){return t.props.setAttributes(h({},n,e))}})),"select"===e.type&&o.push(wp.element.createElement(l.SelectControl,{label:e.label,value:t.props.attributes[n],options:e.options,onChange:function(e){return t.props.setAttributes(h({},n,e))}})),"range"===e.type&&o.push(wp.element.createElement(l.RangeControl,{label:e.label,value:t.props.attributes[n],onChange:function(e){return t.props.setAttributes(h({},n,e))},min:e.min,max:e.max}))})),o}},{key:"getMapSettings",value:function(){var e=this,t=[],o="store-locator"===this.props.attributes.type;if(o&&t.push(wp.element.createElement(l.ToggleControl,{label:Object(a.__)("Show Map","rank-math-pro"),checked:this.props.attributes.show_map,onChange:function(t){return e.props.setAttributes({show_map:t})}})),o&&!this.props.attributes.show_map)return t;var n={map_style:{label:Object(a.__)("Map Type","rank-math-pro"),type:"select",options:[{value:"roadmap",label:Object(a.__)("Roadmap","rank-math-pro")},{value:"hybrid",label:Object(a.__)("Hybrid","rank-math-pro")},{value:"satellite",label:Object(a.__)("Satellite","rank-math-pro")},{value:"terrain",label:Object(a.__)("Terrain","rank-math-pro")}]},map_width:{label:Object(a.__)("Map Width","rank-math-pro"),type:"string"},map_height:{label:Object(a.__)("Map Height","rank-math-pro"),type:"string"},show_category_filter:{label:Object(a.__)("Show Category filter","rank-math-pro"),type:"boolean"},zoom_level:{label:Object(a.__)("Zoom Level","rank-math-pro"),type:"range",min:-1,max:19},allow_zoom:{label:Object(a.__)("Allow Zoom","rank-math-pro"),type:"boolean"},allow_scrolling:{label:Object(a.__)("Allow Zoom by scroll","rank-math-pro"),type:"boolean"},allow_dragging:{label:Object(a.__)("Allow Dragging","rank-math-pro"),type:"boolean"},show_marker_clustering:{label:Object(a.__)("Show Marker Clustering","rank-math-pro"),type:"boolean"},show_infowindow:{label:Object(a.__)("Show InfoWindow","rank-math-pro"),type:"boolean"},show_route_planner:{label:Object(a.__)("Show Route Planner","rank-math-pro"),type:"boolean"},route_label:{label:Object(a.__)("Route Label","rank-math-pro"),type:"string"}};return o||(delete n.show_route_planner,delete n.route_label),t.concat(this.getFieldsData(n))}},{key:"getStoreLocatorSettings",value:function(){var e={show_radius:{label:Object(a.__)("Show radius","rank-math-pro"),type:"boolean"},search_radius:{label:Object(a.__)("Search Locations within the radius","rank-math-pro"),type:"range",min:5,max:1e3},show_category_filter:{label:Object(a.__)("Add dropdown to filter results by category","rank-math-pro"),type:"boolean"},show_nearest_location:{label:Object(a.__)("Show nearest location if none is found within radius","rank-math-pro"),type:"boolean"}};return this.getFieldsData(e)}},{key:"getAddressSettings",value:function(){var e={show_company_name:{label:Object(a.__)("Show Company Name","rank-math-pro"),type:"boolean"},show_company_address:{label:Object(a.__)("Show Company Address","rank-math-pro"),type:"boolean"},show_on_one_line:{label:Object(a.__)("Show address on one line","rank-math-pro"),type:"boolean"},show_state:{label:Object(a.__)("Show State","rank-math-pro"),type:"boolean"},show_country:{label:Object(a.__)("Show Country","rank-math-pro"),type:"boolean"},show_telephone:{label:Object(a.__)("Show Primary number","rank-math-pro"),type:"boolean"},show_secondary_number:{label:Object(a.__)("Show Secondary number","rank-math-pro"),type:"boolean"},show_fax:{label:Object(a.__)("Show FAX number","rank-math-pro"),type:"boolean"},show_email:{label:Object(a.__)("Show Email","rank-math-pro"),type:"boolean"},show_url:{label:Object(a.__)("Show Business URL","rank-math-pro"),type:"boolean"},show_logo:{label:Object(a.__)("Show Logo","rank-math-pro"),type:"boolean"},show_vat_id:{label:Object(a.__)("Show VAT number","rank-math-pro"),type:"boolean"},show_tax_id:{label:Object(a.__)("Show TAX ID","rank-math-pro"),type:"boolean"},show_coc_id:{label:Object(a.__)("Show COC number","rank-math-pro"),type:"boolean"},show_priceRange:{label:Object(a.__)("Show Price Indication","rank-math-pro"),type:"boolean"}};return"address"===this.props.attributes.type&&delete e.show_company_address,this.getFieldsData(e)}},{key:"getHoursSettings",value:function(){var e=this,t=[],o=this.props.attributes.type;if("address"===o&&t.push(wp.element.createElement(l.ToggleControl,{label:Object(a.__)("Show Opening Hours","rank-math-pro"),checked:this.props.attributes.show_opening_hours,onChange:function(t){return e.props.setAttributes({show_opening_hours:t})}})),"opening-hours"===o||this.props.attributes.show_opening_hours){var r=this.props.attributes.show_days.split(",");Object(n.forEach)(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],(function(o){t.push(wp.element.createElement(l.ToggleControl,{label:Object(a.sprintf)(Object(a.__)("Show %s","rank-math-pro"),o),checked:r.includes(o),onChange:function(){var t=r.indexOf(o);t>-1?r.splice(t,1):r.push(o),e.props.setAttributes({show_days:r.toString()})}}))})),t.push(wp.element.createElement(l.ToggleControl,{label:Object(a.__)("Hide Closed Days","rank-math-pro"),checked:this.props.attributes.hide_closed_days,onChange:function(t){return e.props.setAttributes({hide_closed_days:t})}})),t.push(wp.element.createElement(l.ToggleControl,{label:Object(a.__)("Show open now label after opening hour for current day","rank-math-pro"),checked:this.props.attributes.show_opening_now_label,onChange:function(t){return e.props.setAttributes({show_opening_now_label:t})}})),this.props.attributes.show_opening_now_label&&t.push(wp.element.createElement(l.TextControl,{label:Object(a.__)("Show open now label after opening hour for current day","rank-math-pro"),value:this.props.attributes.opening_hours_note,onChange:function(t){return e.props.setAttributes({opening_hours_note:t})}}))}return t}}])&&m(t.prototype,o),r&&m(t,r),i}(i.Component),j=Object(p.withSelect)((function(e){var t=e("core").getEntityRecords("postType","rank_math_locations",{per_page:-1}),o=[];t&&(o.push({value:0,label:Object(a.__)("All Locations","rank-math-pro")}),t.forEach((function(e){o.push({value:e.id,label:e.title.rendered})})));var n=e("core").getEntityRecords("taxonomy","rank_math_location_category",{per_page:-1}),r=[];return n&&n.forEach((function(e){r.push({value:e.id,label:e.name})})),{locationsData:o,termsData:r}}))(O);function v(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return S(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}"undefined"==typeof rankMath||Object(n.isUndefined)(rankMath.limitLocations)||(w=[Object(a.__)("Local Business","rank-math-pro"),Object(a.__)("Rank Math","rank-math-pro"),Object(a.__)("Contact","rank-math-pro")],k={type:{type:"string",default:"address"},locations:{type:"string",default:""},terms:{type:"array",default:[]},limit:{type:"string",default:rankMath.limitLocations},show_company_name:{type:"boolean",default:!0},show_company_address:{type:"boolean",default:!0},show_on_one_line:{type:"boolean",default:!1},show_state:{type:"boolean",default:!0},show_country:{type:"boolean",default:!0},show_telephone:{type:"boolean",default:!0},show_secondary_number:{type:"boolean",default:!0},show_fax:{type:"boolean",default:!1},show_email:{type:"boolean",default:!0},show_url:{type:"boolean",default:!0},show_logo:{type:"boolean",default:!0},show_vat_id:{type:"boolean",default:!1},show_tax_id:{type:"boolean",default:!1},show_coc_id:{type:"boolean",default:!1},show_priceRange:{type:"boolean",default:!1},show_opening_hours:{type:"boolean",default:!1},show_days:{type:"string",default:"Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday"},hide_closed_days:{type:"boolean",default:!1},show_opening_now_label:{type:"boolean",default:!1},opening_hours_note:{type:"string",default:"Open Now"},show_map:{type:"boolean",default:!1},map_style:{type:"string",default:rankMath.mapStyle},map_width:{type:"string",default:"100%"},map_height:{type:"string",default:"300px"},zoom_level:{type:"integer",default:-1},allow_zoom:{type:"boolean",default:!0},allow_scrolling:{type:"boolean",default:!0},allow_dragging:{type:"boolean",default:!0},show_route_planner:{type:"boolean",default:!0},route_label:{type:"string",default:""},show_category_filter:{type:"boolean",default:!1},show_marker_clustering:{type:"boolean",default:!0},show_infowindow:{type:"boolean",default:!0},show_radius:{type:"boolean",default:!0},show_nearest_location:{type:"boolean",default:!0},search_radius:{type:"string",default:10}},Object(s.registerBlockType)("rank-math/local-business",{title:Object(a.__)("Local Business by Rank Math","rank-math-pro"),description:Object(a.__)("Rank Math's Local Business block","rank-math-pro"),category:"rank-math-blocks",icon:"editor-ul",label:Object(a.__)("Local Business by Rank Math","rank-math-pro"),keywords:w,attributes:k,edit:j,save:function(){return null}})),Object(r.addFilter)("rank_math_block_howto_attributes","rank-math-pro",(function(e){return e.estimatedCost={type:"string",default:""},e.estimatedCostCurrency={type:"string",default:"USD"},e.supply={type:"string",default:""},e.tools={type:"string",default:""},e.material={type:"string",default:""},e})),Object(r.addFilter)("rank_math_block_howto_data","rank-math-pro",(function(e,t){var o=t.attributes,n=t.setAttributes;return wp.element.createElement(React.Fragment,null,o.hasOwnProperty("estimatedCost")&&wp.element.createElement("div",{className:"rank-math-howto-estimated-cost"},wp.element.createElement(l.TextControl,{label:Object(a.__)("Estimated Cost","rank-math-pro"),className:"rank-math-block-text",value:o.estimatedCostCurrency,placeholder:Object(a.__)("USD","rank-math-pro"),onChange:function(e){n({estimatedCostCurrency:e})}}),wp.element.createElement(l.TextControl,{type:"number",className:"rank-math-block-text",value:o.estimatedCost,placeholder:Object(a.__)("Estimated Cost","rank-math-pro"),onChange:function(e){n({estimatedCost:e})}})),o.hasOwnProperty("supply")&&wp.element.createElement(l.TextareaControl,{label:Object(a.__)("Supply","rank-math-pro"),className:"rank-math-block-textarea",help:Object(a.__)("Add one supply element per line.","rank-math-pro"),value:o.supply,onChange:function(e){n({supply:e})}}),o.hasOwnProperty("tools")&&wp.element.createElement(l.TextareaControl,{label:Object(a.__)("Tools","rank-math-pro"),className:"rank-math-block-textarea",help:Object(a.__)("Add one tool per line.","rank-math-pro"),value:o.tools,onChange:function(e){n({tools:e})}}),o.hasOwnProperty("material")&&wp.element.createElement(l.TextareaControl,{label:Object(a.__)("Material","rank-math-pro"),className:"rank-math-block-textarea",value:o.material,onChange:function(e){n({material:e})}}))}));var C=function(e,t){return function(){var o=t.setAttributes,n=t.index,a=v(t.questions);1===e&&n<a.length-1&&(a[n]=t.questions[n+e],a[n+e]=t.questions[n],o({questions:a})),-1===e&&n>0&&(a[n]=t.questions[n+e],a[n+e]=t.questions[n],o({questions:a}))}};Object(r.addFilter)("rank_math_block_faq_actions","rank-math-pro",(function(e,t){var o=t.questions,n=t.index;if(!(o.length<2))return wp.element.createElement(React.Fragment,null,wp.element.createElement(l.Button,{icon:"arrow-up",className:0===n?"rank-math-item-move move-up rank-math-item-disabled":"rank-math-item-move move-up",title:Object(a.__)("Move up","rank-math-pro"),onClick:C(-1,t)}),wp.element.createElement(l.Button,{icon:"arrow-down",className:n===o.length-1?"rank-math-item-move move-down rank-math-item-disabled ":"rank-math-item-move move-down",onClick:C(1,t),title:Object(a.__)("Move down","rank-math-pro")}))})),Object(r.addFilter)("rank_math_block_schema_attributes","rank-math-pro",(function(e){return e.id={type:"string",default:""},e}))},6:function(e,t){e.exports=lodash},85:function(e,t){e.exports=wp.blockEditor},9:function(e,t){e.exports=wp.data}});