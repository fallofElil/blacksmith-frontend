<template>
  <v-dialog v-model="modalOpen" dark max-width="35vw" @click:outside="setModalOpen(false)">
    <v-card-title>Список приобретаемых товаров</v-card-title>
    <v-list v-for="product in productsInCart" :key="product.id">
      <v-list-item>
        <v-list-item-title>
          {{ product.name }}
        </v-list-item-title>
        <v-list-item-action>
          <v-btn fab dark small color="primary" @click="removeFromCart(product.id)">
            <v-icon dark>
              mdi-minus
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-dialog>
</template>

<script>
export default {
  name: 'Checkout',

  computed: {
    productsInCart () {
      return this.$store.getters.productsAdded
    },
    modalOpen () {
      return this.$store.getters.isCheckoutModalOpen
    }
  },

  methods: {
    removeFromCart (id) {
      this.$store.commit('removeFromCart', id)
    },
    setModalOpen (show) {
      this.$store.commit('showCheckoutModal', show)
    }
  }
}
</script>

<style scoped>

</style>
