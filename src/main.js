// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "../node_modules/bootstrap/js/dist/index.js"
import ElementUI from 'element-ui';
import router from './router/index.js';
import $ from 'jquery';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "./store/store.js"
import vs from "vue-resource"

Vue.use(vs);
Vue.use(ElementUI);

//Vue.use(bs);
Vue.http.options.emulateJSON = true;
Vue.config.productionTip = false
Vue.http.options.xhr = {
    withCredentials: true
  },

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: {
      App
    },
    template: '<App/>'
  })
