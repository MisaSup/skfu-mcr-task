document.querySelectorAll('form[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const notice = form.querySelector('.notice');
    if (notice) {
      notice.classList.add('show');
      notice.textContent = form.dataset.success || 'Готово! Данные сохранены.';
      notice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});

document.querySelectorAll('form[data-demo-form] input[type="reset"]').forEach((reset) => {
  reset.addEventListener('click', () => {
    const notice = reset.closest('form').querySelector('.notice');
    if (notice) notice.classList.remove('show');
  });
});
