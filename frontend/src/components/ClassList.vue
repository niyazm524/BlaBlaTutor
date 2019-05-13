<template>
    <app-header>
      <v-container>
        <v-layout wrap>
           <class-card>
           </class-card>
          <class-card>
          </class-card>
          <class-card>
          </class-card>
        </v-layout>
      </v-container>
    </app-header>
</template>

<script>
    import AppHeader from "@/components/AppHeader";
    import ClassCard from "@/components/ClassCard";
    export default {
        name: "ClassList",
      components: {ClassCard, AppHeader}
    }
</script>

<style scoped>

</style>
