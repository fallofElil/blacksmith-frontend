<template>
  <v-dialog v-model="loginOpen" max-width="35vw" @click:outside="setLoginOpen(false)">
    <v-card>
      <v-card-title>Форма авторизации</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            type="email"
            :counter="50"
            name="email"
            label="Email"
            prepend-icon="mdi-email"
            class="mb-4"
            required
          />
          <v-text-field
            v-model="password"
            type="password"
            :counter="50"
            name="password"
            label="Пароль"
            prepend-icon="mdi-key"
            class="mb-4"
            required
          />
          <v-btn color="primary" class="btn-submit d-flex mx-auto">
            Войти
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Login',

  data: () => ({
    email: '',
    password: ''
  }),

  computed: {
    loginOpen () {
      return this.$store.getters.isLoginModalOpen
    }
  },

  methods: {
    setLoginOpen (show) {
      this.$store.commit('showLoginModal', show)
    }
  }
}
</script>

<style scoped>

</style>
