-- DropIndex
DROP INDEX "coinTossBetHistorySession_hash_userId_coinTossId_createdAt_idx";

-- CreateTable
CREATE TABLE "saleActions" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" TEXT NOT NULL,
    "refId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "saleId" TEXT NOT NULL,

    CONSTRAINT "saleActions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "coinTossBetHistorySession_hash_userId_coinTossId_createdAt__idx" ON "coinTossBetHistorySession"("hash", "userId", "coinTossId", "createdAt", "winAmount");

-- AddForeignKey
ALTER TABLE "saleActions" ADD CONSTRAINT "saleActions_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
