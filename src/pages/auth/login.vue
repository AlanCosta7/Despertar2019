<template>
  <q-page>
    <q-layout>
      <div class="bg-secondary cardtop">
        <router-link to="/">
        </router-link>
      </div>
      <div class="flex flex-center">
        <div class="flex flex-center column shadow-4 cardlogin" v-show="!user">
          <h2 class="loginh2">Login</h2>
          <div id="firebaseui-auth-container"></div>
        </div>
        <div class="flex flex-center column shadow-4 cardlogin" v-show="user">
          <h2 class="q-headline">Você já está conectado!</h2>
          <h3>Redirecionando...</h3>
        </div>
        <img src="../../assets/450x450.png" class="idevisu mobile-only absolute-bottom" alt="identidade visual">
      </div>
    </q-layout>
  </q-page>
</template>

<script>
  import Vuex from 'vuex'
  import { firebase } from '../../plugins/firebase.js'

  export default {
    name: 'PageLogin',
    meta: { title: 'Despertar 2019 - Login' },
    data() {
      return {}
    },
    mounted() {
      if (this.user) {
        const rediretDelay = 2000
        this.redirectToApp(rediretDelay)
        return
      }
      // Confgiure and add the FirebaseUI Widget
      let signInFlow = 'popup'
      // For iOS full screen apps we use the redirect auth mode.
      if ('standalone' in window.navigator && window.navigator.standalone) {
        signInFlow = 'redirect'
      }

      const uiConfig = {
        signInFlow: signInFlow,
        // signInSuccessUrl: '/auth/success',
        // signInSuccessUrl: '/app/projects',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        tosUrl: '/legal/terms-of-service',
        privacyPolicyUrl: '/legal/privacy',
        callbacks: {
          uiShown: function () {
            // The widget is rendered.

            // Update text content of buttons
            updateLabels()
            function updateLabels() {
              const elGoogle = document.querySelector('.firebaseui-idp-google .firebaseui-idp-text-long')
              const elFacebook = document.querySelector('.firebaseui-idp-facebook .firebaseui-idp-text-long')
              const elEmail = document.querySelector('.firebaseui-idp-password .firebaseui-idp-text-long')
              const elementsExists = elGoogle && elFacebook && elEmail
              if (!elementsExists) {
                window.requestAnimationFrame(updateLabels)
              } else {
                elGoogle.textContent = 'Acessar com Google'
                elFacebook.textContent = 'Acessar com Facebook'
                elEmail.textContent = 'Acessar com Email'
              }
            }
          }
        }
      }
      this.$firebaseui.start('#firebaseui-auth-container', uiConfig)
    },
    computed: {
      ...Vuex.mapGetters({
        user: 'user'
      })
    },
    methods: {
      logout() {
        console.log('desconectando...')
        this.$store.dispatch('logout')
      },
      redirectToApp(redirectDelay) {
        this.$q.loading.show({ delay: 300 })
        setTimeout(() => {
          this.$q.loading.hide()
          this.$router.push("/programacao")
        }, redirectDelay)
      }
    },
    watch: {
      user(newUser, oldUser) {
        if (newUser) {
          // Our fancy notification (2).
          console.log('User is logged in:', newUser)
          this.redirectToApp(1500)
        }
      }
    }
  }
</script>

<style>
  .cardtop {
    width: 100%;
    height: 200px;
    padding: 2%;
    text-align: center;
  }

  .cardlogin {
    position: relative;
    margin-top: -100px;
    width: 80%;
    border-radius: 5px;
    background-color: white;
    padding: 1rem 0rem;
  }

  .loginh2 {
    padding-top: 2%;
    color: #054afa;
    font-weight: bold;
  }

  .subtitulo {
    font-size: 1.5em;
  }

  .firebaseui-idp-button {
    max-width: 300px;
    min-height: 50px;
    border-radius: 30px;
  }

  .firebaseui-idp-text {
    font-size: 18px;
  }

  h1 {
    font-size: 56px;
    font-weight: 200;
  }

  h2 {
    font-size: 28px;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 10vw;
    }
    h2 {
      font-size: 5vw;
    }
  }
  .idevisu {
    position: absolute;
    width: 100%;
    object-fit: cover;
    height: 30%;
  }
</style>