/*
  Warnings:

  - You are about to drop the column `herarchyId` on the `userOccupancy` table. All the data in the column will be lost.
  - You are about to drop the column `positionId` on the `userOccupancy` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "userOccupancy" DROP CONSTRAINT "userOccupancy_herarchyId_fkey";

-- DropForeignKey
ALTER TABLE "userOccupancy" DROP CONSTRAINT "userOccupancy_positionId_fkey";

-- AlterTable
ALTER TABLE "userOccupancy" DROP COLUMN "herarchyId",
DROP COLUMN "positionId";

-- CreateTable
CREATE TABLE "positionsHerarchys" (
    "id" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "hierarchyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "positionsHerarchys_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "positionsHerarchys" ADD CONSTRAINT "positionsHerarchys_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positionsHerarchys" ADD CONSTRAINT "positionsHerarchys_hierarchyId_fkey" FOREIGN KEY ("hierarchyId") REFERENCES "hierarchys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
