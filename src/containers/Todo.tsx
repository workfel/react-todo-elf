import VisibilityFilter from '../components/VisibilityFilter';
import TodoList from './TodoList';
import AddTodo from '../components/AddTodo';
import { useContext } from 'react';
import TodoContext from '../infrastructure/todo.context.provider';
import { VisibilityFilterProps } from '../repository/todo.repository';

const Todo = () => {
  const { repository } = useContext(TodoContext);

  const handleVisibility = ((filter: VisibilityFilterProps['filter']) => {
    repository.updateFilter(filter);
  });
  const handleAddTodo = ((text: string) => {
    repository.addTodo(text);
  });

  return <div className="container mx-auto p-8 flex flex-col grow h-full">
    <div className="flex flex-col grow">
      <h1 className="text-4xl font-semibold mt-8 mb-8">
        All tasks
      </h1>
      <h2 className="font-semibold uppercase text-xl tracking-wide text-slate-400 mt-8 mb-4">
        Filters
      </h2>
      <VisibilityFilter onChange={handleVisibility}/>
      <TodoList/>
    </div>
    <div>
      <AddTodo onAdd={handleAddTodo}/>
    </div>
  </div>;
};

export default Todo;
