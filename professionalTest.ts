import { Professional } from "./professional";


let prof1 = new Professional ("Anne Hathaway", 40, 56, 1.70, false, "United Stated", 1, "Actriz");
let prof2 = new Professional ("Morgan Freeman", 85, 79, 1.88, false, "United Stated", 1, "Actor");
let prof3 = new Professional ("Brad Pitt", 59, 78, 1.80, false, "United Stated", 2, "Actor");
let prof4 = new Professional ("Margot Robbie", 32, 57, 1.68, false, "Australian", 0, "Actriz");


console.log(prof1.showTheAtributes());
console.log(prof2.showTheAtributes());
console.log(prof3.showTheAtributes());
console.log(prof4.showTheAtributes());


