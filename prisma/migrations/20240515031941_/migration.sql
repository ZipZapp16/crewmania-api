/*
  Warnings:

  - You are about to drop the column `duration` on the `membershipOffers` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `memberships` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `validationForms` table. All the data in the column will be lost.
  - Added the required column `enabled` to the `membershipOffers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `memberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationDays` to the `memberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `memberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `memberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `validationForms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `validationForms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "membershipOffers" DROP COLUMN "duration",
ADD COLUMN     "enabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "memberships" DROP COLUMN "name",
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "durationDays" INTEGER NOT NULL,
ADD COLUMN     "level" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "validationForms" DROP COLUMN "name",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
