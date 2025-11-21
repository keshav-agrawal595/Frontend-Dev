function Person(name) {
    this.name = name;
}

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printDetails = function() {
    console.log(`${this.name}, ${this.branch}`);
};

const student = new Student("John", "CS");
student.printDetails();