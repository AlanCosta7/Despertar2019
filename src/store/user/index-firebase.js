import { LocalStorage } from 'quasar'
import { $auth } from '../../plugins/firebase'

export default {
  namespaced: false,
  state: { user: null },
  getters: {
    user(state) {
      return state.user
    },
    isAuthenticated(state) {
      return !!state.user
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      LocalStorage.set('user', JSON.stringify(payload))
    }
  },
  actions: {
    createUserWithEmailAndPassword({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      $auth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => handleSuccess(commit, user))
        .catch(error => handleError(commit, error))
    },

    signInWithEmailAndPassword({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      return $auth
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(createOrUpdateUser)
        .then(user => handleSuccess(commit, user))
        .catch(error => handleError(commit, error))
    },

    signInWithPopup({ commit }, { provider }) {
      commit('setLoading', true)
      commit('clearError')
      return $auth
        .signInWithPopup(provider)
        .then(createOrUpdateUser)
        .then(user => handleSuccess(commit, user))
        .catch(error => handleError(commit, error))
    },

    signInWithRedirect({ commit }, { provider }) {
      commit('setLoading', true)
      commit('clearError')
      return $auth
        .signInWithRedirect(provider)
        .then(createOrUpdateUser)
        .then(user => handleSuccess(commit, user))
        .catch(error => handleError(commit, error))
    },

    async logout({ commit }) {
      commit('setLoading', true)
      await $auth.signOut()
      commit('setUser', null)
      commit('setLoading', false)
    }
  }
}

async function createOrUpdateUser(user) {
  const newUser = {
    id: user.uid,
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL
  }
  const paht = `/users/${user.uid}/profile`
  await $db.ref(path).set(newUser)
  return newUser
}

function handleSuccess(commit, user) {
  commit('setLoading', false)
  commit('setUser', user)
}

function handleError(commit, error) {
  commit('setLoading', false)
  commit('setError', error)
  console.log(error)
}
