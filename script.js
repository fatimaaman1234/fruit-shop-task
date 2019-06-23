let priceOfApple = 10;
let priceOfOrange = 15;
let priceOfBanana = 7;
let noOfApple = 0;
let noOfOrange = 0;
let noOfBanana = 0;

let pocket = (document.querySelector("#pocket").value);

let totalAmount = (document.querySelector("#total").value);


function plusApple(){
    document.querySelector("#appleqnty").value = ++noOfApple;
   
}
function minusApple(){
    document.querySelector("#appleqnty").value = --noOfApple;
}


function plusOrange(){
    document.querySelector("#orangeqnty").value = ++noOfOrange;
}
function minusOrange(){
    document.querySelector("#orangeqnty").value = --noOfOrange;
}


function plusBanana(){
    document.querySelector("#bananaqnty").value = ++noOfBanana;
}
function minusBanana(){
    document.querySelector("#bananaqnty").value = --noOfBanana;
}

// WIP-JS




