// Add elements to the <header> element
// Example: dynamically create and append a header title
const header = document.querySelector('header');
if (header) {
  const title = document.createElement('h1');
  title.textContent = 'Welcome to Linea Collect';
  header.appendChild(title);
}
