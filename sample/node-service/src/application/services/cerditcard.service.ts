import { CreditCard } from '@application/domain/creditcard'
import { CreditCardRepositoryPort } from '@application/ports/creditcard.repository.port'
import { CreditCardServicePort } from '@application/ports/creditcard.service.port'

export class CreditCardServiceImpl implements CreditCardServicePort {
  private creditcardRepository: CreditCardRepositoryPort

  constructor (creditcardRepository: CreditCardRepositoryPort) {
    this.creditcardRepository = creditcardRepository
  }

  async getCreditCardById (id: string): Promise<CreditCard> {
    const card = await this.creditcardRepository.getById(id)
    return card
  }

  async getBalance (id: string): Promise<number> {
    const card = await this.creditcardRepository.getById(id)
    return card.getBalance()
  }
}
