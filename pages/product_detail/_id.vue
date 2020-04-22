<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img :src="img" />
      </v-col>
      <v-col>
        <v-row></v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductDetailId',
  props: {
    title: String,
    subTitle: String,
    img: String
  }
}
</script>

<style scoped>

</style>
