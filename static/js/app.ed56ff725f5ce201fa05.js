webpackJsonp([0],[,,,function(t,e,s){"use strict";var a=s(4),n=s(80),i=s(57),o=s.n(i),r=s(64),u=s.n(r),l=s(63),c=s.n(l),d=s(60),p=s.n(d),m=s(61),v=s.n(m),f=s(62),h=s.n(f),_=s(65),g=s.n(_),b=s(67),C=s.n(b),y=s(58),w=s.n(y),V=s(59),k=s.n(V),$=s(66),x=s.n($);a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Hello",component:o.a},{path:"/register",name:"register",component:u.a},{path:"/login",name:"login",component:c.a},{path:"/createKeep",name:"createKeep",component:p.a},{path:"/createVault",name:"createVault",component:v.a},{path:"/keeps",component:h.a,children:[{path:"",name:"keeps",component:w.a},{path:"new",name:"keeps.new",component:p.a},{path:":id",name:"keeps.show",component:g.a}]},{path:"/vaults",component:C.a,children:[{path:"",name:"vaults",component:k.a},{path:"new",name:"vaults.new",component:v.a},{path:":id",name:"vaults.show",component:x.a}]}]})},,,,,,,function(t,e,s){"use strict";var a=s(12),n=s.n(a),i=s(3),o=n.a.create({baseURL:"http://localhost:3000/api/",timeout:2e3,withCredentials:!0}),r=n.a.create({baseURL:"http://localhost:3000/",timeout:2e3,withCredentials:!0}),u={loginMessage:"",user:{name:"",email:""},isGuest:!1,myVaults:{},myKeeps:{},currentVaultId:"",error:{}},l=function(t){u.error=t};e.a={state:u,actions:{register:function(t){console.debug("In the register method in the store."),r.post("register",t).then(function(t){u.user=t.data.data}).catch(l),i.a.push({path:"keeps/"})},login:function(t){r.post("login",t).then(function(t){console.debug("res.data :",t.data),t.data.error?u.loginMessage="Invalid email or password.":(u.user=t.data.data,console.debug("state.user: ",u.user),i.a.push({path:"keeps/"}))}).catch(l)},guestLogin:function(){u.user={_id:"00000",name:" ",email:"guest",password:null},u.user.isGuest=!0,i.a.push({path:"/keeps/"})},createKeep:function(t){o.post("keeps",t).then(function(t){u.keeps=t.data.data,u.myKeeps.push(u.keeps)}).catch(l),i.a.push({path:"/keeps/"})},createVault:function(t){o.post("vaults",t).then(function(t){}).catch(l)},getKeeps:function(){o.get("keeps").then(function(t){u.keeps=t.data.data}).catch(l)},getVaults:function(){o.get("vaults").then(function(t){u.myVaults=t.data.data}).catch(l)},setKeepToVault:function(t,e){o.get("vaults/"+e).then(function(s){var a=s.data.data.keeps;s.data.data.keeps.push(t);var n={};n.keeps=a,o.put("vaults/"+e,n).then(function(t){}).catch(l)}).catch(l),this.incrementVaults(t._id),this.flyerGetVaults(""),i.a.push({path:"/keeps/"})},sendToCurrentVault:function(){i.a.push({name:"readVault"})},flyerGetKeeps:function(t){o.get("keeps/").then(function(t){u.myKeeps=t.data.data}).catch(l)},flyerGetKeep:function(t){o.get("keeps/"+t).then(function(t){u.myKeeps=t.data.data}).catch(l)},flyerGetVaults:function(t){o.get("vaults/").then(function(t){u.myVaults=t.data.data}).catch(l)},flyerGetVault:function(t){o.get("vaults/"+t).then(function(t){u.myVaults=[],u.myVaults.push(t.data.data)}).catch(l)},deleteVault:function(t){console.debug("In store delete vault method with: ",t),o.delete("vaults/"+t).then(function(t){u.myVaults=t.data.data,i.a.push({path:"/vaults/"})}).catch(l)},deleteKeep:function(t){o.delete("keeps/"+t).then(function(t){u.myVaults=t.data.data,i.a.push({path:"/keeps/"})}).catch(l)},incrementViews:function(t){o.get("keeps/"+t).then(function(e){var s=e.data.data;s.views=s.views+1,o.put("keeps/"+t,s).then(function(t){}).catch(l)}).catch(l)},incrementVaults:function(t){o.get("keeps/"+t).then(function(e){var s=e.data.data;s.timesVaulted=s.timesVaulted+1,o.put("keeps/"+t,s).then(function(t){}).catch(l)}).catch(l)},userHasVaults:function(){for(var t=u.myVaults,e=u.user,s=0;s<t.length;s++){if(t[s].userId==e._id)return!0}return!1},sendToRegister:function(){i.a.push("/register")},sendToLogin:function(){i.a.push("/login")}}}},function(t,e,s){s(47);var a=s(1)(s(30),s(72),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{}},methods:{login:function(){var t={};t.email=this.email,t.password=this.password,this.$root.store.actions.login(t)},register:function(){var t={};t.name=this.name,t.email=this.email,t.password=this.password,this.$root.store.actions.register(t)},userHasVaults:function(){return"/vaults"!=this.$route.fullPath&&this.$root.store.actions.userHasVaults()},showKeepsButton:function(){var t=this.$route.fullPath;return console.debug("route",t),"/keeps/"!=t&&"/keeps"!=t},showNewKeepButton:function(){var t=this.$route.fullPath,e=this.$root.store.state.user.isGuest;return"/keeps/new"!=t&&!e},showNewVaultButton:function(){var t=this.$route.fullPath,e=this.$root.store.state.user.isGuest;return"/vaults/new"!=t&&!e}},mounted:function(){this.$root.store.actions.flyerGetVaults()}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"keeps",data:function(){return{showKeepList:!1}},methods:{},mounted:function(){this.$root.store.actions.flyerGetKeeps(this.$route.params.id)},computed:{myKeeps:function(){return this.$root.store.state.myKeeps}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vaults",data:function(){return{showKeepList:!1}},methods:{userVaults:function(t){var e=this;return this.out_array=t.filter(function(t){return t.userId==e.$root.store.state.user._id}),this.out_array}},mounted:function(){this.$root.store.actions.flyerGetVaults(this.$route.params.id)},computed:{myvaults:function(){return this.$root.store.state.myVaults}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"createKeep",data:function(){return{title:"",imageUrl:"",articleLink:"",tags:""}},methods:{createKeep:function(){console.debug("Inside create keep method.");var t={};t.title=this.title,t.imageUrl=this.imageUrl,t.articleLink=this.articleLink,t.tags=this.tags,t.userId=this.$root.store.state.user._id,this.$root.store.actions.createKeep(t),this.title="",this.imageUrl="",this.articleLink="",this.tags=""},getKeeps:function(){this.$root.store.actions.getKeeps()}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"createKeep",data:function(){return{name:"",description:"",imageUrl:""}},methods:{createVault:function(){var t={};t.name=this.name,t.imageUrl=this.imageUrl,t.description=this.description,t.userId=this.$root.store.state.user._id,this.$root.store.actions.createVault(t),this.name="",this.imageUrl="",this.description=""}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",data:function(){return{methods:{},mounted:function(){}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var t={};t.email=this.email,t.password=this.password,this.$root.store.actions.login(t)},guestLogin:function(){this.$root.store.actions.guestLogin()},register:function(){this.$root.store.actions.sendToRegister()}},mounted:function(){void 0===this.$root.store.state.user.email?this.$root.store.state.loginMessage="Please log in.":(this.$root.store.state.user={},this.$root.store.state.loginMessage="You have been logged out.")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"register",data:function(){return{name:"",email:"",password:""}},methods:{register:function(){console.debug("inside the register method.");var t={};t.name=this.name,t.email=this.email,t.password=this.password,console.debug("registerObject: ",t),this.$root.store.actions.register(t)},guestLogin:function(){this.$root.store.actions.guestLogin()},login:function(){this.$root.store.actions.sendToLogin()}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"keeps",data:function(){return{showVaultCards:!1,showAllVaultCards:!1}},methods:{sendToKeep:function(t,e){console.debug("In sendToKeep with keep object",t),console.debug("In sendToKeep with vaultId",e),console.debug("my vaults: ",this.$root.store.state.myVaults);for(var s=this.$root.store.state.myVaults,a=0;a<s.length;a++){var n=s[a];n._id==e&&(console.debug("70:this is the vault you want: ",n),n.keeps.push(t))}console.debug("my vaults after push: ",this.$root.store.state.myVaults),this.$nextTick(function(){console.debug("In next tick"),this.$root.store.state.myVaults}),this.$root.store.actions.setKeepToVault(t,e)},userVaults:function(t){var e=this;return this.out_array=t.filter(function(t){return t.userId==e.$root.store.state.user._id}),this.out_array},openVaults:function(){console.debug("In open vaults function."),this.showVaultCards=!this.showVaultCards},deleteKeep:function(t){console.debug("In delete Keep function with: ",t),this.$root.store.actions.deleteKeep(t._id)},showVaultMeButton:function(){return this.$root.store.actions.userHasVaults()}},mounted:function(){this.$nextTick(function(){console.debug("In next tick")}),console.debug("Hello World from show keep."),console.debug("params.id: ",this.$route.params.id),this.$root.store.actions.flyerGetKeep(this.$route.params.id),this.$root.store.actions.getVaults(),this.$root.store.actions.incrementViews(this.$route.params.id)},computed:{myKeeps:function(){return this.$root.store.state.myKeeps},myVaults:function(){return this.$root.store.state.myVaults}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"keeps",data:function(){return{showVaultCards:!1,showAllVaultCards:!1}},methods:{deleteVault:function(t){console.debug("In delete vault function with: ",t),this.$root.store.actions.deleteVault(t)}},mounted:function(){console.log("Hello World from show keep."),console.log("params.id: ",this.$route.params.id),this.$root.store.actions.flyerGetVault(this.$route.params.id)},computed:{myVault:function(){return this.$root.store.state.myVaults}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(4),n=s(11),i=s.n(n),o=s(3),r=s(10);a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,data:function(){return{store:r.a}},template:"<App/>",components:{App:i.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){t.exports=s.p+"static/img/logo.acba0ca.jpg"},function(t,e,s){s(52);var a=s(1)(s(31),s(77),"data-v-b526188e",null);t.exports=a.exports},function(t,e,s){s(48);var a=s(1)(s(32),s(73),"data-v-7405872c",null);t.exports=a.exports},function(t,e,s){s(43);var a=s(1)(s(33),s(68),"data-v-01e14a57",null);t.exports=a.exports},function(t,e,s){s(44);var a=s(1)(s(34),s(69),"data-v-0824aeac",null);t.exports=a.exports},function(t,e,s){s(53);var a=s(1)(s(35),s(78),"data-v-e704ef46",null);t.exports=a.exports},function(t,e,s){s(50);var a=s(1)(s(36),s(75),null,null);t.exports=a.exports},function(t,e,s){s(54);var a=s(1)(s(37),s(79),"data-v-ffa6f220",null);t.exports=a.exports},function(t,e,s){s(49);var a=s(1)(s(38),s(74),"data-v-7bfbebec",null);t.exports=a.exports},function(t,e,s){s(51);var a=s(1)(s(39),s(76),"data-v-a8c6cc2a",null);t.exports=a.exports},function(t,e,s){s(46);var a=s(1)(s(40),s(71),"data-v-5aa68188",null);t.exports=a.exports},function(t,e,s){s(45);var a=s(1)(s(41),s(70),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vaults"},[s("h1",[t._v("My Vaults")]),t._v(" "),s("ul",{staticClass:"fb",attrs:{id:"publicVaults"}},t._l(t.userVaults(t.$root.store.state.myVaults),function(e,a){return s("li",[s("div",{staticClass:"card"},[s("div",{staticClass:"cardOutline"},[s("div",{staticClass:"card-block"},[s("h4",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),t._v(" "),s("ul",t._l(e.keeps,function(e,a){return s("li",[s("img",{staticClass:"card-img-top",attrs:{src:e.imageUrl,width:"300px",alt:"Card image cap"}}),t._v(" "),s("div",[t._v(t._s(e.title))])])})),t._v(" "),s("router-link",{staticClass:"btn btn-primary button",attrs:{to:"/vaults/"+e._id}},[t._v("View")])],1)])])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"createKeep"},[s("h1",[t._v("Enter Details to Make a Keep")]),t._v(" "),s("div",{staticClass:"frame"},[s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade in active",attrs:{id:"home"}},[s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"inputField",attrs:{placeholder:"  Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.imageUrl,expression:"imageUrl"}],staticClass:"inputField",attrs:{placeholder:"  Image URL (Optional)"},domProps:{value:t.imageUrl},on:{input:function(e){e.target.composing||(t.imageUrl=e.target.value)}}}),s("br"),t._v(" "),s("button",{staticClass:"btn btn-primary button",attrs:{type:"submit",name:"action"},on:{click:function(e){e.preventDefault(),t.createKeep()}}},[t._v("Submit")])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vault-container"},[t.$root.$data.store.state.user.email?s("div",[s("router-view")],1):s("div",[s("h1",[t._v(" You are not logged in ")]),t._v(" "),s("router-link",{attrs:{to:"/login"}},[s("button",{staticClass:"btn btn-primary"},[t._v("Return to Login Page")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"keeps"},[s("h1",[t._v(t._s(t.myVault[0].name))]),t._v(" "),s("div",{staticClass:"fb",attrs:{id:"publicKeeps"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"cardOutline"},[s("div",{staticClass:"card-block"},[s("p",{staticClass:"card-text"},[t._v(t._s(t.myVault[0].description))]),t._v(" "),s("ul",t._l(t.myVault[0].keeps,function(e,a){return s("li",[s("img",{staticClass:"card-img-top",attrs:{src:e.imageUrl,alt:"Card image cap"}}),t._v(" "),s("div",[t._v(t._s(e.title))])])}))]),t._v(" "),s("button",{staticClass:"btn btn-warning",on:{click:function(e){t.deleteVault(t.myVault[0]._id)}}},[t._v("Delete This Vault")])])])])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("img",{attrs:{src:s(56)}}),t._v(" "),t.$root.store.state.user.name?a("div",[a("h4",[t._v("Logged in as: "+t._s(t.$root.store.state.user.name)+" ("+t._s(t.$root.store.state.user.email)+")")]),t._v(" "),t.showKeepsButton()?a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/keeps"}},[t._v("Go To Keeps")]):t._e(),t._v(" "),t.showNewKeepButton()?a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/keeps/new"}},[t._v("Make New Keep")]):t._e(),t._v(" "),t.userHasVaults()?a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/vaults"}},[t._v("Go To Vaults")]):t._e(),t._v(" "),t.showNewVaultButton()?a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/vaults/new"}},[t._v("Make New Vault")]):t._e(),t._v(" "),a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/login"}},[t._v("Logout")])],1):t._e(),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"keeps"},[s("h1",[t._v("Shared Keeps")]),t._v(" "),s("h3",[t._v("Pick Some Favorites")]),t._v(" "),s("ul",{staticClass:"fb",attrs:{id:"publicKeeps"}},t._l(t.myKeeps,function(e,a){return s("li",[s("div",{staticClass:"card",staticStyle:{width:"339px"}},[s("div",{staticClass:"cardOutline"},[s("img",{staticClass:"card-img-top",attrs:{src:e.imageUrl,width:"300px",alt:"Card image cap"}}),t._v(" "),s("div",{staticClass:"card-block"},[s("h4",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(t._s(e.tags))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("Views: "+t._s(e.views))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("Vaulted: "+t._s(e.timesVaulted))]),t._v(" "),s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/keeps/"+e._id}},[t._v("View")])],1)])])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("h1",[t._v("Please Register as a New User")]),t._v(" "),s("div",{staticClass:"frame"},[s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade in active",attrs:{id:"home"}},[s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"inputField",attrs:{placeholder:"  name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"inputField",attrs:{placeholder:"  e-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"inputField",attrs:{placeholder:"  password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("br"),t._v(" "),s("button",{staticClass:"btn btn-primary button",attrs:{type:"submit",name:"action"},on:{click:function(e){e.preventDefault(),t.register()}}},[t._v("Submit")]),t._v(" "),s("button",{staticClass:"btn btn-primary button",attrs:{type:"submit",name:"action"},on:{click:function(e){e.preventDefault(),t.login()}}},[t._v("Login")]),t._v(" "),s("button",{staticClass:"btn btn-primary button",attrs:{type:"submit",name:"action"},on:{click:function(e){e.preventDefault(),t.guestLogin()}}},[t._v("Guest Login")])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"keep-container"},[t.$root.$data.store.state.user.email?s("div",[s("router-view")],1):s("div",[s("h1",[t._v(" You are not logged in ")]),t._v(" "),s("router-link",{attrs:{to:"/login"}},[s("button",{staticClass:"btn btn-primary"},[t._v("Return to Login Page")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"keeps"},[s("h1",[t._v(t._s(t.myKeeps.title))]),t._v(" "),s("ul",{staticClass:"fb",attrs:{id:"publicKeeps"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"cardOutline"},[s("img",{staticClass:"card-img-top",attrs:{src:t.myKeeps.imageUrl,height:"350vh",alt:"Card image cap"}}),t._v(" "),s("div",{staticClass:"card-block"},[s("p",{staticClass:"card-text"},[t._v(t._s(t.myKeeps.tags))]),t._v(" "),t.showVaultMeButton()?s("a",{staticClass:"btn btn-primary",on:{click:function(e){t.openVaults(t.item)}}},[t._v("Vault Me!")]):t._e(),t._v(" "),t.myKeeps.userId==t.$root.store.state.user._id?s("span",[s("a",{staticClass:"btn btn-warning",on:{click:function(e){t.deleteKeep(t.myKeeps)}}},[t._v("Delete Me.")])]):t._e()])])])]),t._v(" "),t.showVaultCards?s("div",[s("ul",{staticClass:"fb",attrs:{id:"publicVaults"}},t._l(t.userVaults(t.myVaults),function(e){return s("li",[s("div",{staticClass:"card",staticStyle:{width:"320px"}},[s("div",{staticClass:"cardOutline"},[s("div",{staticClass:"card-block"},[s("h4",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("User Id: "+t._s(e.userId))]),t._v(" "),s("a",{staticClass:"btn btn-primary",on:{click:function(s){t.sendToKeep(t.myKeeps,e._id)}}},[t._v("To This Vault")])])])])])}))]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v("Welcome to Keepr")]),t._v(" "),s("p",[t._v("Lets Get This Started")]),t._v(" "),s("router-link",{staticClass:"btn btn-primary",attrs:{to:"login"}},[t._v("Login")]),t._v(" "),s("router-link",{staticClass:"btn btn-primary",attrs:{to:"register"}},[t._v("Register")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"createKeep"},[s("h1",[t._v("Enter Details to Make a Vault")]),t._v(" "),s("div",{staticClass:"frame"},[s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade in active",attrs:{id:"home"}},[s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"inputField",attrs:{placeholder:"  Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"inputField",attrs:{placeholder:"  description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),s("br"),t._v(" "),s("button",{staticClass:"btn btn-primary button",attrs:{type:"submit",name:"action"},on:{click:function(e){e.preventDefault(),t.createVault()}}},[t._v("Submit")])])]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab-pane fade",attrs:{id:"menu1"}},[s("form",[s("h3",[t._v(" Vault Creation form goes here ")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("h1",{staticClass:"loginMessage"},[t._v(t._s(t.$root.store.state.loginMessage))]),t._v(" "),s("div",{staticClass:"frame"},[s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade in active",attrs:{id:"home"}},[s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"inputField col-xs-4",attrs:{placeholder:"  e-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"inputField col-xs-4",attrs:{placeholder:"  password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("br"),t._v(" "),s("button",{staticClass:"btn btn-primary button",attrs:{type:"submit",name:"action"},on:{click:function(e){e.preventDefault(),t.login()}}},[t._v("Submit")]),t._v(" "),s("button",{staticClass:"btn btn-primary button",attrs:{type:"submit",name:"action"},on:{click:function(e){e.preventDefault(),t.register()}}},[t._v("Register")]),t._v(" "),s("button",{staticClass:"btn btn-primary button",attrs:{type:"submit",name:"action"},on:{click:function(e){e.preventDefault(),t.guestLogin()}}},[t._v("Guest Login")])])])])])])},staticRenderFns:[]}}],[42]);
//# sourceMappingURL=app.ed56ff725f5ce201fa05.js.map