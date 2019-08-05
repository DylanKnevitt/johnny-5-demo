var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });

  //Blink an LED
  led.blink();

  //Strobe an LED at a 500ms interval
  //led.strobe(500);
});
