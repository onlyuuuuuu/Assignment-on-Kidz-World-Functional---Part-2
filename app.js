var cartValue = document.getElementById("cart-icon").querySelector("b");
var addButtons = document.querySelectorAll(".white-cart, .white-cart-G, .white-cart-g");

var items = [
    { name: "This was our pact", quantity: 0, dollars: 7, cents: 49 },
    { name: "The famous five", quantity: 0, dollars: 4, cents: 59 },
    { name: "Matilda", quantity: 0, dollars: 6, cents: 80 },
    { name: "Harry Potter", quantity: 0, dollars: 10, cents: 0 },
    { name: "For Young Readers", quantity: 0, dollars: 7, cents: 29 },
    { name: "Wimpy Kid - DIY", quantity: 0, dollars: 4, cents: 99 },
    { name: "Dart Board", quantity: 0, dollars: 17, cents: 49 },
    { name: "Connect Four", quantity: 0, dollars: 19, cents: 99 },
    { name: "Jenga", quantity: 0, dollars: 20, cents: 99 },
    { name: "Monopoly", quantity: 0, dollars: 19, cents: 49 },
    { name: "Bookmarks", quantity: 0, dollars: 12, cents: 49 },
    { name: "Birthday Card", quantity: 0, dollars: 12, cents: 49 },
    { name: "Stuffed toys", quantity: 0, dollars: 15, cents: 99 },
    { name: "Dream catcher drawing", quantity: 0, dollars: 18, cents: 49 }
];


function updateCart() {
  let cart = 0;
  for (let index = 0; index < items.length; index++) {
    cart += items[index].quantity;
  }
  cartValue.textContent = `(${cart})`;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = () => {
    items[i].quantity++;
    updateCart();
  };
}

var totalPriceElement = document.getElementById("total-price");

function updatePrice() {
  let totalPriceInCents = 0;

  for (let index = 0; index < items.length; index++) {
    totalPriceInCents +=
      items[index].quantity * (items[index].dollars * 100 + items[index].cents);
  }

  const finalDollars = Math.floor(totalPriceInCents / 100);
  const finalCents = totalPriceInCents % 100;
  totalPriceElement.textContent = `Total: $${finalDollars}.${finalCents}`;
}

var cartButton = document.getElementById("cart-icon");

cartButton.onclick = () => {
  updatePrice();

  console.log("Items in the cart:");
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity !== 0) {
      console.log(
        `${items[index].name} - Quantity: ${items[index].quantity}`
      );
    }
  }
  console.log(`Total cart value: ${totalPriceElement.textContent}`);
};
