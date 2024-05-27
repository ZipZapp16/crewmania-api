-- DropForeignKey
ALTER TABLE "membershipOffers" DROP CONSTRAINT "membershipOffers_offerId_fkey";

-- AlterTable
ALTER TABLE "membershipOffers" ALTER COLUMN "offerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "membershipOffers" ADD CONSTRAINT "membershipOffers_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "offers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
