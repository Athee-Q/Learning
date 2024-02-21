import Header from "../Header/Header.js";
import Main from "../Home/Main.js";
import Footer from "../Footer/Footer.js";
import fetchData from "../fetchData.js";

class App {
  constructor() {
    this.app = document.createElement("div");
    this.URL = "../Data/data.json";
  }

  init = async () => {
    const result = await fetchData(this.URL);

    const header = new Header();
    header.init(result);
    this.app.appendChild(header.getComponent());

    const main = new Main();
    main.init(result);
    this.app.appendChild(main.getComponent());

    const footer = new Footer();
    footer.init(result);
    this.app.appendChild(footer.getComponent());
  };
  getComponent() {
    return this.app;
  }
  getURL() {
    return this.URL;
  }
}
export default App;
