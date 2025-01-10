const cardTemplate = document.querySelector('#card-template').content;
const listPlaces = document.querySelector('.places__list');

function deleteCard (event) {
  const card = event.target.closest('.card');
  card.remove();
}

function createCard ({ name, link }) {
  const cardItem = cardTemplate.cloneNode(true);
  const imageCard = cardItem.querySelector('.card__image');
  const cardTitle = cardItem.querySelector('.card__title');
  const deleteButton = cardItem.querySelector('.card__delete-button');

  imageCard.src = link;
  imageCard.alt = name;
  cardTitle.textContent = name;

  deleteButton.addEventListener('click', deleteCard);

  return cardItem;
}

initialCards.forEach(function (card) {
  listPlaces.append(createCard(card));
});