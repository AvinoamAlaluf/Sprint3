'use strict';

import routes from './routes.js';
import pagesNavigationMixin from './mixins/pagesNavigationMixin.js'

const myRouter = new VueRouter({ routes: routes });
var myVue = new Vue({

    template: `
        <section class="mainNav">
       
        
        <nav v-if="showNav">      
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
    data:{
        showNav: true,
    },
    methods:{
    },
    beforeUpdate() {
        console.log('hi');
       var route = this.$route.path;
       if (route === '/') this.showNav = false;
       else this.showNav = true;
    },
    router: myRouter,
    mixins: [pagesNavigationMixin]

}).$mount('#app')