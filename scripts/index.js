// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Темплейт карточки
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

const deleteCard = (cardElement) => {
    cardElement.remove();
};

const createCard = ({ name, link }) => {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__image').alt = name;
    cardElement.querySelector('.card__title').textContent = name;

    
    cardElement.querySelector('.card__delete-button').addEventListener('click', () => deleteCard(cardElement));
    return cardElement;
};

const renderInitialCards = (cards) => {
    cards.forEach((card) => placesList.append(createCard(card)));
};

renderInitialCards(initialCards);
