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
let security_enabled = 1
pins.setAudioPin(AnalogPin.P0)
music.setVolume(255)
loops.everyInterval(1000, function () {
    countdown += -1
    if (countdown <= 0) {
        Alarm_on = 1
    }
})
basic.forever(function () {
    // alarm
    if (Alarm_on == 1 && security_enabled == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        music.playMelody("E G - E G - E G ", 120)
    }
})
