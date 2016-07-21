(function() {

  'use strict';
  
  var brush;

  //create canvas
  function newCanvas() {
    var pixel;
    var canvas = document.getElementById('canvas');

    for (var i = 0; i < 2013; i++) {
      pixel = document.createElement('div');
      pixel.className = 'pixel';
      canvas.appendChild(pixel);
    }

    canvas.addEventListener('click', function(e) {
      if (e.target.className !== 'pixel') { return false; }
      e.target.style.background = brush;
      e.target.style.borderColor = brush;
    });
  }

  //create color pallete
  function newPallete() {
    var color;
    var colors = [];
    var palette = document.getElementById('palette');

    for (var x = 0; x < 32;x++) {
      colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }

    colors.forEach(function(hexColor) {
      color = document.createElement('div');
      color.className = 'color';
      color.style.background = hexColor;
      palette.appendChild(color);
    });

    var heading = document.createElement('h2');
    heading.textContent = 'BRUSH COLOR >';

    var brushColor = document.createElement('div');
    brushColor.className = 'brushColor';

    palette.appendChild(heading);
    palette.appendChild(brushColor);

    palette.addEventListener('click', function(event) {
      if (event.target.className !== 'color') {
        return;
      }
      brush = event.target.style.background;
      brushColor.style.background = brush;
    });
  }

  newCanvas();
  newPallete();

}());
