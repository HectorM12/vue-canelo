const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Product 1', price: 19.99, image: 'img/black.jpg' },
                { name: 'Product 2', price: 29.99, image: 'img/Canelo.jpg' },
                { name: 'Product 3', price: 39.99, image: 'img/Goat.jpg' },
                { name: 'Product 4', price: 39.99, image: 'img/product3.jpg' }, 
                { name: 'Product 5', price: 39.99, image: 'img/product3.jpg' } 
            ]
        }
    },
    methods: {
        
    }
})


// // Function to create product elements and add them to the page
// function renderProducts() {
//     const container = document.getElementById('product-container');

//     products.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.classList.add('product');

//         const imageElement = document.createElement('img');
//         imageElement.src = product.image;
//         imageElement.alt = product.name;

//         const nameElement = document.createElement('h3');
//         nameElement.textContent = product.name;

//         const priceElement = document.createElement('p');
//         priceElement.textContent = `$${product.price.toFixed(2)}`;

//         productElement.appendChild(imageElement);
//         productElement.appendChild(nameElement);
//         productElement.appendChild(priceElement);

//         container.appendChild(productElement);
//     });
// }

// // Call the function to render products when the page loads
// window.onload = renderProducts;