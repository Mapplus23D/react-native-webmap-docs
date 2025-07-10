// Constants
const CLOSING_CLASS = "closing";
const OVERLAY_ID = "tsd-overlay";

/** Fills the gap that scrollbar occupies. Call when the modal is opened */
function hideScrollbar() {
  const width = Math.abs(
    window.innerWidth - document.documentElement.clientWidth,
  );

  document.body.style.overflow = "hidden";

  // Give padding to element to balance the hidden scrollbar width
  document.body.style.paddingRight = `${width}px`;
}

/** Resets style changes made by {@link hideScrollbar} */
function resetScrollbar() {
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("padding-right");
}

/**
 * Must be called to setup a modal element properly for entry and exit side-effects.
 *
 * Adds event listeners to the modal element, for the closing animation.
 *
 * Adds workaround to fix scrolling issues caused by default browser behavior.
 *
 * **Note**:
 * - Do not use native `show`, `showModal` or `close` methods when using this.
 * - `cancel` event is overridden.
 *
 * @param options Configure modal behavior
 * @param options.closeOnEsc Defaults to true
 * @param options.closeOnClick Closes modal when clicked on overlay, defaults to false.
 */
function setUpModal(
  modal,
  options,
) {
  // Event listener for closing animation
  // Closes the modal on *any* animation if it has the CLOSING_CLASS
  // If another animation is needed, make the animation longer than the actual closing animation
  modal.addEventListener("animationend", () => {
    if (!modal.classList.contains(CLOSING_CLASS)) return;

    modal.classList.remove(CLOSING_CLASS);
    document.getElementById(OVERLAY_ID)?.remove();
    modal.close();
    resetScrollbar();
  });

  // Override modal cancel behavior, hopefully all browsers have same behavior
  // > When a `<dialog>` is dismissed with the `Esc` key, both the `cancel` and `close` events are fired.
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/cancel_event
  modal.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeModal(modal);
  });

  if (options?.closeOnClick) {
    document.addEventListener(
      "click",
      (e) => {
        console.log(e.target)
        if (modal.open && !modal.contains(e.target)) {
          // if (modal.open && !modal.contains(e.target)) {
          // if (modal.open && e.target.id !== 'tsd-search-input') {
          closeModal(modal);
        }
      },
      true, // Disable invoking this handler in bubbling phase
    );
  }
}

/** Opens modal and adds overlay */
function openModal(modal) {
  if (!modal || modal.open) return;

  const overlay = document.createElement("div");
  overlay.id = OVERLAY_ID;
  document.body.appendChild(overlay);

  modal.showModal();
  hideScrollbar();
}

/** Initiates modal closing */
function closeModal(modal) {
  if (!modal.open) return;
  const overlay = document.getElementById(OVERLAY_ID);
  overlay && document.body.removeChild(overlay)
  modal.close()
}
