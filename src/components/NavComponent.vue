<script setup>

const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    element.scrollIntoView({ behavior: 'smooth' });
}

const items = [
    {
        id: "#calendar",
        name: "calendar",
        title: "Calendario",
    },
    {
        id: "#dias",
        name: "dias",
        title: "Calcula día",
    },
    {
        id: "#fechas",
        name: "fechas",
        title: "Calcula fechas",
    },
    {
        id: "#edad",
        name: "edad",
        title: "Calcula edad",
    },
    {
        id: "#feriados",
        name: "feriados",
        title: "Feriados",
    }
];


</script>


<template>

<nav class="nav">
    <div class="nav__container">

        <label for="nav__input" class="nav__toggle">
            <input type="checkbox" name="nav__input" id="nav__input" class="nav__input">
        </label>

        <ul class="nav__list">
            <li v-for="item in items" 
            :key="item.name" 
            class="nav__item">
                <a 
                @click.prevent="scrollToSection(`${item.id}`)">
                    {{ item.title }}
                </a>
            </li>
        </ul>
    </div>
</nav>

</template>


<style scoped>

.nav {
    width: 50%;
    height: 8rem;
}

.nav__container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: min(90%, 1200px);
    height: 8rem;
    margin: 0 auto;
    --icon-toggle-menu: url('../assets/img/menu.svg');
    --transform-menu-show: translate(-100%);
}

.nav__container:has(.nav__input:checked) {
    --icon-toggle-menu: url('../assets/img/close.svg');
    --transform-menu-show: translate(0);
}

.nav__toggle {
    z-index: 11;
    display: flex;
    width: 4rem;
    height: 4rem;
    background-image: var(--icon-toggle-menu);
    background-position: center;
    background-size: cover;
    cursor: pointer;
    transition: background-image 0.5s ease;
}

.nav__input {
    display: none;
}

.nav__list {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--separacion);
    padding: var(--separacion);
    background-color: var(--vt-c-indigo);
    list-style: none;
    transform: var(--transform-menu-show);
    transition: transform .5s ease;
}

.nav__item {
    cursor: pointer;
}

@media (min-width: 768px) {
    .nav__toggle, .nav__input {
        display: none;
    }

    .nav__list {
        --transform-menu-show: translate(0);
        position: absolute;
        top: 4rem;
        width: min(90%, 1200px);
        height: 4rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }
}

</style>