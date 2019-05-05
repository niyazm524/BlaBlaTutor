<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="rounded-card" @keyup.enter="login">
            <v-toolbar dark color="#00b8f4">
              <v-toolbar-title>
                <v-btn icon to="/">
                  <v-icon>arrow_back</v-icon>
                </v-btn>
                Авторизация
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="login" label="Логин" type="text"
                              v-model="username"></v-text-field>
                <v-text-field :append-icon="showIcon ? 'visibility_off' : 'visibility'" id="password"
                              prepend-icon="lock" name="password" label="Пароль" v-model="password"
                              :type="showIcon ? 'text' : 'password'"
                              @click:append="showIcon = !showIcon"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-flex class="text-xs-center">
                <div class="mb-2">
                  <v-btn color="#63d3f8" dark round large @click="login">Войти</v-btn>
                </div>
              </v-flex>
            </v-card-actions>
          </v-card>
          <v-flex class="link">
            <v-flex class="text-xs-center">
              <span style="font-size:15px">Еще не с нами?
                <router-link to="/signup" class="navigation-style">Зарегистрироваться</router-link>
              </span>
            </v-flex>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar v-model="isSnackbarShowed" :timeout="4000" color="error">
      Ошибка: Вы неверно ввели пароль или логин.<br/> Перепроверьте данные.{{errorMessage}}
    </v-snackbar>
  </v-content>
</template>

<script>
  export default {
    name: "LoginPage",
    data() {
      return {
        showIcon: false,
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

  .navigation-style {
    text-decoration: none;
    color: #00b8f4;
  }

  .link {
    margin: 20px;
  }
</style>
