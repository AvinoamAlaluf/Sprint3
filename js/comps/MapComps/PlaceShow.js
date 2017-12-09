import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="placeToShow">        
            
            <h2>{{placeToShow.name}}</h2>
            <div>
                <img :src="placeToShow.imgs"/>
            </div>
            <div class="imgArrows">
                <a><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></a>
                <a><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></a>
            </div>
            <label>{{placeToShow.description}}</label>
            <label>Tag:# <span> {{placeToShow.tag}} </span></label>
        </section>
    `,
    data() {
        return {
            placeToShow: {}
        }
    },
    methods: {
        getPlaceToShow(){
            MapService.getPlace(1).then(foundPlace => {
                this.placeToShow = foundPlace;
                console.log(foundPlace);
            }).catch(console.log('Service couldnt get required place'))
        }
    },
    mounted() {

    },
    created() {
        this.getPlaceToShow()
        console.log('JSDFJSDFJSDFJSDFJJSDFJJSDFJJSDFJJ');   
    }
}