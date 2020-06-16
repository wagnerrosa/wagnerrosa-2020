const body = document.body;
const checkBox = document.getElementById("chk");
var theme = window.localStorage.getItem('data-theme');

if(theme) checkBox.setAttribute('data-theme', theme);
checkBox.checked = theme == 'night' ? true : false;
body.classList = theme

checkBox.addEventListener('change', function () {
  if(this.checked){
    body.setAttribute('class', 'night');
    window.localStorage.setItem('data-theme', 'night');
  } else {
    body.setAttribute('class', 'day');
    window.localStorage.setItem('data-theme', 'day');
  }
});