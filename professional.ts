
export class Professional {

    name: string;
    age: number;
    weight: number;
    height: number;
    isRetired: boolean;
    nationallity: string;
    oscarNumber: number;
    profession: string;

    constructor(name: string, age: number, weight: number, height: number, isRetired: boolean, nationallity: string, oscarNumber: number, profession: string) {

        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationallity = nationallity;
        this.oscarNumber = oscarNumber;
        this.profession = profession;

    }

    showTheAtributes():string {

        return "Name - " + this.name + "\n" + "Age -" + this.age + "\n" + "Weight -" + this.weight + "\n" + "Height -" + this.height + "\n" + "Is Retired? -" + this.isRetired + "\n" + "Nationality -" + this.nationallity + "\n" + "Oscars number: -" + this.oscarNumber + + "\n" + "Profession: -" + this.profession;

    }
}

