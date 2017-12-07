import EmailService from '../../services/EmailService.js'

export default {
    template: `
        <section class="emailList">
        
            <ul class="email emailListHeader">
                <li class="favorite"></li>
                <li @click="fromClicked">From</li>
                <li>Subject</li>
                <li @click="dateClicked">Date</li>
            </ul>
            <ul @click="mailClicked(email.id)" class="email" :class="{'readed' : email.read}" v-for="(email, idx) in emails">
                <li class="favorite" ><i class="fa fa-star" aria-hidden="true"></i></li>
                <li>{{email.from}}</li>
                <li>{{email.subject}}</li>
                <li>{{email.sentAt}}</li>
            </ul>
        

        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        dateClicked() {
            this.$emit('dateClicked');
        },

        fromClicked() {
            this.$emit('fromClicked');
        },
        mailClicked(id){
            this.$emit('mailClicked',id);
        }
    },
    created() {
        // this.sortByDate()
    },
    props: {
        emails: Array,
        sortedBySender: Boolean,
        sortedByDate: Boolean
    }
}