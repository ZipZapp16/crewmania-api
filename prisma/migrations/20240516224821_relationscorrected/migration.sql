/*
  Warnings:

  - You are about to drop the column `userId` on the `positionsHerarchys` table. All the data in the column will be lost.
  - Added the required column `positionsHerarchyId` to the `userOccupancy` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "positionsHerarchys" DROP CONSTRAINT "positionsHerarchys_userId_fkey";

-- DropIndex
DROP INDEX "positionsHerarchys_userId_key";

-- AlterTable
ALTER TABLE "positionsHerarchys" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "userOccupancy" ADD COLUMN     "positionsHerarchyId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "userOccupancy" ADD CONSTRAINT "userOccupancy_positionsHerarchyId_fkey" FOREIGN KEY ("positionsHerarchyId") REFERENCES "positionsHerarchys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
