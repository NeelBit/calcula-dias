<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import BtnCalcula from './BtnCalcula.vue';

const result = ref("x");

const dateOne = ref(null);
const dateTwo = ref(null);

const calcula = () => {
    const newDateOne = new Date(dateOne.value);
    const newDateOneUnix = newDateOne.getTime();

    const newDateTwo = new Date(dateTwo.value);
    const newDateTwoUnix = newDateTwo.getTime();

    const diferencia = newDateTwoUnix - newDateOneUnix; // diff of days in ms

    if (dateOne.value && dateTwo.value) {
        const dias = diferencia/(1000*60*60*24) ;
        result.value = dias;

        Swal.fire(
            'Días calculados!',
            `Entre el ${dateOne.value} y el ${dateTwo.value} hay ${dias} días.`,
            'success'
        )
    } else {
        Swal.fire(
            'Falta un dato!',
            'Selecciona antes ambas fechas',
            'warning'
        )
    }

}

</script>


<template>

<section id="dias">

    <div class="sombreado-h2 section-title">
        <v-icon name="px-calendar-today"/>
        <h2>Calcula días transcurridos entre fechas</h2>
    </div>

    <article class="calcula-dias">
        <div class="date">
            <label for="dateOne">Selecciona primer fecha</label>
            <input type="date" name="dateOne" id="dateOne" v-model="dateOne">
        </div>

        <div class="result">
            <h3 v-if="result != null && result != 'x'" class="centrar-texto">{{ result }} días</h3>
            <BtnCalcula @calcula="calcula" title="Calcular días entre las fechas"></BtnCalcula>
        </div>

        <div class="date">
            <label for="dateTwo">Selecciona segunda fecha</label>
            <input type="date" name="dateTwo" id="dateTwo" v-model="dateTwo">
        </div>
    </article>

</section>

</template>


<style scoped>

.calcula-dias {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: var(--separacion);
}

@media (min-width: 480px) {
    .calcula-dias {
        flex-direction: row;
        align-items: flex-end;
    }
}

</style>