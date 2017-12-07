import EmailService from '../../services/EmailService.js'

export default {
    template: `
        <section >

        <div id="popup1" class="overlay">
            <div class="popup">
                <h2>New Mail</h2>
                <a class="close" @click="closeCompose">&times;</a>
                <form class="content" @submit="submitClicked" >
                    
                        <input type="text" placeholder="To:" v-model="newMail.composeTo" >
                        <input type="text" placeholder="Subject" v-model="newMail.composeSubject" >
                        <textarea placeholder="Enter text" v-model="newMail.composeText"></textarea  >
                        <button @click="submitClicked">Submit</button>
                </form>
            </div>
        </div>

        </section>
    `,
    data() {
        return {
         
            newMail:{composeTo:'',composeSubject:'',composeText:''}
        }
    },
    methods: {
        closeCompose(){
            this.$router.push('/mail')
        },
        submitClicked(){
            event.preventDefault()
            console.log(this.newMail);
            this.$emit('newMail',this.newMail)
            this.$router.push('/mail')
        }
    },
    created() {
        
    },
    components: {
      
    }
}