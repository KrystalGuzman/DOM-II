// Your code goes here
//	* [ ] `mouseover`
let topH1 = document.querySelector('.logo-heading');

topH1.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
});
//	* [ ] `keydown`
window.addEventListener('keydown', (event) => {
    logKey(event);
    let body = document.querySelector('body');
    if(event.code == 'KeyB') {
        body.style.backgroundColor = 'red';
    } else {
        body.style.backgroundColor = 'white';
        homeEvent.target.style.backgroundColor = 'white';
    }
});

//	* [ ] `wheel`
let img1 = document.querySelector('.img-content');

img1.addEventListener('wheel', (event) => {
      img1.style.transform = "skewY(30deg)";
})
//	* [ ] `drag / drop`
let dragDrop = document.querySelector('.img-fluid');

dragDrop.addEventListener('drag', (event) => {
     dragDrop.style.border = "10px  solid orange";
})
//	* [ ] `load`
window.addEventListener("load", (event) => {
    alert("welcome to fun bus");
    })
//	* [ ] `resize`
window.addEventListener("resize", (event) => {
    alert("resize me")
})
//	* [ ] `select`
let selection = document.querySelector(".text-content");

selection.addEventListener("select", (event) =>{
      alert("you")
})
//	* [ ] `dblclick`
let dblClick = document.querySelector('.btn')

dblClick.addEventListener("dblclick", (event) => {
      dblClick.style.backgroundColor = "red"
})
//	* [ ] `mouseenter`
let home = document.querySelector('.home');
home.addEventListener('mouseenter', (event) => {
    event.target.style.border = 'thick dotted green'
}); 
//	* [ ] `click`
home.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'black';
    homeEvent = event;
    event.stopPropagation();
});
//	* [ ] `copy`
home.addEventListener('copy', (event) => {
    alert('hey!!!');
    event.target.style.color = 'white';
});

let navItem = document.querySelector('.nav-link');

navItem.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("stopped the link")
})

gsap.to(".logo-heading", {duration: 1, opacity: 0.5});
gsap.to(".logo-heading", {duration: 2, x: 100});
gsap.to(".logo-heading", {duration: 3, rotation: 360, scale: 2});
const destination = document.querySelector(".content-destination");
destination.addEventListener("mouseenter", () => {
  gsap.to(".content-destination", {
    duration: 1,
    filter: "none",
    scale: 1.2,
    x:-100,
    y:-100,
    rotate: 360,
    yoyo: true,
    repeat:1
  })
})