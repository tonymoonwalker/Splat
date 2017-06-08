var $productName = $('.product_checkbox');

$productName.filter(':checked').next().removeClass('product-name-hidden').addClass('product-name-visible-after');
$productName.filter(':checked').prev().removeClass('product-name-hidden').addClass('product-name-visible-before');

$productName.click(function () {
    $productName.filter(':checked').not(this).removeAttr('checked');
    var $productCounter = $('.product_checkbox').length;
    alert($productCounter);
    var $productIndex = indexOf($productName);
    alert($productIndex);
    //    $productName.removeClass('product-name-visible-after product-name-visible-before').addClass('product-name-hidden');
    //    if $(this).prev().addClass('product-name-visible-before');
    //    $(this).not(last).next().addClass('product-name-visible-after');
});
