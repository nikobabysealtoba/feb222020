namespace SpriteKind {
    export const rightlightbutton = SpriteKind.create()
    export const rightdoorbutton = SpriteKind.create()
    export const leftlightbutton = SpriteKind.create()
    export const leftdoorbutton = SpriteKind.create()
    export const camerabutton = SpriteKind.create()
    export const switchcamerabutton = SpriteKind.create()
    export const power = SpriteKind.create()
}
function what () {
    scene.setBackgroundImage(stagesprites)
    spawnbuttons(2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.camerabutton, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (!(incameras)) {
            incameras = true
            spawnbuttons(0)
            scene.setBackgroundImage(assets.image`static`)
            timer.after(250, function () {
                what()
            })
        } else {
            spawnbuttons(0)
            scene.setBackgroundImage(assets.image`static`)
            timer.after(250, function () {
                incameras = false
                spawnbuttons(1)
                scene.setBackgroundImage(assets.image`office`)
            })
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mouse.mouseSprite().overlapsWith(leftlightbutton1) && !(leftlighton)) {
        leftlighton = true
    } else if (Mouse.mouseSprite().overlapsWith(leftlightbutton1) && leftlighton) {
        leftlighton = false
    }
    if (Mouse.mouseSprite().overlapsWith(rightlightbutton2) && !(rightlighton)) {
        rightlighton = true
    } else if (Mouse.mouseSprite().overlapsWith(rightlightbutton2) && rightlighton) {
        rightlighton = false
    }
    if (Mouse.mouseSprite().overlapsWith(rightdoorbutton2) && !(rightdooron)) {
        rightdooron = true
    } else if (Mouse.mouseSprite().overlapsWith(rightdoorbutton2) && rightdooron) {
        rightdooron = false
    }
    if (Mouse.mouseSprite().overlapsWith(leftdoorbutton2) && !(leftdooron)) {
        leftdooron = true
    } else if (Mouse.mouseSprite().overlapsWith(leftdoorbutton2) && leftdooron) {
        leftdooron = false
    }
})
function spawnbuttons (_set: number) {
    if (_set == 1) {
        camerabuttons_on = false
        rightlightbutton2 = sprites.create(assets.image`lightright`, SpriteKind.rightlightbutton)
        rightlightbutton2.setPosition(155, 82)
        rightdoorbutton2 = sprites.create(assets.image`doorright`, SpriteKind.rightdoorbutton)
        rightdoorbutton2.setPosition(155, 75)
        leftlightbutton1 = sprites.create(assets.image`lightleft`, SpriteKind.leftlightbutton)
        leftlightbutton1.setPosition(5, 82)
        leftdoorbutton2 = sprites.create(assets.image`doorleft`, SpriteKind.leftdoorbutton)
        leftdoorbutton2.setPosition(5, 75)
        camerabutton2 = sprites.create(assets.image`doorleft0`, SpriteKind.camerabutton)
        camerabutton2.setPosition(80, 120)
        Mouse.DrawMouse(
        true,
        assets.image`mouse`,
        0,
        0
        )
    } else if (_set == 0) {
        camerabuttons_on = false
        sprites.destroyAllSpritesOfKind(SpriteKind.rightlightbutton)
        sprites.destroyAllSpritesOfKind(SpriteKind.rightdoorbutton)
        sprites.destroyAllSpritesOfKind(SpriteKind.leftlightbutton)
        sprites.destroyAllSpritesOfKind(SpriteKind.leftdoorbutton)
        sprites.destroyAllSpritesOfKind(SpriteKind.camerabutton)
        sprites.destroyAllSpritesOfKind(SpriteKind.switchcamerabutton)
        Mouse.DrawMouse(
        true,
        assets.image`mouse0`,
        0,
        0
        )
    } else if (_set == 2) {
        camerabuttons_on = true
        stagecamera = sprites.create(assets.image`stagebutton`, SpriteKind.switchcamerabutton)
        stagecamera.setPosition(130, 85)
        tablescamera = sprites.create(assets.image`tablesbutton`, SpriteKind.switchcamerabutton)
        tablescamera.setPosition(150, 85)
        lefthallwaycamera = sprites.create(assets.image`lefthallwaybutton`, SpriteKind.switchcamerabutton)
        lefthallwaycamera.setPosition(130, 100)
        righthallwaycamera = sprites.create(assets.image`righthallwaybutton`, SpriteKind.switchcamerabutton)
        righthallwaycamera.setPosition(150, 100)
        leftdoorcamera = sprites.create(assets.image`left door button`, SpriteKind.switchcamerabutton)
        leftdoorcamera.setPosition(130, 115)
        rightdoorcamera = sprites.create(assets.image`rightdoorbutton`, SpriteKind.switchcamerabutton)
        rightdoorcamera.setPosition(150, 115)
        camerabutton2 = sprites.create(assets.image`doorleft0`, SpriteKind.camerabutton)
        camerabutton2.setPosition(80, 120)
        Mouse.DrawMouse(
        true,
        assets.image`mouse`,
        0,
        0
        )
    }
}
function gameturn (num: number, num2: number, num3: number, num4: number, num5: number) {
	
}
let rightdoorcamera: Sprite = null
let leftdoorcamera: Sprite = null
let righthallwaycamera: Sprite = null
let lefthallwaycamera: Sprite = null
let tablescamera: Sprite = null
let stagecamera: Sprite = null
let camerabutton2: Sprite = null
let leftdooron = false
let leftdoorbutton2: Sprite = null
let rightdooron = false
let rightdoorbutton2: Sprite = null
let rightlighton = false
let rightlightbutton2: Sprite = null
let leftlighton = false
let leftlightbutton1: Sprite = null
let camerabuttons_on = false
let incameras = false
let stagesprites: Image = null
let officeimages = [
assets.image`office`,
assets.image`officeleftlighton`,
assets.image`officerightlight`,
assets.image`officeonlylightson`
]
let power2 = statusbars.create(15, 6, StatusBarKind.Health)
power2.setBarBorder(1, 12)
power2.max = 100
power2.setPosition(10, 110)
scene.setBackgroundImage(assets.image`office`)
stagesprites = assets.image`stage`
let tablessprites = assets.image`dining`
let lefthallsprites = assets.image`lefthall`
let setrighthallsprites = assets.image`right hall`
let leftcornersprites = assets.image`westdoor`
let rightcornersprites = assets.image`rightcorner`
let graceperiod = true
incameras = false
spawnbuttons(1)
Mouse.Setsensibility(1.3333)
Mouse.DrawMouse(
true,
assets.image`mouse`,
0,
0
)
timer.after(15000, function () {
    graceperiod = false
})
camerabuttons_on = false
Keybinds.setSimulatorKeymap(
Keybinds.PlayerNumber.ONE,
Keybinds.CustomKey.UP,
Keybinds.CustomKey.DOWN,
Keybinds.CustomKey.LEFT,
Keybinds.CustomKey.RIGHT,
Keybinds.CustomKey.LEFT_CLICK,
Keybinds.CustomKey.SPACE
)
forever(function () {
    if (rightdooron && leftdooron) {
        officeimages[0] = assets.image`officebothdoors`
        officeimages[1] = assets.image`officebothdoorsleftlight`
        officeimages[2] = assets.image`officebothdoorsrightlight`
        officeimages[3] = assets.image`officebothdoorsbothlights`
    } else if (rightdooron) {
        officeimages[0] = assets.image`officerightdoor`
        officeimages[1] = assets.image`officerightdoorleftlight`
        officeimages[2] = assets.image`officerightdoorrightlight`
        officeimages[3] = assets.image`officerightdooralllights`
    } else if (leftdooron) {
        officeimages[0] = assets.image`officeleftdoor`
        officeimages[1] = assets.image`officeleftdoorleftlight`
        officeimages[2] = assets.image`officeleftdoorrightlight`
        officeimages[3] = assets.image`officeleftdoor1`
    } else {
        officeimages[0] = assets.image`office`
        officeimages[1] = assets.image`officeleftlighton`
        officeimages[2] = assets.image`officerightlight`
        officeimages[3] = assets.image`officeonlylightson`
    }
})
forever(function () {
    if (!(incameras)) {
        if (leftlighton && !(rightlighton)) {
            scene.setBackgroundImage(officeimages[1])
        } else if (rightlighton && !(leftlighton)) {
            scene.setBackgroundImage(officeimages[2])
        } else if (rightlighton && leftlighton) {
            scene.setBackgroundImage(officeimages[3])
        } else {
            scene.setBackgroundImage(officeimages[0])
        }
    }
})
forever(function () {
    if (incameras && camerabuttons_on) {
        if (Mouse.mouseSprite().overlapsWith(stagecamera) && controller.A.isPressed()) {
            scene.setBackgroundImage(assets.image`static`)
            spawnbuttons(0)
            timer.after(250, function () {
                scene.setBackgroundImage(stagesprites)
                spawnbuttons(2)
            })
        }
        if (Mouse.mouseSprite().overlapsWith(tablescamera) && controller.A.isPressed()) {
            scene.setBackgroundImage(assets.image`static`)
            spawnbuttons(0)
            timer.after(250, function () {
                scene.setBackgroundImage(tablessprites)
                spawnbuttons(2)
            })
        }
        if (Mouse.mouseSprite().overlapsWith(righthallwaycamera) && controller.A.isPressed()) {
            scene.setBackgroundImage(assets.image`static`)
            spawnbuttons(0)
            timer.after(250, function () {
                scene.setBackgroundImage(setrighthallsprites)
                spawnbuttons(2)
            })
        }
        if (Mouse.mouseSprite().overlapsWith(lefthallwaycamera) && controller.A.isPressed()) {
            scene.setBackgroundImage(assets.image`static`)
            spawnbuttons(0)
            timer.after(250, function () {
                scene.setBackgroundImage(lefthallsprites)
                spawnbuttons(2)
            })
        }
        if (Mouse.mouseSprite().overlapsWith(leftdoorcamera) && controller.A.isPressed()) {
            scene.setBackgroundImage(assets.image`static`)
            spawnbuttons(0)
            timer.after(250, function () {
                scene.setBackgroundImage(leftcornersprites)
                spawnbuttons(2)
            })
        }
        if (Mouse.mouseSprite().overlapsWith(rightdoorcamera) && controller.A.isPressed()) {
            scene.setBackgroundImage(assets.image`static`)
            spawnbuttons(0)
            timer.after(250, function () {
                scene.setBackgroundImage(rightcornersprites)
                spawnbuttons(2)
            })
        }
    }
})
forever(function () {
    power2.setLabel(convertToText(power2.value))
})
forever(function () {
    if (power2.value <= 0) {
        spawnbuttons(0)
        scene.setBackgroundImage(assets.image`office1`)
        timer.after(5000, function () {
            game.setGameOverMessage(false, "RAN OUT OF POWER")
            game.gameOver(false)
        })
    }
})
game.onUpdateInterval(randint(10000, 20000), function () {
    if (!(graceperiod)) {
        console.log("gameticks begin")
        gameturn(randint(1, 3), randint(1, 3), randint(1, 3), randint(1, 3), randint(1, 3))
    }
})
game.onUpdateInterval(6000, function () {
    if (!(graceperiod)) {
        power2.value += -0.5
        if (leftlighton) {
            power2.value += -0.5
        }
        if (leftdooron) {
            power2.value += -1
        }
        if (rightdooron) {
            power2.value += -1
        }
        if (rightlighton) {
            power2.value += -0.5
        }
        if (incameras) {
            power2.value += -0.5
        }
    }
})
