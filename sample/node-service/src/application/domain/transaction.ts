import { CreditCard } from './creditcard'

export class Transaction {
  private id: string
  private creditCard: CreditCard

  constructor (id: string, creditCard: CreditCard) {
    this.id = id
    this.creditCard = creditCard
  }

  public getId (): string {
    return this.id
  }

  public getCreditcard (): CreditCard {
    return this.creditCard
  }
}
