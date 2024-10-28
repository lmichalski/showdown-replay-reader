import { replay } from "./_sample";
import { parseCell } from "./src/parsers/parseCell";
import { parseLine } from "./src/parsers/parseLine";
import { parseLineBody } from "./src/parsers/parseLineBody";
import { parseReplay } from "./src/parsers/parseReplay";
import { parseTab } from "./src/parsers/parseTab";
import { parseTabBody } from "./src/parsers/parseTabBody";
import { parseTabHead } from "./src/parsers/parseTabHead";

var newSect = (s: string) =>
  `\n-------------------\n${s}\n-------------------\n`;

var loggy = replay["log"];
var subLog1 = loggy.substring(0, 100);
var subLog2 = loggy.substring(24, 2000);

// ---------------
// test: parseCell
// ---------------
var a1 = parseCell(subLog1);
var a2 = parseCell(subLog2);

console.log(newSect("parseCell"));
console.log(a1);
console.log(a2);
console.log(parseCell("|eionfe|\n"));
console.log(parseCell("|"));
console.log(parseCell("|\n"));
console.log(parseCell("||\n"));

// ---------------
// test: parseLineBody
// ---------------
var b1 = "|dionfe|ienowfe|\n";
var b2 = "|doifnw|eiownfw\n";
var b3 = "|☆Glumlee\n";

console.log(newSect("parseLineBody"));
console.log(parseLineBody(b1));
console.log(parseLineBody(b2));
console.log(parseLineBody(b3));

// ---------------
// test: parseLine
// ---------------
console.log(newSect("parseLine"));
var c1 = parseLine(subLog1);
var c2 = parseLine(subLog2);

console.log(c1);
console.log(c2);

// ---------------
// test: parseTabHead
// ---------------
console.log(newSect("parseTabHead"));
var d1 = parseTabHead(subLog1);
var d2 = parseTabHead(subLog2);

console.log(d1);
console.log(d2);

// ---------------
// test: parseTabBody
// ---------------
console.log(newSect("parseTabBody"));

var e1 = parseTabBody(d1["rest"]);
console.log(e1);

var e2 = parseTabBody(d2["rest"]);
console.log(e2);

// ---------------
// test: parseBody
// ---------------
console.log(newSect("parseBody"));
var f1 = parseTab(subLog1);
console.log(f1["head"]);

var f2 = parseTab(subLog2);
console.log(f2["head"]);

// ---------------
// test: parseReplay
// ---------------
var parsedLog = parseReplay(loggy);
console.log(newSect("parseTab"));
console.log(parsedLog["head"]);
console.log(parsedLog["rest"]);

for (let i = 0; i < parsedLog["head"].length; i++) {
  console.log("--------------------\nTab: ");
  console.log("t: " + parsedLog["head"][i]["t"]);
  console.log(parsedLog["head"][i]["lines"]);
}
