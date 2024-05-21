<template>
  <div class="p-3 border rounded-lg w-[20rem]">
    <img :src='props?.item?.photos?.at(0)?.href' alt="test" class="w-full h-full" />
    <div class="mt-3">
      <address>address : tehran, iran</address>
    </div>
    <div class="my-1">href: <a href="www.google.com">www.google.com</a></div>
    <div>
      <span>link : <span>https://google.com</span></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['item'])

</script>

<style scoped></style>