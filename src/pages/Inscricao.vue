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
                    label: 'Acre (AC)',
                    value: 'Acre (AC)'
                  },
                  { 
                    label: 'Alagoas (AL)',
                    value: 'Alagoas (AL)'
                  },
                  {  
                    label: 'Amapá (AP)',
                    value: 'Amapá (AP)'
                  },
                  {
                    label: 'Amazonas (AM)',
                    value: 'Amazonas (AM)'
                  },
                  {  
                    label: 'Bahia (BA)',
                    value: 'Bahia (BA)'
                  },
                  {
                    label: 'Ceará (CE)',
                    value: 'Ceará (CE)'
                  },
                  {
                    label: 'Distrito Federal (DF)',
                    value: 'Distrito Federal (DF)'
                  },
                  {  
                    label: 'Espírito Santo (ES)',
                    value: 'Espírito Santo (ES)'
                  },
                  {
                    label: 'Goiás (GO)',
                    value: 'Goiás (GO)'
                  },
                  {
                    label: 'Maranhão (MA)',
                    value: 'Maranhão (MA)'
                  },
                  {
                    label: 'Mato Grosso (MT)',
                    value: 'Mato Grosso (MT)'
                  },
                  {
                    label: 'Mato Grosso do Sul (MS)',
                    value: 'Mato Grosso do Sul (MS)'
                  },
                  {
                    label: 'Minas Gerais (MG)',
                    value: 'Minas Gerais (MG)'
                  },
                  {
                    label: 'Pará (PA)',
                    value: 'Pará (PA)' 
                  },
                  {
                    label: 'Paraíba (PB)',
                    value: 'Paraíba (PB)'
                  },
                  {
                    label: 'Paraná (PR)',
                    value: 'Paraná (PR)'
                  },
                  {
                    label: 'Pernambuco (PE)',
                    value: 'Pernambuco (PE)'
                  },
                  {
                    label: 'Piauí (PI)',
                    value: 'Piauí (PI)'
                  },
                  {
                    label: 'Rio de Janeiro (RJ)',
                    value: 'Rio de Janeiro (RJ)'
                  },
                  {
                    label: 'Rio Grande do Norte (RN)',
                    value: 'Rio Grande do Norte (RN)'
                  },
                  {
                    label: 'Rio Grande do Sul (RS)',
                    value: 'Rio Grande do Sul (RS)'
                  },
                  {
                    label: 'Rondônia (RO)',
                    value: 'Rondônia (RO)'
                  },
                  {
                    label: 'Roraima (RR)',
                    value: 'Roraima (RR)'
                  },
                  {
                    label: 'Santa Catarina (SC)',
                    value: 'Santa Catarina (SC)'
                  },
                  {  
                    label: 'São Paulo (SP)',
                    value: 'São Paulo (SP)'
                  },
                  {
                    label: 'Sergipe (SE)',
                    value: 'Sergipe (SE)'
                  },
                  {
                    label: 'Tocantins (TO)',
                    value: 'Tocantins (TO)'
                  },
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
    methods: {
        onInscricao () {  
          if (!this.nomecompleto || !this.rg || !this.modelestado || !this.igreja || !this.telefone || !this.datanascimento) {
                    return this.alerta = true
                }
            this.$store.dispatch('signInscricao', 
                                              {
                                                nomecompleto: this.nomecompleto,
                                                rg: this.rg,
                                                modelestado: this.modelestado,
                                                igreja: this.igreja,
                                                telefone: this.telefone,
                                                datanascimento: this.datanascimento,
                                                email: this.user.email, 
                                                }) 
        },
        onDismissed () {
            this.$store.dispatch('clearError')
        }
    }
  }
</script>
  