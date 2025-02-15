class Telephone {
  constructor() {
    this.observers = [];
  }

  telephoneNumbers = new Set();

  AddPhoneNumber(phone_number) {
    this.telephoneNumbers.add(phone_number);
  }

  RemovePhoneNumber(phone_number) {
    if (this.telephoneNumbers.has(phone_number)) {
      console.log("Phone number to del ", phone_number);
      this.telephoneNumbers.delete(phone_number);
    }
    console.log("Phone number not found");
  }

  DialPhoneNumber(phone_number) {}
}
