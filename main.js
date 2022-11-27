//image
let img=document.querySelector(".img");

//title and categories
let title=document.querySelector(".title");
let home=document.querySelector(".home");
let about=document.querySelector(".about");
let projects=document.querySelector(".projects");
let connect=document.querySelector(".connect");
let categories=document.querySelector(".categories");
let date = document.querySelector(".date");


//animation
TweenMax.from(img, 0.5,{
    opacity:0,
    delay:0.5
})

TweenMax.from(title, 1,{
    opacity:0,
    y:20,
    delay:1
})

TweenMax.from(home, 1,{
    opacity:0,
    y:-15,
    delay:2.2
})
TweenMax.from(about, 1,{
    opacity:0,
    y:-15,
    delay:2.3
})
TweenMax.from(projects, 1,{
    opacity:0,
    y:-15,
    delay:2.4
})
TweenMax.from(connect, 1,{
    opacity:0,
    y:-15,
    delay:2.5
})
TweenMax.from(categories, 1,{
    height:0,
    delay:2.7
})
TweenMax.from(date,1,{x:-20,opacity:0,delay:1.8})
