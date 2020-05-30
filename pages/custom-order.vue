<template>
  <v-container>
    <v-card class="mx-auto col-8">
      <v-card-title>Форма индивидуального заказа</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="name"
            :counter="60"
            label="ФИО"
            required
          />
          <v-text-field
            v-model="email"
            :counter="50"
            label="Email"
            required
          />
          <v-select
            v-model="select"
            :items="materials"
            :rules="[v => !!v || 'Выберете материал']"
            label="Материал изделия"
            required
          />
          <div class="descr-wrapper">
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
          <v-btn class="btn-clear">
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
    email: '',
    select: '',
    materials: [
      'сталь', 'железо', 'чугун', 'медь', 'бронза', 'латунь', 'смешанный'
    ],
    description: 'Введите описание в свободном формате в форме ниже. ' +
      'Укажите все необходимые пожелания, а также техническую информацию, ' +
      'необходимую для мастера.'
  })
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
