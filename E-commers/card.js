const products = [
    {
        name: "Product 1",
        description: "Product description goes here.",
        price: 10,
        image: "images/f1.jpeg"
    },
    {
        name: "Product 2",
        description: "Product description goes here.",
        price: 15,
        image: "images/f2.jpeg"
    },
    // Add more products here as needed
    {
        name: "Product 3",
        description: "Product description goes here.",
        price: 50,
        image: "images/f3.jpeg"
    },
    {
        name: "Product 4",
        description: "Product description goes here.",
        price: 45,
        image: "images/f4.jpeg"
    },
    {
        name: "Product 5",
        description: "Product description goes here.",
        price: 15,
        image: "images/f5.jpeg"
    },
    {
        name: "Product 6",
        description: "Product description goes here.",
        price: 5,
        image: "images/f6.jpeg"
    },
    {
        name: "Product 7",
        description: "Product description goes here.",
        price: 20,
        image: "images/f7.jpeg"
    },
    {
        name: "Product 8",
        description: "Product description goes here.",
        price: 25,
        image: "images/f2.jpeg"
    },
    {
        name: "Product 9",
        description: "Product description goes here.",
        price: 20,
        image: "images/f6.jpeg"
    },
    {
        name: "Product 10",
        description: "Product description goes here.",
        price: 20,
        image: "images/f3.jpeg"
    },
];

const cardContainer = document.getElementById("cardContainer");

products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.className = "image";
    image.src = product.image;
    image.alt = "Product Image";
    card.appendChild(image);

    const name = document.createElement("h3");
    name.className = "name";
    name.textContent = product.name;
    card.appendChild(name);

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = product.description;
    card.appendChild(description);

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = "$" + product.price;
    card.appendChild(price);

    const count = document.createElement("div");
    count.className = "count";

    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    decrementButton.onclick = () => decrementCount(decrementButton, price);
    count.appendChild(decrementButton);

    const countInput = document.createElement("input");
    countInput.type = "number";
    countInput.value = 1;
    count.appendChild(countInput);

    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    incrementButton.onclick = () => incrementCount(incrementButton, price);
    count.appendChild(incrementButton);

    card.appendChild(count);

    const addToCart = document.createElement("div");
    addToCart.className = "add-to-cart";

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.onclick = () => addToCartClicked(addToCartButton);
    addToCart.appendChild(addToCartButton);

    const buyButton = document.createElement("button");
    buyButton.textContent = "Buy";
    buyButton.onclick = () => buyClicked(buyButton);
    addToCart.appendChild(buyButton);

    card.appendChild(addToCart);

    cardContainer.appendChild(card);
});

function incrementCount(button, priceElement) {
    const input = button.parentElement.querySelector("input");
    let count = parseInt(input.value);
    input.value = count + 1;

    let price = parseFloat(priceElement.textContent.substring(1));
    price += products[0].price; // Assuming the price increment is fixed for all products
    priceElement.textContent = "$" + price;
}

function decrementCount(button, priceElement) {
    const input = button.parentElement.querySelector("input");
    let count = parseInt(input.value);
    if (count > 1) {
        input.value = count - 1;

        let price = parseFloat(priceElement.textContent.substring(1));
        price -= products[0].price; // Assuming the price increment is fixed for all products
        priceElement.textContent = "$" + price;
    }
}

function addToCartClicked(button) {
    const card = button.parentElement.parentElement;
    const name = card.querySelector(".name").textContent;
    const count = parseInt(card.querySelector(".count input").value);
    alert(name + " " + count + " added to cart successfully.");

    // redirect to profile page
    window.location.href = "profile.html";
}

function buyClicked(button) {
    // redirect to payment page
    window.location.href = "payment.html"; 
}