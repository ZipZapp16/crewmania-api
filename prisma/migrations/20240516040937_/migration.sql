-- DropForeignKey
ALTER TABLE "memberships" DROP CONSTRAINT "memberships_membershipOffersId_fkey";

-- AlterTable
ALTER TABLE "memberships" ALTER COLUMN "membershipOffersId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_membershipOffersId_fkey" FOREIGN KEY ("membershipOffersId") REFERENCES "membershipOffers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
