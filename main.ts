input.onButtonPressed(Button.A, function () {
    raiseArm()
})
function raiseArm () {
    pins.servoWritePin(AnalogPin.P0, 90)
}
input.onButtonPressed(Button.B, function () {
    lowerArm()
})
function lowerArm () {
    pins.servoWritePin(AnalogPin.P0, 0)
}
basic.showIcon(IconNames.No)
basic.forever(function () {
	
})
