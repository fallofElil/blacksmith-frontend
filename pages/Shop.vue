<template>
  <v-container>
    <v-row>
      <p>Страница магазина</p>
    </v-row>
    <v-row class="justify-space-between">
      <ShopItem
        v-for="product in products"
        :key="product._id"
        :product="product"
        card-width="360"
      />
    </v-row>
  </v-container>
</template>

<script>
import ShopItem from '../components/ShopItem'

export default {
  name: 'Shop',
  components: {
    ShopItem
  },
  async fetch ({ store }) {
    await store.dispatch('fetchAllProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>

</style>
