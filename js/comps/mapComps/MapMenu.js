import MapService from '../../services/MapService.js';
import PlaceShow from './PlaceShow.js'
import PlaceList from './PlaceList.js'

export default {
    template: `
        <section class="placesContanier">
        
        
        <div class="placesDiv"  >
            
            <place-show v-if="showDetails"></place-show>
            <place-list @placeClicked="showPlace"></place-list>

        </div>
        

        
        </section>
    `,
    data() {
        return {
           placeToShow: {},
           showDetails: false
        }
    },
    methods: {
        showPlace(place){
            this.placeToShow = place;
            this.showDetails = true;
        }
    },
    components: {
        PlaceShow,
        PlaceList
    },
    mounted() {

    },
    created() {
        
}
}