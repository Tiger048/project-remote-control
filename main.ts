radio.onReceivedNumber(function (receivedNumber) {
    cuteBot.motors(0, 100)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(166)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("cutebot")
})
radio.onReceivedString(function (receivedString) {
    cuteBot.motors(100, 100)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("isaac", 166)
})
radio.onReceivedValue(function (name, value) {
    cuteBot.motors(100, 0)
})
radio.setGroup(166)
basic.forever(function () {
    if (input.lightLevel() < 10) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff9da5)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xb09eff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ffff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x007fff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
    } else {
    	
    }
})
