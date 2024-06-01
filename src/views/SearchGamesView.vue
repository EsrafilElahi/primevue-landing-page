<template>
  <div class="flex flex-col justify-center items-center mt-10 gap-1">
    <span>
      Search Games With Name
    </span>

    <InputSearch v-model:inputValue="value" />

    <div v-if="!pokemonGamesData?.error" class="mt-10">
      <div v-if="pokemonGamesData?.loading">loading...</div>
      <div v-else>
        <div v-if="pokemonGamesData?.data?.region">
          <PokemonItem :item="pokemonGamesData?.data?.region" />
        </div>
      </div>
    </div>
    <div v-else class="text-red-500 text-center mt-10">
      error data fetch: {{ pokemonGamesData?.error?.message }}
    </div>


  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import InputSearch from '../components/InputSearch.vue';
import PokemonItem from '../components/PokemonItem.vue';
import { axiosInstance, useDebounce } from '../utils';

const value = ref('');

const debouncedValue = useDebounce(value, 700);

const pokemonGamesData = reactive({
  loading: false,
  error: null,
  data: {}
});

console.log('pokemonGamesData :', pokemonGamesData)

const fetchData = async (pokeName) => {
  try {
    pokemonGamesData.loading = true;
    const res = await axiosInstance.get(`https://pokeapi.co/api/v2/pokedex/${pokeName}`);

    pokemonGamesData.loading = false;
    pokemonGamesData.error = null;

    console.log(res)

    pokemonGamesData.data = res.data;
  } catch (error) {
    console.log('error fetching data search games :', error);
    pokemonGamesData.error = error
  }
};

// watch(() => value.value, (newVal) => {
// console.log('value watch :', newVal)
// });

watch(() => pokemonGamesData.data, () => {
  console.log('pokemonGamesData watch :', pokemonGamesData)
})

watch(debouncedValue, (newVal) => {
  // console.log('debounced value watchhhhhh :', newVal);
  if (newVal) {
    fetchData(newVal);
  }
});

</script>

<style scoped></style>