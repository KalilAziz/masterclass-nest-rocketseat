-- CreateTable
CREATE TABLE "RocketTeamMember" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "function" TEXT NOT NULL,

    CONSTRAINT "RocketTeamMember_pkey" PRIMARY KEY ("id")
);
