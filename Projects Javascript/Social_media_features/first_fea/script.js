let strang = document.querySelector("h5");
let add = document.querySelector("#add");
let check = 0;


// add.addEventListener("click", function(){
//     strang.innerHTML = "friends";
//     strang.style.color = "green"
// });
add.addEventListener("click", function(){
    if(check == 0){
        strang.innerHTML = "friends";
        strang.style.color = "green";
        add.innerHTML = "romove friend"
        console.log("clic");
        check = 1;
    }else{
        strang.innerHTML = "Stranger";
        strang.style.color = "red";
        add.innerHTML = "add friend"
        check = 0;
    }
})

