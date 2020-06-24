<template>
  <v-container class="mt-6">
    <v-card class="product-page">
      <div class="img-container">
        <v-img class="product-img" src="/gates.jpeg" />
      </div>
      <section>
        <v-card-title><h2>Ворота</h2></v-card-title>
        <v-card-subtitle>Ограждение</v-card-subtitle>
        <v-card-text>
          <p class="product-description mb-6">
            {{ description }}
          </p>
          <v-simple-table class="mb-4">
            <thead>
              <tr>
                <th>Высота (см)</th>
                <th>Длина (см)</th>
                <th>Материалы</th>
                <th>Цвета</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2300</td>
                <td>3600</td>
                <td>металл, чугун, антикорозийное покрытие</td>
                <td>черный, позолота</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
        <v-card-actions class="pl-8 card-actions">
          <v-row>
            <p class="product-price mr-12">
              Цена: <strong>30000 &#8381;</strong>
            </p>
            <v-btn color="primary">
              В корзину
            </v-btn>
          </v-row>
        </v-card-actions>
      </section>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ProductDetailId',

  props: {
    title: String,
    subTitle: String,
    img: String
  },

  data: () => ({
    description: 'Ворота для выезда транспорта из часного дома. Явялется не только отличным элементом декора внешнего ' +
      'облика жил. площади, но также является гарантом безопасности от вторжения злоумышленников. Изначальное изделие ' +
      'предоставляется без механизма автоматического открытия. Если у Вас иммеется такой механизм, или Вы желаете установить ' +
      'его при монтаже, укажите данный пункт в комментарии к заказу.'
  })
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
.card-actions {
  margin-top: -1.75rem;
}
</style>
