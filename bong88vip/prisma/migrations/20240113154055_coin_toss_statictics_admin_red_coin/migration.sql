/*
  Warnings:

  - Added the required column `hash` to the `coinTossBetHistorySession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coinToss" ADD COLUMN     "adminRedCoin" INTEGER,
ADD COLUMN     "even" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "fourRed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "odd" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "oneRed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "threeRed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "twoRed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "zeroRed" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "coinTossBetHistory" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "redCoin" INTEGER;

-- AlterTable
ALTER TABLE "coinTossBetHistorySession" ADD COLUMN     "hash" TEXT NOT NULL,
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "redCoin" DROP NOT NULL,
ALTER COLUMN "even" SET DEFAULT 0,
ALTER COLUMN "odd" SET DEFAULT 0,
ALTER COLUMN "oneRed" SET DEFAULT 0,
ALTER COLUMN "twoRed" SET DEFAULT 0,
ALTER COLUMN "threeRed" SET DEFAULT 0,
ALTER COLUMN "fourRed" SET DEFAULT 0,
ALTER COLUMN "zeroRed" SET DEFAULT 0,
ALTER COLUMN "coinTossHistoryId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "coinTossHistory" ADD COLUMN     "adminRedCoin" INTEGER,
ADD COLUMN     "hash" TEXT;

-- CreateIndex
CREATE INDEX "coinTossBetHistorySession_hash_coinTossId_idx" ON "coinTossBetHistorySession"("hash", "coinTossId");

-- CreateIndex
CREATE INDEX "coinTossHistory_hash_coinTossId_idx" ON "coinTossHistory"("hash", "coinTossId");
