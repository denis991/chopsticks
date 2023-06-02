
const addEventListenerOpenNavbarMobile = () => {
  const buttonOpening = document.querySelector('.container-button_open');
  const headerMobil = document.querySelector('.header__mobile-modal');
  buttonOpening?.addEventListener('click', (e) => {
		// var button = document.querySelector('.button-opening');
		// button.classList.toggle('active');
		setTimeout(function(){
    headerMobil?.classList.toggle('active');
		}, 100);
  });
};

const addEventListenerCloseNavbarMobil = () => {
  const buttonClose = document.querySelector('.button-close');
  const headerMobil = document.querySelector('.header__mobile-modal');
  buttonClose?.addEventListener('click', (e) => {
		// var button = document.querySelector('.button-opening');
		// button.classList.toggle('active');
    headerMobil?.classList.toggle('active');
  });
};

const addEventListenerToHeaderPhone = () => {

  addEventListenerOpenNavbarMobile();
  addEventListenerCloseNavbarMobil();
};
export { addEventListenerToHeaderPhone  };