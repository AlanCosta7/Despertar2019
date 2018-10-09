import firebase from 'firebase/app'
import 'firebase/auth' // eslint-disable-line
import 'firebase/database' // eslint-disable-line
import 'firebase/firestore' // eslint-disable-line
import { LocalStorage } from 'quasar'

const firebaseConfig = {
  apiKey: "AIzaSyBZnc-al51XODELJ5j32Mdqe8BpsSWmvWc",
  authDomain: "despertar2019.firebaseapp.com",
  databaseURL: "https://despertar2019.firebaseio.com",
  projectId: "despertar2019",
  storageBucket: "despertar2019.appspot.com",
  messagingSenderId: "127706969910"
}

// initialize Firebase from settings
console.log('firebase@init()')
const $fbApp = firebase.initializeApp(firebaseConfig)
const $auth = $fbApp.auth()
const $db = firebase.database()
const $firestore = firebase.firestore()
$firestore.settings({ timestampsInSnapshots: true })

// Enable logging
firebase.database.enableLogging(!!process.env.DEV)

export default ({ router, store }) => {
  const localUser = JSON.parse(LocalStorage.get.item('user') || '{}')
  store.commit('setUser', localUser)

  // watch user authentication state
  $auth.onAuthStateChanged(user => {
    console.debug('@onAuthStateChanged()', { user })
    if (user) {
      store.commit('setUser', { email: user.email, nome: user.displayName, uid: user.uid })
    } else {
      store.commit('setUser', null)
    }

    // if(user && router.currentRoute.fullPath === '/') {
    //   router.replace({name: 'projects' })
    // }
    // console.log({router})
  })
}

export { firebase, $fbApp, $auth, $db, $firestore }
