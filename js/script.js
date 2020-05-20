function changeColor() {
  var red = document.querySelector('#red').value;
  var green = document.querySelector('#green').value;
  var blue = document.querySelector('#blue').value;

  var color = 'Rgb(' + red + ',' + green + ',' + blue + ')';

  document.querySelector('#squareResult').style.background = color;
  document.querySelector('#outputRed').value = red;
  document.querySelector('#outputGreen').value = green;
  document.querySelector('#outputBlue').value = blue;
}

document.querySelector('#red').addEventListener('input', changeColor);
document.querySelector('#green').addEventListener('input', changeColor);
document.querySelector('#blue').addEventListener('input', changeColor);
