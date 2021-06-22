const bs = document.querySelectorAll(".b");
const cs = document.querySelectorAll(".c");

telescopic();

function telescopic() {
  cs.forEach((c) => {
    c.style.display = "none";
  });
  bs.forEach((b) => {
    b.style.display = "inline";
    b.classList.add("reveal");
    const reveal = document.querySelector(".reveal");
    reveal.addEventListener("click", expandText);
  });

}

function expandText() {
  if (this.hasChildNodes) {
    const children = this.children;
    console.log(children);
  }
}


