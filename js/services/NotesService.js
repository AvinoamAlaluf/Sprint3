const notes = [{
    id: 0,
    title: 'avinoam',
    text: 'avinoam',
    image: 'avinoam',
    color: 'avinoam',
    priority: 'avinoam',
    dateOfCreation: '01/02/2017',
},
{
   id: 1,
   title: 'avi',
   text: 'avinoam',
   image: 'avinoam',
   color: 'avinoam',
   priority: 'avinoam',
   dateOfCreation: '01/02/2017',
},
{
   id: 2,
   title: 'noam',
   text: 'avinoam',
   image: 'avinoam',
   color: 'avinoam',
   priority: 'avinoam',
   dateOfCreation: '01/02/2017',
},
{
   id: 3,
   title: 'sandwichnoam',
   text: 'avinoam',
   image: 'avinoam',
   color: 'avinoam',
   priority: 'avinoam',
   dateOfCreation: '01/02/2017',
},
{
   id: 4,
   title: 'kill avinoam',
   text: 'avinoam',
   image: 'avinoam',
   color: 'avinoam',
   priority: 'avinoam',
   dateOfCreation: '01/02/2017',
},
]

function query() {
   return new Promise((resolve, reject)=>{
       // setTimeout(()=>{resolve(notes)}, 1000)
       resolve(notes);
   });
   // return Promise.reject();
   // return Promise.resolve(notes);
}

function emptyNote() {
   var emptyNote = {id: _getNextId(), title: 'Enter title', text: 'Enter text', dateOfCreation: _getDate()};
   console.log(emptyNote);
   return emptyNote;
}

function _getNextId() {
   var maxId = notes.reduce((acc, note)=>{
       return (note.id > acc)? note.id : acc
   }, 0);
   return maxId + 1;
} 

function _getDate() {
       var result='';
       var d = new Date();
       result += d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()
       return result;
}

function getNote(id) {
   return new Promise((resolve, reject)=>{
       var foundNote = notes.find(note => note.id === id);
       resolve(foundNote);
   });
}

function saveNote(newContent,id){
       var noteTochangeIdx = notes.findIndex(note => note.id === id);
       
       if(noteTochangeIdx === -1) notes.push(newContent);
       else notes.splice(noteTochangeIdx,1,newContent);
}

function deleteItem(id){
   var noteTochangeIdx = notes.findIndex(note => note.id === id);
   notes.splice(noteTochangeIdx,1);    
}

export default {
   query,
   getNote,
   saveNote,
   deleteItem,
   emptyNote  
}