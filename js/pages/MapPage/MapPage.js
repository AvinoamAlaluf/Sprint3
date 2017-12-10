import MapService from '../../services/MapService.js';
import MapMenu from '../../comps/MapComps/MapMenu.js';


export default {
    template: `
        <section class="mapPageContainer">
        
        <map-menu></map-menu>

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
    },
    components: {
        MapMenu
    }
}