import { ColSize } from "ant-design-vue/lib/grid/Col";
import { App, Plugin } from "vue";
import vueHighcharts from "./vue3-highcharts";
const install = (app: App) => {
        app.component(vueHighcharts.name, vueHighcharts);
}
vueHighcharts.install = install;
export default (vueHighcharts as unknown) as Plugin;