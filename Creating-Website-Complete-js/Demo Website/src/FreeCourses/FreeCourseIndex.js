import FreeCourseMain from "./FreeCourceMain.js";

class FreeCourseIndex {
  constructor() {
    this.freeCourseIndex = document.getElementById("freeCourses");
  }
  init = async () => {
    const freeCourseMain = new FreeCourseMain();
    await freeCourseMain.init();
    this.freeCourseIndex.appendChild(freeCourseMain.getComponent());
  };
}
const freeCourseIndex = new FreeCourseIndex();
freeCourseIndex.init();
