const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');
ingredients.forEach(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add('.item');
  ingredientsList.append(list);
});
