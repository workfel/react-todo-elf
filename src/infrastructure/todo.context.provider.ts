import { createContext } from 'react';
import { TodoRepository } from '../repository/todo.repository';

export interface TodoContextInterface {
  repository: TodoRepository;
}

export const TodoContext = createContext<TodoContextInterface>({
  repository: {} as TodoRepository
});


export default TodoContext;
