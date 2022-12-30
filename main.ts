let Random = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        Random = randint(0, 2)
        if (Random == 0) {
            basic.showString("SI")
            basic.pause(1000)
            basic.clearScreen()
        } else if (Random == 1) {
            basic.showString("NO")
            basic.pause(1000)
            basic.clearScreen()
        } else {
            basic.showString("FORSE")
            basic.pause(1000)
            basic.clearScreen()
        }
    }
})
