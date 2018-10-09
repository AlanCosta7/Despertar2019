<template>
    <q-page class="flex flex-center">
        <div class="perfil row flex flex-center">
            <img :src=usuario.imageUrl v-if="usuario" class="imgperfil" alt="imagem perfil">
            <h6 class="col-6 name">{{usuario.nome}}</h6>
          <q-btn icon='star' flat class="col-1" id="star">        
          </q-btn>
          <q-btn icon='attach_money' flat class="col-1" id="fav" v-if="!youequipe" > 
          </q-btn>
          <q-btn icon='favorite' color='negative' flat class="col-1" v-if="youequipe" > 
          </q-btn>
        </div>
        <qrcode-vue :value="value"></qrcode-vue>
        <div class="row btns" id="botao">
          <q-btn color="primary" @click="dashboard()" outline icon="dashboard" class="btn col"></q-btn>
          <q-btn color="primary" @click="aovivo()" outline class="btn col-6">ao vivo<q-spinner-rings color="red" :size="30" /></q-btn>
          <q-btn color="primary" @click="chat()" outline icon="forum" class="btn col"></q-btn>
        </div>
    </q-page>
</template>
  
<script>
import QrcodeVue from 'qrcode.vue';
    
  export default {
    name: 'qrcodepage',
    data () {
        return {
            size: 300
        }
  },
  components: {
    QrcodeVue
  },
    mounted() {
      if (this.usuario.inscrito == false) {
            document.getElementById('star').style.color = '#cccccc'
          } else {
            document.getElementById('star').style.color = 'rgb(255, 196, 0)'
          }

          if (this.usuario.pago == false) {
            document.getElementById('fav').style.color = '#cccccc'
          } else {
            document.getElementById('fav').style.color = 'rgb(255, 196, 0)'
          }

        this.$store.dispatch('carregarUsuario') 

    },
    computed: {
            value () {
                return this.user.uid
            },
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
          aovivo() {
            this.$router.push('/aovivo')
          },
          dashboard() {
            this.$router.push('/index')
          },
          chat() {
            this.$router.push('/chat')
          }, 
        }
  }
  </script>
  
  <style>
       
  .btn {
    width: 100%;
  }
  .btns {
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40px;
  }
  </style>
  