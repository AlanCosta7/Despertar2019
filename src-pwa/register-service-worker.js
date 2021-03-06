/*
 * This file is picked up by the build system only
 * when building for PRODUCTION
 */

import { register } from 'register-service-worker'

window.__refreshing = false

register(process.env.SERVICE_WORKER_FILE, {
  ready () {
    console.log('App is being served from cache by a service worker.')
  },
  registered (registration) { // registration -> a ServiceWorkerRegistration instance
    console.log('Service worker has been registered.')
  },
  cached (registration) { // registration -> a ServiceWorkerRegistration instance
    console.log('Content has been cached for offline use.')
  },
  updated(registration) {
    console.log('New content is available; please refresh.')

    // // registration -> a ServiceWorkerRegistration instance
    // const installing = registration.installing
    // const waiting = registration.waiting
    // if (installing || waiting) {
    //   console.info('waiting or installing...')
    //   return
    // }

    if (window.confirm('Existe uma versão disponível. Deseja atualizar?')) {
      // window.__refreshing = true
      window.location.reload(true)
    } else {
      console.info('Nova versão ignorada pelo usuário.')
    }
  },
  offline() {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error(err) {
    console.error('Error during service worker registration:', err)
  }
})

// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
