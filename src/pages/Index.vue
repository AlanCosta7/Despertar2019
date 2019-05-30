<template class="templatehome">
  <q-page id="page-index">
    <div>
      <div class="fundoalfa"></div>
      <div class="paralax flex flex-center">
        <img src="../assets/landpage/BIRDS.png" class="birds desktop-only" alt="imagem de pássaros voando">

        <div class="column base">
          <div class="row inline flex items-baseline flex-center">
            <p class="data1">17</p>
            <p class="data2">a</p>
            <p class="data1">20</p>
            <p class="data2">de</p>
            <p class="data1">julho</p>
          </div>
          <div class="row inline flex items-baseline flex-center">
            <p class="local1">Barra</p>
            <p class="local2">da</p>
            <p class="local1">Tijuca - RJ</p>
          </div>
          <div class="column items-center">
            <img src="../assets/landpage/Logo_Despertar2019.png" width="270px" class="relative-position" alt="logo do despertar">
            <p class="fe1 desktop-only">Fé, Esperança e Amor</p>
            <p class="fe2 mobile-only">Fé, Esperança e Amor</p>
            <q-btn @click="openedinscri = true" label="Inscreva-se" size="20px" color="orange" rounded class="desktop-only btnins q-mt-xl text-brown-10"></q-btn>
            <q-btn @click="inscricao()" label="Inscreva-se" size="20px" color="orange" rounded class="mobile-only btnins q-mt-xl text-brown-10"></q-btn>
          </div>
        </div>
      </div>
      <img width="100%" class="calcada1 desktop-only" src="../assets/landpage/ZigZag.png" alt="calçada copacabana">

      <div class="column flex flex-center base2 desktop-only">
        <h2 class="text-weight-bold text-white desktop-only h2desperte">Desperte-se</h2>
        <q-btn @click=playvideo() size="90px" flat round>
          <img width="100%" class="desktop-only" src="../assets/landpage/play.png" alt="botão play">
        </q-btn>
        <h2 class="text-weight-light text-white h2desperte2">Aperte o play!</h2>

        <video autoplay muted loop class="myVideo1">
          <source src="../assets/landpage/novotease.mp4" type="video/mp4">
          <source src="../assets/landpage/novotease.webm" type="video/webm">
        </video>
      </div>
        <section class="fit bg-black">
          <div class="container">
            <div class="row flex flex-center">
              <div class="col-xs-12 col-lg-3 flex flex-center">
                <img width=270 height="270"
                  id="imgHenrique">
              </div>
              <div class="col-xs-12 col-lg-3 flex flex-center">
                <img width=270 height="270"
                  id="imgAndreia">
              </div>    
              <div class="col-xs-12 col-lg-3 flex flex-center">
                <img width=270 height="270"
                  id="imgDavi">
              </div>
              <div class="col-xs-12 col-lg-3 flex flex-center">
                <img width=270 height="270"
                  id="imgGil">  
              </div> 
            </div>  
            <div class="row flex flex-center q-mt-lg">
              <div class="col-xs-12 col-lg-3 flex flex-center"> 
                <img width=270 height="270"
                  id="imgBeone">
              </div>
              <div class="col-xs-12 col-lg-3 flex flex-center">
                <img width=270 height="270"
                  id="imgPc">
              </div>    
              <div class="col-xs-12 col-lg-3 flex flex-center">
                <img width=270 height="270"
                  id="imgSola">
              </div>    
              <div class="col-xs-12 col-lg-3 flex flex-center">
                <img width=270 height="270"
                  id="imgSolk">
              </div>
            </div>
          </div>
        </section>
      <div class="column flex flex-center paralax2 desktop-only">
        <div class="bgcolum column flex flex-center">
          <h4 class="text-weight-bold uppercase text-white texto1">Qual despertar você pretende adquirir?</h4>
          <br>
          <br>

          <h4 class="text-weight-bold uppercase text-white texto1">Despertar social - R$98,00</h4>
          <p class="text-weight-light uppercase text-white texto2">Se você estiver passando por um momento de instabilidade financeira, e está com dificuldades de pagar o valor integral
            da inscrição, separamos essa opção pra você. Mas se liga hein?! Outras pessoas irão abençoar sua ida ;) </p>
          <h4 class="text-weight-bold  uppercase text-white texto1">DESPERTAR CONSCIENTE - R$138,00</h4>
          <p class="text-weight-light uppercase text-white texto2">Esse é o valor "normal" do ingresso. Nos dá agilidade e faz a gente "fechar a conta" mais cedo.</p>
          <h4 class="text-weight-bold uppercase text-white texto1">DESPERTAR SOLIDÁRIO - R$178,00</h4>
          <p class="text-weight-light uppercase text-white texto2">Esse é pra galera que quer, e está em condições de ajudar a galera que está participando pelo Despertar Social,
            e aqueles que estão vindo de regiões mais distantes e possuem outros custos adicionais. Deus ama a quem dá com
            alegria, e queremos dar essa oportunidade pra você.</p>
          <q-btn @click="openedinscri = true" label="Inscreva-se" size="20px" color="brown-10" rounded class="desktop-only btnins q-px-lg text-orange q-mb-xl"></q-btn>
          <q-btn @click="inscricao()" label="Inscreva-se" size="20px" color="brown-10" rounded class="mobile-only btnins q-px-lg text-orange q-mb-xl"></q-btn>
        </div>

        <img src="../assets/landpage/Maracana.png" class="maracana desktop-only" width="50%" alt="Maracana">
        <img src="../assets/landpage/Niteroi.png" class="niteroi desktop-only" width="50%" alt="niteroi">
        <img src="../assets/landpage/Bondinho.png" class="bondinho desktop-only" width="50%" alt="bondinho">

      </div>
      <div class="column flex flex-center paralax3 mobile-only">
        <div class="bgcolum2 items-center">
          <h4 class="text-weight-bold uppercase text-white texto1">Qual despertar você pretende adquirir?</h4>

          <h4 class="text-weight-bold uppercase text-white texto1">Despertar social - R$98,00</h4>
          <p class="text-weight-light uppercase text-white texto2">Se você estiver passando por um momento de instabilidade financeira, e está com dificuldades de pagar o valor integral
            da inscrição, separamos essa opção pra você. Mas se liga hein?! Outras pessoas irão abençoar sua ida ;) </p>
          <h4 class="text-weight-bold  uppercase text-white texto1">DESPERTAR CONSCIENTE - R$138,00</h4>
          <p class="text-weight-light uppercase text-white texto2">Esse é o valor "normal" do ingresso. Nos dá agilidade e faz a gente "fechar a conta" mais cedo.</p>
          <h4 class="text-weight-bold uppercase text-white texto1">DESPERTAR SOLIDÁRIO - R$178,00</h4>
          <p class="text-weight-light uppercase text-white texto2">Esse é pra galera que quer, e está em condições de ajudar a galera que está participando pelo Despertar Social,
            e aqueles que estão vindo de regiões mais distantes e possuem outros custos adicionais. Deus ama a quem dá com
            alegria, e queremos dar essa oportunidade pra você.</p>
          <q-btn @click="inscricao()" label="Inscreva-se" size="20px" color="brown-10" rounded class="btnins q-px-lg text-orange q-mb-xl"></q-btn>

        </div>

        <img src="../assets/landpage/Maracana.png" class="maracana desktop-only" width="50%" alt="maracana">
        <img src="../assets/landpage/Niteroi.png" class="niteroi desktop-only" width="50%" alt="niteroi">
        <img src="../assets/landpage/Bondinho.png" class="bondinho desktop-only" width="50%" alt="bondinho">

      </div>
    </div>
    <q-modal v-model="opened" class="z-max desktop-only" maximized>
        <q-btn v-if="opened" round size="md" @click.native="opened = false" icon="close" color="negative"   
        style="right: 48%; top: 18px"
        class="z-max fixed q-mr-lg" />
      <iframe width="100%" height="100%" :src="video" class="videoteaser"
        frameborder="0">
      </iframe>
    </q-modal>

    <q-modal v-model="openedinscri" class="z-max desktop-only">
      <iframe width="850px" height="750px" id='inscricao' src="https://www.pallua.com.br/captacao/projeto/evento_despertar_2019"></iframe>
    </q-modal>

    <div class="z-top footer bg-white">
      <!-- footer content -->
      <div class="row">
        <div class="col-lg-2 col-xs-12 col-md-2 self-start">
          <div class="q-pa-lg">
            <p class="sub1">Organização</p>
            <img width="150" class="imgJBB" src="../assets/landpage/JBB.png" alt="logo JBB">
          </div>
        </div>
        <div class="col-lg-7 col-xs-12 col-md-5 self-start">
          <div class="q-pa-lg">
            <p class="sub1">Apoio</p>
            <img width="84" src="../assets/landpage/CBB.png" alt="logo CBB">
            <img width="84" src="../assets/landpage/JBC.png" alt="logo JBC">
            <img width="84" src="../assets/landpage/JUBERJ.png" alt="logo JUBERJ">
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 col-md-5 self-start">
          <div class="q-pa-lg">
            <p class="sub1">Siga-nos</p>
            <BaseSocial/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Vuex from 'vuex'
  import BaseSocial from 'components/layout/base-social.vue'

  export default {
    name: 'PageIndex',
    components: { BaseSocial },
    data() {
      return {
        opened: false,
        openedinscri: false
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
    methods: {
      principal() {
        this.$router.push('/programacao')
      },
      playvideo() {
        this.$store.dispatch('assistirVideoPromo')
        this.opened = true
      },
      inscricao() {
        this.$router.push('/inscricao')
      }
    }
  }    
</script>

<style>
  
</style>