class Footer {
  constructor() {
    this.footer = document.createElement("footer");
    this.footer.classList.add("footer");
  }
  async init(result) {
    const footerList = await result;

    const footerTop = document.createElement("div");
    footerTop.classList.add("footerTop");
    this.footer.appendChild(footerTop);

    const footerLeft = document.createElement("div");
    footerLeft.classList.add("footerLeft");
    footerTop.appendChild(footerLeft);

    footerList.footer.forEach((item) => {
      const footerItem = document.createElement("span");
      footerItem.classList.add("footerItem");
      footerLeft.appendChild(footerItem);

      const footerAnchor = document.createElement("a");
      footerAnchor.textContent = item.label;
      footerAnchor.href = item.url;

      footerItem.appendChild(footerAnchor);
    });

    const footerRight = document.createElement("div");
    footerRight.classList.add("footerRight");
    footerTop.appendChild(footerRight);

    footerList.socialMedia.forEach((item) => {
      const iconAnchor = document.createElement("a");
      iconAnchor.classList.add("iconAnchor");
      footerRight.appendChild(iconAnchor);

      const icon = document.createElement("span");
      icon.className = item.class;
      iconAnchor.appendChild(icon);
    });

    const footerBottom = document.createElement("div");
    footerBottom.classList.add("footerBottom");
    this.footer.appendChild(footerBottom);

    const copy = document.createElement("span");
    copy.classList.add("copy");
    copy.textContent = '© ' + new Date().getFullYear() +".";
    footerBottom.appendChild(copy);

    const rights = document.createElement("span");
    rights.classList.add("rights");
    rights.textContent = "ALL RIGHTS RESERVED";
    footerBottom.appendChild(rights);
  }
  getComponent() {
    return this.footer;
  }
}
export default Footer;
