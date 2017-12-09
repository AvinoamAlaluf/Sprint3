import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="placeToEdit">        
            <label>Title:</label>
            <input  :value="placeToEdit.name" ></input>
            <label>Edit Images:</label>
            <div>
                <img :src="placeToEdit.imgs"/>
            </div>
            <div class="imgArrows">
                <a><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></a>
                <a><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></a>
            </div>
            <label>Edit Description:</label>
            <input :value="placeToEdit.description"></input>
            
            Tag: <span> {{placeToEdit.tag}} </span>
            <div class="select">
                <select>
                <option selected disabled hidden>{{placeToEdit.tag}}</option>
                    <option value="1">Restuarant</option>
                    <option value="2">Hotel</option>
                    <option value="3">Gas Station</option>
                    <option value="4">Parking Lot</option>
                    <option value="5">Cemetery</option>
                </select>
                <div class="select_arrow">
                </div>
            </div>

        </section>
    `,
    data() {
        return {
            placeToEdit: {}
        }
    },
    methods: {
        getplaceToEdit(){
            MapService.getPlace(1).then(foundPlace => {
                this.placeToEdit = foundPlace;
                console.log(foundPlace);
            }).catch(console.log('Service couldnt get required place'))
        }
    },
    mounted() {

    },
    created() {
        this.getplaceToEdit()
    }
}