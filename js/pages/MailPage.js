import EmailService from '../services/EmailService.js'
import MailsList from '../comps/mailComps/MailsList.js'
import MailMenu from '../comps/mailComps/MailMenu.js'

export default {
    template: `
        <section class="emailContainer">
<<<<<<< HEAD
            <mail-menu></mail-menu>
            <div class="emailRightSection">
            <mails-list></mails-list>
            </div>
=======
        <h1>mail</h1>
            <mail-menu  @getInbox="sortByDate()"></mail-menu>
            <mails-list :emails="emails" ></mails-list>
>>>>>>> 34dd7906387df7a25b4859ed3f6e1c28085286c9
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