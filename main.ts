controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile.sayText("ha ha")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("Help!", 500, true)
})
info.onCountdownEnd(function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . 1 . . . . . . . . . 1 . . . . 
        . 1 1 . . . . . . . 1 1 . . . . 
        . 1 1 . . 7 7 . . . 1 1 . . . . 
        . 1 1 7 7 7 7 7 7 . 1 1 . . . . 
        . 1 1 7 7 7 2 7 7 7 1 1 . . . . 
        . 1 7 7 2 7 7 7 2 7 7 1 . . . . 
        . . 7 7 7 7 2 7 7 7 7 . . . . . 
        . . 7 7 7 7 7 7 7 7 7 . . . . . 
        . 7 7 f 1 7 7 7 7 f 7 . . . . . 
        7 7 7 7 f 1 f 1 f 1 7 . . . 7 . 
        7 7 7 7 1 f 1 f 1 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 . 7 7 7 7 . . . . . . 
        . 7 7 . . . . 7 7 . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 25)
    info.startCountdown(3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile.sayText("ha ha", 500, true)
    mySprite.sayText("ouchy", 500, true)
    mySprite.startEffect(effects.halo, 200)
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.sayText("ouchy that hurts", 500, true)
    myEnemy.sayText("he he", 500, true)
    info.changeLifeBy(-5)
})
info.onLifeZero(function () {
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . 1 . . . . . . . . . 1 . . . . 
        . 1 1 . . . . . . . 1 1 . . . . 
        . 1 1 . . 7 7 . . . 1 1 . . . . 
        . 1 1 7 7 7 7 7 7 . 1 1 . . . . 
        . 1 1 7 7 7 2 7 7 7 1 1 . . . . 
        . 1 7 7 2 7 7 7 2 7 7 1 . . . . 
        . . 7 7 7 7 2 7 7 7 7 . . . . . 
        . . 7 7 7 7 7 7 7 7 7 . . . . . 
        . 7 7 f 1 7 7 7 7 f 7 . . . . . 
        7 7 7 7 f 1 f 1 f 1 7 . . . 7 . 
        7 7 7 7 1 f 1 f 1 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 . 7 7 7 7 . . . . . . 
        . 7 7 . . . . 7 7 . . . . . . . 
        `)
    game.splash("😵Earth has been destroyed all of its citizens are Dead!😢")
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    myEnemy.destroy(effects.disintegrate, 500)
    info.changeLifeBy(10)
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
info.startCountdown(30)
game.setDialogCursor(img`
    . . . . 9 9 8 8 9 9 9 9 9 . . . 
    . . . 9 9 9 9 8 8 9 9 9 7 . . . 
    . . d d 7 7 7 9 9 9 9 7 7 d . . 
    . d d d d 7 7 7 7 9 9 7 7 d d . 
    d d d d 7 7 7 7 7 7 9 7 7 7 d d 
    7 d d d 7 7 7 7 7 7 9 9 7 7 7 7 
    7 7 7 7 7 7 7 7 7 9 9 9 9 7 7 7 
    9 9 7 7 7 7 7 7 7 9 9 8 9 9 7 7 
    9 9 7 7 7 7 7 7 7 9 8 8 9 9 7 7 
    9 9 9 7 7 7 7 7 7 7 9 8 9 9 9 7 
    9 9 9 7 7 7 9 9 7 7 8 9 9 9 9 7 
    . 7 9 7 7 7 7 9 9 9 9 8 9 9 9 . 
    . . 9 7 7 7 7 9 9 9 9 9 8 8 . . 
    . . . 9 7 7 7 7 9 9 9 9 8 . . . 
    . . . . 9 7 7 7 9 9 9 8 . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.splash("Save The Earth")
scene.setBackgroundImage(img`
    ............................................................................................................55...55...444444444444444444444444444444444444444444
    ..............................................................................................................555555..444444444444444444444444444444444444444444
    .........................................................................................................55555.5..5555544444444444444444444444444444444444444444
    ...........................................................................................................555.5..5555544444444444444422222244444444444444444444
    ..............................................................................................................555555.5554444444444442222222222444444444444444444
    ...............................1................................................................................5.5555.55444444444442222222222224444444444444444
    .................................................................................................................555.5545444444444442222222222224444444444444444
    .................................................................................................................5.5.5544544444444444222222224444444444444444444
    ..................................................................................................................55.5544544444444444444444444444444444444444444
    ..................................................................................................................5555544454444444444444444444444444444422444444
    ..................................................................................................................5555544445444444444444444444444444444222224444
    .................................................................................1..................................555.4444544444444444444444444444444222222444
    ...................................................................................................................5555.4444454444444444444444444444444222222244
    .............................................1.....................................................1................555.4444445444444444444444444444452222222244
    ....................................................................................................................555..444445444444444444444444444452222222244
    ....................................................1................................................................55..444444544414444444444444444452222222244
    .....................................................................................................................55...44444154444444444444444444522222222444
    ....................1...................................1....................1........................................55..44444445444444444444444445222222222444
    ...........................................................................1.......................................5..55..44444445444444444444444445222222224444
    ...................................................................................................................55.555.44444444544444444444444442222222224444
    ...................................................................................................................5.55555.4444444544444444444444425222222244444
    ....................................................................................................................55.555..444444454444444444444252222222444444
    ................................................................................................1....................5.555...44444445444444444442252222222444444
    .....................................................................................................................5.5.55..44444445444444444442512222222444444
    ...............................................11.................................................ffffffff............55.55..44444444544444444442222222222444444
    ............................................111.................................................ffeeeeeeeefff..........5.555.44444444454444444444222222244444444
    ..........................................11.......................................1...........ffeeeeeeeeeeeeff........5..55..4444444454444444444444444444444444
    .......................................111...............................................1....ffeeeeeeeeeeeee1ff.......55..55..444414455444444444444444444444444
    ....................................111......................................................feeeeeeeeeeeeeeeeeef......555.55..444444445444444444444444444444444
    ..................................11................1.......................................feeeeeeeeeeeeeeeeeeeef......55555...44444445444444444444444444444444
    ...............................111...........................1..............................feeeeeeeeeeeeeeeeeeeeff.....555555..44444444544444444444444444444444
    ............................111..............1.............................................feeeeeeeeeeeeeeeeeeeeeef.....5.55.5...4444444544444444444444444444444
    ..........................11............1.................................................ffeeee1eeeeeeeeeeeeeeeeef.....5.5555....444444454444444444444444444444
    .......................111...1.......................................................ffffffeeeee1eeeeeeeeeeeeeeeef......5..5555..5554444454444444444444444444444
    .....................11....................ffff......................................f4ff4feeeeee1eeeeeeeeeeeeeeef......5..55.5....55544445444414444444444444444
    .......................................fffffddf.................1....................f4f4ffeeeeeeeeeeeeeeeeeeeeeef......5..5.55555...555444544444444444444444444
    ......................................ffdddddf.......................................f4f4feeeeeeeeeeeeeeeeeeeeeeef......5..5..555555...5554454444444444444444444
    ......................................fdddddf........................................f4f4feeeeeeeeeeeeee1eeeeeeeef......5...5..55555555..55555444444444444444444
    ....................................ffddddddf........................................f4f4feeeeeeeeeeeeeeeeeeeeeeef.......51.5..555.555555.5..5544444444444444444
    ............................1.....fffddddddf.........................................fffffeeeeeeeeeeeeeeeeeeeeeeeffffff...5..5..555..5.55555...55444444444444444
    ..................................fbfddddddf..........................................f4ffffeeeeeeeeeeeeeeeeeeeeef4444f...5..5..555...5..55555..5554414444444444
    ......................1...........fbfddddddf....1....................1................ff4f4ffeeeeeeeeeeeeeeeeeeeeff444f...5...5.55.5...5...5555..545444444444444
    ................................ffbbfdddddf.............................1..............ff4ff4ffeeeeeee1eeeeeeeeeef4f44ff...5..5..55.55..55..55555.54554444444444
    ................................fbbbfdddddf...................................1.......fef44ff44ffe1eeeeeeeeeeeeff4ff444f...5...5.55.5.5...55..55.555..5444444444
    ...............................ffbbbfdddddf.................1.........................feff44ff44fffeeeeeeefffff444f4444f...5....51555..5...55..555555..55.444444
    ................1..............fbbbbfdddddf...........................................feef4444f444ffffffff44444444f4444f....5....55.55..5....55.55..55...5...444
    ...............................ffbbffdddddf...1.......................................feeef444fffff444444444444fff4444ff....5.....5.55...5.....5.555.55...55....
    ...............................fffffddddddf.............................1.............feeeff444444ffffffffffffff44444ff.....5.....55.55...55....5.5.5555....5...
    ..............................fdddddddddddf...........................................feeeefffffff444444444444444fffff......5......555......51...5.55..55555.5..
    ........................1.....fdddddddddddf..........................................1feeeeeeeeeeffffffffffffffff............5.....5..5......55...55.5..55.5555.
    ..............................fdddddddddddf..............1...........................1ffeeeeeeeeeeeeeeeeeeeeeeeeef...........5...1..5.5........55...5.5..55...5.
    ..............................fddddddddd1ddf.............1...........................1.ffeeeeeeeeeeeeeeeeeeeeeeeef............5......5.5.........5...55....5....
    ..............................fddddddddddddf.............1...........................1..ffeeeeeeeeeeeeeeeeeeeeeff......1......5......5.5..........55..555...5...
    ..............................fdddddddddddff.........................................1...ffeeeeeeeeeeeeeeeeeffff...............5.....5..5......1...5555..555.5..
    ..............................fdddd1ddddddfff........................................1.....fffeeeffffffffffff.....1.............5....5..5..........5........555.
    ..............................fdddddddddddfbf...............................1.......1........ffff................................5...5...5.........5..........55
    ..............................ffdddddddddffbff...................................................................................55..5....5.......5.............
    ..............................fffffddddddfbbbf....................................................................................5..5....5.......5.............
    ..............................fbbbffdddddffbbbf.........................................1..........................................555.....5......5.1...........
    ..............................fbbbbffdddddfbbbbf....................................................................................5......5......5.............
    ..............................ffbbbbffdddddffbbbff.....................................................1....................................5.....5.............
    ..........................1....fbbbbbfddddddfffffff.............................................1...........................................5......5............
    ...............................fbbbbbfddddddddffddff.........1.................................1..............1...............1..............5......5...........
    ...............................ffbbbbffddddddddddddf.........................................................................................5.......5..........
    ............................1...ffbbbbfddddddddddddf............................................................................1.............5.......5.........
    .................................fffbbbfdddddddddddf.......................................1...................................................55......5........
    ...................................ffffffffffddffff......................1......................................................................5.......5.......
    .......................1.....................fff.................................................................................................5.......5......
    ...................................................................................................................................1..............55.....5......
    .............................................................................................................1......................................55....55....
    ......................................................................................................................................................55....5...
    .....................................................................................1..................................................................5...5...
    .........................................................................................1...............................................................55..5..
    ....................................................................................................................1......................................555..
    ................1......................................................................................................1........................................
    ...............................................................................................................................1................................
    ....................................................................................................111.........................................................
    ..........................................................................................................................1.....................................
    ............................................................................1.................................................................1.................
    ....................................................................................................................................1...........................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .......................................................................................................................1........................................
    ........1.....................................................1.................................................................................................
    ...........................................................................1....................................................................................
    ................................................................................................................................................................
    .........................................1......................................................................................................................
    .................................1..............................................................................................................................
    ......................................................................................................1..............1..........................................
    .......................1...1..................................1..........................1......................................................................
    ................................................................................................................................................................
    ..............................1..........................................................1..................1..............................1....................
    ................................................................................................................................................................
    .................................................................................................................................1..............................
    ....................................................................1.............1.............................................1...............................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .................................................................................................................................1..............................
    ......................................................................................................................................................1.........
    ................................................................................................................................................................
    ...........................................1..............1.....................................................................................................
    ......................................................................................................................................1....1....................
    ................................................................................................................................................................
    ...............1....................................................................1...........................................................................
    ...........................................................1.........1..........................................................................................
    ...........................1....................................................................................................................................
    ....................1...........................................................................................................................................
    ........................................................................................................................1...............1.......................
    .........................................1....................................................1...........1........................1............................
    ................................................................................................................................................................
    .........................................................................................................................1......................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................................................1.........................................................................................................
    `)
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
    . . . . 9 9 8 8 9 9 9 9 9 . . . 
    . . . 9 9 9 9 8 8 9 9 9 7 . . . 
    . . d d 7 7 7 9 9 9 9 7 7 d . . 
    . d d d d 7 7 7 7 9 9 7 7 d d . 
    d d d d 7 7 7 7 7 7 9 7 7 7 d d 
    7 d d d 7 7 7 7 7 7 9 9 7 7 7 7 
    7 7 7 7 7 7 7 7 7 9 9 9 9 7 7 7 
    9 9 7 7 7 7 7 7 7 9 9 8 9 9 7 7 
    9 9 7 7 7 7 7 7 7 9 8 8 9 9 7 7 
    9 9 9 7 7 7 7 7 7 7 9 8 9 9 9 7 
    9 9 9 7 7 7 9 9 7 7 8 9 9 9 9 7 
    . 7 9 7 7 7 7 9 9 9 9 8 9 9 9 . 
    . . 9 7 7 7 7 9 9 9 9 9 8 8 . . 
    . . . 9 7 7 7 7 9 9 9 9 8 . . . 
    . . . . 9 7 7 7 9 9 9 8 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(150)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    info.changeScoreBy(5)
})
forever(function () {
    music.playMelody("E B C5 A B G A F ", 40)
})
