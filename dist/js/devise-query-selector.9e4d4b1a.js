(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-query-selector"],{"4df4":function(e,t,s){"use strict";var r=s("f8c2"),a=s("7b0b"),n=s("9bdd"),i=s("e95a"),l=s("50c4"),o=s("8418"),u=s("35a1");e.exports=function(e){var t,s,d,c,v,p=a(e),f="function"==typeof this?this:Array,m=arguments.length,y=m>1?arguments[1]:void 0,b=void 0!==y,h=0,g=u(p);if(b&&(y=r(y,m>2?arguments[2]:void 0,2)),void 0==g||f==Array&&i(g))for(t=l(p.length),s=new f(t);t>h;h++)o(s,h,b?y(p[h],h):p[h]);else for(c=g.call(p),v=c.next,s=new f;!(d=v.call(c)).done;h++)o(s,h,b?n(c,y,[d.value,h],!0):d.value);return s.length=h,s}},a501:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"dvs-flex dvs-justify-center dvs-p-4 dvs-pb-8  dvs-text-admin-fg  dvs-w-full"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],ref:"filter",staticClass:"dvs-bg-transparent dvs-border-b-2 dvs-px-12 dvs-py-2 dvs-text-admin-fg dvs-outline-none dvs-placeholder-admin-fg dvs-text-center",attrs:{type:"text",placeholder:e.value.label},domProps:{value:e.filter},on:{keyup:e.requestSearch,input:function(t){t.target.composing||(e.filter=t.target.value)}}}),s("div",{staticClass:"dvs-cursor-pointer",class:{"dvs-opacity-50":""===e.filter},on:{click:e.resetSearch}},[s("x-icon")],1)]),s("ul",{staticClass:"dvs-list-reset"},e._l(e.filteredSuggestions,(function(t,r){return s("li",{key:r,staticClass:"dvs-bg-admin-bg dvs-shadow hover:dvs-shadow-lg dvs-rounded dvs-my-4 dvs-p-2 dvs-cursor-pointer",on:{click:function(s){return e.selectSuggestion(t)}}},[s("div",{staticClass:"dvs-text-lg dvs-mb-2"},[e._v(e._s(t.displayFields[0].value))]),s("ul",{staticClass:"dvs-list-reset dvs-flex"},e._l(e.subLabelFields(t.displayFields),(function(t,r){return s("li",{key:r,staticClass:"dvs-mr-4 dvs-text-xs dvs-leading-tight"},[s("div",{staticClass:"dvs-uppercase dvs-text-xs dvs-text-admin-secondary-fg"},[e._v(" "+e._s(t.label)+" ")]),s("div",[e._v(e._s(e.format(t)))])])})),0)])})),0),s("draggable",e._b({staticClass:"dvs-list-reset",attrs:{list:e.selected,tag:"ul"}},"draggable",{group:{name:"g1"},animation:200,ghostClass:"dvs-ghost",handle:".handle",dragClass:"dvs-chosen-drag-slice",emptyInsertThreshold:10,removeCloneOnHide:!1},!1),e._l(e.selected,(function(t,r){return s("li",{key:r,staticClass:"dvs-flex dvs-bg-admin-secondary-bg dvs-text-admin-secondary-fg dvs-shadow hover:dvs-shadow-lg dvs-rounded dvs-my-4 dvs-p-4 dvs-cursor-pointer"},[e.modelQuerySettings.allowSort?s("div",{staticClass:"dvs-mr-4 handle"},[s("menu-icon")],1):e._e(),t.displayFields?s("div",{staticClass:"dvs-w-full"},[s("div",{staticClass:"dvs-text-lg dvs-mb-2"},[e._v(e._s(t.displayFields[0].value))]),s("ul",{staticClass:"dvs-list-reset dvs-flex"},e._l(e.subLabelFields(t.displayFields),(function(t,r){return s("li",{key:r,staticClass:"dvs-mr-4 dvs-text-xs dvs-leading-tight dvs-w-1/4 dvs-bg-admin-bg dvs-text-admin-fg dvs-rounded dvs-p-3 opacity-75"},[s("div",{staticClass:"dvs-uppercase dvs-text-xs"},[e._v(e._s(t.label))]),s("div",[e._v(e._s(e.format(t)))])])})),0)]):e._e(),s("div",{staticClass:"dvs-cursor-pointer",on:{click:function(s){return e.removeSuggestion(t)}}},[s("x-icon")],1)])})),0)],1)},a=[];s("a4d3"),s("4de4"),s("7db0"),s("c975"),s("a15b"),s("a434"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("159b");function n(e){if(Array.isArray(e)){for(var t=0,s=new Array(e.length);t<e.length;t++)s[t]=e[t];return s}}s("e01a"),s("d28b"),s("a630"),s("e260"),s("25f0"),s("3ca3"),s("ddb0");function i(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){return n(e)||i(e)||l()}var u=s("ade3"),d=s("5a0c"),c=s.n(d),v=s("2f62");function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function f(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(Object(s),!0).forEach((function(t){Object(u["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var m={name:"DeviseQuerySelectorSearch",components:{draggable:function(){return Promise.all([s.e("devise-editors~devise-media~devise-slices"),s.e("devise-editors")]).then(s.t.bind(null,"310e",7))},XIcon:function(){return s.e("devise-icons").then(s.bind(null,"1a4e"))},MenuIcon:function(){return s.e("devise-icons").then(s.bind(null,"83e1"))}},props:{value:{type:Array,required:!0},modelQuery:{type:Object,required:!0},modelQuerySettings:{type:Object,required:!0}},data:function(){return{filter:null,autosuggest:{data:[]}}},computed:{selected:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},filteredSuggestions:function(){var e=this;return this.autosuggest.data?this.autosuggest.data.filter((function(t){return!e.selected.find((function(e){return t===e}))})):[]}},mounted:function(){this.value&&this.value.length>0&&this.requestLegacySelected()},methods:f({},Object(v["b"])("devise",["appGenericSearch","getGeneric"]),{selectSuggestion:function(e){this.selected.push(e),this.resetSearch()},removeSuggestion:function(e){this.resetSearch(),this.selected.splice(this.selected.indexOf(e),1)},resetSearch:function(){this.filter=null,this.$set(this.autosuggest,"data",[])},requestSearch:function(e){var t=this,s=e.target.value;if(""!==s){var r=[];this.selected.forEach((function(e){r.push(e.id)}));var a={searchterm:s,selected:r};this.appGenericSearch({config:{apiendpoint:this.modelQuery.params[0].api},filters:a}).then((function(e){t.autosuggest=e.data,e.data.length<1&&window.deviseSettings.$bus.$emit("showMessage",{title:"No Suggestions Found",message:"We couldn't find any data with the term: \"".concat(s,'".')})}))}else this.autosuggest=Object.assign({},{})},subLabelFields:function(e){var t=JSON.parse(JSON.stringify(e));return t.shift(),t},format:function(e){return e.dateFormat?c()(e.value).format(e.dateFormat):e.value},requestLegacySelected:function(){var e=this;this.modelQuery.params[0].editApi?this.getGeneric({config:{apiendpoint:this.modelQuery.params[0].editApi,app:!0},filters:{ids:this.value.join(",")}}).then((function(t){e.selected=o(t.data.data)})):console.warn("Devise: You must have an editApi endpoint configured AppServiceProvider ModelQuery::set to edit model slices")}})},y=m,b=s("2877"),h=Object(b["a"])(y,r,a,!1,null,null,null);t["default"]=h.exports},a630:function(e,t,s){var r=s("23e7"),a=s("4df4"),n=s("1c7e"),i=!n((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:a})},bce6:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("fieldset",{staticClass:"dvs-fieldset"},[s("label",[e._v(e._s(e.value.label))]),s("select",{staticClass:"dvs-w-full",attrs:{type:"text",placeholder:e.value.label},domProps:{value:e.value.value},on:{change:e.updateValue}},[s("option",{domProps:{value:null}},[e._v("Please Select from the Following")]),e._l(e.options,(function(t,r){return s("option",{key:r,domProps:{value:r}},[e._v(" "+e._s(t)+" ")])}))],2)])])},a=[],n=(s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),i=s("2f62");function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){Object(n["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u={name:"DeviseQuerySelectorSelect",props:{value:{type:Object,required:!0}},data:function(){return{apiOptions:[]}},computed:{options:function(){return this.value.options?this.value.options:this.apiOptions}},mounted:function(){this.value.value=null,this.value.api&&this.requestOptions()},methods:o({},Object(i["b"])("devise",["getGeneric"]),{updateValue:function(e){var t=this.value;t.value=e.target.value,this.$emit("input",t)},requestOptions:function(){var e=this;this.getGeneric({config:{app:!0,apiendpoint:this.value.api}}).then((function(t){e.apiOptions=t.data}))}})},d=u,c=s("2877"),v=Object(c["a"])(d,r,a,!1,null,null,null);t["default"]=v.exports},dd2b:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("fieldset",{staticClass:"dvs-fieldset"},[s("label",[e._v(e._s(e.value.label))]),s("input",{staticClass:"dvs-w-full",attrs:{type:"text",placeholder:e.value.label},on:{keyup:e.updateValue}})])])},a=[],n={name:"DeviseQuerySelectorText",props:{value:{type:Object,required:!0}},methods:{updateValue:function(e){var t=this.value;t.value=e.target.value,this.$emit("input",t)}}},i=n,l=s("2877"),o=Object(l["a"])(i,r,a,!1,null,null,null);t["default"]=o.exports},dda1:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("fieldset",{staticClass:"dvs-fieldset"},[s("label",[e._v(e._s(e.value.label))]),s("date-picker",{ref:"datepicker",attrs:{settings:{date:!0,time:!0}},on:{change:e.updateValue}})],1)])},a=[],n=(s("d3b7"),{name:"DeviseQuerySelectorText",components:{DatePicker:function(){return Promise.all([s.e("devise-editors~devise-media~devise-slices"),s.e("devise-editors")]).then(s.bind(null,"7e6e"))}},props:{value:{type:Object,required:!0}},methods:{updateValue:function(e){var t=this.value;t.value=e,this.$emit("input",t)}}}),i=n,l=s("2877"),o=Object(l["a"])(i,r,a,!1,null,null,null);t["default"]=o.exports},e9bb:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-text-admin-fg"},[s("fieldset",{staticClass:"dvs-fieldset"},[s("label",{attrs:{for:"querykey"}},[e._v("Data Set Query")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"w-full",attrs:{id:"querykey",name:"querykey"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.query=t.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:""},domProps:{value:null}},[e._v(" Please Select a Data Set Query ")]),e._l(e.modelQueries,(function(t){return s("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.description))])}))],2)]),e.selectedModelQuery&&e.selectedModelQuery.params.length>0?s("div",{staticClass:"dvs-mt-6"},e._l(e.selectedModelQuery.params,(function(t,r){return s("div",{key:r},["search"===t.type?s("param-search",{attrs:{"model-query":e.selectedModelQuery,"model-query-settings":t},model:{value:e.finalModelQuery.params[r],callback:function(t){e.$set(e.finalModelQuery.params,r,t)},expression:"finalModelQuery.params[key]"}}):e._e(),"text"===t.type?s("param-text",{staticClass:"dvs-mb-4",attrs:{"model-query":e.selectedModelQuery,"model-query-settings":t},model:{value:e.finalModelQuery.params[r],callback:function(t){e.$set(e.finalModelQuery.params,r,t)},expression:"finalModelQuery.params[key]"}}):e._e(),"select"===t.type?s("param-select",{staticClass:"dvs-mb-4",attrs:{"model-query":e.selectedModelQuery,"model-query-settings":t},model:{value:e.finalModelQuery.params[r],callback:function(t){e.$set(e.finalModelQuery.params,r,t)},expression:"finalModelQuery.params[key]"}}):e._e(),"datetime"===t.type?s("param-datetime",{staticClass:"dvs-mb-4",attrs:{"model-query":e.selectedModelQuery,"model-query-settings":t},model:{value:e.finalModelQuery.params[r],callback:function(t){e.$set(e.finalModelQuery.params,r,t)},expression:"finalModelQuery.params[key]"}}):e._e()],1)})),0):e._e()])},a=[],n=(s("a4d3"),s("4de4"),s("7db0"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("159b"),s("ade3")),i=s("2f62");function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){Object(n["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u={name:"QuerySelector",components:{ParamDatetime:function(){return Promise.resolve().then(s.bind(null,"dda1"))},ParamSearch:function(){return Promise.resolve().then(s.bind(null,"a501"))},ParamSelect:function(){return Promise.resolve().then(s.bind(null,"bce6"))},ParamText:function(){return Promise.resolve().then(s.bind(null,"dd2b"))}},props:{value:{type:Object,required:!0}},data:function(){return{query:"",params:[]}},computed:o({},Object(i["e"])("devise",["modelQueries"]),{finalModelQuery:{get:function(){return this.value},set:function(e){this.$emit("input",e)},deep:!0},selectedModelQuery:function(){var e=this;return this.modelQueries.find((function(t){return t.key===e.query}))}}),watch:{selectedModelQuery:{handler:function(e){var t=this;e.params.forEach((function(){t.finalModelQuery.params.push([])})),this.finalModelQuery.key=e.key},deep:!0}},mounted:function(){this.value&&this.value.key&&(this.loadPreviousState(),this.loadPreviousParams())},methods:{loadPreviousState:function(){this.$set(this,"query",this.value.key),this.params=Object.assign({},this.value.params)},loadPreviousParams:function(){var e=this,t=[];return this.selectedModelQuery.params.forEach((function(t,s){var r=Object.assign({},t);e.$set(r,"value",e.params[s]),e.selectedModelQuery.params[s]=Object.assign({},r)})),t}}},d=u,c=s("2877"),v=Object(c["a"])(d,r,a,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=devise-query-selector.9e4d4b1a.js.map