// Cart-Toggle

const cartToggle = document.querySelector(".cart-icon")
const cartContainer = document.querySelector(".cart-container")

cartToggle.addEventListener("click", () => {
  cartContainer.classList.toggle("active")
})

// Cart-Functionality
const addBtn = document.querySelector(".cart-button")
const cartItem = document.querySelector(".cart-item")

const cartAmount = document.querySelector(".amount")
const cartLength = document.querySelector(".cart-length")

let count = 0

function counter(n) {
  count += n
  if (count < 1) count = 0
  cartAmount.textContent = count

  // // Glitch: When Cart-list is open, automatically adds product.
  // if (cartContainer.classList.contains("active")) {
  //   event.stopPropagation()
  // }

  // // For the delete btn.
  // if (cartContainer.classList.contains("active")) {
  //   cartCounted()
  // }

  

}

function cartCounted() {
  cartAmount.textContent = count
  cartLength.textContent = count

  price = cartLength.textContent * 125
  cartItem.innerHTML = `
  <div class="cart-list">
          <img
            src="./images/image-product-1-thumbnail.jpg"
            alt="image-product-1-thumbnail"
          />
          <p>
            Fall Limited Edition Sneakers <br />
            $125.00   &times; ${count} <b>$${price}.00</b>
          </p>
          <span onclick="counter(-1);cartCounted()">
           <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#333" fill-rule="nonzero" xlink:href="#a"/></svg>
          </span>
        </div>
        <button onclick="checkout()" class="checkout-button">Checkout</button>`

        // When Cart No hits Zero
        if (cartLength.textContent == 0) {
          checkout()
        }
}

addBtn.addEventListener("click", cartCounted)

function checkout() {
  count = 0
  cartAmount.textContent = count
  cartLength.textContent = count

  cartItem.innerHTML = ` 
          <div class="text-center">
            <p>
              Your cart is empty.
            </p>
          </div>`
}
