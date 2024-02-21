const breadCrums = (item) => {
  const breadCrums = document.createElement("ul");
  breadCrums.classList.add("breadCrums");

  const breadCrumList = document.createElement("li");
  breadCrumList.classList.add("breadCrumList");
  breadCrums.appendChild(breadCrumList);

  const anchor = document.createElement("a");
  anchor.href = item;
  breadCrumList.appendChild(anchor);
  
};
