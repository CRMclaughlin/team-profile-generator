import Employee from "./Employee";

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.title = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

export default Intern;