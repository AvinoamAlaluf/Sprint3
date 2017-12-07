import EmailService from '../../services/EmailService.js'

export default {
    template: `
        <section >

        <div id="popup1" class="overlay">
            <div class="popup">
                <h2>New Mail</h2>
                <a class="close" @click="closeCompose">&times;</a>
                <form class="content">
                    
                        <input type="text" placeholder="To:">
                        <input type="text" placeholder="Subject">
                        <textarea placeholder="Enter text"></textarea>
                        <button @click="sendMail">Submit</button>
                </form>
            </div>
        </div>

        </section>
    `,
    data() {
        return {
         
            
        }
    },
    methods: {
        closeCompose(){
            this.$router.push('/mail')
        },
        sendMail(){
            EmailService.sendMail();
            this.$router.push('/mail')
        }
    },
    created() {
        
    },
    components: {
      
    }
}