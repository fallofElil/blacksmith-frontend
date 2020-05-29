<template>
  <v-app dark class="app-container">
    <Header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '../components/Header'

export default {

  components: {
    Header
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
