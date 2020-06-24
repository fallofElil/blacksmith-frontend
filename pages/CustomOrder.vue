<template>
  <v-container>
    <v-card class="mx-auto col-8">
      <v-card-title>Форма индивидуального заказа</v-card-title>
      <v-card-text>
        <v-form ref="customOrderRef">
          <v-text-field
            v-model="name"
            :counter="60"
            label="ФИО"
            prepend-icon="mdi-account"
            class="mb-4"
            required
          />
          <v-text-field
            v-model="phone"
            type="phone"
            :counter="12"
            label="Email"
            prepend-icon="mdi-phone"
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
          <v-select
            v-model="select"
            :items="materials"
            :rules="[v => !!v || 'Выберете материал']"
            label="Материал изделия"
            prepend-icon="mdi-hexagon-slice-3"
            class="mb-4"
            required
          />
          <div class="descr-wrapper mb-4">
            <v-icon class="descr-icon">
              mdi-information
            </v-icon>
            <p class="descr-txt">
              {{ description }}
            </p>
          </div>
          <v-textarea
            outlined
            name="input-7-4"
            label="Форма описания изделия"
          />
          <v-btn color="primary" class="btn-submit">
            Отправить
          </v-btn>
          <v-btn class="btn-clear" @click="reset">
            Очистить
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'CustomOrder',
  data: () => ({
    name: '',
    phone: '+7',
    email: '',
    select: '',
    materials: [
      'сталь', 'железо', 'чугун', 'медь', 'бронза', 'латунь', 'смешанный'
    ],
    description: 'Введите описание в свободном формате в форме ниже. ' +
      'Укажите все необходимые пожелания, а также техническую информацию, ' +
      'необходимую для мастера.'
  }),

  methods: {
    reset () {
      this.$refs.customOrderRef.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.descr-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: .5rem;
  margin-bottom: 1rem;
  border: 1px solid;
  border-radius: 5px;
  opacity: .7;
}
.descr-icon {
  margin-right: .5rem;
}
.descr-txt {
  margin: 0;
}
.btn-submit {
  margin-right: .5rem;
}
.btn-clear {
  background-color: #bbbbbb !important;
  color: rgba(0,0,0,.87);
}
</style>
