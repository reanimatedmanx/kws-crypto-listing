-- CreateTable
CREATE TABLE "Instruments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "instrument_symbol" TEXT NOT NULL,
    "instrument_name" TEXT NOT NULL,
    "usd_price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
