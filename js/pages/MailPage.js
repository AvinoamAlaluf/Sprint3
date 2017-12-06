import EmailService from '../services/EmailService.js'
import MailsList from '../comps/mailComps/MailsList.js'
import MailMenu from '../comps/mailComps/MailMenu.js'

export default {
    template: `
        <section class="emailContainer">
        <h1>mail</h1>
            <mail-menu  @getInbox="sortByDate()"></mail-menu>
            <mails-list :emails="emails" ></mails-list>
        </section>
    `,
    data() {
        return {
            emails: null
        }
    },
    methods: {
        sortByDate(){
            console.log('DONE')
            EmailService.sortByDate()
            .then(emails => {
                this.emails = emails;
            })
        },
    },
    created() {
        this.sortByDate()
    },
    components: {
        MailsList,
        MailMenu
    }
}