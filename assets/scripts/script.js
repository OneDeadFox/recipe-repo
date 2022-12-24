//TODO: Make some psuedo code
//TODO: Make new tab when addButton pressed
//TODO: Add new tabs to tabs array
//TODO: 


//Global Goodies
let page = document.getElementById("page");
let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbar");

let addButton = document.getElementById("add-button");
//Positioning


//Delegator
page.addEventListener("click", function(event) {
    var element = event.target;
    var navbarRect = navbar.getBoundingClientRect();
    var addRect = addButton.getBoundingClientRect();
    var addOffset = addRect.left - navbarRect.left;
    var tab = document.querySelector("tab");
    var tabs = [tab];

    
    //Add Button Positioning Vars

    console.log(addOffset);

    if (element.matches(".add")){
        var addPush = addOffset + 160;
        addButton.setAttribute("style", "left:" + addPush +"px;");

    }
});

//#region StickyBars
//trigger function on scroll
document.onscroll = function() {stickSidebar()}
let stickyBarPos = sidebar.offsetTop;

function stickSidebar() {
    if (window.pageYOffset >= stickyBarPos) {
        sidebar.classList.add("sticky");
        navbar.classList.add("sticky");
    } else {
        sidebar.classList.remove("sticky");
        navbar.classList.remove("sticky");
    }
}
//#endregion StickyBars

//#region Tab Activation


//#endregion Tab Activation