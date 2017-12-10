import MapService from '../../services/MapService.js';
import PlaceShow from './PlaceShow.js'
import PlaceList from './PlaceList.js'
import PlaceEdit from './PlaceEdit.js'

export default {
    template: `
        <section class="placesContanier">
        
        
        <div class="placesDiv"  >
            
            <place-show @exitPlace="exitPlace" :placeToShow="placeToShow" v-if="showDetails"></place-show>
            <place-edit v-if=false></place-edit>
            <place-list @placeClicked="showPlace" v-if="!showDetails"></place-list>

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
        showPlace(place) {
            this.placeToShow = place;
            this.showDetails = true;
        },
        exitPlace(){
            this.showDetails = false;
        }
    },
    components: {
        PlaceShow,
        PlaceList,
        PlaceEdit
    },
    mounted() {

    },
    created() {
    }
}