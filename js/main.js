/*===== MENU =====*/
const triggerMenu = document.getElementById("trigger-menu")
const mobileMenuCon = document.getElementById("menu-mobile-container")
const closMenu = document.querySelector("#menu-mobile-container .dark-part");
const amir = document.querySelector(".menu-v2")

triggerMenu.addEventListener("click" , ()=> {
    mobileMenuCon.classList.add("active")
})

closMenu.addEventListener("click" , ()=> {
    mobileMenuCon.classList.remove("active")
})

amir.addEventListener("click" , ()=> {
    mobileMenuCon.classList.remove("active")
})


/*===== testimonial-carousel =====*/
const nextBtn = document.querySelector("#testimonial .next")
const pervBtn = document.querySelector("#testimonial .perv")
const items = document.querySelectorAll("#testimonial .testimonial-item")

let times = items.length;
let count = 1;
nextBtn.addEventListener("click" , ()=>{
    if(count >= times) {
        count = 1;
       items[0].style.marginLeft = "0";
    } else {
        items[0].style.marginLeft = `-${items[0].offsetWidth * count}px`;
        count++;

    }
})

pervBtn.addEventListener("click" , ()=>{
    if(count === 1) {
        count = 1;
        items[0].style.marginLeft = `-${items[0].offsetWidth * (times - 1)}px`;
        count=times
    } else { 
        items[0].style.marginLeft = `-${items[0].offsetWidth * (count - 1) -
            items[0].offsetWidth}px`;
        count--;

    }  
})


/*=============== go to button ===============*/
let gotoup = document.querySelector("#gotoup")
window.onscroll = function(){
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? gotoup.classList.add("active")
    : gotoup.classList.remove("active")
}
gotoup.addEventListener("click" , ()=> {
    document.body.scrollTop = 0 , document.documentElement.scrollTop = 0
})
