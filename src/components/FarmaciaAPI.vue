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
  mounted () {
    axios
      .get('/farmacia/index.php/ws/getLocalesTurnos')
      .then(response => {
        this.info = response.data
      })
  }
}
</script>

<style scoped>

</style>
