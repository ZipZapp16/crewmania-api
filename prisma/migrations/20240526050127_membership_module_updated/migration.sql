/*
  Warnings:

  - You are about to drop the column `dateEnd` on the `membershipOffers` table. All the data in the column will be lost.
  - You are about to drop the column `dateStart` on the `membershipOffers` table. All the data in the column will be lost.
  - You are about to drop the column `enabled` on the `membershipOffers` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `membershipOffers` table. All the data in the column will be lost.
  - You are about to drop the column `percentageOffer` on the `membershipOffers` table. All the data in the column will be lost.
  - You are about to drop the column `membershipOffersId` on the `memberships` table. All the data in the column will be lost.
  - You are about to drop the column `membershipId` on the `userMemberships` table. All the data in the column will be lost.
  - Added the required column `membershipId` to the `membershipOffers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `offerId` to the `membershipOffers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "memberships" DROP CONSTRAINT "memberships_membershipOffersId_fkey";

-- DropForeignKey
ALTER TABLE "userMemberships" DROP CONSTRAINT "userMemberships_membershipId_fkey";

-- AlterTable
ALTER TABLE "membershipOffers" DROP COLUMN "dateEnd",
DROP COLUMN "dateStart",
DROP COLUMN "enabled",
DROP COLUMN "name",
DROP COLUMN "percentageOffer",
ADD COLUMN     "membershipId" TEXT NOT NULL,
ADD COLUMN     "offerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "memberships" DROP COLUMN "membershipOffersId";

-- AlterTable
ALTER TABLE "userMemberships" DROP COLUMN "membershipId",
ADD COLUMN     "membershipOfferId" TEXT;

-- CreateTable
CREATE TABLE "offers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "percentageOffer" DECIMAL(65,30) NOT NULL,
    "dateStart" TIMESTAMP(3),
    "dateEnd" TIMESTAMP(3),
    "enabled" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "offers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "offers_id_key" ON "offers"("id");

-- AddForeignKey
ALTER TABLE "membershipOffers" ADD CONSTRAINT "membershipOffers_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membershipOffers" ADD CONSTRAINT "membershipOffers_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "offers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
