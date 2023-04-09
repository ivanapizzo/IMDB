"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var professional_1 = require("./professional");
var prof1 = new professional_1.Professional("Anne Hathaway", 40, 56, 1.70, false, "United Stated", 1, "Actriz");
var prof2 = new professional_1.Professional("Morgan Freeman", 85, 79, 1.88, false, "United Stated", 1, "Actor");
console.log(prof1.showTheAtributes());
console.log(prof2.showTheAtributes());
