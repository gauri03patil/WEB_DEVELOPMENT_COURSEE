let main = document.querySelector("#main");
let myCur = document.querySelector("#cursor");


main.addEventListener("mousemove", function(dets){
    myCur.style.left=dets.x+"px";
    myCur.style.top=dets.y+"px"
})