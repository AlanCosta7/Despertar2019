<template>
  <q-page>
    <q-modal v-model="equipe" maximized class="flex flex-center justify-center">
      <q-btn icon="close" round push color="negative" @click="equipe = false" style="left: 250px; top: 5px"></q-btn>
        <h4>Adicionar Equipe</h4>
        <q-select
          filter
          multiple
          float-label="Equipe"
          inverted
          color="blue-10"
          v-model="listaequipe"
          :options="listaUsuarios"
        />
      <q-btn icon="done" round push color="positive" @click.native="addequipe"></q-btn>

    </q-modal>

    <div class="row">
      <div class="col-12 flex flex-center">
        <q-btn class="btnp" color="primary" push label="Programação" to="/programa" style="height: 50px; width:84%"></q-btn>
        <q-btn class="btnp" color="primary" push :disable="booleanVar"  label="Inscrição" to="/inscricao" style="height: 50px; width:40%"></q-btn>
        <q-btn class="btnp" color="primary" push label="Check-in" to="/checkin" style="height: 50px; width:40%"></q-btn>
      </div>
      <div class="col-12 flex flex-center">
        <q-btn class="btnp" color="primary" push label="Votação" to="/votacao" style="height: 50px; width:40%"></q-btn>
        <q-btn class="btnp" color="primary" push label="STAFF" to="/staff" style="height: 50px; width:40%"></q-btn>
        <q-btn class="btnp" color="primary" push label="Como chegar" to="/comochegar" style="height: 50px; width:84%"></q-btn>
      </div>
    </div>
      <q-btn
      round
      size="md"
      color="primary"
      v-if="admin"
      style="left: 18px; bottom: 50px"
      @click.native="equipe = true"
      icon="add"
      class="fixed"
    />
  </q-page>
</template>

<script>
import * as firebase from 'firebase'
import { mapGetters } from 'vuex'
  
export default {
  name: 'PageIndex',
        data () {
            return {
              jbbtv: false,
              equipe: false,
              listaequipe: this.$store.getters.listaEquipe
            }

        },
        mounted() {
          this.$store.dispatch('carregaTimeLine') 
          this.$store.dispatch('carregaChat') 
          this.$store.dispatch('carregaListaUsuario') 
          this.$store.dispatch('addListaCandidatos') 
          this.$store.dispatch('carregaListaEquipe') 
        },
        methods: {

          addequipe () {
            firebase.database().ref('equipe').update({
              listaequipe: this.listaequipe
            })
            this.equipe = false
          }
        },
    computed: {
      ...mapGetters({
      loading: 'loading',
      error: 'error',
      user: 'user',
      }),
      youequipe () {
        var lista = this.$store.getters.listaEquipe
        var uid = this.user.uid
        for (var i = 0; i < lista.length; i++) {
            if (uid == lista[i]) {
              return true
            }
        }
      },
      admin () {
                return this.$store.getters.user.email = 'alanpc7@gmail.com'
            },
      listaUsuarios () {
        return this.$store.getters.listaUsuarios
      },
  },
}    
</script>

<style>
  .input {
    width: 100%;
    position: absolute;
    bottom: 42px;
  }  
  .btn {
    width: 100%;
  }
  .btnprincipal {
    width: 100%;
    font-size: 1.5em;
  }
  .btns {
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40px;
  }
  .btnclose {
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .col-12 {
    padding: 2%
  }
  .btnp {
    margin: 2%
  }
  .imgperfil {
    object-fit: cover;
    border-radius: 100%;
    width: 35px;
    height: 35px;
  }
  .perfil {
    padding: 15px;
  }
  .name {
    padding-left: 10px;
    font-weight: bold;
  }

</style>