class Telephone {
  constructor() {
    this.observers = [];
    this.telephoneNumbers = new Set();
  }

  AddPhoneNumber(phone_number) {
    this.telephoneNumbers.add(phone_number);
    console.log("Phone number added ", phone_number);
  }

  RemovePhoneNumber(phone_number) {
    if (this.telephoneNumbers.has(phone_number)) {
      console.log("Phone number to del ", phone_number);
      this.telephoneNumbers.delete(phone_number);
    } else {
      console.log("Phone number not found");
    }
  }

  DialPhoneNumber(phone_number) {
    if (this.telephoneNumbers.has(phone_number)) {
      this.notifyObservers(phone_number);
    } else {
      console.log("Phone number not found");
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(phone_number) {
    this.observers.forEach((observer) => {
      observer.notify(phone_number);
    });
  }
}

class Observer {
  constructor(name, action) {
    this.name = name;
    //passing in the action or function i want to be done
    this.action = action; //storing the action in the observer
  }

  notify(phone_number) {
    console.log(`${this.name} notfied that there is dialing in progress`);
    this.action(phone_number); //calling the action when notify is called
  }
}

var telephone = new Telephone();
telephone.AddPhoneNumber("2347023232");
telephone.AddPhoneNumber("2347023233");

var Observer1 = new Observer("Observer1", (phone_number) => {
  console.log(phone_number);
});

var Observer2 = new Observer("Observer2", (phone_number) => {
  console.log(`Now Dialling ${phone_number}`);
});

telephone.addObserver(Observer1);
telephone.addObserver(Observer2);
telephone.DialPhoneNumber("2347023232");

// telephone.removeObserver(Observer1);
// telephone.DialPhoneNumber("2347023232");
// telephone.DialPhoneNumber("2347023233");
// telephone.RemovePhoneNumber("2347023232");
// telephone.DialPhoneNumber("2347023232");
