/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding initialization code.
 * Use "quasar new plugin <name>" and add it there.
 * One plugin per concern. Then reference the file(s) in quasar.conf.js > plugins:
 * plugins: ['file', ...] // do not add ".js" extension to it.
 **/

import 'quasar-framework/dist/quasar.ie.polyfills.js'



import 'quasar-extras/roboto-font/roboto-font.css'

import 'quasar-extras/material-icons/material-icons.css'




import 'quasar-app-styl'


import 'src/css/app.styl'


import Vue from 'vue'
import createApp from './app.js'




import pI18n from 'src/plugins/i18n'

import pAxios from 'src/plugins/axios'

import pFirebase from 'src/plugins/firebase'

import pVuefire from 'src/plugins/vuefire'

import pVuelidate from 'src/plugins/vuelidate'

import pQrcode from 'src/plugins/qrcode'

import pFirebaseui from 'src/plugins/firebaseui'

import pVue2googlemaps from 'src/plugins/vue2googlemaps'











Vue.config.devtools = true
Vue.config.performance = true
Vue.config.productionTip = false



console.info('[Quasar] Running SPA with MAT theme.')



const { app, store, router } = createApp()




;[pI18n,pAxios,pFirebase,pVuefire,pVuelidate,pQrcode,pFirebaseui,pVue2googlemaps].forEach(plugin => {
  plugin({
    app,
    router,
    store,
    Vue,
    ssrContext: null
  })
})









new Vue(app)






