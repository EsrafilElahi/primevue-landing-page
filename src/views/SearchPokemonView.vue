<template>
  <div class="flex flex-col justify-center items-center mt-10 gap-1">
    <span>
      Search Pokemon With Name
    </span>

    <InputSearch v-model:inputValue="value" placeholder="like: speed-boost or id: 3" />

    <div v-if="!pokemonPokemonData?.error" class="mt-10">
      <div v-if="pokemonPokemonData?.loading">loading...</div>
      <div v-else>
        <div v-if="pokemonPokemonData?.data?.id">
          <PokemonItem :item="{ url: pokemonPokemonData?.data?.generation?.url, name: pokemonPokemonData?.data?.name }" />
        </div>
      </div>
    </div>
    <div v-else class="text-red-500 text-center mt-10">
      error data fetch: {{ pokemonPokemonData?.error?.message }}
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

const pokemonPokemonData = reactive({
  loading: false,
  error: null,
  data: {}
});

const fetchData = async (pokeName) => {
  try {
    pokemonPokemonData.loading = true;
    const res = await axiosInstance.get(`https://pokeapi.co/api/v2/ability/${pokeName}`);

    pokemonPokemonData.loading = false;
    pokemonPokemonData.error = null;

    pokemonPokemonData.data = res.data;
  } catch (error) {
    console.log('error fetching data search games :', error);
    pokemonPokemonData.error = error
  }
};

// watch(() => value.value, (newVal) => {
// console.log('value watch :', newVal)
// });

watch(() => pokemonPokemonData.data, () => {
  // console.log('pokemonPokemonData watch :', pokemonPokemonData)
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
  if(debouncedValue.value) {
    fetchData(debouncedValue.value);
  }
})

</script>

<style scoped></style>