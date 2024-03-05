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
        stagecamera.setPosition(130, 70)
        tablescamera = sprites.create(assets.image`tablesbutton`, SpriteKind.switchcamerabutton)
        tablescamera.setPosition(150, 70)
        lefthallwaycamera = sprites.create(assets.image`lefthallwaybutton`, SpriteKind.switchcamerabutton)
        lefthallwaycamera.setPosition(130, 100)
        righthallwaycamera = sprites.create(assets.image`righthallwaybutton`, SpriteKind.switchcamerabutton)
        righthallwaycamera.setPosition(150, 100)
        leftdoorcamera = sprites.create(assets.image`left door button`, SpriteKind.switchcamerabutton)
        leftdoorcamera.setPosition(130, 115)
        rightdoorcamera = sprites.create(assets.image`rightdoorbutton`, SpriteKind.switchcamerabutton)
        rightdoorcamera.setPosition(150, 115)
        bathroomscam = sprites.create(assets.image`bathroomsbutton`, SpriteKind.switchcamerabutton)
        bathroomscam.setPosition(150, 85)
        backrooms = sprites.create(assets.image`partsbutton`, SpriteKind.switchcamerabutton)
        backrooms.setPosition(130, 85)
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
function gameturn (Chance1: number, Chance2: number, Chance3: number, retry: boolean, num: number, Chance4: number) {
    if (Chance1 == 1) {
        console.log("bear moves")
        bearmoving = true
        bear += 1
    }
    if (Chance2 == 1) {
        console.log("bonny moves")
        bonnymoving = true
        bonny += 1
    }
    if (Chance3 == 1) {
        console.log("chicken moves")
        chickenmoving = true
        chicken += 1
    }
    if (bearmoving) {
        if (bear == 1) {
            roomoccupied = randint(1, 3)
            if (roomoccupied == 1) {
                console.log("bear in tables")
                bearintables = true
                bearinbath = false
                bearinparts = false
            }
            if (roomoccupied == 2) {
                console.log("bear in baths")
                bearintables = false
                bearinbath = true
                bearinparts = false
            }
            if (roomoccupied == 3) {
                console.log("bear in parts")
                bearintables = false
                bearinbath = false
                bearinparts = true
            }
        }
        if (bear == 2) {
            bearintables = false
            bearinbath = false
            bearinparts = false
            roomoccupied = randint(1, 2)
            if (roomoccupied == 1) {
                console.log("bear left hall")
                bearlefthall = true
            }
            if (roomoccupied == 2) {
                console.log("bear right hall")
                bearrighthall = true
            }
        }
    }
    if (bonnymoving) {
        if (bonny == 1) {
            roomoccupied = randint(1, 3)
            if (roomoccupied == 1) {
                console.log("bonny in tables")
                bonnyintables = true
                bonnyinbath = false
                bonnyinparts = false
            }
            if (roomoccupied == 2) {
                console.log("bonny in bath")
                bonnyintables = false
                bonnyinbath = true
                bonnyinparts = false
            }
            if (roomoccupied == 3) {
                console.log("bonny in parts")
                bonnyintables = false
                bonnyinbath = false
                bonnyinparts = true
            }
        }
        if (bonny == 2) {
            console.log("bonny left hall")
            bonnyintables = false
            bonnyinbath = false
            bonnyinparts = false
            bonnylefthall = true
        }
    }
    if (chickenmoving) {
        if (chicken == 1) {
            roomoccupied = randint(1, 3)
            if (roomoccupied == 1) {
                console.log("chicken in tables")
                chickenintables = true
                chickeninbath = false
                chickeninparts = false
            }
            if (roomoccupied == 2) {
                console.log("chicken in baths")
                chickenintables = false
                chickeninbath = true
                chickeninparts = false
            }
            if (roomoccupied == 3) {
                console.log("chicken in parts")
                chickeninbath = false
                chickenintables = false
                chickeninparts = true
            }
        }
        if (chicken == 2) {
            console.log("chicken right hall")
            chickenintables = false
            chickeninbath = false
            chickeninparts = false
            chickenrighthall = true
        }
    }
    if (retry) {
        console.log("---- retry ----")
        if (bear == 1) {
            roomoccupied = randint(1, 3)
            if (roomoccupied == 1) {
                console.log("bear in tables")
                bearintables = true
                bearinbath = false
                bearinparts = false
            }
            if (roomoccupied == 2) {
                console.log("bear in bath")
                bearintables = false
                bearinbath = true
                bearinparts = false
            }
            if (roomoccupied == 3) {
                console.log("bear in parts")
                bearintables = false
                bearinbath = false
                bearinparts = true
            }
        }
        if (bonny == 1) {
            roomoccupied = randint(1, 3)
            if (roomoccupied == 1) {
                console.log("bonny in tables")
                bonnyintables = true
                bonnyinbath = false
                bonnyinparts = false
            }
            if (roomoccupied == 2) {
                console.log("bonny in bath")
                bonnyintables = false
                bonnyinbath = true
                bonnyinparts = false
            }
            if (roomoccupied == 3) {
                console.log("bonny in parts")
                bonnyintables = false
                bonnyinbath = false
                bonnyinparts = true
            }
        }
        if (chicken == 1) {
            roomoccupied = randint(1, 3)
            if (roomoccupied == 1) {
                console.log("chicken in tables")
                chickenintables = true
                chickeninbath = false
                chickeninparts = false
            }
            if (roomoccupied == 2) {
                console.log("chicken in bath")
                chickenintables = false
                chickeninbath = true
                chickeninparts = false
            }
            if (roomoccupied == 3) {
                console.log("chicken in parts")
                chickeninbath = false
                chickenintables = false
                chickeninparts = true
            }
        }
    }
    if (bear >= 3 && bearlefthall && !(leftdooroccupied)) {
        console.log("bear left door")
        leftdooroccupied = true
        bearlefthall = false
        bearleftdoor = true
        timer.after(15000, function () {
            if (!(leftdooron)) {
                game.setGameOverMessage(false, "BEAR GOT YOU!")
                game.gameOver(false)
            } else {
                console.log("bear to stage")
                leftdooroccupied = false
                bearleftdoor = false
                bear = 0
                bearinstage = true
            }
        })
    }
    if (bonny >= 3 && !(leftdooroccupied)) {
        console.log("bonny left door ")
        leftdooroccupied = true
        bonnylefthall = false
        bonnyleftdoor = true
        timer.after(15000, function () {
            if (!(leftdooron)) {
                game.setGameOverMessage(false, "BONNY GOT YOU!")
                game.gameOver(false)
            } else {
                console.log("bonny back to stage")
                leftdooroccupied = false
                bonnyleftdoor = false
                bonny = 0
                bonnyinstage = true
            }
        })
    }
    if (bear >= 3 && bearrighthall && !(rightdooroccupied)) {
        console.log("bear right door")
        rightdooroccupied = true
        bearrighthall = false
        bearrightdoor = true
        timer.after(15000, function () {
            if (!(rightdooron)) {
                game.setGameOverMessage(false, "BEAR GOT YOU!")
                game.gameOver(false)
            } else {
                console.log("bear back to stage")
                rightdooroccupied = false
                bearrightdoor = false
                bear = 0
                bearinstage = true
            }
        })
    }
    if (chicken == 3 && !(rightdooroccupied)) {
        console.log("chicken right door")
        rightdooroccupied = true
        chickenrighthall = false
        chickenrightdoor = true
        timer.after(15000, function () {
            if (!(rightdooron)) {
                game.setGameOverMessage(false, "CHICKEN GOT YOU!")
                game.gameOver(false)
            } else {
                console.log("chicken back to stage")
                rightdooroccupied = false
                chickenrightdoor = false
                chicken = 0
                chickeninstage = true
            }
        })
    }
    bearmoving = false
    bonnymoving = false
    chickenmoving = false
    if (Chance4 == 1) {
        for (let index = 0; index < num; index++) {
            if (bear == 1) {
                roomoccupied = randint(1, 3)
                if (roomoccupied == 1) {
                    console.log("bear in tables")
                    bearintables = true
                    bearinbath = false
                    bearinparts = false
                }
                if (roomoccupied == 2) {
                    console.log("bear in bath")
                    bearintables = false
                    bearinbath = true
                    bearinparts = false
                }
                if (roomoccupied == 3) {
                    console.log("bear in parts")
                    bearintables = false
                    bearinbath = false
                    bearinparts = true
                }
            }
            pause(2000)
        }
    }
}
let chickenrightdoor = false
let bearrightdoor = false
let rightdooroccupied = false
let bonnyleftdoor = false
let roomoccupied = 0
let chickenmoving = false
let bonnymoving = false
let bearmoving = false
let backrooms: Sprite = null
let bathroomscam: Sprite = null
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
let bearleftdoor = false
let leftdooroccupied = false
let chickenrighthall = false
let bonnylefthall = false
let bearrighthall = false
let bearlefthall = false
let chickeninparts = false
let chickeninbath = false
let chickenintables = false
let bonnyinparts = false
let bonnyinbath = false
let bonnyintables = false
let bearinparts = false
let bearinbath = false
let bearintables = false
let chickeninstage = false
let bonnyinstage = false
let bearinstage = false
let bonny = 0
let chicken = 0
let bear = 0
let camerabuttons_on = false
let fourthstage = false
let thirdstage = false
let secondstage = false
let firststage = false
let incameras = false
let stagesprites: Image = null
let officeimages = [
assets.image`office`,
assets.image`officeleftlighton`,
assets.image`officerightlight`,
assets.image`officeonlylightson`
]
let powercutscene = false
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
let backroomssprites = assets.image`backrooms`
let bathroomsprites = assets.image`bathrooms`
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
    firststage = true
    timer.after(120000, function () {
        firststage = false
        secondstage = true
        timer.after(60000, function () {
            secondstage = false
            thirdstage = true
            timer.after(120000, function () {
                thirdstage = false
                fourthstage = true
                timer.after(240000, function () {
                    fourthstage = false
                    game.setGameOverMessage(true, "6AM")
                    game.gameOver(true)
                })
            })
        })
    })
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
bear = 0
chicken = 0
bonny = 0
bearinstage = true
bonnyinstage = true
chickeninstage = true
bearintables = false
bearinbath = false
bearinparts = false
bonnyintables = false
bonnyinbath = false
bonnyinparts = false
chickenintables = false
chickeninbath = false
chickeninparts = false
bearlefthall = false
bearrighthall = false
bonnylefthall = false
chickenrighthall = false
leftdooroccupied = false
bearleftdoor = false
game.onUpdateInterval(randint(5000, 15000), function () {
    if (!(graceperiod)) {
        console.log("---- gametick ----")
        if (firststage) {
            gameturn(randint(1, 5), randint(1, 5), randint(1, 5), true, randint(3, 5), randint(1, 15))
        }
        if (secondstage) {
            gameturn(randint(1, 4), randint(1, 4), randint(1, 4), false, randint(4, 6), randint(1, 10))
        }
        if (thirdstage) {
            gameturn(randint(1, 3), randint(1, 3), randint(1, 3), true, randint(5, 7), randint(1, 6))
        }
        if (fourthstage) {
            gameturn(randint(1, 2), randint(1, 2), randint(1, 2), false, randint(6, 10), randint(1, 4))
        }
    }
})
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
    if (!(powercutscene) && !(incameras)) {
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
    if (incameras && camerabuttons_on && !(powercutscene)) {
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
        if (Mouse.mouseSprite().overlapsWith(bathroomscam) && controller.A.isPressed()) {
            scene.setBackgroundImage(assets.image`static`)
            spawnbuttons(0)
            timer.after(250, function () {
                scene.setBackgroundImage(bathroomsprites)
                spawnbuttons(2)
            })
        }
        if (Mouse.mouseSprite().overlapsWith(backrooms) && controller.A.isPressed()) {
            scene.setBackgroundImage(assets.image`static`)
            spawnbuttons(0)
            timer.after(250, function () {
                scene.setBackgroundImage(backroomssprites)
                spawnbuttons(2)
            })
        }
    }
})
forever(function () {
    power2.setLabel(convertToText(power2.value))
})
forever(function () {
    if (power2.value <= 0 && !(powercutscene)) {
        powercutscene = true
        spawnbuttons(0)
        scene.setBackgroundImage(assets.image`office1`)
        timer.after(5000, function () {
            scene.setBackgroundImage(assets.image`backrooms`)
            timer.after(3000, function () {
                game.setGameOverMessage(false, "RAN OUT OF POWER")
                game.gameOver(false)
            })
        })
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
