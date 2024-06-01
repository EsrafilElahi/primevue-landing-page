<template>
  <div>
    <InputText placeholder="like: kanto ir id: 2" v-model="model" />
  </div>
</template>

<script setup>
import { watch } from "vue";
const model = defineModel('inputValue');

watch(() => model.value, (newVal) => {
  // console.log('value watch 2 :', model)
});

</script>

<style scoped></style>