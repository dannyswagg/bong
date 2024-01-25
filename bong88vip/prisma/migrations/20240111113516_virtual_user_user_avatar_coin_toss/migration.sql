-- CreateEnum
CREATE TYPE "GameStage" AS ENUM ('NEW_GAME', 'LAST_5_SECONDS', 'PAYING_OUT', 'LIFTING_COVER', 'SHAKING_COINS');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "avatar" TEXT;

-- CreateTable
CREATE TABLE "virtualUser" (
    "id" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avatar" TEXT,

    CONSTRAINT "virtualUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userAvatar" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "userAvatar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coinToss" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "gameStage" "GameStage" NOT NULL DEFAULT 'NEW_GAME',
    "gameStartTime" TIMESTAMP(3),
    "allowBetting" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "coinToss_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coinTossBetAmount" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,
    "coinTossId" TEXT NOT NULL,

    CONSTRAINT "coinTossBetAmount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coinTossBet" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "coinTossId" TEXT NOT NULL,

    CONSTRAINT "coinTossBet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coinTossBetHistory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "winAmount" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "coinTossId" TEXT NOT NULL,

    CONSTRAINT "coinTossBetHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "virtualUser_accountName_key" ON "virtualUser"("accountName");

-- CreateIndex
CREATE UNIQUE INDEX "coinToss_name_key" ON "coinToss"("name");

-- CreateIndex
CREATE INDEX "coinTossBet_coinTossId_userId_idx" ON "coinTossBet"("coinTossId", "userId");

-- CreateIndex
CREATE INDEX "coinTossBetHistory_coinTossId_userId_idx" ON "coinTossBetHistory"("coinTossId", "userId");

-- AddForeignKey
ALTER TABLE "coinTossBetAmount" ADD CONSTRAINT "coinTossBetAmount_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBet" ADD CONSTRAINT "coinTossBet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBet" ADD CONSTRAINT "coinTossBet_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBetHistory" ADD CONSTRAINT "coinTossBetHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBetHistory" ADD CONSTRAINT "coinTossBetHistory_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
