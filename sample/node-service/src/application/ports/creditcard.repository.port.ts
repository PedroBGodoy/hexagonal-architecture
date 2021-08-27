import { CreditCard } from '@application/domain/creditcard'
import { RepositoryPort } from './repository.port'

export interface CreditCardRepositoryPort extends RepositoryPort<CreditCard> {}
