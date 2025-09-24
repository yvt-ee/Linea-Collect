// Add elements to the <main> element
// Example: dynamically create and append a product list
const main = document.querySelector('main');
if (main) {
  const productList = document.createElement('ul');
  productList.id = 'product-list';
  // Example product item
  const productItem = document.createElement('li');
  productItem.textContent = 'Sample Product';
  productList.appendChild(productItem);
  main.appendChild(productList);
}
