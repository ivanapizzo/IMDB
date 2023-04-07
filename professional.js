"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationallity, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationallity = nationallity;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }
    Professional.prototype.showTheAtributes = function () {
        return "Name - " + this.name + "\n" + "Age -" + this.age + "\n" + "Weight -" + this.weight + "\n" + "Height -" + this.height + "\n" + "Is Retired? -" + this.isRetired + "\n" + "Nationality -" + this.nationallity + "\n" + "Oscars number: -" + this.oscarNumber + +"\n" + "Profession: -" + this.profession;
    };
    return Professional;
}());
exports.Professional = Professional;
