'use strict';

import routes from './routes.js';
import pagesNavigationMixin from './mixins/pagesNavigationMixin.js'

const myRouter = new VueRouter({ routes: routes });
var myVue = new Vue({

    template: `
        <section class="mainNav">
       
        
        <nav>      
            <img @click="navigateToHome" class="logoNav" src="../img/logo.png">
        <ul>
            <li @click="navigateToMail">Mail</li>
            <li @click="navigateToNotes">Notes</li>
            <li @click="navigateToMap">Map</li>
        </ul>
        </nav>
            <router-view></router-view>
        </section>    
    `,
    methods:{
        
    },
    created() {

    },
    router: myRouter,
    mixins: [pagesNavigationMixin]

}).$mount('#app')