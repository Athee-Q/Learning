import App from "../src/App/App.js";

class Root {
  constructor() {
    this.root = document.getElementById("root");
  }
  init = async () => {
    const app = new App();
    await app.init()
    this.root.appendChild( app.getComponent());
  };
}
const root = new Root();
root.init();
