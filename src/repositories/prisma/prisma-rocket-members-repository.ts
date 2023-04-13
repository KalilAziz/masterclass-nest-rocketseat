import { PrismaService } from 'src/database/prisma.service';
import { RocketMembersRepository } from '../rocket-members-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, memberFunction: string) {
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        nome: name,
        function: memberFunction,
      },
    });

    return member;
  }

  async findById(id: string) {
    console.log(id);
    const member = await this.prisma.rocketTeamMember.findUnique({
      where: {
        id,
      },
    });

    return member;
  }
}
