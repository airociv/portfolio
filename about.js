let header = document.querySelector(".header");

TweenMax.from(".left-container", 2, {
    width: "0",
    ease: Expo.easeInOut
  });
  TweenMax.from(".right-container", 2, {
    delay: 0.5,
    width: "0",
    opacity: "0",
    ease: Expo.easeInOut
  });
  TweenMax.from(".center-container", 2, {
    delay: 1,
    width: "0",
    x: -20,
    ease: Expo.easeInOut
  });
  
  TweenMax.from(".story", 2, {
    delay: 1.5, 
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut});

  TweenMax.from(header,1,{
    x:-20,
    opacity:0,
    delay:1});

TweenMax.from(".top", 2, {
    delay: 1,
    width: "0",
    x: -20,
    ease: Expo.easeInOut
  });

  TweenMax.from(".bottom", 2, {
    delay: 1,
    width: "0",
    x: -20,
    ease: Expo.easeInOut
  });


const modal1=document.querySelector('#modal1');
const openModal1= document.querySelector('.open-button1');
const closeModal1= document.querySelector('.close-button1');

openModal1.addEventListener('click',()=>{
  modal1.showModal();
})

closeModal1.addEventListener('click',()=>{
  modal1.close();
})

const modal2=document.querySelector('#modal2');
const openModal2= document.querySelector('.open-button2');
const closeModal2= document.querySelector('.close-button2');

openModal2.addEventListener('click',()=>{
  modal2.showModal();
})

closeModal2.addEventListener('click',()=>{
  modal2.close();
})