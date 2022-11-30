//extends data from employee and adds specific var office number for manager

const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getsofficeNumber() {
    return this.officeNumber;
  }
  getrole() {
    return "Manager";
  }
}
module.exports = Manager;
