/*
  Warnings:

  - You are about to drop the `coinTossBetAmount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "coinTossBetAmount" DROP CONSTRAINT "coinTossBetAmount_coinTossId_fkey";

-- DropTable
DROP TABLE "coinTossBetAmount";

-- CreateTable
CREATE TABLE "coinTossBetValue" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,
    "coinTossId" TEXT NOT NULL,

    CONSTRAINT "coinTossBetValue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coinTossBetValue" ADD CONSTRAINT "coinTossBetValue_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
