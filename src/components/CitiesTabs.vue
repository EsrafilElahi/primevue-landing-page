<template>
  <div class="flex justify-center gap-3">
    <Button @click="handleChangeCity('New York')"
      :class="{ 'text-purple-500 border-purple-300': activeCity === 'New York' }" class="px-3 py-2 border rounded-lg">
      New York
    </Button>

    <Button @click="handleChangeCity('Los Angeles')"
      :class="{ 'text-purple-500 border-purple-300': activeCity === 'Los Angeles' }" class="px-3 py-2 border rounded-lg">
      Los Angeles
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeCity = ref('New York');

console.log('activeCity :', activeCity.value)

const handleChangeCity = (newCity) => {
  return activeCity.value = newCity
}

</script>

<style scoped></style>