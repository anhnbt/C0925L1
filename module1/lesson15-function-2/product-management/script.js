// DOM (Document Object Model)
// const h2 = document.createElement('h2');
// h2.textContent = 'Add Product';
// document.body.append(h2);
const products = ['Apple', 'Banana', 'Orange', 'Apple iPhone 17'];

function editProduct(index) {
    products[index] = prompt('Enter product name: ', products[index]);
    displayProduct();
}

function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        products.splice(index, 1);
        displayProduct();
    }
}

function displayProduct() {
    document.getElementById('totalProduct').innerHTML = `Display Product (${products.length})`;
    let html = "<table>";
    for (let i = 0; i < products.length; i++) {
        // Template literals `: backtick
        // html += `<tr style="${i % 2 !== 0 ? 'background-color: gray' : ''}">
        html += `<tr>
                <td>${products[i]}</td>
                <td>
                    <button title="Edit a product" onclick="editProduct(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
                </td>
                <td>
                    <button title="Delete a product" onclick="deleteProduct(${i})"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>`;
    }
    html += "</table>";
    document.getElementById("tableList").innerHTML = html;
}

displayProduct();


function createProduct() {
    let productName = document.getElementById("productName").value;
    if (productName) {
        products.push(productName);
        document.getElementById("productName").value = '';
        displayProduct();
    } else {
        alert("Please enter a product name");
    }
}
