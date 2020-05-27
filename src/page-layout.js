const Layout = (() => {

  const createHeader = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const navigation = document.createElement('nav');
    const headerPicture = document.createElement('div');
    headerPicture.id = 'header-picture';
    headerPicture.textContent = 'Not Chicken Takeover';
    const headerList = document.createElement('ul');
    headerList.id = 'header-list';
    const headerListContents = [
      {
        name: 'Home',
        id: 'header-list-home'
      },
      {
        name: 'Menu',
        id: 'header-list-menu'
      },
      {
        name: 'Contact Us',
        id: 'header-list-contact'
      },
    ];
    headerListContents.forEach(item => {
      const listItem = document.createElement('li');
      const textContent = item.name;
      const id = item.id;
      listItem.textContent = textContent;
      listItem.id = id;
      headerList.appendChild(listItem);
    });
    navigation.appendChild(headerPicture);
    navigation.appendChild(headerList);
    header.appendChild(navigation);
    content.appendChild(header);
  };

  const createBody = () => {
    const content = document.getElementById('content');
    const mainBody = document.createElement('div');
    mainBody.id = 'main-body';

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
    content.appendChild(mainBody);
  };
  const createFooter = () => {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    footerText.id = "footer-text";
    footerText.innerHTML ='NOT CHICKEN TAKEOVER, LLC<br>©2020';
    footer.appendChild(footerText);
    content.appendChild(footer);
    console.log('Footer Created');
  };
  const createDocument = () => {
    createHeader();
    createBody();
    createFooter();
  }

  return {
    createDocument
  };
})();

export { Layout }