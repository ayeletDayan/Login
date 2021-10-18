'use strict'
var gSortBy;

function renderTable() {
    getSortForDisplay()
    var start = `<table class="tableAdmin"border="1"> <tbody> <tr> <td>username</td> <td>password</td> <td>lastLoginTime</td> <td>isAdmin</td></tr>`
    var strHtmls = gUsers.map((user) => {
        return `<tr> <td class="cell"> ${user.username}</td> <td class="cell">${user.password}</td><td class="cell"> ${user.lastLoginTime}</td><td class="cell"> ${user.isAdmin}</td></tr>`
    })
    var end = `</tbody></table>`
    document.querySelector('.table').innerHTML = (start + strHtmls.join('') + end)
}

function back() {
    window.location = 'user.html'
}

function onSetSorted(sortBy) {
    setSort(sortBy);
    renderTable()
}

function getSortForDisplay() {
    const users = gUsers.filter(function (user) {
        return (user.username && gSortBy === 'username') ||
            (user.lastLoginTime && gSortBy === 'lastLoginTime')
    })
    return users;
}

function setSort(sortBy) {
    if (sortBy === 'NAME')
        gUsers.sort((user1, user2) => (user1.username > user2.username ? 1 : -1));

    if (sortBy === 'LASTLOGIN')
        gUsers.sort((user1, user2) => user1.lastLoginTime - user2.lastLoginTime);
}

