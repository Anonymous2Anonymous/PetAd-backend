import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { EventReplayService } from './services/event-replay.service';
import { AdminQueuesService } from './services/admin-queues.service';
import { PrismaModule } from '../prisma/prisma.module';
import { LoggingModule } from '../logging/logging.module';

@Module({
  imports: [PrismaModule, LoggingModule],
  controllers: [AdminController],
  providers: [EventReplayService, AdminQueuesService],
  exports: [EventReplayService, AdminQueuesService],
})
export class AdminModule {}
