<script setup>

import { capitalize, onMounted, ref } from 'vue';

const paisesDisponibles = ref([]);
const feriados = ref(null);
const newFeriados= ref([]);

const cod = ref('AR');
const year = new Date().getFullYear();

const countriesAvailable = async () => {
    const res = await fetch("https://date.nager.at/api/v3/AvailableCountries");
    const data = await res.json();
    paisesDisponibles.value = data;
}

const mostrarFeriados = async (e) => {
    
    cod.value = e.target.value;

    const res = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/${cod.value}`);
    const data = await res.json();
    feriados.value = data;
}

const feriadoDefault = async () => {
    const res = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/AR`);
    const data = await res.json();
    feriados.value = data;
}

onMounted(async ()=> {
    await countriesAvailable();
    await feriadoDefault();

    feriados.value.forEach(element => {
        const fechaLocal = new Date(element.date).toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        newFeriados.value.push(fechaLocal);
        element.fechaLocal = fechaLocal;
    });
})



</script>


<template>

<article class="feriados">

    <h2>Feriados</h2>
    <div>
        <select name="paises" id="paises" @change="mostrarFeriados">
            <option selected>SELECCIONA TU PAÍS</option>
            <option v-for="pais in paisesDisponibles" :key="pais.countryCode" :value="pais.countryCode" :selected="pais.countryCode === 'AR'">{{ pais.name }}</option>
        </select>
    </div>

    <ul class="lista-feriados">
        <li v-for="feriado in feriados" :key="feriado.date">
            <div class="feriado__fecha">{{ feriado.date }}</div>
            <div class="feriado__fechaLocal">{{ feriado.fechaLocal }}</div>
            <div class="feriado__nombre">{{ feriado.localName }}</div>
        </li>
    </ul>

</article>

</template>


<style scoped>

.feriados {
    display: flex;
    flex-direction: column;
    gap: var(--separacion);
}

.lista-feriados {
    list-style: none;
    margin: 0;
    padding: 0;

    & li {
        /* display: flex;
        justify-content: flex-start;
        gap: var(--separacion); */
        padding: .5rem;
        border: 1px solid var(--color-principal);
    }

    & li:nth-child(odd) {
        background-color: var(--color-principal);
    }

}

.feriado__fecha {
    /* width: 150px;
    height: 100px; */
}

select {
    padding: 1rem;
}

</style>