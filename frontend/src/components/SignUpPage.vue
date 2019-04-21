<template>
  <app-header>
    <v-container fill-height>

        <v-layout row>

          <v-flex sm6 md5 lg6 class="hidden-xs-only" >
            <v-container justify-center>

            <v-layout column wrap>
              <v-layout justify-center>
                  <img  src="../assets/logo.png">
              </v-layout>
            <v-flex class="text-xs-center">
              <h4 >Vuetify имеет 12-точечную систему сеток. Построенная с использованием flex-box , сетка используется для
                компоновки содержимого приложения.</h4>
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
                <v-form fluid>
                  <v-layout wrap>
                    <v-flex xs12 sm5 md5 lg5  >
                      <v-text-field v-model="firstName" :rules="nameRule" label="Имя" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md5 lg5 offset-lg2 offset-md2 offset-sm2  >
                      <v-text-field v-model="lastName" :rules="nameRule" label="Фамилия" required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-text-field v-model="mail" :rules="mailRules" label="Эл. почта" required></v-text-field>
                  <v-layout row wrap>
                    <v-flex xs12 sm5 md5 lg5>
                      <v-select v-model="univer" :rules="univerRule" :items="univers" label="Университет"
                                required></v-select>
                    </v-flex>
                    <v-flex xs12 sm5 md5 lg5 offset-lg2 offset-md2 offset-sm2>
                      <v-select v-model="course" :rules="courseRule" :items="courses" label="Курс" required></v-select>

                    </v-flex>

                  </v-layout>
                  <v-text-field id="password" v-model="pass" :rules="passRule" label="Пароль" type="password" required></v-text-field>
                  <v-text-field id="confPass" v-model="confirmedPass" :rules="confirmedPassRule" label="Подтвердите пароль"
                                type="password" :error-messages="passMatchError()" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="my_btn" dark color="#00b8f4" @click="first">Ок</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </app-header>
</template>

<script>
  import AppHeader from "@/components/AppHeader";

  export default {
    name: "SignUpPage",
    components: {AppHeader},
    data: () => ({
      valid: false,
      firstName: '',
      lastName: '',
      mail: '',
      pass: '',
      confirmedPass:'',
      nameRule: [
        v => !!v || ''
      ],
      mailRules: [
        v => !!v || '',
        v => /.+@.+/.test(v) || ''
      ],
      univer: null,
      univers: [
        'ВШ ИТИС',
        'ИВМиИТ'
      ],
      univerRule: [
        v => !!v || ''
      ],
      passRule: [
        v => !!v || '',
        v => v.length > 5 || ''
      ],
      confirmedPassRule: [
        v => !!v || '',
      ],
      courseRule: [
        v => !!v || ''
      ],
      course: null,
      courses: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6'
      ]
    }),
      methods: {
        passMatchError () {
          return (this.pass === this.confirmedPass) ? '' : ' '
        },

      },
  }
</script>

<style scoped>
  .my_btn {
    border-radius: 40px;
  }
</style>
