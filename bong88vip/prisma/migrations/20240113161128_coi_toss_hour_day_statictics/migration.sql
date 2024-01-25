-- CreateTable
CREATE TABLE "coinTossHourStatictics" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coinTossId" TEXT NOT NULL,
    "totalBet" INTEGER NOT NULL DEFAULT 0,
    "totalWin" INTEGER NOT NULL DEFAULT 0,
    "totalLose" INTEGER NOT NULL DEFAULT 0,
    "totalWinAdmin" INTEGER NOT NULL DEFAULT 0,
    "totalLoseAdmin" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "coinTossHourStatictics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coinTossDayStatictics" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coinTossId" TEXT NOT NULL,
    "totalBet" INTEGER NOT NULL DEFAULT 0,
    "totalWin" INTEGER NOT NULL DEFAULT 0,
    "totalLose" INTEGER NOT NULL DEFAULT 0,
    "totalWinAdmin" INTEGER NOT NULL DEFAULT 0,
    "totalLoseAdmin" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "coinTossDayStatictics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "coinTossHourStatictics_coinTossId_idx" ON "coinTossHourStatictics"("coinTossId");

-- CreateIndex
CREATE INDEX "coinTossDayStatictics_coinTossId_idx" ON "coinTossDayStatictics"("coinTossId");

-- AddForeignKey
ALTER TABLE "coinTossHourStatictics" ADD CONSTRAINT "coinTossHourStatictics_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossDayStatictics" ADD CONSTRAINT "coinTossDayStatictics_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
