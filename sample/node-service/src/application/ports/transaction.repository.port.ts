import { Transaction } from '@application/domain/transaction'
import { RepositoryPort } from './repository.port'

export interface TransactionRepositoryPort extends RepositoryPort<Transaction> {
}
