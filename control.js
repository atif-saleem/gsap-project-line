// gsap.to("#page2 h1",{
//     transform:"translateX(-27%)",
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end:"top -100%",
//         scrub:2,
//         pin:true
//     }
// })
var path="M 10 100 Q 650 100 1290 100";
var finalPath="M 10 100 Q 650 100 1290 100";
let string=document.querySelector("#string");
string.addEventListener("mousemove",function(e){
path=`M 10 100 Q ${e.x} ${e.y} 1290 100`;
gsap.to("svg path",{
    attr:{d:path},
    duration:0.5,
    ease:"power3.out"
})
})
string.addEventListener("mouseleave",function(e){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.8,
        ease:"elastic.out(1,0.2"})
});
