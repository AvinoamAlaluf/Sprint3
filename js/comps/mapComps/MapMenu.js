import MapService from '../../services/MapService.js';
import PlaceShow from './PlaceShow.js'
import PlaceList from './PlaceList.js'
import PlaceEdit from './PlaceEdit.js'
import AddPlace from './AddPlace.js'

export default {
    template: `
        <section class="placesContanier">
        
        
        <div class="placesDiv"  >
            
            <place-show @editPlace="editPlace" @exitPlace="exitPlace" :placeToShow="placeToShow" v-if="false"></place-show>
            <place-edit @exitEdit="exitEdit" v-if="false"></place-edit>
            <add-place v-if="true"></add-place>
            <place-list @placeClicked="showPlace" v-if="false"></place-list>
            

        </div>
        

        
        </section>
    `,
    data() {
        return {
            placeToShow: {},
            showDetails: false,
            showList: true,
            showEdit: false
        }
    },
    methods: {
        showPlace(place) {
            this.placeToShow = place;
            this.showDetails = true;
            this.showList = false;
        },
        exitPlace(){
            this.showDetails = false;
            this.showList = true;
        },
        editPlace(){
            this.showDetails = false;
            this.showEdit = true;
        },
        exitEdit(){
            this.showDetails = true;
            this.showEdit = false;
        }
    },
    components: {
        PlaceShow,
        PlaceList,
        PlaceEdit,
        AddPlace
    },
    mounted() {

    },
    created() {
    }
}