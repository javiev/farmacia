<template>
  <h1>hola farmacia</h1>
</template>

<script>
import axios from 'axios'

export default {
  name: 'farmaciaAPI',
  data () {
    return {
      info: null
    }
  },
  async mounted () {
    axios
      .get('https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos')
      .then(response => (this.info = response))
  }
}

</script>

<style scoped>

</style>
