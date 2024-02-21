import SignupMain from "./SignupMain.js";

class SignupIndex {
  constructor() {
    this.signupIndex = document.getElementById("signUp");
  }
  init = async () => {
    
    const signupMain = new SignupMain();
    await signupMain.init();
    this.signupIndex.appendChild(signupMain.getComponent());
  };
}
const signupIndex = new SignupIndex();
signupIndex.init();
