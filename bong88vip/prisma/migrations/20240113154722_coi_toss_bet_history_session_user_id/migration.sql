/*
  Warnings:

  - Added the required column `userId` to the `coinTossBetHistorySession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coinTossBetHistorySession" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "coinTossBetHistorySession" ADD CONSTRAINT "coinTossBetHistorySession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
