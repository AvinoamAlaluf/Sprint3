import EmailService from '../services/EmailService.js'
import MailsList from '../comps/mailComps/MailsList.js'
import MailMenu from '../comps/mailComps/MailMenu.js'

export default {
    template: `
        <section class="emailContainer">

            <mail-menu   @sentClick="filterBySent" @inboxClick="sortByDate"></mail-menu>
            <div class="emailRightSection">
                <mails-list @dateClicked="sortByDateEndRevrse" @fromClicked="sortBySender" :emails="emails" ></mails-list>
            </div>

        </section>
    `,
    data() {
        return {
            emails: null,
            sortedBySender: false,
            sortedByDate: false
        }
    },
    methods: {
        sortByDate() {
            console.log('DONE')
            EmailService.sortByDate()
                .then(emails => {
                    this.emails = emails;
                })
        },
        sortByDateEndRevrse() {
            this.sortedByDate = !this.sortedByDate
            if (this.sortedByDate) {
                EmailService.sortByDate()
                    .then(emails => {
                        this.emails = emails;
                    })
            } else {
                EmailService.sortByLateDate()
                    .then(emails => {
                        this.emails = emails;
                    })
            }
        },
        sortBySender(){
            this.sortedBySender = !this.sortedBySender
            if (this.sortedBySender) {
                EmailService.sortBySender()
                    .then(emails => {
                        this.emails = emails;
                    })
            } else {
                this.sortByDate()
            }
        },
        filterBySent(){
            EmailService.getSentEmails().then(emails =>{
                this.emails = emails;
                console.log('emails: ',  emails);
            })
        }

    },
    created() {
        this.sortByDate()
    },
    components: {
        MailsList,
        MailMenu
    }
}