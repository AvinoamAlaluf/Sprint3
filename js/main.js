'use strict';

import routes from './routes.js';

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: routes });

var myVue = new Vue({
    template: `
        <section>
        <h1>collllll</h1>
            <router-view></router-view>

        </section>    
    `,
    created() {

    },
    router: myRouter

}).$mount('#app')