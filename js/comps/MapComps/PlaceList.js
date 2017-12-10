import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="placesList" v-if="showList"> 
            
            <div class="placesListTop">
            <input placeholder="🔎 search in map" class="searchInput" @keydown="searchPlace" type="text" v-if="isOnLocationSearch">
            <input placeholder="🔎 search in saved locations" class="searchInput" @keydown="" type="text" v-if="!isOnLocationSearch">
            <a @click="startRoutningToAdd"><i v-if="showAddPlace" class="fa fa-plus" aria-hidden="true"></i></a>            
            </div>
            
           <div class="radioSearch">
                <input   v:model="radioSearch" class="radio" type="radio" id="f-option" name="selector" value="list" @click="changeSearchInput('list')">
                <label  for="f-option">search in my places</label>
                
                <input checked v:model="radioSearch" class="radio" id="s-option" type="radio" name="selector" value="map" @click="changeSearchInput('map')">
                <label for="s-option">search for new place</label>
   
           </div>
          
            
            <div class="place" @mouseover="placeHoverd" @click="placeClicked(place)" v-for="(place,idx) in places">
            <h3>{{place.name}}</h3>
            <h3 class="removePlace" @click.stop="removePlace(place.id)"><i class="fa fa-times" aria-hidden="true"></i></h3>
            </div>
            
        </section>
    `,
    data() {
        return {
            places: [],
            showList: true,
            showAddPlace: false,
            radioSearch: '', 
            isOnLocationSearch :true
        }
    },
    methods: {
        searchPlace(evt) {
            if (evt.keyCode === 13){
                MapService.search();
                this.showAddPlace = true;
            } 
        },
        placeClicked(place) {
            // console.log(place);
            MapService.initMap(place.lat, place.lang);
            this.showList = false;
            this.$emit('placeClicked',place);
        },
        removePlace(id) {
            MapService.deletePlace(id);
        },
        placeHoverd() {

        },
        changeSearchInput(value){
            if (value === 'map') {
                this.isOnLocationSearch = true;    
            }else{
                this.isOnLocationSearch = false;
            }
        },
        startRoutningToAdd(){
            this.$emit('routeToAdd')
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