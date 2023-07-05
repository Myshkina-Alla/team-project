(() => {
  const refs = {
    openModalBtnVegetables: document.querySelector('[vegetables-modal-open]'),
    // openModalBtnHederMenu: document.querySelector(
    //   '[heder-menu-modal-open]'
    // ),
    openModalBtnHeder: document.querySelector('[heder-modal-open]'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtnVegetables.addEventListener('click', toggleModal);
  // refs.openModalBtnHederMenu.addEventListener('click', toggleModal);
  refs.openModalBtnHeder.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
