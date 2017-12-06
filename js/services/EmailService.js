const emails = [{
    id: 1,
    subject: 'Sprint',
    text: 'lorem ipsum tahath ass zhoppa tuhes koo',
    to: 'Small',
    from: 'Yamin',
    read: false,
    sentAt: _getDate(),
    marked: false
},
{
    id: 2,
    subject: 'Asses Man',
    text: 'lorem ipsum tahath ass zhoppa tuhes koo',
    to: 'Avinoam',
    from: 'Ofir',
    read: false,
    sentAt: _getDate(),
    marked: false
},
{
    id: 3,
    subject: 'avinoam',
    text: 'lorem ipsum tahath ass zhoppa tuhes koo',
    to: 'Ofir',
    from: 'Avinoam',
    read: false,
    sentAt: _getDate(),
    marked: false
}
];

function getEmails() {
    return new Promise((resolve, reject) => {
        resolve(emails);
    });
}

function getUnreadEmails() {//need Checkings
    return new Promise((resolve, reject) => {
        let unreadEmails = emails.filter(email => {
            return !email.read
        })
        resolve(emails);
    });
}


function getReadEmails() {//need Checkings
    return new Promise((resolve, reject) => {
        let unreadEmails = emails.filter(email => {
            return !email.read
        })
        resolve(emails);
    });
}



function emptyMail() {
    var emptyMail = { id: _getNextId(), subject: 'Enter title', text: 'Enter text', to: 'to', from: 'from', read: false, sentAt: _getDate(), marked:false};
    console.log(emptyMail);
    return emptyMail;
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

export default {
    getEmails,
    getMail,
    saveMail,
    deleteMail,
    emptyMail
}