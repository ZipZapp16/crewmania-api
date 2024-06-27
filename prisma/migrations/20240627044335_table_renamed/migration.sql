/*
  Warnings:

  - You are about to drop the `userOccupancy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userOccupancy" DROP CONSTRAINT "userOccupancy_headquarterId_fkey";

-- DropForeignKey
ALTER TABLE "userOccupancy" DROP CONSTRAINT "userOccupancy_positionsHerarchyId_fkey";

-- DropForeignKey
ALTER TABLE "userOccupancy" DROP CONSTRAINT "userOccupancy_userId_fkey";

-- DropTable
DROP TABLE "userOccupancy";

-- CreateTable
CREATE TABLE "userOccupation" (
    "id" TEXT NOT NULL,
    "headquarterId" TEXT NOT NULL,
    "userId" TEXT,
    "positionsHerarchyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userOccupation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userOccupation_id_key" ON "userOccupation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "userOccupation_userId_key" ON "userOccupation"("userId");

-- AddForeignKey
ALTER TABLE "userOccupation" ADD CONSTRAINT "userOccupation_headquarterId_fkey" FOREIGN KEY ("headquarterId") REFERENCES "headquarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userOccupation" ADD CONSTRAINT "userOccupation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userOccupation" ADD CONSTRAINT "userOccupation_positionsHerarchyId_fkey" FOREIGN KEY ("positionsHerarchyId") REFERENCES "positionsHerarchys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
