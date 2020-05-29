<template>
  <v-container>
    <v-row>
      <p>Страница магазина</p>
    </v-row>
    <v-row v-for="product in products" :key="product.id">
      <ShopItem :product="product" />
    </v-row>
  </v-container>
</template>

<script>
import ShopItem from '../components/shop-item'

export default {
  name: 'Shop',
  components: {
    ShopItem
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
