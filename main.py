def on_logo_pressed():
    global pets
    pets += 1
    if pets == randint(1, 10):
        music.set_built_in_speaker_enabled(True)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        . # # # .
                        # . . . #
        """)
        music.play_tone(131, music.beat(BeatFraction.WHOLE))
    else:
        basic.show_leds("""
            . # . # .
                        # # # # #
                        # # # # #
                        . # # # .
                        . . # . .
        """)
        control.wait_micros(1000000)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        # . . . #
                        . # # # .
        """)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

pets = 0
basic.show_leds("""
    . . . . .
        . . . . .
        # # . # #
        . . . . .
        . # # # .
""")
control.wait_micros(16)
basic.show_leds("""
    . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # # # .
""")
control.wait_micros(16)
basic.show_leds("""
    . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
""")

def on_every_interval():
    global pets
    pets = 0
loops.every_interval(60000, on_every_interval)

def on_forever():
    global pets
    if pets == 10:
        pets = 0
basic.forever(on_forever)

def on_in_background():
    control.wait_micros(randint(10000000, 960000000))
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
    """)
    control.wait_micros(16)
    basic.show_leds("""
        . . . . .
                # # . # #
                . . . . .
                . . . . .
                . # # # .
    """)
    control.wait_micros(16)
    basic.show_leds("""
        . . . . .
                . . . . .
                # # . # #
                . . . . .
                . # # # .
    """)
control.in_background(on_in_background)
