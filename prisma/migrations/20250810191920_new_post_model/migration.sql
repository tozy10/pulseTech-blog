/*
  Warnings:

  - Added the required column `description` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SCHEMA"."Post" ADD COLUMN     "description" TEXT NOT NULL,
DROP COLUMN "content",
ADD COLUMN     "content" JSONB NOT NULL;
