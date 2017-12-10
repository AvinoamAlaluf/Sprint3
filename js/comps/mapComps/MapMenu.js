import MapService from '../../services/MapService.js';
import PlaceShow from './PlaceShow.js'
import PlaceList from './PlaceList.js'
import PlaceEdit from './PlaceEdit.js'
import AddPlace from './AddPlace.js'

export default {
    template: `
        <section class="placesContanier">
        
        
        <div class="placesDiv"  >
            
<<<<<<< HEAD
            <place-show @editPlace="editPlace" @exitPlace="exitPlace" :placeToShow="placeToShow" v-if="showDetails"></place-show>
            <place-edit @exitEdit="exitEdit" v-if="showEdit"></place-edit>
            <add-place v-if="false"></add-place>
            <place-list @placeClicked="showPlace" v-if="showList"></place-list>
=======
            <place-show @editPlace="editPlace" @exitPlace="exitPlace" :placeToShow="placeToShow" v-if="false"></place-show>
            <place-edit @exitEdit="exitEdit" v-if="false"></place-edit>
            <add-place v-if="true"></add-place>
            <place-list @placeClicked="showPlace" v-if="false"></place-list>
>>>>>>> 1c232a5f293a587c3970b2f632e779b8afbe447b
            

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