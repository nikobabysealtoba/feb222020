namespace SpriteKind {
    export const rightlightbutton = SpriteKind.create()
    export const rightdoorbutton = SpriteKind.create()
    export const leftlightbutton = SpriteKind.create()
    export const leftdoorbutton = SpriteKind.create()
    export const camerabutton = SpriteKind.create()
}
function what () {
    scene.setBackgroundImage(assets.image`stagecam all anims`)
    spawnbuttons(2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.camerabutton, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (!(incameras)) {
            incameras = true
            spawnbuttons(0)
            scene.setBackgroundImage(assets.image`static`)
            timer.after(500, function () {
                what()
            })
        } else {
            spawnbuttons(0)
            scene.setBackgroundImage(assets.image`static`)
            timer.after(500, function () {
                incameras = false
                spawnbuttons(1)
                scene.setBackgroundImage(assets.image`office`)
            })
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.leftlightbutton, function (sprite, otherSprite) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mouse.mouseSprite().overlapsWith(leftlightbutton1) && !(leftlighton)) {
        leftlighton = true
    } else if (Mouse.mouseSprite().overlapsWith(leftlightbutton1) && leftlighton) {
        leftlighton = false
    }
})
function spawnbuttons (_set: number) {
    if (_set == 1) {
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
        sprites.destroyAllSpritesOfKind(SpriteKind.rightlightbutton)
        sprites.destroyAllSpritesOfKind(SpriteKind.rightdoorbutton)
        sprites.destroyAllSpritesOfKind(SpriteKind.leftlightbutton)
        sprites.destroyAllSpritesOfKind(SpriteKind.leftdoorbutton)
        sprites.destroyAllSpritesOfKind(SpriteKind.camerabutton)
        Mouse.DrawMouse(
        true,
        assets.image`mouse0`,
        0,
        0
        )
    } else if (_set == 2) {
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
let camerabutton2: Sprite = null
let leftdoorbutton2: Sprite = null
let rightdoorbutton2: Sprite = null
let rightlightbutton2: Sprite = null
let leftlighton = false
let leftlightbutton1: Sprite = null
let incameras = false
scene.setBackgroundImage(assets.image`office`)
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
    if (!(incameras)) {
        if (leftlighton) {
            scene.setBackgroundImage(assets.image`officeleftlighton`)
        } else {
            scene.setBackgroundImage(assets.image`office`)
        }
    }
})
game.onUpdateInterval(randint(10000, 20000), function () {
    if (!(graceperiod)) {
        console.log("gameticks begin")
        gameturn(randint(1, 3), randint(1, 3), randint(1, 3), randint(1, 3), randint(1, 3))
    }
})
