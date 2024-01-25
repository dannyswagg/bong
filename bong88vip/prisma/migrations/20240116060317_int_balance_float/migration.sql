-- DropIndex
DROP INDEX "coinTossBetHistorySession_hash_userId_coinTossId_idx";

-- AlterTable
ALTER TABLE "coinTossBetHistory" ALTER COLUMN "winAmount" SET DEFAULT 0,
ALTER COLUMN "winAmount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "coinTossBetHistorySession" ALTER COLUMN "winAmount" SET DEFAULT 0,
ALTER COLUMN "winAmount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "coinTossBetHistoryVirtual" ALTER COLUMN "winAmount" SET DEFAULT 0,
ALTER COLUMN "winAmount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "coinTossDayStatistics" ALTER COLUMN "totalWin" SET DEFAULT 0,
ALTER COLUMN "totalWin" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "totalWinAdmin" SET DEFAULT 0,
ALTER COLUMN "totalWinAdmin" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "coinTossHistory" ALTER COLUMN "totalWin" SET DEFAULT 0,
ALTER COLUMN "totalWin" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "coinTossHourStatistics" ALTER COLUMN "totalWin" SET DEFAULT 0,
ALTER COLUMN "totalWin" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "totalWinAdmin" SET DEFAULT 0,
ALTER COLUMN "totalWinAdmin" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "sale" ALTER COLUMN "balance" SET DEFAULT 0,
ALTER COLUMN "balance" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "saleTransaction" ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "beforeBalance" SET DEFAULT 0,
ALTER COLUMN "beforeBalance" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "afterBalance" SET DEFAULT 0,
ALTER COLUMN "afterBalance" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "balance" SET DEFAULT 0,
ALTER COLUMN "balance" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "userTransaction" ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "beforeBalance" SET DEFAULT 0,
ALTER COLUMN "beforeBalance" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "afterBalance" SET DEFAULT 0,
ALTER COLUMN "afterBalance" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "virtualUser" ALTER COLUMN "balance" SET DEFAULT 0,
ALTER COLUMN "balance" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE INDEX "coinTossBetHistorySession_hash_userId_coinTossId_createdAt_idx" ON "coinTossBetHistorySession"("hash", "userId", "coinTossId", "createdAt");

-- CreateIndex
CREATE INDEX "virtualUserCoinToss_id_coinTossId_idx" ON "virtualUserCoinToss"("id", "coinTossId");
