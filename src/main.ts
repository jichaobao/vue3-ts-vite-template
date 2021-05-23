import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import store from "./store";
import router from "./router";
import vueHighcharts from './directive/highcharts';

const app = createApp(App);

app.use(Antd);
app.use(vueHighcharts);
app.use(store);
app.use(router);
app.mount('#app');
