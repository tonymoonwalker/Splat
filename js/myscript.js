var $productName = $('.product-name');

$productName.click(function () {
    $productName.filter(':checked').not(this).removeAttr('checked');
});
