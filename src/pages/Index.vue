<template>
  <q-page>
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
        style="right: 18px; bottom: 50px"
        @click.native="jbbtvclick()"
        icon="live_tv"
        class="fixed btntv"
      />
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
    <div class="row btns" id="botao">
      <q-btn color="primary" @click="dashboard()" outline icon="dashboard" class="btn col"></q-btn>
      <q-btn color="primary" @click="aovivo()" outline class="btn col-6">ao vivo<q-spinner-rings color="red" :size="30" /></q-btn>
      <q-btn color="primary" @click="chat()" outline icon="forum" class="btn col"></q-btn>
    </div>
  </q-page>
</template>

<script>
import * as firebase from 'firebase'
  
export default {
  name: 'PageIndex',
        data () {
            return {
              jbbtv: false,
              equipe: false,
              listaequipe: this.$store.getters.listaEquipe
            }

        },
        updated() {
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

        },
        mounted() {
          this.$store.dispatch('carregarUsuario') 
          this.$store.dispatch('carregaTimeLine') 
          this.$store.dispatch('carregaChat') 
          this.$store.dispatch('carregaListaUsuario') 
          this.$store.dispatch('addListaCandidatos') 
          this.$store.dispatch('carregaListaEquipe') 
        },
        methods: {
          jbbtvclick () {
            this.jbbtv = true
          },
          sairtv () {
            this.jbbtv = false
          },
          aovivo() {
            this.$router.push('/aovivo')
          },
          dashboard() {
            this.$router.push('/index')
          },
          chat() {
            this.$router.push('/chat')
          }, 
          addequipe () {
            firebase.database().ref('equipe').update({
              listaequipe: this.listaequipe
            })
            this.equipe = false
          }
        },
    computed: {
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
      booleanVar () {
        return this.usuario.inscrito
      },
      usuario () {
        return this.$store.getters.usuario
      },
      user() {
        return this.$store.getters.user      
      },
      image () {
        return this.$store.getters.usuario.image
      },
      usuariologado () {
        return this.$store.getters.usuariologado
      },
      listaUsuarios () {
        return this.$store.getters.listaUsuarios
      },
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
  .btntv {
    background-image: linear-gradient(red, yellow);
    color: white
  }
</style>