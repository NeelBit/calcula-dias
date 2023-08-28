<script setup>
import { computed, onMounted, ref } from "vue";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {es} from 'date-fns/locale';
import Swal from 'sweetalert2';

const hoy = ref(null);

onMounted(() => {
    hoy.value = new Date();
})

const nacimiento = ref("");

const edad = computed(() => {
    if (nacimiento.value) {
        return formatDistanceToNow(new Date(nacimiento.value), {locale: es});
    }
    
});

const nacimientoCalculado = () => {
    Swal.fire(
            'Edad calculada!',
            `Felicidades tienes ${edad.value}!`,
            'success'
        )
}

</script>


<template>

<article class="calcula-edad">
    <h2>Calcula edad</h2>

    <div class="nacimiento">
        <input @change="nacimientoCalculado" type="date" name="nacimiento" id="nacimiento" v-model="nacimiento">

        <div v-if="edad" class="nacimiento__resultado">Tienes {{ edad }} </div>
    </div>

</article>

</template>


<style scoped>

.calcula-edad {
    margin: var(--separacion) 0;
}
.nacimiento  {
    display: grid;
    place-content: center;
}

</style>