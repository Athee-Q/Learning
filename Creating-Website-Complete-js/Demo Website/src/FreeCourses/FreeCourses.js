import Courses from "../Courses.js";

class FreeCourses {
  constructor() {
    this.freeCourses = document.createElement("div");
    this.freeCourses.classList.add("freeCourses");
  }
  init = async () => {
    const pageTitleArea = this.createPageTitleArea();
    this.freeCourses.appendChild(pageTitleArea);
    const freeCourseContentSection = this.contentSection();
    this.freeCourses.appendChild(freeCourseContentSection);
  };

  createPageTitleArea() {
    const container = document.createElement("div");
    container.classList.add("page-title-area");

    const pageTitleContent = document.createElement("div");
    pageTitleContent.classList.add("page-title-content");
    container.appendChild(pageTitleContent);

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Courses";
    pageTitleContent.appendChild(pageTitle);
    

    return container;
  }

  async contentSection() {
    const container = document.createElement("div");
    container.classList.add("content-section");

    const courses = new Courses();
    await courses.init(result);
    container.appendChild(courses.getComponent());

    return container;
  }
  getComponent() {
    return this.freeCourses;
  }
}
export default FreeCourses;
