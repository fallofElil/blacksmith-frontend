<template>
  <v-container>
    <v-row>
      <p>Страница магазина</p>
    </v-row>
    <v-row>
      <ShopItem v-for="product in products" :product="product" :key="product.id" />
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
