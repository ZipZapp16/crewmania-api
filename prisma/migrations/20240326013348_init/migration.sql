-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidoMaterno" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "fechaDeIngreso" TIMESTAMP(3) NOT NULL,
    "puesto" TEXT NOT NULL,
    "jerarquia" TEXT NOT NULL,
    "baseDeOperaciones" TEXT NOT NULL,
    "fotoPerfil" TEXT,
    "fotoConUniforme" TEXT,
    "fotoValidacion" TEXT,
    "cuentaVerificada" BOOLEAN NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);
