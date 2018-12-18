<template>
  <q-page>
    <div>
        <div class="fundoalfa"></div>
      <div class="paralax flex flex-center">

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
            <img src="../assets/landpage/Logo_Despertar2019.png" width="270px" class="relative-position" alt="">
            <p class="fe1 desktop-only">Fé, Esperança e Amor</p>
            <p class="fe2 mobile-only">Fé, Esperança e Amor</p>
            <q-btn @click="openedinscri = true" label="Inscreva-se" size="150%" color="orange" rounded class="q-mt-xl text-brown-10"></q-btn>
          </div>
        </div>
        <img width="100%" class="calcada1 desktop-only z-top" src="../assets/landpage/ZigZag.png" alt="calçada copacabana">
        <img width="100%" class="calcada2 mobile-only z-top" src="../assets/landpage/ZigZag.png" alt="calçada copacabana">
        <img width="100%" class="zap3 desktop-only z-max" src="../assets/landpage/ZigZag3.png" alt="">
        <img width="100%" class="zap4 mobile-only z-max" src="../assets/landpage/ZigZag3.png" alt="">

      </div>
      <div class="column items-center">
        <br>
        <br>
        <h2 class="text-weight-bold text-white z-top">Desperte-se</h2>
        <q-btn @click="opened = true" size="100px" flat round class="z-top">
          <img width="100%" class="desktop-only" src="../assets/landpage/play.png" alt="">
          <img width="40%" class="mobile-only" src="../assets/landpage/play.png" alt="">
        </q-btn>
        <h2 class="text-weight-light text-white z-max">Aperte o play!</h2>
        <video autoplay muted loop class="myVideo1 desktop-only">
          <source src="../assets/landpage/teaser.mp4" type="video/mp4">
        </video>
        <video autoplay muted loop class="myVideo2 mobile-only">
          <source src="../assets/landpage/teaser.mp4" type="video/mp4">
        </video>
      </div>

      <div class="column flex flex-center paralax2 desktop-only">
        <div class="bgcolum column flex flex-center">
          <h4 class="text-weight-bold uppercase text-white texto1">Qual despertar você pretende adquirir?</h4>

          <h4 class="text-weight-bold uppercase text-white texto1">Despertar social - R$98,00</h4>
          <p class="text-weight-light uppercase text-white texto1">Se você estiver passando por um momento de instabilidade financeira,
            <br>e está com dificuldades de pagar o valor integral da inscrição,
            <br>separamos essa opção pra você. Mas se liga hein?! Outras pessoas irão abençoar sua ida ;) </p>
          <h4 class="text-weight-bold  uppercase text-white texto1">DESPERTAR CONSCIENTE - R$138,00</h4>
          <p class="text-weight-light uppercase text-white texto1">Esse é o valor "normal" do ingresso. Nos dá agilidade e faz a gente "fechar a conta" mais cedo.</p>
          <h4 class="text-weight-bold uppercase text-white texto1">DESPERTAR SOLIDÁRIO - R$178,00</h4>
          <p class="text-weight-light uppercase text-white texto1">Esse é pra galera que quer, e está em condições de ajudar a galera que está participando
            <br>pelo Despertar Social, e aqueles que estão vindo de regiões mais distantes e possuem outros custos adicionais.
            <br>Deus ama a quem dá com alegria, e queremos dar essa oportunidade pra você.</p>

        </div>

        <img src="../assets/landpage/Maracana.png" class="maracana desktop-only" width="50%" alt="">
        <img src="../assets/landpage/Niteroi.png" class="niteroi desktop-only" width="50%" alt="">
        <img src="../assets/landpage/Bondinho.png" class="bondinho desktop-only" width="50%" alt="">
        <q-btn @click="openedinscri = true" label="Inscreva-se" size="150%" color="brown-10" rounded class="btnins q-px-xl text-orange q-mb-xl"></q-btn>

      </div>
      <div class="column flex flex-center paralax3 mobile-only">
          <div class="bgcolum2 column flex flex-center">
            <h4 class="text-weight-bold uppercase text-white texto1">Qual despertar você pretende adquirir?</h4>
  
            <h4 class="text-weight-bold uppercase text-white texto1">Despertar social - R$98,00</h4>
            <p class="text-weight-light uppercase text-white texto1">Se você estiver passando por um momento de instabilidade financeira,
              <br>e está com dificuldades de pagar o valor integral da inscrição,
              <br>separamos essa opção pra você. Mas se liga hein?! Outras pessoas irão abençoar sua ida ;) </p>
            <h4 class="text-weight-bold  uppercase text-white texto1">DESPERTAR CONSCIENTE - R$138,00</h4>
            <p class="text-weight-light uppercase text-white texto1">Esse é o valor "normal" do ingresso. Nos dá agilidade e faz a gente "fechar a conta" mais cedo.</p>
            <h4 class="text-weight-bold uppercase text-white texto1">DESPERTAR SOLIDÁRIO - R$178,00</h4>
            <p class="text-weight-light uppercase text-white texto1">Esse é pra galera que quer, e está em condições de ajudar a galera que está participando
              <br>pelo Despertar Social, e aqueles que estão vindo de regiões mais distantes e possuem outros custos adicionais.
              <br>Deus ama a quem dá com alegria, e queremos dar essa oportunidade pra você.</p>
  
          </div>
  
          <img src="../assets/landpage/Maracana.png" class="maracana desktop-only" width="50%" alt="">
          <img src="../assets/landpage/Niteroi.png" class="niteroi desktop-only" width="50%" alt="">
          <img src="../assets/landpage/Bondinho.png" class="bondinho desktop-only" width="50%" alt="">
          <q-btn @click="openedinscri = true" label="Inscreva-se" size="150%" color="brown-10" rounded class="q-px-xl text-orange q-mb-xl"></q-btn>
  
        </div>
    </div>

    <q-modal v-model="opened" class="z-max desktop-only">
      <iframe width="700px" height="450px" src="https://www.youtube.com/embed/JxLpyrT1S2s?autoplay=1&controls=0&rel=0" class="videoteaser"
        frameborder="0"></iframe>
    </q-modal>
    <q-modal v-model="opened" class="z-max mobile-only">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JxLpyrT1S2s?autoplay=1&controls=0&rel=0" class="videoteaser"
        frameborder="0"></iframe>
    </q-modal>

    <q-modal  v-model="openedinscri" class="z-max desktop-only">
        <iframe width="850px" height="750px" id='inscricao' src="https://www.pallua.com.br/captacao/projeto/evento_despertar_2019"></iframe>
    </q-modal>
    <q-modal  v-model="openedinscri" class="z-max maximized mobile-only">
        <iframe width="100%" height="100%" id='inscricao' src="https://www.pallua.com.br/captacao/projeto/evento_despertar_2019"></iframe>
    </q-modal>
    <div class="z-top footer bg-white">
      <!-- footer content -->
      <div class="row">
        <div class="col-lg-2 col-xs-5 col-md-3">
          <div class="q-pa-xl">
            <p class="sub1">Organização</p>
            <img width="100px" src="../assets/landpage/JBB.png" alt="">
          </div>
        </div>
        <div class="col-lg-7 col-xs-7 col-md-4">
          <div class="q-pa-xl">
            <p class="sub1">Apoio</p>
            <img width="38px" src="../assets/landpage/CBB.png" alt="">
            <img width="38px" src="../assets/landpage/JBC.png" alt="">
            <img width="38px" src="../assets/landpage/JUBERJ.png" alt="">
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 col-md-5">
          <div class="q-pa-xl">
            <p class="sub1">Siga-nos</p>
            <a href="https://www.facebook.com/juventudebatistabrasileira/">
              <img width="54px" class="q-pa-sm" src="../assets/landpage/facebook.png" alt="">
            </a>
            <a href="https://twitter.com/oficialjbb">
              <img width="54px" class="q-pa-sm" src="../assets/landpage/twitter.png" alt="">
            </a>
            <a href="https://www.instagram.com/somosjbb/">
              <img width="54px" class="q-pa-sm" src="../assets/landpage/instagram.png" alt="">
            </a>
            <a href="https://www.youtube.com/user/juventudebatista">
              <img width="54px" class="q-pa-sm" src="../assets/landpage/youtube.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return {
        opened: false,
        openedinscri: false
      }
    },
    methods: {
      principal() {
        this.$router.push('/programacao')
      },
      playvideo() {
        this.opened = true
      }
    }
  }    
