import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faHatWizard, faMagnifyingGlass, faSortDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHatWizard, faStar, faMagnifyingGlass, faBell, faSortDown)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')