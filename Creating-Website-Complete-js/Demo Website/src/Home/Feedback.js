class Feedback {
  constructor() {
    this.feedback = document.createElement("div");
    this.feedback.classList.add("feedback");
  }
  async init(result) {
    const feedList = await result;

    feedList.feedback.forEach((element) => {
      const container = document.createElement("div");
      container.classList.add("container");
      this.feedback.appendChild(container);

      const feedbackHead = document.createElement("div");
      feedbackHead.classList.add("feedbackHead");
      container.appendChild(feedbackHead);

      const image = document.createElement("img");
      image.classList.add("image");
      image.src = "../Assets/image/Avatar.png";
      feedbackHead.appendChild(image);

      const feedbackBody = document.createElement("div");
      feedbackBody.classList.add("feedbackBody");
      container.appendChild(feedbackBody);

      const feed = document.createElement("p");
      feed.classList.add("feed");
      feed.textContent = element.content;
      feedbackBody.appendChild(feed);

      const name = document.createElement("p");
      name.classList.add("name");
      name.textContent = element.name;
      feedbackBody.appendChild(name);
      
    });
  }
  getComponent() {
    return this.feedback;
  }
}
export default Feedback;
