// global variables
// TODO: Add all twelve images to candies
let candies = ["./images/1.jpeg", "./images/2.jpeg", "./images/3.jpeg", "./images/4.jpeg", "./images/5.jpeg" ];
let candiesShow;
let basket; 

initContent(); 
initBasket();

// Create code

// TODO: Create a basket function
function add(item){
    basket = basket + item;
    console.log(basket);    
}





















// Have a function to load all content // TODO: remove logging when getting further
function initContent(){ candiesShow = '<div class="grid-container" id="content">'; loadContent(); candiesShow = candiesShow + '</div>'; console.log(candiesShow); document.getElementById("content").innerHTML = candiesShow;
}

function initBasket(){
    basket = '<div class="grid-container" id="shoppingbag">No items in the basket</div>';
    document.getElementById("shoppingbag").innerHTML = basket;                    
}
// Supporting function to create HTML for InitContent()
function loadContent(){ for (const candy of candies) { candiesShow = candiesShow + 
    '<div class="grid-item"><img  onclick="add(\'' + candy + '\')" src="' + candy +'" alt="' + candy + '"></div>'
    ; } }