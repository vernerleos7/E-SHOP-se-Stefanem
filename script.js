function addToBasket(itemName, itemPrice) {
  var tableBody = document.querySelector('#basketModal tbody');
  var newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${itemName}</td>
    <td>${itemPrice}</td>
    <td><button type="button" class="btn btn-outline-danger" onclick="removeFromBasket(this)">Odebrat</button></td>
  `;
  tableBody.appendChild(newRow);
}


function removeFromBasket(item) {
  var row = item.closest('tr');
  row.remove();
}



function addToBasket(itemName, itemPrice) {
  var tableBody = document.querySelector('#basketModal tbody');
  var newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${itemName}</td>
    <td>${itemPrice}</td>
    <td><button type="button" class="btn btn-outline-danger" onclick="removeFromBasket(this)">X</button></td>
  `;
  tableBody.appendChild(newRow);

  // Show the basket modal
  var basketModal = new bootstrap.Modal(document.querySelector('#basketModal'));
  basketModal.show();
}

