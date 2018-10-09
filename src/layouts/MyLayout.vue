<template>
  <q-layout>
      <q-layout-header>
        <q-toolbar
          color="primary"
        >
          <q-toolbar-title>
            Desperar 2019
            <div slot="subtitle">Rio de Janeiro/RJ</div>
          </q-toolbar-title>    
          <q-btn
            round
            size="sm"
            @click.native="jbbtvclick()"
            icon="live_tv"
            class="btntv"
          />
        </q-toolbar>
      </q-layout-header>
    <q-page-container>
        <q-modal v-model="jbbtv" maximized v-if="jbbtv" class="flex flex-center justify-center">
            <div style="background: black">
                <div class="q-video">
                <iframe width="100%" style="height: auto; width:100%" height="auto" src="https://www.youtube.com/embed/JxLpyrT1S2s?autoplay=0" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <q-btn
            round
            size="md"
            style="right: 18px; bottom: 50px"
            @click.native="sairtv()"
            icon="tv_off"
            class="fixed z-max btntv"
          />
        </q-modal>
      <router-view />
      <div class="row z-top absolute-bottom">
          <q-btn color="primary" @click="programa()" outline icon="dashboard" class="btn col"></q-btn>
          <q-btn color="primary" @click="inscricao()" outline class="btn col-6" v-if="inscrito">inscrição</q-btn>
          <q-btn color="primary" @click="checkin()" outline class="btn col-6" v-if="!inscrito">Check-in</q-btn>
          <q-btn color="primary" @click="comochegar()" outline icon="room" class="btn col"></q-btn>
        </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MyLayout',
  data () {
    return {
      jbbtv: false,

    }
  },
  computed: {    
    ...mapGetters({
      loading: 'loading',
      error: 'error',
      user: 'user',
    }),
  },
  methods: {
          inscricao () {
            this.$router.push('/inscricao')
          },
          programa () {
            this.$router.push('/')
          },
          checkin () {
            this.$router.push('/checkin')
          },
          comochegar () {
            this.$router.push('/comochegar')
          },           
          jbbtvclick () {
            this.jbbtv = true
          },
          sairtv () {
            this.jbbtv = false
          },
  },
  computed: {
    inscrito () {

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
