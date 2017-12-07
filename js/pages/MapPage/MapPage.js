import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="mapPageContainer">
        <div class="locationsContanier">
        
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

    },
    mounted() {
        MapService.initMap(32.085300,34.781768);
    }
}