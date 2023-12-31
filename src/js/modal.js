(() => {
  const refs = {
    openModalBtnVegetables: document.querySelector('[data-vegetables-modal-open]'),
    // openModalBtnHederMenu: document.querySelector(
    //   '[data-heder-menu-modal-open]'
    // ),
    openModalBtnHeder: document.querySelector('[data-heder-modal-open]'),
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
