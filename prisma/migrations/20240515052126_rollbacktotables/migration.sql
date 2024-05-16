/*
  Warnings:

  - You are about to drop the column `membershipId` on the `membershipOffers` table. All the data in the column will be lost.
  - Added the required column `membershipOffersId` to the `memberships` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "membershipOffers" DROP CONSTRAINT "membershipOffers_membershipId_fkey";

-- AlterTable
ALTER TABLE "membershipOffers" DROP COLUMN "membershipId";

-- AlterTable
ALTER TABLE "memberships" ADD COLUMN     "membershipOffersId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_membershipOffersId_fkey" FOREIGN KEY ("membershipOffersId") REFERENCES "membershipOffers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
