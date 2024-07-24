// let elem = document.querySelector("#elem1");
// let elemImg = document.querySelector("#elem1 img");


// elem.addEventListener("mousemove", function(dets){
//     elemImg.style.left = dets.x+"px";
//     elemImg.style.top = dets.y+"px";
// })

// elem.addEventListener("mouseenter", function(dets){
//     elemImg.style.opacity = 1;
// })
// elem.addEventListener("mouseleave", function(dets){
//     elemImg.style.opacity = 0;
// })


// for all 
let elem = document.querySelectorAll(".elem");

elem.forEach((currElem)=>{
   
    currElem.addEventListener("mouseenter", ()=>{
        currElem.childNodes[3].style.opacity = 1;
    })
    currElem.addEventListener("mouseleave", ()=>{
        currElem.childNodes[3].style.opacity = 0;
    })
    currElem.addEventListener("mousemove", ((dets)=>{
        currElem.childNodes[3].style.left = dets.x+"px";
        currElem.childNodes[3].style.top = dets.y+"px";

    }))
})