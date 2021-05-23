<template></template>
<script lang="ts">
import { defineComponent } from "vue";
import { useVuexStore } from "../hooks/useStore";

export default defineComponent({
        setup() {
                const { state,getters } = useVuexStore();
                console.log("vuex数据", state.user.loading)
                console.log("getter",getters['user/isLogin'])
        }
})
</script>