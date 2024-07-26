<script setup>
import { ref, provide } from 'vue';
import Weather from './Weather.vue';

const showWeather = ref(false);

const btnShowWeather = () => {
    showWeather.value = !showWeather.value
    getLocation();
}

const coordenadas = ref({ latitud: null, longitud: null });
const locationPermiso = ref(false);
const locationError = ref("");

provide('coordenadas', coordenadas);
provide('locationPermiso', locationPermiso);
provide('locationError', locationError);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                coordenadas.value.latitud = position.coords.latitude;
                coordenadas.value.longitud = position.coords.longitude;

                locationPermiso.value = true;
                locationError.value = false;
            },
            function(err) {
                handleError(err);
            }
        );
    } else {
        console.log("La geolocalización no está soportada en este navegador.");
        locationError.value = "La geolocalización no está soportada en este navegador.";
    }
}

function handleError(err) {
    switch (err.code) {
        case err.PERMISSION_DENIED:
            locationError.value = "Permiso denegado por el usuario.";
            break;
        case err.POSITION_UNAVAILABLE:
            locationError.value = "Información de ubicación no disponible.";
            break;
        case err.TIMEOUT:
            locationError.value = "La solicitud para obtener la ubicación ha caducado.";
            break;
        case err.UNKNOWN_ERROR:
            locationError.value = "Error desconocido.";
            break;
        default:
            locationError.value = "Error al obtener la ubicación.";
            break;
    }
}

</script>


<template>

<section id="pronostico">
    <button @click="btnShowWeather" class="btn-mostrar"><v-icon name="la-cloud-sun-rain-solid"/> {{ showWeather ? 'Ocultar pronóstico' : 'Mostrar pronóstico' }}</button>
    <Weather v-if="showWeather"></Weather>
</section>

</template>


<style scoped>

.btn-mostrar {
    width: 100%;
    padding: .5rem;
    transition: all .5s ease;
}

</style>