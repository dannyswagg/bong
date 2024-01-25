-- AlterTable
ALTER TABLE "coinTossBet" ADD COLUMN     "virtualId" TEXT,
ALTER COLUMN "userId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "coinTossBetHistoryVirtual" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "winAmount" INTEGER NOT NULL DEFAULT 0,
    "virtualId" TEXT NOT NULL,
    "coinTossId" TEXT NOT NULL,

    CONSTRAINT "coinTossBetHistoryVirtual_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "coinTossBetHistoryVirtual_coinTossId_virtualId_idx" ON "coinTossBetHistoryVirtual"("coinTossId", "virtualId");

-- AddForeignKey
ALTER TABLE "coinTossBet" ADD CONSTRAINT "coinTossBet_virtualId_fkey" FOREIGN KEY ("virtualId") REFERENCES "virtualUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBetHistoryVirtual" ADD CONSTRAINT "coinTossBetHistoryVirtual_virtualId_fkey" FOREIGN KEY ("virtualId") REFERENCES "virtualUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBetHistoryVirtual" ADD CONSTRAINT "coinTossBetHistoryVirtual_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
