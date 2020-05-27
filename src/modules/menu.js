const Menu = (() => {
  const render = () => {
    const mainBody = document.getElementById('main-body');
    const foodContainer = document.createElement('div');
    foodContainer.id = 'food-container';
    const menuList = [
      {
        name: 'Hot Tofu',
        price: 12,
        description: 'Our world famous hot tofu served with one of four heat levels.'
      }, 
      {
        name: 'Coleslaw',
        price: 4,
        description: 'Our delightfully zingy coleslaw.'
      }, 
      {
        name: 'Mac & Cheese',
        price: 3,
        description: 'Back by popular demand, our mac & cheese is made with five different kinds of cheese and topped with breadcrumbs to give it a tasty crunch.'
      }
    ];

    menuList.forEach(item => {
      const card = document.createElement('div');
      card.classList = 'food-card';
      const foodName = document.createElement('h3');
      foodName.textContent = item.name;

      const foodPrice = document.createElement('h4');
      foodPrice.textContent = ""+item.price;

      const foodDescription = document.createElement('p');
      foodDescription.textContent = item.description;
      card.appendChild(foodName);
      card.appendChild(foodPrice);
      card.appendChild(foodDescription);
      foodContainer.appendChild(card);
    });
    mainBody.appendChild(foodContainer);
  }
  return { render };
})();

export { Menu }