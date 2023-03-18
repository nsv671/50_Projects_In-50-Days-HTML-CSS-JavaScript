const contents = document.querySelectorAll('.phone img');
const homeBtn = document.querySelector('.fa-home');
const workBtn = document.querySelector('.fa-box');
const blogBtn = document.querySelector('.fa-book-open');
const aboutBtn = document.querySelector('.fa-users');

// console.log(phone, homeBtn, workBtn, blogBtn, aboutBtn);

homeBtn.addEventListener('click', () => {
  contents.forEach((content, index) => {
    if (index === 0) {
      content.classList.add('show');
      removeActiveClass();
      homeBtn.classList.add('active');
    } else {
      content.classList.remove('show');
    }
  });
});
workBtn.addEventListener('click', () => {
  contents.forEach((content, index) => {
    if (index === 1) {
      content.classList.add('show');
      removeActiveClass();
      workBtn.classList.add('active');
    } else {
      content.classList.remove('show');
    }
  });
});
blogBtn.addEventListener('click', () => {
  contents.forEach((content, index) => {
    if (index === 2) {
      content.classList.add('show');
      removeActiveClass();
      blogBtn.classList.add('active');
    } else {
      content.classList.remove('show');
    }
  });
});
aboutBtn.addEventListener('click', () => {
  contents.forEach((content, index) => {
    if (index === 3) {
      content.classList.add('show');
      removeActiveClass();
      aboutBtn.classList.add('active');
    } else {
      content.classList.remove('show');
    }
  });
});

function removeActiveClass() {
  homeBtn.classList.remove('active');
  workBtn.classList.remove('active');
  blogBtn.classList.remove('active');
  aboutBtn.classList.remove('active');
}
