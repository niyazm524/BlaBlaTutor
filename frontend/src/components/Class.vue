<template>
  <v-layout class="page_body" wrap fluid>
    <app-header >
      <v-layout class="page_body"  wrap fluid fill-height>
        <v-layout style="background-color: white" fluid>
          <v-flex xs10 offset-xs1>
            <p class="theme" style="background-color: white">Контрольная работа по математике</p>
          </v-flex>
        </v-layout>
        <v-flex style="border: 2px solid #ebebeb; background-color: white" xs12>
          <v-layout>
            <v-flex xs12 md3 offset-xs1 offset-md1>
              <p class="text_style status-bar-text" >Количество участников: 11/12</p>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 offset-xs1>
          <p class="text_style">Описание:</p>
        </v-flex>
        <v-flex xs10 offset-xs1 class="desc">
          <p class="desсription-text">sdkfjsadlflsadkf jsadklf sajkbgh ksfgkjlsf gjsdfhg kjdhsfg hjfgh f ghfjgh fjg jfgj hfjg jfhgjkfg fdg hdjf gh
            djfgh jsadklf sajkbgh ksfgkjlsf gjsdfhg kjdhsfg hjfgh f ghfjgh fjg jfgj hfjg jfhgjkfg fdg hdjf gh djfgh
            jsadklf sajkbgh ksfgkjlsf gjsdfhg kjdhsfg hjfgh f ghfjgh fjg jfgj hfjg jfhgjkfg fdg hdjf gh djfgh jsadklf
            sajkbgh ksfgkjlsf gjsdfhg kjdhsfg hjfgh f ghfjgh fjg jfgj hfjg jfhgjkfg fdg hdjf gh djfgh jsadklf sajkbgh
            ksfgkjlsf gjsdfhg kjdhsfg hjfgh f ghfjgh fjg jfgj hfjg jfhgjkfg fdg hdjf gh djfgh jsadklf sajkbgh ksfgkjlsf
            gjsdfhg kjdhsfg hjfgh f ghfjgh fjg jfgj hfjg jfhgjkfg fdg hdjf gh djfgh jsadklf sajkbgh ksfgkjlsf gjsdfhg
            kjdhsfg hjfgh f ghfjgh fjg jfgj hfjg jfhgjkfg fdg hdjf gh djfgh </p>
        </v-flex>
        <v-flex xs12>
          <v-layout wrap>
            <v-flex xs10 md4 offset-xs1>
              <v-layout column>
                <v-flex xs12>
                  <p class="text_style">Место:</p>
                </v-flex>
                <v-flex class="desc text-xs-center" xs12>
                  <p class="text_style">ул. Кремлевская 35, 1305</p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs4 md2 offset-xs1>
              <v-layout column>
                <v-flex xs12>
                  <p class="text_style">Дата:</p>
                </v-flex>
                <v-flex class="desc text-xs-center" xs12>
                  <p class="text_style">11.11.11</p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs4 md2 offset-xs2 offset-md1>
              <v-layout column>
                <v-flex xs12>
                  <p class="text_style">Время:</p>
                </v-flex>
                <v-flex class="desc text-xs-center" xs12>
                  <p class="text_style">04:20</p>
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
            <v-flex xs10 md10 offset-xs1 class="desc text-xs-center">
              <p class="text_style cost">500 руб</p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

    </app-header>
    <v-layout justify-center wrap align-end class="main-btn-container">
      <v-btn class="main-btn" flat dark>
        Присоедениться как тьютор
      </v-btn>
      <v-btn class="main-btn" dark flat>
        Присоедениться как участник
      </v-btn>
    </v-layout>
  </v-layout>
</template>

<script>
  import AppHeader from "@/components/AppHeader";

  export default {
    name: "Class",
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

  .desсription-text {
    margin: 3px 9px;
  }
</style>
