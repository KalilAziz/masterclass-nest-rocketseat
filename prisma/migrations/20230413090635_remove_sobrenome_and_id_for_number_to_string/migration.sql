/*
  Warnings:

  - The primary key for the `RocketTeamMember` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sobrenome` on the `RocketTeamMember` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RocketTeamMember" DROP CONSTRAINT "RocketTeamMember_pkey",
DROP COLUMN "sobrenome",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "RocketTeamMember_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RocketTeamMember_id_seq";
