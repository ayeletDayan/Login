'use strict'
var gUsers = []
_createUsers()
console.log(gUsers);

function _createUsers() {
    gUsers = [
        _createUser('Ayelet', 'A1234', true),
        _createUser('Muki', 'M1234', false),
        _createUser('Puki', 'P1234', false),
        _createUser('Bobi', 'B1234', false)
    ]
    saveUsersToStorage('usersDB', gUsers)
}

function _createUser(username, password, isAdmin) {
    var user = {
        id: _makeId(),
        username,
        password,
        lastLoginTime: Date.now(),
        isAdmin
    }
    return user
}

function _makeId(length = 5) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var txt = '';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function saveUsersToStorage(key, users) {
    saveToStorage(key, users)
}

function updateLastLoginDate() {
    var userName = loadFromStorage('currUser')
    //  userName[0].lastLoginTime = Date.now()
    saveUsersToStorage('currUser', userName)
}

function userIn() {
    var user = loadFromStorage('currUser')
    if (user[0].isAdmin) document.querySelector('.admin').style.display = 'block'; //to check  
    var userName = loadFromStorage('currUser')
    const elH1 = document.querySelector('.user-name')
    elH1.innerText = `Welcome ${userName[0].username}`
    updateLastLoginDate()
}