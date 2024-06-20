-- DropForeignKey
ALTER TABLE "userValidations" DROP CONSTRAINT "userValidations_statusValidationId_fkey";

-- AlterTable
ALTER TABLE "userValidations" ALTER COLUMN "statusValidationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "userValidations" ADD CONSTRAINT "userValidations_statusValidationId_fkey" FOREIGN KEY ("statusValidationId") REFERENCES "statusValidations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
