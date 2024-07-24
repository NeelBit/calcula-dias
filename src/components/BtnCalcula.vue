<script setup>
const emit = defineEmits(['calcula']);

const calcula = () => {
    emit('calcula');
}

</script>


<template>

<button class="btn-calcula" @click="calcula">Calcular</button>

</template>


<style scoped>

.btn-calcula {
    padding: .5rem 1rem;
    border-radius: var(--redondeo);
    text-transform: uppercase;
}

</style>