<template>
  <app-header>
    <v-container>
      <v-layout align-center justify-center column class="text-xs-center">
        <v-flex xs12 sm4 md3>
          <v-flex>
            <logo></logo>
          </v-flex>
          <v-flex class="description">
            <v-flex class="text-xs-center">
              <span>Краткое описание проекта</span>
            </v-flex>
          </v-flex>
          <div class="btns">
            <v-layout column justify-center>
              <v-btn color="#63d3f8" dark round to="/login">Войти</v-btn>
              <v-btn color="#63d3f8" dark round to="/signup">Зарегистрироваться</v-btn>
            </v-layout>

          </div>
        </v-flex>
        <h1>Интерес к любимому делу</h1>
        <img class="my_img" src="../assets/veryInteresting.jpg">
        <h1>Трудоспособность</h1>
        <img class="my_img" src="../assets/working.jpg">
        <h1>Эстетика</h1>
        <img class="my_img" src="../assets/perfect.jpg">
      </v-layout>
    </v-container>
  </app-header>
</template>

<script>
  import Logo from "@/components/Logo";
  import AppHeader from "@/components/AppHeader";

  export default {
    name: "WelcomePage",
    components: {AppHeader, Logo}
  }
</script>

<style scoped>
  img {
    max-width: 100%;
    width: 686px;
    border: 4px solid #63d3f8;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .btns {
    margin: 30px 0;
  }

  .description {
    margin: 30px 0;
  }

  .my_img {
    margin: 30px 0;
  }
</style>
