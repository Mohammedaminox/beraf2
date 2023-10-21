
const panier = document.getElementsByClassName("SIDEBAR");

function afficheSide() {
    panier[0].style.display = 'block';
}

function closeSide() {
    panier[0].style.display = 'none';
}

const plusButtons = document.querySelectorAll(".plus");
const moinButtons = document.querySelectorAll(".moin");
const quantityElements = document.querySelectorAll(".counterQuantity");
let removeCard = document.getElementsByClassName("btn-trash");
console.log(removeCard);
for(let i = 0 ; i < removeCard.length ; i++ ){
    let button = removeCard[i]
    button.addEventListener("click", function (event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    })
}

plusButtons.forEach((button, index) => {
    let a = 1;
    button.addEventListener("click", () => {
        a++;
        if (a < 10) {
            a = (a < 10) ? "0" + a : a;
        }
        quantityElements[index].innerText = a;
    });
});

moinButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let a = quantityElements[index].innerText;
        if (a > 1) {
            a--;
            a = (a < 10) ? "0" + a : a;
            quantityElements[index].innerText = a;
        }
    });
});


