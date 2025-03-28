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