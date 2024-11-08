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

const createCard = ({ name, link }, deleteCardCallback) => {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = link;
    cardImage.alt = name;
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__delete-button').addEventListener('click', () => deleteCardCallback(cardElement));

    return cardElement;
};

const renderInitialCards = (cards) => {
    cards.forEach((card) => placesList.append(createCard(card, deleteCard)));
};

renderInitialCards(initialCards);