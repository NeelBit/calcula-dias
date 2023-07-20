import './assets/main.css';

/* icons */
import {
    OhVueIcon,
    addIcons
} from "oh-vue-icons";

import {
    RiDeleteBinFill,
    CoCalculator
} from "oh-vue-icons/icons";

addIcons(RiDeleteBinFill, CoCalculator);

import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'
import App from './App.vue';

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(createPinia());

app.mount('#app');