<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar color="primary">
        <q-toolbar-title>
            <q-btn flat dense to='/' label="Despertar 2019" class="q-pa-none"/>
           
          <div slot="subtitle">Rio de Janeiro/RJ</div>
        </q-toolbar-title>
        <q-btn v-if="btnjbbtv" round size="sm" @click.native="jbbtvclick()" icon="live_tv" class="btntv q-mr-lg" />
        <div class="desktop-only">
          <q-btn color="white" @click="programa()" flat class="btn">Programa</q-btn>
          <q-btn color="white" @click="inscricao()" class="btn" flat v-if="!inscrito">inscrição</q-btn>
          <q-btn color="white" @click="checkin()" class="btn" flat v-if="inscrito">Check-in</q-btn>
          <q-btn color="white" @click="comochegar()" flat class="btn">Como Chegar?</q-btn>
        </div>
        <!--
        <q-btn icon="more_vert" flat v-if="user">
          <q-popover>
            <q-list separator link>
              <q-item v-close-overlay @click.native="sair" flat>
                Sair
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>
      -->


      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <q-modal v-model="jbbtv" maximized v-if="jbbtv" class="flex flex-center justify-center z-max">
        <div style="background: black">
          <div class="q-video">
            <iframe style="height: 400px; width:100%" :src=video frameborder="0" allowfullscreen class="mobile-only"></iframe>
            <iframe style="height: 700px; width:100%" :src=video frameborder="0" allowfullscreen class="desktop-only"></iframe>
          </div>
        </div>
        <q-btn round size="md" style="right: 18px; bottom: 50px" @click.native="sairtv()" icon="close" class="fixed z-max btntv q-ma-lg"></q-btn>
      </q-modal>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[50, 50]">
      </q-page-sticky>
      <div class="row z-max absolute-bottom mobile-only">
        <q-btn color="primary" @click="programa()" icon="home" class="btn col"></q-btn>
        <q-btn color="primary" @click="inscricao()" class="btn col-6" v-if="!inscrito">inscrição</q-btn>
        <q-btn color="primary" @click="checkin()" class="btn col-6" v-if="inscrito">Check-in</q-btn>
        <q-btn color="primary" @click="comochegar()" icon="room" class="btn col"></q-btn>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'MyLayout',
    data() {
      return {
        jbbtv: false,
        btnjbbtv: true
      }
    },
    computed: {
      ...mapGetters({
        loading: 'loading',
        error: 'error',
        user: 'user',
        inscrito: 'null',
        video: 'video'
      }),
    },
    created() {
      this.$store.dispatch('minhaposicao')
    },
    methods: {
      inscricao() {
        this.$router.push('/inscricao')
      },
      programa() {
        this.$router.push('/programacao')
      },
      checkin() {
        this.$router.push('/checkin')
      },
      comochegar() {
        this.$router.push('/comochegar')
      },
      jbbtvclick() {
        this.$store.dispatch('assistirVideo')
        this.jbbtv = true
      },
      sairtv() {
        this.jbbtv = false
      },
      sair() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style>
  .btntv {
    background-image: linear-gradient(red, yellow);
    color: white
  }

  .btntv2 {
    background-image: linear-gradient(red, yellow);
    color: white
  }
</style>