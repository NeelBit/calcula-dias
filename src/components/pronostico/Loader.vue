<script setup>
import { inject } from 'vue';

const locationPermiso = inject('locationPermiso');
const locationError = inject('locationError');

</script>


<template>

<div class="loader-container">
    <p v-if="!locationPermiso">Esperando que permitas el acceso a tu ubicación</p>
    <p v-if="locationError">{{ locationError }}</p>
    <span  class="loader"></span>
</div>

</template>


<style scoped>

.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.loader {
    color: #fff;
    font-size: 10px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: mulShdSpin 1.3s infinite linear;
    transform: translateZ(0);
}

@keyframes mulShdSpin {
    0%,
    100% {
        box-shadow: 0 -3em 0 0.2em, 
        2em -2em 0 0em, 3em 0 0 -1em, 
        2em 2em 0 -1em, 0 3em 0 -1em, 
        -2em 2em 0 -1em, -3em 0 0 -1em, 
        -2em -2em 0 0;
    }
    12.5% {
        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 
        3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, 
        -2em 2em 0 -1em, -3em 0 0 -1em, 
        -2em -2em 0 -1em;
    }
    25% {
        box-shadow: 0 -3em 0 -0.5em, 
        2em -2em 0 0, 3em 0 0 0.2em, 
        2em 2em 0 0, 0 3em 0 -1em, 
        -2em 2em 0 -1em, -3em 0 0 -1em, 
        -2em -2em 0 -1em;
    }
    37.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
        3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, 
        -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
        3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, 
        -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
        3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, 
        -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 
        3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
        -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 
        3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
        -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
}

</style>