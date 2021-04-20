// global variables
// TODO: Add all twelve images to candies
let candies = ["./images/1.jpeg", "./images/2.jpeg", "./images/3.jpeg", "./images/4.jpeg", "./images/5.jpeg" ];
let candiesShow;
let b = []; 
let basketstart = '<div class="grid-container" id="shoppingbag">'; 
let basketend = '</div>'

initContent(); 
initBasket();

// Create code

// TODO: Create a basket function and stuff it to a basket 
function add(item){
    let basket = ""; 
    console.log(basket);  
    b.push(item)

    for (let index = 0; index < b.length; index++) {
        basket = basket + b[index] + '<br>';        
    }

    // TODO: WORK ON BASKET HTML! 
    document.getElementById("shoppingbag").innerHTML = basketstart + basket + basketend;     

    // TODO: ADD CHECKOUT BUTTON in basket and in Menu

}





// Have a function to load all content // TODO: remove logging when getting further
function initContent(){ candiesShow = '<div class="grid-container" id="content">'; loadContent(); candiesShow = candiesShow + '</div>'; console.log(candiesShow); document.getElementById("content").innerHTML = candiesShow;
}

function initBasket(){ let first = basketstart + 'No items in the basket' + basketend; document.getElementById("shoppingbag").innerHTML = first;}
// Supporting function to create HTML for InitContent()
function loadContent(){ for (const candy of candies) { candiesShow = candiesShow + 
    '<div class="grid-item"><img  onclick="add(\'' + candy + '\')" src="' + candy +'" alt="' + candy + '"></div>'
    ; } }