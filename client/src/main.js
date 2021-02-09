import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionAPI from "@vue/composition-api";
import axios from "axios";
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (storedUser) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedUser.token}`;
      sessionStorage.setItem("user", JSON.stringify(storedUser));
    }
  },
  render: h => h(App)
}).$mount('#app')
