const modalOverley = document.querySelector('.modal-overley');
const cards = document.querySelectorAll('.card');
const closeModal = document.querySelector('.close-modal');


for(let card of cards){
  card.addEventListener('click', addActive,false);
  const courses = card.getAttribute('id');
  window.location.href = `/courses?id=${courses}`
}
