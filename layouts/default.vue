<template>
  <v-app dark class="app-container">
    <Header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer :fixed="fixed" />
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
      fixed: false,
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
