import EmailService from '../../services/EmailService.js'

export default {
    template: `
        <section class="emailMenu">
            <div class="menuContainer">
                <ul>
                    <li @click="routeToCompose"><i class="fa fa-plus-circle" aria-hidden="true"></i></li>
                    <li @click="getInbox"><span>Inbox</span></li>
                    <li><span>Sent</span></li>
                </ul>
            </div>
        </section>
    `,
    data() {
        return {
            
        }
    },
    methods: {
        getInbox(){
            console.log('hi');
            this.$emit('getInbox')
        },
        routeToCompose(){
            this.$router.push('/mail/compose')
        },
        sortByDate(){
            EmailService.sortByDate()
            .then(emails => {
                this.emails = emails;
            })
        },

    },
    created() {
        
    }
}