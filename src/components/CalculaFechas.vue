<script setup>
import { ref } from 'vue';
// notificacion
import Swal from 'sweetalert2';

const date = ref(null);

// input numbers
const diaResta = ref(null);
const diaSuma = ref(null);

const DIA_MS = (1000 * 60 * 60 * 24); // 24 hrs in ms.  86,400,000

const resultDiaSuma = ref(null);
const resultDiaResta = ref(null);

const calcula = (e) => {
    if (date.value) {
        const dia = new Date(date.value);
        const diaMS = dia.getTime();
        
        if (e.target.id === "diaResta" || e.target.id === "btnDiaResta") {
            //console.log("restar " + diaResta.value);

            const dias = DIA_MS * diaResta.value; // days to ms.

            //console.log(`dias: ${dias}`);   // dias en ms

            const fechaFinal = diaMS - dias;

            const result = new Date(fechaFinal + DIA_MS);
            
            //console.log(result);

            resultDiaResta.value = result;

        } else if (e.target.id === "diaSuma" || e.target.id === "btnDiaSuma") {
            //console.log("sumar");
            /* const dias = DIA_MS * diaSuma.value; // days to ms.

            const fechaFinal = dia.getTime() + dias;
            const result = new Date(fechaFinal);
            resultDiaSuma.value = result; */

            resultDiaSuma.value = new Date(dia.setDate(dia.getDate()+diaSuma.value+1));
        }

    } else {
        Swal.fire(
            'Ocurrió un error!',
            'Selecciona antes una fecha',
            'warning'
        )
    }
}

</script>


<template>

<section >

    <h2 class="sombreado-h2">Suma o resta una fecha</h2>

    <article class="calcula-fechas">

        <div class="dias resta">
            <label for="diaResta">Resta días</label>
            <div class="entrada">
                <button title="limpiar" @click="diaResta = null"><v-icon name="ri-delete-bin-fill"/></button>
                <input type="number" name="diaResta" id="diaResta" min="0" v-model="diaResta" @change="calcula">
                <button title="calcular" id="btnDiaResta" @click="calcula" ><v-icon name="co-calculator"/></button>
            </div>
            <div class="result">
                <h3 v-if="resultDiaResta">{{ resultDiaResta.toLocaleDateString() }}</h3>
            </div>
        </div>

        <div class="date">
            <label for="date">Selecciona una fecha</label>
            <input type="date" name="date" id="date" v-model="date">
        </div>

        <div class="dias suma">
            <label for="diasuma">Suma días</label>
            <div class="entrada">
                <button title="limpiar" @click="diaSuma = null"><v-icon name="ri-delete-bin-fill"/></button>
                <input type="number" name="diaSuma" id="diaSuma" min="0" v-model="diaSuma" @change="calcula">
                <button title="calcular" id="btnDiaSuma" @click="calcula"><v-icon name="co-calculator"/></button>
            </div>
            <div class="result">
                <h3 v-if="resultDiaSuma">{{ resultDiaSuma.toLocaleDateString() }}</h3>
            </div>

        </div>

    </article>

</section>

</template>


<style scoped>

.calcula-fechas {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: var(--separacion);
}

.date {
    margin: 0 auto;
}

.dias {
    display: flex;
    flex-direction: column;
    text-align: center;

    & label {
        font-weight: 800;
    }

    & input[type="number"] {
        padding: 1rem;
        margin: 0 1rem;
        width: 80%;
        margin: 0 auto;
    }

}

@media (min-width: 480px) {

    .calcula-fechas {
        flex-direction: row;
        align-items: end;
    }

    input[type="number"]{
        width: 200px;
        text-align: center;
    }
}

.entrada {
    display: flex;
}

</style>