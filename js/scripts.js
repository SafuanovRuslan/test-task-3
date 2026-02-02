let selectedCurrency = 'rub';

$(document).on('click', '#colors', () => {
    $('#colorsList').toggleClass('hidden');
    $('#colors').toggleClass('active');
});

$(document).on('click', '.currency-btn', (e) => {
    let target = $(e.currentTarget);

    if (target.hasClass('active')) {
        return;
    }

    selectedCurrency = selectedCurrency === 'rub' ? 'usd' : 'rub';

    $('.currency-btn').toggleClass('active');

    $('.tarifs__old-price').each((key, item) => {
        switchPrice(item);
    });

    $('.tarifs__new-price').each((key, item) => {
        switchPrice(item);
    });
});

function switchPrice(item) {
    item = $(item);
    let price = item.data('price');

    if (selectedCurrency === 'usd') {
        price = Math.trunc(price / 70);
    }

    price = price.toLocaleString('ru-RU');
    price += selectedCurrency === 'rub' ? '₽' : '$';

    item.text(price);
}