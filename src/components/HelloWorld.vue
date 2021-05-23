<template>
  <h1>{{ msg }}</h1>
  <a-button type="primary">Primary</a-button>
  <ul>
    <li v-for="product in products" :key="product.id">{{ product.title }}</li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import useProducts from "@/models/products";
const { products } = await useProducts();
defineProps({
  msg: String
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
