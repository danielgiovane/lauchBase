const modalOverley = document.querySelector('.modal-overley');
const cards = document.querySelectorAll('.card');
const closeModal = document.querySelector('.close-modal');

function addActive(){
  modalOverley.classList.add('active');
}

for(let card of cards){
  card.addEventListener('click', addActive,false);
}

function removeActive(){
  modalOverley.classList.remove('active')
}

closeModal.addEventListener('click', removeActive,false);