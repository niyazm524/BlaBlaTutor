<template>
  <app-header>
    <v-container>
      <v-layout align-center justify-center column class="text-xs-center">
        <v-flex xs12 sm4 md3>
          <v-flex>
            <logo></logo>
          </v-flex>
          <v-flex class="text-xs-center">
            <span class="project-description" v-text="$projectDescription"></span>
          </v-flex>
          <v-flex>
            <div class="btns">
              <v-layout column justify-center>
                <v-btn color="#63d3f8" dark round to="/login">Войти</v-btn>
                <v-btn color="#63d3f8" dark round to="/signup">Зарегистрироваться</v-btn>
              </v-layout>
            </div>
          </v-flex>

        </v-flex>
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
  .btns {
    margin: 30px 0;
  }

  .project-description {
    max-width: 320px;
  }
</style>
