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


