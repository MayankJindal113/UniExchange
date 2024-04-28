console.log("Welcome");

const addProductBtn2 = document.getElementById('addProductButton')

let products;

async function fetchProducts() {
    console.log("fetching products...")
    const response = await fetch('/products');
    products = await response.json();
    console.log(products);  
    for (let product of products) {
        const card = document.createElement("div");
        card.classList.add("card", product.category); // Add category class
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        const image = document.createElement("img");
        image.setAttribute("src", product.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);
        const container = document.createElement("div");
        container.classList.add("container");
        const price = document.createElement("h3");
        price.innerText = product.price + "Rs";
        container.appendChild(price);
        const name = document.createElement("h4");
        name.classList.add("product-name");
        name.innerText = product.name.toUpperCase();
        container.appendChild(name);
        const location = document.createElement("h5");
        location.classList.add("product-location");
        location.innerText = "Hostel D";
        container.appendChild(location);
        card.appendChild(container);
        document.getElementById('products').appendChild(card);
    }
}

// fetchProducts();

async function addProduct() {
    // const image = document.getElementById('image').value;
    let name = document.getElementById('productName').value;
    let price = document.getElementById('productPrice').value;
    let category = document.getElementById('Category').value;

    const newProduct = {
        name,
        price,
        image: "/images/laptop1.jpeg",
        category
        // id: Math.random()
    };
    name = "";
    price = "";


    const response = await fetch('/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newProduct })
    });

    const result = await response.text();
    alert(result); // Display success message

    // fetchProducts();
   
}
// fetchProducts();

// function addProduct() {
//     console.log('add product called')
//     const productName = document.getElementById('productName').value;
    
//     const productPrice = document.getElementById('productPrice').value;
//     const productDescription = document.getElementById('productDescription').value;
//     const productImageInput = document.getElementById('productImage');
//     console.log('fn4 called')
//     const productImage = productImageInput.files[0]; 
//     // updateMiscellaneous(productPrice, productDescription, productImage);

//     document.getElementById('productPrice').value = "";
//     document.getElementById('productDescription').value = "";
//     productImageInput.value = ""; 

//         products.data.push({
//                 productName,
//                 category: productDescription,
//                 price: productPrice,
//                 image: "/images/instaa.png",
//             },) 
// }



document.querySelector('.sell-button').addEventListener('click', function() {
    var sellItem = document.querySelector('.sellItem');
    // var dropD=document.querySelector('#dropDown');

    if (sellItem.style.display === 'none') {
      sellItem.style.display = 'flex';
      sellItem.style.flexDirection = 'column';
    //   dropD.style.display = 'flex';

    } else {
      sellItem.style.display = 'none';
    //   dropD.style.display = 'none';
    }
  });


addProductBtn2.addEventListener("click", () => {
    console.log("another fn callled")
    addProduct();
})
  console.log("This iscode");

  document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

// function updateMiscellaneous(name, description, image) 
//     {
//         const productContainer = document.createElement('div');
//         productContainer.classList.add('product');

//         const descriptionElement = document.createElement('p');
//         descriptionElement.textContent = `Description: ${description}`;
//         productContainer.appendChild(descriptionElement);

//         const nameElement = document.createElement('p');
//         nameElement.textContent = `Price: ${name}`;
//         productContainer.appendChild(nameElement);

//         if (image) {
//             const imageElement = document.createElement('img');
//             imageElement.src = URL.createObjectURL(image);
//             imageElement.alt = 'Product Image';
//             imageElement.style.maxWidth = '300px';
//             imageElement.style.maxHeight = '300px';
//             productContainer.appendChild(imageElement);
//         }
        

//         document.getElementById('products').appendChild(productContainer);

//         }




    // filtering

        function filterProduct(value) {
            let buttons = document.querySelectorAll(".button-value");
            buttons.forEach((button) => {
            if (value.toUpperCase() == button.innerText.toUpperCase()) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
            });
        
            let elements = document.querySelectorAll(".card");
            elements.forEach((element) => {
            if (value == "all") {
                element.classList.remove("hide");
            } else {
                if (element.classList.contains(value)) {
                element.classList.remove("hide");
                } else {
                element.classList.add("hide");
                }
            }
            });
        }
        


        // searching

        document.getElementById("search").addEventListener("click", () => {
            let searchInput = document.getElementById("search-input").value;
            let elements = document.querySelectorAll(".product-name");
            let cards = document.querySelectorAll(".card");
        
            elements.forEach((element, index) => {
            if (element.innerText.includes(searchInput.toUpperCase())) {
                cards[index].classList.remove("hide");
            } else {
                cards[index].classList.add("hide");
            }
            });
        });
        
        window.onload = () => {
            filterProduct("all");
        };




