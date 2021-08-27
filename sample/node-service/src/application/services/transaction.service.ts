import { Transaction } from '@application/domain/transaction'
import { CreditCardServicePort } from '@application/ports/creditcard.service.port'
import { CreateTransactionDto } from '@application/ports/dtos/create-transaction.dto'
import { TransactionRepositoryPort } from '@application/ports/transaction.repository.port'
import { TransactionServicePort } from '@application/ports/transaction.service.port'
import { ResourceNotFoundError } from 'shared/errors/resource-not-found.error'

export class TransactionServiceImpl implements TransactionServicePort {
  private transactionRepository: TransactionRepositoryPort
  private creditcardService: CreditCardServicePort

  constructor (
    transactionRepository: TransactionRepositoryPort,
    creditcardService: CreditCardServicePort
  ) {
    this.transactionRepository = transactionRepository
    this.creditcardService = creditcardService
  }

  async getTransaction (id: string): Promise<Transaction> {
    const transaction = await this.transactionRepository.getById(id)
    return transaction
  }

  async makeTransaction (dto: CreateTransactionDto): Promise<void> {
    const card = await this.creditcardService.getCreditCardById(dto.creditCardId)
    if (!card) throw new ResourceNotFoundError('Credit Card not found')

    const uuid = '123'
    const transaction = new Transaction(uuid, card)
    await this.transactionRepository.save(transaction)
  }
}
