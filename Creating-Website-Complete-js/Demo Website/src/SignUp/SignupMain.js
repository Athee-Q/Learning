import Header from "../Header/Header.js";
import SignUp from "./Signup.js";
import Footer from "../Footer/Footer.js";
import fetchData from "../fetchData.js";

class SignupMain {
  constructor() {
    this.register = document.createElement("div");
    this.URL = "../Data/data.json";
  }

  init = async () => {
    const result = await fetchData(this.URL);

    const header = new Header();
    header.init(result);
    this.register.appendChild(header.getComponent());

    const signUp = new SignUp();
    signUp.init();
    this.register.appendChild(signUp.getComponent());

    const footer = new Footer();
    footer.init(result);
    this.register.appendChild(footer.getComponent());
  };

  getComponent() {
    return this.register;
  }
}
export default SignupMain;
