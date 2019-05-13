<template>
  <app-header>
    <v-container>
      <v-flex lg10 offset-lg1>
        <h1 style="color: dodgerblue" class="display-3">{{group.title}}</h1>
        <v-flex xs12>
          <div class="text_style status-bar-text headline">Количество участников: {{group.members &&
            group.members.length}}/12
          </div>
        </v-flex>

        <v-flex xs12>
          <p class="text_style">Описание:</p>
        </v-flex>
        <v-flex xs12 class="desc">
          <p class="description-text">{{group.description}}</p>
        </v-flex>
        <v-layout wrap justify-space-between>
          <v-flex xs12 md6>
            <v-flex>
              <p class="text_style">Место:</p>
            </v-flex>
            <v-flex class="desc text-xs-center">
              <p class="text_style">{{group.place}}</p>
            </v-flex>
          </v-flex>
          <v-flex xs5 md2>
            <v-flex>
              <p class="text_style">Дата:</p>
            </v-flex>
            <v-flex class="desc text-xs-center">
              <p class="text_style">{{group.date && group.date.toLocaleDateString()}}</p>
            </v-flex>
          </v-flex>
          <v-flex xs5 offset-xs1 md2 offset-md0>
            <v-flex>
              <p class="text_style">Время:</p>
            </v-flex>
            <v-flex class="desc text-xs-center">
              <p class="text_style">{{formattedTime}}</p>
            </v-flex>
          </v-flex>
        </v-layout>
        <v-flex xs12>
          <v-layout wrap>
            <v-flex xs12>
              <p class="text_style">Цена:</p>
            </v-flex>
            <v-flex xs12 class="desc text-xs-center">
              <p class="text_style cost">{{group.payment || "Не указано"}}</p>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-layout justify-center wrap align-end class="main-btn-container">
          <v-btn class="main-btn" flat dark>
            Присоедениться как тьютор
          </v-btn>
          <v-btn class="main-btn" dark flat>
            Присоедениться как участник
          </v-btn>
        </v-layout>
      </v-flex>
    </v-container>
  </app-header>
</template>

<script>
  import AppHeader from "@/components/AppHeader";

  export default {
    name: "Class",
    components: {AppHeader},
    props: {
      id: String
    },
    data() {
      return {
        group: {}
      }
    },
    computed: {
      formattedTime() {
        if (!this.group.date) return "Неизвестно";
        const hour = this.group.date.getHours();
        const minute = this.group.date.getMinutes();
        return (hour > 9 ? hour : '0' + hour) + ':' + (minute > 9 ? minute : '0' + minute)
      }
    },
    beforeMount() {
      this.$http.get(`/api/groups/${this.id}`)
        .then(res => {
          if ('date' in res.data === false) throw Error("network error");
          this.group = res.data;
          this.$set(this.group, 'date', new Date(this.group.date))
        })
        .catch(err => {
          console.error(err)
        })
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
    margin-bottom: 3vh
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

  .description-text {
    margin: 3px 9px;
  }
</style>
