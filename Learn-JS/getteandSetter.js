const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    set lang(val){
    this.language = val;
    },
    get lang() {
      return this.language;
    }
  };
  person.lang = 'Arabic';
  console.log(person.lang);
  