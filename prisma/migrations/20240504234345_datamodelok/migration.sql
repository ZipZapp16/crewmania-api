/*
  Warnings:

  - You are about to drop the column `headquaerterId` on the `headquarters` table. All the data in the column will be lost.
  - You are about to drop the column `hierarchyId` on the `hierarchys` table. All the data in the column will be lost.
  - You are about to drop the column `membershipsId` on the `membershipOffers` table. All the data in the column will be lost.
  - You are about to drop the column `userMembershipId` on the `memberships` table. All the data in the column will be lost.
  - You are about to drop the column `validationFormId` on the `photographs` table. All the data in the column will be lost.
  - You are about to drop the column `positionId` on the `positions` table. All the data in the column will be lost.
  - You are about to drop the column `validationFormId` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `validationFormId` on the `validationForms` table. All the data in the column will be lost.
  - You are about to drop the `validations` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[positionId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hierarchyId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[validationFormId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[headquaerterId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[statusValidationId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[membershipId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[photographId]` on the table `validationForms` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `membershipOffersId` to the `memberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `headquaerterId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hierarchyId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membershipId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positionId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusValidationId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validationFormId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photographId` to the `validationForms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `validationForms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "headquarters" DROP CONSTRAINT "headquarters_headquaerterId_fkey";

-- DropForeignKey
ALTER TABLE "hierarchys" DROP CONSTRAINT "hierarchys_hierarchyId_fkey";

-- DropForeignKey
ALTER TABLE "membershipOffers" DROP CONSTRAINT "membershipOffers_membershipsId_fkey";

-- DropForeignKey
ALTER TABLE "memberships" DROP CONSTRAINT "memberships_userMembershipId_fkey";

-- DropForeignKey
ALTER TABLE "photographs" DROP CONSTRAINT "photographs_validationFormId_fkey";

-- DropForeignKey
ALTER TABLE "positions" DROP CONSTRAINT "positions_positionId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_validationFormId_fkey";

-- DropForeignKey
ALTER TABLE "validationForms" DROP CONSTRAINT "validationForms_validationFormId_fkey";

-- DropForeignKey
ALTER TABLE "validations" DROP CONSTRAINT "validations_statusValidationId_fkey";

-- DropIndex
DROP INDEX "headquarters_headquaerterId_key";

-- DropIndex
DROP INDEX "hierarchys_hierarchyId_key";

-- DropIndex
DROP INDEX "memberships_userMembershipId_key";

-- DropIndex
DROP INDEX "photographs_validationFormId_key";

-- DropIndex
DROP INDEX "positions_positionId_key";

-- DropIndex
DROP INDEX "validationForms_validationFormId_key";

-- AlterTable
ALTER TABLE "headquarters" DROP COLUMN "headquaerterId";

-- AlterTable
ALTER TABLE "hierarchys" DROP COLUMN "hierarchyId";

-- AlterTable
ALTER TABLE "membershipOffers" DROP COLUMN "membershipsId";

-- AlterTable
ALTER TABLE "memberships" DROP COLUMN "userMembershipId",
ADD COLUMN     "membershipOffersId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "photographs" DROP COLUMN "validationFormId";

-- AlterTable
ALTER TABLE "positions" DROP COLUMN "positionId";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "validationFormId";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "headquaerterId" TEXT NOT NULL,
ADD COLUMN     "hierarchyId" TEXT NOT NULL,
ADD COLUMN     "membershipId" TEXT NOT NULL,
ADD COLUMN     "positionId" TEXT NOT NULL,
ADD COLUMN     "statusValidationId" TEXT NOT NULL,
ADD COLUMN     "validationFormId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "validationForms" DROP COLUMN "validationFormId",
ADD COLUMN     "photographId" TEXT NOT NULL,
ADD COLUMN     "profileId" TEXT NOT NULL;

-- DropTable
DROP TABLE "validations";

-- CreateTable
CREATE TABLE "statusvalidations" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "statusvalidations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "statusvalidations_id_key" ON "statusvalidations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_positionId_key" ON "users"("positionId");

-- CreateIndex
CREATE UNIQUE INDEX "users_hierarchyId_key" ON "users"("hierarchyId");

-- CreateIndex
CREATE UNIQUE INDEX "users_validationFormId_key" ON "users"("validationFormId");

-- CreateIndex
CREATE UNIQUE INDEX "users_headquaerterId_key" ON "users"("headquaerterId");

-- CreateIndex
CREATE UNIQUE INDEX "users_statusValidationId_key" ON "users"("statusValidationId");

-- CreateIndex
CREATE UNIQUE INDEX "users_membershipId_key" ON "users"("membershipId");

-- CreateIndex
CREATE UNIQUE INDEX "validationForms_photographId_key" ON "validationForms"("photographId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_hierarchyId_fkey" FOREIGN KEY ("hierarchyId") REFERENCES "hierarchys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_validationFormId_fkey" FOREIGN KEY ("validationFormId") REFERENCES "validationForms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_headquaerterId_fkey" FOREIGN KEY ("headquaerterId") REFERENCES "headquarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_statusValidationId_fkey" FOREIGN KEY ("statusValidationId") REFERENCES "statusvalidations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validationForms" ADD CONSTRAINT "validationForms_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validationForms" ADD CONSTRAINT "validationForms_photographId_fkey" FOREIGN KEY ("photographId") REFERENCES "photographs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_membershipOffersId_fkey" FOREIGN KEY ("membershipOffersId") REFERENCES "membershipOffers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
