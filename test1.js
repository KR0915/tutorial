"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RPG(HP, DEFENCE, ATACK, KAIHI) {
    var i = 0;
    var random = Math.random(); //0～1までをランダムに生成する
    if (KAIHI == 1) {
        console.log("戦闘終了");
    }
    else if (DEFENCE > ATACK) {
        console.log("戦闘終了");
    }
    else {
        while (HP > 0) {
            if (random < KAIHI) {
                i += 1;
                HP -= ATACK - DEFENCE;
                return HP;
            }
        }
    }
    console.log("\u52DD\u5229".concat(i, "\u30BF\u30FC\u30F3\u304B\u304B\u3063\u305F"));
}
RPG(550, 500, 550, 0);
