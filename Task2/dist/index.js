"use strict";
let person = {
    name: "Khalid",
    age: 20,
};
person.age > 18 ? console.log("Adult") : console.log("Minor");
let teacher = {
    name: "Mosa",
    subjects: ["Math", "Calc", "Chem"],
};
console.log(teacher.subjects);
let product = {
    name: "Mouse",
    price: 13.99,
    qunatity: 20,
};
if (product.qunatity > 5) {
    console.log((product.price * 15) / 100);
}
let products = JSON.parse(localStorage.getItem("products") || "[]");
function displayProducts() {
    const productContainer = document.getElementById('user-product');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = "product-card";
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Quantity: ${product.quantity}</p>
        `;
        productContainer.appendChild(card);
    });
}
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("name");
    let description = document.getElementById("des");
    let price = document.getElementById("price");
    let quantity = document.getElementById("qunt");
    const n = name.value;
    const d = description.value;
    const p = Number(price.value);
    const q = Number(quantity.value);
    const newProduct = {
        name: n,
        description: d,
        price: p,
        quantity: q
    };
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    name.value = '';
    description.value = '';
    price.value = '';
    quantity.value = '';
    displayProducts();
});
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
