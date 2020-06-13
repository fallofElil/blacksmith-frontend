import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: 'd82e4203-9dd8-4887-b598-174fad0ecdf4',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(YmapPlugin, settings)
