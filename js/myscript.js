$(document).ready(function () {
    var $productName = $('.product_checkbox');


    $productName.filter(':checked').removeClass('product-name-visible-before product-name-visible-after').addClass('product-name-hidden');
    $productName.filter(':checked').prev().addClass('product-name-visible-before');
    $productName.filter(':checked').next().addClass('product-name-visible-after');

    $productName.on('click', function () {
        $productName.filter(':checked').not(this).removeAttr('checked');
        var $itemIndex = $productName.index($(this));
        $productName.removeClass('product-name-visible-before product-name-visible-after').addClass('product-name-hidden');
        if ($itemIndex === 0) {
            $(this).removeClass('product-name-visible-before product-name-visible-after').addClass('product-name-hidden');
            $(this).next().addClass('product-name-visible-after');
        } else if ($itemIndex === 5) {
            $(this).removeClass('product-name-visible-before product-name-visible-after').addClass('product-name-hidden');
            $(this).prev().addClass('product-name-visible-before');
        } else {
            $(this).removeClass('product-name-visible-before product-name-visible-after').addClass('product-name-hidden');
            $(this).prev().addClass('product-name-visible-before');
            $(this).next().addClass('product-name-visible-after');
        }

    });
})
