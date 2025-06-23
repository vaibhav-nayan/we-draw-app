/*
  Warnings:

  - You are about to drop the `Shapes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Circle" DROP CONSTRAINT "Circle_circleId_fkey";

-- DropForeignKey
ALTER TABLE "Line" DROP CONSTRAINT "Line_lineId_fkey";

-- DropForeignKey
ALTER TABLE "Rect" DROP CONSTRAINT "Rect_rectId_fkey";

-- DropForeignKey
ALTER TABLE "Shapes" DROP CONSTRAINT "Shapes_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Shapes" DROP CONSTRAINT "Shapes_userId_fkey";

-- DropTable
DROP TABLE "Shapes";

-- CreateTable
CREATE TABLE "Shape" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "type" "ShapeType" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Shape_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shape" ADD CONSTRAINT "Shape_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shape" ADD CONSTRAINT "Shape_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rect" ADD CONSTRAINT "Rect_rectId_fkey" FOREIGN KEY ("rectId") REFERENCES "Shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circle" ADD CONSTRAINT "Circle_circleId_fkey" FOREIGN KEY ("circleId") REFERENCES "Shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Line" ADD CONSTRAINT "Line_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "Shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;
