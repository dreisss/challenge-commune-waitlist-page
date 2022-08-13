import "../styles/loader.css";

window.onload = () => {
  const loader = document.querySelector(".loader")! as HTMLElement;
  loader.style.animation = "fade-out 1s forwards ease-in-out";

  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
};
