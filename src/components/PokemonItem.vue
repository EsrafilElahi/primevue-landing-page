<template>
  <div class="flex flex-col gap-2 p-3 border rounded-lg w-[20rem]">
    <h1>{{ item.name }}</h1>
    <a :href="item.url" class="text-blue-500">link</a>
  </div>
</template>

<script setup>
const { item } = defineProps(['item'])

</script>

<style scoped></style>