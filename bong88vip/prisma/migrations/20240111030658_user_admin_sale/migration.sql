-- CreateEnum
CREATE TYPE "userTransactionType" AS ENUM ('SALEDEPOSIT', 'SALEWITHDRAW', 'ADMINDEPOSIT', 'ADMINWITHDRAW', 'TRANSFER', 'RECEIVE', 'BET', 'WIN');

-- CreateEnum
CREATE TYPE "SaleTransactionType" AS ENUM ('DEPOSIT', 'WITHDRAW', 'TRANSFER', 'RECEIVE');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "accountName" TEXT NOT NULL,
    "fullName" TEXT,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "hash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "disabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userTransaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "beforeBalance" INTEGER NOT NULL DEFAULT 0,
    "afterBalance" INTEGER NOT NULL DEFAULT 0,
    "transactionType" "SaleTransactionType" NOT NULL DEFAULT 'DEPOSIT',
    "refId" TEXT,
    "description" TEXT,
    "adminId" TEXT,
    "userId" TEXT,
    "saleId" TEXT NOT NULL,

    CONSTRAINT "userTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userAuthTokenExpired" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT[],
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userAuthTokenExpired_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userAuthToken" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publicKey" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,

    CONSTRAINT "userAuthToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "disabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminAuthTokenExpired" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "accessToken" TEXT[],
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "adminAuthTokenExpired_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminAuthToken" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publicKey" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,

    CONSTRAINT "adminAuthToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "hash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "disabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saleTransaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "beforeBalance" INTEGER NOT NULL DEFAULT 0,
    "afterBalance" INTEGER NOT NULL DEFAULT 0,
    "transactionType" "SaleTransactionType" NOT NULL DEFAULT 'DEPOSIT',
    "description" TEXT,
    "adminId" TEXT,
    "userId" TEXT,
    "saleId" TEXT NOT NULL,

    CONSTRAINT "saleTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saleAuthTokenExpired" (
    "id" TEXT NOT NULL,
    "saleId" TEXT NOT NULL,
    "accessToken" TEXT[],
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "saleAuthTokenExpired_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saleAuthToken" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publicKey" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "saleId" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,

    CONSTRAINT "saleAuthToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_accountName_key" ON "user"("accountName");

-- CreateIndex
CREATE INDEX "userTransaction_userId_createdAt_idx" ON "userTransaction"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "userAuthTokenExpired_refreshToken_key" ON "userAuthTokenExpired"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "userAuthToken_publicKey_key" ON "userAuthToken"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "userAuthToken_refreshToken_key" ON "userAuthToken"("refreshToken");

-- CreateIndex
CREATE INDEX "userAuthToken_id_refreshToken_userId_idx" ON "userAuthToken"("id", "refreshToken", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");

-- CreateIndex
CREATE INDEX "admin_username_id_idx" ON "admin"("username", "id");

-- CreateIndex
CREATE UNIQUE INDEX "adminAuthTokenExpired_refreshToken_key" ON "adminAuthTokenExpired"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "adminAuthToken_publicKey_key" ON "adminAuthToken"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "adminAuthToken_refreshToken_key" ON "adminAuthToken"("refreshToken");

-- CreateIndex
CREATE INDEX "adminAuthToken_id_refreshToken_adminId_idx" ON "adminAuthToken"("id", "refreshToken", "adminId");

-- CreateIndex
CREATE UNIQUE INDEX "sale_username_key" ON "sale"("username");

-- CreateIndex
CREATE INDEX "sale_username_id_idx" ON "sale"("username", "id");

-- CreateIndex
CREATE INDEX "saleTransaction_saleId_createdAt_idx" ON "saleTransaction"("saleId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "saleAuthTokenExpired_refreshToken_key" ON "saleAuthTokenExpired"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "saleAuthToken_publicKey_key" ON "saleAuthToken"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "saleAuthToken_refreshToken_key" ON "saleAuthToken"("refreshToken");

-- CreateIndex
CREATE INDEX "saleAuthToken_id_refreshToken_saleId_idx" ON "saleAuthToken"("id", "refreshToken", "saleId");

-- AddForeignKey
ALTER TABLE "userTransaction" ADD CONSTRAINT "userTransaction_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userTransaction" ADD CONSTRAINT "userTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userTransaction" ADD CONSTRAINT "userTransaction_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userAuthTokenExpired" ADD CONSTRAINT "userAuthTokenExpired_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userAuthToken" ADD CONSTRAINT "userAuthToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adminAuthTokenExpired" ADD CONSTRAINT "adminAuthTokenExpired_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adminAuthToken" ADD CONSTRAINT "adminAuthToken_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saleTransaction" ADD CONSTRAINT "saleTransaction_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saleTransaction" ADD CONSTRAINT "saleTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saleTransaction" ADD CONSTRAINT "saleTransaction_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saleAuthTokenExpired" ADD CONSTRAINT "saleAuthTokenExpired_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saleAuthToken" ADD CONSTRAINT "saleAuthToken_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
