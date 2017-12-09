import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="placeToShow">        
            
            <h2>{{localPlaceToShow.name}}</h2>
            <div>
                <img :src="localPlaceToShow.imgs"/>
            </div>
            <div class="imgArrows">
                <a><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></a>
                <a><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></a>
            </div>
            <label>{{localPlaceToShow.description}}</label>
            <label>Tag:# <span> {{localPlaceToShow.tag}} </span></label>
        </section>
    `,
    data() {
        return {
            localPlaceToShow : {}
        }
    },
    methods: {
        getPlaceToShow(){
            let id = placeToShow.id;
            console.log(id);
            MapService.getPlace(id).then(foundPlace => {
                this.localPlaceToShow = foundPlace;
                console.log(foundPlace);
            }).catch(console.log('Service couldnt get required place'))
        }
    },
    mounted() {

    },
     props: {
        placeToShow: Object
     },
    created() {
        this.getPlaceToShow()
        console.log('JSDFJSDFJSDFJSDFJJSDFJJSDFJJSDFJJ');   
    }
}

