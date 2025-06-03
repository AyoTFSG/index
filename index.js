// // const btn = document.querySelector('.login-button')

// // btn.addEventListener('click', function() {
// //   let email = document.getElementById('email').value;
// //   let password = document.getElementById('password').value;

// //   if (email === 'appclick@gmail.com' && password === '1234AppClick') {
// //     alert('Login successful!');

// //     const welcome = document.getElementById('welcome-text');
// //     welcome.innerText = "Welcome Ayo!";

// //     const container = document.getElementById('container');
// //     container.remove();
    

// //   } else {
// //     alert('Incorrect email or password.');
// //   }
// // });

// // btn.addEventListener('click', function() {
// //   let email = document.getElementById('email').value;
// //   let password = document.getElementById('password').value;

// // if (email === "" && password === "") 
// //     alert('Insert login details!');
// // });

// // fetch("https://dummyjson.com/products")
// //   .then((response) => response.json())
// //   .then((data) => console.log(data))
// //   .catch((error) => console.log("error", error));

// const getApi = async () => {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();
//     displayProducts(data.products);
//   } catch(error) {
//     console.error("Error", error);
//   }
// };

// function displayProducts(products) {
//   const list = document.getElementById("productList");
//   list.innerHTML = "";

//   products.forEach((products) => {
//     const li = document.createElement("li");
//     li.className = "product";
//     li.innerHTML = `
//           <img src= "${products.thumbnail}" alt= "${products.title}">
//           <h3>${products.title}</h3>
//           <p>Price: $${products.price}</p>
//           <p>${products.description.slice(0, 60)}...</p>
//           `;
//     list.appendChild(li);
//   })
// }


//   window.addEventListener("DOMContentLoaded", getApi);

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
