var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

    var sensor = new five.Sensor("A0");
  var servo = new five.Servo(11);

  servo.min();
  sensor.on("change", function() {
    let pos = this.scaleTo(0, 90);
  console.log(pos);
  servo.to(pos);

});


  // Sweep from 0-180 and repeat.
  //servo.sweep();
 
  //servo.center();
  

  //servo.to(90);
  //servo.to(90, 5000);
  
});