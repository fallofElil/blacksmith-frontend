<template>
  <v-dialog v-model="signUpOpen" max-width="35vw" @click:outside="setSignUpOpen(false)">
    <v-card>
      <v-card-title>Форма регистрации</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            type="email"
            :counter="50"
            label="Email"
            prepend-icon="mdi-email"
            class="mb-4"
            required
          />
          <v-text-field
            v-model="name"
            type="username"
            :counter="50"
            label="Ваше имя"
            prepend-icon="mdi-account"
            class="mb-4"
            required
          />
          <v-text-field
            v-model="password"
            type="password"
            :counter="30"
            label="Пароль"
            prepend-icon="mdi-key"
            class="mb-4"
            required
          />
          <v-btn color="primary" class="btn-submit d-flex mx-auto">
            Зарегистрироваться
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Registration',

  data: () => ({
    email: '',
    name: '',
    password: '',
    role: 'customer'
  }),

  computed: {
    signUpOpen () {
      return this.$store.getters.isSignupModalOpen
    }
  },

  methods: {
    setSignUpOpen (show) {
      this.$store.commit('showSignupModal', show)
    }
  }
}
</script>

<style scoped>

</style>
