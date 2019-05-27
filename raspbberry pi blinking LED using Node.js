//Code for blinking LED using Node.js

  
var Gpio = require('onoff').Gpio; 
var LED = new Gpio(18, 'out'); 
var blinkInterval = setInterval(blinkLED, 500); 
function blinkLED() {
  if (LED.readSync() === 0) {
    LED.writeSync(1); //set output to 1 i.e turn led on
  } else {
    LED.writeSync(0); //set output to 0 i.e. turn led off 
 }
}
function endBlink() { 
  clearInterval(blinkInterval); 
  LED.writeSync(0); 

  LED.unexport(); // Unexport GPIO to free resources
}
setTimeout(endBlink, 10000);

 