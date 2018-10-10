<template>
    <q-page class="flex flex-center">
        <div class="bg-amber-8 absolute-top items-center q-pt-xl column" style="height: 300px">
          <template v-if="user.photoURL">
            <img class="avatar" :src="user.photoURL" >
          </template>
            <p>{{user.nome}}</p>
            <p>chave: {{user.uid}}</p>
        </div>
        <q-card class="bg-white flex flex-center absolute" style="height: 200px; width: 200px">
          <qrcode-vue :value="value"></qrcode-vue>
        </q-card>
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
  