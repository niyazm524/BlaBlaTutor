<template>
  <div>
    <v-navigation-drawer
      style="background-color: rgb(0, 184, 244)"
      dark
      disable-resize-watcher
      fixed
      v-model="drawer"
      right
      app

    >
      <v-list dense>
        <v-list-tile v-if="$store.state.loggedIn" @click="" to="/profile">
          <v-list-tile-action>
            <v-icon>perm_identity</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Личный кабинет</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="" to="/classList">
          <v-list-tile-action>
            <v-icon>book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Занятия</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>help_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Помощь</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>accessible</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>О нас</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="$store.state.loggedIn" @click="logout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Выйти</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="#00b8f4" dark fixed app>
      <router-link style="text-decoration: none" to="/">
        <img width="48" height="48" src="/static/favicon.svg" alt="logo">
      </router-link>
      <v-toolbar-title>
        <router-link style="text-decoration: none; color: white" to="/">BlaBlaTutor</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="toolbar"></slot>
      <v-btn icon to="/">
        <v-icon>home</v-icon>
      </v-btn>

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <slot></slot>
    </v-content>
  </div>
</template>

<script>
    export default {
        name: "AppHeader",
        data: () => ({
          drawer: false
        }),
        methods: {
          logout() {
            this.$store.dispatch('logout').then(() => {
              this.$router.go(null)
            })
          }
        }
    }
</script>

<style scoped>

</style>
