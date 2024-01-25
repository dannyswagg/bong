/*
  Warnings:

  - Added the required column `coinTossHistoryId` to the `coinTossBetHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "coinTossBet" DROP CONSTRAINT "coinTossBet_virtualId_fkey";

-- DropForeignKey
ALTER TABLE "coinTossBetHistoryVirtual" DROP CONSTRAINT "coinTossBetHistoryVirtual_coinTossId_fkey";

-- DropForeignKey
ALTER TABLE "coinTossBetHistoryVirtual" DROP CONSTRAINT "coinTossBetHistoryVirtual_virtualId_fkey";

-- AlterTable
ALTER TABLE "coinToss" ADD COLUMN     "redCoin" INTEGER,
ADD COLUMN     "result" TEXT,
ADD COLUMN     "resultHash" TEXT;

-- AlterTable
ALTER TABLE "coinTossBetHistory" ADD COLUMN     "coinTossHistoryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "coinTossHistory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "redCoin" INTEGER,
    "result" TEXT,
    "gameStartTime" TIMESTAMP(3),
    "coinTossId" TEXT NOT NULL,
    "totalBet" INTEGER NOT NULL DEFAULT 0,
    "totalWin" INTEGER NOT NULL DEFAULT 0,
    "totalLose" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "coinTossHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coinTossHistory" ADD CONSTRAINT "coinTossHistory_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBet" ADD CONSTRAINT "coinTossBet_virtualId_fkey" FOREIGN KEY ("virtualId") REFERENCES "virtualUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBetHistoryVirtual" ADD CONSTRAINT "coinTossBetHistoryVirtual_virtualId_fkey" FOREIGN KEY ("virtualId") REFERENCES "virtualUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBetHistoryVirtual" ADD CONSTRAINT "coinTossBetHistoryVirtual_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBetHistory" ADD CONSTRAINT "coinTossBetHistory_coinTossHistoryId_fkey" FOREIGN KEY ("coinTossHistoryId") REFERENCES "coinTossHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
