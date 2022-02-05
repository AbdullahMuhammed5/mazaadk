(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{641:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"category"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"category"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:136}};n.loc.source={body:"query category($id: ID!) {\n  category(id: $id) {\n    id\n    name\n    image\n    products\n    details{\n      id\n      details\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function c(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.category=function(e,t){var n={kind:e.kind,definitions:[c(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,d=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return d.forEach((function(t){var r=c(e,t);r&&n.definitions.push(r)})),n}(n,"category")},686:function(e,t,n){"use strict";n.r(t);n(33);var r={name:"Category",components:{Product:n(545).a},data:function(){return{toggle_none:1,page:1,category_id:this.$route.params.category,category:null,valid:!0,pages:null,bidDialog:!1,increase:null,min_increment:null,grid:!0,products:[],product:{},productId:null,message:{activate:!1,message:"",color:null}}},mounted:function(){this.getCategory(),this.getProducts()},methods:{openBidDialog:function(e){this.productId=e.id,this.increase=e.min_increment,this.min_increment=e.min_increment,this.bidDialog=!0},bid:function(){var e=this,t=this.productId,r=this.increase;this.$apollo.mutate({mutation:n(496),variables:{product_id:t,increase:r}}).then((function(t){t.data.BidIncrease&&(e.message={activate:!0,text:"your bid submitted",color:"success"},e.bidDialog=!1)}))},getCategory:function(){var e=this,t=this.category_id;this.$apollo.query({query:n(641),variables:{id:t}}).then((function(t){e.category=t.data.category}))},getProducts:function(){var e=this,t=this.category_id,r=this.page;this.$apollo.query({query:n(540),variables:{page:r,category:t}}).then((function(t){e.products=t.data.products.data,e.pages=t.data.products.paginatorInfo.lastPage}))},sortByPrice:function(e){var t=this.products.slice(0);t.sort((function(a,b){return"lower"===e?a.price-b.price:b.price-a.price})),this.products=t}}},o=n(68),c=n(79),d=n.n(c),l=n(220),v=n(654),m=n(198),f=n(78),h=n(459),k=n(460),_=n(509),y=n(487),x=n(199),w=n(162),V=n(494),$=n(554),S=n(464),D=n(576),C=n(456),N=n(470),I=n(73),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e.category?n("v-container",{staticClass:"pa-7"},[n("v-card",{staticClass:"mt-4",attrs:{color:"pink darken-3",rounded:""}},[n("v-row",{attrs:{justify:"center","align-content":"center"}},[n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-img",{attrs:{"max-height":"140px",src:"/storage/"+e.category.image}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"9"}},[n("h1",{staticClass:"white--text display-2 text-center",staticStyle:{"margin-top":"40px"}},[e._v("\n            "+e._s(e.category.name)+"\n          ")])])],1)],1)],1):e._e(),e._v(" "),n("v-snackbar",{attrs:{color:e.message.color},model:{value:e.message.activate,callback:function(t){e.$set(e.message,"activate",t)},expression:"message.activate"}},[e._v("\n    "+e._s(e.message.text)+"\n    "),n("v-btn",{attrs:{color:"white",icon:""},on:{click:function(t){e.message.activate=!1}}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("v-container",[n("v-toolbar",{staticClass:"mt-5",attrs:{color:"transparent",dense:"",elevation:"0",floating:""}},[n("v-spacer"),e._v(" "),n("v-btn-toggle",{staticClass:"ma-2"},[n("v-btn",{attrs:{small:""},on:{click:function(t){return e.sortByPrice("higher")}}},[n("v-icon",[e._v("mdi-menu-up")])],1),e._v(" "),n("v-btn",{attrs:{small:""},on:{click:function(t){return e.sortByPrice("lower")}}},[n("v-icon",[e._v("mdi-menu-down")])],1)],1)],1),e._v(" "),n("v-row",{staticClass:"mt-6"},e._l(e.products,(function(t){return n("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[n("product",{attrs:{grid:e.grid,product:t}},[n("v-layout",{staticClass:"mt-2"},[n("v-spacer"),e._v(" "),e.$auth.loggedIn&&e.$auth.user.verified&&e.$auth.user.id!=t.user.id?n("v-btn",{attrs:{color:"red",dark:""},on:{click:function(n){return e.openBidDialog(t)}}},[e._v(e._s(e.$t("bid")))]):e._e(),e._v(" "),e.$auth.loggedIn&&!e.$auth.user.verified?n("v-btn",{attrs:{color:"red",nuxt:"",to:"/setting/profile",dark:""}},[e._v(e._s(e.$t("bid")))]):e._e(),e._v(" "),e.$auth.loggedIn?e._e():n("v-btn",{attrs:{color:"red",nuxt:"",to:"/auth/login",dark:""}},[e._v(e._s(e.$t("bid")))]),e._v(" "),n("v-spacer")],1)],1)],1)})),1),e._v(" "),e.pages>1?n("v-pagination",{attrs:{length:e.pages},on:{input:e.getProducts},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}):e._e()],1),e._v(" "),e.$auth.loggedIn&&e.$auth.user.verified?n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.bidDialog,callback:function(t){e.bidDialog=t},expression:"bidDialog"}},[n("v-card",[n("v-card-title",[e._v("\n        "+e._s(e.$t("bid"))+"\n      ")]),e._v(" "),n("v-card-text",[n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{min:e.min_increment,rules:[function(t){return!!t||e.$t("validation.required")},function(){return e.increase>=e.min_increment||"zid chwi"}],type:"number"},model:{value:e.increase,callback:function(t){e.increase=t},expression:"increase"}})],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red",text:""},on:{click:function(t){e.bidDialog=!1}}},[e._v("\n          "+e._s(e.$t("close"))+"\n        ")]),e._v(" "),n("v-btn",{staticClass:"white--text",attrs:{disabled:!e.valid,color:"cyan"},on:{click:e.bid}},[e._v(e._s(e.$t("continue")))])],1)],1)],1):e._e()],1)}),[],!1,null,"41f2ddd9",null);t.default=component.exports;d()(component,{VBtn:l.a,VBtnToggle:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:h.a,VContainer:k.a,VDialog:_.a,VForm:y.a,VIcon:x.a,VImg:w.a,VLayout:V.a,VPagination:$.a,VRow:S.a,VSnackbar:D.a,VSpacer:C.a,VTextField:N.a,VToolbar:I.a})}}]);