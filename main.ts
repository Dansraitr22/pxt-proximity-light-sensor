

let avrglight:number=0
const lightCalibrate: () => number = () => {
    let svetlo = input.lightLevel()
    let prumer: number = 0
    for (let i: number = 0; i < 10; i = i + 1) {
        prumer += svetlo
        basic.pause(20)
    }
    return prumer = prumer / 10
}
input.onButtonPressed(Button.A, () => {
    avrglight = lightCalibrate()
})

avrglight = lightCalibrate();
basic.forever(function () {
    
    if (input.lightLevel()+20 < avrglight) {
        music.playTone(100,200)

    }
    
})

