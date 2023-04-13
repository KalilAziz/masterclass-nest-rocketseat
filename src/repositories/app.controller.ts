import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateTeamMemberBody } from '../dtos/create-team-member-body';
import { RocketMembersRepository } from './rocket-members-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Get()
  async getMembers(@Body() body: CreateTeamMemberBody) {
    const { id } = body;
    const member = await this.rocketMembersRepository.findById(id);

    return {
      member,
    };
  }

  @Post()
  async createMember(@Body() body: CreateTeamMemberBody) {
    const { name, function: functionMember } = body;

    const member = await this.rocketMembersRepository.create(
      name,
      functionMember,
    );

    return {
      member,
    };
  }
}
