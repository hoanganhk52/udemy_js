function makeGreeting (language) {
  return function(firstname, lastname) {
    if (language === 'en') {
      console.log(`hello ${firstname} ${lastname}`)
    }

    if (language === 'es') {
      console.log(`hola ${firstname} ${lastname}`)
    }
  }
}

var greetEn = makeGreeting('en');
var greetSp = makeGreeting('es');