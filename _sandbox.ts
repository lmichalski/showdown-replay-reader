import { sample_replay } from "./_sample";
import { parseReplay } from "./src/parsers/parseReplay";

var parsedLog = parseReplay(sample_replay["log"]);

var parsedReplay = parsedLog["head"];

// for (let i = 0; i < parsedLog["head"].length; i++) {
//   console.log("--------------------\nTurn: ");
//   console.log("t: " + parsedLog["head"][i]["t"]);
//   console.log(parsedLog["head"][i]["lines"]);
// }

console.log(parsedReplay[1]["lines"]);
