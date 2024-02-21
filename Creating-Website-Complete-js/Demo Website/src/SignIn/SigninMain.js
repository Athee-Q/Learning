import Header from "../Header/Header.js";
import Signin from "./Signin.js";
import Footer from "../Footer/Footer.js";
import fetchData from "../fetchData.js";

class SigninMain {
  constructor() {
    this.signinMain = document.createElement("div");
    this.URL = "../Data/data.json";
  }

  init = async () => {
    const result = await fetchData(this.URL);

    const header = new Header();
    header.init(result);
    this.signinMain.appendChild(header.getComponent());

    const signin = new Signin();
    signin.init();
    this.signinMain.appendChild(signin.getComponent());

    const footer = new Footer();
    footer.init(result);
    this.signinMain.appendChild(footer.getComponent());
  };

  getComponent() {
    return this.signinMain;
  }
}
export default SigninMain;
