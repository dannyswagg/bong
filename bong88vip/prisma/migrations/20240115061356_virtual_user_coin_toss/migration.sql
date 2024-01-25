-- CreateTable
CREATE TABLE "virtualUserCoinToss" (
    "virtualUserId" TEXT NOT NULL,
    "coinTossId" TEXT NOT NULL,

    CONSTRAINT "virtualUserCoinToss_pkey" PRIMARY KEY ("virtualUserId","coinTossId")
);

-- AddForeignKey
ALTER TABLE "virtualUserCoinToss" ADD CONSTRAINT "virtualUserCoinToss_virtualUserId_fkey" FOREIGN KEY ("virtualUserId") REFERENCES "virtualUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "virtualUserCoinToss" ADD CONSTRAINT "virtualUserCoinToss_coinTossId_fkey" FOREIGN KEY ("coinTossId") REFERENCES "coinToss"("id") ON DELETE CASCADE ON UPDATE CASCADE;
