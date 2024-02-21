import { handleSubmit } from "../../ErrorHandler/handleSubmit.js";

class SigninForm {
  constructor() {
    this.form = document.createElement("form");
    this.form.id = "form";
    this.form.addEventListener("submit", handleSubmit);
  }

  initFeild(labelText, inputType) {
    const fieldGroup = document.createElement("div");
    fieldGroup.classList.add("group");
    this.form.appendChild(fieldGroup);

    const label = document.createElement("label");
    label.classList.add("label");
    label.setAttribute("for", labelText.toLowerCase());
    label.textContent = labelText;
    fieldGroup.appendChild(label);

    const input = document.createElement("input");
    input.classList.add("input");
    input.id = labelText;
    input.placeholder = `Enter your ${labelText}`;
    input.type = inputType;
    input.value = "";
    fieldGroup.appendChild(input);

    const errorHandler = document.createElement("div");
    errorHandler.classList.add("error");
    fieldGroup.appendChild(errorHandler);

    return input;
  }
  init() {
    const email = this.initFeild("Email", "Email");
    const password = this.initFeild("Password", "Password");

    const forgetPasswordLink = document.createElement("a");
    forgetPasswordLink.href = "#";
    forgetPasswordLink.textContent = "Forgot Password ?";

    const forgetPassword = this.createContainer(forgetPasswordLink);
    this.form.appendChild(forgetPassword);

    const submit = document.createElement("button");
    submit.classList.add("submitBtn");
    submit.type = "submit";
    submit.textContent = "Log In";
    this.form.appendChild(submit);

    const signupLink = document.createElement("a");
    signupLink.href = "./signUp.html";
    signupLink.textContent = "Create Account";

    const createAccount = this.createContainer(
      "New to Code Art ? ",
      signupLink
    );
    this.form.appendChild(createAccount);

    const line = document.createElement("div");
    line.classList.add("line");
    this.form.appendChild(line);

    const or = document.createElement("p");
    or.textContent = "or";
    line.appendChild(or);

    const googleSubmit = document.createElement("button");
    googleSubmit.classList.add("googleSubmitBtn");
    googleSubmit.type = "submit";
    googleSubmit.textContent = "Continue with Google";
    this.form.appendChild(googleSubmit);
  }
  createContainer(...content) {
    const container = document.createElement("div");
    container.classList.add("errorContainer");
    content.forEach((item) => {
      if (typeof item === "string") {
        container.textContent += item;
      } else if (item instanceof HTMLElement) {
        container.appendChild(item);
      }
    });
    return container;
  }
  getComponent() {
    return this.form;
  }
}
export default SigninForm;
