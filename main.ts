input.onButtonPressed(Button.A, function () {
    Alarm_on = 0
    radio.sendString("ALARMOFF")
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "ALARM") {
        Alarm_on = 1
    }
    if (receivedString == "ALARMOFF") {
        Alarm_on = 0
    }
    if (receivedString == "ENABLE") {
        security_enabled = 1
    }
    if (receivedString == "DISABLE") {
        security_enabled = 0
    }
})
// this code toggles on or off weather the alarm is enabled when button B is pressed
input.onButtonPressed(Button.B, function () {
    // allows toggling weather or not the alarm is enabled
    if (security_enabled == 1) {
        security_enabled = 0
        radio.sendString("DISABLED")
    } else {
        security_enabled = 1
        radio.sendString("ENABLED")
    }
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
})
let Alarm_on = 0
let security_enabled = 0
radio.setGroup(17)
security_enabled = 1
Alarm_on = 0
pins.setAudioPin(AnalogPin.P0)
music.setVolume(255)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // this code puts on an alarm sound when the alarm is on (alarm on variable = 1 and enabled variable = 1)
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
