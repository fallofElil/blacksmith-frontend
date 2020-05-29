<template>
  <v-flex
    xs12
    sm8
    md6
  >
    <v-btn @click="open = !open">
      Хочу модалку
    </v-btn>

    <Checkout :open="open" />
  </v-flex>
</template>

<script>
import Checkout from '../components/modal/Checkout'

export default {
  name: 'Index',
  components: { Checkout },
  data () {
    return {
      open: false
    }
  }
}

</script>
