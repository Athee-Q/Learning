import FirstSection from "./FirstSection.js";
import CourseSection from "./CourseSection.js";
import FeedbackSection from "./FeedbackSection.js";

class Main {
  constructor() {
    this.main = document.createElement("main");
    this.main.classList.add("main");
  }
  async init(result) {
    const firstSection = new FirstSection();
    this.main.appendChild(firstSection.getComponent());

    const courseSection = new CourseSection();
    await courseSection.init();
    this.main.appendChild(courseSection.getComponent());

    const feedbackSection = new FeedbackSection();
    await feedbackSection.init(result);
    this.main.appendChild(feedbackSection.getComponent());
  }
  getComponent() {
    return this.main;
  }
}
export default Main;
