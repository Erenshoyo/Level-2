//? OOP - Encapsulation

//? Using private and protetcted modifiers, we encapsulate variables.

class BankAccount {
  public readonly userId: number; //! To make a value non-changable, we must make it readonly.
  public userName: string;
  //   private userBalance: number; //! Now it is accessible only in this class.
  protected userBalance: number; //! Now it is accessible in other sub-classes but ot in instances.

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }

  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}

class StudentAccount extends BankAccount {
  test() {
    this.userBalance = 10;
  }
}
const asifAccount = new BankAccount(48, "Asif", 100);


console.log(asifAccount);
