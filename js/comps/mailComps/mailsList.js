import EmailService from '../../services/EmailService.js'

export default {
    template: `
        <section class="emailList">
        
            <ul class="email emailListHeader">
                <li @click="sortBySender">From</li>
                <li>Subject</li>
                <li @click="sortByDate">Date</li>
            </ul>
            <ul class="email" v-for="(email, idx) in emails">
                <li>{{email.from}}</li>
                <li>{{email.subject}}</li>
                <li>{{email.sentAt}}</li>
            </ul>
        

        </section>
    `,
    data() {
        return {
         emails: [],
         sortedBySender: false,
         sortedByDate: false
        }
    },
    methods: {
        sortByDate(){
            this.sortedByDate=!this.sortedByDate
            if (this.sortedByDate){
            EmailService.sortByDate()
            .then(emails => {
                this.emails = emails;
            })
        }else{
            EmailService.sortByLateDate()
            .then(emails => {
                this.emails = emails;
            })
        }
        },

        sortBySender(){
            this.sortedBySender=!this.sortedBySender
            if (this.sortedBySender){
                EmailService.sortBySender()
            .then(emails => {
                this.emails = emails;
            })
            }else{
                this.sortByDate()
            }
            
        }
    },
    created() {
        this.sortByDate()
    }
}