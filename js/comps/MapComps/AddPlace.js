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
            <label>Description:</label>
            <input v-model="placeToAdd.description"></input>
            <label>Images:</label>
            <div>
                <input v-model="imgToAdd"></input><a @click="addImgToObjArr"><i class="fa fa-plus" aria-hidden="true"></i></a>
            </div>
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
            placeToAdd: {},
            imgToAdd: ''
        }
    },
    methods: {
        getEmptyPlace() {
            MapService.emptyPlace()
                .then(emptyPlaceObj => {
                    this.placeToAdd = emptyPlaceObj;
                    console.log('EMPTY', this.placeToAdd);
                })
                .catch(console.log('Service Coulndnt get an empty Template'));
        },

        exitEdit() {
            this.$emit('exitEdit');//need to add the bind when calling PLACEADD comp
        },
        saveNewPlace() {
            this.placeToAdd.imgs = this.imgsToAdd;

            MapService.addPlace(this.placeToAdd)
                .then(()=>{
                    this.placeToAdd = {};
                    this.$emit('addedPlace');
                })
        },
        addImgToObjArr() {
            if (!this.imgToAdd) return;
            this.placeToAdd.imgs.push(this.imgToAdd);
            this.imgToAdd = '';
        }
    },
    created() {
        this.getEmptyPlace()
    }
}