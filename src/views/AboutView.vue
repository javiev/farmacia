<template>
  <div class="about">
    <h1>This is an about page</h1>
    <FarmaciaAPI></FarmaciaAPI>
  </div>
</template>

<script>

import { defineComponent } from 'vue'
import FarmaciaAPI from '@/components/FarmaciaAPI.vue'

export default defineComponent({
  components: { FarmaciaAPI }
})
</script>
