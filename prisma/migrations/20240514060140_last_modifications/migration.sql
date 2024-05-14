/*
  Warnings:

  - You are about to drop the column `location` on the `headquarters` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `positions` table. All the data in the column will be lost.
  - You are about to drop the column `headquaerterId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `hierarchyId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `membershipId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `positionId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `statusValidationId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `validationFormId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `photographId` on the `validationForms` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `validationForms` table. All the data in the column will be lost.
  - You are about to drop the `photographs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `statusvalidations` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `headquarters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `headquarters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `headquarters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `headquarters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validationFormDataId` to the `validationForms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_headquaerterId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_hierarchyId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_membershipId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_positionId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_statusValidationId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_validationFormId_fkey";

-- DropForeignKey
ALTER TABLE "validationForms" DROP CONSTRAINT "validationForms_photographId_fkey";

-- DropForeignKey
ALTER TABLE "validationForms" DROP CONSTRAINT "validationForms_profileId_fkey";

-- DropIndex
DROP INDEX "users_headquaerterId_key";

-- DropIndex
DROP INDEX "users_hierarchyId_key";

-- DropIndex
DROP INDEX "users_membershipId_key";

-- DropIndex
DROP INDEX "users_positionId_key";

-- DropIndex
DROP INDEX "users_statusValidationId_key";

-- DropIndex
DROP INDEX "users_validationFormId_key";

-- DropIndex
DROP INDEX "validationForms_photographId_key";

-- AlterTable
ALTER TABLE "headquarters" DROP COLUMN "location",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "positions" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "headquaerterId",
DROP COLUMN "hierarchyId",
DROP COLUMN "membershipId",
DROP COLUMN "positionId",
DROP COLUMN "statusValidationId",
DROP COLUMN "validationFormId";

-- AlterTable
ALTER TABLE "validationForms" DROP COLUMN "photographId",
DROP COLUMN "profileId",
ADD COLUMN     "validationFormDataId" TEXT NOT NULL;

-- DropTable
DROP TABLE "photographs";

-- DropTable
DROP TABLE "profiles";

-- DropTable
DROP TABLE "statusvalidations";

-- CreateTable
CREATE TABLE "userOccupancy" (
    "id" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "herarchyId" TEXT NOT NULL,
    "headquarterId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userOccupancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userMemberships" (
    "id" TEXT NOT NULL,
    "dateStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateEnd" TIMESTAMP(3) NOT NULL,
    "renovation" BOOLEAN NOT NULL,
    "membershipId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userMemberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userValidations" (
    "id" TEXT NOT NULL,
    "validationFormId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userValidations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statusValidations" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "statusValidationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "statusValidations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "validationFormData" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "validationFormData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userOccupancy_id_key" ON "userOccupancy"("id");

-- CreateIndex
CREATE UNIQUE INDEX "userOccupancy_userId_key" ON "userOccupancy"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userMemberships_id_key" ON "userMemberships"("id");

-- CreateIndex
CREATE UNIQUE INDEX "userMemberships_userId_key" ON "userMemberships"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userValidations_id_key" ON "userValidations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "userValidations_validationFormId_key" ON "userValidations"("validationFormId");

-- CreateIndex
CREATE UNIQUE INDEX "userValidations_userId_key" ON "userValidations"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "statusValidations_id_key" ON "statusValidations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "validationFormData_id_key" ON "validationFormData"("id");

-- AddForeignKey
ALTER TABLE "userOccupancy" ADD CONSTRAINT "userOccupancy_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userOccupancy" ADD CONSTRAINT "userOccupancy_herarchyId_fkey" FOREIGN KEY ("herarchyId") REFERENCES "hierarchys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userOccupancy" ADD CONSTRAINT "userOccupancy_headquarterId_fkey" FOREIGN KEY ("headquarterId") REFERENCES "headquarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userOccupancy" ADD CONSTRAINT "userOccupancy_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userMemberships" ADD CONSTRAINT "userMemberships_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userMemberships" ADD CONSTRAINT "userMemberships_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userValidations" ADD CONSTRAINT "userValidations_validationFormId_fkey" FOREIGN KEY ("validationFormId") REFERENCES "validationForms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userValidations" ADD CONSTRAINT "userValidations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validationForms" ADD CONSTRAINT "validationForms_validationFormDataId_fkey" FOREIGN KEY ("validationFormDataId") REFERENCES "validationFormData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statusValidations" ADD CONSTRAINT "statusValidations_statusValidationId_fkey" FOREIGN KEY ("statusValidationId") REFERENCES "userValidations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
