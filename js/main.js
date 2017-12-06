'use strict';

import routes from './routes/js';

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRouter });

var myVue = new Vue({
    template: `
        <section>
            <h1>Sprint 3 Bitch Madafacuka</h1>    
        </section>    
    `,
    created() {

    },
    router: myRouter

}).mount('#app')