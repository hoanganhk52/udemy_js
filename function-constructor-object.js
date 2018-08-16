function person () {
  this.a = 'a'
}

var d = person();
console.log(d);

var b = new person();
console.log(b instanceof person);