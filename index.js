const cartBtn = document.getElementById("cart");
const cartModal = document.querySelector(".cart");
const cartCloseBtn = cartModal.querySelector(".cart-close");

const openCart = () => {
  cartModal.style.display = "flex";
};

const closeCart = () => {
  cartModal.style.display = "";
};

//cartBtn.onclick = openCart;

cartCloseBtn.onclick = closeCart;
console.log(cartCloseBtn);
