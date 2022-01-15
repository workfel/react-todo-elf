import { useRef } from 'react';

const AddTodo = ({ onAdd }: { onAdd: (name: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const todoValue = inputRef.current?.value as string;
    inputRef.current!.value = '';
    if (todoValue) {
      onAdd(todoValue);
    }
  };

  return (
    <div className="">
      <form className="flex mt-4" onSubmit={submitHandler}>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-slate-900"
               placeholder="Add Todo"
               ref={inputRef}/>
        <button
          className="flex-no-shrink p-2 border-2 rounded-full border-green-500 bg-green-500 hover:text-white hover:bg-green-600 fill-white hover:fill-green-300"
          type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="24" height="24"
               viewBox="0 0 24 24">
            <path fill-rule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
