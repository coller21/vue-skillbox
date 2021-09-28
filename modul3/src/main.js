import Vue from 'vue';
import App from './App.vue';
import { message1, message2 } from './message';
import Msg from './func';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// alert(message1);
// alert(message2);
Msg(message1);
Msg(message2);
