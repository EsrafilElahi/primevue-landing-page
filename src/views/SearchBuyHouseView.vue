<template>
  <div>
    search buy house pageeeeeeeeeeee
    <InputSearch v-model="value" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import InputSearch from '../components/InputSearch.vue';
const value = ref('')

console.log('value :', value.value)

watch(() => value, (newVal) => {
  console.log('value watch :', newVal)
});

</script>

<style scoped></style>