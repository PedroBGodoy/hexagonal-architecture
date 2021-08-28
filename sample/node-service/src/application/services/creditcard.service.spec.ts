import { CreditCardPostgresRepositoryImpl } from '@adapters/outbound/creditcard-postgres.repository'
import { CreditCardRepositoryPort } from '@application/ports/creditcard.repository.port'
import { CreditCardServicePort } from '@application/ports/creditcard.service.port'
import { CreditCardServiceImpl } from './cerditcard.service'

jest.mock('@adapters/outbound/creditcard-postgres.repository')

describe('Credit Card', () => {
  let creditCardService: CreditCardServicePort
  let creditCardRepository: CreditCardRepositoryPort

  beforeEach(() => {
    creditCardRepository = new CreditCardPostgresRepositoryImpl()
    creditCardService = new CreditCardServiceImpl(creditCardRepository)
  })

  it('should not found card', async () => {
    await expect(creditCardService.getCreditCardById('123'))
      .rejects
      .toThrowError('Card not found')
  })
})
