import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'

Vue.use(Vuetify);
Vue.prototype.$projectDescription = "Систематизация встреч по групповой подготовке к контрольным работам и экзаменам";
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
