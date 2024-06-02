/*
  Warnings:

  - You are about to drop the column `dateEnd` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the column `dateStart` on the `offers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "offers" DROP COLUMN "dateEnd",
DROP COLUMN "dateStart",
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3);
