<template>
    <q-page class="flex flex-center absolute-center">   
     <div>    
        <q-alert type="negative" v-if="alerta">Preencha todos os campos</q-alert>        

      <form @submit.prevent="onInscricao">  
        <q-field
          name="nomecompleto"
          id="nomecompleto"
          class="{ 'form-group--error': $v.name.$error }"
          :error="$v.nomecompleto.$error"
          error-label="Digite seu nome completo"
        >
          <q-input
            type="text"
            float-label="Nome Completo"
            v-model.trim="$v.nomecompleto.$model"          />
        </q-field>

        <q-field
          name="rg"
          id="rg"
        >
          <q-input
            type="number"
            float-label="Número da identidade"
            v-model="rg"
          />
        </q-field>

        <q-datetime v-model="datanascimento" float-label="Data de Nascimento" />

        <q-select
            v-model="modelestado"
            float-label="Qual o seu Estado?"
            :options="estado"
        />

        <q-field
          name="igreja"
          id="igreja"
        >
          <q-input
            type="text"
            float-label="Igreja"
            v-model="igreja"
          />
        </q-field>

        <q-field
        name="telefone"
        id="telefone"
        >
        <q-input
          type="number"
          float-label="Whatsapp"
          v-model="telefone"
        />
      </q-field><br>

        <q-btn color="positive" outline type="submit" :disabled="loading" :loading="loading" class="btn">
            Inscrever
            <span slot="loader" class="custom-loader">
                <q-icon name="cached"/>
            </span>
        </q-btn><br><br>
       
      </form>
     </div>
    </q-page>
    
</template>
  
<script>
import { required, minLength } from 'vuelidate/lib/validators'
  
import { date } from 'quasar'
const today = new Date()
const { startOfDate, addToDate, subtractFromDate } = date
let timeStamp = Date.now()
let formattedString = date.formatDate(timeStamp, 'DD-MM-YYYY')
import * as firebase from 'firebase'

  export default {
    name: 'Inscricao',
    data () {
            return {
              alerta: false,
                datanascimento: formattedString,
                nomecompleto: '',
                rg: '',
                modelestado: '',
                igreja: '',
                telefone: '',
                estado: [
                  {
                    label: 'Rio de Janeiro',
                    value: 'Rio de Janeiro'
                  },
                  {
                    label: 'São Paulo',
                    value: 'São Paulo'
                  }
                ],
                today,
                state: new Date(),
            }
    },
    validations: {
            nomecompleto: {
              required,
              minLength: minLength(1)
            },
            rg: {
              required,
              minLength: minLength(9)
            },
            modelestado: {
              required,
              minLength: minLength(1)
            },
            igreja: {
              required,
              minLength: minLength(1)
            },
            telefone: {
              required,
              minLength: minLength(11)
            },
            datanascimento: {
              required,
              minLength: minLength(8)
            }
        },
    mounted() {
      this.$store.dispatch('carregarUsuario') 

    },
    computed: {
        loading () {
            return this.$store.getters.loading
        },
        error () {
            return this.$store.getters.error
        },
        usuario () {
            return this.$store.getters.usuario
        },
        user() {
            return this.$store.getters.user      
        }
    },
    methods: {
        onInscricao () {  
          if (!this.nomecompleto || !this.rg || !this.modelestado || !this.igreja || !this.telefone || !this.datanascimento) {
                    return this.alerta = true
                }
            this.$store.dispatch('signInscricao', {nomecompleto: this.nomecompleto,
                                                rg: this.rg,
                                                modelestado: this.modelestado,
                                                igreja: this.igreja,
                                                telefone: this.telefone,
                                                datanascimento: this.datanascimento,
                                                email: this.user.email, 
                                                }) 
                                                this.$store.dispatch('carregarUsuario') 
        },
        onDismissed () {
            this.$store.dispatch('clearError')
        }
    }
  }
</script>
  
<style>
</style>
  