let menu=document.queryselector("#menu-icon");
let navbar=document.queryselector(".navbar");

menu.onclick= () =>{
    menu.classlist.toggle("bx-x");
    navbar.classlist.toggle("active");
}

window.onscroll= () =>{
    menu.classlist.remove("bx-x");
    navbar.classlist.remove("active");
}

/* Typing Text Code */

const typed = new Typed('multiple-text', {
    strings: ['Physical Fitness','Weight Gain','Strength Training','Fat Lose','Weight Lifting','Running'],
    typeSpeed:60,
    backSpeed:60,
    backDelay:1000,
    loop:true,
  });
