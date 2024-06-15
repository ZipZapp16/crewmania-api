-- DropForeignKey
ALTER TABLE "userMemberships" DROP CONSTRAINT "userMemberships_membershipOfferId_fkey";

-- AlterTable
ALTER TABLE "userMemberships" ALTER COLUMN "membershipOfferId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "userMemberships" ADD CONSTRAINT "userMemberships_membershipOfferId_fkey" FOREIGN KEY ("membershipOfferId") REFERENCES "membershipOffers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
