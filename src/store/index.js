import Vue from 'vue' 
import Vuex from 'vuex' 

import * as firebase from 'firebase'
import { Loading, QSpinnerFacebook } from 'quasar'
import { LocalStorage, SessionStorage } from 'quasar'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuariologado: false,
    user: {
      email: '',
      uid: ''
    },
    usuario: {
      email: '',
      uid: '',
      name: '',
      foto: '',
      inscrito: false,
      pago: false,
      voto: 0,
      participouSD: false,
      participouS: false,
      participouND: false,
      participouN: false,
      participouC: false  
    },
    listaSudeste: [],
    listaSul: [],
    listaNordeste: [],
    listaNorte: [],
    listaCentro: [],
    listaTimeLine: [],
    listaChat: [],
    listaUsuarios: [],
    listaEquipe: [],
    loading: false,
    loadChat: false,
    error: null
  },
  mutations: {
    setListaEquipe (state, listaEquipe) {
      state.listaEquipe.push(listaEquipe)
    },
    setListaSudeste (state, listaSudeste) {
      state.listaSudeste.push(listaSudeste)
    },
    setListaSul (state, listaSul) {
      state.listaSul.push(listaSul)
    },
    setListaNordeste (state, listaNordeste) {
      state.listaNordeste.push(listaNordeste)
    },
    setListaNorte (state, listaNorte) {
      state.listaNorte.push(listaNorte)
    },
    setListaCentro (state, listaCentro) {
      state.listaCentro.push(listaCentro)
    },
    setUser (state, payload) {
        state.user = payload
      },  
    setUsuariologado (state, payload) {
        state.usuariologado = payload
      },    
    setUsuario (state, payload) {
        state.usuario = payload
      }, 
    setListaTimeLine (state, listaTimeLine) {
        state.listaTimeLine.unshift(listaTimeLine)
      }, 
    setListaChat (state, listaChat) {
        state.listaChat.push(listaChat)
      },
    setListaUsuarios (state, listaUsuarios) {
        state.listaUsuarios.push(listaUsuarios)
      },   
    setLoading (state, payload) {
        state.loading = payload
      },
    setLoadChat (state, payload) {
        state.loadChat = payload
      },
    setError (state, payload) {
        state.error = payload
      },
    clearError (state) {
        state.error = null
      }
  },
  actions: {
    customLoading () {
      Loading.show ({
            spinner: QSpinnerFacebook,
            spinnerColor: 'primary',
            spinnerSize: 140,
            message: 'Aguarde só mais um pouquinho que já já você estará ao vivo no DESPERTAR 2019',
            messageColor: 'orange'
      })
    },  
    fecharload() {
      Loading.hide()
    },
    addListaCandidatos ({getters, commit}) {
      var listaSudeste = getters.listaSudeste
      var listaSul = getters.listaSul
      var listaNordeste = getters.listaNordeste
      var listaNorte = getters.listaNorte
      var listaCentro = getters.listaCentro
      var listaUsuarios = getters.listaUsuarios
    
      //SUDESTE
      firebase.database().ref('eleicao/sudeste').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaSudeste.length = 0
        
        for (var j = 0; j < arr.length; j++) {
          for (var y = 0; y < listaUsuarios.length; y++) {
            if (arr[j] == listaUsuarios[y].uid) {  
             commit('setListaSudeste', listaUsuarios[y] )  
            }
          }        
        }

      })

      //Sul
      firebase.database().ref('eleicao/sul').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaSul.length = 0
          
        for (var j = 0; j < arr.length; j++) {
          for (var y = 0; y < listaUsuarios.length; y++) {
           if (arr[j] == listaUsuarios[y].uid) {  
             commit('setListaSul', listaUsuarios[y] )  
            }
          }        
        }

      })


      //NORDESTE
      firebase.database().ref('eleicao/nordeste').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaNordeste.length = 0
          
        for (var j = 0; j < arr.length; j++) {
          for (var y = 0; y < listaUsuarios.length; y++) {
           if (arr[j] == listaUsuarios[y].uid) {  
             commit('setListaNordeste', listaUsuarios[y] )  
            }
          }        
        }

      })

      //NORTE
      firebase.database().ref('eleicao/norte').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaNorte.length = 0
          
        for (var j = 0; j < arr.length; j++) {
          for (var y = 0; y < listaUsuarios.length; y++) {
           if (arr[j] == listaUsuarios[y].uid) {  
             commit('setListaNorte', listaUsuarios[y] )  
            }
          }        
        }

      })

      //CENTRO
      firebase.database().ref('eleicao/centrooeste').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaCentro.length = 0
          
        for (var j = 0; j < arr.length; j++) {
          for (var y = 0; y < listaUsuarios.length; y++) {
           if (arr[j] == listaUsuarios[y].uid) {  
             commit('setListaCentro', listaUsuarios[y] )  
            }
          }        
        }

      })
    },
    signUserUp ({commit}, payload) {
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then(
            user => {
              commit('setLoading', false)
              const newUser = {
                email: user.user.email,
                uid: user.user.uid,
              }
              commit('setUser', newUser)
              commit('setUsuariologado', true)
              LocalStorage.set('user', JSON.stringify({email: newUser.email, uid: newUser.uid }))  
            }
          )
          .catch(
            error => {
              commit('setLoading', false)
              var errorCode = error.code;
              var errorMessage = error.message;
              commit('setError', errorMessage)
            }
          )
    },
    signUserIn ({commit, getters}, payload) {
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .catch(
            error => {
                commit('setLoading', false)
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                  commit('setError', 'Senha inválida')
                } if (errorCode === 'auth/invalid-email') {
                  commit('setError', 'Email inválido')
                } if (errorCode === 'auth/user-disabled') {
                  commit('setError', 'Cadastro inativo')
                } if (errorCode === 'auth/user-not-found') {
                  commit('setError', 'Email e senha não correspondem')
                }
            }
          )
          .then(
            user => {
              commit('setLoading', false)
              var newUser = {
                email: user.user.email,
                uid: user.user.uid,
              }
              commit('setUser', newUser)
              LocalStorage.set('user', JSON.stringify({email: newUser.email, uid: newUser.uid})) 
              var user = getters.user
              var useruid = user.uid
              var userlogado = firebase.database().ref('/usuarios/' + useruid + '/user').on('value', function(snapshot) {
              var item = snapshot.val()
              commit('setUsuario', item) 
              commit('setUsuariologado', true)
              LocalStorage.set('usuario', JSON.stringify(item))
              })
      })
    },
    signInscricao ({commit, getters}, payload) {
      commit('setLoading', true)
      commit('clearError')
      var userData = {
        email: payload.email,
        nomecompleto: payload.nomecompleto,
        rg: payload.rg,
        modelestado: payload.modelestado,
        igreja: payload.igreja,
        telefone: payload.telefone,
        datanascimento: payload.datanascimento,
      }
    var updates = {}    
    var uid = getters.user.uid
    updates['/usuarios/' + uid + '/inscricao'] = userData
    
    firebase.database().ref().update(updates)
    .catch(
      error => {
        commit('setLoading', false)
        var errorCode = error.code;
        var errorMessage = error.message;
        commit('setError', errorMessage)
      }
    )

    var uid = getters.user.uid
    firebase.database().ref('/usuarios/' + uid + '/user/').update({
            inscrito: true
    })
      this.$router.push('/index')
    },
    setarUsuarios ({getters, commit}) {
      var user = getters.user
      var useruid = user.uid
      var userlogado = firebase.database().ref('/usuarios/' + useruid + '/user').on('value', function(snapshot) {
      var item = snapshot.val()
      commit('setUsuario', item) 
      LocalStorage.set('usuario', JSON.stringify(item))
      })
    },
    carregarUsuario ({commit}) {
        let valueUserLocal = LocalStorage.get.item('user') 
        commit('setUser', JSON.parse(valueUserLocal))
        let valueUsuarioLocal = LocalStorage.get.item('usuario') 
        commit('setUsuario', JSON.parse(valueUsuarioLocal))
    },
    carregaTimeLine ({getters, commit}) {
      commit('setLoading', true)
      const listaTimeLine = getters.listaTimeLine
      firebase.database().ref('/posts/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaTimeLine.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setListaTimeLine', arr[j])
        }
        commit('setLoading', false)
      })
    },
    carregaChat ({getters, commit}) {
      commit('setLoadChat', true) 
      const listaChat = getters.listaChat
      firebase.database().ref('/chat/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaChat.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setListaChat', arr[j])
        }
        commit('setLoadChat', false)
      })
    },
    carregaListaUsuario ({getters, commit}) {
      const listaUsuarios = getters.listaUsuarios
      firebase.database().ref('usuarios').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]; })
        listaUsuarios.length = 0
        for (var j = 0; j < arr.length; j++) {
          commit('setListaUsuarios', arr[j].user) 
          }
      })
    },
    carregaListaEquipe ({getters, commit}) {
      const listaEquipe = getters.listaEquipe
      firebase.database().ref('equipe/listaequipe').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]; })
        listaEquipe.length = 0
        for (var j = 0; j < arr.length; j++) {
          commit('setListaEquipe', arr[j]) 
          }
      })
    },
    logout ({commit}) {
        commit('setUser', null)
        commit('setUsuario', null)
        commit('setUsuariologado', false)
        LocalStorage.remove('user')
        LocalStorage.remove('usuario')
        firebase.auth().signOut()
        this.$router.push("/")
    }, 
    clearError ({commit}) {
      commit('clearError')
    },
  },
  getters: {
      listaEquipe (state) {
        return state.listaEquipe
      },
      listaSudeste (state) {
        return state.listaSudeste
      },
      listaSul (state) {
        return state.listaSul
      },
      listaNordeste (state) {
        return state.listaNordeste
      },
      listaNorte (state) {
        return state.listaNorte
      },
      listaCentro (state) {
        return state.listaCentro
      },
      user (state) {
        return state.user
      },
      usuariologado (state) {
        return state.usuariologado
      },
      usuario (state) {
        return state.usuario
      },
      listaTimeLine (state) {
        return state.listaTimeLine
      },
      listaChat (state) {
        return state.listaChat
      },
      listaUsuarios (state) {
        return state.listaUsuarios
      },
      loading (state) {
        return state.loading
      },
      loadChat (state) {
        return state.loadChat
      },
      error (state) {
        return state.error
      }
  }
})
