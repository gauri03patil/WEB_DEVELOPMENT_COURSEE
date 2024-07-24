let arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1679865371012-92b8ce5e6d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHx8MHx8fDA%3D", story:"https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1532969200589-57f1fe57aaab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8fDB8fHww", story:"https://plus.unsplash.com/premium_photo-1670588958702-90abec4d2b39?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVufGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVufGVufDB8fDB8fHww", story:"https://plus.unsplash.com/premium_photo-1679415150852-eb59da426a96?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVufGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1580746453801-37b0bc56f3b4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://plus.unsplash.com/premium_photo-1683141226394-4c7340c32171?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVufGVufDB8MHx8fDE3MTUxNDAyNzB8MQ&ixlib=rb-4.0.3"},
    {dp:"https://images.unsplash.com/photo-1580746453801-37b0bc56f3b4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://plus.unsplash.com/premium_photo-1683141226394-4c7340c32171?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVufGVufDB8MHx8fDE3MTUxNDAyNzB8MQ&ixlib=rb-4.0.3"},

]

let myStoryData = document.querySelector("#story");

var clutter = "";
arr.forEach(function(currElem,index){
    clutter += `<div class="myStory">
    <img id="${index}" src="${currElem.dp}" alt="">
</div>`
})

myStoryData.innerHTML = clutter;

myStoryData.addEventListener("click", function(dets){
//    arr[dets.target.id].story;
document.querySelector("#full-screen").style.display = "block"
document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
}, 3000)

});