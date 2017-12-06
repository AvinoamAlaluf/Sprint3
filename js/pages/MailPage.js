import MailsList from '../comps/mailComps/MailsList.js'
import MailMenu from '../comps/mailComps/MailMenu.js'

export default {
    template: `
        <section class="emailContainer">
            <mail-menu></mail-menu>
            <div class="emailRightSection">
            <mails-list></mails-list>
            </div>
        </section>
    `,
    data() {
        return {
         
        }
    },
    methods: {
      
    },
    created() {
        
    },
    components:{
        MailsList,
        MailMenu
    }
}