input.onGesture(Gesture.Shake, function () {
    answer = randint(0, 3)
    if (answer == 0) {
        basic.showString("Never!")
    } else if (answer == 1) {
        basic.showString("Probably!")
    } else if (answer == 2) {
        basic.showString("Definitely")
    } else if (answer == 3) {
        basic.showString("Maybe")
    } else if (answer == 4) {
        basic.showString("Not sure")
    }
})
let answer = 0
basic.showString("Ask a question then shake me!")
basic.forever(function () {
	
})
