const accordionButton = document.querySelectorAll('.accordion__btn-container');
const accordionContainer = document.querySelectorAll('.accordion__item');

const toggleAccordion = function (e) {
    e.preventDefault();

    accordionContainer.forEach((el) => el.classList.remove('accordion__open'));

    e.target.parentNode.classList.add('accordion__open');
};

document.querySelector('.accordion__item').classList.add('accordion__open');

accordionButton.forEach((el) => el.addEventListener('click', toggleAccordion));
