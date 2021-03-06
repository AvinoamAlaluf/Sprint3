import MapService from '../../services/MapService.js';

export default {
    template: `
        <section v-if="placeToEdit" class="placeToEdit" >   
            <label>Title:</label>
            <input  v-model="placeToEdit.name"></input>
            <label>Edit Images:</label>
            <div v-if="false">
                <input> :src="placeToEdit.imgs"</>
            </div>
        
            <label>Edit Description:</label>
            <input v-model="placeToEdit.description"></input>
            
            Tag: 
            <div class="select">
                <select :class="placeToEdit.marker" v-model="placeToEdit.tag">
                    <option selected disabled hidden>{{placeToEdit.tag}}</option>
                    <option class="orange">Restuarant</option>
                    <option class="green">Hotel</option>
                    <option class="blue">Gas Station</option>
                    <option class="purple">Parking Lot</option>
                    <option class="red">Cemetery</option>
                </select>
                <div class="select_arrow"></div>
            </div>
            <button class="exitEdit" @click="saveEditedItem(placeToEdit)">Save</button>

        </section>
    `,
    data() {
        return {
            placeToEdit: null
        }
    },
    props: {
        placeToShow: Object
    },
    methods: {
        getplaceToEdit() {
            MapService.getPlace(this.placeToEdit.id).then(foundPlace => {
                this.placeToEdit = foundPlace;
                console.log(foundPlace);
            }).catch(console.log('Service couldnt get required place'))
        },
        exitEdit() {
            this.$emit('exitEdit');
        },
        saveEditedItem(placeToEdit) {
            MapService.savePlace(placeToEdit)
                .then(sericeResp => console.log('Service Respond To Update: ', sericeResp))
                .catch(sericeResp => console.log('Service Respond To Update: ', sericeResp))
            this.exitEdit();

        }
    },
    mounted() {

    },
    created() {
        this.placeToEdit= JSON.parse(JSON.stringify(this.placeToShow));
        this.getplaceToEdit()
        

    },
    updated() {
        console.log(this.placeToEdit);
        // console.log(this.selected);
    }
}