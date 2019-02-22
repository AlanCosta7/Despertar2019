<template class="templatehome">
  <q-page>
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
      <img width="100%" class="calcada1 desktop-only z-top" src="../assets/landpage/ZigZag.png" alt="calçada copacabana">

      <div class="column flex flex-center base2 desktop-only">
        <h2 class="text-weight-bold text-white z-top desktop-only h2desperte">Desperte-se</h2>
        <q-btn @click=playvideo() size="90px" flat round class="z-top">
          <img width="100%" class="desktop-only" src="../assets/landpage/play.png" alt="botão play">
        </q-btn>
        <h2 class="text-weight-light text-white z-top h2desperte2">Aperte o play!</h2>

        <video autoplay muted loop class="myVideo1">
          <source src="../assets/landpage/novotease.mp4" type="video/mp4">
          <source src="../assets/landpage/novotease.webm" type="video/webm">
        </video>
      </div>
      <img width="100%" class="zap3 desktop-only z-top" src="../assets/landpage/ZigZag3.png" alt="onda">

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

    <q-modal v-model="opened" class="z-max desktop-only">
      <iframe width="700px" height="450px" :src="video" class="videoteaser"
        frameborder="0"></iframe>
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
            <img width="150px" class="imgJBB" src="../assets/landpage/JBB.png" alt="logo JBB">
          </div>
        </div>
        <div class="col-lg-7 col-xs-12 col-md-5 self-start">
          <div class="q-pa-lg">
            <p class="sub1">Apoio</p>
            <img width="84px" src="../assets/landpage/CBB.png" alt="logo CBB">
            <img width="84px" src="../assets/landpage/JBC.png" alt="logo JBC">
            <img width="84px" src="../assets/landpage/JUBERJ.png" alt="logo JUBERJ">
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 col-md-5 self-start">
          <div class="q-pa-lg">
            <p class="sub1">Siga-nos</p>
            <a href="https://www.facebook.com/juventudebatistabrasileira/">
              <img width="54px" class="q-pa-sm" src="../assets/landpage/facebook.svg" alt="logo facebook">
            </a>
            <a href="https://twitter.com/oficialjbb">
              <img width="54px" class="q-pa-sm" src="../assets/landpage/twitter.svg" alt="logo Twiter">
            </a>
            <a href="https://www.instagram.com/somosjbb/">
              <img width="54px" class="q-pa-sm" src="../assets/landpage/instagram.svg" alt="logo Instagram">
            </a>
            <a href="https://www.youtube.com/user/juventudebatista">
              <img width="54px" class="q-pa-sm" src="../assets/landpage/youtube.svg" alt="logo youtube">
            </a>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Vuex from 'vuex'

  export default {
    name: 'PageIndex',
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
  .base {
    position: relative;
    height: 750px;
    width: 100%;
    top: 2%
  }

  .base2 {
    position: relative;
    height: 750px;
    margin-top: 0px;
    width: 100%;
    object-fit: cover;
    object-position: center
  }

  .paralax {
    height: 750px;
    width: 100%;
    background-image: url("../assets/landpage/backGround.jpg");
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .fundoalfa {
    position: absolute;
    height: 750px;
    width: 100%;
    background-color: rgba(100, 100, 100, .30);

  }

  @media only screen and (max-device-width: 1366px) {
    .parallax {
      background-attachment: scroll;
    }
  }

  .footer {
    position: relative;
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
  }

  .h2desperte {
    font-family: lulobold;
    margin-top: 180px
  }

  .h2desperte2 {
    font-family: lulo
  }

  .myVideo1 {
    position: absolute;
    margin-top: 0px;
    padding: 0;
    min-width: 100%;
    max-width: 100%;
    width: auto;
    height: 750px;
    object-fit: cover;
  }

  .myVideo2 {
    position: absolute;
    margin-top: 0px;
    padding: 0;
    min-width: 100%;
    max-width: 100%;
    height: 750px;
    object-fit: cover;
    object-position: center;
  }

  .calcada1 {
    position: absolute;
    width: 100%;
    padding: 0;
    margin-top: -150px;
    object-fit: cover;
    object-position: center
  }

  .zap3 {
    position: relative;
    margin-top: -70px;
  }

  .bg {
    width: 100%
  }

  .tema {
    height: 100px;
    object-fit: cover;
  }

  .logo {
    position: absolute;
    top: 10%;
    text-align: center
  }

  .local1 {
    font-family: lulobold;
    text-transform: uppercase;
    color: #1b0600;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 10px
  }

  .local2 {
    font-family: lulobold;
    text-transform: uppercase;
    color: #1b0600;
    font-weight: bold;
    font-size: 1em;
    padding-left: 10px
  }

  .data1 {
    font-family: lulobold;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    font-size: 2em;
    padding-left: 10px;
    margin-bottom: 0
  }

  .data2 {
    font-family: lulobold;
    text-transform: uppercase;
    color: white;
    font-weight: 900;
    font-size: 1em;
    padding-left: 10px;
    margin-bottom: 0
  }

  .maracana {
    position: absolute;
    width: 380px;
    height: 450px;
    bottom: 250px;
    right: 0;
    object-fit: cover;
    object-position: left
  }

  .niteroi {
    position: absolute;
    width: auto;
    height: auto;
    bottom: -20px;
    right: 0px;
    object-fit: cover;
    object-position: left;
  }

  .bondinho {
    position: absolute;
    width: 750px;
    height: 280px;
    bottom: 0;
    left: -70px;
    object-fit: cover;

  }

  .birds {
    position: absolute;
    width: 500px;
    top: 10px;
    left: 80px;
  }

  .sub1 {
    font-family: lulo;
    text-transform: uppercase;
    color: #e4701f;
    font-size: .75em
  }

  .paralax2 {
    position: relative;
    margin-top: -200px;
    background-color: #e4701f;
    height: 1000px;
  }

  .paralax3 {
    position: relative;
    margin-top: -90px;
    background-color: #e4701f;
    height: 1300px;
  }

  .bgcolum {
    position: relative;
    text-align: center;
    margin-top: -20px;
    z-index: 1000
  }

  .bgcolum2 {
    width: 100%;
    position: relative;
    text-align: center;
    font-size: .75em;
    margin-top: 50px
  }

  .texto1 {
    font-family: lulobold;
    padding: 10px;
    margin: 0;
    width: 100%;
  }

  .texto2 {
    font-family: lulo;
    text-align: center;
    padding: 15px;
    margin: 0;
    width: 100%;
  }

  .fe1 {
    font-family: julietta;
    color: white;
    font-size: 5em
  }

  .fe2 {
    font-family: julietta;
    color: white;
    font-size: 2.5em
  }

  @font-face {
    font-family: julietta;
    src: url('../assets/font/julietta.ttf');
  }

  @font-face {
    font-family: lulobold;
    src: url('../assets/font/LuloCleanW01OneBold.ttf');
  }

  @font-face {
    font-family: lulo;
    src: url('../assets/font/LuloCleanW01One.ttf');
  }

  .btnins {
    position: relative;
    font-family: lulobold;
  }

  h4 {
    font-size: 1.75em
  }

  .imgJBB {
    height: 75px;
    object-fit: cover;

  }
</style>