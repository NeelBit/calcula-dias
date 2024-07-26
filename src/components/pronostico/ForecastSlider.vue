<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { FreeMode, Pagination } from 'swiper/modules';

const modules = [FreeMode, Pagination];

const locationPermiso = inject('locationPermiso');
const coordenadas = inject('coordenadas');

const apiKey = import.meta.env.VITE_SOME_KEY;
const lang = ref('es');
const endpointForecast = ref(`https://api.openweathermap.org/data/2.5/forecast?lat=${ coordenadas.value.latitud }&lon=${ coordenadas.value.longitud }&units=metric&lang=${lang.value}&appid=${apiKey}`);



/*      *****       Responsively       *****       */

const screenSize = ref({
    width: window.innerWidth,
    height: window.innerHeight
});

const cantSlidesPerView = ref(1);

const updateSlidesPerView = () => {
    if (screenSize.value.width < 480) {
        cantSlidesPerView.value = 1;
    } else if (screenSize.value.width < 720) {
        cantSlidesPerView.value = 2;
    } else {
        cantSlidesPerView.value = 3;
    }
};

const updateScreenSize = () => {
    screenSize.value.width = window.innerWidth;
    screenSize.value.height = window.innerHeight;

    updateSlidesPerView();
};

const forecast = ref([]);
const localidad = ref(null);
const pais = ref(null);
const canFetch = ref(true);

const fetchData = async () => {
    if (!canFetch.value) return; // Prevent requests if not allowed
    canFetch.value = false;

    try {
        const response = await fetch(endpointForecast.value);
        const data = await response.json();
        const forecastDate = await data.list;

        localidad.value = await data.city.name;
        pais.value = await data.city.country;

        forecast.value = await forecastDate.map((item) => {
            return {
                date: moment(item.dt_txt.split(' ')[0]),
                temperature: item.main.temp,
                temperature_min: item.main.temp_min,
                temperature_max: item.main.temp_max,
                humidity: item.main.humidity,
                description: item.weather[0].description,
                iconUlr: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
            }
        }).reduce((acc, item) => {
            if (!acc.some((day) => day.date.isSame(item.date, "day"))) {
                acc.push(item);
            }
            return acc;
        }, []);

    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        setTimeout(() => {
        canFetch.value = true;
        }, 10000); // Allow fetch again after 10 second
    }
};


onMounted(async () => {
    window.addEventListener('resize', updateScreenSize);

    updateSlidesPerView();

    // fetching data
    if (locationPermiso.value && coordenadas.value.latitud) {
        await fetchData();
    }

});

onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
});

</script>


<template>

<swiper
    :slides-per-view="cantSlidesPerView"
    :space-between="30"
    :freeMode="true"
    :pagination="{
        clickable: true,
    }"
    :modules="modules"
    class="swiper"
>
    <swiper-slide class="swiper-slide" v-for="(day, index) in forecast" :key="index">
        <div class="localidad">{{ localidad }}</div>
        <div class="dia">{{ day.date.format('DD/MM/YY') }}</div>
        <figure class="figure">
            <img class="img" :src="day.iconUlr" :alt="day.description" >
            <figcaption class="descripcion"> {{ day.description }}</figcaption>
        </figure>

        <div class="temp">Temperatura: {{ day.temperature }}&deg;C</div>
        <div class="temp-min-max">Min: {{ day.temperature_min }}&deg;C, max: {{ day.temperature_max }}&deg;C</div>
        <div class="humedad">Humedad: {{ day.humidity }}%</div>
    </swiper-slide>
</swiper>

</template>


<style scoped>

.swiper {
    width: 100%;
    height: 400px;

    --swiper-pagination-color: var(--color-principal);
}

.swiper-slide {
    /* Center slide text vertically */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    text-align: center;
    background: var(--vt-c-indigo);

    border-radius: var(--redondeo);
    user-select: none;
    height: 100%;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: transform .7s ease;
}

.swiper-slide img:hover {
    transform: scale(1.1);
}

/* Weather */
.figure {
    margin: 0 0 1rem 0;
    padding: 0;
}
.img {
    margin: 0;
    padding: 0;
}
.description {
    margin-bottom: .5rem;
    margin: 20px;
    padding: 0;
    min-height: 40px;
}

</style>