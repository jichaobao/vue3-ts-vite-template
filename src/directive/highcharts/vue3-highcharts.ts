import { defineComponent, h, onMounted, onUnmounted, PropType, ref, Ref, toRefs, watch } from "vue";
import Highcharts, { Chart, Options } from "highcharts";
const vueHighcharts = defineComponent({
        name: "VueHighchart",
        props: {
                type: {
                        type: String as PropType<keyof typeof Highcharts>,
                        defalut: "chart",
                },
                options: {
                        type: Object as PropType<Options>,
                        required: true
                },
                redrawOnUpdate: {
                        type: Boolean,
                        default: true
                },
                oneToOneUpdate: {
                        type: Boolean,
                        default: true
                },
                animateOnUpdate:{
                        type: Boolean,
                        default: true
                }
        },
        setup(props, { emit }) {
                const chartRef = ref(null);
                const chart: Ref<Chart | null> = ref(null);
                const { options } = toRefs(props);
                if (options.value) {
                        watch(options, (newValue) => {
                                if (chart.value !== null) {
                                        chart.value.update(newValue, props.redrawOnUpdate, props.oneToOneUpdate);
                                        emit("updated")
                                }
                        }, {
                                deep: true
                        });
                        onMounted(() => {
                                //!:非空断言运算符
                                console.log( chartRef.value,"dddddddd");
                                chart.value = Highcharts[props.type!](
                                        chartRef.value,
                                        options.value,
                                        () => {
                                                emit("rendered")
                                        }
                                );
                        });
                        onUnmounted(() => {
                                if (chart?.value) {
                                        chart.value.destroy();
                                }
                                emit("destoryed")
                        });

                } else {
                        console.error("请传递chart必须的参数");
                }
                return { chartRef, chart }
        },
        render() {
                return h("div", {
                        class: 'vue-highcharts',
                        ref: 'chartRef'
                })
        }
});
export default vueHighcharts;