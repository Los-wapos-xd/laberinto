let para_girar_a_la_izquierda = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        para_girar_a_la_izquierda += 1
        while (maqueen.Ultrasonic(PingUnit.Centimeters) > 5) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
        }
    }
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
})
basic.forever(function () {
    if (para_girar_a_la_izquierda == 4) {
    	
    }
})
