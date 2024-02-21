import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import fetchData from "../fetchData.js";
import FreeCourses from "./FreeCourses.js";

class FreeCourseMain {
  constructor() {
    this.freeCourseMain = document.createElement("div");
    this.URL = "../Data/data.json";
  }

  init = async () => {
    const result = await fetchData(this.URL);

    const header = new Header();
    header.init(result);
    this.freeCourseMain.appendChild(header.getComponent());

    const freeCourses = new FreeCourses();
    freeCourses.init();
    this.freeCourseMain.appendChild(freeCourses.getComponent());

    const footer = new Footer();
    footer.init(result);
    this.freeCourseMain.appendChild(footer.getComponent());
  };
  getComponent() {
    return this.freeCourseMain;
  }
}
export default FreeCourseMain;
