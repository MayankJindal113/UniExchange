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
        const name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = product.name.toUpperCase();
        container.appendChild(name);
        const price = document.createElement("h6");
        price.innerText = product.price + "Rs";
        container.appendChild(price);
        card.appendChild(container);
        document.getElementById('products').appendChild(card);
    }
}

async function addProduct() {
    // const image = document.getElementById('image').value;
    let name = document.getElementById('productName').value;
    let price = document.getElementById('productPrice').value;

    const newProduct = {
        name,
        price,
        image: "/images/laptop1.jpeg",
        category: "Topwear"
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
    
    
    // const response = await fetch('products.json');
    // let products = await response.json();
    // products.push(newProduct);

    // await fetch('products.json', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(products)
    // });

    fetchProducts(); // Refresh product list after adding
}

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
