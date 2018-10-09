<template>
    <q-page class="flex flex-center">
        <div class="bg-amber-8 absolute-top flex flex-center">
          <template v-if="user.photoURL">
            <img class="avatar" :src="user.photoURL" height="150">
          </template>
            <h3>{{user.nome}}</h3>
            <q-btn color="red">Sair</q-btn>
        </div>
        <qrcode-vue :value="value"></qrcode-vue>

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
      computed: {
            value () {
                return this.user.uid
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
  