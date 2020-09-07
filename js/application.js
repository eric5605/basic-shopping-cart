$(document).ready(function () {

// colelct total from input
$('div.item-price').each(function (i, ele) {
  // console.log($(ele).children().first().text());
  // console.log($(ele).text());
  var item = ($(ele).text());
  console.log(item);
});

var currentSum = function (amt, qty) {
  return amt * qty;
}

// remove-button
  $('button.remove').on('click', function() {
    $(this).parents('.row').remove();
  });
// total-button
  $('button.total-button').on('click', function() {
    alert("hello House");
  });

});
