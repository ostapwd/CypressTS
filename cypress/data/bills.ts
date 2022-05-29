class Bills {

  readonly validBill = {
    payeeName: "oleg",
    address: "pin",
    city: "Kaluny",
    state: "Lviv",
    zipCode: "Lvivska",
    phone: "5800",
    account: "14898",
    verifyAccount: "14898",
    amount: "14898",
  };

  readonly invalidBill = {
    payeeName: "oleg",
    address: "{backspace}",
    city: "Kaluny",
    state: "Lviv",
    zipCode: "Lvivska",
    phone: "5800",
    account: "14898",
    verifyAccount: "14898",
    amount: "14898",
  };

}

export default new Bills();
