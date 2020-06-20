<template>
  <v-container class="pa-0" fluid>
    <v-row class="px-3 mb-12 justify-center">
      <Map />
    </v-row>
    <v-row class="justify-center mb-12">
      <v-col class="col-6 feedback-card">
        <v-row class="px-3 justify-center">
          <v-col class="text-center">
            <h2>Оставьте отзыв или предложение</h2>
          </v-col>
        </v-row>
        <v-row class="px-3 justify-center">
          <v-col>
            <v-form>
              <v-text-field
                v-model="name"
                :counter="60"
                label="ФИО"
                prepend-icon="mdi-account"
                class="mb-4"
                required
              />
              <v-text-field
                v-model="email"
                type="email"
                :counter="50"
                label="Email"
                prepend-icon="mdi-email"
                class="mb-4"
                required
              />
              <v-textarea
                outlined
                name="input-7-4"
                label="Изложите свою мысль"
              />
              <v-row class="justify-space-around">
                <v-btn color="primary" class="btn-submit">
                  Отправить
                </v-btn>
                <v-btn class="btn-clear" @click="reset">
                  Очистить
                </v-btn>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Map from '../components/Map'

export default {
  name: 'Contacts',
  components: { Map }
}
</script>

<style scoped>
  .feedback-card {
    padding: 1.5rem;
    background-color: #404040;
    border-radius: 1rem;
  }
</style>
