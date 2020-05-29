<template>
  <v-container>
    <v-row>
      <v-col>
        <v-toolbar short dark>
          <v-toolbar-title :v-text="title" />
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
          <v-btn icon>
            <v-badge
              color="orange"
              :content="numProductsAdded"
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
  name: 'Header',

  data: () => {
    return {
      title: 'BLACKSMITH STORE'
    }
  },

  computed: {
    numProductsAdded () {
      return this.$store.getters.productsAdded.length
    }
  }
}
</script>

<style scoped>
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
