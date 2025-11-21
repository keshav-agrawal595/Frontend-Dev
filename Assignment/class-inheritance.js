class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    printDetails() {
        console.log(`${this.name}, ${this.branch}`);
    }
}

const student = new Student("John", "CS");
student.printDetails();