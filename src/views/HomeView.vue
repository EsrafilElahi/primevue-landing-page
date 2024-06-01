<template>
  <div>

    <div class="mt-5">
      <div v-if="!pokemonData.error" class="flex flex-wrap justify-center items-center gap-5 ">
        <div v-if="pokemonData.loading" class="text-center mt-10">loading...</div>
        <div class="text-center mt-10" v-for="poke in pokemonData.data" :key="poke.name">
          <PokemonItem :item=poke />
        </div>
      </div>
      <div v-else class="text-red-500 text-center mt-10"> error data fetch : {{ pokemonData.error.message }}</div>
    </div>
  </div>
</template>

<script setup>
import { axiosInstance } from '../utils';
import { useRoute } from 'vue-router';
import PokemonItem from '../components/PokemonItem.vue';
import { onMounted, reactive, watch } from 'vue';
const route = useRoute();

const pokemonData = reactive({
  loading: false,
  error: null,
  data: []
});

const pagination = reactive({
  limit: 20,
  offset: 0,
  next: null,
  previous: null,
})

console.log('pokemonData :', pokemonData)

const fetchData = async () => {
  try {
    pokemonData.loading = true
    const res = await axiosInstance.get(`/ability/?limit=${pagination.limit}&offset=${pagination.offset}`, {
      // params: {
      //   location: `city:${cityName || 'New York'}`
      // }
    });
    pokemonData.loading = false
    pokemonData.error = null
    pokemonData.data = res.data.results
    pagination.next = res.data.next
    pagination.previous = res.data.previous

  } catch (error) {
    console.log('error fetching data:', error);
    pokemonData.error = error
  }
};

onMounted(() => {
  fetchData();
});

// watch(() => route.query.cityName, (newCityName) => {
//   fetchData(newCityName);
// });

</script>

<style scoped></style>