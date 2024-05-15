import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";

import Lara from "./presets/lara";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./style.css";

const app = createApp(App);

app.use(PrimeVue, {
  ripple: true,
  // unstyled: true,
  // inputStyle: "filled",
  zIndex: {
    modal: 1100, //dialog, sidebar
    overlay: 1000, //dropdown, overlaypanel
    menu: 1000, //overlay menus
    tooltip: 1100, //tooltip
  },
  pt: Lara,
  // pt: {
  //   inputtext: {
  //     root: "bg-purple-50 text-surface-900 ...",
  //   },
  //   button: {
  //     root: "bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2",
  //     label: "text-white font-bold text-md", // OR { class: 'text-white font-bold text-xl' }
  //     icon: "text-white text-2xl",
  //     severity: "!text-[#d0c] text-black",
  //   },
  // },
});

app.component("Button", Button);
app.component("InputText", InputText);
app.component("Dialog", Dialog);

app.mount("#app");
