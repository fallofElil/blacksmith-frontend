<template>
  <v-dialog v-model="modalOpen" dark max-width="35vw" @click:outside="setModalOpen(false)">
    <v-card class="content-container">
      <v-card-title>Список приобретаемых товаров</v-card-title>
      <v-card-text>
        <v-list v-for="product in productsInCart" :key="product.id">
          <v-list-item class="product-list-item">
            <v-list-item-title>
              {{ product.name }}
            </v-list-item-title>
            <span style="white-space: nowrap">{{ product.price }} &#8381;</span>
            <v-list-item-action>
              <v-btn fab dark small color="primary" @click="removeFromCart(product.id)">
                <v-icon dark>
                  mdi-minus
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <p class="total-price mb-4">
          Итого:<span>{{ totalPrice }} &#8381;</span>
        </p>
        <v-textarea
          outlined
          name="input-7-4"
          label="Комменарий к заказу"
          class="comment"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="mx-auto">
          Купить
        </v-btn>
      </v-card-actions>
    </v-card>
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
    },
    totalPrice () {
      return this.$store.getters.productsAdded.reduce(function (sum, current) {
        return sum + current.price
      }, 0)
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
.content-container {
  padding: .5rem;
}
.product-list-item {
  padding: 0;
}
.total-price {
  margin: 0;
  padding-right: 3rem;
  text-align: right;
}
.total-price span {
  padding-left: 1rem;
  color: #fff;
}
.comment {
  margin-bottom: -2rem;
}
</style>
