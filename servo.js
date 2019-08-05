var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var servo = new five.Servo(11);

  // Sweep from 0-180 and repeat.
  //servo.sweep();
  servo.min();
  //servo.center();
  

  //servo.to(90);
  //servo.to(90, 5000);
  
});