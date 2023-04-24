function addToBasket(name, price) {
  // Find the tbody element in the basket modal
  const tbody = document.querySelector("#basketModal tbody");

  // Create a new row for the sneaker
  const row = document.createElement("tr");

  // Create cells for the name and price
  const nameCell = document.createElement("td");
  const priceCell = document.createElement("td");

  // Set the text content of the cells
  nameCell.textContent = name;
  priceCell.textContent = price;

  // Add the cells to the row
  row.appendChild(nameCell);
  row.appendChild(priceCell);

  // Add the row to the table
  tbody.appendChild(row);
  
  // Show an alert to confirm the product has been added to the basket
  alert(`${name} byly přidány do košíku.`);
}
