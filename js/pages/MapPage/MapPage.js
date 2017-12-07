import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="mapPageContainer">
        <div class="locationsContanier">
        <input placeholder="🔎 search" class="searchInput" @keydown="searchPlace" type="text">
        </div>
        <div class="map">
        
        </div>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        searchPlace(evt){
            if(evt.keyCode === 13) MapService.search();
        }
    },
    mounted() {
        MapService.initMap(32.085300,34.781768);
    }
}