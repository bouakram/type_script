"use strict";
var easys;
(function (easys) {
    easys[easys["one"] = 20] = "one";
    easys[easys["two"] = 15] = "two";
    easys[easys["three"] = 10] = "three";
})(easys || (easys = {}));
var levls;
(function (levls) {
    levls[levls["easy"] = 20] = "easy";
    levls[levls["medume"] = 5] = "medume";
    levls[levls["hard"] = 2] = "hard";
})(levls || (levls = {}));
const lvl = "easy";
if (lvl == "easy") {
    console.log(`level is ${lvl} and you have ${levls.easy} secounds`);
}
//# sourceMappingURL=enums.js.map