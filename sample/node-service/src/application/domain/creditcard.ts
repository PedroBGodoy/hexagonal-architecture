export class CreditCard {
  private id: string
  private balance: number
  private expirationMonth: number
  private expirationYear: number

  constructor () {
    this.id = ''
    this.balance = 0
    this.expirationMonth = 0
    this.expirationYear = 0
  }

  public setId (id: string): void {
    this.id = id
  }

  public getId (): string {
    return this.id
  }

  public getBalance (): number {
    return this.balance
  }

  public setBalance (value: number): void {
    this.balance = value
  }

  public getExpirationMonth (): number {
    return this.expirationMonth
  }

  public getExpirationYear (): number {
    return this.expirationYear
  }
}
