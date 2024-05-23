/*
  Warnings:

  - You are about to drop the `validationFormData` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `url` to the `userValidations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "validationForms" DROP CONSTRAINT "validationForms_validationFormDataId_fkey";

-- AlterTable
ALTER TABLE "userValidations" ADD COLUMN     "url" TEXT NOT NULL;

-- DropTable
DROP TABLE "validationFormData";
