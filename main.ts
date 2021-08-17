input.onButtonPressed(Button.A, function () {
    pets += 1
    if (pets == randint(1, 8)) {
        music.setBuiltInSpeakerEnabled(true)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        control.waitMicros(1000000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        sleep_time += 2
    }
})
input.onButtonPressed(Button.B, function () {
    if (awake__asleep == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            `)
        control.waitMicros(16)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            `)
        control.waitMicros(16)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
let sleep_time = 0
let pets = 0
let awake__asleep = 0
awake__asleep = 0
basic.showLeds(`
    . . . . .
    . . . . .
    # # . # #
    . . . . .
    . # # # .
    `)
control.waitMicros(16)
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    . . . . .
    . # # # .
    `)
control.waitMicros(16)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
awake__asleep = 1
loops.everyInterval(60000, function () {
    pets = 0
})
basic.forever(function () {
    if (pets == 8) {
        pets = 0
    }
})
control.inBackground(function () {
    sleep_time = randint(10000000, 60000000)
    control.waitMicros(sleep_time)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    control.waitMicros(16)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
    control.waitMicros(16)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        `)
    awake__asleep = 0
})
