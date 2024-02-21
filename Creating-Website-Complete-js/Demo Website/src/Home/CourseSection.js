import Courses from "../Courses.js";

class CourseSection {
  constructor() {
    this.courseSection = this.createElement("div", "courseSection");
  }

  async init() {
    this.courseSection.appendChild(this.createHeader());
    this.courseSection.appendChild(this.createElement("div", "dividerLine"));

    const body = this.createElement("div", "body");
    this.courseSection.appendChild(body);

    try {
      const courses = new Courses();
      await courses.two();
      courses.appendChild(courses.getComponent());
      body.appendChild(courses);
    } catch (error) {
      console.error("Error fetching or rendering courses:", error);
    }
    
    this.courseSection.appendChild(this.createFooter());
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  createHeader() {
    const header = this.createElement("div", "coursesHeader");
    header.appendChild(this.createElement("h2", "heading")).textContent =
      "Popular Courses";
    return header;
  }

  createFooter() {
    const footer = this.createElement("div", "footer");
    const btnDiv = footer.appendChild(this.createElement("div", "btnDiv"));
    const moreBtn = btnDiv.appendChild(this.createElement("button", "moreBtn"));
    const moreLink = moreBtn.appendChild(this.createElement("a", "moreLink"));
    moreLink.href = "#";
    moreLink.textContent = "More";
    return footer;
  }

  getComponent() {
    return this.courseSection;
  }
}

export default CourseSection;
