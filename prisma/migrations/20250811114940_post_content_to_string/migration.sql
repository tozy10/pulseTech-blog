/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SCHEMA"."Post" DROP COLUMN "imageUrl",
ALTER COLUMN "content" SET DATA TYPE TEXT;
