import { handleSubmit } from "../../ErrorHandler/handleSubmit.js";

class SignupForm {
  constructor() {
    this.form = document.createElement("form");
    this.form.id = "form";
    this.form.addEventListener("submit", handleSubmit);
  }

  initField(labelText, inputType) {
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
    input.setAttribute("id", labelText.toLowerCase());
    input.type = inputType;
    input.value = "";
    input.placeholder = `Enter your ${labelText}`;
    fieldGroup.appendChild(input);

    const errorHandler = document.createElement("div");
    errorHandler.classList.add("error");
    fieldGroup.appendChild(errorHandler);

    return input;
  }

  init() {
    const username = this.initField("User Name", "text");
    const email = this.initField("Email", "email");
    const mobilenumber = this.initField("Mobile Number", "text");
    const password = this.initField("Password", "password");
    const cpassword = this.initField("Confirm Password", "password");

    const signinLink = document.createElement("a");
    signinLink.href = "./signIn.html";
    signinLink.textContent = "Sign In";

    const signinLinkContainer = this.createContainer(
      "Already on CodeArt ? ",
      signinLink
    );
    this.form.appendChild(signinLinkContainer);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submitBtn");
    submitBtn.type = "submit";
    submitBtn.textContent = "Create Account";
    this.form.appendChild(submitBtn);

    const line = document.createElement("div");
    line.classList.add("line");
    this.form.appendChild(line);

    const or = document.createElement("p");
    or.textContent = "or";
    line.appendChild(or);

    const googleSubmitBtn = document.createElement("button");
    googleSubmitBtn.classList.add("googleSubmitBtn");
    googleSubmitBtn.type = "submit";
    googleSubmitBtn.textContent = "Sign in with Google";
    this.form.appendChild(googleSubmitBtn);

    const termOfUseLink = document.createElement("a");
    termOfUseLink.href = "#";
    termOfUseLink.textContent = "Term of use";

    const privacyPolicyLink = document.createElement("a");
    privacyPolicyLink.href = "#";
    privacyPolicyLink.textContent = "Privacy Policy";

    const termAndPrivacy = this.createContainer(
      "By signing up, I agree to CodeArt ",
      termOfUseLink,
      " and ",
      privacyPolicyLink
    );
    this.form.appendChild(termAndPrivacy);
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

export default SignupForm;
