$('.tab').click(function () {

    $('.tab').removeClass('active');
    $(this).addClass('active');
});

$('.tabs-item-title').click(function () {
    const expand = $(this).parent().attr('data-expand');
    if (expand === 'false') {
        $(this).parent().attr('data-expand', 'true');
    } else {
        $(this).parent().attr('data-expand', 'false');
    }
});