/*
  Warnings:

  - You are about to drop the `Chat` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ShapeType" AS ENUM ('RECT', 'CIRCLE', 'LINE');

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_userId_fkey";

-- DropTable
DROP TABLE "Chat";

-- CreateTable
CREATE TABLE "Shapes" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "type" "ShapeType" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Shapes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rect" (
    "rectId" SERIAL NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "Rect_pkey" PRIMARY KEY ("rectId")
);

-- CreateTable
CREATE TABLE "Circle" (
    "circleId" SERIAL NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "radius" INTEGER NOT NULL,

    CONSTRAINT "Circle_pkey" PRIMARY KEY ("circleId")
);

-- CreateTable
CREATE TABLE "Line" (
    "lineId" SERIAL NOT NULL,
    "x1" INTEGER NOT NULL,
    "y1" INTEGER NOT NULL,
    "x2" INTEGER NOT NULL,
    "y2" INTEGER NOT NULL,

    CONSTRAINT "Line_pkey" PRIMARY KEY ("lineId")
);

-- AddForeignKey
ALTER TABLE "Shapes" ADD CONSTRAINT "Shapes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shapes" ADD CONSTRAINT "Shapes_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rect" ADD CONSTRAINT "Rect_rectId_fkey" FOREIGN KEY ("rectId") REFERENCES "Shapes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circle" ADD CONSTRAINT "Circle_circleId_fkey" FOREIGN KEY ("circleId") REFERENCES "Shapes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Line" ADD CONSTRAINT "Line_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "Shapes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
