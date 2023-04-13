import { RocketTeamMember } from '@prisma/client';

export abstract class RocketMembersRepository {
  abstract create(
    name: string,
    memberFunction: string,
  ): Promise<RocketTeamMember>;
  abstract findById(id: string): Promise<RocketTeamMember>;
}
