def on_logo_pressed():
    global pets
    pets += 1
    if pets == randint(1, 20):
        music.set_built_in_speaker_enabled(True)
        music.play_tone(131, music.beat(BeatFraction.WHOLE))
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

def on_forever():
    global pets
    if pets == 20:
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

def on_every_interval():
    global pets
    pets = 0
loops.every_interval(5000, on_every_interval)
