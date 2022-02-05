(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{514:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"countries"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nicename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"iso"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phonecode"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:56}};t.loc.source={body:"{\n  countries{\n    nicename\n    iso\n    phonecode\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t},576:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"updateUser"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"phone"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"country_code"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"account"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}},{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"Argument",name:{kind:"Name",value:"phone"},value:{kind:"Variable",name:{kind:"Name",value:"phone"}}},{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}},{kind:"Argument",name:{kind:"Name",value:"country_code"},value:{kind:"Variable",name:{kind:"Name",value:"country_code"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"avatar"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email_verified_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phone_verified_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"verified"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country_code"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:407}};t.loc.source={body:"mutation updateUser(\n  $id: ID!\n  $email: String!,\n  $name: String!,\n  $phone: String!,\n  $username: String!\n  $country_code: String!\n)\n{\n  account(\n    id: $id,\n    email: $email,\n    name:$name,\n    phone: $phone\n    username: $username,\n    country_code: $country_code\n  )\n  {\n    id\n    name\n    email\n    avatar\n    email_verified_at\n    phone_verified_at\n    verified\n    phone\n    country_code\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.updateUser=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,d=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"updateUser")},577:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"updateAvatar"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"avatar"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Upload"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatar"},arguments:[{kind:"Argument",name:{kind:"Name",value:"avatar"},value:{kind:"Variable",name:{kind:"Name",value:"avatar"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"avatar"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:115}};t.loc.source={body:"mutation updateAvatar($avatar: Upload!)\n{\n  avatar(avatar: $avatar)\n  {\n    id\n    name\n    email\n    avatar\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.updateAvatar=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,d=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"updateAvatar")},670:function(e,n,t){"use strict";t.r(n);t(28),t(55);var r={name:"index",middleware:"auth",apollo:{countries:{query:t(514)}},head:function(){return{title:this.$t("setting")}},data:function(){return{valid:!1,validAvatar:!1,user:{name:this.$auth.user.name,phone:this.$auth.user.phone,country_code:this.$auth.user.country_code,email:this.$auth.user.email,username:this.$auth.user.username,avatar:void 0},errors:{name:null,phone:null,country_code:null,email:null,username:null,avatar:null},flashErrors:{name:null,phone:null,country_code:null,email:null,username:null,avatar:null},message:{show:!1,type:"",text:""},editAvatar:!1}},computed:{},methods:{getErrors:function(){var e=this,n={name:[],phone:[],country_code:[],email:[],username:[],avatar:[]};this.flashErrors.name&&this.flashErrors.name.map((function(t){n.name.push(e.$t(t))})),this.flashErrors.email&&this.flashErrors.email.map((function(t){n.email.push(e.$t(t))})),this.flashErrors.username&&this.flashErrors.username.map((function(t){n.username.push(e.$t(t))})),this.flashErrors.country_code&&this.flashErrors.country_code.map((function(t){n.country_code.push(e.$t(t))})),this.flashErrors.phone&&this.flashErrors.phone.map((function(t){n.phone.push(e.$t(t))})),this.errors=n},saveData:function(){var e=this,n=this.user,r=n.email,o=n.name,l=n.phone,d=n.username,c=n.country_code,m=this.$auth.user.id;this.$apollo.mutate({mutation:t(576),variables:{id:m,email:r,name:o,phone:l,username:d,country_code:c}}).then((function(n){console.log(n),e.$auth.setUser(n.data.account),e.message={show:!0,type:"success",text:"alerts.save_success"}})).catch((function(n){var t=n.graphQLErrors;"validation"===t[0].extensions.category&&(e.flashErrors=t[0].extensions.validation),e.getErrors(),e.message={show:!0,type:"error",text:"alerts.save_error"}}))},saveAvatar:function(){var e=this,n=this.user.avatar;this.$apollo.mutate({mutation:t(577),variables:{avatar:n}}).then((function(n){e.$auth.setUser(n.data),e.message={show:!0,type:"success",text:"alerts.save_success"}})).catch((function(n){e.message={show:!0,type:"error",text:"alerts.save_error"}}))},pickAvatar:function(){this.$refs.avatar.click()}}},o=t(68),l=t(79),d=t.n(l),c=t(533),m=t(541),v=t(197),f=t(532),h=t(220),k=t(198),y=t(78),N=t(459),_=t(460),$=t(111),S=t(584),V=t(487),x=t(585),w=t(199),E=t(162),D=t(494),A=t(203),F=t(464),T=t(456),C=t(470),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("v-alert",{attrs:{type:e.message.type,border:"right",elevation:"2",text:""},model:{value:e.message.show,callback:function(n){e.$set(e.message,"show",n)},expression:"message.show"}},[e._v(e._s(e.$t(e.message.text))+"\n  ")]),e._v(" "),t("v-row",[t("v-col",{attrs:{cols:"12",md:"8"}},[t("v-breadcrumbs",{attrs:{items:[{text:"Setting",to:"/setting"}]},scopedSlots:e._u([{key:"divider",fn:function(){return[t("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])}),e._v(" "),t("v-card",[t("v-card-title",[e._v(e._s(e.$t("setting")))]),e._v(" "),t("v-card-text",[t("v-form",{model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[t("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:e.$t("auth.email"),"error-messages":e.errors.email,rules:[function(n){return!!n||e.$t("validation.required")},function(n){return/.+@.+\..+/.test(n)||e.$t("validation.email")}]},on:{change:function(n){e.errors.email=null}},model:{value:e.user.email,callback:function(n){e.$set(e.user,"email",n)},expression:"user.email"}}),e._v(" "),t("v-layout",[t("v-autocomplete",{staticStyle:{width:"30px"},attrs:{"prepend-icon":"mdi-phone",items:e.countries,rules:[function(n){return!!n||e.$t("validation.required")}],autocomplete:"off","item-value":"phonecode","item-text":"iso"},scopedSlots:e._u([{key:"item",fn:function(n){var t=n.item;return[e._v("\n                  "+e._s(t.iso+" +"+t.phonecode)+"\n                ")]}}]),model:{value:e.user.country_code,callback:function(n){e.$set(e.user,"country_code",n)},expression:"user.country_code"}}),e._v(" "),t("v-text-field",{attrs:{label:e.$t("auth.phone"),rules:[function(n){return!!n||e.$t("validation.required")},function(n){return/^(([{1}[0-9]{1,2}[\ ]{1}[0-9]{4}[\ ]{1}[0-9]{4})|([0]{1}[0-9]{1}[\ ]{1}[0-9]{4}[\ ]{1}[0-9]{4})|([0]{1}[0-9]{1}[\-]{1}[0-9]{4}[\-]{1}[0-9]{4})|([\(]{1}[0]{1}[0-9]{1}[\)]{1}[\ ]{1}[0-9]{4}([\ ]|[\-]){1}[0-9]{4})|([0-9]{4}([\ ]|[\-])?[0-9,3}[\ ]]{4})|([0]{1}[0-9]{3}[\ ]{1}[0-9]{3}[\ ]{1}[0-9]{3})|([0]{1}[0-9]{9})|([\(]{1}[0-9]{3}[\)]{1}[\ ]{1}[0-9]{3}[\-]{1}[0-9]{4})|([0-9]{3}([\/]|[\-]){1}[0-9]{3}[\-]{1}[0-9]{4})|([1]{1}[\-]?[0-9]{3}([\/]|[\-]){1}[0-9]{3}[\-]{1}[0-9]{4})|([1]{1}[0-9]{9}[0-9]?)|([0-9]{3}[\.]{1}[0-9]{3}[\.]{1}[0-9]{4})|([\(]{1}[0-9]{3}[\)]{1}[0-9]{3}([\.]|[\-]){1}[0-9]{4}(([\ ]?(x|ext|extension)?)([\ ]?[0-9]{3,4}))?)|([1]{1}[\(]{1}[0-9]{3}[\)]{1}[0-9]{3}([\-]){1}[0-9]{4})|([\+]{1}[1]{1}[\ ]{1}[0-9]{3}[\.]{1}[0-9]{3}[\-]{1}[0-9]{4})|([\+]{1}[1]{1}[\ ]?[\(]{1}[0-9]{3}[\)]{1}[0-9]{3}[\-]{1}[0-9]{4}))$/.test(n)||e.$t("validation.phone")}],color:"primary","error-messages":e.errors.phone},on:{change:function(n){e.errors.phone=null}},model:{value:e.user.phone,callback:function(n){e.$set(e.user,"phone",n)},expression:"user.phone"}})],1),e._v(" "),t("v-text-field",{attrs:{"prepend-icon":"mdi-account",label:e.$t("auth.name"),rules:[function(n){return!!n||e.$t("validation.required")}],"error-messages":e.errors.name},on:{change:function(n){e.errors.name=null}},model:{value:e.user.name,callback:function(n){e.$set(e.user,"name",n)},expression:"user.name"}}),e._v(" "),t("v-text-field",{attrs:{"prepend-icon":"mdi-at",label:e.$t("auth.username"),rules:[function(n){return!!n||e.$t("validation.required")}],"error-messages":e.errors.username},on:{change:function(n){e.errors.username=null}},model:{value:e.user.username,callback:function(n){e.$set(e.user,"username",n)},expression:"user.username"}})],1)],1),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{staticClass:"white--text",attrs:{disabled:!e.valid,color:"cyan"},on:{click:function(n){return e.saveData()}}},[e._v(e._s(e.$t("save")))])],1)],1)],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"4"}},[t("div",{staticClass:"v-card-profile"},[t("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var r=n.hover;return[t("v-avatar",{staticClass:"mx-auto d-block elevation-6",attrs:{slot:"offset",size:"130"},slot:"offset"},[/(https?:\/\/[^\s]+)/.test(e.$auth.user.avatar)?t("v-img",{attrs:{alt:e.$auth.user.name,src:e.$auth.user.avatar}}):t("v-img",{attrs:{alt:e.$auth.user.name,src:"/storage/"+e.$auth.user.avatar}}),e._v(" "),t("v-fade-transition",[r?t("v-overlay",{attrs:{absolute:""}},[t("v-btn",{attrs:{color:"white",icon:""},on:{click:function(n){e.editAvatar=!0}}},[t("v-icon",[e._v("mdi-camera")])],1)],1):e._e()],1)],1)]}}])}),e._v(" "),e.editAvatar?t("v-layout",[t("v-form",{staticStyle:{width:"100%"},model:{value:e.validAvatar,callback:function(n){e.validAvatar=n},expression:"validAvatar"}},[t("v-file-input",{ref:"avatar",attrs:{label:e.$t("auth.avatar"),rules:[function(n){return!!n||e.$t("validation.required")}],accept:"image/png, image/jpeg, image/bmp","prepend-icon":"mdi-camera"},model:{value:e.user.avatar,callback:function(n){e.$set(e.user,"avatar",n)},expression:"user.avatar"}})],1),e._v(" "),t("v-btn",{staticClass:"mt-4",attrs:{disabled:!e.validAvatar,color:"cyan",text:""},on:{click:function(n){return e.saveAvatar()}}},[e._v(e._s(e.$t("save"))+"\n          ")])],1):e._e(),e._v(" "),t("v-card-text",{staticClass:"text-center"},[t("h6",{staticClass:"overline mb-3"},[e._v("\n            "+e._s(e.$t("doctor"))+"\n          ")]),e._v(" "),t("h4",{staticClass:"font-weight-light"},[e._v("\n            "+e._s(e.$auth.user.name)+"\n          ")])])],1)])],1)],1)}),[],!1,null,"7abac0c0",null);n.default=component.exports;d()(component,{VAlert:c.a,VAutocomplete:m.a,VAvatar:v.a,VBreadcrumbs:f.a,VBtn:h.a,VCard:k.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:N.a,VContainer:_.a,VFadeTransition:$.c,VFileInput:S.a,VForm:V.a,VHover:x.a,VIcon:w.a,VImg:E.a,VLayout:D.a,VOverlay:A.a,VRow:F.a,VSpacer:T.a,VTextField:C.a})}}]);