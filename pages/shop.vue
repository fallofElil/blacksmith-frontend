<template>
  <v-container>
    <v-row>
      <p>Страница магазина</p>
    </v-row>
    <v-row>
      <v-col>
        <ShopItem title="Изделие №1" sub-title="Обычное кованное изделие" />
      </v-col>
      <v-col>
        <ShopItem title="Изделие №2" sub-title="Обычное кованное изделие" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShopItem from '../components/shop-item'

export default {
  name: 'Shop',
  components: {
    ShopItem
  }
}
</script>

<style scoped>

</style>
