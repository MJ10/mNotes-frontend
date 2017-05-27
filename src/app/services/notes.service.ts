import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { WebsocketService } from './websocket.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const API_URL = 'ws://localhost:3000/users/ws';

export interface Message {
  method: string;
  params: any;
}

@Injectable()
export class NotesService {

  private message: Subject<Message> = new Subject<Message>();

  constructor(private ws: WebsocketService) {
    this.message = <Subject<Message>> this.ws
      .connect(API_URL)
      .map((response: MessageEvent): Message => {
        const message = JSON.parse(response.data);
        return {
          method: message.method,
          params: message.params
        };
      });
  }

}
