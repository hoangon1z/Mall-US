import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n';
// import messages from './locales'; // Import các file ngôn ngữ
Vue.config.productionTip = false

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'vi', // Ngôn ngữ mặc định
  fallbackLocale: 'en', // Ngôn ngữ dự phòng

});

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
