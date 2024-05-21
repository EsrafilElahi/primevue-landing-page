<template>
  <div>
    <InputText aria-placeholder="test" v-model="props.value" />
  </div>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps(['value'])

watch(() => props.value, (newVal) => {
  console.log('value watch 2 :', newVal)
});

</script>

<style scoped></style>