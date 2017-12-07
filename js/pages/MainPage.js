import pagesNavigationMixin from '../mixins/pagesNavigationMixin.js'


export default {
    template: `

        <section class="homepageContainer">

        <h1 class="homepageHeader"><img class="homepageLogo" src="../img/logo.png">ork shop</h1>
        
        <div class="iconContainers">
        <div @click="navigateToMail" class="iconContainer mailIcon">
                <div class="mailIcon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
        </div>
        
        <div @click="navigateToNotes" class="iconContainer noteIcon">
            <div class="noteIcon"><i class="fa fa-sticky-note-o" aria-hidden="true"></i></div>        
        </div>

        
        <div @click="navigateToMap" class="iconContainer mapIcon">
            <div class="mapIcon"><i class="fa fa-globe" aria-hidden="true"></i></div>           
        </div>

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