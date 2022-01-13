function right () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.servoWritePin(AnalogPin.P8, 45)
    basic.pause(t)
    pins.servoWritePin(AnalogPin.P8, 90)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function left () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.servoWritePin(AnalogPin.P8, 135)
    basic.pause(t)
    pins.servoWritePin(AnalogPin.P8, 90)
    pins.digitalWritePin(DigitalPin.P14, 1)
}
input.onButtonPressed(Button.A, function () {
    item += 1
    if (item > 4) {
        item = 0
    }
    basic.showNumber(item)
})
input.onButtonPressed(Button.AB, function () {
    if (on == 0) {
        on += 1
        t = 1600
        sensors.DDMmotor(
        AnalogPin.P15,
        on,
        AnalogPin.P16,
        200
        )
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        on = 0
        sensors.DDMmotor(
        AnalogPin.P15,
        1,
        AnalogPin.P16,
        on
        )
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    item += -1
    if (item < 0) {
        item = 4
    }
    basic.showNumber(item)
})
let t = 0
let item = 0
let on = 0
pins.servoWritePin(AnalogPin.P8, 90)
sensors.DDMmotor(
AnalogPin.P15,
0,
AnalogPin.P16,
0
)
on = 0
item = 0
t = 1600
basic.forever(function () {
    if (item == 0) {
    	
    } else if (item == 1 && on == 1) {
        basic.pause(1500)
        right()
    } else if (item == 2 && on == 1) {
        basic.pause(1500)
        left()
    } else if (item == 3 && on == 1) {
        t = 800
        basic.pause(1000)
        right()
        basic.pause(1000)
        left()
    } else if (item == 4 && on == 1) {
        basic.pause(2000)
        right()
        basic.pause(1000)
        right()
        basic.pause(1000)
        right()
        basic.pause(2000)
        left()
        basic.pause(1000)
        left()
        basic.pause(1000)
        left()
    }
})
