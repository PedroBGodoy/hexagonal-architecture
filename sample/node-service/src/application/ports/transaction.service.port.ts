import { Transaction } from '@application/domain/transaction'
import { CreateTransactionDto } from './dtos/create-transaction.dto'

export interface TransactionServicePort {
  getTransaction(id: string): Promise<Transaction>
  makeTransaction(dto: CreateTransactionDto): Promise<void>
}
