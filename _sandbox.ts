import { replay } from "./_sample";
import { parseReplay } from "./src/parsers/parseReplay";

var parsedLog = parseReplay(replay["log"]);

for (let i = 0; i < parsedLog["head"].length; i++) {
  console.log("--------------------\nTab: ");
  console.log("t: " + parsedLog["head"][i]["t"]);
  console.log(parsedLog["head"][i]["lines"]);
}
