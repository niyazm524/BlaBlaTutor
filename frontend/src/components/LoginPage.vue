<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="rounded-card">
            <v-toolbar dark flat color="#00b8f4">
              <v-toolbar-title>Авторизация</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="login" label="Логин" type="text"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль"
                              type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-flex xs12>
                <v-btn class="button-style" color="#63d3f8" dark round large>Войти</v-btn>
              </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: "LoginPage"
  }
</script>

<style scoped>
  .rounded-card {
    border-radius: 25px;
  }
  .button-style {
    width: 200px;
  }
</style>
