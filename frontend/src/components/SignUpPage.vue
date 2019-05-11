<template>
  <app-header>
    <v-container fill-height>

        <v-layout row>

          <v-flex sm6 md5 lg6 class="hidden-xs-only" >
            <v-container justify-center>

            <v-layout column wrap>
              <v-layout justify-center>
                  <logo></logo>
              </v-layout>
            <v-flex class="text-xs-center">
              <span class="project-description" v-text="$projectDescription"></span>
            </v-flex>
          </v-layout>
            </v-container>

          </v-flex>
          <v-flex xs12 sm7 lg5 md6 offset-lg1 offset-md1 offset-sm1>
            <v-card class="elevation-12" style="border-radius: 14px" height="100%">
              <v-toolbar dark color="#00b8f4">
                <v-toolbar-title>Регистрация</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-alert type="error" transition="scale-transition" :value="isAlertShown">{{alertMessage}}</v-alert>
                <v-form lazy-validation ref="form">
                  <v-layout wrap>
                    <v-flex xs12 sm5 md5 lg5  >
                      <v-text-field v-model="firstName" :rules="[rules.required]" label="Имя"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md5 lg5 offset-lg2 offset-md2 offset-sm2  >
                      <v-text-field v-model="lastName" :rules="[rules.required]" label="Фамилия" ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-text-field v-model="username" :rules="[rules.required, rules.usernameMatch]" label="Имя пользователя"></v-text-field>
                  <v-text-field v-model="mail" :rules="[rules.required, rules.emailMatch]" label="Эл. почта"></v-text-field>
                  <v-layout row wrap>
                    <v-flex xs12 sm5 md5 lg5>
                      <v-select v-model="univer" :rules="[rules.required]" :items="univers" label="Университет"
                               ></v-select>
                    </v-flex>
                    <v-flex xs12 sm5 md5 lg5 offset-lg2 offset-md2 offset-sm2>
                      <v-select v-model="course" :rules="[rules.required]" :items="courses" label="Курс"></v-select>

                    </v-flex>

                  </v-layout>
                  <v-text-field
                    :append-icon="showIcon ? 'visibility_off' : 'visibility'"
                    id="password" v-model="pass" :rules="[rules.required, rules.min]"
                    label="Пароль"
                    :type="showIcon ? 'text' : 'password'"
                    @click:append="showIcon = !showIcon">
                  </v-text-field>
                  <v-text-field id="confPass" v-model="confirmedPass" :rules="[rules.required]" label="Подтвердите пароль"
                                type="password" :error-messages="passMatchError()" ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="my_btn" dark color="#00b8f4" :loading="isRequestInProcess" @click="register">Ок</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </app-header>
</template>

<script>
  import AppHeader from "@/components/AppHeader";
  import Logo from "@/components/Logo";

  export default {
    name: "SignUpPage",
    components: {Logo, AppHeader},
    data: () => ({
      showIcon: false,
      isAlertShown: false,
      alertMessage: '',
      isRequestInProcess: false,
      firstName: '',
      lastName: '',
      username: '',
      mail: '',
      pass: '',
      confirmedPass:'',
      univer: null,
      univers: [
        'ВШ ИТИС',
        'ИВМиИТ'
      ],
      rules: {
        required: v => !!v || 'Заполните поле',
        min: v => v.length > 5 || 'Введите пароль длиной не менеее 6 символов',
        emailMatch: v => /.+@.+/.test(v) || 'Введите действительную эл. почту',
        usernameMatch: v => /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,16}$/igm.test(v) || 'Имя пользователя должно содержать только латинские буквы, цифры, _ и точку'
      },
      course: null,
      courses: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6'
      ],
    }),
      methods: {
        passMatchError () {
          return (this.pass === this.confirmedPass) ? '' : 'Пароли не совпадают'
        },
        register() {
          if(!this.$refs.form.validate()) return;
          this.isRequestInProcess = true;
          this.isAlertShown = false;
          this.$store.dispatch('register', {
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            mail: this.mail,
            university: this.univer,
            course: this.course,
            password: this.pass
          })
            .then(() => {
              setTimeout(() => this.$router.push('/'), 500);
            })
            .catch(err => {
              this.alertMessage = err.response.data.message;
              this.isAlertShown = true;
            })
            .finally(() => this.isRequestInProcess = false);
        }
      },
  }
</script>

<style scoped>
  .my_btn {
    border-radius: 40px;
  }
</style>
