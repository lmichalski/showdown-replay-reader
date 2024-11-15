import { sample_replay } from "./_sample";
import { parseReplay } from "../src/parsers/parseReplay";

var parsedLog = parseReplay(sample_replay["log"]);

var parsedReplay = parsedLog["head"];

// for (let i = 0; i < parsedLog["head"].length; i++) {
//   console.log("--------------------\nTurn: ");
//   console.log("t: " + parsedLog["head"][i]["t"]);
//   console.log(parsedLog["head"][i]["lines"]);
// }

var a = parsedReplay.map((turn) => turn["lines"].map((line) => line["label"]));
var a1 = a.concat.apply([], a);

console.log(a1);

var b = [...new Set(a1)];

console.log(b);
