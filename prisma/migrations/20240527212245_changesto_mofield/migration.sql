/*
  Warnings:

  - You are about to drop the column `membershipId` on the `userMemberships` table. All the data in the column will be lost.
  - Added the required column `membershipOfferId` to the `userMemberships` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "userMemberships" DROP CONSTRAINT "userMemberships_membershipId_fkey";

-- AlterTable
ALTER TABLE "userMemberships" DROP COLUMN "membershipId",
ADD COLUMN     "membershipOfferId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "userMemberships" ADD CONSTRAINT "userMemberships_membershipOfferId_fkey" FOREIGN KEY ("membershipOfferId") REFERENCES "membershipOffers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
