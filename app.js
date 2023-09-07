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
let mains = document.querySelectorAll(".gallery-main-img");
let minis = document.querySelectorAll(".gallery-mini img");
let index = 0;
function changeMain(n) {
  minis[index].classList.remove("active");
  mains[index].classList.add("hidden");
  index = n;
  mains[index].classList.remove("hidden");
  minis[index].classList.add("active");
}
let next = document.querySelector(".gallery-arrow-next");
let previous = document.querySelector(".gallery-arrow-previous");
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

//LIGHTBOX
let lightboxMains = document.querySelectorAll(".lightbox-main-img");
let lightboxMinis = document.querySelectorAll(".lightbox-mini img");
let lightboxIndex = 0;
let lightboxNext = document.querySelector(".lightbox-arrow-next");
let lightboxPrevious = document.querySelector(".lightbox-arrow-previous");
lightboxNext.addEventListener("click", () => {
  if (lightboxIndex < mains.length - 1) {
    lightboxMains[lightboxIndex].classList.add("hidden");
    lightboxMinis[lightboxIndex].classList.remove("active");
    lightboxIndex++;
    lightboxMains[lightboxIndex].classList.remove("hidden");
    lightboxMinis[lightboxIndex].classList.add("active");
  } else {
    lightboxMains[lightboxIndex].classList.add("hidden");
    lightboxMinis[lightboxIndex].classList.remove("active");
    lightboxIndex = 0;
    lightboxMains[lightboxIndex].classList.remove("hidden");
    lightboxMinis[lightboxIndex].classList.add("active");
  }
});
lightboxPrevious.addEventListener("click", () => {
  if (index != 0) {
    lightboxMains[index].classList.add("hidden");
    index--;
    lightboxMains[index].classList.remove("hidden");
  } else {
    lightboxMains[index].classList.add("hidden");
    index = lightboxMains.length - 1;
    lightboxMains[index].classList.remove("hidden");
  }
});
document.querySelector(".lightbox-close").addEventListener("click", () => {
  document.querySelector(".lightbox").classList.remove("visible");
});
for (main of mains) {
  main.addEventListener("click", () => {
    document.querySelector(".lightbox").classList.add("visible");
  });
}

//SHOW / HIDE CART
let cartButtons = document.querySelectorAll(".open-cart");
let cart = document.querySelector(".cart");
for (cartButton of cartButtons) {
  cartButton.addEventListener("click", () => {
    if (!cart.classList.contains("visible") && !cart.classList.contains("clickedAway")) {
      cart.classList.add("visible");
      updateCart();
    }
  });
}

document.addEventListener("mousedown", (event) => {
  //détecter si je clique en dehors du panier
  if (!cart.contains(event.target) && cart.classList.contains("visible")) {
    cart.classList.remove("visible");
    cart.classList.add("clickedAway");
    setInterval(() => {
      cart.classList.remove("clickedAway");
    }, 500);
  }
});

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
    createBubble(localStorage.amount);
  } else {
    let actualStorage = localStorage.getItem("amount");
    amountOfProduct = parseInt(amountOfProduct) + parseInt(actualStorage);
    localStorage.clear();
    localStorage.setItem("amount", amountOfProduct);
    updateCart();
    selectNumber = 0;
    showSelectedNumber();
    createBubble(localStorage.amount);
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
  if (localStorage.amount) {
    emptyCartMsg.classList.add("hidden");
    fullCartRow.classList.remove("hidden");
    cartAmount.textContent = "x" + localStorage.amount;
    cartTotal.textContent = parseInt(localStorage.amount) * 125 + " €";
  } else {
    emptyCartMsg.classList.remove("hidden");
    fullCartRow.classList.add("hidden");
  }
}
deleteCart.addEventListener("click", () => {
  localStorage.clear();
  updateCart();
  deleteBubble();
});

//CREATE BUBBLE
let cartBubble = document.createElement("div");
function createBubble() {
  document.querySelector(".right").prepend(cartBubble);
  cartBubble.classList.add("cart-bubble");
  cartBubble.textContent = localStorage.amount;
}
function deleteBubble() {
  cartBubble.remove();
}

addEventListener("load", () => {
  if (localStorage.amount) {
    createBubble();
  }
});
