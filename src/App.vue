<script setup>

import NavComponent from "./components/NavComponent.vue";
import Separador from './components/Separador.vue';
import Calendar from './components/Calendar.vue';
import CalculaDias from './components/CalculaDias.vue';
import CalculaFechas from './components/CalculaFechas.vue';
/* import Calc from './components/Calc.vue'; */
import Feriados from './components/Feriados.vue';
import Footer from './components/Footer.vue';
import CalculaEdad from './components/CalculaEdad.vue';

/* hoy */
//const hoy = ref(new Date().toLocaleDateString());

</script>


<template>
    <header class="header">
        <div class="wrapper ">
            <h2>Calculadora de Días</h2>
            <NavComponent></NavComponent>
        </div>
    </header>

    <main class="contenedor">
        <div class="secciones">
            <Calendar></Calendar>
            <Separador></Separador>
            <CalculaDias></CalculaDias>
            <Separador></Separador>
            <CalculaFechas></CalculaFechas>
            <Separador></Separador>
            <CalculaEdad></CalculaEdad>
            <Separador></Separador>
            <Feriados></Feriados>
        </div>
    </main>
    <Footer></Footer>
</template>


<style scoped>

.header {
    position: sticky;
    top: 0;
    display: grid;
    align-items: center;
    background-color: var(--vt-c-indigo);
    height: 8rem;
    margin: 0 auto;
    color: var(--vt-c-white-mute);
}

.wrapper {
        max-width: 1200px;
        padding: .5rem;
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--separacion);

        h2 {
            text-align: center;
            z-index: 10;
        }
    }

@media (min-width: 768px) {
    .wrapper {
        flex-direction: column;
        gap: 0;
    }
}

.contenedor {
    & h3 {
        font-size: 2rem;
        margin: 2rem;
    }

}
.secciones {
    display: flex;
    flex-direction: column;
    margin: var(--separacion) 0;
    gap: var(--separacion);
}

</style>
