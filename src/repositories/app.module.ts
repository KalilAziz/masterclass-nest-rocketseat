import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from '../database/prisma.service';
import { RocketMembersRepository } from './rocket-members-repository';
import { PrismaRocketMembersRepository } from './prisma/prisma-rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ],
})
export class AppModule {}
