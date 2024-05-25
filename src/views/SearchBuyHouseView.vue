<template>
  <div>
    search buy house pageeeeeeeeeeee
    <span>{{ value }}</span>
    <InputSearch v-model:inputValue="value" />

  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import InputSearch from '../components/InputSearch.vue';
const value = ref('')

watch(() => value, (newVal) => {
  console.log('value watch :', newVal)
});

</script>

<style scoped></style>