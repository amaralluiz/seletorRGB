function changeColor() {
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;

  let color = 'Rgb(' + red + ',' + green + ',' + blue + ')';

  document.getElementById('squareResult').style.background = color;
  document.getElementById('outputRed').value = red;
  document.getElementById('outputGreen').value = green;
  document.getElementById('outputBlue').value = blue;
}

document.getElementById('red').addEventListener('input', changeColor);
document.getElementById('green').addEventListener('input', changeColor);
document.getElementById('blue').addEventListener('input', changeColor);
