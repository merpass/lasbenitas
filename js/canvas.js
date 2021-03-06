var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;
var eyeRadius = 10;
var eyeXOffset = 25;
var eyeYOffset = 20;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = '#93deec';
context.fill();
context.lineWidth = 5;
context.strokeStyle = 'black';
context.stroke();
    
context.beginPath();
var eyeX = centerX - eyeXOffset;
var eyeY = centerY - eyeXOffset;
context.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI, false);
var eyeX = centerX + eyeXOffset;
context.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI, false);
context.fillStyle = 'black';
context.fill();
  

context.beginPath();
context.arc(centerX, centerY, 50, 0, Math.PI, false);
context.stroke();
