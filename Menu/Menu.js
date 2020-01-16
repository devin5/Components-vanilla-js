let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

function createMenuItem(arr) {
  const menuA = document.createElement("div");
  const menuB = document.createElement("ul");

  arr.forEach(data => {
    var myLi = document.createElement("li");
    myLi.textContent = data;
    menuB.appendChild(myLi);
  });

  menuA.appendChild(menuB);
  menuA.classList.add("menu");

  const selector2 = document.querySelector(".menu-button");
  selector2.addEventListener("click", event => {
    menuA.classList.toggle("menu--open");
  });

  return menuA;
}

const selector = document.querySelector(".header");
selector.appendChild(createMenuItem(menuItems));
