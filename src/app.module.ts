import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { SocketTestModule } from './socket-test/socket-test.module';
import { EventsGateway } from './events/events.gateway';

@Module({
  // imports: [SocketTestModule],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule { }
