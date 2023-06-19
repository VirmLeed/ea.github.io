let faqFolder = document.querySelector(".faqFolder");
let faqName = document.querySelector(".faqName");
let faqArrow = document.querySelector(".faqArrow");

faqName.addEventListener('click', fold);

function fold(){
    faqFolder.classList.toggle('active');
    faqArrow.classList.toggle('active');
}