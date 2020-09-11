$(document).ready(function () {
  // add item and price to List
  $(document).on('click', 'button#add-button', function () {
    var item_name = $('input#name').val();
    var item_cost = $('input#cost').val();
   // add new elements
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

// total sum function.  Totals the subtotals
  function totalSum() {
    var currentSum = 0;
    $('div.item-subtotal').each(function(index, value) {
      var currentVal = Number($(value).text().replace(/\$/,""));
       currentSum += currentVal;
      // console.log('currentVal ', currentVal);
      // console.log('currentSum ', currentSum);
    });
    $('div#total-price').text('$' + currentSum);
  }

    // remove element and get new total
      $(document).on('click', 'button.remove', function() {
        $(this).parents('div.item').remove();
         totalSum();
      });

  // 1)collect item price and quantity and 2)add to subtotal and 3)display total sum
  $(document).on('input', 'input.user-qty', function() {
    // get input from user
      var currentQty = Number($(this).val());
      var currentPrice = Number($(this).parents().siblings('div.item-price').text().replace(/\$/,""));

      // update row total with current subtotal
      var currentRowTotal = currentQty * currentPrice;
      $(this).parents().siblings('div.item-subtotal').text('$' + currentRowTotal);
      totalSum();
  });
});
