<template>
  <div>
    <InputText aria-placeholder="test" v-model="model" />
  </div>
</template>

<script setup>
import { watch } from "vue";
const model = defineModel()

const props = defineProps(['value'])
console.log('model :', model)

watch(() => model, (newVal) => {
  console.log('value watch 2 :', model)
});

</script>

<style scoped></style>