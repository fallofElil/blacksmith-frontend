<template>
  <v-container class="pa-0" fluid>
    <v-row class="px-3">
      <Map />
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
</style>
