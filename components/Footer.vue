<template>
  <v-footer class="app-footer" app>
    <v-container>
      <v-row>
        <p class="copyrigth">
          <span>&copy; ИП Биденко С.С. {{ new Date().getFullYear() }}</span>
        </p>
        <div class="socials">
          <v-btn class="btn-social" icon>
            <v-icon large>mdi-whatsapp</v-icon>
          </v-btn>
          <v-btn class="btn-social" icon>
            <v-icon large>mdi-telegram</v-icon>
          </v-btn>
          <v-btn class="btn-social" icon>
            <v-icon large>mdi-vk</v-icon>
          </v-btn>
          <v-btn class="btn-social" icon>
            <v-icon large>mdi-instagram</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.app-footer {
  position: relative;
}
.copyrigth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
}
.socials {
  margin-left: auto;
}
.btn-social {
  margin-left: 1rem;
}
</style>
