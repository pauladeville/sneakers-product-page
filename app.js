//MENU HAMBURGER
let menu = document.querySelector("#hamburger-menu");
let openMenu = document.querySelector("#hamburger-open");
let closeMenu = document.querySelector("#hamburger-close");
openMenu.addEventListener("click", () => {
  menu.classList.add("open");
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});

//IMAGE GALLERY
let mains = document.querySelectorAll(".main-img");
let index = 0;
function changeMain(n) {
  mains[index].classList.add("hidden");
  index = n;
  mains[index].classList.remove("hidden");
}
let next = document.querySelector(".arrow-next");
let previous = document.querySelector(".arrow-previous");
next.addEventListener("click", () => {
  if (index < mains.length - 1) {
    mains[index].classList.add("hidden");
    index++;
    mains[index].classList.remove("hidden");
  } else {
    mains[index].classList.add("hidden");
    index = 0;
    mains[index].classList.remove("hidden");
  }
});
previous.addEventListener("click", () => {
  if (index != 0) {
    mains[index].classList.add("hidden");
    index--;
    mains[index].classList.remove("hidden");
  } else {
    mains[index].classList.add("hidden");
    index = mains.length - 1;
    mains[index].classList.remove("hidden");
  }
});

//SHOW / HIDE CART
let cartButtons = document.querySelectorAll(".open-cart");
let cart = document.querySelector(".cart");
for (cartButton of cartButtons) {
  cartButton.addEventListener("click", () => {
    if (cart.classList.contains("visible")) {
      cart.classList.remove("visible");
    } else {
      cart.classList.add("visible");
      updateCart();
      document.body.addEventListener('click', (event)=> {
        //détecter si je clique en dehors du panier
        if(!cart.contains(event.target)){
          cart.classList.remove("visible");
          console.log('bim')
        }  
      })
    
    }
  });
};

while(cart.classList.contains('visible')){
}



//CHOSE AMOUNT
let selectNumber = 0;
let numberToAdd = document.querySelector(".select-number");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
function showSelectedNumber() {
  numberToAdd.textContent = selectNumber;
}
plus.addEventListener("click", () => {
  selectNumber++;
  showSelectedNumber();
});
minus.addEventListener("click", () => {
  if (selectNumber > 0) selectNumber--;
  showSelectedNumber();
});
showSelectedNumber();

//ADD TO LOCALSTORAGE
let addToCartButton = document.querySelector(".cta");
function addToCart(amountOfProduct) {
  if (!localStorage.amount) {
    localStorage.setItem("amount", amountOfProduct);
    updateCart();
    selectNumber = 0;
    showSelectedNumber();
  } else {
    let actualStorage = localStorage.getItem("amount");
    amountOfProduct = parseInt(amountOfProduct) + parseInt(actualStorage);
    localStorage.clear();
    localStorage.setItem("amount", amountOfProduct);
    updateCart();
    selectNumber = 0;
    showSelectedNumber();
  }
}
addToCartButton.addEventListener("click", () => {
  addToCart(selectNumber);
});

//UPDATE CART ROW
let cartAmount = document.querySelector("#cart-amount");
let cartTotal = document.querySelector("#cart-total");
let deleteCart = document.querySelector("#delete");
let emptyCartMsg = document.querySelector(".cart-content-empty");
let fullCartRow = document.querySelector(".cart-content-full");
function updateCart() {
  emptyCartMsg.classList.add("hidden");
  fullCartRow.classList.remove("hidden");
  cart.classList.add("visible");
  if (localStorage.amount) {
    cartAmount.textContent = "x" + localStorage.amount;
    cartTotal.textContent = (parseInt(localStorage.amount)*125) + ' €';
  } else {
    cartAmount.textContent = 0;
    emptyCartMsg.classList.remove("hidden");
    fullCartRow.classList.add("hidden");
  }
}
deleteCart.addEventListener("click", () => {
  localStorage.clear();
  updateCart();
});

//MASQUER PANIER QUAND SCROLL OU CLICK SUR LA PAGE
