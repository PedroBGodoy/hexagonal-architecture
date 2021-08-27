import { CreditCard } from '@application/domain/creditcard'

export interface CreditCardServicePort {
  getCreditCardById(id: string): Promise<CreditCard>
  getBalance(id: string): Promise<number>
}
