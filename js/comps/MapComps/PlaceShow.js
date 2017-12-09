import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="placesContanier">        
            <img :src="placeToShow.imgs[0]"/>
            <h2>placeToShow.name</h2>
            <label>placeToShow.description</label>
            <label>Tags: <section v-for="tag in placeToShow.tags"></section></label>
        </section>
    `,
    data() {
        return {
            placeToShow: null
        }
    },
    methods: {
        getPlaceToShow(){
            MapService.getPlace(id).then(foundPlace => {
                this.placeToShow = foundPlace;
            }).catch(console.log('Service couldnt get required place'))
        }
    },
    mounted() {

    },
    created() {
        placeToShow()
    }
}