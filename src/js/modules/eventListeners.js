
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
//=================== POPUP ===================
function openModal() {
  const nameInput = document.getElementById('nam');
  const phoneInput = document.getElementById('phone');

  console.log('Name:', nameInput.value);
  console.log('Phone:', phoneInput.value);

  const modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.add('active');

	  // Очистка значений инпутов
		nameInput.value = '';
		phoneInput.value = '';
}

function closeModal() {
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.remove('active');
}


const addEventListenerPopPup = () => {
const button = document.getElementById('request');
button.addEventListener('click', openModal);

const closeButton = document.querySelector('.modal-close-button');
closeButton.addEventListener('click', closeModal);

const modalContainer = document.querySelector('.modal-container');
  modalContainer.addEventListener('click', function (event) {
    if (event.target === modalContainer) {
      closeModal();
    }
  });
}

//=================== вызов функций ===================
const addEventListenerToHeaderPhone = () => {

  addEventListenerOpenNavbarMobile();
  addEventListenerCloseNavbarMobil();
	addEventListenerPopPup()
};
export { addEventListenerToHeaderPhone  };