input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
radio.onReceivedValue(function (name, value) {
    // this verifies the microbit and resets the timer while leading in to the other code message
    if (value == 741852639321564900) {
        countdown = 60
        // if the character for the first system is correct, turn on the light and turn on the alarm
        if ("" == "") {
            Alarm_on = 1
        }
    }
})
let Alarm_on = 0
let countdown = 0
radio.setGroup(17)
countdown = 10
let security_enabled = 1
pins.setAudioPin(AnalogPin.P0)
music.setVolume(255)
// this counts down on a timer to make sure the other micro:bit is on
loops.everyInterval(1000, function () {
    countdown += -1
    if (countdown <= 0) {
        Alarm_on = 1
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
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
