<template>
  <v-card
    max-width="400"
  >
    <v-img
      src="/external-content.duckduckgo.com.jpeg"
      height="200px"
    ></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subTitle }}</v-card-subtitle>
    <v-card-actions>
      <v-btn>Купить</v-btn>
      <v-btn>Подробнее</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ShopItem',
  props: {
    title: String,
    subTitle: String
  }
}
</script>

<style scoped>

</style>
