class Person {

    //public property
    public name : string;
    public age : number;

    //private property
    private socialSecurityNumber : string;

    //constructors
    constructor(name: string, age: number, socialSecurityNumber: string){
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;

    }
    //Method to return name
    getName(): string {
        return this.name;
    }
// Method to return age
getAge(): number{
    return this.age;
}

//Method for socialSecurityNumber

getSocialSecurityNumber(): string{
    return this.socialSecurityNumber;
}

}