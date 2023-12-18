function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  function handler () {
   text.hidden = !text.hidden 
  }
  button.addEventListener('click', handler);
}
