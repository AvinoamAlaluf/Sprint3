import EmailService from '../../services/EmailService.js'
import MailsList from '../../comps/mailComps/MailsList.js'
import MailMenu from '../../comps/mailComps/MailMenu.js'
import MailToolbar from '../../comps/mailComps/MailToolBar.js'
import MailCompose from './MailCompose.js'


export default {
    template: `
        <section class="emailContainer">

            <mail-menu   @sentClick="filterBySent" @inboxClick="sortByDate"></mail-menu>
            <div class="emailRightSection">
                <mail-toolbar  
                @clickedRead="filterRead"
                @clickedUnread="filterUnread"
                @clickedAll="sortByDate"
                @searchEvent="startSearching">
                </mail-toolbar>
                
                <mails-list 
                @dateClicked="sortByDateEndRevrse" 
                @mailClicked="readMail" 
                @fromClicked="sortBySender" 
                :emails="emails" >
                </mails-list>
            </div>

            
            <mail-compose v-if="showMailCompose"></mail-compose>
        </section>
    `,
    data() {
        return {
            emails: null,
            sortedBySender: false,
            sortedByDate: true,
            showMailCompose: false
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
        readMail(id){
            EmailService.showMail(id);
        },
        filterBySent(){
            EmailService.getSentEmails().then(emails =>{
                this.emails = emails;
                console.log('emails: ',  emails);
            })
        },
        startSearching(valueToSearch){
            EmailService.search(valueToSearch).then(refinedEmails => this.emails = refinedEmails)
            .catch(err=> console.log('SERVICE ERROR: ',err ))
        },
        filterRead(){
            EmailService.getReadEmails()
            .then(emails => {
                this.emails = emails;
            })
        },
        filterUnread(){
            EmailService.getUnreadEmails()
            .then(emails => {
                this.emails = emails;
            })
        }

    },

    beforeUpdate(){
        var route = this.$route.path;
        if (route === '/mail/compose') this.showMailCompose = true; 
        else this.showMailCompose = false;
    },
    created() {
        this.sortByDate()
    },
    components: {
        MailsList,
        MailMenu,
        MailToolbar,
        MailCompose
    }
}