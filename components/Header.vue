<template>
  <v-container class="header-wrapper">
    <v-toolbar short dark>
      <h1 class="title logo">
        {{ title }}
      </h1>
      <v-tabs
        align-with-title
      >
        <v-spacer />
        <v-tab>
          <NuxtLink to="/" class="link">
            <span>Главная</span>
          </NuxtLink>
        </v-tab>
        <v-tab>
          <NuxtLink to="/shop" class="link">
            <span>Магазин</span>
          </NuxtLink>
        </v-tab>
        <v-tab>
          <NuxtLink to="custom-order" class="link">
            <span>Ковка на заказ</span>
          </NuxtLink>
        </v-tab>
        <v-tab>Контакты</v-tab>
      </v-tabs>
      <v-btn icon @click="setModalOpen(true)">
        <v-badge
          color="orange"
          :content="numProductsAdded"
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>
    <Checkout />
  </v-container>
</template>

<script>
import Checkout from './modal/Checkout'

export default {
  name: 'Header',
  components: { Checkout },
  data: () => {
    return {
      title: 'BLACKSMITH STORE'
    }
  },

  computed: {
    numProductsAdded () {
      return this.$store.getters.productsAdded.length
    }
  },

  methods: {
    setModalOpen (show) {
      this.$store.commit('showCheckoutModal', show)
    }
  }
}
</script>

<style scoped>
  .header-wrapper {
    padding: 0;
  }
  .logo {
    width: 243px;
  }
.link {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  outline: none;
  text-decoration: none;
}
</style>
