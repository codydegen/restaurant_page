const Home = (() => {

  const render = () => {
    const mainBody = document.getElementById('main-body');
    const restaurantTag = document.createElement('div');
    restaurantTag.id = 'restaurant-tag';
    restaurantTag.innerText = 'Delicious Hot Tofu Butchered Fresh Daily';
    mainBody.appendChild(restaurantTag);

    const restaurantAboutUs = document.createElement('div');
    restaurantAboutUs.id = 'body-about-us';
    restaurantAboutUs.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum, ipsum nec malesuada consectetur, nibh mi dictum mauris, a sodales felis enim id turpis. Aliquam suscipit leo vel elit sollicitudin, auctor mollis lorem tincidunt. Nam malesuada ante nisl, ut dictum sem dapibus et. Duis ut elit venenatis, bibendum metus in, rutrum nulla. Nunc et orci interdum, pellentesque tortor nec, fringilla arcu. Phasellus varius placerat scelerisque. Donec at purus quis velit luctus tincidunt. Donec eget dictum sem, eget egestas erat. Integer elementum quam a sem scelerisque, ut mattis quam ornare. Fusce maximus elit vel ligula tempor, in facilisis ipsum pharetra. Aliquam vel libero odio. Praesent id egestas nulla.';
    mainBody.appendChild(restaurantAboutUs);

    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'button-container';

    const orderButton = document.createElement('button');
    orderButton.id = 'button-order';
    orderButton.innerText = 'Order Now';
    buttonContainer.appendChild(orderButton);

    const menuButton = document.createElement('button');
    menuButton.id = 'button-menu';
    menuButton.innerText = 'View Menu';
    buttonContainer.appendChild(menuButton);
    mainBody.appendChild(buttonContainer);
  }

  return {
    render
  }
})();

export { Home }