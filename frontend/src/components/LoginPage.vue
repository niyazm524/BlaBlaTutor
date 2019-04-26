<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="rounded-card" @keyup.enter="login">
            <v-toolbar dark flat color="#00b8f4">
              <v-toolbar-title>Авторизация</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="login" label="Логин" type="text" v-model="username"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" v-model="password"
                              type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-flex xs12>
                <v-btn class="button-style" color="#63d3f8" dark round large @click="login">Войти</v-btn>
              </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar v-model="isSnackbarShowed" :timeout="4000" color="error">Ошибка: {{errorMessage}}</v-snackbar>
  </v-content>
</template>

<script>
  export default {
    name: "LoginPage",
    data() {
      return {
        username: null,
        password: null,
        isSnackbarShowed: null,
        errorMessage: ''
      }
    },
    methods: {
      login() {
        this.$store.dispatch('login', {username: this.username, password: this.password})
          .then(() => {
            this.$router.replace('/');
          })
          .catch((err) => {
            console.dir(err.response);
            this.errorMessage = err.response.data.message;
            this.isSnackbarShowed = true;
          })
      }
    }
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
