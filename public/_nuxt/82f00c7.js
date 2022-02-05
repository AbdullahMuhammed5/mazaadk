(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{484:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"BidIncrease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"product_id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"increase"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"BidIncrease"},arguments:[{kind:"Argument",name:{kind:"Name",value:"product_id"},value:{kind:"Variable",name:{kind:"Name",value:"product_id"}}},{kind:"Argument",name:{kind:"Name",value:"increase"},value:{kind:"Variable",name:{kind:"Name",value:"increase"}}}],directives:[]}]}}],loc:{start:0,end:135}};t.loc.source={body:"mutation BidIncrease($product_id: Int!, $increase: Float!)\n{\n  BidIncrease(\n    product_id: $product_id,\n    increase: $increase\n  )\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}var r={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.BidIncrease=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=r[n]||new Set,c=new Set,l=new Set;for(d.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var d=o(e,n);d&&t.definitions.push(d)})),t}(t,"BidIncrease")},515:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"product"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"product"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"avatar"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"min_increment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bids"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"close_time"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:297}};t.loc.source={body:"query product($id: ID!){\n  product(id:$id)\n  {\n    id\n    user\n    {\n      id\n      name\n      avatar\n    }\n    category\n    {\n      id\n      name\n      slug\n    }\n    name\n    description\n    images\n    price\n    min_increment\n    status\n    bids\n    features\n    close_time\n    created_at\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}var r={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.product=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=r[n]||new Set,c=new Set,l=new Set;for(d.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var d=o(e,n);d&&t.definitions.push(d)})),t}(t,"product")},625:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"myBid"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"myBid"},arguments:[{kind:"Argument",name:{kind:"Name",value:"product_id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"increase"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:90}};t.loc.source={body:"query myBid($id: Int!)\n{\n  myBid(product_id: $id)\n  {\n    id\n    price\n    increase\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}var r={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.myBid=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=r[n]||new Set,c=new Set,l=new Set;for(d.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var d=o(e,n);d&&t.definitions.push(d)})),t}(t,"myBid")},626:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"payment"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"product_id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"payment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"product_id"},value:{kind:"Variable",name:{kind:"Name",value:"product_id"}}}],directives:[]}]}}],loc:{start:0,end:71}};t.loc.source={body:"mutation payment($product_id:ID!){\n  payment(product_id:$product_id)\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}var r={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.payment=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=r[n]||new Set,c=new Set,l=new Set;for(d.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var d=o(e,n);d&&t.definitions.push(d)})),t}(t,"payment")},674:function(e,n,t){"use strict";t.r(n);t(20);var d={name:"_id",data:function(){return{changed:!1,product:{},productId:this.$route.params.id,loading:!0,myBid:{},message:{activate:!1,message:"",color:null},bidDialog:!1,increase:null,min_increment:null,valid:!0}},mounted:function(){this.getProduct()},computed:{win:function(){if(this.product&&this.myBid&&this.product.price===this.myBid.price)return!0},ended:function(){return!this.diffDate}},methods:{diffDates:function(){var e=new Date,n=new Date(this.product.close_time)-e;if(n>0){var t=Math.floor(n/864e5),d=Math.floor(n%864e5/36e5),r=Math.round(n%864e5%36e5/6e4);this.diffDate=t+" أيام - "+d+" ساعة - "+r+" دقيقة"}else this.diffDate=!1},openBidDialog:function(){this.increase=this.product.min_increment,this.min_increment=this.product.min_increment,this.bidDialog=!0},bid:function(){var e=this,n=this.product.id,d=this.increase;this.$apollo.mutate({mutation:t(484),variables:{product_id:n,increase:d}}).then((function(n){n.data.BidIncrease&&(e.myBid=d,e.message={activate:!0,text:"your bid submitted",color:"success"},e.bidDialog=!1)}))},getProduct:function(){var e=this,n=this.productId;this.$apollo.query({query:t(515),variables:{id:n}}).then((function(n){e.product=n.data.product,e.product.features=JSON.parse(n.data.product.features),e.product.images=JSON.parse(n.data.product.images),e.diffDates(),e.$echo.channel("product."+e.product.id).listen("BidIncrease",(function(n){console.log(n),e.product.price=n.product.price,e.product.bids=n.bids,e.changed=!0,setInterval((function(){e.changed=!1}),3e3),clearInterval()})),e.getBid()})).catch((function(e){console.log(e)})).finally((function(){e.loading=!1}))},getBid:function(){var e=this;if(this.$auth.loggedIn){var n=this.product.id;this.$apollo.query({query:t(625),variables:{id:n}}).then((function(n){e.myBid=n.data.myBid}))}},pay:function(){var e=this.productId;this.$apollo.mutate({mutation:t(626),variables:{product_id:e}}).then((function(e){!1!==e.data.payment&&(window.location.href=e.data.payment)}))}}},r=t(66),o=t(79),c=t.n(o),l=t(220),v=t(197),m=t(78),f=t(678),k=t(679),h=t(496),_=t(455),y=t(495),N=t(481),S=t(198),w=t(161),D=t(483),$=t(459),V=t(538),x=t(650),F=t(534),E=t(452),I=t(651),B=t(467),component=Object(r.a)(d,(function(){var e=this,n=this,t=n.$createElement,d=n._self._c||t;return d("section",[d("v-snackbar",{attrs:{color:n.message.color},model:{value:n.message.activate,callback:function(e){n.$set(n.message,"activate",e)},expression:"message.activate"}},[n._v("\n    "+n._s(n.message.text)+"\n    "),d("v-btn",{attrs:{color:"white",icon:""},on:{click:function(e){n.message.activate=!1}}},[d("v-icon",[n._v("mdi-close")])],1)],1),n._v(" "),d("v-card",[d("v-card-text",[n.loading?n._e():d("v-row",[d("v-col",[d("small",{staticClass:"overline"},[n._v(n._s(n.$t("current_price")))]),n._v(" "),d("p",{class:n.changed?"red--text":"secondary--text"},[n._v(n._s(n.product.price)+" $")])]),n._v(" "),d("v-col",[d("small",{staticClass:"overline"},[n._v(n._s(n.$t("min_increment")))]),n._v(" "),d("p",[n._v(n._s(n.product.min_increment)+" $")])]),n._v(" "),d("v-col",[d("small",{staticClass:"overline"},[n._v(n._s(n.$t("bids")))]),n._v(" "),d("p",{class:n.changed?"red--text":"secondary--text",domProps:{textContent:n._s(n.product.bids)}})]),n._v(" "),d("v-col",[d("small",{staticClass:"overline"},[n._v(n._s(n.$t("end_time")))]),n._v(" "),n.diffDate?d("p",[n._v(n._s(n.diffDate))]):d("p",[n._v("انتهى")])])],1),n._v(" "),n.loading?n._e():d("v-layout",{staticClass:"mt-1 mb-1"},[d("v-spacer"),n._v(" "),n.win&&n.ended?d("v-btn",{attrs:{color:"success"},on:{click:n.pay}},[n._v("ادفع")]):n._e(),n._v(" "),d("v-spacer")],1),n._v(" "),n.loading?n._e():d("v-layout",[d("v-spacer"),n._v(" "),n.win?d("v-chip",{attrs:{color:"success"}},[n._v(n._s(n.$t("win")))]):d("div",[n.$auth.loggedIn&&n.$auth.user.verified&&n.$auth.user.id!=n.product.user.id&&!n.win?d("v-btn",{attrs:{color:"red",dark:""},on:{click:function(e){return n.openBidDialog()}}},[n._v("bid now\n          ")]):n._e(),n._v(" "),n.$auth.loggedIn&&!n.$auth.user.verified?d("v-btn",{attrs:{color:"red",dark:"",nuxt:"",to:"/setting/profile"}},[n._v("bid now\n          ")]):n._e(),n._v(" "),n.$auth.loggedIn?n._e():d("v-btn",{attrs:{color:"red",dark:"",nuxt:"",to:"/auth/login"}},[n._v(n._s(n.$t("bid")))])],1),n._v(" "),d("v-spacer")],1)],1)],1),n._v(" "),d("v-row",[d("v-col",{attrs:{cols:"12",md:"8"}},[d("v-skeleton-loader",{staticClass:"ma-1",attrs:{loading:n.loading,type:"article"}},[d("v-card",[d("v-card-title",[d("v-spacer"),n._v("\n            "+n._s(n.product.name)+"\n            "),d("v-spacer")],1),n._v(" "),d("v-card-text",[d("small",[n._v(n._s(n.$t("description")))]),n._v(" "),d("p",[n._v(n._s(n.product.description))]),n._v(" "),d("small",{staticClass:"mt-3"},[n._v(n._s(n.$t("detail")))]),n._v(" "),d("v-simple-table",{attrs:{dense:""},scopedSlots:n._u([{key:"default",fn:function(){return[d("tbody",n._l(n.product.features,(function(e,t){return d("tr",[d("td",[n._v(n._s(t))]),n._v(" "),d("td",[n._v(n._s(e))])])})),0)]},proxy:!0}])})],1)],1)],1)],1),n._v(" "),d("v-col",{attrs:{cols:"12",md:"4"}},[d("v-skeleton-loader",{staticClass:"mx-auto",attrs:{loading:n.loading,"max-width":"300",type:"card"}},[d("v-card",{staticClass:"mx-auto",attrs:{elevation:"24","max-width":"444"}},[d("v-system-bar",{attrs:{"lights-out":""}}),n._v(" "),d("v-carousel",{attrs:{continuous:!1,"delimiter-icon":"mdi-minus",height:"300","hide-delimiter-background":""}},n._l(n.product.images,(function(img){return d("v-carousel-item",{key:n.i},[d("v-img",{attrs:{alt:n.product.name,src:"/storage/"+img}})],1)})),1)],1)],1)],1)],1),n._v(" "),n.$auth.loggedIn&&n.$auth.user.verified?d("v-dialog",{attrs:{"max-width":"500px"},model:{value:n.bidDialog,callback:function(e){n.bidDialog=e},expression:"bidDialog"}},[d("v-card",[d("v-card-title",[n._v("\n        "+n._s(n.$t("bid"))+"\n      ")]),n._v(" "),d("v-card-text",[d("v-form",{model:{value:n.valid,callback:function(e){n.valid=e},expression:"valid"}},[d("v-text-field",{attrs:{min:n.min_increment,rules:[function(e){return!!e||n.$t("validation.required")},function(){return n.increase>=n.min_increment||"min: "+e.min_increment}],type:"number"},model:{value:n.increase,callback:function(e){n.increase=e},expression:"increase"}})],1)],1),n._v(" "),d("v-card-actions",[d("v-spacer"),n._v(" "),d("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){n.bidDialog=!1}}},[n._v("\n          "+n._s(n.$t("close"))+"\n        ")]),n._v(" "),d("v-btn",{staticClass:"white--text",attrs:{disabled:!n.valid,color:"cyan"},on:{click:n.bid}},[n._v(n._s(n.$t("continue")))])],1)],1)],1):n._e()],1)}),[],!1,null,"416d475a",null);n.default=component.exports;c()(component,{VBtn:l.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCarousel:f.a,VCarouselItem:k.a,VChip:h.a,VCol:_.a,VDialog:y.a,VForm:N.a,VIcon:S.a,VImg:w.a,VLayout:D.a,VRow:$.a,VSimpleTable:V.a,VSkeletonLoader:x.a,VSnackbar:F.a,VSpacer:E.a,VSystemBar:I.a,VTextField:B.a})}}]);