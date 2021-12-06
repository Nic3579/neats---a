input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
radio.onReceivedValue(function (name, value) {
    if (name == "cb269") {
        countdown = 60
    }
})
let Alarm_on = 0
let countdown = 0
radio.setGroup(17)
countdown = 10
loops.everyInterval(1000, function () {
    countdown += -1
    if (countdown == 0) {
        Alarm_on = 1
    }
})
basic.forever(function () {
	
})
