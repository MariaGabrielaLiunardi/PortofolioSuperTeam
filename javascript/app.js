const buttons = document.querySelectorAll('.portfolio-btn');
const labels = document.querySelectorAll('.names');

buttons.forEach((btn, index) => {
  btn.addEventListener('mouseenter', () => {
    labels[index].classList.remove('hidden');
  });

  btn.addEventListener('mouseleave', () => {
    labels[index].classList.add('hidden');
  });
});
