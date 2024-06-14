/*
  Warnings:

  - Added the required column `enabled` to the `headquarters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enabled` to the `hierarchys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enabled` to the `memberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enabled` to the `positions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enabled` to the `positionsHerarchys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enabled` to the `userMemberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enabled` to the `userValidations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "headquarters" ADD COLUMN     "enabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "hierarchys" ADD COLUMN     "enabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "membershipOffers" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "memberships" ADD COLUMN     "enabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "positions" ADD COLUMN     "enabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "positionsHerarchys" ADD COLUMN     "enabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "statusValidations" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "userMemberships" ADD COLUMN     "enabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "userValidations" ADD COLUMN     "enabled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "validationForms" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;
