import Feedback from "./Feedback.js";

class FeedbackSection {
  constructor() {
    this.feedbackContainer = document.createElement("div");
    this.feedbackContainer.classList.add("feedbackContainer");
  }
  async init(result) {
    
    const nextContainer = document.createElement("div");
    nextContainer.classList.add("nextContainer");
    this.feedbackContainer.appendChild(nextContainer);
    const next = document.createElement("span");
    next.classList.add("next");
    next.textContent = "NEXT";
    nextContainer.appendChild(next);

    const prevContainer = document.createElement("div");
    prevContainer.classList.add("prevContainer");
    this.feedbackContainer.appendChild(prevContainer);
    const prev = document.createElement("span");
    prev.classList.add("prev");
    prev.textContent = "PREV";
    prevContainer.appendChild(prev);

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("headerContainer");
    this.feedbackContainer.appendChild(headerContainer);

    const header = document.createElement("h1");
    header.classList.add("header");
    header.textContent = "What Our Students Say ...?";
    headerContainer.appendChild(header);

    const bodyContainer = document.createElement("div");
    bodyContainer.classList.add("bodyContainer");

    const feedback = new Feedback();
    await feedback.init(result);
    bodyContainer.appendChild(feedback.getComponent());
    this.feedbackContainer.appendChild(bodyContainer);

    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footerContainer");
    this.feedbackContainer.appendChild(footerContainer);

    const dots = document.createElement("ul");
    dots.classList.add("dots");
    footerContainer.appendChild(dots);

    const dot1 = document.createElement("li");
    dot1.classList.add("dot");
    dots.appendChild(dot1);
    const dot2 = document.createElement("li");
    dot2.classList.add("dot");
    dots.appendChild(dot2);
    const dot3 = document.createElement("li");
    dot3.classList.add("dot");
    dots.appendChild(dot3);
  }
  getComponent() {
    return this.feedbackContainer;
  }
}
export default FeedbackSection;
