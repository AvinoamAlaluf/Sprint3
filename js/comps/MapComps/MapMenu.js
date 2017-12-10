import MapService from '../../services/MapService.js';
import PlaceShow from './PlaceShow.js'
import PlaceList from './PlaceList.js'
import PlaceEdit from './PlaceEdit.js'
import AddPlace from './AddPlace.js'

export default {
    template: `
        <section class="placesContanier">
        
        
        <div class="placesDiv"  >
            
            <place-show @editPlace="editPlace" @exitPlace="exitPlace" :placeToShow="placeToShow" v-if="showDetails"></place-show>
            <place-edit @exitEdit="exitEdit" v-if="showEdit" :placeToShow="placeToShow"></place-edit>
            <add-place @addedPlace="exitAdd" v-if="isShowAdd"></add-place>
            <place-list @routeToAdd="showAdd" @placeClicked="showPlace" v-if="showList"></place-list>
            

        </div>
        

        
        </section>
    `,
    data() {
        return {
            placeToShow: {},
            showDetails: false,
            showList: true,
            showEdit: false,
            isShowAdd: false,
        }
    },
    methods: {
        showPlace(place) {
            this.placeToShow = place;
            this.showDetails = true;
            this.showList = false;
        },
        exitPlace() {
            this.showDetails = false;
            this.showList = true;
        },
        editPlace() {
            this.showDetails = false;
            this.showEdit = true;
        },
        exitEdit() {
            this.showDetails = true;
            this.showEdit = false;
        },
        showAdd() {
            console.log('SHOWADD INSIDEEEEEE');
            this.isShowAdd = true;
            this.showList = false;
        },
        exitAdd() {
            console.log('SHOWADD INSIDEEEEEE');
            this.isShowAdd = false;
            this.showList = true;
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