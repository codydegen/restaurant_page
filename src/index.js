import './style.css';
import { Layout } from "./modules/page-layout.js";
import { Home } from "./modules/home.js";
import { Menu } from "./modules/menu.js";
import { Contact } from "./modules/contact.js";

Layout.createDocument();
Home.render();

const homeButton = document.getElementById('header-list-home');
homeButton.addEventListener('click', () => {
  Layout.clearBody();
  Home.render();
});

const menuButton = document.getElementById('header-list-menu');
menuButton.addEventListener('click', () => {
  Layout.clearBody();
  Menu.render();
})

const contactButton = document.getElementById('header-list-contact');
contactButton.addEventListener('click', () => {
  Layout.clearBody();
  Contact.render();
})