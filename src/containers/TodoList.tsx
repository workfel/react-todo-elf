import TodoContext from '../infrastructure/todo.context.provider';
import { useContext } from 'react';
import TodoItem from '../components/TodoItem';
import { useObservable } from '@ngneat/use-observable';

const TodoList = () => {
  const { repository } = useContext(TodoContext);
  const [todos] = useObservable(repository.todos$);

  const handlerComplete = (id: string) => {
    repository.markAsComplete(id);
  };
  const handleActive = (id: string) => {
    repository.markAsActive(id);
  };
  const handleRemove = (id: string) => {
    repository.removeTodo(id);
  };

  return (
    <div>
      <h2 className="font-semibold uppercase text-xl tracking-wide text-slate-400 mt-8 mb-4">Todo List</h2>
      {todos.map((todo) => (
        <TodoItem todo={todo} onCompleted={handlerComplete} onRemove={handleRemove}
                  onActive={handleActive}
                  key={todo.id}/>
      ))}
    </div>
  );
};

export default TodoList;
