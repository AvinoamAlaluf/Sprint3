export default {
    created() {
        // console.log('Mixin is Here!');
    },
    data() {
        return {
            
        }
    },
    methods: {
        navigateToHome(){
            this.$router.push('/');
        },
        navigateToMail(){           
            this.$router.push('/mail')
        },
        navigateToNotes(){
            this.$router.push('/notes')
        },
        navigateToMap(){
            this.$router.push('/map')
        }
    }
}