// function validateImage() {
//     var fileInput = document.getElementById('productImage');
//     var fileName = fileInput.value;
//     if (/\.(jpe?g)$/i.test(fileName)) {
//         // Valid JPG or JPEG file
//         return true;
//     } else {
//         // Invalid file format
//         alert('Please select a JPG or JPEG format image.');
//         fileInput.value = ''; // Clear the file input
//         return false;
//     }
// }

// function validateProductName() {
//     var productName = document.getElementById('productName').value.trim();
//     var alphabeticCount = productName.replace(/[^a-zA-Z]/g, '').length; // Count alphabetic characters

//     var fileInput = document.getElementById('productImage');

//     if (productName === '') {
//         alert('Please enter the product name.');
//         document.getElementById('productName').focus(); // Set focus back to the input field
//         fileInput.disabled = true; // Disable file input if product name is empty
//         return false;
//     } else if (alphabeticCount < 2) {
//         alert('Product name should contain at least 2 alphabetic characters.');
//         document.getElementById('productName').focus(); // Set focus back to the input field
//         fileInput.disabled = true; // Disable file input if product name is invalid
//         return false;
//     } else if (productName.length > 25) {
//         alert('Product name should not exceed 25 characters.');
//         document.getElementById('productName').focus(); // Set focus back to the input field
//         fileInput.disabled = true; // Disable file input if product name is too long
//         return false;
//     }

//     // Enable file input if product name is valid
//     var productPrice = document.getElementById('productPrice').value.trim();
//     fileInput.disabled = (productPrice === ''); // Disable file input if price is empty
//     return true;
// }

// function validateProductDescription() {
//     var productDescription = document.getElementById('productDescription').value.trim();
//     if (productDescription === '') {
//         alert('Please enter the product description.');
//         document.getElementById('productDescription').focus(); // Set focus back to the input field
//         return false;
//     }
//     return true;
// }

// function validateProductPrice() {
//     var productPrice = document.getElementById('productPrice').value.trim();

//     // Regular expression to check for valid input (only numbers)
//     var validInputRegex = /^[^+\-]+$/;

//     // Check if the input is empty
//     if (productPrice === '') {
//         alert('Enter price'); // Display message for empty price
//         document.getElementById('productPrice').focus(); // Set focus back to the input field
//         return false;
//     } else if (!validInputRegex.test(productPrice)) {
//         alert('Price should contain only numbers.'); // Display message for invalid input
//         document.getElementById('productPrice').focus(); // Set focus back to the input field
//         return false;
//     } else if (parseFloat(productPrice) <= 0) {
//         alert('Price should be greater than 0.'); // Display message for invalid price
//         document.getElementById('productPrice').focus(); // Set focus back to the input field
//         return false;
//     }

//     // Enable file input if price is valid and product name is not empty
//     var productName = document.getElementById('productName').value.trim();
//     var fileInput = document.getElementById('productImage');
//     fileInput.disabled = (productName === ''); // Disable file input if product name is empty
//     return true;
// }

// function addProduct(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get the values of the fields
//     var productName = document.getElementById('productName').value.trim();
//     var productDescription = document.getElementById('productDescription').value.trim();
//     var productPrice = document.getElementById('productPrice').value.trim();

//     // Check if any field is empty
//     if (productName === '' || productDescription === '' || productPrice === '') {
//         // Display alert message for empty fields
//         alert('Please fill in all fields.');
//         return; // Exit function if any field is empty
//     }

//     // Display the product details
//     alert('Product Name: ' + productName + '\nProduct Description: ' + productDescription + '\nPrice: Rs ' + productPrice);

//     // Clear the form fields
//     document.getElementById('productName').value = '';
//     document.getElementById('productDescription').value = '';
//     document.getElementById('productPrice').value = '';
//     document.getElementById('productImage').value = '';
// }
