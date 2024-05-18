<template>
  <div class="flex justify-center gap-3 pt-7">
    <div v-for="city in cities" :key="city.id">
      <Button @click="handleChangeCity(city.name)"
        :class="{ 'text-purple-500 border-purple-300': city.name === activeCity }" class="px-3 py-2 border rounded-lg">
        {{ city.name }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const activeCity = ref('New York');
const cities = ref([
  {
    id: 'New York',
    name: 'New York'
  },
  {
    id: 'Los Angeles',
    name: 'Los Angeles'
  },
  {
    id: 'London',
    name: 'London'
  },
  {
    id: 'Rome',
    name: 'Rome'
  },
  {
    id: 'Paris',
    name: 'Paris'
  },
  {
    id: 'Istanbul',
    name: 'Istanbul'
  },
  {
    id: 'Madrid',
    name: 'Madrid'
  },
])

const handleChangeCity = (newCity) => {
  router.push({ name: 'Home', query: { userName: newCity } })
  activeCity.value = newCity
}

</script>

<style scoped></style>