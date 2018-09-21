(function(global, $) {
  var Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  const supportedLangs = ["en", "es"];

  const greetings = {
    en: "Hello",
    es: "Hola"
  };

  const formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };

  const logMessage = {
    en: "Logged in",
    es: "Inicio sesion"
  };

  Greetr.prototype = {
    fullName() {
      return `${this.firstname} ${this.lastname}`;
    },

    validate() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting() {
      return `${greetings[this.language]} ${this.firstname}`;
    },

    formalGreeting() {
      return `${formalGreetings[this.language]} ${this.fullName}`;
    },

    greet(formal) {
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      return this;
    },

    log() {
      if (console) {
        console.log(`${logMessage[this.language]} ${this.fullName()}`);
      }

      return this;
    },

    setLang(lang) {
      this.language = lang;
      this.validate();
      return this;
    }
  };

  Greetr.init = function(firstname, lastname, language) {
    const self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
