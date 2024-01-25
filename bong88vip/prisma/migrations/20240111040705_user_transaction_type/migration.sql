/*
  Warnings:

  - The `transactionType` column on the `userTransaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "userTransaction" DROP COLUMN "transactionType",
ADD COLUMN     "transactionType" "userTransactionType" NOT NULL DEFAULT 'ADMINDEPOSIT';
