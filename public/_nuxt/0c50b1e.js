(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{254:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("66a9c1c4",content,!0,{sourceMap:!1})},257:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("cf101f88",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";e.a={hello:"مرحبا بالعالم",doctor:"طبيب",auction:"المزاد",bid:"مزايدة",bids:"مزايدات",win:"رابح",end_time:"تاريخ الانتهاء",doctors:"الأطباء",pharmacy:"صيدلي",pharmacies:"الصيادلة",reservations:"الحجوزات",search:"البحث",setting:"الاعدادات",change_password:"تغيير كلمة السر",save:"حفظ",continue:"استمرار",job:"مهنة",aboutUs:"من نحن",features:"خصائص",reserve_now:"احجز الان",current_price:"السعر الحالي",min_increment:"حد الادنى للمزايدة",map:"خريطة",detail:"معلومات",wilaya:"ولاية",address:"عنوان",lng:"خط الطول",lat:"خط العرض",description:"وصف",close:"اغلاق",another_email:"يبدو ان هذا البريد الالكتروني موجود بالفعل",create:"انشاء",browse_products:"تصفح المنتجات",my_products:"منتوجاتي",new_product:"منتوج جديد",edit_product:"تعديل جديد",category:"الفئة",price:"السعر",images:"الصور",product:{name:"اسم المنتج",new:" جديد",used:"مستخدم"},auth:{username:"اسم المستخدم",login:"تسجيل الدخول",phone:"هاتف",forgot:"نسيت كلمة السر",email:"الريد الالكتروني",notAuthorized:"لا يمكنك تسجيل الدخول كلمة السر او البريد الالكتروني خاطئ",password:"كلمة السر",confirm_password:"تأكيد كلمة السر",name:"الاسم الكامل",remember:"تذكرني",register:"حساب جديد",avatar:"صورة حساب",change_password:"تغيير كلمة السر",logout:"تسجيل الخروج",current_password:"كلمة السر الحالية"},validation:{email:"يجب ان يكون البريد الاكتروني صحيح",unique:"هذا مستعمل من قبل",phone:"يجب ان يكون رقم الهاتف صحيح",required:"هذا الحقل مطلوب",confirm_password:"كلمة السر لا تطابق"},messages:{missed_phone:"لاستخدام حسابك تحتاج الى رقم هاتفك",unverified_phone:"يجب التحقق من رقم هاتفك",unverified_email:"يجب التحقق من البريدك الالكتروني",unverified_payment:"يجب التحقق من الدفع"},pages:{home:"الرئيسية",contacts:"اتصال"}}},288:function(t,e,n){"use strict";var r={name:"ProfileMenu",data:function(){return{verification:33,links:[{icon:"account",link:"/account/profile",name:"profile"},{icon:"shield-edit",link:"/setting/password",name:"auth.change_password"},{icon:"check-decagram",link:"/setting/profile",name:"verification"},{icon:"credit-card-settings-outline",link:"/setting/billing",name:"billing"}]}},computed:{auth:function(){return this.$auth.loggedIn},user:function(){return this.$auth.user}},methods:{logout:function(){this.$auth.logout(),this.$apollo.mutate({mutation:n(335)}),this.$apolloHelpers.onLogout(),this.$router.push("/auth/login")}}},o=n(68),c=n(79),l=n.n(c),v=n(197),d=n(220),m=n(198),f=n(78),_=n(442),h=n(199),k=n(162),w=n(200),x=n(126),V=n(201),L=n(202),y=n(29),I=n(108),C=n(443),$=n(456),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("v-menu",{attrs:{"nudge-width":200,"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-avatar",{attrs:{color:"color"}},[/(https?:\/\/[^\s]+)/.test(t.user.avatar)?n("v-img",{attrs:{alt:t.user.name,src:t.user.avatar}}):n("v-img",{attrs:{alt:t.user.name,src:"/storage/"+t.user.avatar}})],1)],1)]}}],null,!1,1688751899)},[t._v(" "),n("v-card",[n("v-list",[n("v-list-item",[n("v-list-item-avatar",[/(https?:\/\/[^\s]+)/.test(t.user.avatar)?n("v-img",{attrs:{alt:t.user.name,src:t.user.avatar}}):n("v-img",{attrs:{alt:t.user.name,src:"/storage/"+t.user.avatar}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.user.name))]),t._v(" "),n("v-list-item-subtitle",[t.user.verified?n("span",[t._v("Verified")]):t._e()])],1),t._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{nuxt:"",to:"/setting",icon:""}},[n("v-icon",[t._v("mdi-settings")])],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),t._l(t.links,(function(link){return n("v-list-item",{attrs:{to:link.link,nuxt:""}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-"+t._s(link.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t(link.name)))])],1)],1)}))],2),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red",dark:"",text:""},on:{click:function(e){return t.logout()}}},[n("v-icon",[t._v("mdi-power")]),t._v("\n        "+t._s(t.$t("auth.logout"))+"\n      ")],1),t._v(" "),n("v-spacer")],1)],1)],1):n("div",[n("v-btn",{staticClass:"white--text font-weight-black pink-special-bg",attrs:{nuxt:"",to:"/auth/login",rounded:""}},[t._v("\n    تسجيل الدخول\n  ")])],1)}),[],!1,null,"c6a77984",null),S=component.exports;l()(component,{VAvatar:v.a,VBtn:d.a,VCard:m.a,VCardActions:f.a,VDivider:_.a,VIcon:h.a,VImg:k.a,VList:w.a,VListItem:x.a,VListItemAction:V.a,VListItemAvatar:L.a,VListItemContent:y.a,VListItemIcon:I.a,VListItemSubtitle:y.b,VListItemTitle:y.c,VMenu:C.a,VSpacer:$.a});n(49);var A={name:"ChangeLang",mounted:function(){this.rtl()},methods:{rtl:function(){this.$vuetify.rtl="ar"===this.$i18n.locale},switchLang:function(t){this.$i18n.setLocaleCookie(t),this.$vuetify.rtl="ar"===t,this.$router.replace(this.switchLocalePath(t))}}},D=Object(o.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{color:"white",dark:"",icon:""}},r),[t._v("\n      "+t._s(t.$i18n.locale)+" "),n("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[t._v(" "),n("v-list",t._l(t.$i18n.locales,(function(e){return n("v-list-item",{on:{click:function(n){return t.switchLang(e.code)}}},[n("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1)}),[],!1,null,"bc2ed00e",null),E=D.exports;l()(D,{VBtn:d.a,VIcon:h.a,VList:w.a,VListItem:x.a,VListItemTitle:y.c,VMenu:C.a});var N={components:{ProfileMenu:S,ChangeLang:E},data:function(){return{links:[{icon:"facebook",link:"https://www.fb.com"},{icon:"instagram",link:"https://www.instagram.com"},{icon:"twitter",link:"https://www.twitter.com"}],drawer:!1,items:[{title:"blog",icon:"mdi-help-box"}]}},computed:{auth:function(){return this.$auth.loggedIn}},mounted:function(){},methods:{}},M=(n(379),n(452)),F=n(457),T=n(458),j=n(459),O=n(460),B=n(461),P=n(462),z=n(463),H=n(464),G=Object(o.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[t.$vuetify.breakpoint.smAndDown?n("v-navigation-drawer",{attrs:{app:"",fixed:"",dark:"",color:"pink darken-3"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Application")]),t._v(" "),n("v-list-item-subtitle",[t._v("Subtext")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.link,nuxt:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t(e.title)))])],1)],1)}))],2)],1):t._e(),t._v(" "),n("v-app-bar",{attrs:{"elevate-on-scroll":"",color:"white",light:"",app:""}},[n("v-container",{staticClass:"pa-0 fill-height"},[t.$vuetify.breakpoint.smAndDown?n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}):t._e(),t._v(" "),n("v-btn",{staticClass:"font-weight-black pink-special-text",attrs:{nuxt:"",to:"/",color:"pink darken-3",text:""}},[t._v("الرئيسية")]),t._v(" "),n("v-btn",{staticClass:"font-weight-black pink-special-text",attrs:{text:""}},[t._v("اعلانات ثابتة")]),t._v(" "),n("v-btn",{staticClass:"font-weight-black pink-special-text",attrs:{nuxt:"",to:"/page/about-us",text:""}},[t._v("من نحن")]),t._v(" "),n("v-spacer"),t._v(" "),n("nuxt-link",{staticClass:"pa-0",attrs:{to:"/"}},[n("v-img",{attrs:{src:"/logo.png",width:"100px",height:"64px"}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("ProfileMenu")],1)],1),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("v-footer",{attrs:{color:"white",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(link){return n("v-btn",{key:link,staticClass:"my-2",attrs:{href:link.link,color:"black",text:"",taget:"_blank",tag:"a",rounded:""}},[n("v-icon",[t._v("mdi-"+t._s(link.icon))])],1)})),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-card",{attrs:{color:"transparent",flat:""}},[n("v-card-title",[t._v("إبرام للمزادات")]),t._v(" "),n("v-card-text",[t._v("\n                شركة قطرية ,\n                توفر منصة موثوقة للمزاد الالكتروني تتيح من خلالها عرض العقارات\n                والأصول والسلع والمنتجات بغرض بيعها عن طريق المزادات, وتتميز\n                المنصة بالمرونة في البيع والشراء الكترونياً وتهدف لافعال مبدأ\n                العدالة والشفافية والنزاهة وتكافؤ الفرص وبخضوع تام للعرض\n                والطلب.\n              ")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[n("v-card",{attrs:{color:"transparent",flat:""}},[n("v-card-title",[t._v("اعرف عنا")]),t._v(" "),n("v-card-text",[n("v-btn",{attrs:{tag:"a",small:"",nuxt:"",to:"/page/about-us",text:""}},[t._v("من نحن ؟")]),n("br"),t._v(" "),n("v-btn",{attrs:{tag:"a",small:"",nuxt:"",to:"/page/privacy",text:""}},[t._v("سياسة الخصوصية")]),n("br"),t._v(" "),n("v-btn",{attrs:{tag:"a",small:"",nuxt:"",to:"/terms",text:""}},[t._v("شروط الاستخدام")]),n("br")],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[n("v-card",{attrs:{color:"transparent",flat:""}},[n("v-card-title",[t._v("روابط هامة")]),t._v(" "),n("v-card-text",[n("v-btn",{attrs:{tag:"a",small:"",nuxt:"",to:"/how",text:""}},[t._v("كيفية العمل")]),n("br"),t._v(" "),n("v-btn",{attrs:{tag:"a",small:"",nuxt:"",to:"/questions",text:""}},[t._v("اسئلة شائعة")]),n("br"),t._v(" "),n("v-btn",{attrs:{tag:"a",small:"",nuxt:"",to:"/ticket/list",text:""}},[t._v("الدعم")]),n("br")],1)],1)],1)],1)],1),t._v(" "),n("v-col",{staticClass:"py-4 text-center",attrs:{cols:"12"}},[t._v("\n        "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("© mazadak")])])],2)],1)],1)}),[],!1,null,null,null);e.a=G.exports;l()(G,{VApp:M.a,VAppBar:F.a,VAppBarNavIcon:T.a,VBtn:d.a,VCard:m.a,VCardText:f.b,VCardTitle:f.c,VCol:j.a,VContainer:O.a,VDivider:_.a,VFooter:B.a,VIcon:h.a,VImg:k.a,VList:w.a,VListItem:x.a,VListItemAvatar:L.a,VListItemContent:y.a,VListItemIcon:I.a,VListItemSubtitle:y.b,VListItemTitle:y.c,VMain:P.a,VNavigationDrawer:z.a,VRow:H.a,VSpacer:$.a})},304:function(t,e,n){t.exports=n(305)},321:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;e.$auth.loggedIn&&n("/home")}},322:function(t,e,n){"use strict";n.r(e),e.default=function(t){t.isHMR,t.app,t.store,t.route,t.params,t.error,t.redirect;var e=new Date;e.setTime(e.getTime()+31536e6),document.cookie="lang=ar; path=/; expires="+e.toUTCString(),console.log("lang")}},329:function(t,e,n){"use strict";n(254)},330:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"h1[data-v-bb822b6a]{font-size:20px}",""]),t.exports=r},335:function(t,e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"logout"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:53}};n.loc.source={body:"mutation\n{\n  logout\n  {\n    status\n    message\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(t,e){if("FragmentSpread"===t.kind)e.add(t.name.value);else if("VariableDefinition"===t.kind){var n=t.type;"NamedType"===n.kind&&e.add(n.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){r(t,e)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){r(t,e)})),t.definitions&&t.definitions.forEach((function(t){r(t,e)}))}var o={};n.definitions.forEach((function(t){if(t.name){var e=new Set;r(t,e),o[t.name.value]=e}})),t.exports=n},379:function(t,e,n){"use strict";n(257)},380:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".pink-special-text{color:#8e143a}.pink-special-bg{background:#b51a57;background:linear-gradient(90deg,#b51a57,#803150)}",""]),t.exports=r},396:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));n(45),n(31);var r=function(){return{locales:["en","ar"],locale:"en"}},o={SET_LANG:function(t,e){t.locales.includes(e)&&(t.locale=e)}}},89:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}}},o=(n(329),n(68)),c=n(79),l=n.n(c),v=n(452),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bb822b6a",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[304,37,10,12,13,11,39,42,40,45,46,47,48,41,38,52,51,43,50,49,44,9,6,7]]]);