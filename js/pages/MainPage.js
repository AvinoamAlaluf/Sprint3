import pagesNavigationMixin from '../mixins/pagesNavigationMixin.js'


export default {
    template: `

        <section >

           

           <div class="mailIcon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
           <div class="noteIcon"><i class="fa fa-sticky-note-o" aria-hidden="true"></i></div>
           <div class="mapIcon"><i class="fa fa-globe" aria-hidden="true"></i></div>           

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