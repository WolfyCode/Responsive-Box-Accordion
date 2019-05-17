const boxes = document.querySelectorAll('.box');
const btnAccordion = document.querySelectorAll('.btn-accordion');

function toggleAccordion() {
  const thisItem = this.parentNode;
  boxes.forEach(item => {
    if (thisItem === item) {
      thisItem.classList.toggle('open');
      return;
    }
    item.classList.remove('open');
  });
}

btnAccordion.forEach(box => box.addEventListener('click', toggleAccordion));
