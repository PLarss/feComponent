// global variables
// TODO: Add all twelve images to candies
let candies = ["./images/1.jpeg", "./images/2.jpeg", "./images/3.jpeg", "./images/4.jpeg", "./images/5.jpeg", "./images/6.jpeg", "./images/7.jpeg", "./images/8.jpeg" ];
let candiesShow;
let b = []; 
const basketstart = '<div class="grid-container" id="shoppingbag">'; 
const basketend = '</div>'

initContent(); 
initBasket();


// TODO: Create a basket function and stuff it to a basket 
function add(item){
    let totalPrice = 0; 
    let totalWeight = 0; 
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

        // TODO: add - and + for weight
        basket = basket + '<div class="itemInBasket"><img src="'+ b[index].name + '"><br>' + b[index].weight +' gram ' + '</div><br>';        
        totalPrice = totalPrice + ((b[index].price / 100) * b[index].weight);
        totalWeight = totalWeight + (b[index].weight);
    }

    // TODO: WORK ON BASKET HTML! 
    let weightSummary = '<br><div class="grid-container" id="shoppingbag"><div class="itemInBasket">total weight: ' + totalWeight + '<br>total price: ' + round(totalPrice) + '</div><br></div>'; 
 
    console.log(basketstart + basket + basketend + weightSummary );
    document.getElementById("shoppingbag").innerHTML = basketstart + basket + basketend + weightSummary;     

    // TODO: ADD CHECKOUT BUTTON in basket and in Menu
}


// Supporting functions and Init functions! 
// supporting function for price 
function round(number) { 
    return +number.toFixed(10); 
}
// Have a function to load all content // TODO: remove logging when getting further
function initContent(){ 
    candiesShow = '<div class="grid-container" id="content">'; 
    loadContent(); 
    candiesShow = candiesShow + '</div>'; console.log(candiesShow); 
    document.getElementById("content").innerHTML = candiesShow; 
}
function initBasket(){ 
    let first = basketstart + 'No items in the basket' + basketend; document.getElementById("shoppingbag").innerHTML = first;
}
// Supporting function to create HTML for InitContent()
function loadContent(){ 
    for (const candy of candies) { 
        candiesShow = candiesShow + '<div class="grid-item"><img  onclick="add(\'' + candy + '\')" src="' + candy +'" alt="' + candy + '"></div>'; 
    } 
}