import isMobile from "./isMobile";
export default function lateralScroll(element) {
  const item = element;
  let isDown = false;
  let startX;
  let scrollLeft;
  let mouseH = false;

  window.addEventListener("wheel", function (e) {
    if (mouseH) {
      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    }
  });

  item.addEventListener("mouseover", (e) => {
    mouseH = true;
    if (!isMobile()) {
      document.body.style.overflow = "hidden";
      document.body.style.userSelect = "none";
    }
  });
  item.addEventListener("mouseleave", () => {
    mouseH = false;
    isDown = false;
    item.classList.remove("active");
    document.body.style.overflow = "overlay";
    document.body.style.userSelect = "auto";
  });

  item.addEventListener("mousedown", (e) => {
    isDown = true;
    item.classList.add("active");
    startX = e.pageX - item.offsetLeft;
    scrollLeft = item.scrollLeft;
  });
  item.addEventListener("mouseup", () => {
    isDown = false;
    item.classList.remove("active");
  });
  item.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - item.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    item.scrollLeft = scrollLeft - walk;
  });
}
