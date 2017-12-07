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
                @clickedMarked="filterMarked"
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

            
            <mail-compose v-if="showMailCompose"  @newMail="sendEmail" :selectedMail="selectedMail"></mail-compose>
        </section>
    `,
    data() {
        return {
            emails: null,
            sortedBySender: false,
            sortedByDate: true,
            showMailCompose: false,
            selectedMail: null
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
        sortBySender() {
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
        readMail(id) {
            // debugger;
            EmailService.showMail(id);
            EmailService.getMail(id).then(email => this.selectedMail = email);
            this.showMailCompose = true;
            this.$router.push('/mail/' + id)
        },
        filterBySent() {
            EmailService.getSentEmails().then(emails => {
                this.emails = emails;
                console.log('emails: ', emails);
            })
        },
        startSearching(valueToSearch) {
            EmailService.search(valueToSearch).then(refinedEmails => this.emails = refinedEmails)
                .catch(err => console.log('SERVICE ERROR: ', err))
        },
        filterRead() {
            EmailService.getReadEmails()
                .then(emails => {
                    this.emails = emails;
                })
        },
        filterUnread() {
            EmailService.getUnreadEmails()
<<<<<<< HEAD
            .then(emails => {
                this.emails = emails;
            })
        }, 
        filterMarked(){
            EmailService.getMarkedEmails()
            .then(emails => {
                this.emails = emails;
            })
        }, 
        sendEmail(newMail){
=======
                .then(emails => {
                    this.emails = emails;
                })
        },
        sendEmail(newMail) {
>>>>>>> ccbce0bc537bd8d38d6cc632136d3f4c9c9e2600
            EmailService.emptyMail()
                .then(emptyMailObj => {
                    emptyMailObj.to = newMail.composeTo;
                    emptyMailObj.subject = newMail.composeSubject;
                    emptyMailObj.text = newMail.composeText;
                    EmailService.addMail(emptyMailObj)
                        .then(console.log('Success Indeed'))
                        .catch(console.log('What a Failure'))
                }).catch(() => console.log('Service failed to Get New Mail Obj'))
        },
    },
    watch: {
        '$route'(to, from) {
            var id = this.$route.params.id;
            var isCompose = this.$route.path === '/mail/compose';
            var id = this.$route.params.id;
            if (id || isCompose) {
                this.showMailCompose = true
            }
            else this.showMailCompose = false
        }
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