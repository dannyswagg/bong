/*
  Warnings:

  - You are about to drop the `coinTossDayStatictics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coinTossHourStatictics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "coinTossDayStatictics" DROP CONSTRAINT "coinTossDayStatictics_coinTossId_fkey";

-- DropForeignKey
ALTER TABLE "coinTossHourStatictics" DROP CONSTRAINT "coinTossHourStatictics_coinTossId_fkey";

-- DropTable
DROP TABLE "coinTossDayStatictics";

-- DropTable
DROP TABLE "coinTossHourStatictics";

-- CreateTable
CREATE TABLE "coinTossHourStatistics" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coinTossId" TEXT NOT NULL,
    "totalBet" INTEGER NOT NULL DEFAULT 0,
    "totalWin" INTEGER NOT NULL DEFAULT 0,
    "totalLose" INTEGER NOT NULL DEFAULT 0,
    "totalWinAdmin" INTEGER NOT NULL DEFAULT 0,
    "totalLoseAdmin" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "coinTossHourStatistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coinTossDayStatistics" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coinTossId" TEXT NOT NULL,
    "totalBet" INTEGER NOT NULL DEFAULT 0,
    "totalWin" INTEGER NOT NULL DEFAULT 0,
    "totalLose" INTEGER NOT NULL DEFAULT 0,
    "totalWinAdmin" INTEGER NOT NULL DEFAULT 0,
    "totalLoseAdmin" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "coinTossDayStatistics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "coinTossHourStatistics_coinTossId_createdAt_idx" ON "coinTossHourStatistics"("coinTossId", "createdAt");

-- CreateIndex
CREATE INDEX "coinTossDayStatistics_coinTossId_createdAt_idx" ON "coinTossDayStatistics"("coinTossId", "createdAt");

-- AddForeignKey
ALTER TABLE "coinTossHourStatistics" ADD CONSTRAINT "coinTossHourStatistics_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossDayStatistics" ADD CONSTRAINT "coinTossDayStatistics_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
