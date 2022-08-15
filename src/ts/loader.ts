const MS_TIME: number = 1.5 * 1000; // 1.5 seconds

window.onload = () => {
  const loader = document.querySelector(".loader")! as HTMLElement;
  loader.style.animation = `fade ${MS_TIME}ms ease-in-out 1`;

  setTimeout(() => {
    loader.style.display = "none";
  }, MS_TIME);
};

export {};
