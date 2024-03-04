<template>
  <div style="background-image: url('/image/bg.png');">
    <navbar />
  </div>
  <div >
    <program/>
  </div>
</template>

<script>
import navbar from './component/navbar.vue';
import program from './component/program.vue';
export default {
  components: {
    navbar,
    program
  }
}
</script>

<style>
  /* Tambahkan gaya CSS di sini jika diperlukan */
</style>
