const header = (document = document.getElementById('header'));
const title = (document = document.getElementById('title'));
const excerpt = (document = document.getElementById('excerpt'));
const profile_img = (document = document.getElementById('profile_img'));
const name = (document = document.getElementById('name'));
const date = (document = document.getElementById('date'));

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    ' <img src="https://images.unsplash.com/photo-1678303801276-66e244cdd70e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80" alt=""/>';

  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat molestias.';

  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = 'Nitesh Sah';
  date.innerHTML = 'Mar 12, 2023';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
