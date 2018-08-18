<template>
        <q-page padding>
            <q-alert type="warning" v-if="!$v.password.required">A senha é obrigatória.</q-alert>
            <q-alert type="warning" v-if="!$v.password.minLength">A senha deve ter pelo menos {{ $v.password.$params.minLength.min }} letters.</q-alert>              
            <q-alert type="negative" v-if="error">{{messagem}}</q-alert>              
    
            <h4>Cadastro</h4>
            <form @submit.prevent="onSignup"> 
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
                </q-field><br>
          
                <q-field
                    :count="16"
                    name="password"
                    label="Senha"
                    icon="lock"
                    id="password"
                >
                <q-input type="password" v-model.trim="$v.password.$model" 
                         max-length="16" />
                </q-field><br>
                
                <q-field
                    :count="16"
                    name="repeatPassword"
                    label="Senha"
                    icon="lock"
                    id="repeatPassword"
                >
                <q-input type="password" v-model.trim="$v.repeatPassword.$model" 
                         max-length="16" />
                </q-field><br>
                <q-alert type="negative" v-if="!$v.repeatPassword.sameAsPassword">As senhas devem ser idênticas.</q-alert>
              
                <q-btn color="positive" outline type="submit" :disabled="loading" :loading="loading" class="justify-center">
                    Entrar
                    <span slot="loader" class="custom-loader">
                        <q-icon name="cached"/>
                    </span>
                </q-btn>
            </form>
        </q-page>
    </template>
    
    <script>
    import { required, email, sameAs, minLength  } from 'vuelidate/lib/validators'
            
    export default {
        data () {
            return {
                email: '',
                password: '',
                repeatPassword: '',
                messagem: ''
            }
        },
            validations: {
                email: { required, email },
                password: {
                    required,
                    minLength: minLength(6)
                    },
                repeatPassword: {
                    sameAsPassword: sameAs('password')
                    }
            },
            computed: {
                user () {
                    return this.$store.getters.user
                    },
                error () {
                    if (this.$store.getters.error != null) {
                        return this.messagem = 'O endereço de e-mail já está sendo usado por outra conta.'
                    }
                    },
                loading () {
                    return this.$store.getters.loading
                    }
                },
            watch: {
                user (value) {
                    if (value !== null && value !== undefined) {
                    this.$router.push('/profile')
                    }
                }
            }, 
            methods: {
                onSignup () {  
                    this.$store.dispatch('signUserUp', {email: this.email, password: this.password}) 
                },
                onDismissed () {
                    this.$store.dispatch('clearError')
                }
            }
        }
    </script>