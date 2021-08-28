import { CreditCard } from '@application/domain/creditcard'
import { CreditCardRepositoryPort } from '@application/ports/creditcard.repository.port'

export class CreditCardPostgresRepositoryImpl implements CreditCardRepositoryPort {
  getAll (): Promise<CreditCard[]> {
    throw new Error('Method not implemented.')
  }

  getById (id: string): Promise<CreditCard> {
    throw new Error('Method not implemented.')
  }

  save (object: CreditCard): Promise<void> {
    throw new Error('Method not implemented.')
  }

  update (object: CreditCard): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
