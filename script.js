function addToBasket(itemName, itemPrice) {
  var tableBody = document.querySelector('#basketModal tbody');
  var newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${itemName}</td>
    <td>${itemPrice}</td>
    <td><button type="button" class="btn btn-outline-danger" onclick="removeFromBasket(this)"><img src="images/icons8-trash.svg" alt=""</button></td>
  `;
  tableBody.appendChild(newRow);

  // Show the basket modal
  var basketModal = new bootstrap.Modal(document.querySelector('#basketModal'));
  basketModal.show();

  // Update total price
  updateTotalPrice();

  // Save basket to localStorage
  saveBasketToLocalStorage();
}

function removeFromBasket(item) {
  var row = item.closest('tr');
  row.remove();

  // Update total price
  updateTotalPrice();

  // Save basket to localStorage
  saveBasketToLocalStorage();
}

function updateTotalPrice() {
  var totalPriceElement = document.querySelector('#totalPrice');
  var tableRows = document.querySelectorAll('#basketModal tbody tr');
  var totalPrice = 0;
  for (var i = 0; i < tableRows.length; i++) {
    var price = parseFloat(tableRows[i].querySelectorAll('td')[1].textContent.replace(/\s/g, '').replace(',', '.'));
    totalPrice += price;
  }
  totalPriceElement.innerHTML = totalPrice.toLocaleString('cs-CZ', { style: 'currency', currency: 'CZK' });

  // Save total price to localStorage
  localStorage.setItem('totalPrice', totalPrice);
}

function saveBasketToLocalStorage() {
  var tableRows = document.querySelectorAll('#basketModal tbody tr');
  var basketItems = [];
  for (var i = 0; i < tableRows.length; i++) {
    var itemName = tableRows[i].querySelectorAll('td')[0].textContent;
    var itemPrice = tableRows[i].querySelectorAll('td')[1].textContent;
    basketItems.push({ name: itemName, price: itemPrice });
  }
  localStorage.setItem('basketItems', JSON.stringify(basketItems));
}

// Load basket from localStorage on page load
window.addEventListener('load', function() {
  var basketItems = JSON.parse(localStorage.getItem('basketItems'));
  if (basketItems) {
    var tableBody = document.querySelector('#basketModal tbody');
    for (var i = 0; i < basketItems.length; i++) {
      var newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${basketItems[i].name}</td>
        <td>${basketItems[i].price}</td>
        <td><button type="button" class="btn btn-outline-danger" onclick="removeFromBasket(this)"><img src="images/icons8-trash.svg" alt=""</button></td>
      `;
      tableBody.appendChild(newRow);
    }

    // Update total price
    var totalPrice = localStorage.getItem('totalPrice');
    var totalPriceElement = document.querySelector('#totalPrice');
    totalPriceElement.innerHTML = totalPrice ? parseFloat(totalPrice).toLocaleString('cs-CZ', { style: 'currency', currency: 'CZK' }) : '0 Kč';
  }
});
