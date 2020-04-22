<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title v-text="title" />
      <v-tabs
        align-with-title
      >
        <v-spacer />
        <v-tab>Главная</v-tab>
        <v-tab>Магазин</v-tab>
        <v-tab>Ковка на заказ</v-tab>
        <v-tab>Контакты</v-tab>
      </v-tabs>
    </v-toolbar>
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
export default {
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
