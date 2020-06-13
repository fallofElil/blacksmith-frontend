<template>
  <v-container>
    <v-card class="product-page">
      <div class="img-container">
        <v-img class="product-img" src="/external-content.duckduckgo.com.jpeg" />
      </div>
      <section>
        <v-card-title><h2>Заголовок продукта</h2></v-card-title>
        <v-card-subtitle>Катеория товара</v-card-subtitle>
        <v-card-text>
          <p class="product-description">
            {{ description }}
          </p>
          <p class="product-price">
            Цена: <strong>1000 &#8381;</strong>
          </p>
        </v-card-text>
        <v-card-actions class="ml-2">
          <v-btn color="primary">
            В корзину
          </v-btn>
        </v-card-actions>
      </section>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ProductDetailId',

  data: () => ({
    description: 'Описание товаров для интернет магазина должно быть уникальными. Точка. Некоторые предприниматели так сильно спешат скорее запустить интернет-бизнес, что принимают решение скопировать описания товаров у конкурентов. Или пытаются их переписать с помощью услуг недорогих копирайтеров. 100% уникальности добиться будет сложно. Потому проблемы с прочтением контента поисковыми роботами вероятны. '
  }),

  props: {
    title: String,
    subTitle: String,
    img: String
  }
}
</script>

<style scoped>
.product-page {
  display: flex;
  justify-content: flex-start;
}
.img-container {
  width: 480px;
}
.product-description {
  margin-bottom: 1rem;
}
.product-price {
  margin-bottom: 0;
  font-size: 1.25rem;
}
</style>
