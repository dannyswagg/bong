-- AlterTable
ALTER TABLE "saleActions" ALTER COLUMN "refId" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "saleActions_createdAt_saleId_idx" ON "saleActions"("createdAt", "saleId");
