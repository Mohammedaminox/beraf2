let SideBar = document.querySelector(".SIDEBAR");
let plusButtons = document.querySelectorAll(".plus")
let moinButtons = document.querySelectorAll(".moin")
let counterQuantity = document.querySelectorAll(".counterQuantity")
let cardPrice = document.querySelectorAll(".cardprice")
let cardTotal = document.querySelectorAll(".cardtotal")
let sideCards = document.querySelectorAll(".sidecards")
let removeButtons = document.querySelectorAll(".btn-trash");

function afficheSide() {
    SideBar.style.display = "block";
}
function closeSide() {
    SideBar.style.display = "none"
}

plusButtons.forEach((button, index) => {
    button.addEventListener("click", function(){
        let a = counterQuantity[index].innerText;
        console.log(a)
        a++;
        if (a < 10){
            a = "0" + a;
        }
        counterQuantity[index].innerText = a;
        Total();

    })
    
})

moinButtons.forEach((button, index) => {
    
    button.addEventListener("click", function(){
        let a = counterQuantity[index].innerText;
        if (a > 1){
            a--;
            if (a < 10){
                a = "0" + a;
            }
            counterQuantity[index].innerText = a;
            Total();
        }
    })
    
})

removeButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        sideCards[index].remove();
        Total();
    
    });
        
});

function Total() {
    let totalPrice = 0
    for(let i = 0 ; i < document.querySelectorAll(".sidecards").length ; i++){
        const quantity = parseInt(document.querySelectorAll(".counterQuantity")[i].innerText);
        const price = 120;
        totalPrice += quantity * price;
        cardTotal[0].innerText = totalPrice;
        cardTotal[0].innerText = cardTotal[0].innerText + "$"
        cardTotal[1].innerText = totalPrice;
        cardTotal[1].innerText = cardTotal[1].innerText + "$"
        
    }
    if(document.querySelectorAll(".sidecards").length === 0){
        cardTotal.innerText = "$0"
    }
}




