<template>
  <div class="flex flex-col gap-2 p-3 border rounded-lg w-[20rem]">
    <h1 class="mx-auto">{{ item.name }}</h1>
    <a :href="item.url" class="w-full">
      <Button severity="info" class="w-full" label="Link">
      </Button>
    </a>
  </div>
</template>

<script setup>
const { item } = defineProps(['item'])

</script>

<style scoped></style>