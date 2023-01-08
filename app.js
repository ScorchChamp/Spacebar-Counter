const counterElement = document.getElementById('counter');
counterElement.textContent = localStorage.getItem('counter');

if (counterElement.textContent === undefined) {
  localStorage.setItem('counter', 0);
}


document.addEventListener("click", event => {
  if (event.clientX > document.body.offsetWidth*0.55) {
    counterElement.textContent++;
  } 
  if (event.clientX < document.body.offsetWidth*0.45) {
    counterElement.textContent--;
  }
  localStorage.setItem('counter', counterElement.textContent);
});

function myFunction(event) {
  if (event.code === 'Space' || event.code === 'Enter') {
    counterElement.textContent++;
  }
  if (event.code === 'KeyD') {
    counterElement.textContent--;
  }
  localStorage.setItem('counter', counterElement.textContent);
}

function reset() {
  counterElement.textContent = 0;
  localStorage.setItem('counter', counterElement.textContent);
}


document.getElementById("reset").addEventListener("click", reset);
document.getElementById("app").addEventListener("keypress", myFunction);