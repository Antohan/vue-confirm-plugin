import Vue from 'vue';
import './plugins/vuetify';
import ConfirmDialog from './plugins/confirm-dialog';
import App from './App.vue';

// import Confirm from './components/confirm-dialog.vue';

Vue.use(ConfirmDialog);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
