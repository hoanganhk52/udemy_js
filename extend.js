var person = {
  firstname: 'default',
  lastname: 'default',
  getFullName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname; 
  }
}

var john = {
  firstname: 'john',
  lastname: 'doe',
}