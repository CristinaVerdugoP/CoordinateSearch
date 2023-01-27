import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import "quasar/src/css/index.sass";

import App from "./UI/App.vue";
import router from "./router";

import "./assets/main.css";
import "@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css";
import "@quasar/extras/material-icons/material-icons.css";

const myApp = createApp(App);

myApp.use(createPinia());
myApp.use(router);

myApp.use(Quasar, {
  plugins: {},
});

myApp.mount("#app");
