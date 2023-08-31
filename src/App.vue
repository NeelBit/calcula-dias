<script setup>
import { ref } from 'vue';
import CalculaDias from './components/CalculaDias.vue';
import CalculaFechas from './components/CalculaFechas.vue';
/* import Calc from './components/Calc.vue'; */
import Feriados from './components/Feriados.vue';
import Footer from './components/Footer.vue';
import CalculaEdad from './components/CalculaEdad.vue';

const hoy = ref(new Date().toLocaleDateString());

</script>


<template>
    <header class="header">
        <h2>Calculadora de Días</h2>
    </header>

    <main class="contenedor">
        <h3 class="centrar-texto"> Hoy es {{ hoy }} </h3>

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
}
.secciones {
    display: flex;
    flex-direction: column;
    margin: var(--separacion) 0;
    gap: var(--separacion);
}

</style>
