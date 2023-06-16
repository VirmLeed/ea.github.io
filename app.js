const menu = document.querySelector('.menuToggle');
const linkMenu = document.querySelector('.navbarMenu');
const links = document.querySelectorAll('.mainLink');
const langButton = document.querySelector('.selectedLang');
const langMenu = document.querySelector('.langContainer');
const langOptions = document.querySelectorAll('.langContainer ul li');

langButton.addEventListener('click', toggleLangMenu);
menu.addEventListener('click', toggleMenu);
changeLang();
updateLinks();

langOptions.forEach(option => {
    option.addEventListener('click', function(){changeURLLang(option.className)});
})

//Change websiteurl to selected language websiteurl#lang
function changeURLLang(language){
    let lang = language;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
    toggleLangMenu();
}

//Save language preference between pages
function updateLinks(){
    links.forEach(link => {
        link.href = link.pathname + window.location.hash;
    })
}

function toggleLangMenu(){
    langMenu.classList.toggle('active');
}

function toggleMenu(){
    menu.classList.toggle('active');
    linkMenu.classList.toggle('active');
}

function changeLang(){
    let lang = window.location.hash; // Take #lang out of websiteurl#lang
    lang = lang.substring(1); // Cut off the #
    if(!langList.includes(lang)){ // Change the language to english if it's unknown
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    // Change selected language icon
    document.querySelector('.selectedLang img').src = 'pics/langs/' + lang + '.png';
    for (let element in langArr) { // Translate everything
        let part = document.querySelector('.lng' + element);
        if(part){
            part.innerHTML = langArr[element][lang];
        }
    }
}
