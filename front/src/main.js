import {createApp} from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import vuetify from "@/plugins/vuetify";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
