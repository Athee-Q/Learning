import SignupForm from "./SignupForm.js";

class SignUp {
  constructor() {
    this.signUp = document.createElement("div");
    this.signUp.classList.add("formMainPage");
  }
  init() {
    this.signUp.innerHTML = `
    <div class="formContainer">
      <h2 class="formHead">Sign Up & Start Learning</h2>
    </div>
  `;

    const signupForm = new SignupForm();
    signupForm.init();
    this.signUp
    .querySelector(".formContainer")
    .appendChild(signupForm.getComponent());
  }
  getComponent() {
    return this.signUp;
  }
}
export default SignUp;
