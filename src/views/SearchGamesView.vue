<template>
  <div class="flex flex-col justify-center items-center mt-10 gap-1">
    <span>
      Search Games With Name
    </span>

    <InputSearch v-model:inputValue="value" placeholder="like: kanto or id: 2" />

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
import { reactive, ref, watch, watchEffect } from 'vue';
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

const fetchData = async (pokeGame) => {
  try {
    pokemonGamesData.loading = true;
    const res = await axiosInstance.get(`https://pokeapi.co/api/v2/pokedex/${pokeGame}`);

    pokemonGamesData.loading = false;
    pokemonGamesData.error = null;

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
  // console.log('pokemonGamesData watch :', pokemonGamesData)
})

// both of wathes is ok
// watch(debouncedValue, (newVal) => {
//   // console.log('debounced value watchhhhhh :', newVal);
//   if (newVal) {
//     fetchData(newVal);
//   }
// });

watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  if (debouncedValue.value) {
    fetchData(debouncedValue.value);
  }
})

</script>

<style scoped></style>