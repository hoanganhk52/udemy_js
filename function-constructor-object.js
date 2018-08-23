function person (firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
}

person.prototype.getFullName = function () {
 return `${this.firstname} ${this.lastname}`;
};

var john = new person('John', 'Doe');
console.log(john instanceof person);

person.prototype.getFormalFullName = function () {
  return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());

var a = new Number(2);