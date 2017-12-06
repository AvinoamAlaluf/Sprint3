import pagesNavigationMixin from '../mixins/pagesNavigationMixin.js'


export default {
    template: `
<<<<<<< HEAD
        <section >
<<<<<<< HEAD
           
=======
           <div class="mailIcon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
           <div class="noteIcon"><i class="fa fa-sticky-note-o" aria-hidden="true"></i></div>
           <div class="mapIcon"><i class="fa fa-globe" aria-hidden="true"></i></div>           
>>>>>>> 4b753a6906378e32ae9e71290b44a0458c3aaf29
=======
        <section class="homepageContainer">
     
        <div @click="navigateToMail" class="iconContainer mailIcon">
                <div class="mailIcon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
        </div>
        
        <div @click="navigateToNotes" class="iconContainer noteIcon">
            <div class="noteIcon"><i class="fa fa-sticky-note-o" aria-hidden="true"></i></div>        
        </div>

        
        <div @click="navigateToMap" class="iconContainer mapIcon">
            <div class="mapIcon"><i class="fa fa-globe" aria-hidden="true"></i></div>           
        </div>

>>>>>>> 0c01fb4100fd7091bd61b643e2766dcee6384e57
        </section>
    `,
    data() {
        return {
            
        }
    },
    methods: {
        closeNote() {
            
        },
        saveNote() {
            
        }
    },
    created() {
        console.log('Created Main Page Comp');
    },
     mixins: [pagesNavigationMixin]
}