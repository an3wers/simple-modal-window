class Modal {
  constructor(el) {
    this.modal = document.querySelector(el);
    this.overlay = document.querySelector(".overlay");
  }

  open() {
    this.modal.classList.remove("hidden");
    this.overlay.classList.remove("hidden");
  }

  close() {
    this.modal.classList.add("hidden");
    this.overlay.classList.add("hidden");
  }
}

const modal = new Modal(".modal");

// btn
document
  .querySelector(".open-modal")
  .addEventListener("click", () => modal.open());

// close btn
document
  .querySelector(".close-modal")
  .addEventListener("click", () => modal.close());

// overlay
document
.querySelector(".overlay")
.addEventListener("click", () => modal.close());

// close by Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!modal.modal.classList.contains("hidden")) {
      modal.close();
    }
  }
});
