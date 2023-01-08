const counterElement = document.getElementById('counter');
counterElement.textContent = localStorage.getItem('counter');

if (counterElement.textContent === undefined) {
  localStorage.setItem('counter', 0);
}

function myFunction(event) {
  if (event.code === 'Space' || event.code === 'Enter') {
    add();
  }
  if (event.code === 'KeyD') {
    minus();
  }
}

function reset() {
  counterElement.textContent = 0;
  localStorage.setItem('counter', counterElement.textContent);
}

function minus() {
  counterElement.textContent--;
  localStorage.setItem('counter', counterElement.textContent);
}

function add() {
  counterElement.textContent++;
  localStorage.setItem('counter', counterElement.textContent);
}


document.getElementById("reset").addEventListener("click", reset);
document.getElementById("app").addEventListener("keypress", myFunction);