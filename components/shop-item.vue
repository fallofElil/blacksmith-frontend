<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card
        :elevation="hover ? 24 : 6"
        class="product"
        max-width="360"
      >
        <v-img
          src="/external-content.duckduckgo.com.jpeg"
          height="200px"
        />
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-subtitle>{{ product.description }}</v-card-subtitle>
        <v-card-actions>
          <v-btn class="btn-add" @click="addToCart(product.id)">
            В корзину
          </v-btn>
          <v-btn>Подробнее</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
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
  position: relative;
  margin-bottom: 2rem;
}
.btn-add {
  z-index: 2;
}
.details-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
