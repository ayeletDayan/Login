'use strict'
function login() {
    updateLastLoginDate()
    const elUsername = document.querySelector('.username');
    const username = elUsername.value
    const elPassword = document.querySelector('.password')
    const password = elPassword.value
    // console.log(username, password)
    var currUser = gUsers.filter((user) => user.username === username)
    console.log(currUser) //currUser=currUser[0]
    if (currUser.length === 0) alert('Wrong user name!')
    if (currUser[0].password !== password) alert('Wrong password!')
    else {
        saveUsersToStorage('currUser', currUser)
        window.location = 'user.html';
    }
}

function logout() {
    window.location = 'index.html'
}

function admin() {
    var user = loadFromStorage('currUser')
    if (!user[0].isAdmin) window.location = 'index.html';
    else window.location = 'admin.html';
}