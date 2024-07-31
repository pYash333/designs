$(function(){
    let tl = gsap.timeline();
    tl.to(".wrapper-inner .image",{
        width:"100%",
        duration:1.5,
        stagger: 1.5,
        repeat:-1,
        repeatDelay:2
    },"a");
    tl.from(".title-wrapper h3",{
        opacity:0,
        y:"100px",
        duration:1.5,
        stagger: 1.5,
        repeat:-1,
        repeatDelay:2
    },"a");
});