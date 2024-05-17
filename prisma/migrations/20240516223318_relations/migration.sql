/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `positionsHerarchys` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "positionsHerarchys" ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "positionsHerarchys_userId_key" ON "positionsHerarchys"("userId");

-- AddForeignKey
ALTER TABLE "positionsHerarchys" ADD CONSTRAINT "positionsHerarchys_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
