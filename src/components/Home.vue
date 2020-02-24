<template lang="html">
  <v-app>
    <v-container fill-height fluid id="wood">
      <v-layout align-center>
        <v-flex class="text-xs-center"><h1 class="display-3 secondary--text txt-shadow dancing">Eccentric Apparel</h1></v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#wood{
  background: url('../assets/wood.jpg') 100% 100% no-repeat;
  background-size: cover;
}
</style>
