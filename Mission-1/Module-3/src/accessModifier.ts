//? Access modifier -> public, private, readonly, protected

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

  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentAccount extends BankAccount {
  test() {
    this.userBalance = 10;
  }
}
const asifAccount = new BankAccount(48, "Asif", 100);

asifAccount.addBalance(10);
asifAccount.addBalance(10);

console.log(asifAccount);
