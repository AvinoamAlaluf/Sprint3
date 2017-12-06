'use strict';

import routes from './routes.js';

const myRouter = new VueRouter({ routes: routes });
var myVue = new Vue({

    template: `
        <section class="mainNav">
       
        
        <nav>
        <ul>
            <li @click="navigateToHome" class="logoLi">logo</li>
            <li @click="navigateToMail" >Mail</li>
            <li @click="navigateToNotes" >Notes</li>
            <li @click="navigateToMap" >Map</li>
        </ul>
        </nav>
            <router-view></router-view>

        </section>    
    `,
    methods:{
        navigateToHome(){
            this.$router.push('/')
        },
        navigateToMail(){
            this.$router.push('/mail')
        },
        navigateToNotes(){
            this.$router.push('/notes')
        },
        navigateToMap(){
            this.$router.push('/map')
        }
    },
    created() {

    },
    router: myRouter

}).$mount('#app')