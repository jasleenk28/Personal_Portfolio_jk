const header= document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY>0);
});

var tabLinks= document.getElementsByClassName("Alinks");
var tabContents= document.getElementsByClassName("linkContent");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active");
    }

    for(tabContent of tabContents){
        tabContent.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("activeTab");
}

function clearText() {
    document.getElementById("myform").reset();
  }

  let menu = document.querySelector('#menu-icon');
  let navlist = document.querySelector('.navlist');
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr= ScrollReveal({
    distance: '45px', 
    duration: 2700,
    reset: true
})

sr.reveal('.home-text', {delay:350, origin: 'left'})
sr.reveal('.home-img', {delay:350, origin: 'right'})

sr.reveal('.infoAbout, .imgNExpCont , .projectContainer, .contactCont2', {delay:350, origin: 'bottom'})