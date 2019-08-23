import { Todo } from './todo';
export class TodoServer<Todo> {
  map<T>(arg0: (obj: any) => Todo) {
    throw new Error("Method not implemented.");
  }
  id: number;
  description: string;
  completed: boolean;
  dueDate: Date;
  endDate: Date;
  createdat: Date;
}
