import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
@WebSocketGateway(9892, { cors: true })
export class EventsGateway {
  @WebSocketServer() server: Server;
  @SubscribeMessage('message')
  handleMessage(client: Socket, data: string) {
    //向除自己以外的人广播
    client.broadcast.emit('message', data);
    console.log(data);

  }
}