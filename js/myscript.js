var $productName = $('.product_checkbox');
$productName.filter(':checked').next().removeClass('product-name-hidden').addClass('product-name-visible-after');
$productName.filter(':checked').prev().removeClass('product-name-hidden').addClass('product-name-visible-before');

$productName.click(function () {
    $productName.filter(':checked').not(this).removeAttr('checked');
    $(this).removeClass('product-name-visible-after');
    $(this).removeClass('product-name-visible-before');
    $(this).addClass('product-name-hidden');
    $(this).next().removeClass('product-name-hidden').addClass('product-name-visible-after');
    $(this).prev().removeClass('product-name-hidden').addClass('product-name-visible-before');
});
