-- AlterTable
ALTER TABLE "coinToss" ADD COLUMN     "ctrlId" TEXT;

-- AlterTable
ALTER TABLE "coinTossBetHistory" ADD COLUMN     "ctrlId" TEXT;

-- AlterTable
ALTER TABLE "coinTossBetHistorySession" ADD COLUMN     "ctrlId" TEXT;

-- AlterTable
ALTER TABLE "coinTossHistory" ADD COLUMN     "ctrlId" TEXT;

-- CreateTable
CREATE TABLE "ctrl" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "hash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ctrl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ctrlActions" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" TEXT NOT NULL,
    "refId" TEXT,
    "description" TEXT NOT NULL,
    "ctrlId" TEXT NOT NULL,

    CONSTRAINT "ctrlActions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ctrlAuthTokenExpired" (
    "id" TEXT NOT NULL,
    "ctrlId" TEXT NOT NULL,
    "accessToken" TEXT[],
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ctrlAuthTokenExpired_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ctrlAuthToken" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publicKey" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "ctrlId" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,

    CONSTRAINT "ctrlAuthToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ctrl_username_key" ON "ctrl"("username");

-- CreateIndex
CREATE INDEX "ctrl_username_id_idx" ON "ctrl"("username", "id");

-- CreateIndex
CREATE INDEX "ctrlActions_createdAt_ctrlId_idx" ON "ctrlActions"("createdAt", "ctrlId");

-- CreateIndex
CREATE UNIQUE INDEX "ctrlAuthTokenExpired_refreshToken_key" ON "ctrlAuthTokenExpired"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "ctrlAuthToken_publicKey_key" ON "ctrlAuthToken"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "ctrlAuthToken_refreshToken_key" ON "ctrlAuthToken"("refreshToken");

-- CreateIndex
CREATE INDEX "ctrlAuthToken_id_refreshToken_ctrlId_idx" ON "ctrlAuthToken"("id", "refreshToken", "ctrlId");

-- AddForeignKey
ALTER TABLE "coinToss" ADD CONSTRAINT "coinToss_ctrlId_fkey" FOREIGN KEY ("ctrlId") REFERENCES "ctrl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossHistory" ADD CONSTRAINT "coinTossHistory_ctrlId_fkey" FOREIGN KEY ("ctrlId") REFERENCES "ctrl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBetHistorySession" ADD CONSTRAINT "coinTossBetHistorySession_ctrlId_fkey" FOREIGN KEY ("ctrlId") REFERENCES "ctrl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coinTossBetHistory" ADD CONSTRAINT "coinTossBetHistory_ctrlId_fkey" FOREIGN KEY ("ctrlId") REFERENCES "ctrl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ctrlActions" ADD CONSTRAINT "ctrlActions_ctrlId_fkey" FOREIGN KEY ("ctrlId") REFERENCES "ctrl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ctrlAuthTokenExpired" ADD CONSTRAINT "ctrlAuthTokenExpired_ctrlId_fkey" FOREIGN KEY ("ctrlId") REFERENCES "ctrl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ctrlAuthToken" ADD CONSTRAINT "ctrlAuthToken_ctrlId_fkey" FOREIGN KEY ("ctrlId") REFERENCES "ctrl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
