//TODO: Make dropdown for user profile
    //1. Have options display omn click
    //2. What are the options where do they lead?
//TODO: Make Navigation window that leads to recipe chapters
    //1. Make divisions that display
        //a. Make a ul
        //b. Have each li in list have a div inside thats border will act as the tree branches.
        //c. turn these li's into a var
//TODO: Make settings button in tab arera
    //1. Have options windo open on click
    //2. What are the options where do they lead?
//TODO: Make new recipe button
    //1. Have recipe form open upon click
//TODO: Make recipe entry area
    //1. Make a form to fill out
        //a. Title of recipe
        //b. Recipe category/chapter
        //c. Recipe entry area as divss for directions an li's for ingredients
        //d. Submit button
            //i. Have form saved somewhere upon submition
            //ii. Have information from form displayed in recipe card style.
            //iii. Have a buttons for editing, location change, and deletion

//TODO: Make new tab when addButton pressed
    //1. Have new tab generate upon click
    //2. Move new tab button
    //3. Add new tabs to tabs array
        //Other Thoughts:
            //Deletion button on tabs
            //Ability to move them
            //Rename on double click


//Global Goodies
let page = document.getElementById("page");
let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbar");
let addButton = document.getElementById("add-button");
let tab = document.getElementsByClassName("tab");
let tabID = 0;
//Positioning



//Wrapping Paper Section
function wrap(){
    let p1 = {x: 0, y: 0};
    let p2 = {x: window.innerWidth, y: 0};
    let p3 = {x: window.innerWidth, y: window.innerHeight};
    let p4 = {x: 0, y: window.innerHeight};
    let crossWidth = 80;

    let leftCross = document.createElement("div");
    let rightCross = document.createElement("div");
    leftCross.setAttribute("id", "left-cross", "class", "rip");
    rightCross.setAttribute("id", "right-cross", "class", "rip");
    let wrapping = document.getElementById("giftwrap");
    wrapping.appendChild(leftCross);
    wrapping.appendChild(rightCross);
    document.querySelector("#left-cross").style.cssText = `background-color: red; width: ${crossWidth}px; height: ${window.innerHeight}px; position:absolute; top:; left:${window.innerWidth/2 - crossWidth/2}px; z-index: 6; transform: skewX(${Math.atan(p3.x/p3.y)*(180/Math.PI)}deg)`;
    document.querySelector("#right-cross").style.cssText = `background-color: red; width: ${crossWidth}px; height: ${window.innerHeight}px; position:absolute; top:; left:${window.innerWidth/2 - crossWidth/2}px; z-index: 6; transform: skewX(-${Math.atan(p3.x/p3.y)*(180/Math.PI)}deg)`;
}

//wrap();


//#region The Delegator
//Delegator
page.addEventListener("click", function(event) {
    var element = event.target;
    //Add Button Positioning Vars
    var navbarRect = navbar.getBoundingClientRect();
    var addRect = addButton.getBoundingClientRect();
    var addOffset = addRect.left - navbarRect.left;


    if (element.matches(".add")){
        newTabGen();
    } else if (element.matches(".tab")){
        activateTab();
    } if (element.matches(".rip")){
        console.log("test");
        var rips = document.querySelectorAll(".rip")
        for(var i = 0; i < 2; i++){
            rips[i].setAttribute("style", "display:none")
        }
    }



    //Delegator Functions
        //New Tabs
        function newTabGen() {
            var tabGap = 4;
            var tabWidth = tab[0].offsetWidth;
            var addSpace = 16;
            var addPush = addOffset + tabWidth + tabGap;
            var newTab = document.createElement("div");
            //Is this even being used?
            var tabs = [];
            tabID++;
            //Move add button
            addButton.setAttribute("style", "left:" + addPush + "px;");
            //Make new tab
            makeTab();
            //Position new tab
            var tabPush = addOffset - addSpace + 4;
            newTab.setAttribute("style", "left:" + tabPush + "px;");
            //Add new tab to tabs array.
            tabs.push(newTab);
            
            //New tab API
            function makeTab(){
                navbar.appendChild(newTab);
                newTab.setAttribute("class", "tab");
                newTab.dataset.state = "inactive";
                newTab.dataset.index = tabID;

            }
        }

        //Tab Activation
        function activateTab(){
        var tabs = document.querySelectorAll(".tab");

            for(var i = 0; i < tabs.length; i++){
                tabs[i].dataset.state = "inactive"
            }
            element.dataset.state = "active"
        }
});

//#endregion The Delegator

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