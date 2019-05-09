<template>
  <app-header>
    <v-container>
      <h1 class="light-blue--text display-3">Актуальные занятия</h1>
      <group-brief-view v-for="(group, key) in groups" :key="key" v-bind="group"/>
    </v-container>
  </app-header>
</template>

<script>
  import AppHeader from "@/components/AppHeader";
  import GroupBriefView from "@/components/GroupBriefView";

  export default {
    name: "MainPage",
    components: {GroupBriefView, AppHeader},
    data() {
      return {
        groups: []
      }
    },
    mounted() {
      this.$http.get('/api/groups')
        .then(res => {
          this.groups = res.data;
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
</script>

<style scoped>

</style>
