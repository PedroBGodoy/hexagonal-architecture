-- CreateTable
CREATE TABLE "CreditCard" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "expirationMonth" INTEGER NOT NULL,
    "expirationYear" INTEGER NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "limit" DOUBLE PRECISION NOT NULL,
    "cvv" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "creditCardId" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "error" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CreditCard.createdAt_index" ON "CreditCard"("createdAt");

-- CreateIndex
CREATE INDEX "CreditCard.expirationMonth_index" ON "CreditCard"("expirationMonth");

-- CreateIndex
CREATE INDEX "CreditCard.expirationYear_index" ON "CreditCard"("expirationYear");

-- CreateIndex
CREATE UNIQUE INDEX "CreditCard.number_unique" ON "CreditCard"("number");

-- CreateIndex
CREATE INDEX "Transaction.createdAt_index" ON "Transaction"("createdAt");

-- CreateIndex
CREATE INDEX "Transaction.creditCardId_index" ON "Transaction"("creditCardId");

-- CreateIndex
CREATE INDEX "Transaction.statusId_index" ON "Transaction"("statusId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("creditCardId") REFERENCES "CreditCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("statusId") REFERENCES "TransactionStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
