<template>
  <v-container>
    <v-row>
      <v-col>
        <v-toolbar short dark>
          <v-toolbar-title v-text="title" />
          <v-tabs
            align-with-title
          >
            <v-spacer />
            <v-tab>
              <NuxtLink to="/" class="link">
                Главная
              </NuxtLink>
            </v-tab>
            <v-tab>
              <NuxtLink to="/shop" class="link">
                Магазин
              </NuxtLink>
            </v-tab>
            <v-tab>
              <NuxtLink to="custom-order" class="link">
                Ковка на заказ
              </NuxtLink>
            </v-tab>
            <v-tab>Контакты</v-tab>
          </v-tabs>
          <v-btn icon>
            <v-badge
              color="orange"
              content="0"
            >
              <v-icon>mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.link {
  width: 100%;
  outline: none;
  text-decoration: none;
}
</style>
