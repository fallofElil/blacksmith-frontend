<template>
  <v-container class="justify-center">
    <v-row class="justify-center">
      <article class="col-10">
        <v-img
          class="slider-img"
          :src="require('../static/old-blacksmith-shop-mindy-randall.jpg')"
          aspect-ratio="1.4"
          height="380px"
          alt="blacksmith"
        />
      </article>
    </v-row>
    <v-row class="flex-column col-10 mx-auto">
      <v-row class="justify-center">
        <h3 class="text-center title-features mb-4">
          Почему стоит выбрать именно нас?
        </h3>
      </v-row>
      <v-row>
        <v-col class="text-center feature-col">
          <v-icon x-large class="mb-4">
            mdi-account-tie
          </v-icon>
          <h4 class="mb-4">
            <i>Индивидуальный подход</i>
          </h4>
          <p>
            Мы дорожим каждым клиентом и с заботой относимся к каждому изделию
            именно поэтому мы даём пожизненную гарантию на каждое изделие
          </p>
        </v-col>
        <v-col class="text-center feature-col">
          <v-icon x-large class="mb-4">
            mdi-cash
          </v-icon>
          <h4 class="mb-4">
            <i>Адаптивная цена</i>
          </h4>
          <p>
            Мы всегда готовы к взаимовыгодным соглашниям, поэтому конечная сумма заказа
            будет только после нашей беседы
          </p>
        </v-col>
        <v-col class="text-center feature-col">
          <v-icon x-large class="mb-4">
            mdi-cog
          </v-icon>
          <h4 class="mb-4">
            <i>Только качественные материалы</i>
          </h4>
          <p>
            Мы дорожим качеством наших изделий, поэтому мы с трепетом относимся к
            материалам, прибретаемых у наших поставщиков
          </p>
        </v-col>
      </v-row>
    </v-row>
    <v-row class="flex-column col-10 mx-auto">
      <v-row class="justify-center">
        <h3 class="text-center title-features mb-4">
          Оцените наши новинки!
        </h3>
      </v-row>
      <v-row class="justify-space-between products">
        <ShopItem
          v-for="product in products.filter((product, index) => index <= 2)"
          :key="product._id"
          :product="product"
          card-width="300"
        />
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import ShopItem from '../components/ShopItem'

export default {
  name: 'Index',
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
  },
  methods: {
    setModalOpen () {
      this.$store.commit('showCheckoutModal', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .slider-img {
    border-radius: 1rem;
  }
  .title-features {
    font-size: 2rem;
  }
  .feature-col {
    border-right: 1px solid white;

    &:last-of-type {
      border: none;
    }
  }
  .products {
    align-items: flex-start;
  }
</style>
