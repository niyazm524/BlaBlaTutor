<template>
  <app-header>
    <v-container>
      <v-flex lg8 offset-lg2>
        <v-form class="new-class-form">
          <v-layout>
            <v-flex>
              <input v-model="newClass.title" placeholder="Введите тему" class="title-field">
            </v-flex>
          </v-layout>
          <v-divider></v-divider>

          <v-layout row align-center class="mt-3">
            <div>Минимальное количество участников:</div>
            <input type="text" placeholder="-" style="height: 35px; width: 35px; font-size: 24px;"
                   class="title-field ml-3">
          </v-layout>

          <v-flex xs12>
            <p class="text_style">Описание:</p>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              v-model="newClass.description"
              flat
              placeholder="-  "
              box
              solo
              background-color="white">
            </v-textarea>
          </v-flex>

          <v-layout>
            <v-flex xs12 lg4>
              <v-text-field
                v-model="newClass.place"
                label="Место"
                hide-details
                flat>
              </v-text-field>
            </v-flex>
            <v-flex xs12 lg3 offset-lg1>
              <v-menu
                ref="dateMenu"
                v-model="dateMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="date"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Дата"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date"
                               no-title scrollable
                               :first-day-of-week="1"
                               locale="ru-ru">
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dateMenu = false">Отмена</v-btn>
                  <v-btn flat color="primary" @click="$refs.dateMenu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12 lg3 offset-lg1>
              <v-menu
                ref="timeMenu"
                v-model="timeMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="time"
                    label="Время"
                    prepend-icon="access_time"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="timeMenu"
                  v-model="time"
                  full-width
                  format="24hr"
                  @click:minute="$refs.timeMenu.save(time)"
                ></v-time-picker>
              </v-menu>
            </v-flex>
          </v-layout>
          <v-text-field
            v-model="newClass.payment"
            outline
            label="Цена">
          </v-text-field>
          <v-flex>
            <v-radio-group row v-model="role">
              <v-radio label="Участник" :value="0"></v-radio>
              <v-radio label="Тьютор" :value="1"></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex xs10 md3 offset-xs1 offset-md0>
            <v-btn dark flat :loading="loading" :disabled="!fieldsCorrect" @click="create" class="main-btn">Создать
            </v-btn>
          </v-flex>
        </v-form>
      </v-flex>
    </v-container>
  </app-header>
</template>

<script>
  import AppHeader from "@/components/AppHeader";

  export default {
    name: "ClassCreation",
    components: {AppHeader},
    data() {
      return {
        newClass: {
          title: null,
          description: null,
          place: null,
          payment: null
        },
        date: null,
        dateMenu: false,
        time: null,
        timeMenu: false,
        role: null,
        loading: false
      }
    },
    computed: {
      fieldsCorrect() {
        return this.newClass.title && this.newClass.description && this.newClass.place && this.date && this.time && this.role != null
      }
    },
    methods: {
      create() {
        if (!this.fieldsCorrect) return;
        this.loading = true;

        let Class = Object.assign({date: this.toDate(this.date, this.time), role: this.role}, this.newClass);
        this.$http.post('/api/groups', Class)
          .then(res => {
            if(!res.data._id) throw Error("class wasn't created");
            setTimeout(() => this.$router.push('/'), 1000);
          })
          .catch(reason => console.error(reason.response.data.err.message || reason))
          .finally(() => this.loading = false)
      },
      toDate(dateStr, timeStr) {
        const [year, month, day] = dateStr.split('-');
        const [hour, minute] = timeStr.split(':');
        return new Date(year, month - 1, day, hour, minute)
      }

    }
  }
</script>

<style scoped>
  .theme {
    font-size: 40px;
    color: #63d3f8;
  }

  .desc {
    border: 2px solid #ebebeb;
    border-radius: 14px;
    background-color: white;
  }


  .page_body {
    background-color: #f0f0f0;
  }

  .text_style {
    margin: 10px auto;
  }

  .cost {
    font-size: 34px;
    color: greenyellow;
  }

  .main-btn {
    background-color: #63d3f8;
    border-radius: 40px;
    margin-bottom: 3vh;
    width: 100%;
  }

  .main-btn-container {
    margin-top: 3vh;
  }

  .status-block {
    height: 14px;
    width: 14px;
    background-color: greenyellow;
  }

  .status-bar-text {
    font-size: 14px;
  }

  .desсription-text {
    margin: 3px 9px;
  }

  .title-field {
    border: 2px solid #ebebeb;
    border-radius: 3px;
    outline: none;
    background-color: white;
    font-size: 40px;
    width: 100%;
    padding: 2px 4px
  }

  .title-field::placeholder {
    color: #aaa;
  }
</style>
