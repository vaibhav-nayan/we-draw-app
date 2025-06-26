-- AlterEnum
ALTER TYPE "ShapeType" ADD VALUE 'PENCIL';

-- CreateTable
CREATE TABLE "Pencil" (
    "pencilId" SERIAL NOT NULL,

    CONSTRAINT "Pencil_pkey" PRIMARY KEY ("pencilId")
);

-- CreateTable
CREATE TABLE "PencilPoints" (
    "id" SERIAL NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "shapeId" INTEGER NOT NULL,

    CONSTRAINT "PencilPoints_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pencil" ADD CONSTRAINT "Pencil_pencilId_fkey" FOREIGN KEY ("pencilId") REFERENCES "Shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PencilPoints" ADD CONSTRAINT "PencilPoints_id_fkey" FOREIGN KEY ("id") REFERENCES "Pencil"("pencilId") ON DELETE CASCADE ON UPDATE CASCADE;
