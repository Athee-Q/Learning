class FirstSection {
    constructor() {
      this.firstSection = this.createSection();
      this.init();
    }
  
    createSection() {
      const firstSection = document.createElement("section");
      firstSection.classList.add("firstSection");
      return firstSection;
    }
  
    createContainer(className) {
      const container = document.createElement("div");
      container.classList.add(className);
      return container;
    }
  
    createImage(src) {
      const image = document.createElement("img");
      image.classList.add("image");
      image.src = src;
      return image;
    }
  
    createHeader(textContent) {
      const header = document.createElement("div");
      header.classList.add("header");
      
      const headerText = document.createElement("h2");
      headerText.textContent = textContent;
      
      header.appendChild(headerText);
      return header;
    }
  
    createParagraph(textContent) {
      const paragraph = document.createElement("p");
      paragraph.textContent = textContent;
      return paragraph;
    }
  
    createButton(textContent) {
      const button = document.createElement("button");
      button.classList.add("footerBtn");
      button.type = "button";
      button.textContent = textContent;
      return button;
    }
  
    init() {
      const sectionContainer = this.createContainer("sectionContainer");
      const sectionImg = this.createContainer("sectionImg");
      const image = this.createImage("../Assets/image/bulbIt.png");
      const sectionContent = this.createContainer("sectionContent");
      const header = this.createHeader('Make Learning Limitless');
      const body = this.createContainer("body");
      const bodyText = this.createParagraph('Not sure what Technology to focus on? We help you to learn a collection of courses to develop your Technical Knowledge');
      const footer = this.createContainer("footer");
      const footerBtn = this.createButton("EXPLORE COURSES");
  
      sectionImg.appendChild(image);
      header.appendChild(headerText);
      body.appendChild(bodyText);
      footer.appendChild(footerBtn);
  
      sectionContainer.appendChild(sectionImg);
      sectionContainer.appendChild(sectionContent);
      sectionContent.appendChild(header);
      sectionContent.appendChild(body);
      sectionContent.appendChild(footer);
  
      this.firstSection.appendChild(sectionContainer);
    }
  
    getComponent() {
      return this.firstSection;
    }
  }
  
  export default FirstSection;
  