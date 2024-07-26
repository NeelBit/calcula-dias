import './assets/main.css';

/* icons */
import {
    OhVueIcon,
    addIcons
} from "oh-vue-icons";

import {
    RiDeleteBinFill,
    CoCalculator,
    FcCalculator,
    CoCalendarCheck, // item menu calendario
    LaCloudSunRainSolid, // item menu pronostico
    PxCalendarToday, // item menu calcula día
    BiCalendar2Week, // item menu calcula fechas
    BiCalendarHeart, // item menu calcula edad
    BiCalendar2X, // item menu calcula feriados
} from "oh-vue-icons/icons";

addIcons(RiDeleteBinFill, CoCalculator, FcCalculator, CoCalendarCheck, LaCloudSunRainSolid, PxCalendarToday, BiCalendar2Week, BiCalendarHeart, BiCalendar2X);

import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'
import App from './App.vue';

const app = createApp(App);
/* , {
    component: {
        CalendarMonth,
        CalendarDate
    },
    compilerOptions: {
        isCustomElement: tag => tag.startsWith('calendar-')
    }
} */

app.component("v-icon", OhVueIcon);

app.use(createPinia());

app.mount('#app');