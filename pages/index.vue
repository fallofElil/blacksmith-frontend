<template>
  <v-flex
    xs12
    sm8
    md6
  >
    <v-btn @click="setModalOpen">
      Хочу модалку
    </v-btn>

    <Checkout />
  </v-flex>
</template>

<script>
import Checkout from '../components/modal/Checkout'

export default {
  name: 'Index',
  components: { Checkout },
  methods: {
    setModalOpen () {
      this.$store.commit('showCheckoutModal', true)
    }
  }
}

</script>
