import NotesService from '../../services/NotesService.js';

export default {
    template: `
        <section >
           <div class="myNote">

                <div class="closeNoteBox"><i @click="closeNote" class="fa fa-times closeNote" aria-hidden="true"></i></div>
           
                <div class="myNoteContent">
                <input v-model="noteToUpdate.title" class="myNoteTitle" type="text" >
                <input v-model="noteToUpdate.text" class="myNoteText" type="text" >
                <input v-model="noteToUpdate.dateOfCreation" class="myNoteDate" type="text" >
                </div>

           </div>
        </section>
    `,
    data() {
        return {
            noteId: +this.$route.params.id,
            myNote: {},
            noteToUpdate: {}
        }
    },
    methods: {
        closeNote() {
            this.saveNote();
            this.$router.push('/notes');
        },
        saveNote() {
            console.log('this.noteToUpdate', this.noteToUpdate);
            if (this.noteToUpdate.title==='Enter title' || this.noteToUpdate.text==='Enter text' ) {
                return;
            }
            NotesService.saveNote(this.noteToUpdate, this.noteId);
            console.log(this.noteToUpdate);
        }
    },
    created() {
        console.log('myNote: ', this.$route.params.id);
        if (!this.noteId) {
            this.myNote = NotesService.emptyNote();
            this.noteToUpdate = this.myNote;
        } else {
            NotesService.getNote(this.noteId)
                .then((note) => {
                    this.myNote = note;
                    this.noteToUpdate = this.myNote;
                })
        }
    }
}