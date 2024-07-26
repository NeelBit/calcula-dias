<script setup>
import { inject } from 'vue';
import Location from './Location.vue';
import ForecastSlider from './ForecastSlider.vue';
import Loader from './Loader.vue';

const locationError = inject('locationError');
const locationPermiso = inject('locationPermiso');

/* const dias = ref(["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]);
const meses = ref(["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]); */

</script>


<template>

<h3 class="centrar-texto">Pronóstico del tiempo extendido para tu ubicación</h3>

<Location></Location>
<ForecastSlider v-if="locationPermiso && !locationError"></ForecastSlider>
<Loader v-else></Loader>

</template>


<style scoped>



</style>