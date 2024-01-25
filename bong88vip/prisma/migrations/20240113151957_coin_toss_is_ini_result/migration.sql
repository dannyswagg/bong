-- AlterTable
ALTER TABLE "coinToss" ADD COLUMN     "isIniResult" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "coinTossBetHistorySession" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "redCoin" INTEGER NOT NULL,
    "even" INTEGER NOT NULL,
    "odd" INTEGER NOT NULL,
    "oneRed" INTEGER NOT NULL,
    "twoRed" INTEGER NOT NULL,
    "threeRed" INTEGER NOT NULL,
    "fourRed" INTEGER NOT NULL,
    "zeroRed" INTEGER NOT NULL,
    "winAmount" INTEGER NOT NULL DEFAULT 0,
    "coinTossId" TEXT NOT NULL,
    "coinTossHistoryId" TEXT NOT NULL,

    CONSTRAINT "coinTossBetHistorySession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coinTossBetHistorySession" ADD CONSTRAINT "coinTossBetHistorySession_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBetHistorySession" ADD CONSTRAINT "coinTossBetHistorySession_coinTossHistoryId_fkey" FOREIGN KEY ("coinTossHistoryId") REFERENCES "coinTossHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
