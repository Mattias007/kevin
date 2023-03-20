// function to get product data
export async function getProductsData() {

    // fetch request to dummyjson and save response to response
    const response = await fetch('https://dummyjson.com/products');
    // makes resopnes in to json format and saves producs in to array
    const { products } = await response.json();
    // returns the array
    return products;
}




// function to get product data
async function getProductCategories() {
    // fetch request to dummyjson and save response to response
    const response = await fetch('https://dummyjson.com/products/categories');
    // makes resopnes in to json format and saves producs in to array
    const data = await response.json();
    // returns the array
    return data;
}

// Tee UI button elemente samapalju kui on kategooriaid
async function createCategoryButtons() {
    // Runs get product categori and save returned value to categories
    const categories = await getProductCategories();
    // Gets html document from DOM and save it to const
    const categoryList = document.querySelector('.category-list');
    
    // Makes html button for each category goten from the 
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-button');
        button.innerText = category;
        categoryList.append(button);
    });
}

async function showProductList() {
    // Näita tootelisti kategooria nuppude all.
    const products = await getProductsData();

    const productTablebodyElement = document.querySelector('.table-body');

    products.forEach((product) => {
        // console.log(product)
        const tableRow = document.createElement('tr');

        const content = `
            <tr>
                <td>${product.id}</td>
                <td>
                    <img src="${product.thumbnail}" alt="${product.title}" />
                </td>
                <td>${product.title}</td>
                <td>${product.rating}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.discountPercentage}</td>
            </tr>
        `

        tableRow.innerHTML = content;

        productTablebodyElement.append(tableRow);
    })
}

showProductList();
createCategoryButtons();

