'use strict';

import routes from './routes.js';
import pagesNavigationMixin from './mixins/pagesNavigationMixin.js'

const myRouter = new VueRouter({ routes: routes });
var myVue = new Vue({

    template: `
        <section class="mainNav">
       
        <header>
        <nav v-if="showNav">      
            <img @click="navigateToHome" class="logoNav" src="./img/logo.png">
        <ul>
            <li :class="{'picked' : mailPicked}" @click="navigateToMail">Mail</li>
            <li :class="{'picked' : notesPicked}" @click="navigateToNotes">Notes</li>
            <li :class="{'picked' : mapPicked}" @click="navigateToMap">Map</li>
        </ul>
        </nav>
        </header>
            <router-view></router-view>
        </section>    
    `,
    data:{
        showNav: true,
        mailPicked: false,
        notesPicked: false,
        mapPicked: false
    },
    methods:{
        navControl(){
            console.log('hi');        
            var route = this.$route.path;
            if (route === '/') this.showNav = false;
            else this.showNav = true;
        },
        checkCurrentRoute(){
            var currRoute = this.$route.path;
            switch (currRoute) {
                case '/mail':
                this.mailPicked = true;
                this.notesPicked = false;
                this.mapPicked = false; 
                    break;
                case '/notes':
                this.notesPicked = true;
                this.mailPicked = false;
                this.mapPicked = false; 
                    break;
                case '/map':
                this.mapPicked = true;
                this.mailPicked = false;
                this.notesPicked = false;
                    break;
            }
        }
    },
    created(){
        this.navControl();
        this.checkCurrentRoute();
    },
    beforeUpdate() {
        this.navControl();
    },
    watch: {
        '$route'(to, from) {
            this.checkCurrentRoute();
        }
    },
    router: myRouter,
    mixins: [pagesNavigationMixin]

}).$mount('#app')