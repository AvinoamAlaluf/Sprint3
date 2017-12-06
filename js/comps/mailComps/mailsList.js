import EmailService from '../../services/EmailService.js'

export default {
    template: `
        <section class="emailList">
        
            <ul class="email emailListHeader">
                <li @click="fromClicked">From</li>
                <li>Subject</li>
                <li @click="dateClicked">Date</li>
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
<<<<<<< HEAD
            sortedBySender: false,
            sortedByDate: true
=======

>>>>>>> dd3970a6e263b0d8f78a5211c0644b42eb1551ac
        }
    },
    methods: {
        dateClicked() {
            this.$emit('dateClicked');
        },

        fromClicked() {
            this.$emit('fromClicked');
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