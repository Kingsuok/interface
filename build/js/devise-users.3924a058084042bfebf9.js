webpackJsonp([5],{"+ZeK":function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{attrs:{id:"devise-admin-content"}},[t("action-bar",[t("li",{directives:[{name:"devise-alert-confirm",rawName:"v-devise-alert-confirm",value:{callback:e.requestDeleteUser,message:"Are you sure you want to delete this user?"},expression:"{callback: requestDeleteUser, message: 'Are you sure you want to delete this user?'}"}],staticClass:"dvs-btn dvs-btn-sm dvs-mb-2",style:e.theme.actionButton},[e._v("Delete This User")])]),e._v(" "),t("h3",{staticClass:"dvs-mb-8 dvs-pr-16",style:{color:e.theme.panel.color}},[e._v(e._s(e.localValue.name)+" Settings")]),e._v(" "),t("div",[t("form",[t("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[t("label",[e._v("Name of User")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.name,expression:"localValue.name"}],attrs:{type:"text",autocomplete:"off",placeholder:"Name of the User"},domProps:{value:e.localValue.name},on:{input:function(s){s.target.composing||e.$set(e.localValue,"name",s.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[t("label",[e._v("Email")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.email,expression:"localValue.email"}],attrs:{type:"text",autocomplete:"off",placeholder:"Email of the User"},domProps:{value:e.localValue.email},on:{input:function(s){s.target.composing||e.$set(e.localValue,"email",s.target.value)}}})]),e._v(" "),e.showPassword?e._e():t("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[t("label",[e._v("Edit Password?")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.showPassword,expression:"showPassword"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showPassword)?e._i(e.showPassword,null)>-1:e.showPassword},on:{change:function(s){var t=e.showPassword,a=s.target,n=!!a.checked;if(Array.isArray(t)){var o=e._i(t,null);a.checked?o<0&&(e.showPassword=t.concat([null])):o>-1&&(e.showPassword=t.slice(0,o).concat(t.slice(o+1)))}else e.showPassword=n}}})]),e._v(" "),e.showPassword?[t("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[t("label",[e._v("Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.password,expression:"localValue.password"}],attrs:{type:"password",autocomplete:"off"},domProps:{value:e.localValue.password},on:{input:function(s){s.target.composing||e.$set(e.localValue,"password",s.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[t("label",[e._v("Password Confirm")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.password_confirmation,expression:"localValue.password_confirmation"}],attrs:{type:"password",autocomplete:"off"},domProps:{value:e.localValue.password_confirmation},on:{input:function(s){s.target.composing||e.$set(e.localValue,"password_confirmation",s.target.value)}}})])]:e._e()],2),e._v(" "),t("div",{staticClass:"dvs-flex"},[t("button",{staticClass:"dvs-btn dvs-mr-2",style:e.theme.actionButton,on:{click:e.requestSaveUser}},[e._v("Save")]),e._v(" "),t("button",{staticClass:"dvs-btn dvs-mr-4",style:e.theme.actionButtonGhost,on:{click:function(s){e.goToPage("devise-users-index")}}},[e._v("Cancel")])])])],1)])},staticRenderFns:[]}},Gb8L:function(e,s,t){var a=t("VU/8")(t("NyGZ"),t("+ZeK"),!1,null,null,null);e.exports=a.exports},KrED:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{attrs:{id:"devise-admin-content"}},[t("action-bar",[t("li",{staticClass:"dvs-btn dvs-btn-sm dvs-mb-2",style:e.theme.actionButton,on:{click:function(s){s.preventDefault(),e.showCreate=!0}}},[e._v("Create New User")])]),e._v(" "),t("h3",{staticClass:"dvs-mb-10",style:{color:e.theme.panel.color}},[e._v("Current Users")]),e._v(" "),e._l(e.users.data,function(s){return t("div",{key:s.id,staticClass:"dvs-mb-6 dvs-flex dvs-justify-between dvs-items-center"},[t("div",{staticClass:"dvs-min-w-2/5 dvs-font-bold dvs-pr-8"},[e._v(e._s(s.name))]),e._v(" "),t("div",{staticClass:"dvs-w-2/5 dvs-pl-8 dvs-flex dvs-justify-end"},[t("button",{staticClass:"dvs-btn dvs-btn-xs",style:e.theme.actionButtonGhost,on:{click:function(t){e.loadUser(s.id)}}},[e._v("Manage")])])])})],2),e._v(" "),t("transition",{attrs:{name:"dvs-fade"}},[t("portal",{attrs:{to:"devise-root"}},[e.showCreate?t("devise-modal",{staticClass:"dvs-z-50",on:{close:function(s){e.showCreate=!1}}},[t("h3",{staticClass:"dvs-mb-4",style:{color:e.theme.panel.color}},[e._v("Create new user")]),e._v(" "),t("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[t("label",[e._v("Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"Name of the User"},domProps:{value:e.newUser.name},on:{input:function(s){s.target.composing||e.$set(e.newUser,"name",s.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[t("label",[e._v("Email")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],attrs:{type:"text",placeholder:"Email of the User"},domProps:{value:e.newUser.email},on:{input:function(s){s.target.composing||e.$set(e.newUser,"email",s.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[t("label",[e._v("Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],attrs:{type:"password"},domProps:{value:e.newUser.password},on:{input:function(s){s.target.composing||e.$set(e.newUser,"password",s.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[t("label",[e._v("Confirm Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password_confirmation,expression:"newUser.password_confirmation"}],attrs:{type:"password"},domProps:{value:e.newUser.password_confirmation},on:{input:function(s){s.target.composing||e.$set(e.newUser,"password_confirmation",s.target.value)}}})]),e._v(" "),t("button",{staticClass:"dvs-btn",style:e.theme.actionButton,attrs:{disabled:e.createInvalid},on:{click:e.requestCreateUser}},[e._v("Create")]),e._v(" "),t("button",{staticClass:"dvs-btn",style:e.theme.actionButtonGhost,on:{click:function(s){e.showCreate=!1}}},[e._v("Cancel")])]):e._e()],1)],1)],1)},staticRenderFns:[]}},NyGZ:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("NYxO"),n=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};s.default={name:"UsersView",data:function(){return{localValue:{},modulesToLoad:1,showPassword:!1}},mounted:function(){this.retrieveAllUsers()},methods:n({},Object(a.b)("devise",["getUsers","deleteUser","updateUser"]),{requestSaveUser:function(){this.updateUser({user:this.user,data:this.localValue})},requestDeleteUser:function(){var e=this;this.deleteUser(this.user).then(function(){e.goToPage("devise-users-index")})},retrieveAllUsers:function(){var e=this;this.getUsers().then(function(){e.localValue=Object.assign({},e.localValue,e.user),devise.$bus.$emit("incrementLoadbar",e.modulesToLoad)})}}),computed:n({},Object(a.c)("devise",["user"])),components:{ActionBar:function(){return t.e(14).then(t.bind(null,"jkq7"))}}}},"VU/8":function(e,s){e.exports=function(e,s,t,a,n,o){var r,l=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,l=e.default);var d,c="function"==typeof l?l.options:l;if(s&&(c.render=s.render,c.staticRenderFns=s.staticRenderFns,c._compiled=!0),t&&(c.functional=!0),n&&(c._scopeId=n),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=d):a&&(d=a),d){var u=c.functional,v=u?c.render:c.beforeCreate;u?(c._injectStyles=d,c.render=function(e,s){return d.call(s),v(e,s)}):c.beforeCreate=v?[].concat(v,d):[d]}return{esModule:r,exports:l,options:c}}},Wfkm:function(e,s,t){var a=t("VU/8")(t("hrHl"),t("KrED"),!1,null,null,null);e.exports=a.exports},hrHl:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("NYxO"),n=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};s.default={name:"UsersIndex",data:function(){return{modulesToLoad:1,showCreate:!1,newUser:{name:null,email:null,password:null,password_confirmation:null}}},mounted:function(){this.retrieveAllUsers()},methods:n({},Object(a.b)("devise",["getUsers","createUser"]),{requestCreateUser:function(){var e=this;this.createUser(this.newUser).then(function(){e.newUser.name=null,e.newUser.email=null,e.newUser.password=null,e.newUser.password_confirmation=!1,e.showCreate=!1})},retrieveAllUsers:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.getUsers().then(function(){e&&devise.$bus.$emit("incrementLoadbar",self.modulesToLoad)})},loadUser:function(e){this.$router.push({name:"devise-users-edit",params:{userId:e}})}}),computed:n({},Object(a.c)("devise",["users"]),{createInvalid:function(){return null===this.newUser.name||null===this.newUser.email||null===this.newUser.password||null===this.newUser.password_confirmation||this.newUser.password!==this.newUser.password_confirmation}}),components:{ActionBar:function(){return t.e(14).then(t.bind(null,"jkq7"))},DeviseModal:function(){return t.e(14).then(t.bind(null,"+x/a"))}}}}});