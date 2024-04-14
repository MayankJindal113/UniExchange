const addProductBtn = document.getElementById('addProductButton')

addProductBtn.addEventListener("click", () => {
    console.log("another fn callled")
    addProduct()
})

function addProduct() {
    console.log('fn called')
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productImageInput = document.getElementById('productImage');
    const productImage = productImageInput.files[0]; // Get the selected image file
    console.log("type of obj:  ",typeof(productImage))
    // need to set image here
    
    // const productImg = 
    
    // WAIT FOR 2 minutes I AM CHECKING OUT THE SOLUTION 

    // Update the UI with the added product in the "Miscellaneous" section
    updateMiscellaneous(productName, productDescription, productImage);

    // Optional: You can clear the input fields after adding the product
    document.getElementById('productName').value = "";
    document.getElementById('productDescription').value = "";
    productImageInput.value = ""; // Clear the file input
}



function updateMiscellaneous(name, description, image) {
    // Create a new product container
    const productContainer = document.createElement('div');
    productContainer.classList.add('product');

    // Create elements for name and description
    const nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${name}`;
    productContainer.appendChild(nameElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${description}`;
    productContainer.appendChild(descriptionElement);

    // Create an image element
    if (image) {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(image);
        imageElement.alt = 'Product Image';
        // Set dimensions for the image
        imageElement.style.maxWidth = '300px';
        imageElement.style.maxHeight = '300px';
        productContainer.appendChild(imageElement);
    }

    // Append the new product container to the "Miscellaneous" section
    document.getElementById('miscellaneous').appendChild(productContainer);
}

