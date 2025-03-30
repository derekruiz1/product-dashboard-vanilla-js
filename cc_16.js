//Task 2
const BASE_URL = 'https://www.course-api.com/javascript-store-products'

function fetchProductsThen(){
    return fetch(BASE_URL) //Getting URL
    .then(response => {
        if(!response.ok){ //Error
            throw new Error (`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(products => { //Gets product names
        products.forEach(product => {
            console.log(product.fields.name)
        })
    })
    .catch(error => { //Catches everything else
        console.error('Fetch Failed:', error.message);
        throw error
    })
}

fetchProductsThen(); 

//Task 3 
async function fetchProductsAsync() {
    try { //Using try to get products
        const response = await fetch(BASE_URL)

        if(!response.ok){
            throw new Error(`Error: ${response.status}`)
    }
    const products = await response.json();
    displayProducts(products) //Helper function to be made in task 4
} catch (error) { //Catches everything else
    console.error('API Fetch Failed:', error.message);
    handleError(error); //Function to be made task 5
    throw error
}
}   

//Task 4
function displayProducts(products) {
    const container = document.getElementById('product-container')
    products.slice(0,5).forEach (product => { //Takes first five products
    const div = document.createElement('div');
    div.innerHTML = //Takes name, price and image
    `<h3>${product.fields.name}</h3>
    <p>$${product.fields.price}</p>
    <img src=${product.fields.image}>`
    container.appendChild(div);
    })
}

//Task 5 
function handleError(error){
    if (error) { 
        console.log(`An error occured: ${error.message}`)
    }
}