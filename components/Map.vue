<template>
  <yandex-map
    :coords="[46.146866, 39.786357]"
    zoom="15"
    class="ya-map"
  >
    <ymap-marker
      marker-type="placemark"
      :coords="[46.146866, 39.786357]"
      :icon="{color: 'green'}"
    />
  </yandex-map>
</template>

<script>

export default {
  name: 'Map'
}
</script>

<style scoped>
.ya-map {
  width: 100%;
  height: 400px;
}
</style>
