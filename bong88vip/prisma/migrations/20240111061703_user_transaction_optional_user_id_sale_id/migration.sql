/*
  Warnings:

  - Made the column `userId` on table `userTransaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "userTransaction" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "saleId" DROP NOT NULL;
