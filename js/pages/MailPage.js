import MailsList from '../comps/mailComps/MailsList.js'

export default {
    template: `
        <section class="emailContainer">
        <h1>mail</h1>
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
        MailsList 
    }
}