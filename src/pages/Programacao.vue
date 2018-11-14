<template>
  <q-page padding>
    <q-scroll-area id="scrollarea">
      <h2>Programação</h2>
      <q-timeline color="primary" class="q-pa-lg" v-for="item in programa" :key="item.id">
        <q-timeline-entry heading>{{item.data}}</q-timeline-entry>

        <q-timeline-entry :title=item.title :subtitle=item.subtitle :side=item.side>
          <div>
            {{item.descricao}}
          </div>
        </q-timeline-entry>
      </q-timeline>
    </q-scroll-area>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Programacao',
    mounted() {
      var a = window.innerHeight;
      document.getElementById('scrollarea').style.height = a - 110 + 'px'
    },
    computed: {
      ...mapGetters({
        programa: 'programa',
      })
    }
  }
</script>