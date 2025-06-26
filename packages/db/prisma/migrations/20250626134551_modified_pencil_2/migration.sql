/*
  Warnings:

  - The primary key for the `Pencil` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pencilId` on the `Pencil` table. All the data in the column will be lost.
  - You are about to drop the `PencilPoints` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pencil" DROP CONSTRAINT "Pencil_pencilId_fkey";

-- DropForeignKey
ALTER TABLE "PencilPoints" DROP CONSTRAINT "PencilPoints_id_fkey";

-- AlterTable
ALTER TABLE "Pencil" DROP CONSTRAINT "Pencil_pkey",
DROP COLUMN "pencilId",
ADD COLUMN     "pencilShapeId" SERIAL NOT NULL,
ADD CONSTRAINT "Pencil_pkey" PRIMARY KEY ("pencilShapeId");

-- DropTable
DROP TABLE "PencilPoints";

-- CreateTable
CREATE TABLE "Point" (
    "pointId" SERIAL NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "order" INTEGER NOT NULL,
    "pencilId" INTEGER NOT NULL,

    CONSTRAINT "Point_pkey" PRIMARY KEY ("pointId")
);

-- AddForeignKey
ALTER TABLE "Pencil" ADD CONSTRAINT "Pencil_pencilShapeId_fkey" FOREIGN KEY ("pencilShapeId") REFERENCES "Shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_pencilId_fkey" FOREIGN KEY ("pencilId") REFERENCES "Pencil"("pencilShapeId") ON DELETE CASCADE ON UPDATE CASCADE;
