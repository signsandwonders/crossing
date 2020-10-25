input.onButtonPressed(Button.A, function () {
    raiseArm()
})
function raiseArm () {
    pins.servoWritePin(AnalogPin.P15, 90)
    basic.showIcon(IconNames.Happy)
}
input.onButtonPressed(Button.B, function () {
    lowerArm()
})
function lowerArm () {
    pins.servoWritePin(AnalogPin.P15, 0)
    basic.showIcon(IconNames.No)
}
let lightlevel = 1
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (input.lightLevel() < lightlevel / 2) {
        raiseArm()
        basic.pause(5000)
        lowerArm()
    }
    lightlevel = input.lightLevel()
    basic.pause(1000)
})
