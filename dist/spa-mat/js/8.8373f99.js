(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"7CEK":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",[o("div",{attrs:{id:"floating-panel"}},[o("q-select",{staticClass:"fixed",staticStyle:{width:"100%",top:"50px"},attrs:{placeholder:"Partida",options:e.selectOptions,color:"primary",inverted:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),o("q-btn",{staticClass:"fixed q-mr-lg",staticStyle:{right:"18px",bottom:"60px"},attrs:{icon:"gps_fixed",round:"",color:"white","text-color":"tertiary"},on:{click:function(t){e.addMinhaLoc(e.minhaposicao)}}}),o("q-btn",{staticClass:"fixed q-mr-lg",staticStyle:{right:"18px",bottom:"110px"},attrs:{icon:"navigation",round:"",color:"white","text-color":"tertiary"},on:{click:function(t){e.abrirApp()}}})],1),o("gmap-map",{attrs:{id:"maps",center:e.center,zoom:10,"map-type-id":e.mapTypeId}},e._l(e.markers,function(t,a){return o("gmap-marker",{key:a,attrs:{position:t.position,click:e.center=t.position}})}))],1)},n=[];a._withStripped=!0;o("ls82");var i=o("yXPU"),r=o.n(i),s=o("MVZn"),c=o.n(s),l=o("L2JU"),p=o("pg2m"),d=function(e,t){if(p["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(e,{openExternal:!0});var o=window.open(e,"_blank");if(o)return o.focus(),o;t()},u=(o("qaCD"),o("w+w8"),{name:"Comochegar",data:function(){return{select:"",selectOptions:[{label:"Rodoviária Novo Rio",icon:"directions_bus",value:"Av. Francisco Bicalho, 1 - Santo Cristo, Rio de Janeiro - RJ, 20220-310"},{label:"Aeroporto Galeão",icon:"local_airport",value:"Av. Vinte de Janeiro, s/nº - Ilha do Governador, Rio de Janeiro - RJ, 21941-900"},{label:"Aeroporto Santos Dumont",icon:"local_airport",value:"Praça Sen. Salgado Filho, s/n - Centro, Rio de Janeiro - RJ, 20021-340"}],center:{lat:-22.8995995,lng:-43.2106174},mapTypeId:"roadmap",markers:[{position:{lat:-23.0074613,lng:-43.4323469}}]}},computed:c()({},Object(l["b"])({minhaposicao:"minhaposicao"})),methods:{abrirApp:function(){d("https://www.google.com.br/maps/place/Igreja+Batista+Atitude/@-23.0074259,-43.434367,17z/data=!3m1!4b1!4m5!3m4!1s0x9bdcea0431dc37:0xe9f9682b65baee8d!8m2!3d-23.0074309!4d-43.4321783")},addMinhaLoc:function(){var e=r()(regeneratorRuntime.mark(function e(t){var o,a,n,i,r,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=function(){a=new google.maps.DirectionsRenderer;var e=new google.maps.LatLng(-23.0074613,-43.4323469),t={zoom:5,center:e,mapTypeId:google.maps.MapTypeId.TRANSIT,disableDefaultUI:!0};o=new google.maps.Map(document.getElementById("maps"),t),a.setMap(o)},n=new google.maps.DirectionsService,i(),r=t.position,s={lat:-23.0074613,lng:-43.4323469},c={origin:r,destination:s,travelMode:google.maps.TravelMode.TRANSIT},e.next=8,n.route(c,function(e,t){t==google.maps.DirectionsStatus.OK&&a.setDirections(e)});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),addLocal:function(){var e,t,o=new google.maps.DirectionsService;function a(){t=new google.maps.DirectionsRenderer;var o=new google.maps.LatLng(-23.0074613,-43.4323469),a={zoom:5,center:o,mapTypeId:google.maps.MapTypeId.TRANSIT,disableDefaultUI:!0};e=new google.maps.Map(document.getElementById("maps"),a),t.setMap(e)}a();var n=this.select,i={lat:-23.0074613,lng:-43.4323469},r={origin:n,destination:i,travelMode:google.maps.TravelMode.TRANSIT};o.route(r,function(e,o){o==google.maps.DirectionsStatus.OK&&t.setDirections(e)})}},updated:function(){this.addLocal()},mounted:function(){var e=r()(regeneratorRuntime.mark(function e(){var t,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=window.innerHeight,document.getElementById("maps").style.height=t-85+"px",o=this.minhaposicao,e.next=5,this.$store.dispatch("minhaposicao");case 5:return e.next=7,this.addMinhaLoc(o);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),m=u,g=(o("m27J"),o("KHd+")),h=Object(g["a"])(m,a,n,!1,null,null,null);t["default"]=h.exports},EbwI:function(e,t,o){},m27J:function(e,t,o){"use strict";var a=o("EbwI"),n=o.n(a);n.a}}]);