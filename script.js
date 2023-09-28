
let burgerNav = document.querySelector(".burger-nav-menu-container");
let burgerBody = document.querySelector(".burger-nav-menu");
let width = Math.max(document.documentElement.clientWidth);
let btnSlide = document.querySelectorAll(".btn-circle");
let popupContainer = document.querySelector(".popup-container");
let popup = document.querySelector(".popup");
let popupSigIn = document.querySelector(".popup-sign");

// burger

function openBurger() {
  burgerNav.style.visibility = "visible";
  burgerNav.style.opacity = "1";
  burgerBody.style.right = "0";
}

function iconClose() {
  burgerNav.style.visibility = "hidden";
  burgerNav.style.opacity = "0";
  burgerBody.style.right = "-300px";
}

//Slide desktop

//-----move slide-----------------

let slide = document.querySelector(".destination-container");
let imgSlide = document.querySelectorAll(".destination-img");
let Indx = 1;

function showSlides(n) {
    if(n > imgSlide.length){
      Indx = 1;
    }

    if(n < 1){
      Indx = imgSlide.length;
    }

    imgSlide.forEach(item => {
        item.style.display = "none"
    });

    btnSlide.forEach(item => {
      item.classList.remove("active");
  });

    imgSlide[Indx -1].style.display = "block";
    btnSlide[Indx -1].classList.add("active");
}

function addSlides(n) {
    showSlides(Indx += n)
}

function arrowLeft(){
  addSlides(-1) 
}

function arrowRight(){
  addSlides(1) 
}

function leftBtn() {
  btnSlide[0].classList.add("active");
  btnSlide[1].classList.remove("active");
  btnSlide[2].classList.remove("active");
}

function centerBtn() {
  btnSlide[1].classList.add("active");
  btnSlide[0].classList.remove("active");
  btnSlide[2].classList.remove("active");
}

function rightBtn() {
  btnSlide[2].classList.add("active");
  btnSlide[1].classList.remove("active");
  btnSlide[0].classList.remove("active");
}

function spain(){
  if(width >= 390){
    slide.style.justifyContent = "right";
    leftBtn()
  }
}

function usa(){
  if(width >= 390){
    slide.style.justifyContent = "left";
    rightBtn()
  }
}

function japan(){
  if(width >= 390){
    slide.style.justifyContent = "center";
    centerBtn()
  }
}

// show "reed more" text

let btnText = document.querySelectorAll(".link-read-more");
let dots = document.querySelectorAll(".dots");
let moreText = document.querySelectorAll(".more");
let textArea = document.querySelectorAll(".text-stories");
 

btnText.forEach((item, i) =>{  
  item.onclick = () => {
    if(dots[i].style.display === "none") {
      dots[i].style.display = "inline";
      btnText[i].innerHTML = "Read More";
      moreText[i].style.display = "none";
      textArea.forEach((item) => (item.style.overflowY = "hidden"));
      /* marginMobile() */
    }else{
      dots[i].style.display = "none";
      btnText[i].innerHTML = "Read Less";
      moreText[i].style.display = "inline";
      textArea[i].style.overflowY = "scroll"; 
    }
   }
})


/* function marginMobile() {
  a.forEach((item) => { 
    if(width <= 390 ){return item.style.marginBottom = "10px"
  }else{
    return item.style.marginBottom = "30px"
  }});
} */

// login

function logIn() {
  popupContainer.style.display = "flex";
  popupContainer.style.top = "0";
  popup.style.display = "flex";
  popupSigIn.style.display = "none";
}

function sigIn() {
  popupSigIn.style.display = "flex";
  popup.style.display = "none";
}


//----close when click outside popup/modal------

document.addEventListener("click", (event) => {
  if(event.target.classList.contains("burger-nav-menu-container")){
    iconClose()
  }else if(event.target.classList.contains("popup-container")){
    //popupContainer.style.display = "none";
    popupContainer.style.top = "-1000px";
  }else if(event.target.classList.contains("popup-container-sign")){
    popupContainer.style.display = "none";
  }
});
