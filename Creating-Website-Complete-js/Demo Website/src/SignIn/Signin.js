import SigninForm from "./SigninForm.js";

class Signin {
  constructor() {
    this.signin = document.createElement("div");
    this.signin.classList.add("formMainPage");
  }
  init() {
    this.signin.innerHTML = `
    <div class="formContainer">
      <h2 class="formHead">Login to your Account</h2>
    </div>
  `;

    const signinForm = new SigninForm();
    signinForm.init();
    this.signin
      .querySelector(".formContainer")
      .appendChild(signinForm.getComponent());
  }
  getComponent() {
    return this.signin;
  }
}
export default Signin;
