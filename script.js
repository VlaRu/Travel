// burger

let burgerNav = document.querySelector(".burger-nav-menu-container");
let burgerBody = document.querySelector(".burger-nav-menu");
let width = Math.max(document.documentElement.clientWidth);
let btnSlide = document.querySelectorAll(".btn-elipse");

console.log(width);

function openBurger() {
  burgerNav.style.visibility = "visible";
  burgerNav.style.opacity = "1";
  burgerBody.style.right = "0"
}

function iconClose() {
  burgerNav.style.visibility = "hidden";
  burgerNav.style.opacity = "0";
  burgerBody.style.right = "-300px"
}


//Slide desktop

//-----move slide-----------------


let slide = document.querySelector(".destination-container");

//not working

if (width < 390) {
  leftBtn()
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

// show reed more text
let btnText = document.querySelectorAll(".link-read-more");
let dots = document.querySelectorAll(".dots");
let moreText = document.querySelectorAll(".more");
let a = document.querySelectorAll(".stories-img-container")

btnText.forEach((item, i) =>{  
  item.onclick = () => {
    if(dots[i].style.display === "none") {
      dots[i].style.display = "inline";
      btnText[i].innerHTML = "Read More";
      moreText[i].style.display = "none";
      if(width >= "390px"){
        a.forEach((item) => item.style.marginBottom = "30px");
      }else{
        a.forEach((item) => item.style.marginBottom = "10px");
      }
    }else{
      dots[i].style.display = "none";
      btnText[i].innerHTML = "Read Less";
      moreText[i].style.display = "inline";
      a.forEach((item) => item.style.marginBottom = "0px");
    }
   }
})
