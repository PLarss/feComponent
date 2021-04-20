// global variables
// TODO: Add all twelve images to candies
let candies = ["./images/1.jpeg", "./images/2.jpeg", "./images/3.jpeg", "./images/4.jpeg" ];
let candiesShow;

initContent(); 

// Have a function to load all content
function initContent(){
    candiesShow = '<div id="content">';  
    loadContent(); 
    candiesShow = candiesShow + '</div>';
    // TODO: remove logging when getting further
    console.log(candiesShow);
    document.getElementById("content").innerHTML = candiesShow;
}
















// Supporting function to create HTML for InitContent()
function loadContent(){ for (const candy of candies) { candiesShow = candiesShow + '<p><img src="' + candy + '" alt="Lägg till en text dynamiskt"></p>'; } }