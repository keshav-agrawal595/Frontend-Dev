function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    console.log(this.name);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.getDepartment = function() {
    console.log(this.department);
};

function Professor(name, department, specialization) {
    Faculty.call(this, name, department);
    this.specialization = specialization;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getSpecialization = function() {
    console.log(this.specialization);
};

const prof = new Professor("John", "CS", "AI");
prof.getName();
prof.getDepartment();
prof.getSpecialization();