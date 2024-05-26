import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/search-games",
    name: "SearchGames",
    component: () => import("../views/SearchGamesView.vue"),
  },
  {
    path: "/search-location",
    name: "SearchLocation",
    component: () => import("../views/SearchLocationView.vue"),
  },
  {
    path: "/search-pokemon",
    name: "SearchPokemon",
    component: () => import("../views/SearchPokemonView.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
