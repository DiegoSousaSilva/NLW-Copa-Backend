-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "cityCode" TEXT NOT NULL,
    "cityName" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "AddressType" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "clientId" TEXT,
    CONSTRAINT "Address_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "documentFile" TEXT NOT NULL,
    "documentFormat" INTEGER NOT NULL,
    "documentName" TEXT NOT NULL,
    "documentType" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "clientId" TEXT,
    CONSTRAINT "Document_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_clientId_key" ON "Address"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "Document_clientId_key" ON "Document"("clientId");
