// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000100000000000000000001000000000001000000000000000000010000000000010001010000010101010100000000000100000100000000000000000000000001000001010101010101010101000001010100010000000000010000000000000000000100000000000100000000000101010000000101010101010100000000000101000000000000010000000000000100000101010101010100000000000000010000000000000001000000000000000101010101010101010101000000000000000000000000000000000000000000000001010101010101000000000000000101000000000000010000000000000001000000000000000100000000`, img`
. . 2 . . . . . . . . . 2 . . . 
. . 2 . . . . . . . . . 2 . . . 
. . 2 . 2 2 . . 2 2 2 2 2 . . . 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 . 2 . . . . . 2 . . . . 
. . . . . 2 . . . . . 2 . . . . 
. 2 2 2 . . . 2 2 2 2 2 2 2 . . 
. . . 2 2 . . . . . . 2 . . . . 
. . 2 . . 2 2 2 2 2 2 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . 2 2 . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
`, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
