<template>
  <v-app dark class="app-container">
    <Header />
    <v-content class="pa-0">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {

  components: {
    Header,
    Footer
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BLACKSMITH STORE'
    }
  }
}
</script>

<style scoped>
.app-container {
  background-color: #7f8688;
}
</style>
