import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="placesList" v-if="showList"> 
                
            <input placeholder="🔎 search" class="searchInput" @keydown="searchPlace" type="text">
            
            <div class="place" @mouseover="placeHoverd" @click="placeClicked(place)" v-for="(place,idx) in places">
            <h3>{{place.name}}</h3>
            <h3 class="removePlace" @click="removePlace(place.id)"><i class="fa fa-times" aria-hidden="true"></i></h3>
            </div>
            
        </section>
    `,
    data() {
        return {
            places: [],
            showList: true
        }
    },
    methods: {
        searchPlace(evt) {
            if (evt.keyCode === 13) MapService.search();
        },
        placeClicked(place) {
            MapService.initMap(place.lat, place.lang);
            this.showList = false;
            this.$emit('placeClicked',place);
        },
        removePlace(id) {
            MapService.deletePlace(id);
        },
        placeHoverd() {

        }
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