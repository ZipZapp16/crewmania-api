/*
  Warnings:

  - You are about to drop the column `membershipOffersId` on the `memberships` table. All the data in the column will be lost.
  - Added the required column `membershipId` to the `membershipOffers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "memberships" DROP CONSTRAINT "memberships_membershipOffersId_fkey";

-- AlterTable
ALTER TABLE "membershipOffers" ADD COLUMN     "membershipId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "memberships" DROP COLUMN "membershipOffersId";

-- AddForeignKey
ALTER TABLE "membershipOffers" ADD CONSTRAINT "membershipOffers_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
