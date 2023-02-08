import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const image = ref("medias/test.webp")

function changerImage(src){
    image.value = src
}

const root = {
    setup() {
        return {

            //Propriétés
            image,

            //Méthodes
            changerImage,
        }
    }
}

//Initialisation de vue
createApp(root).mount('#app')