import SigninMain from "./SigninMain.js";

class SigninIndex {
  constructor() {
    this.signinIndex = document.getElementById("signIn");
  }
  init = async () => {
    const signinMain = new SigninMain();
    await signinMain.init();
    this.signinIndex.appendChild(signinMain.getComponent());
  };
}
const signinIndex = new SigninIndex();
signinIndex.init();
