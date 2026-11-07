export interface IPerson {
    getFullName(): string;
}

export class Person implements IPerson {
    private firstName: string;
    private lastName: string;
    protected birthDate: Date;

    constructor(firstName: string, lastName: string, birthDate: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('Max', 'Mustermann', new Date(1990, 0, 1));
console.log(person.getFullName());

// @ts-expect-error firstName is private and cannot be accessed from outside
console.log(person.firstName);

// @ts-expect-error birthDate is protected and cannot be accessed from outside
console.log(person.birthDate);

class Employee extends Person {
    public getBirthYear(): number {
        return this.birthDate.getFullYear();
    }

    public getFirstName(): string {
        // @ts-expect-error firstName is private and cannot be accessed in a subclass
        return this.firstName;
    }
}