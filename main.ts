input.onButtonPressed(Button.A, function () {
    Alarm_on = 0
    radio.sendString("alarmoff")
})
radio.onReceivedString(function (receivedString) {
    countdown = 60
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
input.onButtonPressed(Button.B, function () {
    if (security_enabled == 1) {
        security_enabled = 0
        radio.sendString("ENABLED")
    } else {
        security_enabled = 1
        radio.sendString("DISABLED")
    }
})
let Alarm_on = 0
let security_enabled = 0
let countdown = 0
radio.setGroup(17)
countdown = 60
security_enabled = 0
Alarm_on = 0
pins.setAudioPin(AnalogPin.P0)
music.setVolume(255)
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
