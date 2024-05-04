/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "versions" (
    "id" TEXT NOT NULL,
    "number" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "secondLastname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dateAdmission" TIMESTAMP(3),
    "phone" TEXT,
    "profilePicture" TEXT,
    "loginOption" TEXT NOT NULL,
    "firebaseToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "positions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hierarchys" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hierarchyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hierarchys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "validationForms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "validationFormId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "validationForms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "profileUrl" TEXT NOT NULL,
    "validationFormId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photographs" (
    "id" TEXT NOT NULL,
    "photographUrl" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "validationFormId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "photographs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "headquarters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "headquaerterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "headquarters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "validations" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "statusValidationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "validations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memberships" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cost" DECIMAL(65,30) NOT NULL,
    "userMembershipId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membershipOffers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "percetageOffer" DECIMAL(65,30) NOT NULL,
    "duration" TEXT,
    "dateStart" TIMESTAMP(3),
    "dateEnd" TIMESTAMP(3),
    "membershipsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "membershipOffers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "versions_id_key" ON "versions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "logs_id_key" ON "logs"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "positions_id_key" ON "positions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "positions_positionId_key" ON "positions"("positionId");

-- CreateIndex
CREATE UNIQUE INDEX "hierarchys_id_key" ON "hierarchys"("id");

-- CreateIndex
CREATE UNIQUE INDEX "hierarchys_hierarchyId_key" ON "hierarchys"("hierarchyId");

-- CreateIndex
CREATE UNIQUE INDEX "validationForms_id_key" ON "validationForms"("id");

-- CreateIndex
CREATE UNIQUE INDEX "validationForms_validationFormId_key" ON "validationForms"("validationFormId");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_id_key" ON "profiles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "photographs_id_key" ON "photographs"("id");

-- CreateIndex
CREATE UNIQUE INDEX "photographs_validationFormId_key" ON "photographs"("validationFormId");

-- CreateIndex
CREATE UNIQUE INDEX "headquarters_id_key" ON "headquarters"("id");

-- CreateIndex
CREATE UNIQUE INDEX "headquarters_headquaerterId_key" ON "headquarters"("headquaerterId");

-- CreateIndex
CREATE UNIQUE INDEX "validations_id_key" ON "validations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "validations_statusValidationId_key" ON "validations"("statusValidationId");

-- CreateIndex
CREATE UNIQUE INDEX "memberships_id_key" ON "memberships"("id");

-- CreateIndex
CREATE UNIQUE INDEX "memberships_userMembershipId_key" ON "memberships"("userMembershipId");

-- CreateIndex
CREATE UNIQUE INDEX "membershipOffers_id_key" ON "membershipOffers"("id");

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hierarchys" ADD CONSTRAINT "hierarchys_hierarchyId_fkey" FOREIGN KEY ("hierarchyId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validationForms" ADD CONSTRAINT "validationForms_validationFormId_fkey" FOREIGN KEY ("validationFormId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_validationFormId_fkey" FOREIGN KEY ("validationFormId") REFERENCES "validationForms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photographs" ADD CONSTRAINT "photographs_validationFormId_fkey" FOREIGN KEY ("validationFormId") REFERENCES "validationForms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "headquarters" ADD CONSTRAINT "headquarters_headquaerterId_fkey" FOREIGN KEY ("headquaerterId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validations" ADD CONSTRAINT "validations_statusValidationId_fkey" FOREIGN KEY ("statusValidationId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_userMembershipId_fkey" FOREIGN KEY ("userMembershipId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membershipOffers" ADD CONSTRAINT "membershipOffers_membershipsId_fkey" FOREIGN KEY ("membershipsId") REFERENCES "memberships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
