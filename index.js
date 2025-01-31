let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let count_home = 0
let count_guest = 0

function add_one_home(){
    count_home += 1
    homeEl.textContent = count_home
}

function add_two_home(){
    count_home += 2
    homeEl.textContent = count_home
}

function add_three_home(){
    count_home += 3
    homeEl.textContent = count_home
}

function add_one_guest(){
    count_guest += 1
    guestEl.textContent = count_guest
}

function add_two_guest(){
    count_guest += 2
    guestEl.textContent = count_guest
}

function add_three_guest(){
    count_guest += 3
    guestEl.textContent = count_guest
}