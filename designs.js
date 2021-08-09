// Pixel Art Maker JS design

// Defining variables

const canvas = document.getElementById('sizePicker');
const color = document.getElementById('colorPicker');
const grid = document.getElementById('pixelCanvas');

canvas.addEventListener('submit', function (event) { // Creates the eventListener when submitt is clicked
  event.preventDefault();
  const heightGridSize = document.getElementById('inputHeight').value;
  const widthGridSize = document.getElementById('inputWidth').value;
  makeGrid(heightGridSize, widthGridSize);
  clickListener(heightGridSize, widthGridSize);
});

// This function creates the grid after user submitts the desired size
function makeGrid(hSize, wSize) {
  grid.innerHTML = ""; //start from scratch the entire grip when changing the size
  for (var r = 0; r < hSize; r++) {
    var row = document.createElement('tr');
    for (var c = 0; c < wSize; c++) {
      var column = document.createElement('td');
      row.appendChild(column);
    }
    grid.appendChild(row)
  }
}

// This function creates the eventListener on each cell in the table
// and paints each cell when clicked
function clickListener(hSize, wSize) {
  for (var r = 0; r < hSize; r++) {
    var rowListener = grid.childNodes[r];
    for (var c = 0; c < wSize; c++) {
      var cell = rowListener.childNodes[c];
      // console.log('clickListener created');
      cell.addEventListener('click',function(e) {
        e.target.style.backgroundColor = color.value;
      });
    }
  }
}
