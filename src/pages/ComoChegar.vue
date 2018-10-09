<template>
    <q-page>
      <iframe id="iframe" src="https://www.google.com/maps/d/embed?mid=1ALnS8JLUtWxOfq5C8E2m15NY-RhCquBt&hl=pt-BR" width="100%"></iframe>
    </q-page>
</template>
  
  <script>
  export default {
    name: 'Comochegar',
    mounted() {
      var b = window.innerHeight;  
      document.getElementById('iframe').style.height = b - 90 + 'px'
    },  
  }
  </script>