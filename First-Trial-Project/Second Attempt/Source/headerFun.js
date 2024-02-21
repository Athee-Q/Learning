class Header {
 /*  fetchAPI = async (url, Option = {}) => {
    try {
      const response = await fetch(url, Option);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  }; */
  async socialMedia(resultData) {
    const socialMediaElements = [];
    await resultData.socialmedia.forEach((list) => {
      const anchorel1 = document.createElement("a");
      anchorel1.href = list.url;

      const socialMediaFont = document.createElement("i");
      socialMediaFont.className = list.font;

      anchorel1.appendChild(socialMediaFont);
      socialMediaElements.push(anchorel1);
    });
    return socialMediaElements;
  }

  async contact(result) {
    const Contact = [];

    await result.contact.forEach((list) => {
      const contactFont = document.createElement("i");
      contactFont.className = list.font;
      const anchorEl2 = document.createElement("a");
      anchorEl2.href = list.url;
      anchorEl2.textContent = list.content;
      anchorEl2.appendChild(contactFont);
      Contact.push(anchorEl2);
    });
    return Contact;
  }

  async register(result) {
    const register = [];

    await result.register.forEach((list) => {
      const anchorEl3 = document.createElement("a");
      anchorEl3.href = list.url;
      anchorEl3.textContent = list.content;
      register.push(anchorEl3);
    });
    return register;
  }

  async menuBar(result) {
    const menu = [];

    await result.menu.forEach((list) => {
      const divElement = document.createElement("div");
      divElement.classList.add("item");
      const Anchor = document.createElement("a");
      Anchor.textContent = list.content;
      Anchor.href = list.url;
      divElement.appendChild(Anchor);
      menu.push(divElement);
    });
    return menu;
  }

  async menuItem1(result) {
    const menuItem = [];

    await result.company.forEach((list) => {
      const Anchor1 = document.createElement("a");
      Anchor1.classList.add("i-list");
      Anchor1.textContent = list.content;
      Anchor1.href = list.url;
      menuItem.push(Anchor1);
    });
    return menuItem;
  }

  async menuItem2(result) {
    const menuItem = [];

    await result.product.forEach((list) => {
      const Anchor = document.createElement("a");
      Anchor.classList.add("i-list");
      Anchor.textContent = list.content;
      Anchor.href = list.url;
      menuItem.push(Anchor);
    });
    return menuItem;
  }
}
export default Header;
