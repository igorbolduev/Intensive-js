"use strict";

const modalButton = document.querySelector(".modal__button");
const modal = document.querySelector(".modal");
const modalClose = document.createElement("button");

modalButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

modal.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner");

  if (!modalContent) {
    modal.style.display = "none";
  }
});

modalClose.textContent = "X";
modalClose.classList.add("modalClose");

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.appendChild(modalClose);
