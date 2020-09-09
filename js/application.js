$(document).ready(function () {

// remove-button
  $(document).on('click', 'button.remove', function() {
    $(this).parents('div.item').remove();
  });
// total-button
  $(document).on('click', 'button.total-button', function() {
    alert("hello House");
  });

  // add item and price to List
  $(document).on('click', 'button#add-button', function () {
    var item_name = $('input#name').val();
    var item_cost = $('input#cost').val();

    $('#item-list').prepend('<div class="row item"> \
      <div class="item-name col-xs-3"> \ '
      +  item_name + '\
      </div> \
      <div class="item-price col-xs-3"> \
        $' + item_cost + '.00 \
      </div> \
      <div class="item-qty col-xs-3"> \
        <label>QTY</label> \
        <input class="user-qty" type="number" value="0"> \
      </div> \
      <div class="col-xs-1"> \
        <button class="remove"> \
          Remove \
        </button> \
      </div> \
      <div class="item-subtotal col-xs-2"> \
      $0 \
      </div> \
    </div>');
  });

  // collect item price and quantity add to subtotal
  $(document).on('input', 'input.user-qty', function() {
      var currentQty = Number($(this).val());
      var currentPrice = Number($(this).parents().siblings('div.item-price').text().replace(/\$/,""));
      var rowSubtotal = currentQty * currentPrice;
      console.log(rowSubtotal);
      $(this).parents().siblings('div.item-subtotal').text('$' + rowSubtotal);
    });

});
