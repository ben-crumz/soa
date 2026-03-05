// const backdrop = document.getElementById('backdrop');
let modalName;
let modal;
let modalButton;

function handleModalOpen(modalInputed) {
  modalName = modalInputed;

  assignModal();
  openBackdrop();
  openModal();
  modalButton.focus();
}

function assignModal() {
  modal = document.querySelector(`div[data-modal=${modalName}]`);
  modalButton = modal.querySelector(`button[data-modal=${modalName}]`);
  modalButton.addEventListener('click', handleModalClose);
}

function openBackdrop() {
  backdrop.classList.add('is-active');
  backdrop.classList.add('is-open');
}

function openModal() {
  modal.classList.add('is-active');
  modal.classList.add('is-open');
}

function handleModalClose() {
  closeModal();
  closeBackdrop();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.classList.remove('is-active');
}

function closeBackdrop() {
  backdrop.classList.remove('is-open');
  backdrop.classList.remove('is-active');
}
