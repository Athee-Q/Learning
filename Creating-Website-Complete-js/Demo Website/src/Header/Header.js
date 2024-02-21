import Navbar from "./Navbar.js";
import Topnav from "./Topnav.js";

class Header {
  constructor() {
    this.header = document.createElement("header");
    this.header.classList.add("header");
  }

  async init(result) {
    const topNav = new Topnav();

    const navBar = new Navbar();
    await navBar.init(result)
    this.header.appendChild(topNav.getComponent());
    this.header.appendChild(navBar.getComponent());
  }

  getComponent() {
    return this.header;
  }
}

export default Header;
