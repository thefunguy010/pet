input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        `)
    control.waitMicros(5000000)
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
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pets += 1
    if (pets == randint(1, 10)) {
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
    }
})
let pets = 0
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
loops.everyInterval(60000, function () {
    pets = 0
})
basic.forever(function () {
    if (pets == 10) {
        pets = 0
    }
})
control.inBackground(function () {
    control.waitMicros(randint(10000000, 960000000))
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
})
