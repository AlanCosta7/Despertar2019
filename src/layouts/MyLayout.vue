<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Desperar 2019
          <div slot="subtitle">Rio de Janeiro/RJ</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
    <q-list
        no-border
        link
        inset-delimiter
      >
      <q-list-header>Menu</q-list-header>
      <q-item to="/" v-show="usuariologado == false">
        <q-item-side icon="face" />
        <q-item-main label="Login" />
      </q-item>
      <q-item to="/cadastro" v-show="usuariologado == false">
        <q-item-side icon="account_circle" />
        <q-item-main label="Cadastro" />
      </q-item>
      <q-item to="/index" v-show="usuariologado == true">
        <q-item-side icon="dashboard" />
        <q-item-main label="Painel"/>
      </q-item>
      <q-item to="/programa" v-show="usuariologado == true">
        <q-item-side icon="chrome_reader_mode" />
        <q-item-main label="Programação"/>
      </q-item>
      <q-item to="/inscricao" v-show="usuariologado == true">
        <q-item-side icon="edit" />
        <q-item-main label="Inscrição"/>
      </q-item>
      <q-item to="/checkin" v-show="usuariologado == true">
        <q-item-side icon="assignment_turned_in" />
        <q-item-main label="Check-in"/>
      </q-item>
      <q-item to="/comochegar" v-show="usuariologado == true">
        <q-item-side icon="room" />
        <q-item-main label="Como chegar"/>
      </q-item>
      <q-item to="/votacao" v-show="usuariologado == true">
        <q-item-side icon="how_to_vote" />
        <q-item-main label="Votação"/>
      </q-item>
      <q-item to="/staff" v-show="usuariologado == true">
        <q-item-side icon="contacts" />
        <q-item-main label="STAFF"/>
      </q-item>
      <q-item @click.native="sair()" v-show="usuariologado == true">
        <q-item-side icon="exit_to_app" />
        <q-item-main label="Sair"/>
      </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    sair() {
      this.$router.push('/')
      this.$store.dispatch('logout')
    }
  },
  computed: {
      usuario () {
        return this.$store.getters.usuario
      },
      user() {
        return this.$store.getters.user      
      },
      usuariologado () {
        return this.$store.getters.usuariologado
      }
  },
  watch: {
      usuario (value) {
            if (value !== null && value !== undefined) {
              this.$store.getters.usuario
            }
      }
  }
}
</script>

<style>
</style>

