//extends data from employee and adds specific var github for engineer

const Employee = require("./Employee")
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  } 
  getgitHub() {
    return this.gitHub;
  }
  getrole() {
    return "Engineer";
  }
}
 module.exports = Engineer 