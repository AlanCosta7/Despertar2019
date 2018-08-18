<template>
        <q-page class="flex flex-center absolute-center">   
         <div>
            <div class="logodiv">
               <img src="../../assets/jbb_logo.png" alt="logo" class="logo" >
            </div>
            <q-alert type="warning" v-if="!$v.password.required">A senha é obrigatória.</q-alert>
            <q-alert type="warning" v-if="!$v.password.minLength">A senha deve ter pelo menos {{ $v.password.$params.minLength.min }} letters.</q-alert>              
            <q-alert type="negative" v-if="error">{{error}}</q-alert>        
          <form @submit.prevent="onSignin">  
            <q-field
              name="email"
              id="email"
              icon="mail"
              label="Email"
              :error="$v.email.$error"
              error-label="Digite um e-mail válido"
              count
            >
              <q-input
                type="email"
                v-model="email"
                @blur="$v.email.$touch"
              />
            </q-field>
    
            <q-field
            :count="16"
            name="password"
            label="Senha"
            icon="lock"
            id="password"
            >
            <q-input type="password" max-length="16" v-model.trim="$v.password.$model" />
            </q-field><br>
    
            <q-btn color="positive" outline type="submit" :disabled="loading" :loading="loading" class="btn">
                Entrar
                <span slot="loader" class="custom-loader">
                    <q-icon name="cached"/>
                </span>
            </q-btn><br><br>
            <q-btn color="primary" outline @click='cadastrar()' :disabled="loading" :loading="loading" class="btn">
                    Cadastrar
                    <span slot="loader" class="custom-loader">
                        <q-icon name="cached"/>
                    </span>
            </q-btn>
          </form>
         </div>
        </q-page>
    </template>
          
    <script>
    import { required, email, minLength } from 'vuelidate/lib/validators'
    
    export default {
        data () {
            return {
                email: null,
                password: null
            }
        },
        validations: {
            email: { required, email },
            password: {
                    required,
                    minLength: minLength(6)
                    },
        },
        computed: {
            user () {
             return this.$store.getters.user
            },
            error () {
                return this.$store.getters.error
            },
            loading () {
              return this.$store.getters.loading
            }
        },
        watch: {
            user (value) {
              if (value !== null && value !== undefined) {
                this.$router.push('/index')
              }
            }
        }, 
        methods: {
            onSignin () {  
            this.$store.dispatch('signUserIn', {email: this.email, password: this.password})  
            },
            onDismissed () {
            this.$store.dispatch('clearError')
            },
            cadastrar () {
            this.$router.push('/cadastro')
            }
        }
    }
    
    </script>
    
    <style>
        .btn {
            width: 100%;
        }
        .logo {
           width: 100%; 
        }
        .logodiv {
            text-align: center;
        }
    
    </style>