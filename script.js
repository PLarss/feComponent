// global variables
// TODO: Add all twelve images to candies
let candies = ["./images/1.jpeg", "./images/2.jpeg", "./images/3.jpeg", "./images/4.jpeg", "./images/5.jpeg", "./images/6.jpeg", "./images/7.jpeg" ];
let candiesShow;
let b = []; 
let totalPrice;
let basketstart = '<div class="grid-container" id="shoppingbag">'; 
let basketend = '</div>'

initContent(); 
initBasket();

// Create code

// TODO: Create a basket function and stuff it to a basket 
function add(item){
    let totalPrice = 0; 
    let basket = "";
    let itemObject = ""; 
    let itemExists = false;
    for (let index = 0; index < b.length; index++) {
        if(item === b[index].name){
            itemObject = {name: b[index].name, weight: b[index].weight + 100, price:b[index].price};
            b[index] = itemObject;
            itemExists = true
        }
    }
    
    if(itemObject == false){
        // Candy not present in basket object, add it. 
        let itemObject = {name: item, weight: 100, price:9.95};  
        b.push(itemObject)
    }

    for (let index = 0; index < b.length; index++) {
        basket = basket + '<div class="itemInBasket"><img src="'+ b[index].name + '"><br>' + b[index].weight +' gram ' + '</div><br>';        
        totalPrice = totalPrice + ((b[index].price / 100) * b[index].weight);
        console.log(totalPrice); 
    }



    // TODO: WORK ON BASKET HTML! 
    let priceSummary = '<br><div class="grid-container" id="shoppingbag"><div class="itemInBasket">total price: ' + round(totalPrice) + '</div><br></div>';

    console.log(basketstart + basket + basketend + priceSummary);
    document.getElementById("shoppingbag").innerHTML = basketstart + basket + basketend + priceSummary;     

    // TODO: ADD CHECKOUT BUTTON in basket and in Menu

}


// 
function round(number) {
    return +number.toFixed(10);
}

// Have a function to load all content // TODO: remove logging when getting further
function initContent(){ candiesShow = '<div class="grid-container" id="content">'; loadContent(); candiesShow = candiesShow + '</div>'; console.log(candiesShow); document.getElementById("content").innerHTML = candiesShow;
}

function initBasket(){ let first = basketstart + 'No items in the basket' + basketend; document.getElementById("shoppingbag").innerHTML = first;}
// Supporting function to create HTML for InitContent()
function loadContent(){ for (const candy of candies) { candiesShow = candiesShow + 
    '<div class="grid-item"><img  onclick="add(\'' + candy + '\')" src="' + candy +'" alt="' + candy + '"></div>'
    ; } }