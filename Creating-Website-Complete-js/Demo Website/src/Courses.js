import App from "./App/App.js";
import fetchData from "./fetchData.js";

class Courses {
  constructor() {
    this.courses = document.createElement("div");
    coursesContainer.classList.add("courses");
  }
  createElementWithClass(tag, className) {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
  }

  createImage(src, alt) {
    const image = this.createElementWithClass("img", "image");
    image.src = src;
    image.alt = alt;
    return image;
  }

  createTextElement(tag, className, textContent) {
    const element = this.createElementWithClass(tag, className);
    element.textContent = textContent;
    return element;
  }

  createIconElement(className, iconClass) {
    const icon = this.createElementWithClass("span", className);
    icon.className = iconClass;
    return icon;
  }
  async createCard(limit = Infinity) {
    const app = new App();
    const respose = await fetchData(app.getURL());

    return respose.freeCourses.slice(0, limit).forEach((value) => {
      // Create container
      const container = this.createElementWithClass("div", "container");

      // Create image container
      const imageContainer = this.createElementWithClass(
        "div",
        "imageContainer"
      );
      container.appendChild(imageContainer);

      // Create image
      const image = this.createImage(value.image, "Program Icon");
      imageContainer.appendChild(image);

      // Create text container
      const textContainer = this.createElementWithClass("div", "textContainer");
      container.appendChild(textContainer);

      // Create text header
      const textHeader = this.createTextElement(
        "h3",
        "textHeader",
        value.title
      );
      textContainer.appendChild(textHeader);

      // Create text body
      const textBody = this.createElementWithClass("div", "textBody");
      textContainer.appendChild(textBody);

      // Create text tech
      const textTech = this.createTextElement(
        "span",
        "textTech",
        value.content
      );
      textBody.appendChild(textTech);

      // Create cost
      const cost = this.createTextElement("span", "cost", "Free");
      textBody.appendChild(cost);

      // Create text footer
      const textFooter = this.createElementWithClass("ul", "textFooter");
      container.appendChild(textFooter);

      // Create state container
      const stateCon = document.createElement("li");
      textFooter.appendChild(stateCon);

      // Create state icon
      const stateIcon = this.createIconElement(
        "stateIcon",
        "fa-solid fa-globe"
      );
      stateCon.appendChild(stateIcon);

      // Create state
      const state = this.createTextElement("span", "state", "Beginner");
      stateCon.appendChild(state);

      // Create language container
      const languageCon = document.createElement("li");
      textFooter.appendChild(languageCon);

      // Create language icon
      const langIcon = this.createIconElement("langIcon", "fa-solid fa-signal");
      languageCon.appendChild(langIcon);

      // Create language
      const language = this.createTextElement("span", "language", "Language");
      languageCon.appendChild(language);
    });
  }
  one() {
    return this.createCard();
  }
  two() {
    return this.createCard(2);
  }
  getComponent() {
    return [this.courses().one(), this.courses.two()];
  }
}
export default Courses;

// const container = document.createElement("div");
// container.classList.add("container");
// this.courses.appendChild(container);

// const imageContainer = document.createElement("div");
// imageContainer.classList.add("imageContainer");
// container.appendChild(imageContainer);

// const image = document.createElement("img");
// image.classList.add("image");
// image.src = value.image;
// image.alt = "Program Icon";
// imageContainer.appendChild(image);

// const textContainer = document.createElement("div");
// textContainer.classList.add("textContainer");
// container.appendChild(textContainer);

// const textHeader = document.createElement("h3");
// textHeader.classList.add("textHeader");
// textHeader.textContent = value.title;
// textContainer.appendChild(textHeader);

// const textBody = document.createElement("div");
// textBody.classList.add("textBody");
// textContainer.appendChild(textBody);

// const textTech = document.createElement("span");
// textTech.classList.add("textTech");
// textTech.textContent = value.content;
// textBody.appendChild(textTech);

// const cost = document.createElement("span");
// cost.classList.add("cost");
// cost.textContent = "Free";
// textBody.appendChild(cost);

// const textFooter = document.createElement("ul");
// textFooter.classList.add("textFooter");
// container.appendChild(textFooter);

// const stateCon = document.createElement("li");
// textFooter.appendChild(stateCon);

// const stateIcon = document.createElement("span");
// stateIcon.classList.add("stateIcon");
// stateIcon.className = "fa-solid fa-globe";
// stateCon.appendChild(stateIcon);

// const state = document.createElement("span");
// state.classList.add("state");
// state.textContent = "Beginer";
// stateCon.appendChild(state);

// const languageCon = document.createElement("li");
// textFooter.appendChild(languageCon);

// const langIcon = document.createElement("span");
// langIcon.classList.add("langIcon");
// langIcon.className = "fa-solid fa-signal";
// languageCon.appendChild(langIcon);

// const language = document.createElement("span");
// language.classList.add("language");
// language.textContent = "Language";
// languageCon.appendChild(language);