</script>

<style>
  .base {
    position: absolute;
    width: 100%;
    top: 2%
  }

  .paralax {
    height: 50rem;
    width: 100%;
    background-image: url("../assets/landpage/backGround.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .fundoalfa {
    position: absolute;
    top: 0;
    height: 50rem;
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

  .myVideo1 {
    position: absolute;
    margin: 0;
    min-width: 100%;
    max-width: 100%;
    height: 650px;
    object-fit: cover;
    background-color: rgba(255, 255, 255, .5)
  }

  .myVideo2 {
    position: absolute;
    margin: 0;
    min-width: 100%;
    max-width: 100%;
    height: 550px;
    object-fit: cover;
    background-color: rgba(255, 255, 255, .5)
  }

  .calcada1 {
    position: absolute;
    top: 38rem;
    width: 100%;
    object-fit: cover;
    object-position: right
  }

  .calcada2 {
    position: absolute;
    top: 48.5rem;
    width: 100%;
    object-fit: cover;
    object-position: right
  }

  .zap3 {
    position: absolute;
    top: 53%;
  }

  .zap4 {
    position: absolute;
    top: 82rem;
    height: 100px;
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
    text-transform: uppercase;
    color: #1b0600;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 10px
  }

  .local2 {
    text-transform: uppercase;
    color: #1b0600;
    font-weight: bold;
    font-size: 1em;
    padding-left: 10px
  }

  .data1 {
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    font-size: 2em;
    padding-left: 10px;
    margin-bottom: 0
  }

  .data2 {
    text-transform: uppercase;
    color: white;
    font-weight: 900;
    font-size: 1em;
    padding-left: 10px;
    margin-bottom: 0
  }

  .maracana {
    position: absolute;
    width: 350px;
    height: 700px;
    bottom: 450px;
    right: 0;
    object-fit: cover;
    object-position: left
  }

  .niteroi {
    position: absolute;
    width: 450px;
    height: 550px;
    bottom: 0px;
    right: 0px;
    object-fit: cover;
    object-position: left;
  }

  .bondinho {
    position: absolute;
    width: 70%;
    height: 20%;
    bottom: 8%;
    left: -70px;
    object-fit: cover;
    object-position: top;

  }

  .birds {
    position: absolute;
    width: 100%;
    top: -570px;
    left: -250px;
  }

  .sub1 {
    text-transform: uppercase;
    color: #EE690B
  }

  .paralax2 {
    background-color: #EE690B;
    height: 1000px;
  }

  .paralax3 {
    background-color: #EE690B;
    height: 1200px;
  }
  .bgcolum {
    position: absolute;
    text-align: center;
    margin-top: 0px
  }
  .bgcolum2 {
    position: relative;
    text-align: center;
    margin-top: 0px
  }
  .texto1 {
    padding: 15px;
    margin: 0;
    width: 90%;
  }

  .fe1 {
    font-family: julietta;
    color: #1b0600;
    font-size: 5em
  }

  .fe2 {
    font-family: julietta;
    color: #1b0600;
    font-size: 2.5em
  }

  @font-face {
    font-family: julietta;
    src: url('../assets/font/julietta.ttf');
  }
  .btnins {
    position: absolute;
    bottom: 370px
  }

</style>