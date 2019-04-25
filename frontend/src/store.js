import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    setLoggedIn(state, token) {
      localStorage.setItem('auth_token', token);
      state.loggedIn = true;
      console.log("set header", token);
      Vue.axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    }
  },
  getters: { },
  actions: {
    register(context, fields) {
      return Vue.axios.post('/api/users', fields)
        .then(result => {
          if('auth_token' in result.data) {
            context.commit('setLoggedIn', result.data.auth_token)
          }
        })
    },
    login(context, {username, password}) {
      return Vue.axios.post('/api/login', {
        username,
        password
      })
        .then(result => {
          console.log(result.data);
          if('auth_token' in result.data) {
            console.log(result.data.auth_token);
            context.commit('setLoggedIn', result.data.auth_token)
          }
        })
    },
    logout(context) {
      return new Promise(resolve => {
        localStorage.removeItem('auth_token');
        context.state.loggedIn = false;
        delete Vue.axios.defaults.headers.common['Authorization'];
        resolve();
      });
    }
  }
});

const auth_token = localStorage.getItem('auth_token');
if(auth_token) {
  console.log("setting header");
  store.state.loggedIn = true;
  Vue.axios.defaults.headers.common['Authorization'] = "Bearer " + auth_token;
}

export default store;
