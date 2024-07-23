<template>

<footer class="contenedor-footer">
    <div class="derechos-autor">
        <small class="footer__autor">By 
            <a href="https://portfolio-neelbit.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                > 
                Neel
            </a>
        </small>
    </div>

    <div class="redes-sociales">
        <div class="contenedor-icono">
            <a href="https://x.com/NeelBit" target="_blank">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 512 512" 
                stroke-width="1.5" 
                stroke="#171515" 
                stroke-linecap="round" 
                stroke-linejoin="round">
                    <path 
                        d="M 73.14285714285714 0 Q 42.285714285714285 1.1428571428571428 21.714285714285715 21.714285714285715 L 21.714285714285715 21.714285714285715 L 21.714285714285715 21.714285714285715 Q 1.1428571428571428 42.285714285714285 0 73.14285714285714 L 0 438.85714285714283 L 0 438.85714285714283 Q 1.1428571428571428 469.7142857142857 21.714285714285715 490.2857142857143 Q 42.285714285714285 510.85714285714283 73.14285714285714 512 L 438.85714285714283 512 L 438.85714285714283 512 Q 469.7142857142857 510.85714285714283 490.2857142857143 490.2857142857143 Q 510.85714285714283 469.7142857142857 512 438.85714285714283 L 512 73.14285714285714 L 512 73.14285714285714 Q 510.85714285714283 42.285714285714285 490.2857142857143 21.714285714285715 Q 469.7142857142857 1.1428571428571428 438.85714285714283 0 L 73.14285714285714 0 L 73.14285714285714 0 Z M 412.57142857142856 96 L 293.7142857142857 232 L 412.57142857142856 96 L 293.7142857142857 232 L 433.14285714285717 416 L 433.14285714285717 416 L 324.57142857142856 416 L 324.57142857142856 416 L 238.85714285714286 304 L 238.85714285714286 304 L 140.57142857142858 416 L 140.57142857142858 416 L 86.85714285714286 416 L 86.85714285714286 416 L 213.71428571428572 270.85714285714283 L 213.71428571428572 270.85714285714283 L 80 96 L 80 96 L 192 96 L 192 96 L 268.57142857142856 198.85714285714286 L 268.57142857142856 198.85714285714286 L 358.85714285714283 96 L 358.85714285714283 96 L 412.57142857142856 96 L 412.57142857142856 96 Z M 369.14285714285717 384 L 174.85714285714286 126.85714285714286 L 369.14285714285717 384 L 174.85714285714286 126.85714285714286 L 142.85714285714286 126.85714285714286 L 142.85714285714286 126.85714285714286 L 339.42857142857144 384 L 339.42857142857144 384 L 369.14285714285717 384 L 369.14285714285717 384 Z" 
                    />
                </svg>
            </a>
        </div>
        <div class="contenedor-icono">
            <a href="https://github.com/NeelBit" target="_blank">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-brand-github" 
                idth="24" 
                height="24" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="#171515" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            </a>
        </div>
    </div>
</footer>

</template>


<style scoped>

footer {
    background-color: var(--vt-c-indigo);

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    padding: 1rem;
    color: var(--vt-c-white-mute);
}

.derechos-autor {
    display: flex;
    flex-direction: column;
    justify-items: center;
}

.contenedor-footer small {
    font-size: 1.6rem;
}

.footer__texto,
.footer__autor {
    margin: .2rem auto;
    text-align: center;
}

.redes-sociales {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--separacion);
}

.contenedor-icono {
    padding: .5rem;
}

.contenedor-icono a {
    cursor: pointer;
    /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); */
    box-shadow: 0px 0px 10px 0px var(--vt-c-white-soft);
    border-radius: 50%;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--vt-c-white-soft);
}

.contenedor-icono:hover {
    /* transform: rotate(0.5turn); */
    /* transform: rotate(360deg); */
    /* transform: translate3d(2px, 10%, 3em); */

    animation: icono 1s linear infinite .25s;
}

@keyframes icono {
    from {
        transform: rotate3d(0, 0, 0, 0);
    }

    to {
        transform: rotate3d(0, 1, 0, 360deg);
    }
}

</style>