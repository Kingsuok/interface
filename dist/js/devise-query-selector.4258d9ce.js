(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-query-selector"],{"1af6":function(e,t,r){var s=r("63b6");s(s.S,"Array",{isArray:r("9003")})},"20fd":function(e,t,r){"use strict";var s=r("d9f6"),n=r("aebd");e.exports=function(e,t,r){t in e?s.f(e,t,n(0,r)):e[t]=r}},3702:function(e,t,r){var s=r("481b"),n=r("5168")("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(s.Array===e||a[n]===e)}},"40c3":function(e,t,r){var s=r("6b4c"),n=r("5168")("toStringTag"),a="Arguments"==s(function(){return arguments}()),i=function(e,t){try{return e[t]}catch(r){}};e.exports=function(e){var t,r,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=i(t=Object(e),n))?r:a?s(t):"Object"==(l=s(t))&&"function"==typeof t.callee?"Arguments":l}},"4ee1":function(e,t,r){var s=r("5168")("iterator"),n=!1;try{var a=[7][s]();a["return"]=function(){n=!0},Array.from(a,function(){throw 2})}catch(i){}e.exports=function(e,t){if(!t&&!n)return!1;var r=!1;try{var a=[7],l=a[s]();l.next=function(){return{done:r=!0}},a[s]=function(){return l},e(a)}catch(i){}return r}},"549b":function(e,t,r){"use strict";var s=r("d864"),n=r("63b6"),a=r("241e"),i=r("b0dc"),l=r("3702"),o=r("b447"),u=r("20fd"),c=r("7cd6");n(n.S+n.F*!r("4ee1")(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,n,d,v=a(e),f="function"==typeof this?this:Array,p=arguments.length,y=p>1?arguments[1]:void 0,m=void 0!==y,h=0,b=c(v);if(m&&(y=s(y,p>2?arguments[2]:void 0,2)),void 0==b||f==Array&&l(b))for(t=o(v.length),r=new f(t);t>h;h++)u(r,h,m?y(v[h],h):v[h]);else for(d=b.call(v),r=new f;!(n=d.next()).done;h++)u(r,h,m?i(d,y,[n.value,h],!0):n.value);return r.length=h,r}})},"54a1":function(e,t,r){r("6c1c"),r("1654"),e.exports=r("95d5")},"774e":function(e,t,r){e.exports=r("d2d5")},"7cd6":function(e,t,r){var s=r("40c3"),n=r("5168")("iterator"),a=r("481b");e.exports=r("584a").getIteratorMethod=function(e){if(void 0!=e)return e[n]||e["@@iterator"]||a[s(e)]}},"95d5":function(e,t,r){var s=r("40c3"),n=r("5168")("iterator"),a=r("481b");e.exports=r("584a").isIterable=function(e){var t=Object(e);return void 0!==t[n]||"@@iterator"in t||a.hasOwnProperty(s(t))}},a501:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"dvs-flex dvs-justify-center dvs-p-4 dvs-pb-8  dvs-text-admin-fg  dvs-w-full"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],ref:"filter",staticClass:"dvs-bg-transparent dvs-border-b-2 dvs-px-12 dvs-py-2 dvs-text-admin-fg dvs-outline-none dvs-placeholder-admin-fg dvs-text-center",attrs:{type:"text",placeholder:e.value.label},domProps:{value:e.filter},on:{keyup:e.requestSearch,input:function(t){t.target.composing||(e.filter=t.target.value)}}}),r("div",{staticClass:"dvs-cursor-pointer",class:{"dvs-opacity-50":""===e.filter},on:{click:e.resetSearch}},[r("x-icon")],1)]),r("ul",{staticClass:"dvs-list-reset"},e._l(e.filteredSuggestions,function(t,s){return r("li",{key:s,staticClass:"dvs-bg-admin-bg dvs-shadow hover:dvs-shadow-lg dvs-rounded dvs-my-4 dvs-p-2 dvs-cursor-pointer",on:{click:function(r){return e.selectSuggestion(t)}}},[r("div",{staticClass:"dvs-text-lg dvs-mb-2"},[e._v(e._s(t.displayFields[0].value))]),r("ul",{staticClass:"dvs-list-reset dvs-flex"},e._l(e.subLabelFields(t.displayFields),function(t,s){return r("li",{key:s,staticClass:"dvs-mr-4 dvs-text-xs dvs-leading-tight"},[r("div",{staticClass:"dvs-uppercase dvs-text-xs dvs-text-admin-secondary-fg"},[e._v(e._s(t.label))]),r("div",[e._v(e._s(e.format(t)))])])}),0)])}),0),r("draggable",e._b({staticClass:"dvs-list-reset",attrs:{list:e.selected,tag:"ul"}},"draggable",{group:{name:"g1"},animation:200,ghostClass:"dvs-ghost",handle:".handle",dragClass:"dvs-chosen-drag-slice",emptyInsertThreshold:10,removeCloneOnHide:!1},!1),e._l(e.selected,function(t,s){return r("li",{key:s,staticClass:"dvs-flex dvs-bg-admin-secondary-bg dvs-text-admin-secondary-fg dvs-shadow hover:dvs-shadow-lg dvs-rounded dvs-my-4 dvs-p-4 dvs-cursor-pointer"},[e.modelQuerySettings.allowSort?r("div",{staticClass:"dvs-mr-4 handle"},[r("menu-icon")],1):e._e(),t.displayFields?r("div",{staticClass:"dvs-w-full"},[r("div",{staticClass:"dvs-text-lg dvs-mb-2"},[e._v(e._s(t.displayFields[0].value))]),r("ul",{staticClass:"dvs-list-reset dvs-flex"},e._l(e.subLabelFields(t.displayFields),function(t,s){return r("li",{key:s,staticClass:"dvs-mr-4 dvs-text-xs dvs-leading-tight dvs-w-1/4 dvs-bg-admin-bg dvs-text-admin-fg dvs-rounded dvs-p-3 opacity-75"},[r("div",{staticClass:"dvs-uppercase dvs-text-xs"},[e._v(e._s(t.label))]),r("div",[e._v(e._s(e.format(t)))])])}),0)]):e._e(),r("div",{staticClass:"dvs-cursor-pointer",on:{click:function(r){return e.removeSuggestion(t)}}},[r("x-icon")],1)])}),0)],1)},n=[],a=(r("8e6e"),r("456d"),r("a745")),i=r.n(a);function l(e){if(i()(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var o=r("774e"),u=r.n(o),c=r("c8bb"),d=r.n(c);function v(e){if(d()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return u()(e)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){return l(e)||v(e)||f()}r("ac6a");var y=r("bd86"),m=(r("7514"),r("5a0c")),h=r.n(m),b=r("2f62");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach(function(t){Object(y["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x={name:"DeviseQuerySelectorSearch",components:{draggable:function(){return Promise.all([r.e("devise-editors~devise-media~devise-slices"),r.e("devise-editors")]).then(r.t.bind(null,"310e",7))},XIcon:function(){return r.e("devise-icons").then(r.bind(null,"1a4e"))},MenuIcon:function(){return r.e("devise-icons").then(r.bind(null,"83e1"))}},props:{value:{type:Array,required:!0},modelQuery:{type:Object,required:!0},modelQuerySettings:{type:Object,required:!0}},data:function(){return{filter:null,autosuggest:{data:[]}}},computed:{selected:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},filteredSuggestions:function(){var e=this;return this.autosuggest.data?this.autosuggest.data.filter(function(t){return!e.selected.find(function(e){return t===e})}):[]}},mounted:function(){this.value&&this.value.length>0&&this.requestLegacySelected()},methods:O({},Object(b["b"])("devise",["appGenericSearch","getGeneric"]),{selectSuggestion:function(e){this.selected.push(e),this.resetSearch()},removeSuggestion:function(e){this.resetSearch(),this.selected.splice(this.selected.indexOf(e),1)},resetSearch:function(){this.filter=null,this.$set(this.autosuggest,"data",[])},requestSearch:function(e){var t=this,r=e.target.value;if(""!==r){var s=[];this.selected.forEach(function(e){s.push(e.id)});var n={searchterm:r,selected:s};this.appGenericSearch({config:{apiendpoint:this.modelQuery.params[0].api},filters:n}).then(function(e){t.autosuggest=e.data,e.data.length<1&&window.deviseSettings.$bus.$emit("showMessage",{title:"No Suggestions Found",message:"We couldn't find any data with the term: \"".concat(r,'".')})})}else this.autosuggest=Object.assign({},{})},subLabelFields:function(e){var t=JSON.parse(JSON.stringify(e));return t.shift(),t},format:function(e){return e.dateFormat?h()(e.value).format(e.dateFormat):e.value},requestLegacySelected:function(){var e=this;this.modelQuery.params[0].editApi?this.getGeneric({config:{apiendpoint:this.modelQuery.params[0].editApi,app:!0},filters:{ids:this.value.join(",")}}).then(function(t){e.selected=p(t.data.data)}):console.warn("Devise: You must have an editApi endpoint configured AppServiceProvider ModelQuery::set to edit model slices")}})},j=x,w=r("2877"),_=Object(w["a"])(j,s,n,!1,null,null,null);t["default"]=_.exports},a745:function(e,t,r){e.exports=r("f410")},b0dc:function(e,t,r){var s=r("e4ae");e.exports=function(e,t,r,n){try{return n?t(s(r)[0],r[1]):t(r)}catch(i){var a=e["return"];throw void 0!==a&&s(a.call(e)),i}}},bce6:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("fieldset",{staticClass:"dvs-fieldset"},[r("label",[e._v(e._s(e.value.label))]),r("select",{staticClass:"dvs-w-full",attrs:{type:"text",placeholder:e.value.label},domProps:{value:e.value.value},on:{change:e.updateValue}},[r("option",{domProps:{value:null}},[e._v("Please Select from the Following")]),e._l(e.options,function(t,s){return r("option",{key:s,domProps:{value:s}},[e._v("\n        "+e._s(t)+"\n      ")])})],2)])])},n=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach(function(t){Object(a["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var u={name:"DeviseQuerySelectorSelect",props:{value:{type:Object,required:!0}},data:function(){return{apiOptions:[]}},computed:{options:function(){return this.value.options?this.value.options:this.apiOptions}},mounted:function(){this.value.value=null,this.value.api&&this.requestOptions()},methods:o({},Object(i["b"])("devise",["getGeneric"]),{updateValue:function(e){var t=this.value;t.value=e.target.value,this.$emit("input",t)},requestOptions:function(){var e=this;this.getGeneric({config:{app:!0,apiendpoint:this.value.api}}).then(function(t){e.apiOptions=t.data})}})},c=u,d=r("2877"),v=Object(d["a"])(c,s,n,!1,null,null,null);t["default"]=v.exports},c8bb:function(e,t,r){e.exports=r("54a1")},d2d5:function(e,t,r){r("1654"),r("549b"),e.exports=r("584a").Array.from},dd2b:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("fieldset",{staticClass:"dvs-fieldset"},[r("label",[e._v(e._s(e.value.label))]),r("input",{staticClass:"dvs-w-full",attrs:{type:"text",placeholder:e.value.label},on:{keyup:e.updateValue}})])])},n=[],a={name:"DeviseQuerySelectorText",props:{value:{type:Object,required:!0}},methods:{updateValue:function(e){var t=this.value;t.value=e.target.value,this.$emit("input",t)}}},i=a,l=r("2877"),o=Object(l["a"])(i,s,n,!1,null,null,null);t["default"]=o.exports},dda1:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("fieldset",{staticClass:"dvs-fieldset"},[r("label",[e._v(e._s(e.value.label))]),r("date-picker",{ref:"datepicker",attrs:{settings:{date:!0,time:!0}},on:{change:e.updateValue}})],1)])},n=[],a={name:"DeviseQuerySelectorText",components:{DatePicker:function(){return Promise.all([r.e("devise-editors~devise-media~devise-slices"),r.e("devise-editors")]).then(r.bind(null,"7e6e"))}},props:{value:{type:Object,required:!0}},methods:{updateValue:function(e){var t=this.value;t.value=e,this.$emit("input",t)}}},i=a,l=r("2877"),o=Object(l["a"])(i,s,n,!1,null,null,null);t["default"]=o.exports},e9bb:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dvs-text-admin-fg"},[r("fieldset",{staticClass:"dvs-fieldset"},[r("label",{attrs:{for:"querykey"}},[e._v("Data Set Query")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"w-full",attrs:{id:"querykey",name:"querykey"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.query=t.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("\n        Please Select a Data Set Query\n      ")]),e._l(e.modelQueries,function(t){return r("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.description))])})],2)]),e.selectedModelQuery&&e.selectedModelQuery.params.length>0?r("div",{staticClass:"dvs-mt-6"},e._l(e.selectedModelQuery.params,function(t,s){return r("div",{key:s},["search"===t.type?r("param-search",{attrs:{"model-query":e.selectedModelQuery,"model-query-settings":t},model:{value:e.finalModelQuery.params[s],callback:function(t){e.$set(e.finalModelQuery.params,s,t)},expression:"finalModelQuery.params[key]"}}):e._e(),"text"===t.type?r("param-text",{staticClass:"dvs-mb-4",attrs:{"model-query":e.selectedModelQuery,"model-query-settings":t},model:{value:e.finalModelQuery.params[s],callback:function(t){e.$set(e.finalModelQuery.params,s,t)},expression:"finalModelQuery.params[key]"}}):e._e(),"select"===t.type?r("param-select",{staticClass:"dvs-mb-4",attrs:{"model-query":e.selectedModelQuery,"model-query-settings":t},model:{value:e.finalModelQuery.params[s],callback:function(t){e.$set(e.finalModelQuery.params,s,t)},expression:"finalModelQuery.params[key]"}}):e._e(),"datetime"===t.type?r("param-datetime",{staticClass:"dvs-mb-4",attrs:{"model-query":e.selectedModelQuery,"model-query-settings":t},model:{value:e.finalModelQuery.params[s],callback:function(t){e.$set(e.finalModelQuery.params,s,t)},expression:"finalModelQuery.params[key]"}}):e._e()],1)}),0):e._e()])},n=[],a=(r("8e6e"),r("456d"),r("ac6a"),r("7514"),r("bd86")),i=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach(function(t){Object(a["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var u={name:"QuerySelector",components:{ParamDatetime:function(){return Promise.resolve().then(r.bind(null,"dda1"))},ParamSearch:function(){return Promise.resolve().then(r.bind(null,"a501"))},ParamSelect:function(){return Promise.resolve().then(r.bind(null,"bce6"))},ParamText:function(){return Promise.resolve().then(r.bind(null,"dd2b"))}},props:{value:{type:Object,required:!0}},data:function(){return{query:"",params:[]}},computed:o({},Object(i["e"])("devise",["modelQueries"]),{finalModelQuery:{get:function(){return this.value},set:function(e){this.$emit("input",e)},deep:!0},selectedModelQuery:function(){var e=this;return this.modelQueries.find(function(t){return t.key===e.query})}}),watch:{selectedModelQuery:{handler:function(e){var t=this;e.params.forEach(function(){t.finalModelQuery.params.push([])}),this.finalModelQuery.key=e.key},deep:!0}},mounted:function(){this.value&&this.value.key&&(this.loadPreviousState(),this.loadPreviousParams())},methods:{loadPreviousState:function(){this.$set(this,"query",this.value.key),this.params=Object.assign({},this.value.params)},loadPreviousParams:function(){var e=this,t=[];return this.selectedModelQuery.params.forEach(function(t,r){var s=Object.assign({},t);e.$set(s,"value",e.params[r]),e.selectedModelQuery.params[r]=Object.assign({},s)}),t}}},c=u,d=r("2877"),v=Object(d["a"])(c,s,n,!1,null,null,null);t["default"]=v.exports},f410:function(e,t,r){r("1af6"),e.exports=r("584a").Array.isArray}}]);
//# sourceMappingURL=devise-query-selector.4258d9ce.js.map