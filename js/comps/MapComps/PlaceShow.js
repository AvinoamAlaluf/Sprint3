import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="placesContanier">        
        <img :src="placeToShow.imgs"/>
            <h2>{{placeToShow.name}}</h2>
            <label>{{placeToShow.description}}</label>
            <label>Tags: <span v-for="tag in placeToShow.tags"> {{tag}} </span></label>
        </section>
    `,
    data() {
        return {
            placeToShow: {}
        }
    },
    methods: {
        getPlaceToShow(){
            MapService.getPlace(1).then(foundPlace => {
                this.placeToShow = foundPlace;
                console.log(foundPlace);
            }).catch(console.log('Service couldnt get required place'))
        }
    },
    mounted() {

    },
    created() {
        this.getPlaceToShow()
        console.log('JSDFJSDFJSDFJSDFJJSDFJJSDFJJSDFJJ');   
    }
}