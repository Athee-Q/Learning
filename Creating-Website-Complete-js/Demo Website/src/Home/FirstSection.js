class FirstSection {
  constructor() {
    this.firstSection = document.createElement("section");
    this.firstSection.classList.add("firstSection");

    this.init();
  }
  init() {
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("sectionContainer");
    this.firstSection.appendChild(sectionContainer);

    const sectionImg = document.createElement("div");
    sectionImg.classList.add("sectionImg");
    sectionContainer.appendChild(sectionImg);

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = "../Assets/image/bulbIt.png";
    sectionImg.appendChild(image);

    const sectionContent = document.createElement("div");
    sectionContent.classList.add("sectionContent");
    sectionContainer.appendChild(sectionContent);

    const header = document.createElement("div");
    header.classList.add("header");
    sectionContent.appendChild(header);

    const headerText = document.createElement("h2");
    headerText.textContent = 'Make Learning Limitless'
    header.appendChild(headerText);

    const body = document.createElement("div");
    body.classList.add("body");
    sectionContent.appendChild(body);

    const bodyText = document.createElement("p");
    bodyText.textContent = 'Not sure what Technology to focus on ? we helpyou to learn collection of course to develop your Technical Knowledge'
    body.appendChild(bodyText);

    const footer = document.createElement("a");
    footer.classList.add("footer");
    footer.href = '#'
    sectionContent.appendChild(footer)

    const footerBtn = document.createElement("button");
    footerBtn.classList.add("footerBtn");
    footerBtn.type = "button";
    footerBtn.textContent = "EXPLORE COURSES";
    footer.appendChild(footerBtn)
  }

  getComponent() {
    return this.firstSection;
  }
}

export default FirstSection;
