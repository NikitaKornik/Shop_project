// Шапка
document.addEventListener('DOMContentLoaded', () => {

  const headerBtns = document.querySelectorAll('.li_block');
  headerBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;

      headerBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('cotegory_chosen')
        }
      });

      currentBtn.classList.add('cotegory_chosen');
    })
  })
});

//  Всплывающие фильтры
document.addEventListener('DOMContentLoaded', () => {

  const popupFilterBtn = document.querySelectorAll('.popup_filter');
  popupFilterBtn.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.menu').querySelector('.dropdown')
      let svg = currentBtn.closest('.popup_filter').querySelector('.popup_filter_svg')

      popupFilterBtn.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('.popup_filter');
        }
      });
      svg.classList.toggle('popup_filter_svg_rotate_180deg');
      drop.classList.toggle('dropdown--on');
      drop.classList.toggle('dropdown--off');
    })
  })
});

// Табы

document.addEventListener('DOMContentLoaded', () => {

  const liTab = document.querySelectorAll('.tab_name');
  liTab.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;

      liTab.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('tab_on')
        }
      });

      currentBtn.classList.toggle('tab_on')
    })
  })
});