<template>
  <v-flex xs10 md5 class="card" @click="" to="/class">
    <a style="text-decoration: none" href="/class">
      <v-layout column class="text-xs-center">
        <v-flex class="theme-style" >
          <p>Контрольная работа</p>
        </v-flex>
        <v-flex>
          <p class="desсription-style">Описание описание описание описание описание описание описание описание описание описание
            описание описание описание описание описание описание описание описание описание
            писание описание описание описание описание описание описание описание описание описание
            описание описание описание описание описание описание описание описание описание
          </p>
        </v-flex>
      </v-layout>
    </a>
  </v-flex>
</template>

<script>
    export default {
        name: "ClassCard"
    }
</script>

<style scoped>
  .card {
    border: 2px solid #63d3f8;
    border-radius: 14px;
    margin: 20px auto;
    color: black;
    transition: background-color .3s linear;
  }

  .card:hover .theme-style{
    border-bottom: 2px solid white;
    color: white;
  }

  .card:hover {
    background-color: #63d3f8;
    color: white;
  }

  .card :hover .desсription-style{
    color: white;
  }

  .theme-style {
    border-bottom: 2px solid #63d3f8;
    color: black;
  }

  .desсription-style {
    color: black;
  }

</style>
