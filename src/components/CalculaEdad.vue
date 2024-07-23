<script setup>
import { computed, onMounted, ref } from "vue";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {es} from 'date-fns/locale';
import Swal from 'sweetalert2';

const hoy = ref(null);
const hoyYMD = ref(null);

// Obtener la fecha actual en formato YYYY-MM-DD
const today = () => { 
    const today = new Date();
    hoy.value = today;
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    hoyYMD.value = yyyy + '-' + mm + '-' + dd;
}

onMounted(() => {
    today();
})

const nacimiento = ref("");

const edad = computed(() => {
    if (nacimiento.value) {
        return formatDistanceToNow(new Date(nacimiento.value), {locale: es});
    }
});

const nacimientoCalculado = () => {
    const fechaNacimiento = new Date(nacimiento.value);
    const fechaHoy = new Date();

    if (fechaNacimiento.getTime() < fechaHoy.getTime()) {
        Swal.fire(
            'Edad calculada!',
            `Felicidades tienes ${edad.value}!`,
            'success'
        )
    } else {
        Swal.fire(
            'Edad calculada!',
            `Felicidades vienes del futuro, aún eres un feto probablemente, la diferencia de días es ${edad.value}!`,
            'success'
        )
    }
}

</script>


<template>

<article class="calcula-edad">
    <h2 class="sombreado-h2">Calcula edad</h2>

    <div class="nacimiento">
        <div class="entrada date">
            <label for="nacimiento">Ingresa tu nacimiento</label>
            <input @change="nacimientoCalculado" type="date" name="nacimiento" id="nacimiento" v-model="nacimiento" :max="hoyYMD">
        </div>

        <div class="result">
            <h3 v-if="edad" class="nacimiento__resultado">Tienes {{ edad }} </h3>
        </div>

    </div>

</article>

</template>


<style scoped>

.calcula-edad {
    /*  */
}
.nacimiento  {
    & .nacimiento__resultado {
        text-align: center;
        font-weight: 800;
    }
}

</style>