import fetchData from "./fetchData.js";
import Header from "./headerFun.js";

const headerInstance = new Header();

const API_URL = "../Data/header.json";
const resultData = await fetchData(API_URL);

const servicesTag = document.getElementById("services");

if (resultData != null) {
  const Media = document.createElement("div");
  Media.classList.add("socialmedia");
  servicesTag.appendChild(Media);

  const socialMediaElements = await headerInstance.socialMedia(resultData);
  socialMediaElements.forEach((element) => {
    Media.appendChild(element);
  });

  const toContact = document.createElement("div");
  toContact.classList.add("tocontact");
  servicesTag.appendChild(toContact);

  const createcontact = await headerInstance.contact(resultData);

  createcontact.forEach((element) => {
    toContact.appendChild(element);
  });

  const toRegister = document.createElement("div");
  toRegister.classList.add("toregister");
  servicesTag.appendChild(toRegister);

  const createRegister = await headerInstance.register(resultData);

  createRegister.forEach((element) => {
    toRegister.appendChild(element);
  });

  const navlogo = document.getElementById("logo");
  const anchorTag = document.createElement("a");
  anchorTag.href = resultData.logo.url;
  navlogo.appendChild(anchorTag);
  const logoImage = document.createElement("img");
  logoImage.src = resultData.logo.image;
  logoImage.alt = "CSIT-LOGO";
  anchorTag.appendChild(logoImage);

  const navMenu = document.querySelector(".menu");

  const menu = await headerInstance.menuBar(resultData);

  menu.forEach((list) => {
    navMenu.appendChild(list);
  });

  const dItem1 = navMenu.children[1];
  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");
  menuItem1.classList.add("first");
  dItem1.appendChild(menuItem1);

  const items1 = await headerInstance.menuItem1(resultData);

  items1.forEach((list) => {
    menuItem1.appendChild(list);
  });

  const dItem2 = navMenu.children[2];
  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");
  menuItem2.classList.add("second");
  dItem2.appendChild(menuItem2);

  const items2 = await headerInstance.menuItem2(resultData);

  items2.forEach((list) => {
    menuItem2.appendChild(list);
  });
}
const navSearch = document.querySelector(".search");
const searchButton = document.createElement("button");

const searchIcon = document.createElement("i");
searchIcon.className = "fa-solid fa-magnifying-glass";
searchButton.appendChild(searchIcon);
navSearch.appendChild(searchButton);

const sideMenu = document.querySelector(".menu");
const layOver = document.querySelector(".overlay");
const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("show");
  layOver.classList.add("show");
});

layOver.addEventListener("click", () => {
  sideMenu.classList.remove("show");
  layOver.classList.remove("show");
});
