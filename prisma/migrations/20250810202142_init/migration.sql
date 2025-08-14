/*
  Warnings:

  - Added the required column `category` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SCHEMA"."Post" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
