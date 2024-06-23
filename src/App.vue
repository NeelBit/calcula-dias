<script setup>
import { ref } from 'vue';

import "cally";

import CalculaDias from './components/CalculaDias.vue';
import CalculaFechas from './components/CalculaFechas.vue';
/* import Calc from './components/Calc.vue'; */
import Feriados from './components/Feriados.vue';
import Footer from './components/Footer.vue';
import CalculaEdad from './components/CalculaEdad.vue';

/* hoy */
const hoy = ref(new Date().toLocaleDateString());
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; // Los meses van de 0 a 11 en JavaScript
const currentDay = today.getDate();
const current = `${currentYear}-${currentMonth < 10 ? '0' + currentMonth : '' + currentMonth}-${currentDay}`;

/* calendar */
const selected = ref(current);
const change = ref(false);

const fechaActualFormal = ref();

const onChange = (event) => { 
    /* selected.value = event.target.value; */
    const nuev = event.target.value;
    fechaActualFormal.value = new Date(nuev).toLocaleDateString('ES-ar', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'}
    );

    change.value = true;
}

</script>


<template>
    <header class="header">
        <h2>Calculadora de Días</h2>
    </header>

    <main class="contenedor">

        <!-- calendar -->
        <calendar-date class="calendar" :months="2" v-model.lazy="selected" @change="onChange">
            <!-- botones de atrás y siguiente -->
            <svg
                aria-label="Previous"
                slot="previous"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
            <svg
                aria-label="Next"
                slot="next"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>

            <div class="grid">
                <calendar-month />
                <calendar-month :offset="1" />
            </div>
        </calendar-date>

        <h4 v-if="change" class="centrar-texto">Seleccionaste: {{fechaActualFormal}}</h4>
        <h3 v-else class="centrar-texto">Hoy es: {{ selected }}</h3>

        <div class="secciones">
            <CalculaDias></CalculaDias>
            <CalculaFechas></CalculaFechas>
            <CalculaEdad></CalculaEdad>
        </div>

    </main>

    <section class="contenedor">

        <!-- <Calc></Calc> -->
        <Feriados></Feriados>

    </section>
    
    <Footer></Footer>

</template>


<style scoped>

.header {
    
    background-color: var(--vt-c-indigo);

    display: grid;
    place-content: center;
    height: 6rem;

    color: var(--vt-c-white-mute);

    & h2 {
        text-align: center;
    }
}

.contenedor {
    & h3 {
        font-size: 2rem;
        margin: 2rem;
    }

    /* calendario */
    .calendar {
        margin: auto;
    }
    .grid {
        display: flex;
        gap: 1em;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto 0;
    }
}
.secciones {
    display: flex;
    flex-direction: column;
    margin: var(--separacion) 0;
    gap: var(--separacion);
}

calendar-date {
    svg {
        height: 20px;
        width: 20px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.5;
    }

    path {
        stroke-linecap: round;
        stroke-linejoin: round;
    }
}

calendar-month {
    --color-accent: var(--color-principal);
    --color-text-on-accent: #ffffff;
}

svg:focus, svg:hover, path:focus, path:hover {
    background-color: var(--color-principal);
}
</style>
