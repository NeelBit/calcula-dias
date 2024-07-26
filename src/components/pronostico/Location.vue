<script setup>
import { inject } from 'vue';

const coordenadas = inject('coordenadas');
const locationPermiso = inject('locationPermiso');
const locationError = inject('locationError');

</script>


<template>

<div v-if="locationPermiso">
    <div class="localizacion">Tus coordenadas son: {{ coordenadas.latitud }}° y {{ coordenadas.longitud }}°.</div>
    <!-- <div class="localizacion" v-if="coordenadas.latitud">Tu localidad es: {{ props.localidad }}, {{ props.pais }}.</div> -->
</div>
<div v-else>
    <div class="localizacion" v-if="locationError">Error: {{ locationError }}</div>
</div>

</template>


<style scoped>



</style>