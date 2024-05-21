<template>
  <div>
    <InputText aria-placeholder="test" v-model="props.value" />
  </div>
</template>

<script setup>
const props = defineProps(['value'])

</script>

<style scoped></style>