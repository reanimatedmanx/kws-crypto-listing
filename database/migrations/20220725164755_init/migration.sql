/*
  Warnings:

  - You are about to drop the `Instruments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Instruments";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Instrument" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "instrument_symbol" TEXT NOT NULL,
    "instrument_name" TEXT NOT NULL,
    "usd_price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
