/*
  Warnings:

  - You are about to drop the column `percetageOffer` on the `membershipOffers` table. All the data in the column will be lost.
  - Added the required column `percentageOffer` to the `membershipOffers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "membershipOffers" DROP COLUMN "percetageOffer",
ADD COLUMN     "percentageOffer" DECIMAL(65,30) NOT NULL;
