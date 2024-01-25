-- AlterTable
ALTER TABLE "coinToss" ADD COLUMN     "timeVirtualAccess" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "virtualAccessPercentage" INTEGER NOT NULL DEFAULT 0;
