input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(139, music.beat(BeatFraction.Half))
        music.playTone(139, music.beat(BeatFraction.Half))
        music.playTone(131, music.beat(BeatFraction.Half))
        music.playTone(131, music.beat(BeatFraction.Half))
        music.playTone(139, music.beat(BeatFraction.Half))
        music.playTone(139, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Cow)
    music.setTempo(180)
})
