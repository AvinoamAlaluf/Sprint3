import EmailService from '../../services/EmailService.js'

export default {
    template: `
        <section class="emailList">
        
            <ul class="email emailListHeader">
                <li @click="sortBySender">From</li>
                <li>Subject</li>
                <li>Date</li>
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
        //  emails1: [],//NEED CAHINGIN GHT NAME 
         sortedBySender: false
        }
    },
    methods: {
        sortByDate(){
            EmailService.sortByDate()
            .then(emails => {
                this.emails = emails;
            })
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
        // this.sortByDate()
    },
    props:{
        emails:Array
    }
}