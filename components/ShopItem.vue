<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card
        :elevation="hover ? 24 : 6"
        class="product"
        :max-width="cardWidth"
      >
        <v-img
          :src="getBase64(product.prodImage)"
          height="200px"
        />
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-subtitle>{{ product.description }}</v-card-subtitle>
        <v-card-text>Цена: <span class="price">{{ product.price }} &#8381;</span></v-card-text>
        <v-card-actions class="mx-2 mb-2">
          <v-btn color="primary" class="btn-add" @click="addToCart(product.id)">
            В корзину
          </v-btn>
          <v-btn class="btn-clear">Подробнее</v-btn>
        </v-card-actions>
        <NuxtLink class="details-link" :to="{ name: 'product_detail-id' }" />
      </v-card>
    </template>
  </v-hover>
</template>

<script>
import { arrayBufferToBase64 } from '../helpers/img-base64'

export default {
  name: 'ShopItem',
  props: ['product', 'cardWidth'],
  methods: {
    addToCart (id) {
      this.$store.commit('addToCart', id)
    },
    removeFromCart (id) {
      this.$store.commit('removeFromCart', id)
    },
    getBase64 (prodImage) {
      return `data:${prodImage.contentType};base64,${arrayBufferToBase64(prodImage.data.data)}`
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
  margin-right: .75rem;
  z-index: 2;
}
.price {
  color: #fff;
}
.btn-clear {
  background-color: #bbbbbb !important;
  color: rgba(0,0,0,.87);
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
