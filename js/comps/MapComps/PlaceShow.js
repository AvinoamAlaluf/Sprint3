import MapService from '../../services/MapService.js';

export default {
    template: `
        <section class="placeToShow">      
        
        <div class="placeTop">
                <div class="exitPlace" @click.stop="exitPlace"><i class="fa fa-arrow-left" aria-hidden="true"></i></div> 
                <div class="editPlace" @click.stop="editPlace"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>                
        </div>
        
        </div>
        
            <h2>{{placeToShow.name}}</h2>
            <div class="placeImg">
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
            
        }
    },
    methods: {
        getPlaceToShow(){
            let id = this.placeToShow.id;
            MapService.getPlace(id).then(foundPlace => {
                this.placeToShow = foundPlace;
                console.log(foundPlace);
            }).catch(console.log('Service couldnt get required place'))
        },
        exitPlace(){
            this.$emit('exitPlace');            
        },
        editPlace(){
            this.$emit('editPlace'); 
        }
    },
    mounted() {

    },
     props: {
        placeToShow: Object
     },
    created() {  
        this.getPlaceToShow();
    }
}

