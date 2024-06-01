<template>
  <div>
    <InputText :placeholder="placeholder" v-model="model" />
  </div>
</template>

<script setup>
import { watch } from "vue";
const model = defineModel('inputValue');
const { placeholder } = defineProps(['placeholder'])

watch(() => model.value, (newVal) => {
  // console.log('value watch 2 :', model)
});

</script>

<style scoped></style>