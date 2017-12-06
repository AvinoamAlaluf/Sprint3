'use strict';

<<<<<<< HEAD
import routes from './routes/js';
=======
import routes from './routes.js';
>>>>>>> 489aa94c54b1861c78fe76e6517295eee1bc901c

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