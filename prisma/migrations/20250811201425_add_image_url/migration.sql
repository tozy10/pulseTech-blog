/*
  Warnings:

  - Added the required column `imageUrl` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SCHEMA"."Post" ADD COLUMN     "imageUrl" TEXT NOT NULL;
