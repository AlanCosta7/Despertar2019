import firebase from 'firebase/app'
import 'firebase/auth' // eslint-disable-line
import 'firebase/database' // eslint-disable-line
import 'firebase/firestore' // eslint-disable-line
import { LocalStorage } from 'quasar'

const firebaseConfig = {
  apiKey: 'AIzaSyDi_qIKYrBrSHCT7zHwQvb4EOuCCwbxuMk',
  authDomain: 'garagethinking.firebaseapp.com',
  databaseURL: 'https://garagethinking.firebaseio.com',
  projectId: 'garagethinking',
  storageBucket: 'garagethinking.appspot.com',
  messagingSenderId: '674636123351'
}

// initialize Firebase from settings
console.log('firebase@init()')
const $fbApp = firebase.initializeApp(firebaseConfig)
const $auth = $fbApp.auth()
const $db = firebase.database()
const $firestore = firebase.firestore()
$firestore.settings({ timestampsInSnapshots: true })

// Enable logging
// firebase.database.enableLogging(!!process.env.DEV)

export default ({ router, store }) => {
  const localUser = JSON.parse(LocalStorage.get.item('user') || '{}')
  store.commit('setUser', localUser)

  // watch user authentication state
  $auth.onAuthStateChanged(user => {
    console.debug('@onAuthStateChanged()', { user })
    if (user) {
      const { uid, email, emailVerified, displayName, photoURL } = user
      // const providerData = user.providerData;
      store.commit('setUser', { uid, email, emailVerified, displayName, photoURL, nome: displayName })
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
