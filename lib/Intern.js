//extends data from employee and adds specific var school for intern

const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getschool() {
    return this.school;
  }
  getrole() {
    return "Intern";
  }
}
module.exports = Intern;
