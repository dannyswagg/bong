-- DropIndex
DROP INDEX "coinTossBetHistorySession_hash_coinTossId_idx";

-- DropIndex
DROP INDEX "coinTossDayStatictics_coinTossId_idx";

-- DropIndex
DROP INDEX "coinTossHourStatictics_coinTossId_idx";

-- CreateIndex
CREATE INDEX "coinTossBetHistorySession_hash_userId_coinTossId_idx" ON "coinTossBetHistorySession"("hash", "userId", "coinTossId");

-- CreateIndex
CREATE INDEX "coinTossDayStatictics_coinTossId_createdAt_idx" ON "coinTossDayStatictics"("coinTossId", "createdAt");

-- CreateIndex
CREATE INDEX "coinTossHourStatictics_coinTossId_createdAt_idx" ON "coinTossHourStatictics"("coinTossId", "createdAt");
