webpackJsonp([1],{"7zck":function(t,e){},Jg76:function(t,e){},MKwm:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[t._l(t.links,function(e){return r("v-list-tile",{key:e.title,attrs:{to:e.url}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}),t._v(" "),t.isUserLoggedIn?r("v-list-tile",{on:{click:t.onLogout}},[r("v-list-tile-action",[r("v-icon",[t._v("exit_to_app")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s("Logout")}})],1)],1):t._e()],2)],1),t._v(" "),r("v-toolbar",{attrs:{app:"",dark:"",color:"primary"}},[r("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",[r("router-link",{staticClass:"pointer",attrs:{to:"/",tag:"span"}},[t._v("Ad application")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.links,function(e){return r("v-btn",{key:e.title,attrs:{flat:"",to:e.url}},[r("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._v(" "),t.isUserLoggedIn?r("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[r("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1),t._v(" "),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("router-view")],1)],1),t._v(" "),t.error?[r("v-snackbar",{attrs:{timeout:5e3,"multi-line":!0,color:"error",value:!0},on:{input:t.closeError}},[t._v("\n        "+t._s(t.error.message||t.error)+"\n        "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:"",color:"indigo"},nativeOn:{click:function(e){return t.closeError(e)}}},[t._v("Close")])],1)]:t._e(),t._v(" "),r("v-footer",{attrs:{app:""}})],2)},staticRenderFns:[]};var s=r("VU/8")({data:function(){return{drawer:!1}},computed:{error:function(){return this.$store.getters.error},isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},links:function(){return this.isUserLoggedIn?[{title:"Orders",icon:"bookmark_border",url:"/orders"},{title:"New ad",icon:"note_add",url:"/new"},{title:"My ads",icon:"list",url:"/list"}]:[{title:"Login",icon:"lock",url:"/login"},{title:"Registration",icon:"face",url:"/registration"}]}},methods:{closeError:function(){this.$store.dispatch("clearError")},onLogout:function(){this.$store.dispatch("logoutUser"),this.$router.push("/")}}},n,!1,function(t){r("MKwm")},"data-v-58e8b191",null).exports,i=r("/ocq"),o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("div",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center pt-5",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{size:120,indeterminate:"",color:"primary"}})],1)],1)],1)],1):r("div",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-carousel",{attrs:{"delimiter-icon":"stop"}},t._l(t.promoAds,function(e){return r("v-carousel-item",{key:e.id,attrs:{src:e.imageSrc}},[r("div",{staticClass:"car-link"},[r("v-btn",{staticClass:"error",attrs:{to:"/ad/"+e.id}},[t._v(t._s(e.title))])],1)])}))],1)],1)],1),t._v(" "),r("v-container",{attrs:{"grid-list-lg":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.ads,function(e){return r("v-flex",{key:e.id,attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[r("v-card",[r("v-card-media",{attrs:{src:e.imageSrc,height:"200px"}}),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.title))]),t._v(" "),r("div",[t._v(t._s(e.description))])])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:"",to:"/ad/"+e.id}},[t._v("Open")]),t._v(" "),r("app-buy-modal",{attrs:{ad:e}})],1)],1)],1)}))],1)],1)])},staticRenderFns:[]};var l=r("VU/8")({computed:{promoAds:function(){return this.$store.getters.promoAds},ads:function(){return this.$store.getters.ads},loading:function(){return this.$store.getters.loading}}},o,!1,function(t){r("Jg76")},"data-v-7620fd18",null).exports,c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"400px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-btn",{staticClass:"warning",attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("Edit")]),t._v(" "),r("v-card",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-title",[r("h1",{staticClass:"text--primary"},[t._v("Edit ad")])])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-text",[r("v-text-field",{attrs:{name:"title",label:"Title",type:"text"},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),r("v-text-field",{attrs:{name:"description",label:"Description",type:"text","multi-line":""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{outline:"",color:"indigo",flat:""},on:{click:t.onCancel}},[t._v("Cansel")]),t._v(" "),r("v-btn",{staticClass:"success",attrs:{flat:""},on:{click:t.onSave}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},d={props:["id"],computed:{ad:function(){var t=this.id;return this.$store.getters.adById(t)},loading:function(){return this.$store.getters.loading}},components:{EditAdModal:r("VU/8")({props:["ad"],data:function(){return{modal:!1,editedTitle:this.ad.title,editedDescription:this.ad.description}},methods:{onCancel:function(){this.editedTitle=this.ad.title,this.editedDescription=this.ad.description,this.modal=!1},onSave:function(){""!==this.editedTitle&&""!==this.editedDescription&&(this.$store.dispatch("updateAd",{title:this.editedTitle,description:this.editedDescription,id:this.ad.id}),this.modal=!1)}}},c,!1,null,null,null).exports}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[t.loading?r("div",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center pt-5",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{size:120,indeterminate:"",color:"primary"}})],1)],1)],1)],1):r("v-card",[r("v-card-media",{attrs:{height:"300px",src:t.ad.imageSrc}}),t._v(" "),r("v-card-text",[r("h1",{staticClass:"text--primary"},[t._v(t._s(t.ad.title))]),t._v(" "),r("p",[t._v(t._s(t.ad.description))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("EditAdModal",{attrs:{ad:t.ad}}),t._v(" "),r("app-buy-modal",{attrs:{ad:t.ad}})],1)],1)],1)],1)],1)},staticRenderFns:[]},v=r("VU/8")(d,u,!1,null,null,null).exports,p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("h1",{staticClass:"test--secondary mb-3"},[t._v("My ads")]),t._v(" "),t._l(t.myAds,function(e){return r("v-card",{key:e.id,staticClass:"elevation-10 mb-3"},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-card-media",{attrs:{height:"100%",src:e.imageSrc}})],1),t._v(" "),r("v-flex",{attrs:{xs8:""}},[r("v-card-text",[r("h2",{staticClass:"text--primary"},[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.description))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"info",attrs:{to:"/ad/"+e.id}},[t._v("Open")])],1)],1)],1)],1)})],2)],1)],1)},staticRenderFns:[]},m=r("VU/8")({computed:{myAds:function(){return this.$store.getters.myAds}}},p,!1,null,null,null).exports,f={data:function(){return{valid:!1,title:"",description:"",promo:!1,image:null,imageSrc:""}},computed:{loading:function(){return this.$store.getters.loading}},methods:{createAd:function(){var t=this;if(this.$refs.form.validate()&&this.image){var e={title:this.title,description:this.description,promo:this.promo,image:this.image};this.$store.dispatch("createAd",e).then(function(){t.$router.push("/list")}).catch(function(){})}},triggerUpload:function(){this.$refs.fileInput.click()},onFileChange:function(t){var e=this,r=t.target.files[0],a=new FileReader;a.onload=function(t){e.imageSrc=a.result},a.readAsDataURL(r),this.image=r}}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("h1",{staticClass:"test--secondary mb-3"},[t._v("Create new ad")]),t._v(" "),r("v-form",{ref:"form",attrs:{validation:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{staticClass:"mb-3",attrs:{name:"title",label:"Ad title",type:"text",rules:[function(t){return!!t||"Titile is required"}],required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),r("v-text-field",{attrs:{name:"description",label:"Ad description",type:"test","multi-line":"",rules:[function(t){return!!t||"Description is required"}],required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"warning mb-3",on:{click:t.triggerUpload}},[t._v("\n          Upload\n          "),r("v-icon",{attrs:{right:"",dark:""}},[t._v("cloud_upload")])],1),t._v(" "),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}})],1)],1),t._v(" "),r("v-layout",[r("v-flex",{attrs:{xs12:""}},[t.imageSrc?r("img",{attrs:{src:t.imageSrc,height:"140px"}}):t._e()])],1),t._v(" "),r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-switch",{staticClass:"mt-3",attrs:{label:"Add to promo ?",color:"primary"},model:{value:t.promo,callback:function(e){t.promo=e},expression:"promo"}})],1)],1),t._v(" "),r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"success",attrs:{loading:t.loading,disabled:!t.valid||!t.image||t.loading},on:{click:t.createAd}},[t._v("Create ad")])],1)],1)],1)],1)],1)},staticRenderFns:[]},g=r("VU/8")(f,h,!1,null,null,null).exports,_={data:function(){return{email:"",password:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be more than 6 characters"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("loginUser",e).then(function(){t.$router.push("/")}).catch(function(t){return console.log(t)})}}},created:function(){this.$route.query.loginError&&this.$store.dispatch("setError","Please log in to access this page.")}},x={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[t._v("Login form")])],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{validation:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"password",label:"Password",type:"password",counter:6,rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.valid||t.loading},on:{click:t.onSubmit}},[t._v("Login")])],1)],1)],1)],1)],1)},staticRenderFns:[]},w=r("VU/8")(_,x,!1,null,null,null).exports,b={data:function(){var t=this;return{email:"",password:"",confirmPassword:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be more than 6 characters"}],confirmPasswordRules:[function(t){return!!t||"Confirm password is required"},function(e){return e===t.password||"Password does not match"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("registrUser",e).then(function(){t.$router.push("/")}).catch(function(t){return console.log(t)})}}}},y={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[t._v("Registration form")])],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{validation:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",counter:6,rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"confirm-password",label:"Confirm password",type:"password",counter:6,rules:t.confirmPasswordRules},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.valid||t.loading},on:{click:t.onSubmit}},[t._v("Create account")])],1)],1)],1)],1)],1)},staticRenderFns:[]},k=r("VU/8")(b,y,!1,null,null,null).exports,E={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[t.loading?r("v-flex",{staticClass:"text-xs-center pt-5",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{size:120,indeterminate:"",color:"primary"}})],1):t.loading||0===t.orders.length?r("v-flex",{staticClass:"text-xs-center pt-5",attrs:{xs12:""}},[r("h1",{staticClass:"text--secondary"},[t._v("You have no orders")])]):r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("v-list",{attrs:{"two-line":"",subheader:""}},[r("h1",{staticClass:"text--secondary mb-3 ml-3 pt-3"},[t._v("Orders")]),t._v(" "),t._l(t.orders,function(e){return r("v-list-tile",{key:e.id,attrs:{avatar:""}},[r("v-list-tile-action",[r("v-checkbox",{attrs:{color:"success","input-value":e.done},on:{change:function(r){t.markDone(e)}}})],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),r("v-list-tile-sub-title",[t._v(t._s(e.phone))])],1),t._v(" "),r("v-list-tile-action",[r("v-btn",{staticClass:"primary",attrs:{to:"/ad/"+e.adId}},[t._v("Open")])],1)],1)})],2)],1)],1)],1)},staticRenderFns:[]},C=r("VU/8")({computed:{loading:function(){return this.$store.getters.loading},orders:function(){return this.$store.getters.orders}},methods:{markDone:function(t){this.$store.dispatch("markOrderDone",t.id).then(function(){t.done=!0}).catch(function(){})}},created:function(){this.$store.dispatch("fetchOrders")}},E,!1,null,null,null).exports,L=r("NYxO"),$=r("fZjL"),U=r.n($),A=r("Xxa5"),S=r.n(A),R=r("Dd8w"),I=r.n(R),O=r("exGp"),P=r.n(O),D=r("Zrlr"),F=r.n(D),T=r("Sazm"),q=function t(e,r,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;F()(this,t),this.title=e,this.description=r,this.ownedId,this.imageSrc=n,this.promo=s,this.id=i},V={state:{ads:[]},getters:{ads:function(t){return t.ads},promoAds:function(t){return t.ads.filter(function(t){return t.promo})},myAds:function(t){return t.ads},adById:function(t){return function(e){return t.ads.find(function(t){return t.id===e})}}},mutations:{createAd:function(t,e){t.ads.push(e)},loadAds:function(t,e){t.ads=e},updateAd:function(t,e){var r=e.title,a=e.description,n=e.id,s=t.ads.find(function(t){return t.id===n});s.title=r,s.description=a}},actions:{createAd:function(t,e){var r=this,a=t.commit,n=t.getters;return P()(S.a.mark(function t(){var s,i,o,l,c,d;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.image,a("clearError"),a("setLoading",!0),t.prev=3,i=new q(e.title,e.description,n.user.id,"",e.promo),t.next=7,T.database().ref("ads").push(i);case 7:return o=t.sent,l=s.name.slice(s.name.lastIndexOf(".")),t.next=11,T.storage().ref("ads/"+o.key+"."+l).put(s);case 11:return c=t.sent,d=c.metadata.downloadURLs[0],t.next=15,T.database().ref("ads").child(o.key).update({imageSrc:d});case 15:a("setLoading",!1),a("createAd",I()({},i,{id:o.key,imageSrc:d})),t.next=24;break;case 19:throw t.prev=19,t.t0=t.catch(3),a("setError",t.t0.message),a("setLoading",!1),t.t0;case 24:case"end":return t.stop()}},t,r,[[3,19]])}))()},fetchAds:function(t){var e=this,r=t.commit;return P()(S.a.mark(function t(){var a,n,s;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),a=[],t.prev=3,t.next=6,T.database().ref("ads").once("value");case 6:n=t.sent,s=n.val(),U()(s).forEach(function(t){var e=s[t];a.push(new q(e.title,e.description,e.ownerId,e.imageSrc,e.promo,t))}),r("setLoading",!1),r("loadAds",a),t.next=18;break;case 13:throw t.prev=13,t.t0=t.catch(3),r("setError",t.t0.message),r("setLoading",!1),t.t0;case 18:case"end":return t.stop()}},t,e,[[3,13]])}))()},updateAd:function(t,e){var r=this,a=t.commit,n=e.title,s=e.description,i=e.id;return P()(S.a.mark(function t(){return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),a("setLoading",!0),t.prev=2,t.next=5,T.database().ref("ads").child(i).update({title:n,description:s});case 5:a("updateAd",{title:n,description:s,id:i}),a("setLoading",!1),t.next=14;break;case 9:throw t.prev=9,t.t0=t.catch(2),a("setError",t.t0.message),a("setLoading",!1),t.t0;case 14:case"end":return t.stop()}},t,r,[[2,9]])}))()}}},j=function t(e){F()(this,t),this.id=e},z={state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{registrUser:function(t,e){var r=this,a=t.commit,n=e.email,s=e.password;return P()(S.a.mark(function t(){var e;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),a("setLoading",!0),t.prev=2,t.next=5,T.auth().createUserWithEmailAndPassword(n,s);case 5:e=t.sent,a("setUser",new j(e.uid)),a("setLoading",!1),t.next=15;break;case 10:throw t.prev=10,t.t0=t.catch(2),a("setLoading",!1),a("setError",t.t0.message),t.t0;case 15:case"end":return t.stop()}},t,r,[[2,10]])}))()},loginUser:function(t,e){var r=this,a=t.commit,n=e.email,s=e.password;return P()(S.a.mark(function t(){var e;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),a("setLoading",!0),t.prev=2,t.next=5,T.auth().signInWithEmailAndPassword(n,s);case 5:e=t.sent,a("setUser",new j(e.uid)),a("setLoading",!1),t.next=15;break;case 10:throw t.prev=10,t.t0=t.catch(2),a("setLoading",!1),a("setError",t.t0),t.t0;case 15:case"end":return t.stop()}},t,r,[[2,10]])}))()},autoLoginUser:function(t,e){(0,t.commit)("setUser",new j(e.uid))},logoutUser:function(t){var e=t.commit;T.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user},isUserLoggedIn:function(t){return null!==t.user}}},M=function t(e,r,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;F()(this,t),this.name=e,this.phone=r,this.adId=a,this.done=n,this.id=s},B={state:{orders:[]},mutations:{loadOrders:function(t,e){t.orders=e}},actions:{createOrder:function(t,e){var r=this,a=t.commit,n=t.getters,s=e.name,i=e.phone,o=e.adId;e.ownerId;return P()(S.a.mark(function t(){var e;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=new M(s,i,o),a("clearError"),t.prev=2,t.next=5,T.database().ref("/users/"+n.user.id+"/orders").push(e);case 5:t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(2),a("setError",t.t0.message),t.t0;case 11:case"end":return t.stop()}},t,r,[[2,7]])}))()},fetchOrders:function(t){var e=this,r=t.commit,a=t.getters;return P()(S.a.mark(function t(){var n,s,i;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("setLoading",!0),r("clearError"),n=[],t.prev=3,t.next=6,T.database().ref("/users/"+a.user.id+"/orders").once("value");case 6:s=t.sent,i=s.val(),U()(i).forEach(function(t){var e=i[t];n.push(new M(e.name,e.phone,e.adId,e.done,t))}),r("loadOrders",n),r("setLoading",!1),t.next=18;break;case 13:throw t.prev=13,t.t0=t.catch(3),r("setLoading",!1),r("setError",t.t0.message),t.t0;case 18:case"end":return t.stop()}},t,e,[[3,13]])}))()},markOrderDone:function(t,e){var r=this,a=t.commit,n=t.getters;return P()(S.a.mark(function t(){return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),t.next=3,T.database().ref("/users/"+n.user.id+"/orders").child(e).update({done:!0});case 3:t.prev=3,t.next=10;break;case 6:throw t.prev=6,t.t0=t.catch(3),a("setError",t.t0.message),t.t0;case 10:case"end":return t.stop()}},t,r,[[3,6]])}))()}},getters:{doneOrders:function(t){return t.orders.filter(function(t){return t.done})},undoneOrders:function(t){return t.orders.filter(function(t){return!t.done})},orders:function(t,e){return e.undoneOrders.concat(e.doneOrders)}}};a.a.use(L.a);var W=new L.a.Store({modules:{ads:V,user:z,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{setLoading:function(t,e){(0,t.commit)("setLoading",e)},setError:function(t,e){(0,t.commit)("setError",e)},clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}},orders:B}}),Y=function(t,e,r){W.getters.user?r():r("/login?loginError=true")};a.a.use(i.a);var J=new i.a({routes:[{path:"",name:"home",component:l},{path:"/ad/:id",props:!0,name:"ad",component:v},{path:"/list",name:"list",component:m,beforeEnter:Y},{path:"/new",name:"new",component:g,beforeEnter:Y},{path:"/login",name:"login",component:w},{path:"/registration",name:"registration",component:k},{path:"/orders",name:"orders",component:C,beforeEnter:Y}],mode:"history"}),N=r("3EgV"),K=r.n(N),H=(r("7zck"),{render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"400px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-btn",{staticClass:"primary",attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("Buy")]),t._v(" "),r("v-card",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-title",[r("h1",{staticClass:"text--primary"},[t._v("Do you wan't to buy it ?")])])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-text",[r("v-text-field",{attrs:{name:"name",label:"Your name",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("v-text-field",{attrs:{name:"phone",label:"Your phone",type:"text","multi-line":""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{outline:"",color:"indigo",flat:"",disabled:t.localLoading},on:{click:t.onCancel}},[t._v("Close")]),t._v(" "),r("v-btn",{staticClass:"success",attrs:{flat:"",disabled:t.localLoading,loading:t.localLoading},on:{click:t.onSave}},[t._v("Buy it!")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}),Z=r("VU/8")({props:["ad"],data:function(){return{modal:!1,name:"",phone:"",localLoading:!1}},methods:{onCancel:function(){this.name="",this.phone="",this.modal=!1},onSave:function(){var t=this;""!==this.name&&""!==this.phone&&(this.localLoading=!0,this.$store.dispatch("createOrder",{name:this.name,phone:this.phone,adId:this.ad.id,ownerId:this.ad.ownerId}).finally(function(){t.name="",t.phone="",t.localLoading=!1,t.modal=!1}))}}},H,!1,null,null,null).exports;a.a.use(K.a),a.a.component("app-buy-modal",Z),a.a.config.productionTip=!1,new a.a({el:"#app",router:J,store:W,components:{App:s},template:"<App/>",created:function(){var t=this;T.initializeApp({apiKey:"AIzaSyC35T6_M1nT0DjwEwwW5QgJcsbnv_nWFUY",authDomain:"addprojectvue.firebaseapp.com",databaseURL:"https://addprojectvue.firebaseio.com",projectId:"addprojectvue",storageBucket:"addprojectvue.appspot.com",messagingSenderId:"985240235712"}),T.auth().onAuthStateChanged(function(e){e&&t.$store.dispatch("autoLoginUser",e)}),this.$store.dispatch("fetchAds")}})}},["NHnr"]);
//# sourceMappingURL=app.bf21401c8725edb4b8e8.js.map