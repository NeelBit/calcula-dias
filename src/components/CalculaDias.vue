<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';

const result = ref("x");
/* const resultHabiles = ref("y"); */

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

<section >

    <h2 class="sombreado-h2">Calcula los días transcurridos entre las fechas</h2>

    <article class="calcula-dias">
        <div class="date">
            <input type="date" name="dateOne" id="dateOne" v-model="dateOne">
        </div>

        <div class="result">
            <h3 v-if="result != null && result != 'x'" class="centrar-texto">{{ result }} días</h3>
            <!-- <h3>{{ resultHabiles }} Dias hábiles (Lunes a Viernes).</h3> -->
            <button @click="calcula" title="Calcular días entre las fechas">Calcular</button>
        </div>

        <div class="date">
            <input type="date" name="dateTwo" id="dateTwo" v-model="dateTwo">
        </div>
    </article>



</section>

</template>


<style scoped>

section {
    border-bottom: .5rem solid var(--color-principal);
    & h2 {
    margin-bottom: var(--separacion);
}
}

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

.date {
    
}

button {
    padding: .5rem 1rem;
    border-radius: var(--redondeo);
    text-transform: uppercase;
}

.result {
    display: grid;
    place-content: center;
    gap: var(--separacion);

    & > h3 {
        padding: .5rem;
        border: 2px var(--color-principal) solid;
        border-radius: var(--redondeo);
    }
}

</style>