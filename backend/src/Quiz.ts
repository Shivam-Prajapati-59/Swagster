interface Problem {
  title: string;
  description: string;
  image?: string;
  answer: string;

  option: {
    id: number;
    title: string;
  };
}
export class Quiz {
  private roomId: string;
  private hasStarted: boolean = false;
  private problems: Problem[];

  constructor(roomId: string) {
    this.roomId = roomId;
    this.hasStarted = false;
    this.problems = [];
  }

  addProblem(problem: Problem) {
    this.problems.push(problem);
  }

  start() {
    this.hasStarted = true;
  }
}
