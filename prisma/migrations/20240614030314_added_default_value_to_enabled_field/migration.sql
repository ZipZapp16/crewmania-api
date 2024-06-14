-- AlterTable
ALTER TABLE "headquarters" ALTER COLUMN "enabled" SET DEFAULT true;

-- AlterTable
ALTER TABLE "hierarchys" ALTER COLUMN "enabled" SET DEFAULT true;

-- AlterTable
ALTER TABLE "memberships" ALTER COLUMN "enabled" SET DEFAULT true;

-- AlterTable
ALTER TABLE "offers" ALTER COLUMN "enabled" SET DEFAULT true;

-- AlterTable
ALTER TABLE "positions" ALTER COLUMN "enabled" SET DEFAULT true;

-- AlterTable
ALTER TABLE "positionsHerarchys" ALTER COLUMN "enabled" SET DEFAULT true;

-- AlterTable
ALTER TABLE "userMemberships" ALTER COLUMN "enabled" SET DEFAULT true;

-- AlterTable
ALTER TABLE "userValidations" ALTER COLUMN "enabled" SET DEFAULT true;
