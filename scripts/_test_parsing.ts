import { log } from "handlebars";
import { sample_replay } from "../tests/_sample";
import { parseCell } from "../src/parsers/parseCell";
import { parseLine } from "../src/parsers/parseLine";
import { parseLineBody } from "../src/parsers/parseLineBody";
import { parseReplay } from "../src/parsers/parseReplay";
import { parseTurn } from "../src/parsers/parseTurn";
import { parseTurnBody } from "../src/parsers/parseTurnBody";
import { parseTurnHead } from "../src/parsers/parseTurnHead";

var newSect = (s: string) =>
  `\n-------------------\n${s}\n-------------------\n`;

var loggy = sample_replay["log"];
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
// test: parseTurnHead
// ---------------
console.log(newSect("parseTurnHead"));
var d1 = parseTurnHead(subLog1);
var d2 = parseTurnHead(subLog2);

console.log(d1);
console.log(d2);

// ---------------
// test: parseTurnBody
// ---------------
console.log(newSect("parseTurnBody"));

var e1 = parseTurnBody(loggy.substring(0, 2000));
console.log(e1);

var e2 = parseTurnBody(d2["rest"]);
console.log(e2);

// ---------------
// test: parseTurn
// ---------------
console.log(newSect("parseTurn"));
var f1 = parseTurn(loggy.substring(0, 2000));
console.log(f1["head"]);

var f2 = parseTurn(subLog2);
console.log(f2["head"]);

// ---------------
// test: parseReplay
// ---------------
var parsedLog = parseReplay(loggy);
console.log(newSect("parseTurn"));

for (let i = 0; i < parsedLog["head"].length; i++) {
  console.log("--------------------\n");
  console.log("Turn: " + parsedLog["head"][i]["turn"]);
  console.log(parsedLog["head"][i]["lines"]);
}
