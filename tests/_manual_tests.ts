import { nextDelimeter } from "../src/functions/nextDelimeter";
import { takePipe } from "../src/functions/takeLeadString";
import { parseCell } from "../src/parsers/parseCell";
import { parseDelimeterToRest } from "../src/parsers/parseDelimeter";
import { sample_replay } from "./_sample";

const sample_log = sample_replay.log;

var cell0 = "|";
var cell1 = "|alpha";
var cell2 = "|alpha|bravo";
var cell3 = "|alpha\n";

console.log(parseCell(cell0));
console.log(parseCell(cell1));
console.log(parseCell(cell2));

// var a0 = takePipe(cell0);
// var a1 = takePipe(cell1);
// var a2 = takePipe(cell2);

// console.log(parseDelimeterToRest(nextDelimeter(a0))(a0));
// console.log(parseDelimeterToRest(nextDelimeter(a1))(a1));
// console.log(parseDelimeterToRest(nextDelimeter(a2))(a2));

console.log(cell2);
console.log(cell2.indexOf(""));
console.log(cell2.substring(0, cell2.indexOf("")));
console.log(cell2.substring(cell2.indexOf("")));
