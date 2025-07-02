import { Quiz } from "../Quiz";
import { IoManager } from "./IoManager";

export class QuizManager {
  private quizzes: Quiz[];
  constructor() {
    // Initialize any necessary properties or state
    this.quizzes = [];
  }

  public start(roomId: string) {
    const io = IoManager.getIo();
    const quiz = this.quizzes.find((x) => x.roomId === roomId);
    quiz.start();
  }
  public next(roomId: string) {
    const io = IoManager.getIo();
    io.to(roomId).emit({
      type: "START ROOM",
    });
  }
}
