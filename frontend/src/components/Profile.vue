<template>
  <app-header>
    <v-container fluid fill-height>
      <v-layout wrap style="border: 3px solid #63d3f8; border-radius: 30px">
        <v-flex xs12 sm4 md4 lg4 align-center style="margin: 20px">
          <v-layout justify-center>
            <v-avatar size="200px">
              <img style="max-width: 100%; height: auto; width: 100%" src="../assets/sadface.jpg">
            </v-avatar>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6 md6 lg6 style="margin: 20px">
          <v-layout justify-center column class="text-xs-center text-sm-left" fill-height>
            <p>Имя: Эльдар</p>
            <p>Фамилия: Сакаев</p>
            <p>Универ: ВШ ИТИС</p>
            <p>Курс: 6</p>
            <p>Почта: sakaev2901@gmail.com</p>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </app-header>
</template>

<script>
  import AppHeader from "@/components/AppHeader";

  export default {
    name: "Profile",
    components: {AppHeader}
  }
</script>

<style scoped>

</style>
