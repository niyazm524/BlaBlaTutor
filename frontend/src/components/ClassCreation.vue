<template>
  <v-layout class="page_body" wrap fluid>
    <app-header>
      <v-form>
        <v-layout class="page_body" wrap fluid fill-height>
          <v-layout style="background-color: white" fluid>
            <v-flex xs10 offset-xs1 style="margin-top: 3vh">
              <input placeholder="Введите тему" style="font-size: 40px; margin: 20px auto; width: 82vw" class="text-field-style">
            </v-flex>
          </v-layout>
          <v-flex style="border: 2px solid #ebebeb; background-color: white" xs12>
            <v-layout>
              <v-flex xs10 md3 offset-xs1 offset-md1>
                <v-layout row align-center>
                  <p class="text_style status-bar-text">Минимальное количество участников:</p>
                  <input type="text" placeholder="-" style="height: 35px; width: 35px; font-size: 24px;" class="text-field-style">
                </v-layout>
              </v-flex>

            </v-layout>
          </v-flex>
          <v-flex xs12 offset-xs1>
            <p class="text_style">Описание:</p>
          </v-flex>
          <v-flex xs10 offset-xs1>
            <textarea placeholder="-  " style="width: 82vw; background-color: white" class="text-field-style"></textarea>
          </v-flex>
          <v-flex xs12>
            <v-layout wrap>
              <v-flex xs10 md4 offset-xs1>
                <v-layout column>
                  <v-flex xs12>
                    <p class="text_style">Место:</p>
                  </v-flex>
                  <v-flex xs12>
                    <input type="text" placeholder="-" class="text-field-style" style="height: 40px; width: 100%">
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs4 md2 offset-xs1>
                <v-layout column>
                  <v-flex xs12>
                    <p class="text_style">Дата:</p>
                  </v-flex>
                  <v-flex class=" text-xs-center" xs12>
                    <input type="text" placeholder="-" class="text-field-style" style="height: 40px; width: 100%">
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs4 md2 offset-xs2 offset-md1>
                <v-layout column>
                  <v-flex xs12>
                    <p class="text_style">Время:</p>
                  </v-flex>
                  <v-flex class="text-xs-center" xs12>
                    <input type="text" placeholder="-" class="text-field-style" style="height: 40px; width: 100%">
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-layout wrap>
              <v-flex xs12 offset-xs1>
                <p class="text_style">Цена:</p>
              </v-flex>
              <v-flex xs10 md2 offset-xs1 >
                <input type="text" placeholder="-" class="text-field-style  cost" style="height: 60px; width: 100%">
              </v-flex>
              <v-flex xs10 md3 offset-xs1>
                <v-radio-group row>
                  <v-layout>
                    <v-flex xs4 offset-xs1>
                      <v-radio label="Участник" value="radio-1"></v-radio>
                    </v-flex>
                    <v-flex xs4 offset-xs3>
                      <v-radio label="Тьютор" value="radio-2"></v-radio>
                    </v-flex>
                  </v-layout>
                </v-radio-group>
              </v-flex>
              <v-flex xs10 md3 offset-xs1>
                <v-btn dark flat class="main-btn">Создать</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-form>

    </app-header>
    <v-layout justify-center wrap align-end class="main-btn-container">

    </v-layout>
  </v-layout>
</template>

<script>
  import AppHeader from "@/components/AppHeader";

  export default {
    name: "ClassCreation",
    components: {AppHeader},
    data: {
      description: 'sdakfljsadlkfjlaskdjfklsdajlfsdafsadf'
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

  .text-field-style {
    border: 2px solid #ebebeb;
    background-color: white;
  }
</style>
