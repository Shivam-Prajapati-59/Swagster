import { Socket } from "socket.io";

export class UserManager {
  private users: {
    roomId: string;
    socket: Socket;
  }[];

  constructor() {
    this.users = [];
  }

  addUser(roomId: string, Socket: Socket) {
    this.users.push({
      roomId,
      socket: Socket,
    });

    this.createHandlers(roomId, Socket);
  }

  private createHandlers(roomId: string, socket: Socket) {
    socket.on("submission", (data) => {
      if (data) {
      }
    });
  }
}
