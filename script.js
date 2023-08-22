const mainParents = document.querySelectorAll(".main-parent");

mainParents.forEach((mainParent) => {
    mainParent.addEventListener("click", () => {
      const arrowup = mainParent.querySelector(".arrowup");
    const child = mainParent.querySelector(".collaps");
    if (child.classList.contains("hidden")) {
        child.classList.remove("hidden");
        arrowup.classList.add("rotate-180")
    } else {
        child.classList.add("hidden");
        arrowup.classList.remove("rotate-180");
    }
  });
});


// closing the menu
const closeMenu = () => {
    const Menu = document.querySelector(".menu")
    Menu.classList.add("hidden")
}
const openMenu = () => {
  const Menu = document.querySelector(".menu");
  Menu.classList.remove("hidden");
};