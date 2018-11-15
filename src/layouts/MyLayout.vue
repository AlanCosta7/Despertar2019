<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar color="primary">
        <q-toolbar-title>
          Despertar 2019
          <div slot="subtitle">Rio de Janeiro/RJ</div>
        </q-toolbar-title>
        <q-btn round v-if="user" size="sm" @click.native="jbbtvclick()" icon="live_tv" class="btntv" />

        <q-btn icon="more_vert" flat v-if="user">
          <!-- Direct child of target -->
          <q-popover>
            <!--
                The DOM element(s) that make up the popup,
                in this case a list:
              -->
            <q-list separator link>
              <!-- notice `v-close-overlay` which closes popover -->
              <q-item v-close-overlay @click.native="sair" flat>
                Sair
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>

      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <q-modal v-model="jbbtv" maximized v-if="jbbtv" class="flex flex-center justify-center">
        <div style="background: black">
          <div class="q-video">
            <iframe width="100%" style="height: auto; width:100%" height="auto" :src=video
              frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <q-btn round size="md" style="right: 18px; bottom: 50px" @click.native="sairtv()" icon="close" class="fixed z-max btntv"
        />
      </q-modal>
      <router-view />
      <div class="row z-top absolute-bottom" v-if="user">
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
    mounted() {
      console.log(this.video)
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
</style>