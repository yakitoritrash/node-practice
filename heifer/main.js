import { moo } from "./moo.js";
import { say } from "cowsay";

let name = "arthur";
console.log(say({text: moo(name)}));
