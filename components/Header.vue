<template>
  <v-container fluid class="header-wrapper">
    <v-toolbar short dark>
      <div class="title-container">
        <h1 class="title">
          {{ title }}
          <v-icon class="logo">
            mdi-anvil
          </v-icon>
        </h1>
      </div>
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
          <NuxtLink to="Shop" class="link">
            <span>Магазин</span>
          </NuxtLink>
        </v-tab>
        <v-tab>
          <NuxtLink to="CustomOrder" class="link">
            <span>Ковка на заказ</span>
          </NuxtLink>
        </v-tab>
        <v-tab>
          <NuxtLink to="Contacts" class="link">
            <span>Контакты</span>
          </NuxtLink>
        </v-tab>
      </v-tabs>
      <v-btn class="btn-cart" icon @click="setModalOpen(true)">
        <v-badge
          color="orange"
          offset-x="13"
          offset-y="10"
          :content="numProductsAdded"
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            Вход / Регистрация
          </v-btn>
        </template>

        <v-list flat>
          <v-list-item-group>
            <v-list-item @click="setLoginOpen(true)">
              <v-list-item-title>
                <v-icon class="acc-icon">
                  mdi-account-key
                </v-icon>
                <span>Войти</span>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="setSignUpOpen(true)">
              <v-list-item-title>
                <v-icon class="acc-icon">
                  mdi-account-plus
                </v-icon>
                <span>Регистрация</span>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-toolbar>
    <Checkout />
    <Login />
    <Registration />
  </v-container>
</template>

<script>
import Checkout from './modal/Checkout'
import Login from './modal/Login'
import Registration from './modal/Registration'

export default {
  name: 'Header',
  components: { Registration, Login, Checkout },
  data: () => {
    return {
      title: 'BLACKSMITH STORE'
    }
  },

  computed: {
    numProductsAdded () {
      return this.$store.getters.productsAdded.length
    }
  },

  methods: {
    setModalOpen (show) {
      this.$store.commit('showCheckoutModal', show)
    },
    setLoginOpen (show) {
      this.$store.commit('showLoginModal', show)
    },
    setSignUpOpen (show) {
      this.$store.commit('showSignupModal', show)
    }
  }
}
</script>

<style scoped>
.header-wrapper {
  padding: 0;
}
.title-container {
  display: flex;
  flex: 1 1 30%;
  align-items: center;
}
.title {
  padding-left: 1rem;
}
.logo {
  margin-left: .25rem;
  margin-bottom: 4px;
  font-size: 26px;
}
.link {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  outline: none;
  text-decoration: none;
}
.btn-cart {
  margin-right: 0;
}
.acc-icon {
  margin-right: .5rem;
}
</style>
