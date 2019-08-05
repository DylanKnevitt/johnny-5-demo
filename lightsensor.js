var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor("A0");
  var led = new five.Led(11);
  
  led.on();
  // Scale the sensor's data from 0-1023 to 0-10 and log changes
  sensor.on("change", function() {
      let lightLevel = this.scaleTo(0, 10);
    console.log(lightLevel);
    if(lightLevel <= 8){
        led.off();
    }
    else{
        led.on();
    }
  });
});