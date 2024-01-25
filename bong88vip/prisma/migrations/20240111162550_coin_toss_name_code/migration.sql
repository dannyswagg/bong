/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `coinToss` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `coinToss` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "coinToss_name_key";

-- AlterTable
ALTER TABLE "coinToss" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "coinToss_code_key" ON "coinToss"("code");
