<script setup>

import { onMounted, ref } from 'vue';

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

    mostrarFeriadosFormal();
}

const feriadoDefault = async () => {
    const res = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/AR`);
    const data = await res.json();
    feriados.value = data;
    mostrarFeriadosFormal();
}

const mostrarFeriadosFormal = () => {
    newFeriados.value = [];
    feriados.value.forEach(element => {
        const fechaLocal = new Date(element.date).toLocaleDateString('es-AR', 
            { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                timeZone: 'UTC'
            }
        );
        newFeriados.value.push(fechaLocal);
        element.fechaFormal = fechaLocal;
    });
}

onMounted(async ()=> {
    await countriesAvailable();
    await feriadoDefault();
})

</script>


<template>

<section id="feriados" class="feriados">

    <h2 class="sombreado-h2">Feriados</h2>
    <div>
        <select name="paises" id="paises" @change="mostrarFeriados">
            <option selected>SELECCIONA TU PAÍS</option>
            <option v-for="pais in paisesDisponibles" :key="pais.countryCode" :value="pais.countryCode" :selected="pais.countryCode === 'AR'">{{ pais.name }}</option>
        </select>
    </div>

    <ul class="lista-feriados">
        <li v-for="feriado in feriados" :key="feriado.date">
            <div class="feriado__fechaformal">{{ feriado.fechaFormal }}</div>
            <div class="feriado__fecha">{{ feriado.date }}</div>
            <div class="feriado__nombre">{{ feriado.localName }}</div>
        </li>
    </ul>

</section>

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
        display: flex;
        flex-wrap: wrap;
        padding: .5rem;
        border: 1px solid var(--color-principal);
    }

    & li:nth-child(odd) {
        background-color: var(--color-principal);
    }

    & li:hover { 
        color: var(--vt-c-white);
    }

}
.feriado__fechaformal {
    width: 50%;
    text-transform: capitalize
}
.feriado__fecha {
    width: 50%;
    height: 100%;
    text-align: center;
    border: 1px white solid;
    border-radius: var(--redondeo);
}
.feriado__nombre {
    padding: .5rem 0;
    text-transform: uppercase;
}

select {
    padding: 1rem;
}

</style>