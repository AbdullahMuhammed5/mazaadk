(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{531:function(e,n,t){"use strict";var r={name:"SocialAuth",methods:{socialLogin:function(e){this.$axios.post("/api/oauth/"+e).then((function(e){window.location.href=e.data.url}))}}},o=t(68),l=t(79),d=t.n(l),c=t(220),v=t(199),m=t(494),f=t(456),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-layout",[t("v-spacer"),e._v(" "),t("v-btn",{staticClass:"ml-2 mr-2",attrs:{color:"orange darken-4",dark:""},on:{click:function(n){return e.socialLogin("google")}}},[t("v-icon",[e._v("mdi-google")])],1),e._v(" "),t("v-btn",{staticClass:"ml-2 mr-2",attrs:{color:"light-blue darken-4",dark:""},on:{click:function(n){return e.socialLogin("facebook")}}},[t("v-icon",[e._v("mdi-facebook")])],1),e._v(" "),t("v-spacer")],1)}),[],!1,null,"4da13989",null);n.a=component.exports;d()(component,{VBtn:c.a,VIcon:v.a,VLayout:m.a,VSpacer:f.a})},608:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"LoginM"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"login"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}},{kind:"ObjectField",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"access_token"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"token_type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"refresh_token"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country_code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"avatar"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"verified"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phone_verified_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email_verified_at"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:348}};t.loc.source={body:"mutation LoginM($username: String!, $password: String!)\n{\n  login(input: {username: $username, password: $password})\n  {\n    access_token\n    token_type\n    refresh_token\n    user {\n      id\n      name\n      email\n      phone\n      country_code\n      username\n      avatar\n      verified\n      phone_verified_at\n      email_verified_at\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.LoginM=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,d=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var v=c;c=new Set,v.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"LoginM")},676:function(e,n,t){"use strict";t.r(n);var r=t(12),o=(t(52),{name:"Login",components:{SocialAuth:t(531).a},middleware:"guest",title:"login",head:function(){return{title:this.$t("auth.login")}},data:function(){return{loading:!1,valid:!1,notAuthenticate:!1,fields:{username:"",password:""}}},methods:{login:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.fields,o=r.username,l=r.password,e.$apollo.mutate({mutation:t(608),variables:{username:o,password:l}}).then((function(n){console.log(n.data),e.$auth.setStrategy("local"),e.$auth.setToken("local","Bearer "+n.data.login.access_token),e.$auth.setRefreshToken("local",n.data.login.refresh_token),e.$auth.setUser(n.data.login.user),e.$apolloHelpers.onLogin(n.data.login.access_token),e.$router.push("/home")})).catch((function(n){e.notAuthenticate=!0}));case 2:case"end":return n.stop()}}),n)})))()}}}),l=t(68),d=t(79),c=t.n(d),v=t(533),m=t(220),f=t(198),k=t(78),h=t(657),_=t(459),w=t(460),N=t(442),y=t(487),S=t(494),V=t(464),$=t(456),x=t(470),component=Object(l.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{cols:"12",md:"6",sm:"8"}},[t("v-card",{staticClass:"pa-4"},[t("v-card-title",{staticClass:"pink-special-text"},[t("v-spacer"),e._v("\n          "+e._s(e.$t("auth.login"))+"\n          "),t("v-spacer")],1),e._v(" "),t("v-card-text",{staticClass:"text-center"},[e._v("\n          من فضلك ادخل معلومات الدخول الخاصة بحسابك لتتمكن من استخدام كل خصائص الموقع وإذا لم يكن لديك حسابك؟ يمكنك تسجيل مستخدم جديد مجانأ\n        ")]),e._v(" "),t("v-alert",{attrs:{text:"",type:"error",icon:"mdi-alert-circle"},model:{value:e.notAuthenticate,callback:function(n){e.notAuthenticate=n},expression:"notAuthenticate"}},[e._v("\n          "+e._s(e.$t("auth.notAuthorized"))+"\n        ")]),e._v(" "),t("v-card-text",[t("v-form",{attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[t("v-text-field",{attrs:{label:e.$t("auth.email"),rules:[function(n){return!!n||e.$t("validation.required")},function(n){return/.+@.+\..+/.test(n)||e.$t("validation.email")}],color:"primary","prepend-inner-icon":"mdi-at",required:"",outlined:"",rounded:"",filled:"",type:"email"},model:{value:e.fields.username,callback:function(n){e.$set(e.fields,"username",n)},expression:"fields.username"}}),e._v(" "),t("v-text-field",{attrs:{label:e.$t("auth.password"),rules:[function(n){return!!n||e.$t("validation.required")}],color:"primary",id:"password","prepend-inner-icon":"mdi-lock",outlined:"",filled:"",rounded:"",type:"password"},model:{value:e.fields.password,callback:function(n){e.$set(e.fields,"password",n)},expression:"fields.password"}}),e._v(" "),t("v-checkbox",{attrs:{color:"primary",label:e.$t("auth.remember")}}),e._v(" "),t("v-btn",{attrs:{text:"",color:"pink darken-3",nuxt:"",to:"/auth/register"}},[e._v("لا تملك حساب")]),e._v(" "),t("v-layout",[t("v-spacer"),e._v(" "),t("v-btn",{staticClass:"white--text pink-special-bg",attrs:{disabled:!e.valid,loading:e.loading},on:{click:function(n){return e.login()}}},[e._v(e._s(e.$t("auth.login"))+"\n              ")]),e._v(" "),t("v-spacer")],1)],1),e._v(" "),t("v-divider",{staticClass:"mt-2 mb-2"}),e._v(" "),t("social-auth")],1)],1)],1)],1)],1)}),[],!1,null,"21b3c992",null);n.default=component.exports;c()(component,{VAlert:v.a,VBtn:m.a,VCard:f.a,VCardText:k.b,VCardTitle:k.c,VCheckbox:h.a,VCol:_.a,VContainer:w.a,VDivider:N.a,VForm:y.a,VLayout:S.a,VRow:V.a,VSpacer:$.a,VTextField:x.a})}}]);