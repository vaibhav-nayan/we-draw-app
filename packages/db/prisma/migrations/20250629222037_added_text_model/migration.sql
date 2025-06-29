-- CreateTable
CREATE TABLE "Text" (
    "textId" SERIAL NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Text_pkey" PRIMARY KEY ("textId")
);

-- AddForeignKey
ALTER TABLE "Text" ADD CONSTRAINT "Text_textId_fkey" FOREIGN KEY ("textId") REFERENCES "Shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;
