const counterElement = document.getElementById('counter');
counterElement.textContent = localStorage.getItem('counter');

if (counterElement.textContent === undefined) {
  localStorage.setItem('counter', 0);
}




document.getElementById("app").addEventListener("keypress", myFunction);

function myFunction(event) {
  if (event.code === 'Space' || event.code === 'Enter') {
    counterElement.textContent++;
  }
  if (event.code === 'KeyD') {
    counterElement.textContent--;
  }
  localStorage.setItem('counter', counterElement.textContent);
}

document.getElementById("reset").addEventListener("click", reset);

function reset() {
  localStorage.setItem('counter', 0);
  counterElement.textContent = 0;
}