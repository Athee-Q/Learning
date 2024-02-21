import searchToggle from "./searchToggle.js";

class Navbar {
  constructor() {
    this.navBar = document.createElement("nav");
    this.navBar.classList.add("navBar");
  }

  async init(result) {
    const navList = await result;

    this.createLogoContainer(navList.logo);
    this.createMenuContainer(navList.menu);
    this.createSearchContainer();
  }

  createLogoContainer(logo) {
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");
    this.navBar.appendChild(logoContainer);

    const logoAnchor = document.createElement("a");
    logoAnchor.classList.add("logoAnchor");
    logoAnchor.href = logo.url;
    logoContainer.appendChild(logoAnchor);

    const logoPng = document.createElement("img");
    logoPng.classList.add("logoPng");
    logoPng.src = logo.img;
    logoPng.alt = logo.alt;
    logoAnchor.appendChild(logoPng);
  }

  createMenuContainer(menu) {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    this.navBar.appendChild(menuContainer);

    menu.forEach((element) => {
      const menuList = document.createElement("div");
      menuList.classList.add("menu");
      menuContainer.appendChild(menuList);

      const anchorMenu = document.createElement("a");
      anchorMenu.classList.add("anchorMenu");
      anchorMenu.href = element.url;
      anchorMenu.textContent = element.label;
      menuList.appendChild(anchorMenu);
    });
  }

  createSearchContainer() {
    const searchContainer = document.createElement("div");
    searchContainer.classList.add("searchContainer", "menuContainer");
    this.navBar.appendChild(searchContainer);

    const searchIcon = this.createSearchIcon();
    searchContainer.appendChild(searchIcon);

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("inputContainer");
    searchContainer.appendChild(inputContainer);

    const inputSearch = this.createSearchInput();
    inputContainer.appendChild(inputSearch);

    const inputIcon = document.createElement("span");
    inputIcon.className = "fa-solid fa-magnifying-glass inputSearchIcon";
    inputContainer.appendChild(inputIcon);
  }

  createSearchIcon() {
    const searchIcon = document.createElement("span");
    searchIcon.role = "button";
    searchIcon.onclick = () => searchToggle();
    searchIcon.className = "fa-solid fa-magnifying-glass searchIcon";
    return searchIcon;
  }

  createSearchInput() {
    const inputSearch = document.createElement("input");
    inputSearch.classList.add("inputSearch");
    inputSearch.type = "search";
    inputSearch.placeholder = "Enter your Text";
    inputSearch.pattern = "[a-zA-Z0-9]+";
    inputSearch.value = "";
    inputSearch.autocomplete = "off";
    return inputSearch;
  }

  getComponent() {
    return this.navBar;
  }
}

export default Navbar;
