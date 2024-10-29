import { markGametype } from "./src/marking/rows/markNonduplicateRowLabel";
import { markPlayers } from "./src/marking/rows/markPlayers";
import { markPokes } from "./src/marking/rows/markPokes";
import { markRules } from "./src/marking/rows/markRules";
import { markTurnZero } from "./src/marking/turns/markTurnZero";
import { readGender } from "./src/marking/functions/readGender";
import { markSwitch } from "./src/marking/rows/markSwitch";

var newSect = (s: string) =>
  `\n-------------------\n${s}\n-------------------\n`;

var turnZero = [
  { label: "gametype", cells: ["singles"], sublines: [] },
  {
    label: "player",
    cells: ["p1", "Glumlee", "wattson", ""],
    sublines: [],
  },
  {
    label: "player",
    cells: ["p2", "2n2plus", "doubleteam", ""],
    sublines: [],
  },
  { label: "teamsize", cells: ["p1", "6"], sublines: [] },
  { label: "teamsize", cells: ["p2", "6"], sublines: [] },
  { label: "gen", cells: ["9"], sublines: [] },
  {
    label: "tier",
    cells: ["[Gen 9] Tera Preview NatDex Draft"],
    sublines: [],
  },
  {
    label: "rule",
    cells: ["Tera Type Preview: Tera Types are shown at Team Preview"],
    sublines: [],
  },
  {
    label: "rule",
    cells: ["Sleep Clause Mod: Limit one foe put to sleep"],
    sublines: [],
  },
  {
    label: "rule",
    cells: ["OHKO Clause: OHKO moves are banned"],
    sublines: [],
  },
  {
    label: "rule",
    cells: ["Evasion Clause: Evasion abilities, items, and moves are banned"],
    sublines: [],
  },
  {
    label: "rule",
    cells: ["Evasion Abilities Clause: Evasion abilities are banned"],
    sublines: [],
  },
  {
    label: "rule",
    cells: ["Evasion Items Clause: Evasion items are banned"],
    sublines: [],
  },
  {
    label: "rule",
    cells: ["Evasion Moves Clause: Evasion moves are banned"],
    sublines: [],
  },
  {
    label: "rule",
    cells: ["Endless Battle Clause: Forcing endless battles is banned"],
    sublines: [],
  },
  {
    label: "rule",
    cells: ["HP Percentage Mod: HP is shown in percentages"],
    sublines: [],
  },
  { label: "clearpoke", cells: [], sublines: [] },
  { label: "poke", cells: ["p1", "Gouging Fire", ""], sublines: [] },
  {
    label: "poke",
    cells: ["p1", "Goodra-Hisui, M", ""],
    sublines: [],
  },
  { label: "poke", cells: ["p1", "Blastoise, F", ""], sublines: [] },
  { label: "poke", cells: ["p1", "Sylveon, M", ""], sublines: [] },
  { label: "poke", cells: ["p1", "Venusaur, F", ""], sublines: [] },
  { label: "poke", cells: ["p1", "Azelf", ""], sublines: [] },
  { label: "poke", cells: ["p2", "Kommo-o, M", ""], sublines: [] },
  { label: "poke", cells: ["p2", "Slurpuff, F", ""], sublines: [] },
  { label: "poke", cells: ["p2", "Claydol", ""], sublines: [] },
  {
    label: "poke",
    cells: ["p2", "Samurott-Hisui, M", ""],
    sublines: [],
  },
  { label: "poke", cells: ["p2", "Victini", ""], sublines: [] },
  { label: "poke", cells: ["p2", "Scizor, F", ""], sublines: [] },
  { label: "teampreview", cells: [], sublines: [] },
  { label: "raw", cells: ["Glumlee's Tera Types:/>"], sublines: [] },
  { label: "j", cells: [" NBA Leezey"], sublines: [] },
  {
    label: "c",
    cells: [" NBA Leezey", "content time"],
    sublines: [],
  },
  { label: "j", cells: [" night triumphant"], sublines: [] },
  { label: "j", cells: [" Fennekmaster"], sublines: [] },
  { label: "j", cells: [" izayaforpresident"], sublines: [] },
  { label: "j", cells: [" TransFlutterMane"], sublines: [] },
  { label: "", cells: [], sublines: [] },
];

var turnOne = [
  { label: "start", cells: [], sublines: [] },
  {
    label: "switch",
    cells: ["p1a: Azelf", "Azelf", "100/100"],
    sublines: [],
  },
  {
    label: "switch",
    cells: ["p2a: Kill Bill", "Samurott-Hisui, M", "100/100"],
    sublines: [],
  },
  { label: "turn", cells: ["1"], sublines: [] },
  { label: "", cells: [], sublines: [] },
];

// ---------------
// test: markGametype
// ---------------
console.log(newSect("markGametype"));

console.log(markGametype(turnZero));

// ---------------
// test: markPlayers
// ---------------
console.log(newSect("markPlayers"));
console.log(markPlayers(turnZero));

// ---------------
// test: markRules
// ---------------
console.log(newSect("markRules"));
console.log(markRules(turnZero));

// ---------------
// test: readGender
// ---------------
console.log(newSect("readGender"));
console.log(readGender("Kommo-o, M"));
console.log(readGender("Slurpuff, F"));
console.log(readGender("Claydol"));

// ---------------
// test: markPokes
// ---------------
console.log(newSect("markPokes"));
console.log(markPokes(turnZero)["p1"]);
console.log(markPokes(turnZero)["p2"]);

// ---------------
// test: markTurnZero
// ---------------
console.log(newSect("markTurnZero"));
console.log(markTurnZero(turnZero));
console.log(markTurnZero(turnZero)["gametype"]);
console.log(markTurnZero(turnZero)["players"]["p1"]);
console.log(markTurnZero(turnZero)["players"]["p2"]);
console.log(markTurnZero(turnZero)["tier"]);
console.log(markTurnZero(turnZero)["rules"]);

// ---------------
// test: markSwitch
// ---------------
console.log(markSwitch(turnOne[1]));
console.log(markSwitch(turnOne[2]));
