(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,n){e.exports=n("LzkT")},"A0++":function(e,t,n){"use strict";var a=n("TOJS"),r=n.n(a);r.a},Hl11:function(e,t,n){},LzkT:function(e,t,n){"use strict";n.r(t);n("rGqo"),n("SpHO"),n("oRQL"),n("0UuB"),n("Hl11"),n("fm0S");var a=n("Kw5r"),r=n("uEjO"),o=n("6E/o"),i=n("cFFF"),s=n("IEC1"),u=n("zxLP"),c=n("RIeW"),l=n("Rqni"),d=n("MqH6"),f=n("8wy3"),p=n("zmdN"),h=n("SC7v"),m=n("UrUt"),v=n("EYBb"),g=n("HlXa"),b=n("UG+o"),Q=n("uNnR"),L=n("fUOT"),C=n("lUGP"),S=n("aqAY"),w=n("U/xP"),U=n("7r/T"),y=n("A4jm"),T=n("eelU"),E=n("XYut"),R=n("WTFv"),A=n("L0iJ"),k=n("lOO/"),N=n("nlhR"),O=n("UlvI"),I=n("S/Rk"),V=n("5X41"),x=n("NjtJ"),H=n("zEqA"),j=n("3R/W"),q=n("74EC"),P=n("vJud"),z=n("2xiH"),J=n("CVJq"),M=n("KnAT"),W=n("PVu0"),F=n("fqDv"),K=n("3S5W"),X=n("bNU/"),D=n("dkar"),B=n("ZYCo"),Y=n("OggR"),$=n("3CNK"),Z=n("MFSH"),G=n("bduK"),_=n("HJMa"),ee=n("YYYh"),te=n("bdR9"),ne=n("rINx"),ae=n("twoJ"),re=n("HMoT"),oe=n("OMMn"),ie=n("0+dE"),se=n("kcw0"),ue=n("phlj"),ce=n("kXp1"),le=n("AOwd"),de=n("3HEz"),fe=n("A9jH"),pe=n("k/Uo"),he=n("/GzR"),me=n("IG5u"),ve=n("dsqU"),ge=n("tbgk"),be=n("lhL4"),Qe=n("FSbK"),Le=n("K9Ld"),Ce=n("OeoJ"),Se=n("Ezub"),we=n("Z4Cl"),Ue=n("A7PL"),ye=n("qaCD"),Te=n("+diE"),Ee=n("N8Xa"),Re=n("8uvW");a["a"].use(o["a"],{config:{loading:{}},i18n:r["a"],components:{QLayout:i["a"],QLayoutHeader:s["a"],QLayoutDrawer:u["a"],QLayoutFooter:c["a"],QPageContainer:l["a"],QPage:d["a"],QToolbar:f["a"],QToolbarTitle:p["a"],QBtn:h["a"],QIcon:m["a"],QList:v["a"],QListHeader:g["a"],QItem:b["a"],QItemMain:Q["a"],QItemSide:L["a"],QItemTile:C["a"],QFab:S["a"],QFabAction:w["a"],QPageSticky:U["a"],QDialog:y["a"],QField:T["a"],QInput:E["a"],QSelect:R["a"],QUploader:A["a"],QSlider:k["a"],QBtnDropdown:N["a"],QCheckbox:O["a"],QChip:I["a"],QChipsInput:V["a"],QResizeObservable:x["a"],QWindowResizeObservable:H["a"],QRadio:j["a"],QAlert:q["a"],QToggle:P["a"],QKnob:z["a"],QModal:J["a"],QModalLayout:M["a"],QDatetime:W["a"],QAutocomplete:F["a"],QTimeline:K["a"],QTimelineEntry:X["a"],QCard:D["a"],QCardTitle:B["a"],QCardMain:Y["a"],QCardMedia:$["a"],QCardSeparator:Z["a"],QCardActions:G["a"],QRating:_["a"],QSearch:ee["a"],QVideo:te["a"],QCollapsible:ne["a"],QSpinner:ae["a"],QSpinnerBars:re["a"],QSpinnerComment:oe["a"],QProgress:ie["a"],QActionSheet:se["a"],QEditor:ue["a"],QStepper:ce["a"],QStep:le["a"],QStepperNavigation:de["a"],QTooltip:fe["a"],QScrollArea:pe["a"],QScrollObservable:he["a"],QInnerLoading:me["a"],QChatMessage:ve["a"],QPopover:ge["a"],QParallax:be["a"]},directives:{Ripple:Qe["a"],CloseOverlay:Le["a"],BackToTop:Ce["a"]},plugins:{Notify:Se["a"],Dialog:we["a"],AddressbarColor:Ue["a"],Loading:ye["a"],LocalStorage:Te["a"],SessionStorage:Ee["a"],AppFullscreen:Re["a"]}});var Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},ke=[];Ae._withStripped=!0;var Ne={name:"App"},Oe=Ne,Ie=(n("A0++"),n("KHd+")),Ve=Object(Ie["a"])(Oe,Ae,ke,!1,null,null,null),xe=Ve.exports,He=(n("ls82"),n("yXPU")),je=n.n(He),qe=(n("yt8O"),n("RW0V"),n("L2JU")),Pe=n("Tucv"),ze=n("w+w8"),Je={namespaced:!1,state:{currentUser:null},getters:{currentUser:function(e){return e.currentUser},isAuthenticated:function(e){return!!e.currentUser}},mutations:{setUser:function(e,t){e.currentUser=t,Te["a"].set("user",JSON.stringify(t))}},actions:{signUserIn:function(e,t){var n=e.commit;return n("setLoading",!0),n("clearError"),this.$router.push("/"),Pe["a"].signInWithEmailAndPassword(t.email,t.password).then(function(e){return Me(n,e)}).catch(function(e){return We(n,e)})},signInWithRedirect:function(e,t){var n=e.commit,a=t.provider;return n("setLoading",!0),n("clearError"),this.$router.push("/"),Pe["a"].signInWithRedirect(a).then(function(e){return Me(n,e)}).catch(function(e){return We(n,e)})},deleteAccount:function(){var e=je()(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.abrupt("return",Pe["a"].currentUser.delete().then(function(e){n("setUser",null)}));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),logout:function(){var e=je()(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("setLoading",!0),e.next=4,Pe["a"].signOut();case 4:Se["a"].create({message:"Você foi deslogado com sucesso!",timeout:1e3,type:"negative",color:"negative",textColor:"white",position:"top"}),n("setUser",null),this.$router.push("/"),Te["a"].clear(),n("setLoading",!1);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}};function Me(e,t){e("setLoading",!1),e("setUser",t),Se["a"].create({message:"Você foi logado com sucesso!",timeout:1e3,type:"positive",color:"positive",textColor:"white",position:"top"})}function We(e,t){e("setLoading",!1),e("setError",t),console.log(t)}var Fe={state:{minhaposicao:{}},getters:{minhaposicao:function(e){return e.minhaposicao}},mutations:{setPosition:function(e,t){e.minhaposicao=t}},actions:{minhaposicao:function(e){var t=e.commit;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var n=e.coords.latitude,a=e.coords.longitude,r={lat:n,lng:a},o="Minha posição",i={position:r,texto:o};t("setPosition",i)}):output.innerHTML="<p>Seu navegador não suporta Geolocalização</p>"}}};a["a"].use(qe["a"]);var Ke=new qe["a"].Store({modules:{user:Je,maps:Fe},state:{inscricao:"https://www.pallua.com.br/captacao/projeto/evento_despertar_2019",video:"",loading:!1,listaSudeste:[],listaSul:[],listaNordeste:[],listaNorte:[],listaCentro:[],listaTimeLine:[],listaChat:[],listaUsuarios:[],listaEquipe:[],loadChat:!1,error:null,inscrito:!1},mutations:{setListaEquipe:function(e,t){e.listaEquipe.push(t)},setListaSudeste:function(e,t){e.listaSudeste.push(t)},setListaSul:function(e,t){e.listaSul.push(t)},setListaNordeste:function(e,t){e.listaNordeste.push(t)},setListaNorte:function(e,t){e.listaNorte.push(t)},setListaCentro:function(e,t){e.listaCentro.push(t)},setListaTimeLine:function(e,t){e.listaTimeLine.unshift(t)},setListaChat:function(e,t){e.listaChat.push(t)},setListaUsuarios:function(e,t){e.listaUsuarios.push(t)},setVideo:function(e,t){e.video=t},setLoading:function(e,t){e.loading=t},setLoadChat:function(e,t){e.loadChat=t},setError:function(e,t){e.error=t},clearError:function(e){e.error=null},setInscrito:function(e,t){e.inscrito=t}},actions:{assistirVideoPromo:function(e){var t=e.commit,n=e.getters;n.video;return Pe["b"].ref("videopromo").once("value").then(function(e){t("setVideo",e.val())}).catch},assistirVideo:function(e){var t=e.commit,n=e.getters;n.video;return Pe["b"].ref("video/nome").once("value").then(function(e){t("setVideo",e.val())}).catch},customLoading:function(){ye["a"].show({spinner:ze["a"],spinnerColor:"primary",spinnerSize:140})},fecharload:function(){ye["a"].hide()},addListaCandidatos:function(e){var t=e.getters,n=e.commit,a=t.listaSudeste,r=t.listaSul,o=t.listaNordeste,i=t.listaNorte,s=t.listaCentro,u=t.listaUsuarios;firebase.database().ref("eleicao/sudeste").on("value",function(e){var t=e.val(),r=Object.keys(t).map(function(e){return t[e]});a.length=0;for(var o=0;o<r.length;o++)for(var i=0;i<u.length;i++)r[o]==u[i].uid&&n("setListaSudeste",u[i])}),firebase.database().ref("eleicao/sul").on("value",function(e){var t=e.val(),a=Object.keys(t).map(function(e){return t[e]});r.length=0;for(var o=0;o<a.length;o++)for(var i=0;i<u.length;i++)a[o]==u[i].uid&&n("setListaSul",u[i])}),firebase.database().ref("eleicao/nordeste").on("value",function(e){var t=e.val(),a=Object.keys(t).map(function(e){return t[e]});o.length=0;for(var r=0;r<a.length;r++)for(var i=0;i<u.length;i++)a[r]==u[i].uid&&n("setListaNordeste",u[i])}),firebase.database().ref("eleicao/norte").on("value",function(e){var t=e.val(),a=Object.keys(t).map(function(e){return t[e]});i.length=0;for(var r=0;r<a.length;r++)for(var o=0;o<u.length;o++)a[r]==u[o].uid&&n("setListaNorte",u[o])}),firebase.database().ref("eleicao/centrooeste").on("value",function(e){var t=e.val(),a=Object.keys(t).map(function(e){return t[e]});s.length=0;for(var r=0;r<a.length;r++)for(var o=0;o<u.length;o++)a[r]==u[o].uid&&n("setListaCentro",u[o])})},signInscricao:function(e,t){var n=e.commit,a=e.getters;n("setLoading",!0),n("clearError");var r={email:t.email,nomecompleto:t.nomecompleto,rg:t.rg,modelestado:t.modelestado,igreja:t.igreja,telefone:t.telefone,datanascimento:t.datanascimento},o={},i=a.user.uid;o["/usuarios/"+i+"/inscricao"]=r,firebase.database().ref().update(o).catch(function(e){n("setLoading",!1);e.code;var t=e.message;n("setError",t)});i=a.user.uid;firebase.database().ref("/usuarios/"+i+"/user/").update({inscrito:!0}),this.$router.push("/")},setarUsuarios:function(e){var t=e.getters,n=e.commit,a=t.user,r=a.uid;firebase.database().ref("/usuarios/"+r+"/user").on("value",function(e){var t=e.val();n("setUsuario",t),Te["a"].set("usuario",JSON.stringify(t))})},carregaTimeLine:function(){var e=je()(regeneratorRuntime.mark(function e(t){var n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.getters,a=t.commit,a("setLoading",!0),r=n.listaTimeLine,Pe["b"].ref("/posts/").on("value",function(e){var t=e.val(),n=Object.keys(t).map(function(e){return t[e]});r.length=0;for(var o=0;o<n.length;o++)a("setListaTimeLine",n[o])}),a("setLoading",!1);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),carregaChat:function(e){var t=e.getters,n=e.commit;n("setLoadChat",!0);var a=t.listaChat;firebase.database().ref("/chat/").on("value",function(e){var t=e.val(),r=Object.keys(t).map(function(e){return t[e]});a.length=0;for(var o=0;o<r.length;o++)n("setListaChat",r[o]);n("setLoadChat",!1)})},clearError:function(e){var t=e.commit;t("clearError")}},getters:{video:function(e){return e.video},inscricao:function(e){return e.inscricao},inscrito:function(e){return e.inscrito},listaEquipe:function(e){return e.listaEquipe},listaSudeste:function(e){return e.listaSudeste},listaSul:function(e){return e.listaSul},listaNordeste:function(e){return e.listaNordeste},listaNorte:function(e){return e.listaNorte},listaCentro:function(e){return e.listaCentro},listaTimeLine:function(e){return e.listaTimeLine},listaChat:function(e){return e.listaChat},listaUsuarios:function(e){return e.listaUsuarios},loading:function(e){return e.loading},loadChat:function(e){return e.loadChat},error:function(e){return e.error}}}),Xe=n("jE9Z"),De=[{path:"/",component:function(){return n.e(2).then(n.bind(null,"8kEK"))},children:[{path:"",name:"index",component:function(){return n.e(3).then(n.bind(null,"iyQ6"))}},{path:"login",component:function(){return n.e(4).then(n.bind(null,"43x7"))}},{path:"programacao",component:function(){return n.e(5).then(n.bind(null,"lVug"))}},{path:"feed",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"igHx"))}},{path:"inscricao",component:function(){return n.e(7).then(n.bind(null,"XBTj"))}},{path:"comochegar",component:function(){return n.e(8).then(n.bind(null,"7CEK"))}},{path:"checkin",component:function(){return n.e(9).then(n.bind(null,"NXn4"))}},{path:"votacao",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"+iUi"))}},{path:"auth/success",component:function(){return n.e(11).then(n.bind(null,"OJAV"))}},{path:"auth/error",component:function(){return n.e(12).then(n.bind(null,"IS6i"))}},{path:"legal/terms-of-service",component:function(){return n.e(13).then(n.bind(null,"TtVm"))}},{path:"legal/privacy",component:function(){return n.e(14).then(n.bind(null,"9XhV"))}}]}];De.push({path:"*",component:function(){return n.e(15).then(n.bind(null,"5R6h"))}});var Be=De;a["a"].use(Xe["a"]);var Ye=function(){var e=new Xe["a"]({scrollBehavior:function(){return{y:0}},routes:Be,mode:"history",base:"/"});return e},$e=function(){var e="function"===typeof Ke?Ke():Ke,t="function"===typeof Ye?Ye({store:e}):Ye;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(xe)}};return{app:n,store:e,router:t}},Ze={failed:"Action failed",success:"Action was successful",loading:"Loading"},Ge={"en-us":Ze},_e=n("qSUR"),et=function(e){var t=e.app,n=e.Vue;n.use(_e["a"]),t.i18n=new _e["a"]({locale:"pt-br",fallbackLocale:"en-us",messages:Ge})},tt=n("vDqi"),nt=n.n(tt),at=function(e){var t=e.Vue;t.prototype.$axios=nt.a},rt=n("XzC8"),ot=n.n(rt),it=function(e){var t=e.Vue;t.use(ot.a)},st=n("Hc5T"),ut=n.n(st),ct=function(e){var t=e.Vue;t.use(ut.a)},lt=n("17CV"),dt=function(e){var t=e.Vue;t.use(lt["a"])},ft=n("WC58"),pt=n.n(ft),ht=function(e){var t=e.Vue;t.prototype.$firebaseui=new pt.a.auth.AuthUI(Pe["a"])},mt=n("dV7z"),vt=function(e){var t=e.Vue;t.use(mt,{load:{key:"AIzaSyAiTvr4YlRwRJ1sCfghSZSwZM_f9JFn05k"}})},gt=$e(),bt=gt.app,Qt=gt.store,Lt=gt.router;[et,at,Pe["c"],it,ct,dt,ht,vt].forEach(function(e){e({app:bt,router:Lt,store:Qt,Vue:a["a"],ssrContext:null})}),new a["a"](bt)},TOJS:function(e,t,n){},Tucv:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return c});var a=n("Wcq6"),r=n.n(a),o=(n("6nsN"),n("Zs65"),n("5x/H"),n("+diE")),i={apiKey:"AIzaSyCXHolkWqDlzT1HcswaIRWbZmyxhbbjHu8",authDomain:"despertar-2019.firebaseapp.com",databaseURL:"https://despertar-2019.firebaseio.com",projectId:"despertar-2019",storageBucket:"despertar-2019.appspot.com",messagingSenderId:"662503199182"};console.log("firebase@init()");var s=r.a.initializeApp(i),u=s.auth(),c=r.a.database(),l=r.a.firestore();l.settings({timestampsInSnapshots:!0}),t["c"]=function(e){e.router;var t=e.store,n=JSON.parse(o["a"].get.item("user")||"{}");t.commit("setUser",n),u.onAuthStateChanged(function(e){if(console.debug("@onAuthStateChanged()",{user:e}),e){var n=e.uid,a=e.email,r=e.emailVerified,o=e.displayName,i=e.photoURL;t.commit("setUser",{uid:n,email:a,emailVerified:r,displayName:o,photoURL:i,nome:o})}else t.commit("setUser",null)})}},fm0S:function(e,t,n){}},[[0,17,16]]]);