import EmailService from '../../services/EmailService.js'

export default {
    template: `
        <section class="emailListContainer">
        
        <table class="emailList">
            <tr class="email" v-for="(email, idx) in emails">
                <td>{{email.from}}</td>
                <td>{{email.subject}}</td>
                <td>{{email.sentAt}}</td>
            </tr>
        </table>

        </section>
    `,
    data() {
        return {
         emails: []
        }
    },
    methods: {
      
    },
    created() {
        EmailService.getEmails()
        .then(emails => {
            this.emails = emails;
        })
    }
}