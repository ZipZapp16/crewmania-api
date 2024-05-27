/*
  Warnings:

  - Added the required column `membershipId` to the `userMemberships` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "userMemberships_userId_key";

-- AlterTable
ALTER TABLE "userMemberships" ADD COLUMN     "membershipId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "userMemberships" ADD CONSTRAINT "userMemberships_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "membershipOffers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
