import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="placeToEdit">   
            <label>Title:</label>
            <input  v-model="placeToAdd.name"></input>
            <label>Edit Images:</label>
            <div>
                <img :src="placeToAdd.imgs"/>
            </div>
            <div class="imgArrows">
                <a><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></a>
                <a><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></a>
            </div>
            <label>Edit Description:</label>
            <input v-model="placeToAdd.description"></input>
            
            Tag: 
            <div class="select">
                <select v-model="placeToAdd.tag">
                    <option>Restuarant</option>
                    <option>Hotel</option>
                    <option>Gas Station</option>
                    <option>Parking Lot</option>
                    <option>Cemetery</option>
                </select>
                <div class="select_arrow"></div>
            </div>
            <button class="exitEdit" @click="saveNewPlace()">Save</button>

        </section>
    `,
    data() {
        return {
            placeToAdd: {}
        }
    },
    methods: {
        getEmptyPlace() {
            MapService.emptyPlace()
                .then(emptyPlaceObj => {
                    this.placeToAdd = emptyPlaceObj;
                    console.log('EMPTY', this.placeToAdd);
                    this.placeToAdd = {};//claering the Obj
                })
                .catch(console.log('Service Coulndnt get an empty Template'));
        },

        exitEdit() {
            this.$emit('exitEdit');//need to add the bind when calling PLACEADD comp
        },
        saveNewPlace() {
            MapService.addPlace(this.placeToAdd)
                .then(console.log('Place Added To Service', this.placeToAdd))                
        }
    },
    created() {
        this.getEmptyPlace()
    }
}