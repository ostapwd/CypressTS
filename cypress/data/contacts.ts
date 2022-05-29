class Contacts {

  readonly validContacts = {
    name: "oleg",
    email: "pin",
    phone: "Kaluny",
    message: "Lviv"
  };

  readonly invalidContacts = {
    name: "pin",
    email: "{backspace}",
    phone: "Kaluny",
    message: "Lviv"
  };

}

export default new Contacts();
