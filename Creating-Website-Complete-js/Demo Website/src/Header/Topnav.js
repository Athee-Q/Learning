class Topnav {
  constructor() {
    this.topNav = document.createElement("div");
    this.topNav.classList.add("topNav");
    this.init();
  }

  createLangContainer() {
    const langContainer = document.createElement("div");
    langContainer.classList.add("langContainer");
    this.topNav.appendChild(langContainer);

    const globeIcon = this.createIcon("fa-solid fa-globe globe");
    langContainer.appendChild(globeIcon);

    const lang = this.createSpan("lang", "English");
    langContainer.appendChild(lang);

    const langDropdown = document.createElement("ul");
    langDropdown.classList.add("langDropdown");
    langDropdown.style.display = "none";
    lang.appendChild(langDropdown);

    const langList = [
      { id: 1, lang: "en", label: "English", langURL: "#" },
      { id: 2, lang: "ta", label: "தமிழ்", langURL: "#" },
      { id: 3, lang: "ar", label: "عربي", langURL: "#" },
    ];

    langList.forEach((item) => {
      const langLi = document.createElement("li");
      langLi.classList.add("langLi");
      langLi.value = item.id;
      const anchorLi = this.createAnchor("anchorLi", item.label, item.langURL);
      langLi.appendChild(anchorLi);
      langDropdown.appendChild(langLi);
    });

    const downIcon = this.createIcon("fa-solid fa-chevron-down down");
    langContainer.appendChild(downIcon);
  }

  createRegisterContainer() {
    const registerContainer = document.createElement("div");
    registerContainer.classList.add("registerContainer");
    this.topNav.appendChild(registerContainer);

    const register = this.createAnchor("register", "", "./signIn.html");
    registerContainer.appendChild(register);

    const registerBtn = this.createButton("registerBtn", "Login/Register");
    register.appendChild(registerBtn);
  }

  init() {
    this.createLangContainer();
    this.createRegisterContainer();
  }

  createIcon(className) {
    const icon = document.createElement("span");
    icon.className = className;
    return icon;
  }

  createSpan(className, textContent) {
    const span = document.createElement("span");
    span.classList.add(className);
    span.textContent = textContent;
    return span;
  }

  createAnchor(className, textContent, href) {
    const anchor = document.createElement("a");
    anchor.classList.add(className);
    anchor.href = href;
    anchor.textContent = textContent;
    return anchor;
  }

  createButton(className, textContent) {
    const button = document.createElement("button");
    button.classList.add(className);
    button.role = "button";
    button.textContent = textContent;
    return button;
  }

  getComponent() {
    return this.topNav;
  }
}

export default Topnav;
