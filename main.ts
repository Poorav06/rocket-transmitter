let acc_reading = 0
radio.setGroup(10)
basic.forever(function () {
    acc_reading = input.acceleration(Dimension.Z)
    basic.showNumber(acc_reading)
    radio.sendNumber(acc_reading)
})
