<template>
  <app-header>
    <v-container fluid fill-height>
      <v-layout wrap style="border: 3px solid #63d3f8; border-radius: 30px">
        <v-flex xs12 sm4 md4 lg4 align-center style="margin: 20px">
          <v-layout justify-center>
            <v-avatar size="200px">
              <img style="max-width: 100%; height: auto; width: 100%" src="../assets/sadface.jpg" alt="avatar">
            </v-avatar>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6 md6 lg6 style="margin: 20px">
          <v-layout justify-center column class="text-xs-center text-sm-left" fill-height>
            <p>Имя: {{user.firstName}}</p>
            <p>Фамилия: {{user.lastName}}</p>
            <p>Универ: {{user.university}}</p>
            <p>Курс: {{user.course}}</p>
            <p>Почта: {{user.mail}}</p>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </app-header>
</template>

<script>
  import AppHeader from "@/components/AppHeader";

  export default {
    name: "Profile",
    components: {AppHeader},
    data() {
      return {
        user: {}
      }
    },
    mounted() {
      this.$http.get('/api/users/self')
        .then(res => {
          this.user = res.data
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
</script>

<style scoped>

</style>
