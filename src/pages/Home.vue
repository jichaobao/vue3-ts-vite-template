<template>
        <img alt="Vue logo" src="../assets/logo.png" />
        <UseStore />
        <Suspense>
                <template #default>
                        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
                </template>
                <template #fallback>
                        <div>loading..............</div>
                </template>
        </Suspense>
</template>
      
<script lang="ts">
import { defineComponent } from 'vue';
//异步组件要用Suspense包裹
import HelloWorld from '../components/HelloWorld.vue'
import UseStore from "../components/UseStore.vue";
export default defineComponent({
        name: 'App',
        components: {
                HelloWorld,
                UseStore
        }
})
</script>
      
      <style>
#app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
}
</style>
      