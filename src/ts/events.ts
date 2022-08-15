const ANIMATION_FADE = [{ opacity: 1 }, { opacity: 0 }];
const ANIMATION_CONFIGS = {
  duration: 1.5 * 1000,
  easing: "ease-in-out",
};

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader")! as HTMLElement;
  loader.animate(ANIMATION_FADE, ANIMATION_CONFIGS);

  setTimeout(() => {
    loader.style.display = "none";
  }, ANIMATION_CONFIGS.duration as number);
});

const JOIN_BUTTON = document.querySelector(
  ".dropdown-menu-content li:last-child .btn"
)! as HTMLElement;

JOIN_BUTTON.addEventListener("click", () => {
  const MAIN_INPUT = document.querySelector(".input")! as HTMLElement;
  MAIN_INPUT.focus();
});

export {};
