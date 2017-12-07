import NotesService from '../../services/NotesService.js';

export default { template: `
   <section class="notesBoard">
                 
               <div class="note" v-for="(note, idx) in notes" @click="openMyNote(note.id)">
                   <h3>{{note.title}}</h3>
                   <div class="deleteIcon"><i @click.stop="deleteNote(note.id)" class="fa fa-trash-o" aria-hidden="true"></i>
                   </div>                    
               </div>
               <div @click="openNewNote" class="addIcon"><i class="fa fa-plus" aria-hidden="true"></i></div>
   </section>

`, data() { 
   return { 
       notes: [] 
   } 
},
created() {
    NotesService.query()
       .then((notes)=>{
           this.notes = notes;
       })
},
methods: { 
   openMyNote(id){
       this.$router.push('/notes/mynote/' + id + '/edit')
   },
   openNewNote(id){
       this.$router.push('/notes/mynote/add')
   },
   deleteNote(id){
    NotesService.deleteItem(id);
   }
} 
}