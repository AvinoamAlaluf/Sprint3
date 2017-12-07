const emails = [{
    id: 1,
    subject: 'Sprint',
    text: 'lorem ipsum tahath ass zhoppa tuhes koo',
    to: 'Small',
    from: 'ofirnoam',
    read: false,
    sentAt: 1512575000382,
    marked: false
},
{
    id: 2,
    subject: 'Asses Man',
    text: 'lorem ipsum tahath ass zhoppa tuhes koo',
    to: 'Avinoam',
    from: 'ofirnoam',
    read: false,
    sentAt: 1512575126397,
    marked: false
},
{
    id: 3,
    subject: 'avinoam',
    text: 'lorem ipsum tahath ass zhoppa tuhes koo',
    to: 'Ofir',
    from: 'Avinoam',
    read: true,
    sentAt: 1512575182386,
    marked: false
}
];

function getEmails() {
    return new Promise((resolve, reject) => {
        resolve(emails);
    });
}

function sortByDate() {//need Checkings
    return new Promise((resolve, reject) => {
        emails.sort((a, b) => {
            return a.sentAt - b.sentAt;
        })
        resolve(emails);
    });
}

function sortByLateDate() {//need Checkings
    return new Promise((resolve, reject) => {
        emails.sort((a, b) => {
            return b.sentAt - a.sentAt;
        })
        resolve(emails);
    });
}

function sortBySender() {//need Checkings!!!!!!!!!
    return new Promise((resolve, reject) => {
        emails.sort((a, b) => {
            if (a.from < b.from) return -1;
            if (a.from > b.from) return 1;
            return 0;
        })
        resolve(emails);
    });
}

function getUnreadEmails() {//need Checkings
    return new Promise((resolve, reject) => {
        let unreadEmails = emails.filter(email => {
            return !email.read
        })
        resolve(unreadEmails);
    });
}


function getReadEmails() {//need Checkings
    return new Promise((resolve, reject) => {
        let readEmails = emails.filter(email => {
            return email.read
        })
        resolve(readEmails);
    });
}

function getUnmarkedEmails() {//need Checkings
    return new Promise((resolve, reject) => {
        let unreadEmails = emails.filter(email => {
            return !email.marked
        })
        resolve(emails);
    });
}

function getMarkedEmails() {//need Checkings
    return new Promise((resolve, reject) => {
        let unreadEmails = emails.filter(email => {
            return email.marked
        })
        resolve(emails);
    });
}

function getSentEmails() {//need Checkings
    return new Promise((resolve, reject) => {
        let unreadEmails = emails.filter(email => {
            return email.from === 'ofirnoam'
        })
        resolve(unreadEmails);
    });
}


function emptyMail() {
    return new Promise((resolve,reject) =>{
        var emptyMail = { id: _getNextId(), subject: '', text: '', to: '', from: 'ofirnoam', read: false, sentAt: Date.now(), marked: false };
        // console.log(emptyMail);
       resolve(emptyMail);
    //    reject('service Failed To provide empty mail Obj');
    })
}

function _getNextId() {
    var maxId = emails.reduce((acc, note) => {
        return (note.id > acc) ? note.id : acc
    }, 0);
    return maxId + 1;
}

function _getDate() {
    var result = '';
    var d = new Date();
    result += d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    return result;
}

function getMail(id) {
    return new Promise((resolve, reject) => {
        var foundMail = emails.find(mail => mail.id === id);
        resolve(foundMail);
    });
}

function saveMail(newMailContent, id) {
    var mailToChangeIdx = emails.findIndex(mail => mail.id === id);

    if (mailToChangeIdx === -1) emails.push(newMailContent);
    else emails.splice(mailToChangeIdx, 1, newMailContent);
}

function deleteMail(id) {
    var mailTochangeIdx = emails.findIndex(mail => mail.id === id);
    emails.splice(mailTochangeIdx, 1);
}

function showMail(id) {
    var foundMail = emails.find(mail => mail.id === id);
    // console.log(foundMail);

    foundMail.read = true;
}

function search(searchedValue) {
    debugger;
    var refiendEmails = [];
    var wordToSearch = searchedValue.toLowerCase();
    return new Promise((resolve,reject) =>{
        refiendEmails = emails.filter(email => {
            debugger;
            return email.from.toLowerCase().includes(wordToSearch) ||
                email.to.toLowerCase().includes(wordToSearch) ||
                email.subject.toLowerCase().includes(wordToSearch) ||
                email.text.toLowerCase().includes(wordToSearch)
        });
        resolve(refiendEmails);
        reject('Service Failed To Filter Emails');    
    });
}

function addMail(mailContent) {
    return new Promise((resolve,reject) =>{
        emails.push(mailContent)
        console.log('sended');
        resolve(console.log('Email Added!'));
        reject(console.log('service Failed To Add Email!'));
    })
}

export default {
    getEmails,
    getMail,
    saveMail,
    deleteMail,
    emptyMail,
    sortBySender,
    sortByDate,
    sortByLateDate,
    showMail,
    getSentEmails,
    search,
    getReadEmails,
    getUnreadEmails,
    addMail,
    
}