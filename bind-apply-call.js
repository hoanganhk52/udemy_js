var person = {
  firstname: 'Jon',
  lastname: 'Doe',
  getFullName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname; 
  }
}

var logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
}

var logPersonName = logName.bind(person);
logPersonName();

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

//function borrowing
var person2 = {
  firstname: 'anh',
  lastname: 'hoang',
}

console.log(person.getFullName.apply(person2));