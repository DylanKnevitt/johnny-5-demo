var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(11);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });

  //change value to change brightness
  //led.brightness(128);

  //change value to change interval
  //led.pulse(2000);

  //Starts off brightest, fades to 10 over the period of 1000ms
  led.brightness(255);
  led.fade(10, 1000);
  
});
