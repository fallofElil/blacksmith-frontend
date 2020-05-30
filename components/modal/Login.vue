<template>
  <v-dialog v-model="loginOpen" max-width="35vw" @click:outside="setLoginOpen(false)">
    <v-card>
      <v-card-title>Форма авторизации</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            :counter="50"
            label="Email"
            required
          />
          <v-text-field
            v-model="email"
            :counter="50"
            label="Пароль"
            required
          />
          <v-btn color="primary" class="btn-submit">
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
