console.log('Loaded!');
// Move the image
var img = document.getElementById('madi');
img.onclick = function () {
  img.style.marginLeft = '100px' ;
  var interval = setInterval(moveleft , 100);
};