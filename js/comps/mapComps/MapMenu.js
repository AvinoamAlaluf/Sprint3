import MapService from '../../services/MapService.js';
import PlaceShow from './PlaceShow.js'

export default {
    template: `
        <section class="placesContanier">
        
        
        <div class="placesList">

            <place-show v-if="false"></place-show>

            <div >
                <input placeholder="🔎 search" class="searchInput" @keydown="searchPlace" type="text">                
                <div class="place" @mouseover="placeHoverd" @click="placeClicked(place)" v-for="(place,idx) in places">
                    <h3>{{place.name}}</h3>
                    <h3 class="removePlace" @click="removePlace(place.id)"><i class="fa fa-times" aria-hidden="true"></i></h3>
                </div>
            </div>
        </div>

        
        </section>
    `,
    data() {
        return {
            places: []
        }
    },
    methods: {
        searchPlace(evt) {
            if (evt.keyCode === 13) MapService.search();
        },
        placeClicked(place) {
            MapService.initMap(place.lat, place.lang)
        },
        removePlace(id) {
            MapService.deletePlace(id);
        },
        placeHoverd() {

        }
    },
    components: {
        PlaceShow
    },
    mounted() {

    },
    created() {
        MapService.getPlaces()
            .then(places => {
                this.places = places;
            })
    }
}