import MailsList from '../comps/mailComps/MailsList.js'
import MailMenu from '../comps/mailComps/MailMenu.js'

export default {
    template: `
        <section class="emailContainer">
        <h1>mail</h1>
            <mail-menu></mail-menu>
            <mails-list></mails-list>
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