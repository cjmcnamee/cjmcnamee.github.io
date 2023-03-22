var portfolioSearch = "";

var artL = "illustrations";
var wDesign = "web design";
var gDesign = "graphic design";
const myPortfolioArray = ["project", "projects", "Project", "Projects", "work", "works", "Work", "Works"];

var elem = document.createElement("img");

var projects = ["cjmcnamee.github.io/Shark_Man.jpg","cjmcnamee.github.io/Lambda_Times.gif","cjmcnamee.github.io/Rick_And_Morty_Fanpage.gif","cjmcnamee.github.io/Space_Walkers.png","cjmcnamee.github.io/Space_Walkers_Mobile.png","cjmcnamee.github.io/UI_Home.png","cjmcnamee.github.io/My_Font.jpg"];
var illustrations = ["cjmcnamee.github.io/Shark_Man.jpg"];
var webD = ["cjmcnamee.github.io/Lambda_Times.gif","cjmcnamee.github.io/Rick_And_Morty_Fanpage.gif","cjmcnamee.github.io/Space_Walkers.png","cjmcnamee.github.io/Space_Walkers_Mobile.png","cjmcnamee.github.io/UI_Home.png"];
var graphicD = ["cjmcnamee.github.io/My_Font.jpg","cjmcnamee.github.io/jpn4_logo.png"];

function handleKey(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("buttonOne").click();
    }
}

function inputImg() {
    portfolioSearch = document.getElementById("searchQ").value;
    if (myPortfolioArray.includes(portfolioSearch)) {
        for (var c in projects) {
            var newElement = document.createElement('div');
            newElement.id = projects[c]; 
            newElement.className = "project";
            newElement.innerHTML = `<img src=\"${projects[c]}\">`;
            document.getElementById("myText").innerHTML = `Search results for "${portfolioSearch}"`;
            document.getElementById("portfolioSearchResults").appendChild(newElement);
        }
    } else if (portfolioSearch == artL) {
        for (var c in illustrations) {
            var newElement = document.createElement('div');
            newElement.id = illustrations[c]; 
            newElement.className = "project";
            newElement.innerHTML = `<img src=\"${illustrations[c]}\">`;
            document.getElementById("myText").innerHTML = `Search results for "${portfolioSearch}"`;
            document.getElementById("portfolioSearchResults").appendChild(newElement);

        }
    } else if (portfolioSearch == wDesign) {
        for (var c in webD) {
            var newElement = document.createElement('div');
            newElement.id = webD[c]; 
            newElement.className = "project";
            newElement.innerHTML = `<img src=\"${webD[c]}\">`;
            document.getElementById("myText").innerHTML = `Search results for "${portfolioSearch}"`;
            document.getElementById("portfolioSearchResults").appendChild(newElement);

        }
    } else if (portfolioSearch == gDesign) {
        for (var c in graphicD) {
            var newElement = document.createElement('div');
            newElement.id = graphicD[c]; 
            newElement.className = "project";
            newElement.innerHTML = `<img src=\"${graphicD[c]}\">`;
            document.getElementById("myText").innerHTML = `Search results for "${portfolioSearch}"`;
            document.getElementById("portfolioSearchResults").appendChild(newElement);
        }
    } else { 
        document.getElementById("myText").innerHTML = `"${portfolioSearch}" not found`;
     }
}