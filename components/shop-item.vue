<template>
  <v-card
    class="product"
    max-width="400"
  >
    <v-img
      src="/external-content.duckduckgo.com.jpeg"
      height="200px"
    />
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>{{ product.description }}</v-card-subtitle>
    <v-card-actions>
      <v-btn @click="addToCart(product.id)">В корзину</v-btn>
      <v-btn>Подробнее</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ShopItem',
  props: ['product'],
  methods: {
    addToCart (id) {
      this.$store.commit('addToCart', id)
    },
    removeFromCart (id) {
      this.$store.commit('removeFromCart', id)
    }
  }
}
</script>

<style scoped>
.product {
  margin-right: 2rem;
  margin-bottom: 2rem;
}
</style>
