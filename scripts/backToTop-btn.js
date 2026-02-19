const backToTop = document.getElementById("back-to-top");
backToTop.addEventListener("click", () => {
  const main = document.getElementById("main");
  let firstChild = main.firstElementChild;
  console.log(firstChild);
  firstChild.scrollIntoView({ behavior: "smooth", block: "start" });
  console.log("test");
});
