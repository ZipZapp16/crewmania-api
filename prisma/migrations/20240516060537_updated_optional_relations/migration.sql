/*
  Warnings:

  - You are about to drop the column `statusValidationId` on the `statusValidations` table. All the data in the column will be lost.
  - Added the required column `statusValidationId` to the `userValidations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "statusValidations" DROP CONSTRAINT "statusValidations_statusValidationId_fkey";

-- DropForeignKey
ALTER TABLE "userMemberships" DROP CONSTRAINT "userMemberships_userId_fkey";

-- DropForeignKey
ALTER TABLE "userOccupancy" DROP CONSTRAINT "userOccupancy_userId_fkey";

-- DropForeignKey
ALTER TABLE "userValidations" DROP CONSTRAINT "userValidations_userId_fkey";

-- DropForeignKey
ALTER TABLE "validationForms" DROP CONSTRAINT "validationForms_validationFormDataId_fkey";

-- AlterTable
ALTER TABLE "statusValidations" DROP COLUMN "statusValidationId";

-- AlterTable
ALTER TABLE "userMemberships" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "userOccupancy" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "userValidations" ADD COLUMN     "statusValidationId" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "validationForms" ALTER COLUMN "validationFormDataId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "userOccupancy" ADD CONSTRAINT "userOccupancy_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userMemberships" ADD CONSTRAINT "userMemberships_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userValidations" ADD CONSTRAINT "userValidations_statusValidationId_fkey" FOREIGN KEY ("statusValidationId") REFERENCES "statusValidations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userValidations" ADD CONSTRAINT "userValidations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validationForms" ADD CONSTRAINT "validationForms_validationFormDataId_fkey" FOREIGN KEY ("validationFormDataId") REFERENCES "validationFormData"("id") ON DELETE SET NULL ON UPDATE CASCADE;
