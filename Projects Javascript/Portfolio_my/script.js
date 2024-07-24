
// Get tab links and tab contents
let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");

// Function to switch tabs
function opentab(tabname) {
  //   console.log(tabname);
  // console.log(tablinks);
  // Remove 'active-links' class from all tab links
  tablinks.forEach((link) => {
    // console.log(link);
    link.classList.remove("active-links");
  });

  // Remove 'active-tab' class from all tab contents
  tabcontents.forEach((content) => {
    content.classList.remove("active-tab");
  });

    
  // Add 'active-links' class to the clicked tab link
  document.querySelector(`[id="${tabname}"]`).classList.add("active-links");

  // Add 'active-tab' class to the corresponding tab content
  document.querySelector(`[id="${tabname}"]`).classList.add("active-tab");

}

var sideMenu = document.getElementById("sidemenu");

function openmenu(){
  sideMenu.style.right = "0"
}
function closemenu(){
  sideMenu.style.right = "-200px"
}