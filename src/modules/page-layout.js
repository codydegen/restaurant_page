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
  };
  const clearBody = () => {
    const mainBody = document.getElementById('main-body');
    mainBody.setAttribute('data-attribute', '2');
    while (mainBody.firstChild) {
      mainBody.removeChild(mainBody.firstChild);
    }
  };

  return {
    createDocument,
    clearBody
  };
})();

export { Layout }