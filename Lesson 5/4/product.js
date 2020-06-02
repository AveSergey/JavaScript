const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    const textButton = card.button.innerText;
    if (textButton === 'Подробнее') {
        openText(card);
    } else if (textButton === 'OK') {
        hideText(card);
    }
}

function hideText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}

function openText(card) {
    card.img.style.display = 'none';
    const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'OK';
}