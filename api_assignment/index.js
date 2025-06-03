const getApi = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const product = data.products;
    displayProducts(product);
  } catch(error) {
    console.error("Error", error);
  }
};

function displayProducts(products) {
  const list = document.getElementById("catalogGrid");
  list.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.className = "item-card";

    li.innerHTML = `
      <span class="badge-stock">${product.availabilityStatus}</span>
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p><strong>Brand</strong>: ${product.brand}</p>
      <p>Price: $${product.price}</p>
      <p>${product.description.slice(0, 60)}...</p>
      <p>review: ${product.reviews[0]?.comment || "No review available"}</p>
      <p><strong>Shipping Information</strong>: ${product.shippingInformation}</p>
    `;

    list.appendChild(li);
  });
}

window.addEventListener("DOMContentLoaded", getApi);