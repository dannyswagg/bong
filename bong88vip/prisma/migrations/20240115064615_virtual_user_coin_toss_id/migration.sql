/*
  Warnings:

  - The primary key for the `virtualUserCoinToss` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `virtualUserCoinToss` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "coinTossBet_coinTossId_userId_idx";

-- AlterTable
ALTER TABLE "virtualUserCoinToss" DROP CONSTRAINT "virtualUserCoinToss_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "virtualUserCoinToss_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "coinTossBet_coinTossId_userId_virtualId_idx" ON "coinTossBet"("coinTossId", "userId", "virtualId");
