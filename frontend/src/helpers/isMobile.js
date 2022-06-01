export default function isMobile() {
  const view = document.getElementById("body");
  return view.clientWidth <= 768;
}
