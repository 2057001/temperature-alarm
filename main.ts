let c = 0
let f = 0
input.onButtonPressed(Button.A, function () {
    c = input.temperature()
    f = 1.8 * 0 + 32
})
loops.everyInterval(60000, function () {
    if (input.temperature() < 4.44444) {
        for (let index = 0; index < 1; index++) {
            music.playTone(523, music.beat(BeatFraction.Breve))
        }
    }
})
loops.everyInterval(60000, function () {
    if (input.temperature() > 35) {
        for (let index = 0; index < 1; index++) {
            music.playTone(988, music.beat(BeatFraction.Breve))
        }
    }
})
basic.forever(function () {
    basic.showNumber(input.temperature())
})
